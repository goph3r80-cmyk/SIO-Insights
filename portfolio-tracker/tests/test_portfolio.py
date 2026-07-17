"""Holdings/summary views, FX conversion, stale & missing prices, backups,
seeding rules and reconciliation against a known synthetic portfolio."""
import pytest

from portfolio_tracker import db as dbm
from portfolio_tracker.portfolio import (data_quality, holdings, income,
                                         summary)
from portfolio_tracker.reconcile import reconciliation
from tests.conftest import add_account, add_fx, add_price, add_security, add_txn


def build_sample(conn):
    """Known synthetic portfolio: 10 AAA @100 USD (fx 1.30), price now 110,
    fx now 1.35; 200 BBB @5 SGD, price now 6."""
    acct = add_account(conn)
    aaa = add_security(conn, "AAA", "NASDAQ", "USD", sector="Tech",
                       country="US")
    bbb = add_security(conn, "BBB", "SGX", "SGD", sector="REIT", country="SG")
    add_txn(conn, aaa, acct, "buy", "2025-01-02", 10, 100, fees=10,
            currency="USD", fx_rate_to_base=1.30)
    add_txn(conn, bbb, acct, "buy", "2025-01-03", 200, 5, fees=5,
            currency="SGD", fx_rate_to_base=1.0)
    add_txn(conn, aaa, acct, "dividend", "2025-06-01", gross_amount=8, tax=2.4,
            currency="USD", fx_rate_to_base=1.32)
    add_price(conn, aaa, 110, "2026-07-16", "USD")
    add_price(conn, aaa, 108, "2026-07-15", "USD")
    add_price(conn, bbb, 6, "2026-07-16", "SGD")
    add_fx(conn, "USD", "SGD", 1.35, "2026-07-16")
    return acct, aaa, bbb


def test_holdings_metrics(conn):
    _, aaa, _ = build_sample(conn)
    hs = {h["ticker"]: h for h in holdings(conn)}
    a = hs["AAA"]
    assert a["quantity"] == pytest.approx(10)
    assert a["avg_cost"] == pytest.approx(101.0)          # fees capitalised
    assert a["market_value_local"] == pytest.approx(1100)
    assert a["market_value_base"] == pytest.approx(1100 * 1.35)
    assert a["unrealised_local"] == pytest.approx(1100 - 1010)
    # FX split: security gain at today's fx + fx revaluation of cost
    assert a["unrealised_security_base"] == pytest.approx(90 * 1.35)
    assert a["unrealised_fx_base"] == pytest.approx(1010 * (1.35 - 1.30))
    assert a["unrealised_base"] == pytest.approx(
        a["unrealised_security_base"] + a["unrealised_fx_base"])
    assert a["day_change_local"] == pytest.approx(10 * (110 - 108))
    assert a["dividends_local"] == pytest.approx(8)
    b = hs["BBB"]
    assert b["market_value_base"] == pytest.approx(1200)
    total = a["market_value_base"] + b["market_value_base"]
    assert a["weight_pct"] == pytest.approx(a["market_value_base"] / total * 100)


def test_summary_and_income(conn):
    build_sample(conn)
    s = summary(conn)
    assert s["holdings_count"] == 2
    assert s["total_value"] == pytest.approx(1100 * 1.35 + 1200 +
                                             s["cash"], rel=1e-6)
    inc = income(conn)
    assert inc["gross"] == pytest.approx(8 * 1.32)
    assert inc["withholding"] == pytest.approx(2.4 * 1.32)
    assert inc["by_month"][0]["month"] == "2025-06"


def test_missing_and_stale_prices_flagged(conn):
    acct = add_account(conn)
    noprice = add_security(conn, "NOPX", "NYSE", "USD")
    stale = add_security(conn, "STAL", "NYSE", "USD")
    add_txn(conn, noprice, acct, "buy", "2025-01-01", 5, 10, currency="USD",
            fx_rate_to_base=1.3)
    add_txn(conn, stale, acct, "buy", "2025-01-01", 5, 10, currency="USD",
            fx_rate_to_base=1.3)
    add_price(conn, stale, 12, "2025-06-01", "USD")   # over a year old
    dq = data_quality(conn)
    assert [h["ticker"] for h in dq["missing_prices"]] == ["NOPX"]
    assert [h["ticker"] for h in dq["stale_prices"]] == ["STAL"]
    s = summary(conn)
    assert any("stale" in w for w in s["warnings"])
    hs = {h["ticker"]: h for h in holdings(conn)}
    assert hs["STAL"]["price_stale"] is True
    assert hs["NOPX"]["market_value_base"] is None


