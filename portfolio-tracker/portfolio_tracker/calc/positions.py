"""Position and cost-basis engine.

Holdings are derived from transactions:
    buys + transfers in + stock distributions - sells - transfers out
Supported cost-basis methods: weighted_average, fifo, specific_lot
(specific_lot matches a sell's lot_id and falls back to FIFO otherwise).

All amounts are tracked twice: in the security's trading currency ("local")
and in the portfolio base currency ("base"), using each transaction's
historical fx_rate_to_base. FX gain/loss is therefore separable from the
underlying security performance.
"""
from __future__ import annotations

from dataclasses import dataclass, field

EPS = 1e-9


@dataclass
class Lot:
    qty: float
    unit_cost_local: float   # per-share cost incl. allocated fees, trading ccy
    unit_cost_base: float    # per-share cost at historical FX, base ccy
    date: str
    lot_id: str | None = None


@dataclass
class Position:
    account_id: int | None
    security_id: int
    currency: str = ""
    method: str = "weighted_average"
    lots: list[Lot] = field(default_factory=list)
    realised_local: float = 0.0        # realised P/L in trading ccy
    realised_base: float = 0.0         # realised P/L in base ccy (incl. FX effect)
    dividends_local: float = 0.0
    dividends_base: float = 0.0
    withholding_local: float = 0.0
    withholding_base: float = 0.0
    fees_local: float = 0.0
    fees_base: float = 0.0
    return_of_capital_local: float = 0.0
    issues: list[str] = field(default_factory=list)

    @property
    def quantity(self) -> float:
        return sum(l.qty for l in self.lots)

    @property
    def total_cost_local(self) -> float:
        return sum(l.qty * l.unit_cost_local for l in self.lots)

    @property
    def total_cost_base(self) -> float:
        return sum(l.qty * l.unit_cost_base for l in self.lots)

    @property
    def avg_cost_local(self) -> float:
        q = self.quantity
        return self.total_cost_local / q if abs(q) > EPS else 0.0

    @property
    def avg_cost_base(self) -> float:
        q = self.quantity
        return self.total_cost_base / q if abs(q) > EPS else 0.0

    # ---- transaction application -------------------------------------------------

    def add_lot(self, qty: float, unit_cost_local: float, unit_cost_base: float,
                date: str, lot_id: str | None = None) -> None:
        if qty <= EPS:
            return
        self.lots.append(Lot(qty, unit_cost_local, unit_cost_base, date, lot_id))
        if self.method == "weighted_average":
            self._pool()

    def _pool(self) -> None:
        """Collapse all lots into one average-cost lot (weighted_average)."""
        q = self.quantity
        if q <= EPS:
            return
        pooled = Lot(q, self.total_cost_local / q, self.total_cost_base / q,
                     min(l.date for l in self.lots))
        self.lots = [pooled]

    def remove(self, qty: float, date: str, lot_id: str | None = None) -> tuple[float, float]:
        """Consume qty from lots; returns (cost_local, cost_base) of shares removed."""
        remaining = qty
        cost_local = cost_base = 0.0
        order = list(self.lots)
        if self.method == "specific_lot" and lot_id:
            matched = [l for l in order if l.lot_id == lot_id]
            if matched:
                order = matched + [l for l in order if l.lot_id != lot_id]
            else:
                self.issues.append(f"lot_id '{lot_id}' not found on {date}; used FIFO")
        for lot in order:
            if remaining <= EPS:
                break
            take = min(lot.qty, remaining)
            lot.qty -= take
            remaining -= take
            cost_local += take * lot.unit_cost_local
            cost_base += take * lot.unit_cost_base
        self.lots = [l for l in self.lots if l.qty > EPS]
        if remaining > EPS:
            self.issues.append(
                f"oversell of {remaining:g} units on {date} (negative holding)")
            # Track the shortfall as a negative lot at zero cost so quantity reconciles.
            self.lots.append(Lot(-remaining, 0.0, 0.0, date))
        return cost_local, cost_base

    def apply_split(self, ratio: float, date: str) -> None:
        """ratio = new shares per old share (2.0 for 2-for-1; 0.1 for 1-for-10)."""
        if ratio <= 0:
            self.issues.append(f"invalid split ratio {ratio} on {date}")
            return
        for lot in self.lots:
            lot.qty *= ratio
            lot.unit_cost_local /= ratio
            lot.unit_cost_base /= ratio

    def apply_return_of_capital(self, amount_local: float, amount_base: float,
                                date: str) -> None:
        """Reduce cost basis pro-rata across lots; excess over basis is a gain."""
        total = self.total_cost_local
        if total <= EPS:
            self.realised_local += amount_local
            self.realised_base += amount_base
            return
        frac = min(1.0, amount_local / total)
        for lot in self.lots:
            lot.unit_cost_local *= (1 - frac)
            lot.unit_cost_base *= (1 - frac)
        excess = amount_local - total * frac
        if excess > EPS:
            self.realised_local += excess
            self.realised_base += excess * (amount_base / amount_local if amount_local else 1.0)
        self.return_of_capital_local += amount_local


