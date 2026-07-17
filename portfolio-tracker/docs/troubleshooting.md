# Troubleshooting

**`stooq request failed` / `frankfurter request failed`** — the provider is
unreachable (offline, firewall, or corporate proxy). The app keeps the last
valid cached price and flags it stale; nothing is corrupted. Retry later, or
enter a price manually: `portfolio price MSFT NASDAQ 500.00 2026-07-17`.

**`no data for symbol '<sym>' — not resolved`** — the provider does not serve
that symbol under the mapped name. Set the provider-native symbol explicitly:
`portfolio security set --id <id> --provider-symbol <sym>` (find ids via
`portfolio security list`). The tracker never substitutes a similarly named
security.

**A holding shows `provisional` / totals look wrong** — run
`portfolio reconcile`. Provisional positions have no confirmed transaction
evidence yet; import your latest broker export, then set the security to
`confirmed_current`: `portfolio security set --id <id> --status confirmed_current`.

**Staged transaction (e.g. the MU purchase)** — inspect on the dashboard
Data-quality page or `portfolio transactions`. After checking your statement:
`portfolio confirm-transaction <id>` (or `--void` if it never happened). Edit
first if a value was wrong: `portfolio edit-transaction <id> price 65.00
--reason "statement shows US$65, not US$650"` — the original is retained.

**Re-imported a file and nothing happened** — that's the idempotency
guarantee: identical files (by SHA-256) and identical rows (by dedupe hash)
are skipped, never duplicated.

**`disk I/O error` after restore** — close every running `portfolio`
process (dashboard, cron job) and try again; stale WAL handles from the old
database file cause this.

**Dashboard shows "insufficient data" for volatility/beta** — those need at
least ~20 valuation points; run `portfolio refresh --history-days 365` and
let daily snapshots accumulate.

**Wrong base currency / cost basis** — `portfolio setup --base-currency USD`
or `--cost-basis fifo` any time; recalculation is automatic (values are
derived, not stored).
