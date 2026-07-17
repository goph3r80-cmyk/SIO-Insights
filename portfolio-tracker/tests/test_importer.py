"""Import framework: staging, validation, duplicate files, duplicate rows."""
from pathlib import Path

from portfolio_tracker.importers.base import commit_staged, stage_file
from portfolio_tracker.importers.generic_csv import GenericCsvAdapter, pick_adapter

CSV = """date,type,ticker,exchange,quantity,price,fees,currency,broker,account
2025-01-15,buy,MSFT,NASDAQ,10,400,5,USD,TestBroker,main
2025-02-01,sell,MSFT,NASDAQ,4,420,5,USD,TestBroker,main
2025-03-01,dividend,MSFT,NASDAQ,,,,USD,TestBroker,main
"""


def _write(tmp_path, text, name="txns.csv") -> Path:
    p = tmp_path / name
    p.write_text(text)
    return p


def test_stage_and_commit(conn, tmp_path):
    f = _write(tmp_path, CSV)
    s = stage_file(conn, f, GenericCsvAdapter(), "SGD")
    assert not s["duplicate"]
    assert s["total"] == 3
    assert s["ok"] == 3
    r = commit_staged(conn, s["import_id"], "SGD")
    assert r["committed"] == 3
    n = conn.execute("SELECT COUNT(*) c FROM transactions").fetchone()["c"]
    assert n == r["committed"]
    # original preserved
    stored = conn.execute("SELECT stored_path FROM import_files").fetchone()
    assert Path(stored["stored_path"]).exists()


def test_reimport_same_file_is_noop(conn, tmp_path):
    f = _write(tmp_path, CSV)
    s1 = stage_file(conn, f, GenericCsvAdapter(), "SGD")
    commit_staged(conn, s1["import_id"], "SGD")
    before = conn.execute("SELECT COUNT(*) c FROM transactions").fetchone()["c"]
    s2 = stage_file(conn, f, GenericCsvAdapter(), "SGD")
    assert s2["duplicate"] is True
    after = conn.execute("SELECT COUNT(*) c FROM transactions").fetchone()["c"]
    assert after == before


def test_same_rows_in_renamed_file_not_duplicated(conn, tmp_path):
    f1 = _write(tmp_path, CSV, "a.csv")
    s1 = stage_file(conn, f1, GenericCsvAdapter(), "SGD")
    commit_staged(conn, s1["import_id"], "SGD")
    # same content plus one new row, different filename → only new row lands
    f2 = _write(tmp_path, CSV +
                "2025-04-01,buy,NVDA,NASDAQ,5,120,3,USD,TestBroker,main\n",
                "b.csv")
    s2 = stage_file(conn, f2, GenericCsvAdapter(), "SGD")
    r2 = commit_staged(conn, s2["import_id"], "SGD")
    assert r2["duplicates"] >= 2
    nvda = conn.execute(
        "SELECT COUNT(*) c FROM transactions t JOIN securities s "
        "ON s.id=t.security_id WHERE s.ticker='NVDA'").fetchone()["c"]
    assert nvda == 1


def test_rejected_rows_never_committed(conn, tmp_path):
    bad = ("date,type,ticker,exchange,quantity,price,currency\n"
           "2025-01-15,frobnicate,MSFT,NASDAQ,10,400,USD\n"    # bad type
           ",buy,MSFT,NASDAQ,10,400,USD\n")                    # missing date
    f = _write(tmp_path, bad)
    s = stage_file(conn, f, GenericCsvAdapter(), "SGD")
    assert s["rejected"] == 2
    r = commit_staged(conn, s["import_id"], "SGD")
    assert r["committed"] == 0


def test_warning_rows_need_confirmation(conn, tmp_path):
    warn = ("date,type,ticker,quantity,price,currency\n"
            "2025-01-15,buy,MSFT,10,400,USD\n")   # missing exchange → warning
    f = _write(tmp_path, warn)
    s = stage_file(conn, f, GenericCsvAdapter(), "SGD")
    assert s["warning"] == 1
    r1 = commit_staged(conn, s["import_id"], "SGD", include_warnings=False)
    assert r1["committed"] == 0
    # explicit confirmation commits it, with exchange recorded as UNKNOWN
    # (different file content — identical content would be caught by the hash)
    warn2 = warn.replace("2025-01-15", "2025-01-16")
    s2 = stage_file(conn, _write(tmp_path, warn2, "w2.csv"),
                    GenericCsvAdapter(), "SGD")
    r2 = commit_staged(conn, s2["import_id"], "SGD", include_warnings=True)
    assert r2["committed"] == 1
    sec = conn.execute("SELECT exchange FROM securities WHERE ticker='MSFT'"
                       ).fetchone()
    assert sec["exchange"] == "UNKNOWN"


def test_pdf_not_silently_parsed(conn, tmp_path):
    p = tmp_path / "statement.pdf"
    p.write_bytes(b"%PDF-1.4 fake")
    try:
        pick_adapter(p, None)
        raised = False
    except ValueError as e:
        raised = "broker-specific adapter" in str(e)
    assert raised


def test_import_audit_log(conn, tmp_path):
    f = _write(tmp_path, CSV)
    s = stage_file(conn, f, GenericCsvAdapter(), "SGD")
    commit_staged(conn, s["import_id"], "SGD")
    events = [r["event"] for r in conn.execute("SELECT event FROM audit_log")]
    assert "import.staged" in events and "import.committed" in events
