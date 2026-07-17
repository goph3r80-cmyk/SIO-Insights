"""Performance mathematics: valuation series, TWR, MWR (XIRR), annualisation.

- Money-weighted return (XIRR) reflects the investor's experience: it weights
  periods by how much capital was invested.
- Time-weighted return removes the effect of deposits/withdrawals: it is the
  portfolio-manager view.
Deposits are never treated as gains: both measures account for external flows.
"""
from __future__ import annotations

from datetime import date as _date, datetime, timedelta

DAYS_IN_YEAR = 365.25


def _d(s) -> _date:
    if isinstance(s, _date):
        return s
    return datetime.strptime(str(s)[:10], "%Y-%m-%d").date()


def xirr(flows: list[tuple[str, float]], guess_lo: float = -0.9999,
         guess_hi: float = 10.0, tol: float = 1e-8) -> float | None:
    """Money-weighted annualised return via bisection on NPV.

    flows: (date, amount) — negative for money in (deposit/purchase),
    positive for money out (withdrawal) and the terminal portfolio value.
    Returns None if no sign change (rate not defined).
    """
    flows = [(_d(d), a) for d, a in flows if abs(a) > 1e-12]
    if len(flows) < 2:
        return None
    t0 = min(d for d, _ in flows)

    def npv(rate: float) -> float:
        return sum(a / (1 + rate) ** ((d - t0).days / DAYS_IN_YEAR) for d, a in flows)

    lo, hi = guess_lo, guess_hi
    f_lo, f_hi = npv(lo), npv(hi)
    if f_lo * f_hi > 0:
        return None
    for _ in range(200):
        mid = (lo + hi) / 2
        f_mid = npv(mid)
        if abs(f_mid) < tol:
            return mid
        if f_lo * f_mid < 0:
            hi, f_hi = mid, f_mid
        else:
            lo, f_lo = mid, f_mid
    return (lo + hi) / 2


def twr(valuations: list[tuple[str, float]], flows: list[tuple[str, float]]) -> float | None:
    """Time-weighted return over the valuation period (not annualised).

    valuations: (date, portfolio value) sorted points, value BEFORE that day's flow.
    flows: external flows (positive = money added to the portfolio).
    Each sub-period return: V_end / (V_start + flow_at_start_of_period) chained.
    Flows are assumed to occur at the start of the sub-period following their date.
    """
    if len(valuations) < 2:
        return None
    valuations = sorted(((_d(d), v) for d, v in valuations), key=lambda x: x[0])
    flow_by_date: dict[_date, float] = {}
    for d, a in flows:
        dd = _d(d)
        flow_by_date[dd] = flow_by_date.get(dd, 0.0) + a

    growth = 1.0
    for (d0, v0), (d1, v1) in zip(valuations, valuations[1:]):
        # a valuation is the value BEFORE that day's flow, so a flow dated d0
        # belongs at the start of the period beginning d0
        f = sum(a for dd, a in flow_by_date.items() if d0 <= dd < d1)
        start = v0 + f
        if start <= 0:
            continue
        growth *= v1 / start
    return growth - 1.0


def annualise(total_return: float, start, end) -> float | None:
    """Annualise a cumulative return over [start, end]; None if < 90 days
    (annualising very short periods is not meaningful)."""
    days = (_d(end) - _d(start)).days
    if days < 90:
        return None
    if total_return <= -1:
        return -1.0
    return (1 + total_return) ** (DAYS_IN_YEAR / days) - 1


def max_drawdown(values: list[float]) -> float:
    """Largest peak-to-trough decline as a negative fraction."""
    peak, mdd = float("-inf"), 0.0
    for v in values:
        peak = max(peak, v)
        if peak > 0:
            mdd = min(mdd, (v - peak) / peak)
    return mdd


def daily_returns(values: list[float]) -> list[float]:
    return [v1 / v0 - 1 for v0, v1 in zip(values, values[1:]) if v0 > 0]


def volatility_annualised(returns: list[float]) -> float | None:
    n = len(returns)
    if n < 20:
        return None
    mean = sum(returns) / n
    var = sum((r - mean) ** 2 for r in returns) / (n - 1)
    return (var ** 0.5) * (252 ** 0.5)


def beta(portfolio_returns: list[float], benchmark_returns: list[float]) -> float | None:
    n = min(len(portfolio_returns), len(benchmark_returns))
    if n < 20:
        return None
    p, b = portfolio_returns[-n:], benchmark_returns[-n:]
    mp, mb = sum(p) / n, sum(b) / n
    cov = sum((pi - mp) * (bi - mb) for pi, bi in zip(p, b)) / (n - 1)
    var = sum((bi - mb) ** 2 for bi in b) / (n - 1)
    if var == 0:
        return None
    return cov / var


def date_range(start, end) -> list[str]:
    d0, d1 = _d(start), _d(end)
    out = []
    while d0 <= d1:
        out.append(d0.isoformat())
        d0 += timedelta(days=1)
    return out
