"""Portfolio views: holdings, summary, allocation, income, performance, risk,
data quality. All read-side aggregation lives here; the dashboard, CLI and
reports render what these functions return."""
from __future__ import annotations

import sqlite3
from collections import defaultdict
from datetime import datetime, timedelta, timezone

from .calc import performance as perf
from .calc.positions import build_positions, cash_balances
from .db import get_setting
from .marketdata.service import fx_latest, fx_on, latest_price, price_on

ACTIVE_STATUSES = ("confirmed_current", "provisional_current")


def config(conn) -> dict:
    return {
        "base_currency": get_setting(conn, "base_currency", "SGD"),
        "cost_basis_method": get_setting(conn, "cost_basis_method", "weighted_average"),
        "benchmarks": (get_setting(conn, "benchmarks", "^SPX") or "").split(","),
        "track_cash": get_setting(conn, "track_cash", "1") == "1",
        "stale_days": int(get_setting(conn, "stale_days", "5")),
    }


def load_transactions(conn, include_staged: bool = False) -> list[dict]:
    q = "SELECT * FROM transactions WHERE status != 'void'"
    if not include_staged:
        q += " AND status = 'confirmed'"
    rows = [dict(r) for r in conn.execute(q + " ORDER BY trade_date, id")]
    return rows


def _securities(conn) -> dict[int, dict]:
    return {r["id"]: dict(r) for r in conn.execute("SELECT * FROM securities")}


def _accounts(conn) -> dict[int, dict]:
    return {r["id"]: dict(r) for r in conn.execute("SELECT * FROM accounts")}


def _txn_fx(conn, t: dict, base: str) -> dict:
    """Ensure the transaction dict carries a historical FX rate to base."""
    if t.get("fx_rate_to_base"):
        return t
    rate = fx_on(conn, t.get("currency") or base, base, t["trade_date"])
    t = dict(t)
    t["fx_rate_to_base"] = rate if rate is not None else None
    return t


def holdings(conn) -> list[dict]:
    """Current holdings with every per-position metric the dashboard shows."""
    cfg = config(conn)
    base = cfg["base_currency"]
    secs = _securities(conn)
    accts = _accounts(conn)
    txns = [_txn_fx(conn, t, base) for t in load_transactions(conn)]
    positions = build_positions(txns, method=cfg["cost_basis_method"])

    out = []
    for (account_id, security_id), pos in positions.items():
        sec = secs.get(security_id, {})
        if sec.get("status") not in ACTIVE_STATUSES and pos.quantity <= 1e-9:
            continue
        price_row, stale = latest_price(conn, security_id, cfg["stale_days"])
        price = price_row["price"] if price_row else None
        ccy = sec.get("currency") or pos.currency or base
        fx_now = fx_latest(conn, ccy, base)
        qty = pos.quantity
        market_local = qty * price if price is not None else None
        market_base = (market_local * fx_now
                       if market_local is not None and fx_now else None)
        unreal_local = (market_local - pos.total_cost_local
                        if market_local is not None else None)
        # Split FX effect from security performance:
        # security gain (base) = local gain converted at today's FX;
        # fx gain = cost revalued from historical FX to today's FX.
        unreal_sec_base = (unreal_local * fx_now
                           if unreal_local is not None and fx_now else None)
        fx_gain_base = (market_base - pos.total_cost_base - unreal_sec_base
                        if market_base is not None and unreal_sec_base is not None
                        else None)
        prev = None
        if price_row:
            prev_row = conn.execute(
                "SELECT price FROM prices WHERE security_id=? AND price_date<? "
                "ORDER BY price_date DESC LIMIT 1",
                (security_id, price_row["price_date"])).fetchone()
            prev = prev_row["price"] if prev_row else None
        day_change_local = (qty * (price - prev)
                            if price is not None and prev is not None else None)
        total_return_local = ((unreal_local or 0) + pos.realised_local
                              + pos.dividends_local - pos.withholding_local
                              if unreal_local is not None else None)
        acct = accts.get(account_id, {})
        out.append({
            "security_id": security_id, "account_id": account_id,
            "ticker": sec.get("ticker"), "exchange": sec.get("exchange"),
            "name": sec.get("name"), "sector": sec.get("sector"),
            "industry": sec.get("industry"), "country": sec.get("country"),
            "asset_type": sec.get("asset_type"),
            "status": sec.get("status"),
            "verification_status": sec.get("verification_status"),
            "account": (f"{acct.get('broker')}/{acct.get('name')}"
                        if acct else "(unassigned)"),
            "currency": ccy,
            "quantity": qty,
            "avg_cost": pos.avg_cost_local,
            "total_cost_local": pos.total_cost_local,
            "total_cost_base": pos.total_cost_base,
            "price": price,
            "price_date": price_row["price_date"] if price_row else None,
            "price_source": price_row["source"] if price_row else None,
            "price_quality": price_row["quality"] if price_row else None,
            "price_stale": stale,
            "fx_to_base": fx_now,
            "market_value_local": market_local,
            "market_value_base": market_base,
            "unrealised_local": unreal_local,
            "unrealised_base": (unreal_sec_base + fx_gain_base
                                if unreal_sec_base is not None
                                and fx_gain_base is not None else unreal_sec_base),
            "unrealised_security_base": unreal_sec_base,
            "unrealised_fx_base": fx_gain_base,
            "realised_local": pos.realised_local,
            "realised_base": pos.realised_base,
            "dividends_local": pos.dividends_local,
            "dividends_base": pos.dividends_base,
            "withholding_local": pos.withholding_local,
            "fees_local": pos.fees_local,
            "day_change_local": day_change_local,
            "total_return_local": total_return_local,
            "return_pct_local": (total_return_local / pos.total_cost_local * 100
                                 if total_return_local is not None
                                 and pos.total_cost_local > 1e-9 else None),
            "issues": pos.issues,
        })
    out.sort(key=lambda h: -(h["market_value_base"] or 0))
    total = sum(h["market_value_base"] or 0 for h in out
                if h["status"] in ACTIVE_STATUSES)
    for h in out:
        h["weight_pct"] = ((h["market_value_base"] or 0) / total * 100
                           if total and h["status"] in ACTIVE_STATUSES else None)
    return out


