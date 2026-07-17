"""Database connection, migrations, backup/restore and audit logging."""
from __future__ import annotations

import json
import os
import re
import shutil
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

MIGRATIONS_DIR = Path(__file__).parent / "migrations"
DEFAULT_DB = "portfolio.db"


def utcnow() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def data_dir() -> Path:
    d = Path(os.environ.get("PORTFOLIO_DATA_DIR", Path.cwd() / "data"))
    d.mkdir(parents=True, exist_ok=True)
    return d


def db_path() -> Path:
    return Path(os.environ.get("PORTFOLIO_DB", data_dir() / DEFAULT_DB))


def connect(path: Path | str | None = None) -> sqlite3.Connection:
    p = Path(path) if path else db_path()
    p.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(p)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA journal_mode = WAL")
    return conn


def migrate(conn: sqlite3.Connection) -> list[str]:
    """Apply pending SQL migrations in order. Returns names applied."""
    conn.execute(
        "CREATE TABLE IF NOT EXISTS schema_migrations ("
        "version INTEGER PRIMARY KEY, name TEXT NOT NULL, applied_at TEXT NOT NULL)"
    )
    applied = {r["version"] for r in conn.execute("SELECT version FROM schema_migrations")}
    done = []
    for f in sorted(MIGRATIONS_DIR.glob("*.sql")):
        m = re.match(r"(\d+)_", f.name)
        if not m:
            continue
        version = int(m.group(1))
        if version in applied:
            continue
        conn.executescript(f.read_text())
        conn.execute(
            "INSERT INTO schema_migrations (version, name, applied_at) VALUES (?,?,?)",
            (version, f.name, utcnow()),
        )
        conn.commit()
        done.append(f.name)
    return done


def audit(conn: sqlite3.Connection, event: str, detail: dict | str | None = None) -> None:
    if isinstance(detail, dict):
        detail = json.dumps(detail, default=str)
    conn.execute(
        "INSERT INTO audit_log (event, detail, created_at) VALUES (?,?,?)",
        (event, detail, utcnow()),
    )
    conn.commit()


def get_setting(conn: sqlite3.Connection, key: str, default: str | None = None) -> str | None:
    row = conn.execute("SELECT value FROM settings WHERE key=?", (key,)).fetchone()
    return row["value"] if row else default


def set_setting(conn: sqlite3.Connection, key: str, value: str) -> None:
    conn.execute(
        "INSERT INTO settings (key, value, updated_at) VALUES (?,?,?) "
        "ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at",
        (key, value, utcnow()),
    )
    conn.commit()


def backups_dir() -> Path:
    d = Path(os.environ.get("PORTFOLIO_BACKUP_DIR", data_dir() / "backups"))
    d.mkdir(parents=True, exist_ok=True)
    return d


def backup(conn: sqlite3.Connection, label: str = "manual") -> Path:
    """Create a timestamped consistent backup using the SQLite backup API."""
    ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    dest = backups_dir() / f"portfolio-{ts}-{label}.db"
    out = sqlite3.connect(dest)
    with out:
        conn.backup(out)
    out.close()
    audit(conn, "backup.created", {"path": str(dest), "label": label})
    return dest


def restore(backup_file: Path | str) -> Path:
    """Restore the main database from a backup file (current DB is first backed aside)."""
    src = Path(backup_file)
    if not src.exists():
        raise FileNotFoundError(src)
    # Validate the backup is a readable SQLite db with our schema marker.
    check = sqlite3.connect(src)
    try:
        check.execute("SELECT count(*) FROM schema_migrations").fetchone()
    finally:
        check.close()
    target = db_path()
    if target.exists():
        ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
        aside = backups_dir() / f"portfolio-{ts}-pre_restore.db"
        shutil.copy2(target, aside)
    for suffix in ("-wal", "-shm"):
        side = Path(str(target) + suffix)
        if side.exists():
            side.unlink()
    shutil.copy2(src, target)
    conn = connect(target)
    audit(conn, "backup.restored", {"from": str(src)})
    conn.close()
    return target
