import pytest

from portfolio_tracker.db import connect, migrate, set_setting


@pytest.fixture()
def conn(tmp_path, monkeypatch):
    monkeypatch.setenv("PORTFOLIO_DATA_DIR", str(tmp_path / "data"))
    monkeypatch.setenv("PORTFOLIO_DB", str(tmp_path / "data" / "test.db"))
    monkeypatch.setenv("PORTFOLIO_BACKUP_DIR", str(tmp_path / "backups"))
    c = connect()
    migrate(c)
    set_setting(c, "base_currency", "SGD")
    set_setting(c, "cost_basis_method", "weighted_average")
    set_setting(c, "track_cash", "1")
    yield c
    c.close()


def add_security(conn, ticker="TEST", exchange="NASDAQ", currency="USD",
                 status="confirmed_current", **kw):
    from portfolio_tracker.db import utcnow
    cur = conn.execute(
        "INSERT INTO securities (ticker, exchange, name, currency, status,"
        " sector, country, created_at) VALUES (?,?,?,?,?,?,?,?)",
        (ticker, exchange, kw.get("name", ticker), currency, status,
         kw.get("sector"), kw.get("country"), utcnow()))
    conn.commit()
    return cur.lastrowid


def add_account(conn, broker="TestBroker", name="main", currency="SGD"):
    from portfolio_tracker.db import utcnow
    cur = conn.execute(
        "INSERT INTO accounts (broker, name, currency, created_at)"
        " VALUES (?,?,?,?)", (broker, name, currency, utcnow()))
    conn.commit()
    return cur.lastrowid


def add_txn(conn, security_id=None, account_id=None, type="buy",
            trade_date="2025-01-01", quantity=None, price=None,
            gross_amount=None, fees=0, tax=0, currency="USD",
            fx_rate_to_base=None, split_ratio=None, lot_id=None,
            status="confirmed", note=None):
    from portfolio_tracker.db import utcnow
    cur = conn.execute(
        "INSERT INTO transactions (security_id, account_id, type, trade_date,"
        " quantity, price, gross_amount, fees, tax, currency, fx_rate_to_base,"
        " split_ratio, lot_id, status, note, source, created_at)"
        " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'manual',?)",
        (security_id, account_id, type, trade_date, quantity, price,
         gross_amount, fees, tax, currency, fx_rate_to_base, split_ratio,
         lot_id, status, note, utcnow()))
    conn.commit()
    return cur.lastrowid


def add_price(conn, security_id, price, price_date, currency="USD",
              source="test", quality="previous_close"):
    from portfolio_tracker.db import utcnow
    conn.execute(
        "INSERT OR REPLACE INTO prices (security_id, price, currency,"
        " price_date, source, retrieved_at, quality) VALUES (?,?,?,?,?,?,?)",
        (security_id, price, currency, price_date, source, utcnow(), quality))
    conn.commit()


def add_fx(conn, base, quote, rate, rate_date, source="test"):
    from portfolio_tracker.db import utcnow
    conn.execute(
        "INSERT OR REPLACE INTO fx_rates (base, quote, rate, rate_date, source,"
        " retrieved_at) VALUES (?,?,?,?,?,?)",
        (base, quote, rate, rate_date, source, utcnow()))
    conn.commit()
