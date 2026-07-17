"""portfolio — command-line interface.

Workflow: setup → import <file> → reconcile → refresh → holdings → dashboard.
Run `portfolio -h` or `portfolio <command> -h` for details.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from . import db as dbm
from .core import SECURITY_STATUSES
from .db import audit, connect, get_setting, migrate, set_setting, utcnow


def _load_dotenv() -> None:
    """Minimal .env loader (no external dependency)."""
    import os
    for candidate in (Path.cwd() / ".env", Path(__file__).parent.parent / ".env"):
        if candidate.exists():
            for line in candidate.read_text().splitlines():
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, _, v = line.partition("=")
                    os.environ.setdefault(k.strip(), v.strip())
            break


def _conn():
    conn = connect()
    migrate(conn)
    return conn


def _table(rows: list[dict], columns: list[tuple[str, str]]) -> str:
    """columns: (key, header). Right-align numbers, mask nothing further here."""
    def fmt(v):
        if v is None:
            return "—"
        if isinstance(v, float):
            return f"{v:,.2f}"
        return str(v)
    data = [[fmt(r.get(k)) for k, _ in columns] for r in rows]
    headers = [h for _, h in columns]
    widths = [max(len(h), *(len(d[i]) for d in data)) if data else len(h)
              for i, h in enumerate(headers)]
    line = "  ".join(h.ljust(w) for h, w in zip(headers, widths))
    out = [line, "-" * len(line)]
    for d in data:
        out.append("  ".join(v.ljust(w) for v, w in zip(d, widths)))
    return "\n".join(out)


# ---- commands ------------------------------------------------------------------


def cmd_setup(args):
    conn = _conn()
    print(f"Database: {dbm.db_path()}")
    if args.base_currency:
        set_setting(conn, "base_currency", args.base_currency.upper())
    if args.cost_basis:
        set_setting(conn, "cost_basis_method", args.cost_basis)
    if args.benchmarks:
        set_setting(conn, "benchmarks", args.benchmarks)
    if args.track_cash is not None:
        set_setting(conn, "track_cash", "1" if args.track_cash else "0")
    for key, default in (("base_currency", "SGD"),
                         ("cost_basis_method", "weighted_average"),
                         ("benchmarks", "^SPX,^STI"), ("track_cash", "1")):
        if get_setting(conn, key) is None:
            set_setting(conn, key, default)
    if args.seed:
        from .seed import seed_known_context
        print("Seeding owner-supplied context:", seed_known_context(conn))
        # benchmark index records (INDEX exchange, never counted as holdings)
        for sym, name in (("^SPX", "S&P 500"), ("^STI", "Straits Times Index")):
            conn.execute(
                "INSERT OR IGNORE INTO securities (ticker, exchange, name,"
                " asset_type, status, portfolio_value_inclusion, created_at)"
                " VALUES (?,?,?,?,?,0,?)",
                (sym, "INDEX", name, "index", "watchlist_only", utcnow()))
        conn.commit()
    from .alerts import default_rules
    default_rules(conn)
    audit(conn, "setup", {"seed": args.seed})
    for key in ("base_currency", "cost_basis_method", "benchmarks", "track_cash"):
        print(f"  {key} = {get_setting(conn, key)}")
    print("Setup complete. Next: portfolio import <file>  (see templates/)")


def cmd_import(args):
    from .importers.base import commit_staged, stage_file
    from .importers.generic_csv import pick_adapter
    from .marketdata.service import fx_on
    conn = _conn()
    base = get_setting(conn, "base_currency", "SGD")
    path = Path(args.file)
    if not path.exists():
        sys.exit(f"file not found: {path}")
    adapter = pick_adapter(path, args.adapter)
    summary = stage_file(conn, path, adapter, base)
    if summary.get("duplicate"):
        print(summary["message"])
        return
    print(f"Import #{summary['import_id']}  sha256={summary['sha256'][:12]}…")
    print(f"  rows: {summary['total']}  ok: {summary['ok']}  "
          f"warnings: {summary['warning']}  rejected: {summary['rejected']}")
    for r in summary["rows"]:
        for e in r.errors:
            print(f"  row {r.row_number}: REJECTED — {e}")
        for w in r.warnings:
            print(f"  row {r.row_number}: warning — {w}")
    include_warnings = args.yes
    if summary["warning"] and not args.yes and sys.stdin.isatty():
        include_warnings = input(
            f"Commit {summary['warning']} row(s) with warnings too? [y/N] "
        ).strip().lower() == "y"
    elif summary["warning"] and not args.yes:
        print("Rows with warnings NOT committed (re-run with --yes to include).")
    result = commit_staged(
        conn, summary["import_id"], base, include_warnings=include_warnings,
        default_broker=args.broker or "UNSPECIFIED",
        default_account=args.account or "default",
        fx_lookup=lambda ccy, d: fx_on(conn, ccy, base, d))
    print(f"Committed: {result['committed']}  skipped: {result['skipped']}  "
          f"duplicates: {result['duplicates']}")
    print("Original preserved under data/imports/. Run: portfolio reconcile")


def cmd_reconcile(args):
    from .reconcile import reconciliation, render_markdown
    from .reports import reconciliation_files
    conn = _conn()
    rec = reconciliation(conn)
    print(render_markdown(rec))
    md, js = reconciliation_files(conn)
    print(f"Saved: {md}\nSaved: {js}")
    if rec["material_issues"]:
        print(f"\n{len(rec['material_issues'])} issue(s) materially affect "
              "calculations — resolve before trusting totals.")


def cmd_refresh(args):
    from .marketdata.service import refresh_fx, refresh_prices
    conn = _conn()
    base = get_setting(conn, "base_currency", "SGD")
    days = args.history_days
    prices = refresh_prices(conn, history_days=days)
    print(f"Prices ok: {', '.join(prices['ok']) or 'none'}")
    for f in prices["failed"]:
        print(f"  FAILED {f['ticker']}.{f['exchange']}: {f['error']}")
    fx = refresh_fx(conn, base, history_days=days)
    print(f"FX ok: {', '.join(fx['ok']) or 'none'}")
    for f in fx["failed"]:
        print(f"  FAILED {f['currency']}: {f['error']}")


def cmd_holdings(args):
    from .portfolio import holdings, summary
    conn = _conn()
    s = summary(conn)
    hs = [h for h in holdings(conn)
          if h["quantity"] > 1e-9 or args.all]
    print(f"Base {s['base_currency']} | cost basis: {s['cost_basis_method']} | "
          f"total {s['total_value']:,.2f} | last refresh {s['last_refresh'] or '—'}")
    for w in s["warnings"]:
        print(f"  ⚠️  {w}")
    print()
    print(_table(hs, [("ticker", "Ticker"), ("exchange", "Exch"),
                      ("account", "Account"), ("status", "Status"),
                      ("quantity", "Qty"), ("avg_cost", "AvgCost"),
                      ("price", "Price"), ("price_date", "PriceDate"),
                      ("market_value_base", f"Value({s['base_currency']})"),
                      ("weight_pct", "Wt%"), ("unrealised_base", "Unreal"),
                      ("return_pct_local", "Ret%")]))


def cmd_transactions(args):
    conn = _conn()
    q = ("SELECT t.*, s.ticker, s.exchange FROM transactions t "
         "LEFT JOIN securities s ON s.id=t.security_id WHERE t.status!='void'")
    params: list = []
    if args.ticker:
        q += " AND s.ticker=?"
        params.append(args.ticker.upper())
    if args.type:
        q += " AND t.type=?"
        params.append(args.type)
    if getattr(args, "from"):
        q += " AND t.trade_date>=?"
        params.append(getattr(args, "from"))
    if args.to:
        q += " AND t.trade_date<=?"
        params.append(args.to)
    q += " ORDER BY t.trade_date, t.id"
    rows = [dict(r) for r in conn.execute(q, params)]
    print(_table(rows, [("id", "ID"), ("trade_date", "Date"), ("type", "Type"),
                        ("ticker", "Ticker"), ("quantity", "Qty"),
                        ("price", "Price"), ("gross_amount", "Gross"),
                        ("fees", "Fees"), ("currency", "Ccy"),
                        ("status", "Status"), ("source", "Source")]))


def cmd_edit_txn(args):
    conn = _conn()
    row = conn.execute("SELECT * FROM transactions WHERE id=?",
                       (args.id,)).fetchone()
    if not row:
        sys.exit(f"transaction {args.id} not found")
    old = row[args.field]
    conn.execute("INSERT INTO transaction_edits (transaction_id, field, old_value,"
                 " new_value, reason, edited_at) VALUES (?,?,?,?,?,?)",
                 (args.id, args.field, str(old), args.value, args.reason, utcnow()))
    conn.execute(f"UPDATE transactions SET {args.field}=?, updated_at=? WHERE id=?",
                 (args.value, utcnow(), args.id))
    conn.commit()
    audit(conn, "transaction.edited",
          {"id": args.id, "field": args.field, "old": str(old), "new": args.value})
    print(f"transaction {args.id}: {args.field} {old!r} -> {args.value!r} "
          "(original retained in transaction_edits)")


def cmd_confirm_txn(args):
    conn = _conn()
    row = conn.execute("SELECT * FROM transactions WHERE id=?", (args.id,)).fetchone()
    if not row:
        sys.exit(f"transaction {args.id} not found")
    status = "confirmed" if not args.void else "void"
    conn.execute("UPDATE transactions SET status=?, verification_status=?,"
                 " updated_at=? WHERE id=?",
                 (status, "manually_verified" if not args.void else "voided",
                  utcnow(), args.id))
    conn.commit()
    audit(conn, "transaction.status", {"id": args.id, "status": status,
                                       "note": args.note})
    print(f"transaction {args.id} -> {status}")


def cmd_security(args):
    from .marketdata.service import resolve_security
    conn = _conn()
    if args.action == "list":
        rows = [dict(r) for r in conn.execute(
            "SELECT * FROM securities ORDER BY status, ticker")]
        print(_table(rows, [("id", "ID"), ("ticker", "Ticker"),
                            ("exchange", "Exch"), ("name", "Name"),
                            ("currency", "Ccy"), ("status", "Status"),
                            ("verification_status", "Verification")]))
    elif args.action == "resolve":
        for r in conn.execute("SELECT id, ticker, exchange FROM securities "
                              "WHERE status != 'historical'"):
            res = resolve_security(conn, r["id"])
            print(f"{r['ticker']}.{r['exchange']}: {res}")
    elif args.action == "set":
        if args.status and args.status not in SECURITY_STATUSES:
            sys.exit(f"status must be one of {sorted(SECURITY_STATUSES)}")
        sets, params = [], []
        for field in ("status", "sector", "industry", "country", "isin",
                      "provider_symbol", "currency"):
            v = getattr(args, field, None)
            if v:
                sets.append(f"{field}=?")
                params.append(v)
        if args.status in ("confirmed_current", "provisional_current"):
            sets.append("portfolio_value_inclusion=1")
        elif args.status:
            sets.append("portfolio_value_inclusion=0")
        if not sets:
            sys.exit("nothing to set")
        params.append(args.id)
        conn.execute(f"UPDATE securities SET {', '.join(sets)} WHERE id=?", params)
        conn.commit()
        audit(conn, "security.updated", {"id": args.id, "sets": sets})
        print("updated")


def cmd_price(args):
    from .marketdata.service import set_manual_price
    conn = _conn()
    row = conn.execute("SELECT id, currency FROM securities WHERE ticker=? AND "
                       "exchange=?", (args.ticker.upper(),
                                      args.exchange.upper())).fetchone()
    if not row:
        sys.exit(f"security {args.ticker}.{args.exchange} not found")
    set_manual_price(conn, row["id"], args.price,
                     args.currency or row["currency"] or "USD", args.date)
    print("manual price recorded")


def cmd_report(args):
    from .reports import DATASETS, export, export_all, monthly_report
    conn = _conn()
    if args.month:
        md, pdf = monthly_report(conn, args.month)
        print(f"Saved: {md}\nSaved: {pdf}")
    elif args.name == "all":
        for p in export_all(conn):
            print(f"Saved: {p}")
    elif args.name:
        print(f"Saved: {export(conn, args.name, args.format)}")
    else:
        print("available reports:", ", ".join(sorted(DATASETS)), "or --month YYYY-MM")


def cmd_backup(args):
    conn = _conn()
    print(f"Backup: {dbm.backup(conn, label='manual')}")


def cmd_restore(args):
    print(f"Restored to: {dbm.restore(args.backup)}")


def cmd_auto(args):
    from .scheduler import run_auto
    conn = _conn()
    results = run_auto(conn)
    print(json.dumps(results, indent=2, default=str))
    if not results["ok"]:
        sys.exit(1)


def cmd_alert(args):
    from .alerts import KINDS, add_rule, check_alerts
    conn = _conn()
    if args.action == "add":
        params = dict(kv.split("=", 1) for kv in (args.param or []))
        rid = add_rule(conn, args.kind, **params)
        print(f"rule #{rid} added")
    elif args.action == "list":
        for r in conn.execute("SELECT * FROM alert_rules"):
            print(f"#{r['id']} {r['kind']} {r['params_json']} "
                  f"{'enabled' if r['enabled'] else 'disabled'}")
        print("\nrecent events:")
        for e in conn.execute("SELECT * FROM alert_events ORDER BY triggered_at "
                              "DESC LIMIT 20"):
            print(f"  [{e['triggered_at']}] {e['kind']}: {e['message']}")
    elif args.action == "check":
        fired = check_alerts(conn)
        for f in fired:
            print(f"ALERT [{f['kind']}] {f['message']}")
        print(f"{len(fired)} alert(s) fired")
    elif args.action == "kinds":
        print("\n".join(KINDS))


def cmd_dashboard(args):
    from .dashboard.server import create_app
    conn_factory = _conn
    app = create_app(conn_factory)
    print(f"Dashboard: http://127.0.0.1:{args.port}  (local only; Ctrl-C to stop)")
    app.run(host="127.0.0.1", port=args.port, debug=False)


def cmd_snapshot(args):
    from .scheduler import take_snapshot
    conn = _conn()
    print(take_snapshot(conn))


def main(argv=None):
    _load_dotenv()
    p = argparse.ArgumentParser(prog="portfolio",
                                description="Local-first stock portfolio tracker")
    sub = p.add_subparsers(dest="command", required=True)

    s = sub.add_parser("setup", help="initialise DB, settings, seed context")
    s.add_argument("--base-currency")
    s.add_argument("--cost-basis",
                   choices=["weighted_average", "fifo", "specific_lot"])
    s.add_argument("--benchmarks", help="comma-separated, e.g. ^SPX,^STI")
    s.add_argument("--track-cash", type=int, choices=[0, 1], default=None)
    s.add_argument("--seed", action="store_true",
                   help="seed owner-supplied context (seed/known_context.json)")
    s.set_defaults(fn=cmd_setup)

    s = sub.add_parser("import", help="import a transactions/holdings file")
    s.add_argument("file")
    s.add_argument("--adapter")
    s.add_argument("--broker", help="default broker for rows without one")
    s.add_argument("--account", help="default account name")
    s.add_argument("--yes", action="store_true",
                   help="commit rows with warnings without prompting")
    s.set_defaults(fn=cmd_import)

    sub.add_parser("reconcile", help="reconciliation report").set_defaults(
        fn=cmd_reconcile)

    s = sub.add_parser("refresh", help="refresh prices and FX")
    s.add_argument("--history-days", type=int, default=30)
    s.set_defaults(fn=cmd_refresh)

    s = sub.add_parser("holdings", help="current holdings")
    s.add_argument("--all", action="store_true", help="include closed positions")
    s.set_defaults(fn=cmd_holdings)

    s = sub.add_parser("transactions", help="list transactions")
    s.add_argument("--ticker")
    s.add_argument("--type")
    s.add_argument("--from", dest="from")
    s.add_argument("--to")
    s.set_defaults(fn=cmd_transactions)

    s = sub.add_parser("edit-transaction",
                       help="edit a field (original value retained)")
    s.add_argument("id", type=int)
    s.add_argument("field", choices=["trade_date", "quantity", "price",
                                     "gross_amount", "fees", "tax", "currency",
                                     "note", "lot_id"])
    s.add_argument("value")
    s.add_argument("--reason", default="")
    s.set_defaults(fn=cmd_edit_txn)

    s = sub.add_parser("confirm-transaction",
                       help="confirm (or void) a staged transaction")
    s.add_argument("id", type=int)
    s.add_argument("--void", action="store_true")
    s.add_argument("--note", default="")
    s.set_defaults(fn=cmd_confirm_txn)

    s = sub.add_parser("security", help="list/resolve/update securities")
    s.add_argument("action", choices=["list", "resolve", "set"])
    s.add_argument("--id", type=int)
    s.add_argument("--status")
    s.add_argument("--sector")
    s.add_argument("--industry")
    s.add_argument("--country")
    s.add_argument("--isin")
    s.add_argument("--currency")
    s.add_argument("--provider-symbol", dest="provider_symbol")
    s.set_defaults(fn=cmd_security)

    s = sub.add_parser("price", help="manual price override")
    s.add_argument("ticker")
    s.add_argument("exchange")
    s.add_argument("price", type=float)
    s.add_argument("date")
    s.add_argument("--currency")
    s.set_defaults(fn=cmd_price)

    s = sub.add_parser("report", help="generate reports")
    s.add_argument("name", nargs="?",
                   help="dataset name or 'all' (omit with --month)")
    s.add_argument("--format", choices=["csv", "xlsx"], default="csv")
    s.add_argument("--month", help="YYYY-MM monthly MD+PDF report")
    s.set_defaults(fn=cmd_report)

    sub.add_parser("backup", help="timestamped DB backup").set_defaults(
        fn=cmd_backup)
    s = sub.add_parser("restore", help="restore DB from a backup file")
    s.add_argument("backup")
    s.set_defaults(fn=cmd_restore)

    sub.add_parser("auto", help="scheduled refresh+snapshot+alerts+backup"
                   ).set_defaults(fn=cmd_auto)
    sub.add_parser("snapshot", help="store today's valuation snapshot"
                   ).set_defaults(fn=cmd_snapshot)

    s = sub.add_parser("alert", help="manage alerts")
    s.add_argument("action", choices=["add", "list", "check", "kinds"])
    s.add_argument("--kind")
    s.add_argument("--param", action="append",
                   help="key=value (repeatable), e.g. --param threshold=5")
    s.set_defaults(fn=cmd_alert)

    s = sub.add_parser("dashboard", help="run the local web dashboard")
    s.add_argument("--port", type=int, default=8765)
    s.set_defaults(fn=cmd_dashboard)

    args = p.parse_args(argv)
    args.fn(args)


if __name__ == "__main__":
    main()
