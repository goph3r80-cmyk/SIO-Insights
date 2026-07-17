"""Cost-basis engine: buys/sells, partial disposals, fees, dividends, splits,
transfers, FIFO vs weighted average vs specific lot, return of capital."""
import pytest

from portfolio_tracker.calc.positions import build_positions, cash_balances


def T(**kw):
    base = {"id": kw.get("id", 1), "account_id": 1, "security_id": 1,
            "status": "confirmed", "fees": 0, "tax": 0, "currency": "USD",
            "fx_rate_to_base": 1.0}
    base.update(kw)
    return base


def test_buy_sell_weighted_average():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100),
        T(id=2, type="buy", trade_date="2025-02-01", quantity=10, price=200),
        T(id=3, type="sell", trade_date="2025-03-01", quantity=5, price=250),
    ]
    pos = build_positions(txns, "weighted_average")[(1, 1)]
    assert pos.quantity == pytest.approx(15)
    assert pos.avg_cost_local == pytest.approx(150)      # (1000+2000)/20
    assert pos.realised_local == pytest.approx(5 * (250 - 150))
    assert pos.total_cost_local == pytest.approx(15 * 150)


def test_fifo_partial_disposal():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100),
        T(id=2, type="buy", trade_date="2025-02-01", quantity=10, price=200),
        T(id=3, type="sell", trade_date="2025-03-01", quantity=15, price=250),
    ]
    pos = build_positions(txns, "fifo")[(1, 1)]
    assert pos.quantity == pytest.approx(5)
    # FIFO consumes 10@100 then 5@200 → cost 2000; proceeds 3750
    assert pos.realised_local == pytest.approx(3750 - 2000)
    assert pos.avg_cost_local == pytest.approx(200)      # remaining lot


def test_specific_lot():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100,
          lot_id="A"),
        T(id=2, type="buy", trade_date="2025-02-01", quantity=10, price=200,
          lot_id="B"),
        T(id=3, type="sell", trade_date="2025-03-01", quantity=10, price=250,
          lot_id="B"),
    ]
    pos = build_positions(txns, "specific_lot")[(1, 1)]
    assert pos.realised_local == pytest.approx(10 * (250 - 200))
    assert pos.avg_cost_local == pytest.approx(100)      # lot A remains


def test_fees_capitalised_on_buy_and_deducted_on_sell():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100,
          fees=20),
        T(id=2, type="sell", trade_date="2025-02-01", quantity=10, price=110,
          fees=15),
    ]
    pos = build_positions(txns)[(1, 1)]
    # cost = 1020, proceeds = 1100-15 = 1085
    assert pos.realised_local == pytest.approx(65)
    assert pos.fees_local == pytest.approx(35)


def test_dividend_and_withholding():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=100, price=10),
        T(id=2, type="dividend", trade_date="2025-04-01", gross_amount=50,
          tax=15),
    ]
    pos = build_positions(txns)[(1, 1)]
    assert pos.dividends_local == pytest.approx(50)
    assert pos.withholding_local == pytest.approx(15)


def test_stock_split_preserves_cost():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100),
        T(id=2, type="split", trade_date="2025-02-01", split_ratio=10),
    ]
    pos = build_positions(txns)[(1, 1)]
    assert pos.quantity == pytest.approx(100)
    assert pos.avg_cost_local == pytest.approx(10)
    assert pos.total_cost_local == pytest.approx(1000)


def test_reverse_split():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=100, price=10),
        T(id=2, type="reverse_split", trade_date="2025-02-01", split_ratio=0.1),
    ]
    pos = build_positions(txns)[(1, 1)]
    assert pos.quantity == pytest.approx(10)
    assert pos.avg_cost_local == pytest.approx(100)


def test_transfer_between_accounts_carries_no_pl():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100,
          account_id=1),
        T(id=2, type="transfer_out", trade_date="2025-02-01", quantity=10,
          account_id=1),
        T(id=3, type="transfer_in", trade_date="2025-02-01", quantity=10,
          price=100, account_id=2),
    ]
    positions = build_positions(txns)
    assert positions[(1, 1)].quantity == pytest.approx(0)
    assert positions[(1, 1)].realised_local == pytest.approx(0)
    assert positions[(2, 1)].quantity == pytest.approx(10)
    assert positions[(2, 1)].avg_cost_local == pytest.approx(100)
    # portfolio-level (across accounts) still 10 shares
    merged = build_positions(txns, by_account=False)[(None, 1)]
    assert merged.quantity == pytest.approx(10)


def test_fx_split_realised_base_vs_local():
    # Buy at fx 1.30 SGD/USD, sell at fx 1.40 — FX gain included in base P/L.
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100,
          fx_rate_to_base=1.30),
        T(id=2, type="sell", trade_date="2025-06-01", quantity=10, price=100,
          fx_rate_to_base=1.40),
    ]
    pos = build_positions(txns)[(1, 1)]
    assert pos.realised_local == pytest.approx(0)          # no USD gain
    assert pos.realised_base == pytest.approx(1000 * 1.40 - 1000 * 1.30)


def test_oversell_flags_negative_holding():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=5, price=100),
        T(id=2, type="sell", trade_date="2025-02-01", quantity=8, price=100),
    ]
    pos = build_positions(txns)[(1, 1)]
    assert pos.quantity == pytest.approx(-3)
    assert any("oversell" in i for i in pos.issues)


def test_return_of_capital_reduces_basis():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100),
        T(id=2, type="return_of_capital", trade_date="2025-03-01",
          gross_amount=200),
    ]
    pos = build_positions(txns)[(1, 1)]
    assert pos.total_cost_local == pytest.approx(800)
    assert pos.realised_local == pytest.approx(0)


def test_staged_transactions_excluded():
    txns = [
        T(id=1, type="buy", trade_date="2025-01-01", quantity=10, price=100),
        T(id=2, type="buy", trade_date="2025-02-01", quantity=99, price=1,
          status="staged"),
    ]
    pos = build_positions(txns)[(1, 1)]
    assert pos.quantity == pytest.approx(10)


def test_cash_deposits_withdrawals_and_trades():
    txns = [
        T(id=1, type="deposit", trade_date="2025-01-01", gross_amount=10000,
          currency="SGD", security_id=None),
        T(id=2, type="buy", trade_date="2025-01-05", quantity=10, price=100,
          fees=10, currency="USD"),
        T(id=3, type="sell", trade_date="2025-02-01", quantity=5, price=120,
          fees=5, currency="USD"),
        T(id=4, type="withdrawal", trade_date="2025-03-01", gross_amount=1000,
          currency="SGD", security_id=None),
        T(id=5, type="dividend", trade_date="2025-03-15", gross_amount=50,
          tax=15, currency="USD"),
    ]
    bal = cash_balances(txns)
    assert bal[(1, "SGD")] == pytest.approx(9000)
    assert bal[(1, "USD")] == pytest.approx(-1010 + 595 + 35)


def test_missing_price_on_buy_flagged():
    txns = [T(id=1, type="buy", trade_date="2025-01-01", quantity=10,
              price=None)]
    pos = build_positions(txns)[(1, 1)]
    assert pos.quantity == pytest.approx(10)
    assert any("missing purchase price" in i for i in pos.issues)