def cash_summary(conn) -> dict:
    cfg = config(conn)
    base = cfg["base_currency"]
    balances = cash_balances(load_transactions(conn))
    total_base = 0.0
    detail = []
    accts = _accounts(conn)
    for (acct_id, ccy), amount in sorted(balances.items(), key=lambda x: str(x[0])):
        if abs(amount) < 0.005:
            continue
        rate = fx_latest(conn, ccy, base) or (1.0 if ccy == base else None)
        acct = accts.get(acct_id, {})
        detail.append({"account": f"{acct.get('broker','?')}/{acct.get('name','?')}",
                       "currency": ccy, "amount": amount,
                       "amount_base": amount * rate if rate else None})
        total_base += amount * rate if rate else 0.0
    return {"total_base": total_base if cfg["track_cash"] else 0.0,
            "detail": detail, "tracked": cfg["track_cash"]}


def summary(conn) -> dict:
    cfg = config(conn)
    hs = [h for h in holdings(conn) if h["status"] in ACTIVE_STATUSES]
    cash = cash_summary(conn)
    txns = load_transactions(conn)
    deposits = sum(float(t.get("gross_amount") or 0) for t in txns
                   if t["type"] == "deposit")
    withdrawals = sum(abs(float(t.get("gross_amount") or 0)) for t in txns
                      if t["type"] == "withdrawal")
    last_price = conn.execute("SELECT MAX(retrieved_at) m FROM prices").fetchone()
    staged = conn.execute("SELECT COUNT(*) c FROM transactions WHERE "
                          "status='staged'").fetchone()["c"]
    warnings = []
    if any(h["price_stale"] for h in hs):
        warnings.append("one or more prices are stale")
    if any(h["price"] is None for h in hs):
        warnings.append("one or more holdings have no price")
    provisional = [h["ticker"] for h in hs if h["status"] == "provisional_current"]
    if provisional:
        warnings.append(
            "provisional holdings awaiting broker statement: "
            + ", ".join(sorted(set(provisional))))
    if staged:
        warnings.append(f"{staged} staged transaction(s) require reconciliation")
    return {
        "base_currency": cfg["base_currency"],
        "cost_basis_method": cfg["cost_basis_method"],
        "total_value": sum(h["market_value_base"] or 0 for h in hs)
        + cash["total_base"],
        "securities_value": sum(h["market_value_base"] or 0 for h in hs),
        "invested_capital": sum(h["total_cost_base"] or 0 for h in hs),
        "unrealised": sum(h["unrealised_base"] or 0 for h in hs),
        "realised": sum(h["realised_base"] or 0 for h in hs),
        "day_change_local_mixed": sum(h["day_change_local"] or 0 for h in hs),
        "dividends": sum(h["dividends_base"] or 0 for h in hs),
        "cash": cash["total_base"],
        "deposits": deposits, "withdrawals": withdrawals,
        "holdings_count": sum(1 for h in hs if h["quantity"] > 1e-9),
        "last_refresh": last_price["m"],
        "warnings": warnings,
        "provisional_count": len(set(provisional)),
    }


