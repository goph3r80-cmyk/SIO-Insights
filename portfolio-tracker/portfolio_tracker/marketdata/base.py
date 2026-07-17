"""Market-data provider interface.

Providers are swappable without touching portfolio logic: the service layer
(`service.py`) talks only to this interface. Select the active provider with
the `market_data_provider` setting (or MARKET_DATA_PROVIDER env var).
"""
from __future__ import annotations

from dataclasses import dataclass


@dataclass
class Quote:
    symbol: str            # provider-native symbol actually used
    price: float
    currency: str | None
    price_date: str        # YYYY-MM-DD the price belongs to
    price_time: str | None
    quality: str           # live | delayed | previous_close | manual
    source: str


class ProviderError(Exception):
    """Provider unavailable or symbol not served — never guess a substitute."""


class MarketDataProvider:
    name = "base"

    def provider_symbol(self, ticker: str, exchange: str) -> str:
        """Map (ticker, exchange) to this provider's symbol format.
        Raise ProviderError if the exchange is not supported."""
        raise NotImplementedError

    def latest(self, ticker: str, exchange: str) -> Quote:
        raise NotImplementedError

    def history(self, ticker: str, exchange: str, start: str, end: str) -> list[Quote]:
        raise NotImplementedError


class FxProvider:
    name = "base-fx"

    def rate(self, base: str, quote: str, on_date: str | None = None) -> tuple[float, str]:
        """Return (rate, rate_date) for 1 base unit in quote currency."""
        raise NotImplementedError

    def history(self, base: str, quote: str, start: str, end: str) -> list[tuple[str, float]]:
        raise NotImplementedError
