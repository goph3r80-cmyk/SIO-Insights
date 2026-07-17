-- 0001_initial.sql — core schema
PRAGMA foreign_keys = ON;

CREATE TABLE settings (
    key        TEXT PRIMARY KEY,
    value      TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE accounts (
    id               INTEGER PRIMARY KEY,
    broker           TEXT NOT NULL,
    name             TEXT NOT NULL,
    account_type     TEXT NOT NULL DEFAULT 'brokerage',
    currency         TEXT NOT NULL DEFAULT 'SGD',
    masked_reference TEXT,
    created_at       TEXT NOT NULL,
    UNIQUE (broker, name)
);

-- Instrument key is (ticker, exchange); ticker alone is never assumed unique.
CREATE TABLE securities (
    id                        INTEGER PRIMARY KEY,
    ticker                    TEXT NOT NULL,
    exchange                  TEXT NOT NULL DEFAULT 'UNKNOWN',
    name                      TEXT,
    asset_type                TEXT NOT NULL DEFAULT 'equity',
    sector                    TEXT,
    industry                  TEXT,
    currency                  TEXT,
    country                   TEXT,
    isin                      TEXT,
    -- confirmed_current | provisional_current | historical | closed | watchlist_only | unresolved
    status                    TEXT NOT NULL DEFAULT 'unresolved',
    source_status             TEXT,
    verification_status       TEXT,
    portfolio_value_inclusion INTEGER NOT NULL DEFAULT 1,
    provider_symbol           TEXT,
    notes                     TEXT,
    created_at                TEXT NOT NULL,
    UNIQUE (ticker, exchange)
);

CREATE TABLE import_files (
    id              INTEGER PRIMARY KEY,
    filename        TEXT NOT NULL,
    stored_path     TEXT NOT NULL,
    sha256          TEXT NOT NULL UNIQUE,
    adapter         TEXT NOT NULL,
    imported_at     TEXT NOT NULL,
    row_count       INTEGER NOT NULL DEFAULT 0,
    committed_count INTEGER NOT NULL DEFAULT 0,
    rejected_count  INTEGER NOT NULL DEFAULT 0,
    -- staged | committed | duplicate | aborted
    status          TEXT NOT NULL DEFAULT 'staged'
);

CREATE TABLE staging_transactions (
    id                  INTEGER PRIMARY KEY,
    import_file_id      INTEGER REFERENCES import_files (id),
    row_number          INTEGER,
    raw_record          TEXT NOT NULL,
    parsed_json         TEXT,
    -- ok | warning | rejected
    validation_status   TEXT NOT NULL DEFAULT 'ok',
    validation_messages TEXT,
    -- pending | committed | skipped
    resolution          TEXT NOT NULL DEFAULT 'pending',
    created_at          TEXT NOT NULL
);

CREATE TABLE transactions (
    id                  INTEGER PRIMARY KEY,
    account_id          INTEGER REFERENCES accounts (id),
    security_id         INTEGER REFERENCES securities (id),
    -- buy | sell | dividend | withholding_tax | fee | platform_fee | deposit |
    -- withdrawal | transfer_in | transfer_out | split | reverse_split | spin_off |
    -- merger | rights_issue | return_of_capital | fx_conversion | opening_position
    type                TEXT NOT NULL,
    trade_date          TEXT NOT NULL,
    settle_date         TEXT,
    quantity            REAL,
    price               REAL,
    gross_amount        REAL,
    fees                REAL NOT NULL DEFAULT 0,
    tax                 REAL NOT NULL DEFAULT 0,
    currency            TEXT NOT NULL,
    fx_rate_to_base     REAL,
    split_ratio         REAL,
    lot_id              TEXT,
    note                TEXT,
    -- import | manual | seed
    source              TEXT NOT NULL DEFAULT 'manual',
    source_status       TEXT,
    verification_status TEXT,
    -- staged | confirmed | void
    status              TEXT NOT NULL DEFAULT 'confirmed',
    import_file_id      INTEGER REFERENCES import_files (id),
    staging_id          INTEGER REFERENCES staging_transactions (id),
    raw_record          TEXT,
    external_id         TEXT,
    dedupe_hash         TEXT,
    created_at          TEXT NOT NULL,
    updated_at          TEXT
);
CREATE INDEX idx_txn_security ON transactions (security_id, trade_date);
CREATE INDEX idx_txn_account  ON transactions (account_id, trade_date);
CREATE INDEX idx_txn_dedupe   ON transactions (dedupe_hash);

-- Edits to imported transactions keep the original value.
CREATE TABLE transaction_edits (
    id             INTEGER PRIMARY KEY,
    transaction_id INTEGER NOT NULL REFERENCES transactions (id),
    field          TEXT NOT NULL,
    old_value      TEXT,
    new_value      TEXT,
    reason         TEXT,
    edited_at      TEXT NOT NULL
);

CREATE TABLE prices (
    id           INTEGER PRIMARY KEY,
    security_id  INTEGER NOT NULL REFERENCES securities (id),
    price        REAL NOT NULL,
    currency     TEXT NOT NULL,
    price_date   TEXT NOT NULL,
    price_time   TEXT,
    source       TEXT NOT NULL,
    retrieved_at TEXT NOT NULL,
    -- live | delayed | previous_close | manual
    quality      TEXT NOT NULL DEFAULT 'previous_close',
    UNIQUE (security_id, price_date, source)
);
CREATE INDEX idx_prices_lookup ON prices (security_id, price_date);

CREATE TABLE fx_rates (
    id           INTEGER PRIMARY KEY,
    base         TEXT NOT NULL,
    quote        TEXT NOT NULL,
    rate         REAL NOT NULL,
    rate_date    TEXT NOT NULL,
    source       TEXT NOT NULL,
    retrieved_at TEXT NOT NULL,
    UNIQUE (base, quote, rate_date, source)
);
CREATE INDEX idx_fx_lookup ON fx_rates (base, quote, rate_date);

CREATE TABLE snapshots (
    id             INTEGER PRIMARY KEY,
    snapshot_date  TEXT NOT NULL UNIQUE,
    total_value    REAL,
    cash_value     REAL,
    invested       REAL,
    unrealised     REAL,
    realised       REAL,
    income         REAL,
    base_currency  TEXT,
    details_json   TEXT,
    created_at     TEXT NOT NULL
);

CREATE TABLE historical_reconciliation (
    id                        INTEGER PRIMARY KEY,
    historical_code           TEXT NOT NULL,
    counter_name              TEXT,
    historical_quantity       REAL,
    current_instrument        TEXT,
    corporate_actions         TEXT,
    delisted_status           TEXT,
    successor_security        TEXT,
    disposal_evidence         TEXT,
    current_holding_confirmed TEXT NOT NULL DEFAULT 'unconfirmed',
    notes                     TEXT,
    as_of                     TEXT
);

CREATE TABLE announced_dividends (
    id          INTEGER PRIMARY KEY,
    security_id INTEGER NOT NULL REFERENCES securities (id),
    ex_date     TEXT,
    pay_date    TEXT,
    amount      REAL NOT NULL,
    currency    TEXT NOT NULL,
    -- announced (confirmed by company) | estimated
    status      TEXT NOT NULL DEFAULT 'announced',
    source      TEXT,
    created_at  TEXT NOT NULL
);

CREATE TABLE alert_rules (
    id          INTEGER PRIMARY KEY,
    kind        TEXT NOT NULL,
    params_json TEXT NOT NULL DEFAULT '{}',
    enabled     INTEGER NOT NULL DEFAULT 1,
    created_at  TEXT NOT NULL
);

CREATE TABLE alert_events (
    id           INTEGER PRIMARY KEY,
    rule_id      INTEGER REFERENCES alert_rules (id),
    kind         TEXT NOT NULL,
    message      TEXT NOT NULL,
    triggered_at TEXT NOT NULL,
    acknowledged INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE audit_log (
    id         INTEGER PRIMARY KEY,
    event      TEXT NOT NULL,
    detail     TEXT,
    created_at TEXT NOT NULL
);