def allocation(conn) -> dict[str, list[dict]]:
    hs = [h for h in holdings(conn) if h["status"] in ACTIVE_STATUSES
          and (h["market_value_base"] or 0) > 0]
    dims = {"stock": "ticker", "sector": "sector", "industry": "industry",
            "country": "country", "currency": "currency", "exchange": "exchange",
            "account": "account", "asset_type": "asset_type"}
    total = sum(h["market_value_base"] for h in hs) or 1.0
    out = {}
    for dim, key in dims.items():
        groups: dict[str, float] = defaultdict(float)
        for h in hs:
            groups[str(h.get(key) or "(unknown)")] += h["market_value_base"]
        out[dim] = sorted(
            ({"label": k, "value": v, "pct": v / total * 100}
             for k, v in groups.items()), key=lambda g: -g["value"])
    return out


def income(conn) -> dict:
    base = config(conn)["base_currency"]
    secs = _securities(conn)
    txns = [_txn_fx(conn, t, base) for t in load_transactions(conn)]
    by_month: dict[str, dict] = defaultdict(lambda: {"gross": 0.0, "tax": 0.0})
    by_company: dict[str, dict] = defaultdict(lambda: {"gross": 0.0, "tax": 0.0})
    gross = tax = 0.0
    ttm_cut = (datetime.now(timezone.utc).date() - timedelta(days=365)).isoformat()
    ttm = 0.0
    for t in txns:
        fx = float(t.get("fx_rate_to_base") or 1.0)
        if t["type"] == "dividend":
            amt = float(t.get("gross_amount") or 0) * fx
            wht = float(t.get("tax") or 0) * fx
            month = t["trade_date"][:7]
            tick = secs.get(t.get("security_id"), {}).get("ticker", "?")
            by_month[month]["gross"] += amt
            by_month[month]["tax"] += wht
            by_company[tick]["gross"] += amt
            by_company[tick]["tax"] += wht
            gross += amt
            tax += wht
            if t["trade_date"] >= ttm_cut:
                ttm += amt - wht
        elif t["type"] == "withholding_tax":
            wht = float(t.get("gross_amount") or 0) * fx
            tax += wht
            by_month[t["trade_date"][:7]]["tax"] += wht
            tick = secs.get(t.get("security_id"), {}).get("ticker", "?")
            by_company[tick]["tax"] += wht
    forecast = [dict(r) | {"ticker": secs.get(r["security_id"], {}).get("ticker")}
                for r in conn.execute(
                    "SELECT * FROM announced_dividends ORDER BY pay_date")]
    return {
        "by_month": [{"month": m, **v, "net": v["gross"] - v["tax"]}
                     for m, v in sorted(by_month.items())],
        "by_company": [{"ticker": c, **v, "net": v["gross"] - v["tax"]}
                       for c, v in sorted(by_company.items(),
                                          key=lambda x: -x[1]["gross"])],
        "gross": gross, "withholding": tax, "net": gross - tax, "ttm_net": ttm,
        "forecast_confirmed": [f for f in forecast if f["status"] == "announced"],
        "forecast_estimated": [f for f in forecast if f["status"] != "announced"],
    }


def quantity_series(txns: list[dict], security_id: int) -> list[tuple[str, float]]:
    """(date, cumulative qty) change-points for one security across accounts."""
    events = []
    for t in txns:
        if t.get("security_id") != security_id or t.get("status") != "confirmed":
            continue
        q = float(t.get("quantity") or 0)
        if t["type"] in ("buy", "transfer_in", "opening_position", "rights_issue",
                         "spin_off"):
            events.append((t["trade_date"], q))
        elif t["type"] in ("sell", "transfer_out", "merger"):
            events.append((t["trade_date"], -q))
        elif t["type"] in ("split", "reverse_split") and t.get("split_ratio"):
            events.append((t["trade_date"], ("*", float(t["split_ratio"]))))
    events.sort(key=lambda e: e[0])
    out, qty = [], 0.0
    for d, delta in events:
        qty = qty * delta[1] if isinstance(delta, tuple) else qty + delta
        out.append((d, qty))
    return out


