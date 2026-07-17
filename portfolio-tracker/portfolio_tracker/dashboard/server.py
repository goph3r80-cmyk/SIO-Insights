"""Local-only Flask dashboard. Binds 127.0.0.1; masks account references;
provisional holdings carry a visible warning and are never silently mixed
into confirmed totals."""
from __future__ import annotations

import json

from flask import Flask, redirect, render_template, request, url_for

from .. import portfolio as pf
from ..db import audit, utcnow
from ..reconcile import reconciliation
from .svg import bar_chart, donut, line_chart


def create_app(conn_factory) -> Flask:
    app = Flask(__name__)

    def conn():
        return conn_factory()

    @app.template_filter("money")
    def money(v):
        return "—" if v is None else f"{v:,.2f}"

    @app.template_filter("pct")
    def pct(v):
        return "—" if v is None else f"{v:.2f}%"

    @app.context_processor
    def nav():
        return {"nav": [("index", "Summary"), ("holdings_view", "Holdings"),
                        ("performance", "Performance"), ("allocation", "Allocation"),
                        ("income_view", "Income"), ("transactions", "Transactions"),
                        ("quality", "Data quality"), ("risk_view", "Risk"),
                        ("reconcile_view", "Reconciliation")]}

    @app.route("/")
    def index():
        c = conn()
        s = pf.summary(c)
        alerts = [dict(r) for r in c.execute(
            "SELECT * FROM alert_events WHERE acknowledged=0 "
            "ORDER BY triggered_at DESC LIMIT 15")]
        history = pf.value_history(c)
        chart = line_chart([(h["date"], h["total"]) for h in history],
                           label="Portfolio value")
        return render_template("summary.html", s=s, alerts=alerts, chart=chart)

    @app.route("/holdings")
    def holdings_view():
        c = conn()
        s = pf.summary(c)
        hs = [h for h in pf.holdings(c) if h["quantity"] > 1e-9]
        confirmed = [h for h in hs if h["status"] == "confirmed_current"]
        provisional = [h for h in hs if h["status"] == "provisional_current"]
        other = [h for h in hs if h["status"] not in
                 ("confirmed_current", "provisional_current")]
        return render_template("holdings.html", s=s, confirmed=confirmed,
                               provisional=provisional, other=other)

    @app.route("/performance")
    def performance():
        c = conn()
        s = pf.summary(c)
        p = pf.performance_view(c)
        chart = line_chart([(h["date"], h["total"]) for h in p["history"]],
                           label="Portfolio value")
        benches = {}
        for b in pf.config(c)["benchmarks"]:
            series = pf.benchmark_series(c, b.strip())
            if len(series) > 1:
                base_v = series[0][1]
                benches[b.strip()] = line_chart(
                    [(d, v / base_v * 100) for d, v in series],
                    label=f"{b} (rebased)")
        return render_template("performance.html", s=s, p=p, chart=chart,
                               benches=benches)

    @app.route("/allocation")
    def allocation():
        c = conn()
        s = pf.summary(c)
        alloc = pf.allocation(c)
        charts = {dim: donut([(g["label"], g["value"]) for g in groups])
                  for dim, groups in alloc.items() if groups}
        return render_template("allocation.html", s=s, alloc=alloc, charts=charts)

    @app.route("/income")
    def income_view():
        c = conn()
        s = pf.summary(c)
        inc = pf.income(c)
        chart = bar_chart([(m["month"], m["net"]) for m in inc["by_month"][-24:]])
        return render_template("income.html", s=s, inc=inc, chart=chart)

    @app.route("/transactions", methods=["GET"])
    def transactions():
        c = conn()
        s = pf.summary(c)
        q = ("SELECT t.*, s.ticker, s.exchange FROM transactions t LEFT JOIN "
             "securities s ON s.id=t.security_id WHERE t.status!='void'")
        params = []
        for field, clause in (("ticker", "s.ticker=?"), ("type", "t.type=?"),
                              ("from", "t.trade_date>=?"), ("to", "t.trade_date<=?")):
            v = request.args.get(field)
            if v:
                q += f" AND {clause}"
                params.append(v.upper() if field == "ticker" else v)
        q += " ORDER BY t.trade_date DESC, t.id DESC LIMIT 500"
        rows = [dict(r) for r in c.execute(q, params)]
        edits = {}
        for e in c.execute("SELECT * FROM transaction_edits ORDER BY edited_at"):
            edits.setdefault(e["transaction_id"], []).append(dict(e))
        return render_template("transactions.html", s=s, rows=rows, edits=edits,
                               args=request.args)

    @app.route("/transactions/<int:txn_id>/edit", methods=["POST"])
    def edit_transaction(txn_id):
        c = conn()
        field = request.form["field"]
        if field not in ("trade_date", "quantity", "price", "gross_amount",
                         "fees", "tax", "currency", "note", "lot_id"):
            return "field not editable", 400
        value = request.form["value"]
        row = c.execute("SELECT * FROM transactions WHERE id=?",
                        (txn_id,)).fetchone()
        if not row:
            return "not found", 404
        c.execute("INSERT INTO transaction_edits (transaction_id, field, old_value,"
                  " new_value, reason, edited_at) VALUES (?,?,?,?,?,?)",
                  (txn_id, field, str(row[field]), value,
                   request.form.get("reason", "dashboard edit"), utcnow()))
        c.execute(f"UPDATE transactions SET {field}=?, updated_at=? WHERE id=?",
                  (value, utcnow(), txn_id))
        c.commit()
        audit(c, "transaction.edited",
              {"id": txn_id, "field": field, "via": "dashboard"})
        return redirect(url_for("transactions"))

    @app.route("/quality")
    def quality():
        c = conn()
        s = pf.summary(c)
        dq = pf.data_quality(c)
        staged = []
        for t in dq["staged_transactions"]:
            raw = json.loads(t["raw_record"]) if t.get("raw_record") else {}
            staged.append(t | {"ticker": raw.get("ticker", "?")})
        return render_template("quality.html", s=s, dq=dq, staged=staged)

    @app.route("/risk")
    def risk_view():
        c = conn()
        s = pf.summary(c)
        r = pf.risk(c)
        return render_template("risk.html", s=s, r=r)

    @app.route("/reconcile")
    def reconcile_view():
        c = conn()
        s = pf.summary(c)
        rec = reconciliation(c)
        return render_template("reconcile.html", s=s, rec=rec)

    return app
