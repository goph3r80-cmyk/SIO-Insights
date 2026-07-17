"""Stooq provider — free, keyless end-of-day quotes for many world exchanges."""
from __future__ import annotations

import csv
import io
from datetime import datetime, timezone

import requests

from .base import MarketDataProvider, ProviderError, Quote

# Exchange → stooq suffix. Extend as needed; unknown exchanges raise, they are
# never silently guessed.
EXCHANGE_SUFFIX = {
    "NASDAQ": ".us", "NYSE": ".us", "NYSEARCA": ".us", "AMEX": ".us", "BATS": ".us",
    "LSE": ".uk", "SGX": ".sg", "HKEX": ".hk", "TSE": ".jp", "XETRA": ".de",
    "EURONEXT": ".fr", "ASX": ".au", "INDEX": "",  # indices like ^spx pass through
}

CURRENCY_BY_SUFFIX = {".us": "USD", ".uk": "GBP", ".sg": "SGD", ".hk": "HKD",
                      ".jp": "JPY", ".de": "EUR", ".fr": "EUR", ".au": "AUD"}


class StooqProvider(MarketDataProvider):
    name = "stooq"
    base_url = "https://stooq.com"

    def __init__(self, session: requests.Session | None = None, timeout: int = 20):
        self.session = session or requests.Session()
        self.timeout = timeout

    def provider_symbol(self, ticker: str, exchange: str) -> str:
        exchange = (exchange or "UNKNOWN").upper()
        if ticker.startswith("^"):           # index symbols pass through
            return ticker.lower()
        if exchange not in EXCHANGE_SUFFIX:
            raise ProviderError(
                f"stooq: no symbol mapping for exchange '{exchange}' "
                f"(ticker {ticker}); set securities.provider_symbol manually")
        return f"{ticker.lower()}{EXCHANGE_SUFFIX[exchange]}"

    def _get(self, path: str) -> str:
        try:
            r = self.session.get(self.base_url + path, timeout=self.timeout)
            r.raise_for_status()
        except requests.RequestException as e:
            raise ProviderError(f"stooq request failed: {e}") from e
        return r.text

    def latest(self, ticker: str, exchange: str, symbol: str | None = None) -> Quote:
        sym = symbol or self.provider_symbol(ticker, exchange)
        text = self._get(f"/q/l/?s={sym}&f=sd2t2ohlcv&h&e=csv")
        rows = list(csv.DictReader(io.StringIO(text)))
        if not rows or rows[0].get("Close") in (None, "", "N/D"):
            raise ProviderError(f"stooq: no data for symbol '{sym}' — not resolved")
        row = rows[0]
        suffix = "." + sym.rsplit(".", 1)[-1] if "." in sym else ""
        return Quote(
            symbol=sym,
            price=float(row["Close"]),
            currency=CURRENCY_BY_SUFFIX.get(suffix),
            price_date=row.get("Date") or datetime.now(timezone.utc).date().isoformat(),
            price_time=row.get("Time") or None,
            quality="previous_close",
            source=self.name,
        )

    def history(self, ticker: str, exchange: str, start: str, end: str,
                symbol: str | None = None) -> list[Quote]:
        sym = symbol or self.provider_symbol(ticker, exchange)
        d1, d2 = start.replace("-", ""), end.replace("-", "")
        text = self._get(f"/q/d/l/?s={sym}&i=d&d1={d1}&d2={d2}")
        rows = list(csv.DictReader(io.StringIO(text)))
        if not rows or "Close" not in (rows[0] or {}):
            raise ProviderError(f"stooq: no history for symbol '{sym}'")
        suffix = "." + sym.rsplit(".", 1)[-1] if "." in sym else ""
        out = []
        for row in rows:
            try:
                price = float(row["Close"])
            except (TypeError, ValueError):
                continue
            out.append(Quote(sym, price, CURRENCY_BY_SUFFIX.get(suffix),
                             row["Date"], None, "previous_close", self.name))
        return out
