"""Scheduled maintenance job (`portfolio auto`).

Fail-safe by design: a fresh backup is taken BEFORE any write, every step is
isolated (one failing step never blocks the rest and never corrupts the last
valid data), and the outcome is written to the audit log. Schedule it with
cron / Task Scheduler, e.g.:  30 18 * * 1-5  cd ~/portfolio && portfolio auto
"""
from __future__ import annotations

import json

from . import portfolio
from .alerts import check_alerts
from .db import audit, backup, utcnow
from .marketdata.service import refresh_fx, refresh_prices


def run_auto(conn, history_days: int = 30) -> dict:
    results: dict = {"started": utcnow(), "steps": {}}

    def step(name, fn):
        try:
            results["steps"][name] = {"ok": True, "result": fn()}
        except Exception as e:  # isolate failures per step
            results["steps"][name] = {"ok": False, "error": f"{type(e).__name__}: {e}"}

    # 0. Safety backup before any writes.
    step("backup_pre", lambda: str(backup(conn, label="auto-pre")))
    cfg = portfolio.config(conn)
    # 1-2. Market prices and FX.
    step("refresh_prices", lambda: refresh_prices(conn, history_days=history_days))
    step("refresh_fx", lambda: refresh_fx(conn, cfg["base_currency"],
                                          history_days=history_days))
    # 3-4. Recalculate metrics and store the daily snapshot.
    step("snapshot", lambda: take_snapshot(conn))
    # 5. Alerts.
    step("alerts", lambda: check_alerts(conn))
    # 7. Post-run backup of the refreshed database.
    step("backup_post", lambda: str(backup(conn, label="auto")))
    results["finished"] = utcnow()
    results["ok"] = all(s["ok"] for s in results["steps"].values())
    # 6. Audit log.
    audit(conn, "auto.run", json.dumps(results, default=str))
    return results


def take_snapshot(conn) -> dict:
    s = portfolio.summary(conn)
    cash = portfolio.cash_summary(conn)
    from datetime import datetime, timezone
    today = datetime.now(timezone.utc).date().isoformat()
    conn.execute(
        "INSERT INTO snapshots (snapshot_date, total_value, cash_value, invested,"
        " unrealised, realised, income, base_currency, details_json, created_at)"
        " VALUES (?,?,?,?,?,?,?,?,?,?) ON CONFLICT(snapshot_date) DO UPDATE SET"
        " total_value=excluded.total_value, cash_value=excluded.cash_value,"
        " invested=excluded.invested, unrealised=excluded.unrealised,"
        " realised=excluded.realised, income=excluded.income,"
        " details_json=excluded.details_json, created_at=excluded.created_at",
        (today, s["total_value"], cash["total_base"], s["invested_capital"],
         s["unrealised"], s["realised"], s["dividends"], s["base_currency"],
         json.dumps({"warnings": s["warnings"]}), utcnow()))
    conn.commit()
    return {"date": today, "total_value": s["total_value"]}
