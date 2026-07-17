"""Reusable import framework.

Every import: preserves the original file, hashes it, refuses silent
re-imports, parses into a staging table, prints a validation summary,
commits only clean rows automatically (questionable rows need explicit
confirmation) and writes an audit log. Committing is idempotent — a
transaction with the same dedupe hash is never inserted twice.
"""
from __future__ import annotations

import json
import shutil
import sqlite3
from dataclasses import dataclass, field
from pathlib import Path

from ..core import TRANSACTION_TYPES, dedupe_hash, file_sha256, mask_reference
from ..db import audit, data_dir, utcnow


@dataclass
class ParsedRow:
    row_number: int
    raw: dict
    norm: dict = field(default_factory=dict)
    errors: list[str] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)

    @property
    def status(self) -> str:
        if self.errors:
            return "rejected"
        return "warning" if self.warnings else "ok"


class ImportAdapter:
    """Subclass per file format. parse() yields ParsedRow with normalised fields:
    date, type, ticker, exchange, name, quantity, price, gross_amount, fees,
    tax, currency, account_broker, account_name, account_reference, note,
    lot_id, split_ratio, external_id."""
    name = "base"

    def sniff(self, path: Path) -> bool:
        return False

    def parse(self, path: Path) -> list[ParsedRow]:
        raise NotImplementedError


def validate_row(row: ParsedRow, base_currency: str) -> None:
    n = row.norm
    t = (n.get("type") or "").strip().lower().replace(" ", "_")
    n["type"] = t
    if t not in TRANSACTION_TYPES:
        row.errors.append(f"unknown transaction type '{t}'")
    if not n.get("date"):
        row.errors.append("missing date")
    if not n.get("currency"):
        row.warnings.append(f"missing currency; base currency {base_currency} assumed")
        n["currency"] = base_currency
    needs_security = t in ("buy", "sell", "dividend", "transfer_in", "transfer_out",
                           "split", "reverse_split", "opening_position",
                           "rights_issue", "spin_off", "merger", "return_of_capital",
                           "withholding_tax")
    if needs_security and not n.get("ticker"):
        row.errors.append(f"'{t}' requires a ticker")
    if needs_security and n.get("ticker") and not n.get("exchange"):
        row.warnings.append("missing exchange — ticker alone does not uniquely "
                            "identify a security; recorded as UNKNOWN")
        n["exchange"] = "UNKNOWN"
    if t in ("buy", "sell", "transfer_in", "transfer_out", "opening_position"):
        if not n.get("quantity"):
            row.errors.append(f"'{t}' requires a quantity")
        if t in ("buy", "opening_position") and n.get("price") in (None, ""):
            row.warnings.append("missing purchase price")
    if t in ("split", "reverse_split") and not n.get("split_ratio"):
        row.errors.append(f"'{t}' requires split_ratio")
    for f in ("quantity", "price", "gross_amount", "fees", "tax", "split_ratio"):
        v = n.get(f)
        if v not in (None, ""):
            try:
                n[f] = float(v)
                if f in ("quantity", "price") and n[f] < 0:
                    row.warnings.append(f"negative {f}")
            except (TypeError, ValueError):
                row.errors.append(f"'{f}' is not a number: {v!r}")


def _ensure_account(conn, broker: str, name: str, currency: str,
                    reference: str | None = None) -> int:
    row = conn.execute("SELECT id FROM accounts WHERE broker=? AND name=?",
                       (broker, name)).fetchone()
    if row:
        return row["id"]
    cur = conn.execute(
        "INSERT INTO accounts (broker, name, currency, masked_reference, created_at)"
        " VALUES (?,?,?,?,?)",
        (broker, name, currency, mask_reference(reference), utcnow()))
    return cur.lastrowid


def _ensure_security(conn, ticker: str, exchange: str, name: str | None,
                     currency: str | None) -> int:
    ticker, exchange = ticker.upper().strip(), (exchange or "UNKNOWN").upper().strip()
    row = conn.execute("SELECT id FROM securities WHERE ticker=? AND exchange=?",
                       (ticker, exchange)).fetchone()
    if row:
        return row["id"]
    cur = conn.execute(
        "INSERT INTO securities (ticker, exchange, name, currency, status,"
        " source_status, created_at) VALUES (?,?,?,?,?,?,?)",
        (ticker, exchange, name, currency, "unresolved", "imported", utcnow()))
    return cur.lastrowid


