# Import formats

## Supported inputs

| Format | How |
|---|---|
| CSV | `portfolio import file.csv` (adapter auto-detected) |
| XLSX / XLSM | `portfolio import file.xlsx` (first sheet, same columns) |
| PDF statements | not parsed automatically — transcribe rows into the generic template. A broker-specific adapter can be added under `portfolio_tracker/importers/` (subclass `ImportAdapter`). |
| Manual holdings | one `opening_position` row per holding (see below) |

## Generic template — `templates/transactions_template.csv`

Columns (aliases in parentheses are also recognised, case-insensitive):

| Column | Required | Notes |
|---|---|---|
| `date` (trade date, transaction date) | yes | YYYY-MM-DD |
| `type` (action, activity) | yes | one of the transaction types below |
| `ticker` (symbol, code, counter) | for security rows | uppercased |
| `exchange` (market) | recommended | ticker alone is NOT assumed unique; missing exchange → warning + `UNKNOWN` |
| `name` (company, description) | no | |
| `quantity` (qty, shares, units) | buy/sell/transfer/opening | |
| `price` (unit price) | buys should have it | in `currency` |
| `gross_amount` (amount, total) | dividends, cash rows | |
| `fees` (commission, brokerage) | no | capitalised into cost on buys, deducted from proceeds on sells |
| `tax` (withholding, wht) | no | dividend withholding tax |
| `currency` (ccy) | recommended | defaults to base currency with a warning |
| `account_broker` (broker, platform) / `account_name` (account) | no | auto-creates accounts |
| `account_reference` (account number) | no | stored masked (`****1234`) |
| `note`, `lot_id`, `split_ratio`, `external_id` (reference, order id) | no | `split_ratio` required for splits (2-for-1 → `2`; 1-for-10 → `0.1`); `external_id` used for duplicate detection |

## Transaction types

`buy`, `sell`, `dividend`, `withholding_tax`, `fee`, `platform_fee`,
`deposit`, `withdrawal`, `transfer_in`, `transfer_out`, `split`,
`reverse_split`, `spin_off`, `merger`, `rights_issue`, `return_of_capital`,
`fx_conversion`, `opening_position`

- **opening_position** — verified opening holding when history is incomplete:
  ticker, exchange, name, quantity, average purchase price (`price`),
  currency, broker (`account_broker`), account (`account_name`), date.
- **fx_conversion** — `currency` + `quantity` = amount sold; `gross_amount` =
  amount bought; put `to:CCY` in `note`.
- **transfer_in/out** — moves shares between accounts without realising P/L;
  give `price` on `transfer_in` to carry the cost basis.

## Import pipeline guarantees

preserve original → SHA-256 hash → refuse already-imported files → stage →
validate → summary → clean rows commit, warning rows need confirmation,
rejected rows never commit → per-row dedupe hash prevents duplicates even
across differently named files → audit log entries for every step.
