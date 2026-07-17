"""Configurable local alerts. Rules live in alert_rules (kind + JSON params);
triggered events land in alert_events and the dashboard. Email is optional
and off by default (SMTP_* in .env)."""
from __future__ import annotations

import json
import os
import smtplib
from datetime import datetime, timedelta, timezone
from email.message import EmailMessage

from .db import audit, utcnow
from .portfolio import data_quality, holdings, summary

KINDS = ("price_above", "price_below", "daily_move_pct", "allocation_limit_pct",
         "stale_data", "dividend_announcement", "dividend_payment",
         "import_issue", "missing_price", "unusual_transaction",
         "statement_overdue_days")


def add_rule(conn, kind: str, **params) -> int:
    if kind not in KINDS:
        raise ValueError(f"unknown alert kind '{kind}'; available: {KINDS}")
    cur = conn.execute(
        "INSERT INTO alert_rules (kind, params_json, created_at) VALUES (?,?,?)",
        (kind, json.dumps(params), utcnow()))
    conn.commit()
    return cur.lastrowid


def _fire(conn, rule_id, kind, message, fired: list):
    recent = conn.execute(
        "SELECT 1 FROM alert_events WHERE kind=? AND message=? AND "
        "triggered_at > ?", (kind, message,
                             (datetime.now(timezone.utc) - timedelta(hours=20)
                              ).isoformat())).fetchone()
    if recent:
        return
    conn.execute("INSERT INTO alert_events (rule_id, kind, message, triggered_at)"
                 " VALUES (?,?,?,?)", (rule_id, kind, message, utcnow()))
    fired.append({"kind": kind, "message": message})


def check_alerts(conn) -> list[dict]:
    rules = [dict(r) for r in conn.execute(
        "SELECT * FROM alert_rules WHERE enabled=1")]
    hs = holdings(conn)
    dq = data_quality(conn)
    fired: list[dict] = []
    by_ticker = {f"{h['ticker']}.{h['exchange']}": h for h in hs}

    for rule in rules:
        p = json.loads(rule["params_json"])
        kind = rule["kind"]
        if kind in ("price_above", "price_below"):
            h = by_ticker.get(p.get("symbol", "").upper())
            if h and h["price"] is not None:
                thr = float(p["threshold"])
                if ((kind == "price_above" and h["price"] > thr) or
                        (kind == "price_below" and h["price"] < thr)):
                    _fire(conn, rule["id"], kind,
                          f"{p['symbol']}: price {h['price']} crossed {thr}", fired)
        elif kind == "daily_move_pct":
            thr = float(p.get("threshold", 5))
            for h in hs:
                if (h["price"] is not None and h["day_change_local"] is not None
                        and h["market_value_local"]):
                    prev_value = h["market_value_local"] - h["day_change_local"]
                    if prev_value > 0:
                        move = h["day_change_local"] / prev_value * 100
                        if abs(move) >= thr:
                            _fire(conn, rule["id"], kind,
                                  f"{h['ticker']} moved {move:+.1f}% today", fired)
        elif kind == "allocation_limit_pct":
            thr = float(p.get("threshold", 25))
            for h in hs:
                if (h["weight_pct"] or 0) > thr:
                    _fire(conn, rule["id"], kind,
                          f"{h['ticker']} is {h['weight_pct']:.1f}% of the "
                          f"portfolio (limit {thr}%)", fired)
        elif kind == "stale_data":
            for h in dq["stale_prices"]:
                _fire(conn, rule["id"], kind,
                      f"{h['ticker']}: price is stale (last {h['price_date']})",
                      fired)
        elif kind == "missing_price":
            for h in dq["missing_prices"]:
                _fire(conn, rule["id"], kind,
                      f"{h['ticker']}: no price available", fired)
        elif kind == "import_issue":
            n = len(dq["staged_transactions"])
            if n:
                _fire(conn, rule["id"], kind,
                      f"{n} staged transaction(s) awaiting reconciliation", fired)
        elif kind in ("dividend_announcement", "dividend_payment"):
            date_col = "ex_date" if kind == "dividend_announcement" else "pay_date"
            today = datetime.now(timezone.utc).date().isoformat()
            soon = (datetime.now(timezone.utc).date()
                    + timedelta(days=int(p.get("days_ahead", 7)))).isoformat()
            for d in conn.execute(
                    f"SELECT ad.*, s.ticker FROM announced_dividends ad "
                    f"JOIN securities s ON s.id=ad.security_id "
                    f"WHERE ad.status='announced' AND ad.{date_col} "
                    f"BETWEEN ? AND ?", (today, soon)):
                _fire(conn, rule["id"], kind,
                      f"{d['ticker']}: dividend {d['amount']} {d['currency']} "
                      f"{date_col.replace('_', ' ')} {d[date_col]}", fired)
        elif kind == "unusual_transaction":
            thr = float(p.get("threshold", 100000))
            for t in conn.execute(
                    "SELECT * FROM transactions WHERE status='confirmed' AND "
                    "ABS(COALESCE(gross_amount, quantity*price, 0)) > ?", (thr,)):
                _fire(conn, rule["id"], kind,
                      f"transaction #{t['id']} on {t['trade_date']} exceeds "
                      f"{thr:g} {t['currency']}", fired)
        elif kind == "statement_overdue_days":
            days = int(p.get("days", 35))
            last = dq["last_import"]
            if last is None or last < (datetime.now(timezone.utc)
                                       - timedelta(days=days)).isoformat():
                _fire(conn, rule["id"], kind,
                      f"no brokerage import in the last {days} days "
                      f"(last: {last or 'never'})", fired)
    conn.commit()
    if fired:
        audit(conn, "alerts.fired", {"count": len(fired)})
        _maybe_email(fired)
    return fired


def _maybe_email(fired: list[dict]) -> None:
    """Optional email delivery — only if SMTP_* is configured in .env."""
    host = os.environ.get("SMTP_HOST")
    to = os.environ.get("ALERT_EMAIL_TO")
    if not host or not to:
        return
    msg = EmailMessage()
    msg["Subject"] = f"Portfolio alerts ({len(fired)})"
    msg["From"] = os.environ.get("SMTP_FROM", "portfolio@localhost")
    msg["To"] = to
    msg.set_content("\n".join(f"[{f['kind']}] {f['message']}" for f in fired))
    try:
        with smtplib.SMTP(host, int(os.environ.get("SMTP_PORT", "587"))) as s:
            if os.environ.get("SMTP_USER"):
                s.starttls()
                s.login(os.environ["SMTP_USER"], os.environ.get("SMTP_PASSWORD", ""))
            s.send_message(msg)
    except OSError:
        pass  # alerts stay local when email fails


def default_rules(conn) -> None:
    """Install a sensible local-only default rule set (idempotent)."""
    existing = {r["kind"] for r in conn.execute("SELECT kind FROM alert_rules")}
    defaults = [("daily_move_pct", {"threshold": 8}),
                ("allocation_limit_pct", {"threshold": 30}),
                ("stale_data", {}), ("missing_price", {}),
                ("import_issue", {}), ("statement_overdue_days", {"days": 40})]
    for kind, params in defaults:
        if kind not in existing:
            add_rule(conn, kind, **params)