def build_positions(transactions: list[dict], method: str = "weighted_average",
                    by_account: bool = True) -> dict[tuple, Position]:
    """Replay ordered transactions into positions.

    Each transaction dict needs: id, account_id, security_id, type, trade_date,
    quantity, price, gross_amount, fees, tax, currency, fx_rate_to_base,
    split_ratio, lot_id, status. Only status='confirmed' rows are applied.
    Key is (account_id, security_id) or (None, security_id) when by_account=False.
    """
    txns = [t for t in transactions
            if t.get("status", "confirmed") == "confirmed" and t.get("security_id")]
    txns.sort(key=lambda t: (t["trade_date"], t.get("id") or 0))
    positions: dict[tuple, Position] = {}

    for t in txns:
        key = (t.get("account_id") if by_account else None, t["security_id"])
        pos = positions.get(key)
        if pos is None:
            pos = positions[key] = Position(
                account_id=key[0], security_id=t["security_id"],
                currency=t.get("currency") or "", method=method)
        _apply(pos, t)
    return positions


def _fx(t: dict) -> float:
    return float(t.get("fx_rate_to_base") or 1.0)


def _apply(pos: Position, t: dict) -> None:
    ttype = t["type"]
    qty = float(t.get("quantity") or 0.0)
    price = t.get("price")
    fees = float(t.get("fees") or 0.0)
    tax = float(t.get("tax") or 0.0)
    fx = _fx(t)
    date = t["trade_date"]
    gross = t.get("gross_amount")

    if ttype in ("buy", "opening_position", "transfer_in", "rights_issue", "spin_off"):
        if qty <= EPS:
            pos.issues.append(f"{ttype} with no quantity on {date}")
            return
        if price is None and gross is not None:
            price = float(gross) / qty
        if price is None:
            pos.issues.append(f"{ttype} on {date} missing purchase price; zero-cost lot recorded")
            price = 0.0
        cost_local = qty * float(price) + fees
        pos.add_lot(qty, cost_local / qty, cost_local * fx / qty, date, t.get("lot_id"))
        pos.fees_local += fees
        pos.fees_base += fees * fx
    elif ttype in ("sell", "transfer_out", "merger"):
        if qty <= EPS:
            pos.issues.append(f"{ttype} with no quantity on {date}")
            return
        cost_local, cost_base = pos.remove(qty, date, t.get("lot_id"))
        if ttype == "sell":
            if price is None and gross is not None:
                price = float(gross) / qty
            proceeds_local = qty * float(price or 0.0) - fees
            pos.realised_local += proceeds_local - cost_local
            pos.realised_base += proceeds_local * fx - cost_base
            pos.fees_local += fees
            pos.fees_base += fees * fx
        # transfer_out / merger: basis leaves the account, no P/L realised here.
    elif ttype in ("split", "reverse_split"):
        ratio = t.get("split_ratio")
        if ratio is None:
            pos.issues.append(f"{ttype} on {date} missing split_ratio; skipped")
            return
        pos.apply_split(float(ratio), date)
    elif ttype == "dividend":
        amount = float(gross if gross is not None else qty * float(price or 0.0))
        pos.dividends_local += amount
        pos.dividends_base += amount * fx
        if tax:
            pos.withholding_local += tax
            pos.withholding_base += tax * fx
    elif ttype == "withholding_tax":
        amount = float(gross or 0.0)
        pos.withholding_local += amount
        pos.withholding_base += amount * fx
    elif ttype in ("fee", "platform_fee"):
        amount = float(gross or 0.0) + fees
        pos.fees_local += amount
        pos.fees_base += amount * fx
    elif ttype == "return_of_capital":
        amount = float(gross or 0.0)
        pos.apply_return_of_capital(amount, amount * fx, date)
    # deposit / withdrawal / fx_conversion carry no security effect.


def cash_balances(transactions: list[dict]) -> dict[tuple[int | None, str], float]:
    """Cash per (account_id, currency) from cash movements and security cash flows."""
    balances: dict[tuple[int | None, str], float] = {}

    def add(acct, ccy, amount):
        key = (acct, ccy)
        balances[key] = balances.get(key, 0.0) + amount

    for t in transactions:
        if t.get("status", "confirmed") != "confirmed":
            continue
        ttype = t["type"]
        acct = t.get("account_id")
        ccy = t.get("currency") or ""
        qty = float(t.get("quantity") or 0.0)
        price = float(t.get("price") or 0.0)
        gross = t.get("gross_amount")
        fees = float(t.get("fees") or 0.0)
        tax = float(t.get("tax") or 0.0)
        amount = float(gross) if gross is not None else qty * price

        if ttype == "deposit":
            add(acct, ccy, amount)
        elif ttype == "withdrawal":
            add(acct, ccy, -abs(amount))
        elif ttype == "buy":
            add(acct, ccy, -(amount + fees))
        elif ttype == "sell":
            add(acct, ccy, amount - fees)
        elif ttype == "dividend":
            add(acct, ccy, amount - tax)
        elif ttype in ("withholding_tax", "fee", "platform_fee"):
            add(acct, ccy, -(amount + fees))
        elif ttype == "return_of_capital":
            add(acct, ccy, amount)
        elif ttype == "fx_conversion":
            # quantity = amount sold in `currency`, gross_amount = amount bought
            # in note-specified target currency stored via price fields:
            # convention: currency=from ccy, note holds "to:<CCY>", price=rate.
            add(acct, ccy, -abs(qty))
            note = (t.get("note") or "")
            target = None
            for part in note.replace(",", " ").split():
                if part.startswith("to:"):
                    target = part[3:].upper()
            if target and gross is not None:
                add(acct, target, abs(float(gross)))
    return balances
