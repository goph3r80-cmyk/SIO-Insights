"""Price/FX service: caching, staleness, manual overrides, provider fallback.

Portfolio logic never talks to providers directly — only to this module.
When a provider is unavailable the last valid cached price is used and
flagged stale; a missing symbol is reported, never substituted.
"""
from __future__ import annotations

import os
import sqlite3
from datetime import datetime, timezone

from ..db import audit, get_setting, utcnow
from .base import FxProvider, MarketDataProvider, ProviderError
from .fx import FrankfurterProvider
from .stooq import StooqProvider

STALE_DAYS_DEFAULT = 5


def get_provider(conn: sqlite3.Connection) -> MarketDataProvider:
    name = os.environ.get("MARKET_DATA_PROVIDER") or get_setting(
        conn, "market_data_provider", "stooq")
    if name == "stooq":
        return StooqProvider()
    raise ProviderError(f"unknown market data provider '{name}'")


def get_fx_provider(conn: sqlite3.Connection) -> FxProvider:
    name = os.environ.get("FX_PROVIDER") or get_setting(conn, "fx_provider", "frankfurter")
    if name == "frankfurter":
        return FrankfurterProvider()
    raise ProviderError(f"unknown FX provider '{name}'")


def store_price(conn, security_id: int, price: float, currency: str, price_date: str,
                source: str, quality: str, price_time: str | None = None) -> None:
    conn.execute(
        "INSERT INTO prices (security_id, price, currency, price_date, price_time,"
        " source, retrieved_at, quality) VALUES (?,?,?,?,?,?,?,?) "
        "ON CONFLICT(security_id, price_date, source) DO UPDATE SET"
        " price=excluded.price, currency=excluded.currency,"
        " retrieved_at=excluded.retrieved_at, quality=excluded.quality",
        (security_id, price, currency, price_date, price_time, source, utcnow(), quality))
    conn.commit()


def set_manual_price(conn, security_id: int, price: float, currency: str,
                     price_date: str) -> None:
    store_price(conn, security_id, price, currency, price_date, "manual", "manual")
    audit(conn, "price.manual_override",
          {"security_id": security_id, "price": price, "date": price_date})


def latest_price(conn, security_id: int, stale_days: int | None = None):
    """Return (row | None, is_stale). Manual overrides win on equal dates."""
    row = conn.execute(
        "SELECT * FROM prices WHERE security_id=? "
        "ORDER BY price_date DESC, CASE source WHEN 'manual' THEN 0 ELSE 1 END, "
        "retrieved_at DESC LIMIT 1", (security_id,)).fetchone()
    if row is None:
        return None, True
    stale_days = stale_days if stale_days is not None else STALE_DAYS_DEFAULT
    age = (datetime.now(timezone.utc).date()
           - datetime.strptime(row["price_date"], "%Y-%m-%d").date()).days
    return row, age > stale_days


def price_on(conn, security_id: int, on_date: str):
    return conn.execute(
        "SELECT * FROM prices WHERE security_id=? AND price_date<=? "
        "ORDER BY price_date DESC, CASE source WHEN 'manual' THEN 0 ELSE 1 END "
        "LIMIT 1", (security_id, on_date)).fetchone()


def refresh_prices(conn, security_ids: list[int] | None = None,
                   history_days: int = 0) -> dict:
    """Fetch latest (and optionally historical) prices for active securities."""
    provider = get_provider(conn)
    if security_ids:
        q = ("SELECT * FROM securities WHERE id IN (%s)"
             % ",".join("?" * len(security_ids)))
        secs = conn.execute(q, security_ids).fetchall()
    else:
        secs = conn.execute(
            "SELECT * FROM securities WHERE status IN "
            "('confirmed_current','provisional_current','watchlist_only')").fetchall()
    ok, failed = [], []
    today = datetime.now(timezone.utc).date().isoformat()
    for s in secs:
        try:
            quote = provider.latest(s["ticker"], s["exchange"],
                                    symbol=s["provider_symbol"])
            currency = s["currency"] or quote.currency or ""
            store_price(conn, s["id"], quote.price, currency, quote.price_date,
                        quote.source, quote.quality, quote.price_time)
            if history_days:
                start = (datetime.now(timezone.utc).date()
                         ).fromordinal(datetime.now(timezone.utc).date().toordinal()
                                       - history_days).isoformat()
                for h in provider.history(s["ticker"], s["exchange"], start, today,
                                          symbol=s["provider_symbol"]):
                    store_price(conn, s["id"], h.price, currency, h.price_date,
                                h.source, h.quality)
            ok.append(s["ticker"])
        except ProviderError as e:
            failed.append({"ticker": s["ticker"], "exchange": s["exchange"],
                           "error": str(e)})
    audit(conn, "prices.refresh", {"ok": ok, "failed": failed})
    return {"ok": ok, "failed": failed}


