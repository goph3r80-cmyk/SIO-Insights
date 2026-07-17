# Backup and restore

## Backups

- `portfolio backup` — consistent snapshot via the SQLite backup API to
  `data/backups/portfolio-<UTC timestamp>-manual.db`.
- `portfolio auto` — takes a backup **before** touching anything
  (`…-auto-pre.db`) and another after a successful run (`…-auto.db`).
- Override the location with `PORTFOLIO_BACKUP_DIR`. Copy backups to a second
  disk or encrypted cloud storage yourself — the app never uploads them.

## Restore

```bash
portfolio restore data/backups/portfolio-20260717T154009Z-manual.db
```

- The backup is validated (must be a readable SQLite DB with this schema)
  before anything is touched.
- The current database is set aside first as `…-pre_restore.db`, so a restore
  is itself reversible.
- Stop the dashboard/scheduled jobs before restoring (open connections to the
  old file will error afterwards).
- Verify after restoring: `portfolio holdings` and `portfolio reconcile`.