def value_history(conn, start: str | None = None, end: str | None = None,
                  step_days: int = 7) -> list[dict]:
    """Portfolio base-currency value series (weekly by default)."""
    cfg = config(conn)
    base = cfg["base_currency"]
    txns = load_transactions(conn)
    if not txns:
        return []
    secs = _securities(conn)
    start = start or min(t["trade_date"] for t in txns)
    end = end or datetime.now(timezone.utc).date().isoformat()
    active_ids = [sid for sid, s in secs.items() if s["status"] in ACTIVE_STATUSES
                  or any(t.get("security_id") == sid for t in txns)]
    series_qty = {sid: quantity_series(txns, sid) for sid in active_ids}
    dates = perf.date_range(start, end)[::max(1, step_days)]
    if dates and dates[-1] != end:
        dates.append(end)
    out = []
    for d in dates:
        total = 0.0
        missing = False
        for sid in active_ids:
            qty = 0.0
            for dd, q in series_qty[sid]:
                if dd <= d:
                    qty = q
            if qty <= 1e-9:
                continue
            pr = price_on(conn, sid, d)
            if pr is None:
                missing = True
                continue
            rate = fx_on(conn, pr["currency"], base, d)
            if rate is None:
                missing = True
                continue
            total += qty * pr["price"] * rate
        cash = 0.0
        if cfg["track_cash"]:
            for (acct, ccy), amt in cash_balances(
                    [t for t in txns if t["trade_date"] <= d]).items():
                rate = fx_on(conn, ccy, base, d)
                if rate is not None:
                    cash += amt * rate
        out.append({"date": d, "securities": total, "cash": cash,
                    "total": total + cash, "incomplete": missing})
    return out


def external_flows(conn) -> list[tuple[str, float]]:
    """External flows in base ccy (positive = money added to portfolio)."""
    cfg = config(conn)
    base = cfg["base_currency"]
    txns = [_txn_fx(conn, t, base) for t in load_transactions(conn)]
    flows = []
    has_cash_txns = any(t["type"] in ("deposit", "withdrawal") for t in txns)
    for t in txns:
        fx = float(t.get("fx_rate_to_base") or 1.0)
        amt = float(t.get("gross_amount") or 0) * fx
        if cfg["track_cash"] and has_cash_txns:
            if t["type"] == "deposit":
                flows.append((t["trade_date"], amt))
            elif t["type"] == "withdrawal":
                flows.append((t["trade_date"], -abs(amt)))
        else:
            # Without cash records, purchases/sales are the external flows.
            qty = float(t.get("quantity") or 0)
            price = float(t.get("price") or 0)
            fees = float(t.get("fees") or 0)
            if t["type"] in ("buy", "opening_position"):
                flows.append((t["trade_date"], (qty * price + fees) * fx))
            elif t["type"] == "sell":
                flows.append((t["trade_date"], -(qty * price - fees) * fx))
            elif t["type"] == "dividend":
                flows.append((t["trade_date"], -(amt - float(t.get("tax") or 0) * fx)))
    return flows


def performance_view(conn) -> dict:
    cfg = config(conn)
    history = value_history(conn)
    flows = external_flows(conn)
    twr_total = perf.twr([(h["date"], h["total"]) for h in history], flows)
    mwr = None
    if history:
        cash_flows = [(d, -a) for d, a in flows]  # investor sign convention
        cash_flows.append((history[-1]["date"], history[-1]["total"]))
        mwr = perf.xirr(cash_flows)
    ann_twr = None
    if twr_total is not None and len(history) >= 2:
        ann_twr = perf.annualise(twr_total, history[0]["date"], history[-1]["date"])
    hs = [h for h in holdings(conn) if h["status"] in ACTIVE_STATUSES]
    by_account: dict[str, dict] = defaultdict(lambda: defaultdict(float))
    by_security: dict[str, dict] = defaultdict(lambda: defaultdict(float))
    by_currency: dict[str, dict] = defaultdict(lambda: defaultdict(float))
    for h in hs:
        for bucket, key in ((by_account, h["account"]),
                            (by_security, f"{h['ticker']}.{h['exchange']}"),
                            (by_currency, h["currency"])):
            b = bucket[key]
            b["market_value"] += h["market_value_base"] or 0
            b["cost"] += h["total_cost_base"] or 0
            b["unrealised"] += h["unrealised_base"] or 0
            b["realised"] += h["realised_base"] or 0
            b["dividends"] += h["dividends_base"] or 0
    contributions = sum(a for _, a in flows if a > 0)
    withdrawals = sum(-a for _, a in flows if a < 0)
    return {
        "history": history,
        "twr": twr_total, "twr_annualised": ann_twr, "mwr_annualised": mwr,
        "contributions": contributions, "withdrawals": withdrawals,
        "realised": sum(h["realised_base"] or 0 for h in hs),
        "unrealised": sum(h["unrealised_base"] or 0 for h in hs),
        "dividends": sum(h["dividends_base"] or 0 for h in hs),
        "by_account": {k: dict(v) for k, v in by_account.items()},
        "by_security": {k: dict(v) for k, v in by_security.items()},
        "by_currency": {k: dict(v) for k, v in by_currency.items()},
        "flows": flows,
    }


