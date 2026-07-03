# SIO Insights — Trawler Prompt (Step 1)

Paste this whole file into Claude (or your chosen LLM) **with web search
enabled**. It sweeps open-source defence-technology news and produces the raw
**feed** — one row per unique story — which the Generator (Step 2) then turns
into `data.js`.

Do not synthesise SIO decisions here. The trawler's job is discovery, tagging,
and deduplication only. Analysis happens in the Generator.

---

## Your task

Scan the sources below for defence-technology industry developments published
in the **trawler window** (default: the last 7 days; for the automated daily
run, the last ~48 hours). For each unique story, extract a structured row.
Deduplicate multi-outlet coverage. Flag anything paywalled or unreachable.

Output a Markdown table (schema below) plus a short **Signals to Watch**
section. Keep it to genuine defence-tech capability developments — funding,
contracts, fieldings, doctrine/analysis, tests, and threat/net-assessment
signals. Skip routine politics, opinion with no capability content, and
consumer-tech noise.

---

## Sources

### Tier 1 — daily news (scan every run)

- Defense News — https://www.defensenews.com
- DefenseScoop — https://defensescoop.com
- Breaking Defense — https://breakingdefense.com
- C4ISRNET — https://www.c4isrnet.com
- The Defense Post — https://thedefensepost.com
- Defense One — https://www.defenseone.com
- Janes — https://www.janes.com  *(often paywalled — flag `paywall`)*
- Reuters (Aerospace & Defense) — https://www.reuters.com/business/aerospace-defense/
- The War Zone — https://www.twz.com

### Tier 2 — periodic analysis (harvest when fresh)

- RUSI — https://www.rusi.org
- War on the Rocks — https://warontherocks.com
- CSIS — https://www.csis.org
- SIPRI — https://www.sipri.org
- IISS — https://www.iiss.org
- CNAS — https://www.cnas.org

### Tier 3 — regional / specialist (scan for APAC/EU/ME desks)

- SCMP (Asia) — https://www.scmp.com  *(often paywalled — flag `paywall`)*
- United24 Media — https://united24media.com
- TechRadar Pro (defence tech) — https://www.techradar.com/pro
- Task & Purpose — https://taskandpurpose.com

Add or remove sources here as coverage needs change. Prefer primary reporting;
use aggregators only to corroborate.

---

## What to extract per story (the `feed` row)

| Field | Meaning | Example |
|-------|---------|---------|
| `date` | Publication date, **ISO `YYYY-MM-DD`** | `2026-06-30` |
| `out` | Outlet name | `Breaking Defense` |
| `ttl` | Headline (verbatim or lightly trimmed) | `Overland AI nets Marine Corps AGV contract` |
| `sum` | 1–2 sentence factual summary (no SIO framing) | `A ~$20M production deal for autonomous ground vehicles…` |
| `tech` | Array of capability tags (see below) | `["robo"]` |
| `pf` | Portfolio code (see below; reuse existing codes) | `P4` |
| `desk` | Primary country desk | `US` |
| `url` | Canonical article URL (`https://…`) | `https://…` |
| `f` | Credibility/availability flag | `verified` |
| `note` | Optional caveat (only for `paywall` / `unverified`) | `Body behind paywall.` |

The Generator adds `serial`, `saved`, and `flagged`; you do **not** set those.

### `tech` — capability tags (pick one or more)

| Tag | Domain | Covers |
|-----|--------|--------|
| `ai` | AI | AI-driven C2, targeting, autonomous decision support, ML models |
| `data` | Data & Digital | data layers, digital transformation, cyber, comms, command infrastructure |
| `robo` | Robotics / autonomy | UGVs, UAVs, counter-UAS, loitering munitions, MUM-T, swarms |
| `dews` | DE / EMS / Materials | directed energy, electronic warfare, spectrum, advanced materials, energetics |

### `desk` — country desks

| Desk | Coverage |
|------|----------|
| `US` | US companies, procurement, policy, analysis |
| `EU` | Europe, UK, NATO, Ukraine, industrial base |
| `APAC` | Indo-Pacific — Australia, Japan, South Korea, India, China, Taiwan, SE Asia |
| `ME` | Middle East, Israel, Gulf states |

### `pf` — portfolio codes

Reuse the codes already present in `data.js` (e.g. `P2`, `P4`, `P5`, `P6`,
`P7`, `P9`, and `X` for cross-cutting/overarching signals). Assign the closest
existing portfolio; if a story genuinely fits none, tag `X` and flag it in
Signals to Watch rather than inventing a new code.

### `f` — flags

| Flag | Meaning |
|------|---------|
| `verified` | Source accessible, date confirmed, from a reputable outlet |
| `paywall` | Behind a paywall — headline/metadata captured, body inaccessible (`note` required) |
| `unverified` | Source unreachable (403/geo-block/down) or a claim unconfirmed (`note` required) |

---

## Deduplication

- Same event across multiple outlets → **one** row, using the most authoritative
  outlet as `out`. List corroborating outlets in the Signals notes so the
  Generator can populate the serial's `src[]`.
- Subtle rewrites of the same story (same date/company/event) → collapse to one.
- Genuinely different angles on the same event (capability vs geopolitics) →
  keep both only if each carries distinct capability signal.

## Dates

- Always ISO `YYYY-MM-DD`. If only month/year is known, use the first of the
  month and add a `note` ("date approximate").

---

## Output format

1. **Feed table** — one row per unique story, newest first:

   ```
   | date | out | ttl | sum | tech | pf | desk | url | f | note |
   ```

2. **Signals to Watch** — 3–6 short bullets naming emerging themes, cross-outlet
   corroboration (which stories reinforce each other), and any capability area
   worth a future serial. This is the raw material the Generator uses to cluster
   feed rows into serials.

Hand the full output to the Generator (Step 2) unchanged.