def test_manual_price_override_wins(conn):
    from portfolio_tracker.marketdata.service import latest_price, set_manual_price
    acct = add_account(conn)
    sec = add_security(conn, "MANL", "NYSE", "USD")
    add_price(conn, sec, 50, "2026-07-16", "USD", source="stooq")
    set_manual_price(conn, sec, 55, "USD", "2026-07-16")
    row, _ = latest_price(conn, sec)
    assert row["price"] == 55 and row["source"] == "manual"
    assert row["quality"] == "manual"


def test_backup_and_restore(conn, tmp_path):
    build_sample(conn)
    path = dbm.backup(conn, label="test")
    assert path.exists()
    # wipe a table, then restore
    conn.execute("DELETE FROM transactions")
    conn.commit()
    assert conn.execute("SELECT COUNT(*) c FROM transactions").fetchone()["c"] == 0
    conn.close()   # connections must be closed before restoring
    restored = dbm.restore(path)
    c2 = dbm.connect(restored)
    assert c2.execute("SELECT COUNT(*) c FROM transactions").fetchone()["c"] == 3
    c2.close()


def test_seed_rules(conn):
    """Seeded context: provisional securities, staged MU txn, historical and
    watchlist excluded from current holdings/value."""
    from portfolio_tracker.seed import seed_known_context
    counts = seed_known_context(conn)
    assert counts == {"provisional": 5, "watchlist": 4, "staged": 1,
                      "historical": 12}
    # MU stays staged → no position
    hs = holdings(conn)
    assert all(h["ticker"] != "MU" for h in hs)
    s = summary(conn)
    assert s["total_value"] == 0                       # nothing confirmed yet
    assert any("staged" in w for w in s["warnings"])
    # MU price preserved exactly as recorded
    mu = conn.execute("SELECT * FROM transactions WHERE status='staged'"
                      ).fetchone()
    assert mu["price"] == 650.0 and mu["quantity"] == 30 and mu["fees"] == 32.0
    # watchlist never included
    wl = conn.execute("SELECT portfolio_value_inclusion i FROM securities "
                      "WHERE status='watchlist_only'").fetchall()
    assert all(r["i"] == 0 for r in wl)
    # seeding twice is a no-op
    assert seed_known_context(conn) == {"skipped": "already seeded"}


def test_reconciliation_sample(conn):
    from portfolio_tracker.seed import seed_known_context
    seed_known_context(conn)
    rec = reconciliation(conn)
    tickers = {r["ticker"] for r in rec["holdings_table"]}
    assert {"MSFT", "NVDA", "GOOGL", "PLTR", "BP", "MU"} <= tickers
    # every provisional row flags an issue (no transaction evidence)
    for r in rec["holdings_table"]:
        if r["status"] == "provisional_current":
            assert "broker" in r["issue"]
    assert len(rec["historical"]) == 12
    assert len(rec["watchlist"]) == 4
    assert rec["material_issues"]      # staged MU must surface as material


def test_confirmed_transactions_drive_reconciliation_quantity(conn):
    acct = add_account(conn)
    sec = add_security(conn, "CONF", "NYSE", "USD")
    add_txn(conn, sec, acct, "buy", "2025-01-01", 10, 50, currency="USD",
            fx_rate_to_base=1.3)
    add_txn(conn, sec, acct, "sell", "2025-02-01", 4, 60, currency="USD",
            fx_rate_to_base=1.3)
    rec = reconciliation(conn)
    row = next(r for r in rec["holdings_table"] if r["ticker"] == "CONF")
    assert row["calculated_quantity"] == pytest.approx(6)


def test_masking(conn):
    from portfolio_tracker.core import mask_reference
    assert mask_reference("12345678") == "****5678"
    assert mask_reference("123") == "****"
    assert mask_reference(None) is None
