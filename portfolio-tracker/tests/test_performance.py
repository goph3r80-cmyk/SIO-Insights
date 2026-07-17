"""TWR, MWR (XIRR), annualisation, drawdown, volatility, beta."""
import pytest

from portfolio_tracker.calc.performance import (annualise, beta, max_drawdown,
                                                twr, volatility_annualised,
                                                xirr)


def test_xirr_simple_one_year_double():
    flows = [("2024-01-01", -1000), ("2025-01-01", 2000)]
    r = xirr(flows)
    assert r == pytest.approx(1.0, abs=0.01)   # +100% over ~1 year


def test_xirr_with_interim_contribution():
    flows = [("2024-01-01", -1000), ("2024-07-01", -1000),
             ("2025-01-01", 2100)]
    r = xirr(flows)
    assert r is not None and 0.0 < r < 0.15


def test_xirr_negative_return():
    flows = [("2024-01-01", -1000), ("2025-01-01", 800)]
    r = xirr(flows)
    assert r == pytest.approx(-0.2, abs=0.01)


def test_twr_ignores_deposit_timing():
    # Value doubles, then a large deposit arrives, then value is flat.
    # TWR must be +100% regardless of the deposit.
    valuations = [("2024-01-01", 1000), ("2024-06-01", 2000),
                  ("2024-12-31", 12000)]
    flows = [("2024-06-01", 10000)]
    r = twr(valuations, flows)
    assert r == pytest.approx(1.0, abs=1e-9)


def test_twr_deposit_not_a_gain():
    # No market movement at all; deposits must not create return.
    valuations = [("2024-01-01", 1000), ("2024-06-01", 1000),
                  ("2024-12-31", 6000)]
    flows = [("2024-06-01", 5000)]
    assert twr(valuations, flows) == pytest.approx(0.0, abs=1e-9)


def test_annualise():
    assert annualise(0.21, "2024-01-01", "2026-01-01") == pytest.approx(
        0.1, abs=0.005)
    assert annualise(0.10, "2024-01-01", "2024-02-01") is None  # too short


def test_max_drawdown():
    assert max_drawdown([100, 120, 60, 90, 130]) == pytest.approx(-0.5)
    assert max_drawdown([1, 2, 3]) == 0.0


def test_volatility_needs_enough_data():
    assert volatility_annualised([0.01] * 5) is None
    v = volatility_annualised([0.01, -0.01] * 30)
    assert v is not None and v > 0


def test_beta_against_benchmark():
    bench = [0.01, -0.02, 0.015, -0.005, 0.02] * 10
    port = [2 * r for r in bench]
    assert beta(port, bench) == pytest.approx(2.0, abs=1e-6)
    assert beta(port[:5], bench[:5]) is None   # insufficient data