def stage_file(conn: sqlite3.Connection, path: Path, adapter: ImportAdapter,
               base_currency: str) -> dict:
    """Steps 1-6: preserve, hash, duplicate-check, parse, stage, summarise."""
    path = Path(path)
    sha = file_sha256(path)
    dup = conn.execute("SELECT * FROM import_files WHERE sha256=?", (sha,)).fetchone()
    if dup:
        audit(conn, "import.duplicate_file",
              {"file": path.name, "sha256": sha, "first_import_id": dup["id"]})
        return {"duplicate": True, "import_id": dup["id"], "sha256": sha,
                "message": f"file already imported on {dup['imported_at']} "
                           f"(import #{dup['id']}); nothing staged"}
    originals = data_dir() / "imports"
    originals.mkdir(parents=True, exist_ok=True)
    stored = originals / f"{sha[:12]}-{path.name}"
    shutil.copy2(path, stored)

    rows = adapter.parse(path)
    for r in rows:
        validate_row(r, base_currency)

    cur = conn.execute(
        "INSERT INTO import_files (filename, stored_path, sha256, adapter,"
        " imported_at, row_count, status) VALUES (?,?,?,?,?,?,'staged')",
        (path.name, str(stored), sha, adapter.name, utcnow(), len(rows)))
    import_id = cur.lastrowid
    for r in rows:
        conn.execute(
            "INSERT INTO staging_transactions (import_file_id, row_number,"
            " raw_record, parsed_json, validation_status, validation_messages,"
            " created_at) VALUES (?,?,?,?,?,?,?)",
            (import_id, r.row_number, json.dumps(r.raw, default=str),
             json.dumps(r.norm, default=str), r.status,
             json.dumps(r.errors + r.warnings), utcnow()))
    conn.commit()
    summary = {
        "duplicate": False, "import_id": import_id, "sha256": sha,
        "total": len(rows),
        "ok": sum(1 for r in rows if r.status == "ok"),
        "warning": sum(1 for r in rows if r.status == "warning"),
        "rejected": sum(1 for r in rows if r.status == "rejected"),
        "rows": rows,
    }
    audit(conn, "import.staged", {k: v for k, v in summary.items() if k != "rows"})
    return summary


def commit_staged(conn: sqlite3.Connection, import_id: int, base_currency: str,
                  include_warnings: bool = False,
                  default_broker: str = "UNSPECIFIED",
                  default_account: str = "default",
                  fx_lookup=None) -> dict:
    """Step 7: move staged rows into transactions, idempotently."""
    staged = conn.execute(
        "SELECT * FROM staging_transactions WHERE import_file_id=? "
        "AND resolution='pending'", (import_id,)).fetchall()
    committed = skipped = duplicates = 0
    for s in staged:
        if s["validation_status"] == "rejected" or (
                s["validation_status"] == "warning" and not include_warnings):
            conn.execute("UPDATE staging_transactions SET resolution='skipped' "
                         "WHERE id=?", (s["id"],))
            skipped += 1
            continue
        n = json.loads(s["parsed_json"])
        account_id = _ensure_account(
            conn, n.get("account_broker") or default_broker,
            n.get("account_name") or default_account,
            n.get("currency") or base_currency, n.get("account_reference"))
        security_id = None
        if n.get("ticker"):
            security_id = _ensure_security(conn, n["ticker"], n.get("exchange"),
                                           n.get("name"), n.get("currency"))
        dh = dedupe_hash(account_id, (n.get("ticker") or "").upper(),
                         (n.get("exchange") or "").upper(), n["type"], n["date"],
                         n.get("quantity"), n.get("price"), n.get("gross_amount"),
                         n.get("currency"))
        exists = conn.execute(
            "SELECT id FROM transactions WHERE dedupe_hash=? AND status!='void'",
            (dh,)).fetchone()
        if exists or (n.get("external_id") and conn.execute(
                "SELECT id FROM transactions WHERE external_id=? AND status!='void'",
                (n["external_id"],)).fetchone()):
            conn.execute("UPDATE staging_transactions SET resolution='skipped', "
                         "validation_messages=json_insert(COALESCE(validation_messages,'[]'),"
                         " '$[#]', 'duplicate of existing transaction') WHERE id=?",
                         (s["id"],))
            duplicates += 1
            continue
        fx = None
        if fx_lookup:
            fx = fx_lookup(n.get("currency") or base_currency, n["date"])
        conn.execute(
            "INSERT INTO transactions (account_id, security_id, type, trade_date,"
            " settle_date, quantity, price, gross_amount, fees, tax, currency,"
            " fx_rate_to_base, split_ratio, lot_id, note, source, source_status,"
            " verification_status, status, import_file_id, staging_id, raw_record,"
            " external_id, dedupe_hash, created_at)"
            " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            (account_id, security_id, n["type"], n["date"], n.get("settle_date"),
             n.get("quantity"), n.get("price"), n.get("gross_amount"),
             n.get("fees") or 0, n.get("tax") or 0, n.get("currency") or base_currency,
             fx, n.get("split_ratio"), n.get("lot_id"), n.get("note"),
             "import", "imported", "imported", "confirmed", import_id, s["id"],
             s["raw_record"], n.get("external_id"), dh, utcnow()))
        conn.execute("UPDATE staging_transactions SET resolution='committed' "
                     "WHERE id=?", (s["id"],))
        committed += 1
    conn.execute(
        "UPDATE import_files SET status='committed', committed_count=?,"
        " rejected_count=? WHERE id=?", (committed, skipped, import_id))
    conn.commit()
    result = {"import_id": import_id, "committed": committed,
              "skipped": skipped, "duplicates": duplicates}
    audit(conn, "import.committed", result)
    return result