def benchmark_series(conn, symbol: str) -> list[tuple[str, float]]:
    row = conn.execute(
        "SELECT id FROM securities WHERE ticker=? AND exchange='INDEX'",
        (symbol,)).fetchone()
    if not row:
        return []
    return [(r["price_date"], r["price"]) for r in conn.execute(
        "SELECT price_date, price FROM prices WHERE security_id=? "
        "ORDER BY price_date", (row["id"],))]


def risk(conn) -> dict:
    cfg = config(conn)
    hs = [h for h in holdings(conn) if h["status"] in ACTIVE_STATUSES
          and (h["market_value_base"] or 0) > 0]
    alloc = allocation(conn)
    total = sum(h["market_value_base"] for h in hs)
    history = value_history(conn)
    values = [p["total"] for p in history if not p["incomplete"]]
    returns = perf.daily_returns(values)
    betas = {}
    for b in cfg["benchmarks"]:
        b = b.strip()
        if not b:
            continue
        series = benchmark_series(conn, b)
        bench_returns = perf.daily_returns([v for _, v in series])
        betas[b] = perf.beta(returns, bench_returns)
    div_by_company = income(conn)["by_company"]
    div_total = sum(c["gross"] for c in div_by_company) or 0
    return {
        "largest_holding": hs[0] if hs else None,
        "top5_weight_pct": sum(h["weight_pct"] or 0 for h in hs[:5]),
        "top5": hs[:5],
        "sector_top": alloc["sector"][:3],
        "country_top": alloc["country"][:3],
        "currency_exposure": alloc["currency"],
        "account_concentration": alloc["account"],
        "volatility_annualised": perf.volatility_annualised(returns),
        "max_drawdown": perf.max_drawdown(values) if values else None,
        "beta": betas,
        "dividend_concentration": (div_by_company[0] | {
            "pct": div_by_company[0]["gross"] / div_total * 100}
            if div_by_company and div_total else None),
        "total_value": total,
        "note": "Descriptive indicators, not investment advice.",
    }


def data_quality(conn) -> dict:
    cfg = config(conn)
    hs = holdings(conn)
    secs = _securities(conn)
    txns = load_transactions(conn, include_staged=True)
    unresolved = [s for s in secs.values() if s["status"] == "unresolved"]
    missing_price = [h for h in hs if h["quantity"] > 1e-9 and h["price"] is None]
    stale_prices = [h for h in hs if h["quantity"] > 1e-9 and h["price_stale"]
                    and h["price"] is not None]
    currencies = {t["currency"] for t in txns if t.get("currency")}
    missing_fx = []
    for ccy in sorted(currencies - {cfg["base_currency"]}):
        if fx_latest(conn, ccy, cfg["base_currency"]) is None:
            missing_fx.append(ccy)
    dupes = [dict(r) for r in conn.execute(
        "SELECT dedupe_hash, COUNT(*) n, GROUP_CONCAT(id) ids FROM transactions "
        "WHERE status='confirmed' AND dedupe_hash IS NOT NULL "
        "GROUP BY dedupe_hash HAVING n > 1")]
    negative = [h for h in hs if h["quantity"] < -1e-9]
    issues = [{"ticker": h["ticker"], "issues": h["issues"]}
              for h in hs if h["issues"]]
    staged = [dict(t) for t in txns if t.get("status") == "staged"]
    missing_ticker_exchange = [s for s in secs.values()
                               if s["exchange"] == "UNKNOWN"
                               and s["status"] != "watchlist_only"]
    unconfirmed_ca = [dict(r) for r in conn.execute(
        "SELECT * FROM transactions WHERE type IN ('spin_off','merger',"
        "'rights_issue') AND verification_status != 'verified'")]
    last_import = conn.execute(
        "SELECT MAX(imported_at) m FROM import_files").fetchone()["m"]
    return {
        "unresolved_instruments": unresolved,
        "missing_prices": missing_price,
        "stale_prices": stale_prices,
        "missing_fx": missing_fx,
        "possible_duplicates": dupes,
        "reconciliation_issues": issues,
        "negative_holdings": negative,
        "staged_transactions": staged,
        "missing_exchange": missing_ticker_exchange,
        "unconfirmed_corporate_actions": unconfirmed_ca,
        "last_import": last_import,
    }
