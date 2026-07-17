"""Reconciliation report: accounts, securities, duplicates, gaps, and the
holdings-confirmation table (prior indication vs broker vs calculated)."""
from __future__ import annotations

import json

from .calc.positions import build_positions
from .portfolio import config, data_quality, load_transactions


def reconciliation(conn) -> dict:
    cfg = config(conn)
    dq = data_quality(conn)
    accounts = [dict(r) for r in conn.execute("SELECT * FROM accounts")]
    securities = [dict(r) for r in conn.execute(
        "SELECT * FROM securities ORDER BY status, ticker")]
    txns = load_transactions(conn)
    positions = build_positions(txns, method=cfg["cost_basis_method"],
                                by_account=False)
    calc_qty = {sid: p.quantity for (_, sid), p in positions.items()}

    def _issue(sec) -> str:
        issues = []
        sid = sec["id"]
        if sec["status"] == "provisional_current" and sid not in calc_qty:
            issues.append("no transaction evidence; quantity unknown — provide "
                          "broker statement/export")
        if sec["verification_status"] and "await" in (sec["verification_status"] or ""):
            issues.append("awaiting latest broker statement")
        staged = conn.execute(
            "SELECT COUNT(*) c FROM transactions WHERE security_id=? AND "
            "status='staged'", (sid,)).fetchone()["c"]
        if staged:
            issues.append(f"{staged} staged transaction(s) require reconciliation")
        if sec["exchange"] == "UNKNOWN":
            issues.append("exchange unknown")
        return "; ".join(issues) or "-"

    rows = []
    for sec in securities:
        if sec["status"] == "watchlist_only":
            continue
        if sec["status"] == "historical":
            continue
        rows.append({
            "counter": sec["name"] or sec["ticker"],
            "ticker": sec["ticker"],
            "exchange": sec["exchange"],
            "prior_indication": sec["source_status"] or "-",
            "broker_quantity": None,   # populated when a statement is imported
            "calculated_quantity": calc_qty.get(sec["id"]),
            "status": sec["status"],
            "issue": _issue(sec),
        })

    historical = [dict(r) for r in conn.execute(
        "SELECT * FROM historical_reconciliation ORDER BY historical_code")]
    watchlist = [dict(r) for r in conn.execute(
        "SELECT * FROM securities WHERE status='watchlist_only' ORDER BY ticker")]

    blocking = []
    for t in dq["staged_transactions"]:
        blocking.append(
            f"staged {t['type']} {t.get('quantity')} @ {t.get('price')} "
            f"{t.get('currency')} on {t['trade_date']} — "
            f"{t.get('verification_status') or 'needs review'}")
    for d in dq["possible_duplicates"]:
        blocking.append(f"possible duplicate transactions ids={d['ids']}")
    for h in dq["negative_holdings"]:
        blocking.append(f"negative holding {h['ticker']}: {h['quantity']}")

    return {
        "accounts": accounts,
        "securities": securities,
        "holdings_table": rows,
        "historical": historical,
        "watchlist": watchlist,
        "duplicates": dq["possible_duplicates"],
        "missing_exchange": dq["missing_exchange"],
        "unmatched_corporate_actions": dq["unconfirmed_corporate_actions"],
        "inconsistent_quantities": dq["reconciliation_issues"],
        "missing_prices": [h["ticker"] for h in dq["missing_prices"]],
        "missing_fx": dq["missing_fx"],
        "staged_transactions": dq["staged_transactions"],
        "requires_confirmation": [r for r in rows if r["issue"] != "-"],
        "material_issues": blocking,
    }


def render_markdown(rec: dict) -> str:
    L = []
    L.append("# Portfolio reconciliation report\n")
    L.append("## Detected accounts\n")
    if rec["accounts"]:
        for a in rec["accounts"]:
            L.append(f"- {a['broker']} / {a['name']} ({a['currency']}, "
                     f"ref {a['masked_reference'] or 'n/a'})")
    else:
        L.append("_No accounts detected yet — no brokerage exports imported._")
    L.append("\n## Holdings requiring confirmation\n")
    L.append("| Counter | Ticker | Prior indication | Latest broker quantity | "
             "Calculated quantity | Status | Issue |")
    L.append("|---|---|---|---:|---:|---|---|")
    for r in rec["holdings_table"]:
        broker_q = "—" if r["broker_quantity"] is None else f"{r['broker_quantity']:g}"
        calc_q = "—" if r["calculated_quantity"] is None else f"{r['calculated_quantity']:g}"
        L.append(f"| {r['counter']} | {r['ticker']} | {r['prior_indication']} | "
                 f"{broker_q} | {calc_q} | {r['status']} | {r['issue']} |")
    L.append("\n## Historical positions (2012 Singapore) — excluded from current totals\n")
    L.append("| Code | Counter | Historical qty | Successor / delisted | Confirmed open? | Notes |")
    L.append("|---|---|---:|---|---|---|")
    for h in rec["historical"]:
        L.append(f"| {h['historical_code']} | {h['counter_name']} | "
                 f"{h['historical_quantity']:g} | "
                 f"{h['successor_security'] or h['delisted_status'] or 'uninvestigated'} | "
                 f"{h['current_holding_confirmed']} | {(h['notes'] or '')[:80]}… |")
    L.append("\n## Watchlist (research only — never counted as owned)\n")
    for w in rec["watchlist"]:
        L.append(f"- {w['name']} ({w['ticker']}.{w['exchange']}) — "
                 "position_status=watchlist_only, portfolio_value_inclusion=false")
    L.append("\n## Staged transactions awaiting reconciliation\n")
    if rec["staged_transactions"]:
        for t in rec["staged_transactions"]:
            raw = json.loads(t["raw_record"]) if t.get("raw_record") else {}
            L.append(f"- **{raw.get('ticker', '?')}** {t['type']} "
                     f"{t.get('quantity'):g} @ {t.get('price')} {t['currency']} "
                     f"on {t['trade_date']} (fees {t.get('fees')}) — "
                     f"{t.get('verification_status')}. {t.get('note') or ''}")
    else:
        L.append("_None._")
    L.append("\n## Data gaps\n")
    L.append(f"- Duplicate transactions: {len(rec['duplicates'])}")
    L.append(f"- Missing exchange: {[s['ticker'] for s in rec['missing_exchange']] or 'none'}")
    L.append(f"- Unmatched corporate actions: {len(rec['unmatched_corporate_actions'])}")
    L.append(f"- Inconsistent quantities: {rec['inconsistent_quantities'] or 'none'}")
    L.append(f"- Missing prices: {rec['missing_prices'] or 'none'}")
    L.append(f"- Missing FX rates: {rec['missing_fx'] or 'none'}")
    if rec["material_issues"]:
        L.append("\n## Unresolved issues that materially affect calculations\n")
        for issue in rec["material_issues"]:
            L.append(f"- ⚠️ {issue}")
    return "\n".join(L) + "\n"
