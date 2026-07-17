"""Frankfurter FX provider — free, keyless ECB reference rates."""
from __future__ import annotations

import requests

from .base import FxProvider, ProviderError


class FrankfurterProvider(FxProvider):
    name = "frankfurter"
    base_url = "https://api.frankfurter.dev/v1"

    def __init__(self, session: requests.Session | None = None, timeout: int = 20):
        self.session = session or requests.Session()
        self.timeout = timeout

    def _get(self, path: str, params: dict) -> dict:
        try:
            r = self.session.get(self.base_url + path, params=params, timeout=self.timeout)
            r.raise_for_status()
            return r.json()
        except (requests.RequestException, ValueError) as e:
            raise ProviderError(f"frankfurter request failed: {e}") from e

    def rate(self, base: str, quote: str, on_date: str | None = None) -> tuple[float, str]:
        if base == quote:
            return 1.0, on_date or "latest"
        path = f"/{on_date}" if on_date else "/latest"
        data = self._get(path, {"base": base, "symbols": quote})
        try:
            return float(data["rates"][quote]), data["date"]
        except KeyError as e:
            raise ProviderError(f"frankfurter: no rate {base}->{quote}") from e

    def history(self, base: str, quote: str, start: str, end: str) -> list[tuple[str, float]]:
        if base == quote:
            return []
        data = self._get(f"/{start}..{end}", {"base": base, "symbols": quote})
        rates = data.get("rates", {})
        return sorted((d, float(v[quote])) for d, v in rates.items() if quote in v)