def resolve_security(conn, security_id: int) -> dict:
    """Validate a security against the provider; fill currency/provider_symbol.
    Never substitutes a different instrument on failure."""
    s = conn.execute("SELECT * FROM securities WHERE id=?", (security_id,)).fetchone()
    provider = get_provider(conn)
    try:
        quote = provider.latest(s["ticker"], s["exchange"], symbol=s["provider_symbol"])
    except ProviderError as e:
        conn.execute("UPDATE securities SET notes=COALESCE(notes,'') || ? WHERE id=?",
                     (f"\n[resolve failed {utcnow()}] {e}", security_id))
        conn.commit()
        return {"resolved": False, "error": str(e)}
    updates = {"provider_symbol": quote.symbol}
    if not s["currency"] and quote.currency:
        updates["currency"] = quote.currency
    sets = ", ".join(f"{k}=?" for k in updates)
    conn.execute(f"UPDATE securities SET {sets} WHERE id=?",
                 (*updates.values(), security_id))
    conn.commit()
    return {"resolved": True, "symbol": quote.symbol,
            "price": quote.price, "currency": quote.currency or s["currency"]}


# ---- FX ------------------------------------------------------------------------


def store_fx(conn, base: str, quote: str, rate: float, rate_date: str, source: str):
    conn.execute(
        "INSERT INTO fx_rates (base, quote, rate, rate_date, source, retrieved_at)"
        " VALUES (?,?,?,?,?,?) ON CONFLICT(base, quote, rate_date, source)"
        " DO UPDATE SET rate=excluded.rate, retrieved_at=excluded.retrieved_at",
        (base, quote, rate, rate_date, source, utcnow()))
    conn.commit()


def fx_on(conn, from_ccy: str, to_ccy: str, on_date: str) -> float | None:
    """Historical rate from_ccy -> to_ccy at the latest date <= on_date."""
    if from_ccy == to_ccy:
        return 1.0
    row = conn.execute(
        "SELECT rate FROM fx_rates WHERE base=? AND quote=? AND rate_date<=? "
        "ORDER BY rate_date DESC LIMIT 1", (from_ccy, to_ccy, on_date)).fetchone()
    if row:
        return float(row["rate"])
    inv = conn.execute(
        "SELECT rate FROM fx_rates WHERE base=? AND quote=? AND rate_date<=? "
        "ORDER BY rate_date DESC LIMIT 1", (to_ccy, from_ccy, on_date)).fetchone()
    return 1.0 / float(inv["rate"]) if inv and inv["rate"] else None


def fx_latest(conn, from_ccy: str, to_ccy: str) -> float | None:
    return fx_on(conn, from_ccy, to_ccy, "9999-12-31")


def refresh_fx(conn, base_currency: str, history_days: int = 0) -> dict:
    """Refresh rates for every currency seen in transactions/securities."""
    currencies = {r["currency"] for r in conn.execute(
        "SELECT DISTINCT currency FROM transactions WHERE currency IS NOT NULL")}
    currencies |= {r["currency"] for r in conn.execute(
        "SELECT DISTINCT currency FROM securities WHERE currency IS NOT NULL")}
    currencies.discard(None)
    currencies.discard("")
    currencies.discard(base_currency)
    fxp = get_fx_provider(conn)
    ok, failed = [], []
    today = datetime.now(timezone.utc).date()
    for ccy in sorted(currencies):
        try:
            rate, rate_date = fxp.rate(ccy, base_currency)
            store_fx(conn, ccy, base_currency, rate, rate_date, fxp.name)
            if history_days:
                start = today.fromordinal(today.toordinal() - history_days).isoformat()
                for d, r in fxp.history(ccy, base_currency, start, today.isoformat()):
                    store_fx(conn, ccy, base_currency, r, d, fxp.name)
            ok.append(ccy)
        except ProviderError as e:
            failed.append({"currency": ccy, "error": str(e)})
    audit(conn, "fx.refresh", {"base": base_currency, "ok": ok, "failed": failed})
    return {"ok": ok, "failed": failed}
