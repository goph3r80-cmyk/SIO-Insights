"""Downloadable reports: CSV + XLSX per dataset, and the monthly MD/PDF report."""
from __future__ import annotations

import csv
import json
from datetime import datetime, timezone
from pathlib import Path

from .db import data_dir, get_setting
from .portfolio import (allocation, data_quality, holdings, income,
                        load_transactions, summary)
from .reconcile import reconciliation, render_markdown


def reports_dir() -> Path:
    d = data_dir() / "reports"
    d.mkdir(parents=True, exist_ok=True)
    return d


def _write_csv(path: Path, headers: list[str], rows: list[list]) -> Path:
    with open(path, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(headers)
        w.writerows(rows)
    return path


def _write_xlsx(path: Path, sheets: dict[str, tuple[list[str], list[list]]]) -> Path:
    from openpyxl import Workbook
    wb = Workbook()
    wb.remove(wb.active)
    for name, (headers, rows) in sheets.items():
        ws = wb.create_sheet(name[:31])
        ws.append(headers)
        for r in rows:
            ws.append(r)
    wb.save(path)
    return path


def _round(v, n=2):
    return round(v, n) if isinstance(v, float) else v


DATASETS = {}


def dataset(name):
    def wrap(fn):
        DATASETS[name] = fn
        return fn
    return wrap


@dataset("holdings")
def _holdings(conn):
    hs = holdings(conn)
    headers = ["ticker", "exchange", "name", "account", "status", "quantity",
               "avg_cost", "currency", "price", "price_date", "price_source",
               "price_stale", "market_value_local", "market_value_base",
               "weight_pct", "unrealised_base", "realised_base",
               "dividends_local", "total_return_local", "return_pct_local"]
    return headers, [[_round(h.get(k)) for k in headers] for h in hs]


@dataset("transactions")
def _transactions(conn):
    txns = load_transactions(conn, include_staged=True)
    headers = ["id", "trade_date", "type", "security_id", "account_id", "quantity",
               "price", "gross_amount", "fees", "tax", "currency",
               "fx_rate_to_base", "status", "source", "verification_status", "note"]
    return headers, [[t.get(k) for k in headers] for t in txns]


@dataset("realised")
def _realised(conn):
    hs = holdings(conn)
    headers = ["ticker", "exchange", "account", "realised_local", "realised_base",
               "fees_local", "currency"]
    rows = [[h["ticker"], h["exchange"], h["account"], _round(h["realised_local"]),
             _round(h["realised_base"]), _round(h["fees_local"]), h["currency"]]
            for h in hs if abs(h["realised_local"]) > 1e-9]
    return headers, rows


@dataset("unrealised")
def _unrealised(conn):
    hs = holdings(conn)
    headers = ["ticker", "exchange", "account", "quantity", "avg_cost", "price",
               "unrealised_local", "unrealised_security_base",
               "unrealised_fx_base", "unrealised_base", "currency"]
    rows = [[h["ticker"], h["exchange"], h["account"], _round(h["quantity"], 4),
             _round(h["avg_cost"]), h["price"], _round(h["unrealised_local"]),
             _round(h["unrealised_security_base"]), _round(h["unrealised_fx_base"]),
             _round(h["unrealised_base"]), h["currency"]]
            for h in hs if h["quantity"] > 1e-9]
    return headers, rows


@dataset("dividends")
def _dividends(conn):
    inc = income(conn)
    headers = ["month", "gross", "withholding_tax", "net"]
    rows = [[m["month"], _round(m["gross"]), _round(m["tax"]), _round(m["net"])]
            for m in inc["by_month"]]
    return headers, rows


@dataset("reconciliation")
def _reconciliation(conn):
    rec = reconciliation(conn)
    headers = ["counter", "ticker", "exchange", "prior_indication",
               "broker_quantity", "calculated_quantity", "status", "issue"]
    return headers, [[r.get(k) for k in headers] for r in rec["holdings_table"]]


@dataset("allocation")
def _allocation(conn):
    alloc = allocation(conn)
    headers = ["dimension", "label", "value_base", "pct"]
    rows = [[dim, g["label"], _round(g["value"]), _round(g["pct"])]
            for dim, groups in alloc.items() for g in groups]
    return headers, rows


@dataset("snapshots")
def _snapshots(conn):
    rows = [dict(r) for r in conn.execute(
        "SELECT * FROM snapshots ORDER BY snapshot_date")]
    headers = ["snapshot_date", "total_value", "cash_value", "invested",
               "unrealised", "realised", "income", "base_currency"]
    return headers, [[r.get(k) for k in headers] for r in rows]


@dataset("data_quality")
def _dq(conn):
    dq = data_quality(conn)
    rows = []
    for s in dq["unresolved_instruments"]:
        rows.append(["unresolved_instrument", f"{s['ticker']}.{s['exchange']}", ""])
    for h in dq["missing_prices"]:
        rows.append(["missing_price", h["ticker"], ""])
    for h in dq["stale_prices"]:
        rows.append(["stale_price", h["ticker"], h["price_date"]])
    for c in dq["missing_fx"]:
        rows.append(["missing_fx", c, ""])
    for d in dq["possible_duplicates"]:
        rows.append(["possible_duplicate", d["ids"], ""])
    for h in dq["negative_holdings"]:
        rows.append(["negative_holding", h["ticker"], h["quantity"]])
    for t in dq["staged_transactions"]:
        rows.append(["staged_transaction", t["id"], t["trade_date"]])
    return ["issue_type", "subject", "detail"], rows


def export(conn, name: str, fmt: str = "csv") -> Path:
    if name not in DATASETS:
        raise ValueError(f"unknown report '{name}'; available: {sorted(DATASETS)}")
    headers, rows = DATASETS[name](conn)
    ts = datetime.now(timezone.utc).strftime("%Y%m%d")
    if fmt == "xlsx":
        return _write_xlsx(reports_dir() / f"{name}-{ts}.xlsx",
                           {name: (headers, rows)})
    return _write_csv(reports_dir() / f"{name}-{ts}.csv", headers, rows)


def export_all(conn) -> list[Path]:
    return [export(conn, name, fmt)
            for name in DATASETS for fmt in ("csv", "xlsx")]


def monthly_report(conn, month: str) -> tuple[Path, Path]:
    """Concise monthly report as Markdown + PDF. month: 'YYYY-MM'."""
    s = summary(conn)
    hs = [h for h in holdings(conn)
          if h["status"] in ("confirmed_current", "provisional_current")]
    inc = income(conn)
    month_income = next((m for m in inc["by_month"] if m["month"] == month),
                        {"gross": 0, "tax": 0, "net": 0})
    snap = [dict(r) for r in conn.execute(
        "SELECT * FROM snapshots WHERE snapshot_date LIKE ? "
        "ORDER BY snapshot_date", (month + "%",))]
    base = s["base_currency"]

    md = [f"# Portfolio report — {month}\n",
          f"_Base currency: {base}. Cost basis: {s['cost_basis_method']}. "
          f"Generated {datetime.now(timezone.utc).isoformat(timespec='seconds')}._\n",
          "## Summary\n",
          f"- Total value: {s['total_value']:,.2f} {base}"
          + (" (includes provisional holdings — see warnings)" if s["provisional_count"] else ""),
          f"- Invested capital: {s['invested_capital']:,.2f} {base}",
          f"- Unrealised P/L: {s['unrealised']:,.2f} {base}",
          f"- Realised P/L: {s['realised']:,.2f} {base}",
          f"- Dividends (lifetime, net of WHT): {s['dividends']:,.2f} {base}",
          f"- Cash: {s['cash']:,.2f} {base}",
          f"- Holdings: {s['holdings_count']}",
          f"\n## Income in {month}\n",
          f"- Gross dividends: {month_income['gross']:,.2f} {base}",
          f"- Withholding tax: {month_income['tax']:,.2f} {base}",
          f"- Net: {month_income['net']:,.2f} {base}",
          "\n## Holdings\n",
          "| Ticker | Qty | Avg cost | Price | Value (base) | Weight | Status |",
          "|---|---:|---:|---:|---:|---:|---|"]
    for h in hs:
        if h["quantity"] <= 1e-9:
            continue
        md.append(f"| {h['ticker']}.{h['exchange']} | {h['quantity']:g} | "
                  f"{h['avg_cost']:.2f} | {h['price'] if h['price'] is not None else '—'} | "
                  f"{(h['market_value_base'] or 0):,.2f} | "
                  f"{(h['weight_pct'] or 0):.1f}% | {h['status']} |")
    if snap:
        md += ["\n## Month value snapshots\n",
               "| Date | Total | Cash |", "|---|---:|---:|"]
        md += [f"| {x['snapshot_date']} | {x['total_value']:,.2f} | "
               f"{x['cash_value']:,.2f} |" for x in snap]
    if s["warnings"]:
        md.append("\n## Warnings\n")
        md += [f"- ⚠️ {w}" for w in s["warnings"]]
    md_text = "\n".join(md) + "\n"

    out_md = reports_dir() / f"monthly-{month}.md"
    out_md.write_text(md_text)
    out_pdf = reports_dir() / f"monthly-{month}.pdf"
    _md_to_pdf(md_text, out_pdf)
    return out_md, out_pdf


def _md_to_pdf(md_text: str, path: Path) -> None:
    from fpdf import FPDF
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Helvetica", size=9)

    def cell(height, text):
        pdf.multi_cell(0, height, text, new_x="LMARGIN", new_y="NEXT")

    for line in md_text.splitlines():
        # core PDF fonts are latin-1 only; degrade unsupported characters
        line = (line.replace("⚠️", "[!]").replace("—", "-").replace("–", "-")
                .encode("latin-1", "replace").decode("latin-1"))
        if line.startswith("# "):
            pdf.set_font("Helvetica", "B", 15)
            cell(8, line[2:])
            pdf.set_font("Helvetica", size=9)
        elif line.startswith("## "):
            pdf.set_font("Helvetica", "B", 12)
            cell(7, line[3:])
            pdf.set_font("Helvetica", size=9)
        else:
            cell(5, line.replace("**", "").replace("_", ""))
    pdf.output(str(path))


def reconciliation_files(conn) -> tuple[Path, Path]:
    rec = reconciliation(conn)
    md = render_markdown(rec)
    ts = datetime.now(timezone.utc).strftime("%Y%m%d")
    out_md = reports_dir() / f"reconciliation-{ts}.md"
    out_md.write_text(md)
    out_json = reports_dir() / f"reconciliation-{ts}.json"
    out_json.write_text(json.dumps(rec, indent=2, default=str))
    return out_md, out_json
