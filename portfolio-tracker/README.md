# Portfolio Tracker

A secure, **local-first** personal stock portfolio tracker. Holdings are
derived from transactions (`buys + transfers in + stock distributions − sells
− transfers out`), every imported record is preserved and auditable, and
nothing leaves your machine.

## Quick start

```bash
cd portfolio-tracker
python3 -m venv .venv && .venv/bin/pip install -e '.[dev]'
cp .env.example .env                      # optional; defaults work
.venv/bin/portfolio setup --seed          # creates data/portfolio.db + seeds context
.venv/bin/portfolio import portfolio_inputs/<your-export>.csv
.venv/bin/portfolio reconcile             # review before trusting anything
.venv/bin/portfolio refresh               # prices (stooq) + FX (frankfurter/ECB)
.venv/bin/portfolio holdings
.venv/bin/portfolio dashboard             # http://127.0.0.1:8765
```

Run the tests any time: `.venv/bin/python -m pytest tests/`

## Commands

| Command | Purpose |
|---|---|
| `portfolio setup [--seed] [--base-currency SGD] [--cost-basis weighted_average\|fifo\|specific_lot] [--benchmarks ^SPX,^STI] [--track-cash 0\|1]` | initialise DB, settings, alert defaults |
| `portfolio import <file> [--adapter generic_csv\|generic_xlsx] [--yes]` | staged, validated, idempotent import |
| `portfolio reconcile` | full reconciliation report (also saved to `data/reports/`) |
| `portfolio refresh [--history-days N]` | refresh prices + FX (cached; stale data flagged, never silently substituted) |
| `portfolio holdings` / `portfolio transactions [--ticker --type --from --to]` | views |
| `portfolio edit-transaction <id> <field> <value> --reason …` | edit with original value retained |
| `portfolio confirm-transaction <id> [--void]` | resolve a staged transaction |
| `portfolio security list\|resolve\|set` | manage instruments (status, sector, ISIN, provider symbol) |
| `portfolio price <ticker> <exchange> <price> <date>` | manual price override (marked `manual`) |
| `portfolio report <name>\|all [--format csv\|xlsx]`, `portfolio report --month YYYY-MM` | CSV/XLSX exports; monthly MD+PDF |
| `portfolio backup` / `portfolio restore <file>` | timestamped backups (also automatic before scheduled runs) |
| `portfolio alert add\|list\|check\|kinds` | local alerts |
| `portfolio snapshot` | store today's valuation snapshot |
| `portfolio auto` | scheduled job: backup → prices → FX → snapshot → alerts → backup |
| `portfolio dashboard [--port 8765]` | local web dashboard (127.0.0.1 only) |

Schedule the daily job with cron: `30 18 * * 1-5 cd /path/to/portfolio-tracker && .venv/bin/portfolio auto`
It backs up **before** writing anything, isolates each step, and never
corrupts the last valid data if a provider is down.

## How data gets in

1. **Files** — CSV/XLSX exports dropped in `portfolio_inputs/` (git-ignored)
   and imported with `portfolio import`. Column names are flexible (see
   `docs/import-formats.md`); `templates/transactions_template.csv` is the
   generic template. PDFs are not silently parsed — transcribe into the
   template or request a broker-specific adapter.
2. Every import: original preserved under `data/imports/`, SHA-256 hashed
   (re-importing the same file is a no-op), parsed into a staging table,
   validated, summarised; rows with warnings need explicit confirmation and
   duplicate rows are skipped by dedupe hash. Full audit log in `audit_log`.
3. **Manual/opening positions** — a row with `type=opening_position` records
   a verified opening quantity + average price when full history isn't
   available.

## Trust model for holdings

Every security carries one status: `confirmed_current`, `provisional_current`,
`historical`, `closed`, `watchlist_only`, `unresolved`. Statements beat chat
history; transaction history beats manually entered quantities; research
discussions are never ownership evidence. Provisional holdings are displayed
separately with a visible warning and are never silently mixed into confirmed
totals. Historical (2012 SGX) positions live in `historical_reconciliation`
and are excluded from current value/allocation/income/performance unless
confirmed open. Mismatches surface in `portfolio reconcile` — they are never
silently resolved.

## Security

- No brokerage passwords, no trading permissions, no order execution — ever.
- Read-only API keys only, in `.env` (git-ignored along with the database,
  backups and everything in `portfolio_inputs/`).
- Account numbers are masked (`****1234`) in the DB, logs and UI.
- Dashboard binds to 127.0.0.1 only. No data is uploaded anywhere; the only
  outbound requests are price/FX downloads from the configured providers.
- Automatic timestamped backups before scheduled writes; manual
  `portfolio backup` / `portfolio restore` any time.

See `docs/` for: import formats, the data dictionary, metric definitions
(TWR/MWR, FX split, cost-basis methods), security guidance, backup/restore
and troubleshooting.

## Library choices

- **sqlite3 (stdlib)** — permanent store; plain SQL migrations in
  `portfolio_tracker/migrations/`, applied in order and recorded.
- **Flask** — minimal maintained web framework for the local dashboard;
  server-rendered pages with inline SVG charts (no CDN, fully offline).
- **stooq + frankfurter (ECB)** — free, keyless price/FX providers behind a
  provider interface (`marketdata/base.py`); swap providers via `.env`
  without touching portfolio logic.
- **openpyxl / fpdf2** — XLSX and PDF report output.
- **pytest** — 39 automated tests over synthetic data only.
