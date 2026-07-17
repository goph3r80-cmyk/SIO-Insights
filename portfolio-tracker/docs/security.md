# Security guidance

What this application will never do:
- store brokerage passwords (there is no field for them anywhere);
- request trading permissions or execute trades;
- upload your portfolio to any external service.

What it does:
- **Read-only market data**: outbound requests are limited to price/FX
  downloads from the configured providers (stooq + frankfurter by default,
  keyless). If you connect a provider that needs a key, create a
  **read-only** key and put it in `.env` — never in code or the DB.
- **Git hygiene**: `.env`, `data/` (database, imports, backups, reports) and
  everything in `portfolio_inputs/` are git-ignored. Check with
  `git status --ignored` before committing.
- **Masking**: account references are masked to the last 4 characters at
  ingest (`****1234`) — the full number is never persisted, logged or shown.
- **Local dashboard**: binds to 127.0.0.1 only. Do not expose it with a
  reverse proxy; it has no authentication because it is designed to stay on
  your machine.
- **Backups**: automatic timestamped backups before every scheduled run and
  on demand (`portfolio backup`). Backups contain your full portfolio —
  store them with the same care as the database.
- **Audit trail**: imports, edits, refreshes, backups and alerts are recorded
  in `audit_log`; edited transactions keep their original values in
  `transaction_edits`.

Note: `seed/known_context.json` contains the seed context you supplied in
the project brief (tickers, one staged MU transaction, 2012 historical
table). If you prefer that not to live in the repository, delete the file
after first `portfolio setup --seed` — the data is in the database from then
on.
