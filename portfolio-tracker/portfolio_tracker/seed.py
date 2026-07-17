"""Seed the database from seed/known_context.json (owner-supplied context).

Nothing here becomes a confirmed holding: securities are provisional or
watchlist, the MU purchase stays a STAGED transaction requiring statement
reconciliation, and the 2012 Singapore counters land in the
historical-reconciliation table only (never in current portfolio value).
"""
from __future__ import annotations

import json
from pathlib import Path

from .db import audit, utcnow

SEED_FILE = Path(__file__).parent.parent / "seed" / "known_context.json"


def seed_known_context(conn, seed_file: Path | None = None) -> dict:
    data = json.loads(Path(seed_file or SEED_FILE).read_text())
    if conn.execute("SELECT value FROM settings WHERE key='seeded'").fetchone():
        return {"skipped": "already seeded"}

    marking = data.get("provisional_marking", {})
    counts = {"provisional": 0, "watchlist": 0, "staged": 0, "historical": 0}

    for s in data.get("provisional_securities", []):
        conn.execute(
            "INSERT OR IGNORE INTO securities (ticker, exchange, name, asset_type,"
            " currency, country, status, source_status, verification_status,"
            " portfolio_value_inclusion, created_at) VALUES (?,?,?,?,?,?,?,?,?,1,?)",
            (s["ticker"], s["exchange"], s.get("name"), s.get("asset_type", "equity"),
             s.get("currency"), s.get("country"),
             marking.get("status", "provisional_current"),
             marking.get("source_status"), marking.get("verification_status"),
             utcnow()))
        counts["provisional"] += 1

    for s in data.get("watchlist", []):
        conn.execute(
            "INSERT OR IGNORE INTO securities (ticker, exchange, name, currency,"
            " country, status, source_status, portfolio_value_inclusion, created_at)"
            " VALUES (?,?,?,?,?,?,?,0,?)",
            (s["ticker"], s["exchange"], s.get("name"), s.get("currency"),
             s.get("country"), "watchlist_only", "research_discussion", utcnow()))
        counts["watchlist"] += 1

    for t in data.get("staged_transactions", []):
        conn.execute(
            "INSERT OR IGNORE INTO securities (ticker, exchange, name, currency,"
            " status, source_status, verification_status, portfolio_value_inclusion,"
            " created_at) VALUES (?,?,?,?,?,?,?,0,?)",
            (t["ticker"], t["exchange"], t.get("name"), t.get("currency"),
             "unresolved", t.get("source_status"), t.get("verification_status"),
             utcnow()))
        sec = conn.execute("SELECT id FROM securities WHERE ticker=? AND exchange=?",
                           (t["ticker"], t["exchange"])).fetchone()
        conn.execute(
            "INSERT INTO transactions (security_id, type, trade_date, quantity,"
            " price, gross_amount, fees, currency, note, source, source_status,"
            " verification_status, status, raw_record, created_at)"
            " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            (sec["id"], t["type"], t["date"], t.get("quantity"), t.get("price"),
             (t.get("quantity") or 0) * (t.get("price") or 0),
             t.get("fees") or 0, t.get("currency"), t.get("note"), "seed",
             t.get("source_status"), t.get("verification_status"),
             "staged",  # staged: excluded from holdings until reconciled
             json.dumps(t), utcnow()))
        counts["staged"] += 1

    for h in data.get("historical_2012", []):
        conn.execute(
            "INSERT INTO historical_reconciliation (historical_code, counter_name,"
            " historical_quantity, current_holding_confirmed, notes, as_of)"
            " VALUES (?,?,?,?,?,?)",
            (h["code"], h["name"], h["quantity"], "unconfirmed",
             "Historical 2012 position. Excluded from current portfolio value, "
             "allocation, income and performance unless recent evidence confirms "
             "the holding remains open. Corporate actions/delistings to be "
             "investigated before historical performance is calculated.",
             "2012-12-31"))
        counts["historical"] += 1

    conn.execute("INSERT INTO settings (key, value, updated_at) VALUES "
                 "('seeded','1',?)", (utcnow(),))
    conn.commit()
    audit(conn, "seed.known_context", counts)
    return counts
