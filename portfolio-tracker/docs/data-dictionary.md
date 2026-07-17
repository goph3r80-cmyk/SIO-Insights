# Data dictionary

SQLite database at `data/portfolio.db` (override with `PORTFOLIO_DB`).
Schema is managed by ordered SQL migrations in
`portfolio_tracker/migrations/`, recorded in `schema_migrations`.

## settings
`key`/`value` pairs: `base_currency`, `cost_basis_method`
(`weighted_average|fifo|specific_lot`), `benchmarks`, `track_cash`,
`stale_days`, `market_data_provider`, `fx_provider`, `seeded`.

## accounts
`broker`, `name`, `account_type`, `currency`, `masked_reference`
(only the last 4 characters of any account number are ever stored).

## securities
Instrument key is **(ticker, exchange)** — ticker alone is never assumed
unique. Fields: `name`, `asset_type`, `sector`, `industry`, `currency`
(trading currency), `country`, `isin` (unique identifier where available),
`status` (`confirmed_current|provisional_current|historical|closed|
watchlist_only|unresolved`), `source_status` (where the record came from,
e.g. `imported`, `identified_from_prior_portfolio_discussion`),
`verification_status`, `portfolio_value_inclusion` (0 ⇒ never in totals),
`provider_symbol` (provider-native symbol override), `notes`.

## transactions
`type` (see import formats), `trade_date`, `settle_date`, `quantity`,
`price`, `gross_amount`, `fees`, `tax`, `currency`, `fx_rate_to_base`
(historical FX captured for the trade date), `split_ratio`, `lot_id`
(specific-lot identification), `status` (`staged|confirmed|void` — only
`confirmed` rows enter calculations), `source` (`import|manual|seed`),
`source_status`, `verification_status`, `raw_record` (the original imported
record, verbatim JSON), `external_id`, `dedupe_hash`, `import_file_id`,
`staging_id`.

Labels: **imported** = came from a file (raw record kept); **calculated** =
derived by the engine; **estimated** = flagged in `verification_status`;
**manually verified** = `verification_status='manually_verified'`.

## transaction_edits
Every edit to a transaction: `field`, `old_value`, `new_value`, `reason`,
`edited_at`. Originals are never overwritten silently.

## import_files / staging_transactions
File-level: `sha256` (idempotency), `stored_path` (preserved original),
adapter, counts, status. Row-level: `raw_record`, `parsed_json`,
`validation_status` (`ok|warning|rejected`), `resolution`
(`pending|committed|skipped`).

## prices
`security_id`, `price`, `currency`, `price_date`, `price_time`, `source`,
`retrieved_at`, `quality` (`live|delayed|previous_close|manual`). Manual
overrides win on equal dates. A price older than `stale_days` is flagged
stale everywhere it is displayed.

## fx_rates
`base`, `quote`, `rate`, `rate_date`, `source`, `retrieved_at` — historical
rates for transaction capture and valuation.

## snapshots
Daily portfolio valuation: `snapshot_date`, `total_value`, `cash_value`,
`invested`, `unrealised`, `realised`, `income`, `base_currency`.

## historical_reconciliation
2012 SGX (and any other) historical positions: `historical_code`,
`counter_name`, `historical_quantity`, `current_instrument`,
`corporate_actions`, `delisted_status`, `successor_security`,
`disposal_evidence`, `current_holding_confirmed`, `notes`, `as_of`.
Never included in current totals unless confirmed.

## announced_dividends
Confirmed announced dividends (`status='announced'`) vs estimates
(`status='estimated'`) — kept separate in the income forecast.

## alert_rules / alert_events / audit_log
Alert configuration (kind + JSON params), fired events, and the append-only
audit trail of every material operation.
