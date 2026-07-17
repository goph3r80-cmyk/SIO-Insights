# Metric definitions

The active cost-basis method is shown in the dashboard header and CLI output.

| Metric | Definition |
|---|---|
| Current quantity | Σ buys + transfers in + stock distributions − sells − transfers out (splits applied), from `confirmed` transactions only |
| Average cost | remaining cost basis ÷ quantity. Buys capitalise fees into cost. Methods: **weighted average** (pooled), **FIFO** (oldest lots consumed first), **specific lot** (sell's `lot_id` matched; falls back to FIFO with a logged issue) |
| Total cost | quantity × average cost, tracked in trading currency and in base currency at each lot's historical FX |
| Market value | quantity × latest price (source + timestamp always stored); base value uses the latest FX rate |
| Unrealised P/L (local) | market value − cost basis, in trading currency |
| Unrealised security gain (base) | local unrealised × today's FX — the part caused by the share price |
| Unrealised FX gain (base) | cost basis × (today's FX − historical FX) — the part caused by currency movement. Security and FX effects are reported separately and sum to total unrealised (base) |
| Realised P/L | (sale proceeds − fees) − cost basis of shares sold (per active method); base version uses sale-date FX for proceeds and historical FX for cost, so it includes the FX effect |
| Daily change | quantity × (latest close − previous close), per trading currency |
| Dividends / withholding tax | from `dividend` (`gross_amount`, `tax`) and `withholding_tax` rows |
| Net investment income | gross dividends − withholding tax − fees |
| Total return | unrealised + realised + net dividends |
| Percentage return | total return ÷ total cost |
| Portfolio weight | position base value ÷ Σ active positions' base value |
| Time-weighted return (TWR) | sub-period returns chained between valuation points, with external flows added at the start of the sub-period they occur in. Removes the effect of deposit timing — the portfolio-manager view. **Deposits are never counted as gains.** |
| Money-weighted return (MWR / XIRR) | the annualised rate that sets the NPV of all external flows plus terminal value to zero (bisection solver). Reflects your experience as an investor. |
| Annualised return | (1+R)^(365.25/days) − 1; suppressed for periods under 90 days where annualising is not meaningful |
| Volatility | stdev of daily portfolio returns × √252 (needs ≥ 20 observations) |
| Max drawdown | largest peak-to-trough decline of the value series |
| Beta | cov(portfolio, benchmark) ÷ var(benchmark) over matched daily returns (needs ≥ 20 observations, else "insufficient data") |
| Concentration | largest holding, top-5 weight, and value share by sector / country / currency / account; dividend concentration = largest payer's share of gross dividends |

External flows for TWR/MWR are deposits/withdrawals when cash tracking is on
and cash rows exist; otherwise trades themselves (buy = money in, sell/dividend
= money out) are used, so returns remain correct without cash records.

Risk figures are **descriptive indicators, not investment advice**.
