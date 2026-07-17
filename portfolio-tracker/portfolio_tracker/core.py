"""Shared constants and small helpers (masking, hashing, parsing)."""
from __future__ import annotations

import hashlib
import json

TRANSACTION_TYPES = {
    "buy", "sell", "dividend", "withholding_tax", "fee", "platform_fee",
    "deposit", "withdrawal", "transfer_in", "transfer_out", "split",
    "reverse_split", "spin_off", "merger", "rights_issue",
    "return_of_capital", "fx_conversion", "opening_position",
}
QUANTITY_TYPES = {"buy", "sell", "transfer_in", "transfer_out", "opening_position"}
CASH_TYPES = {"deposit", "withdrawal", "fx_conversion"}
SECURITY_STATUSES = {
    "confirmed_current", "provisional_current", "historical",
    "closed", "watchlist_only", "unresolved",
}
PRICE_QUALITIES = {"live", "delayed", "previous_close", "manual"}


def mask_reference(ref: str | None) -> str | None:
    """Mask an account reference, keeping only the last 4 characters."""
    if not ref:
        return ref
    ref = str(ref).strip()
    if len(ref) <= 4:
        return "****"
    return "****" + ref[-4:]


def file_sha256(path) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def dedupe_hash(account_id, ticker, exchange, txn_type, trade_date,
                quantity, price, gross_amount, currency) -> str:
    """Stable hash used to detect duplicate transactions across imports."""
    key = json.dumps(
        [account_id, ticker, exchange, txn_type, trade_date,
         _num(quantity), _num(price), _num(gross_amount), currency],
        separators=(",", ":"),
    )
    return hashlib.sha256(key.encode()).hexdigest()[:32]


def _num(v):
    if v is None or v == "":
        return None
    return round(float(v), 8)


def parse_number(value) -> float | None:
    """Parse '1,234.50', '(120.00)', '$99' style numbers; None if blank."""
    if value is None:
        return None
    s = str(value).strip()
    if not s:
        return None
    negative = s.startswith("(") and s.endswith(")")
    s = s.strip("()")
    s = s.replace(",", "").replace("$", "").replace("S$", "").replace("US$", "").strip()
    if not s:
        return None
    v = float(s)
    return -v if negative else v
