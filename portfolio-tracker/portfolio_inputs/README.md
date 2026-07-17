# portfolio_inputs/

Drop your brokerage files here (they are **git-ignored** — nothing in this
folder except this README is ever committed):

- transaction exports (CSV / XLSX) — imported directly:
  `portfolio import portfolio_inputs/<file>`
- brokerage statements and contract notes (PDF) — transcribe rows into
  `templates/transactions_template.csv` (PDFs need broker-specific adapters;
  the generic CSV template is the supported manual path)
- dividend records (CSV with `type=dividend` rows)

Every import preserves the original file under `data/imports/`, is
hash-checked so re-importing the same file never duplicates transactions,
and goes through a staging + validation step before anything is committed.
