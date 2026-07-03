# SIO Insights

A weekly automated pipeline for curating defence-technology industry news and analysis into a clean, structured dataset for the Systems Integration Office (SIO).

## What This Is

**SIO Insights** scans 40+ open-source defence trade publications, think tanks, and business newswires each week to identify emerging industry developments, funding, contracts, and doctrine analysis in defence-tech capability areas (AI, autonomy, EW, space, cyber, materials, etc.). The pipeline deduplicates stories, adds metadata (capability tags, region, source credibility flags), and exports a structured JSON/JS module ready for downstream dashboard, API, or newsletter applications.

---

## The Pipeline: Trawler → Generator → data.js

```
┌─────────────────────────────────────────────────────────────────┐
│                     WEEKLY SIO INSIGHTS REFRESH                 │
└─────────────────────────────────────────────────────────────────┘

  STEP 1: TRAWLER                STEP 2: GENERATOR               STEP 3: DEPLOY
  (Run in Claude with           (Run in Claude with             (Commit & push)
   web search enabled)           generator prompt)
  
  ┌─────────────────────┐       ┌──────────────────────┐         ┌──────────┐
  │ TRAWLER-PROMPT.md   │       │ GENERATOR-PROMPT.md  │         │ data.js  │
  ├─────────────────────┤   →   ├──────────────────────┤   →     ├──────────┤
  │ • Scans 40+ sources │       │ • Transforms table   │         │ Valid JS │
  │ • 7-day window      │       │   → JavaScript object│         │ module   │
  │ • Deduplicates      │       │ • Validates schema   │         │ (ready   │
  │ • Outputs: table +  │       │ • Outputs: data.js   │         │  to use) │
  │   signals           │       │                      │         │          │
  └─────────────────────┘       └──────────────────────┘         └──────────┘
```

### Step 1: Trawler (Monday–Friday)

**Input:** Open internet, 40+ curated sources (see `TRAWLER-PROMPT.md` for full list)

**Process:**
1. Scan Tier 1 daily news sources (Defense News, DefenseScoop, Breaking Defense, etc.)
2. Harvest Tier 2 periodic analysis (RUSI, War on the Rocks, CSIS, SIPRI)
3. Extract: date, outlet, headline, summary, capability tag, country region, URL
4. Deduplicate: merge same-event multi-outlet coverage; corroborate claims
5. Flag: note paywalled items, unverifiable sources, uncertain dates

**Output:** A Markdown table (one row per unique item) + "Signals to Watch" themes

**Time estimate:** 60–90 minutes for first run; 30–45 min for subsequent weeks

### Step 2: Generator (Friday afternoon)

**Input:** The trawler's Markdown table + signals (copy-paste into the generator prompt)

**Process:**
1. Parse table rows into JavaScript objects
2. Validate schema (all 17 fields present; null for empty fields)
3. Assign unique IDs (`YYYYMMDD-NNN`, reset weekly)
4. Deduplicate within generator (catch any trawler misses)
5. Sort newest first
6. Add metadata (`generated` timestamp, window, total count, source count)

**Output:** A valid CommonJS module (`data.js`) with this shape:

```javascript
module.exports = {
  items: [
    { id, date, headline, summary, outlet, capabilityTag, countryDesk, url, corroborators, quoteSnippet, fundingAmount, companyName, programName, flag, dateCertainty },
    // ...
  ],
  meta: {
    generated: "2026-07-03T14:22:00Z",
    trawlerWindow: "2026-06-26 to 2026-07-03",
    totalItems: 42,
    sources: 28
  }
};
```

**Time estimate:** 15–20 minutes (if trawler output is clean)

### Step 3: Deploy (Friday evening)

**Actions:**
1. Test `data.js` locally: `node -e "const d = require('./data.js'); console.log(d.meta.totalItems, 'items');"`
2. Commit to main with message: `Update data.js with latest SIO Insights (YYYYMMDD)`
3. Push to origin
4. (Optional) Trigger downstream systems (dashboards, newsletters, APIs) via webhook or manual trigger

---

## File Structure

```
SIO-Insights/
├── README.md                  ← You are here
├── TRAWLER-PROMPT.md          ← Instructions for Step 1 (source list, extraction rules)
├── GENERATOR-PROMPT.md        ← Instructions for Step 2 (schema, validation, sorting)
├── data.js                    ← Output (valid CommonJS module; import immediately)
└── .github/workflows/         ← (Optional) CI/CD automation for weekly runs
```

---

## How to Run

### First-Time Setup

1. **Clone this repo** and check out `main`
2. **Read `TRAWLER-PROMPT.md`** to understand the scope and sources
3. **Prepare to run Step 1**

### Weekly Refresh

#### Step 1: Trawler (Monday 09:00 UTC recommended)

1. Open Claude (or your chosen LLM) **with web search enabled**
2. Copy the entire text of `TRAWLER-PROMPT.md`
3. Paste it into Claude as a system message or user query
4. Claude will sweep the sources and produce a Markdown table
5. Copy the table output (including Tier 2 analysis and signals)

#### Step 2: Generator (Friday 16:00 UTC recommended)

1. Copy the entire text of `GENERATOR-PROMPT.md`
2. Paste it into Claude, followed by the trawler output (table + signals)
3. Claude will transform the table into a valid `data.js` module
4. Copy the generated `data.js` code

#### Step 3: Deploy (Friday 17:00 UTC recommended)

1. Go to the repository root
2. Replace `data.js` with the newly generated version
3. Verify locally:
   ```bash
   node -e "const d = require('./data.js'); console.log('✓ data.js loaded:', d.meta.totalItems, 'items');"
   ```
4. Commit and push:
   ```bash
   git add data.js
   git commit -m "Update data.js with latest SIO Insights ($(date +%Y%m%d))"
   git push origin main
   ```

---

## Consuming data.js

### Node.js / CommonJS

```javascript
const sioData = require('./data.js');
console.log(`Loaded ${sioData.meta.totalItems} items, generated ${sioData.meta.generated}`);

sioData.items.forEach(item => {
  console.log(`[${item.date}] ${item.headline} (${item.outlet})`);
});
```

### ES6 Module (via transpiler or dynamic import)

```javascript
const { items, meta } = await import('./data.js').then(m => m.default || m);
```

### Frontend / Web App

```javascript
fetch('/api/sio-insights')
  .then(r => r.json())
  .then(data => {
    data.items.forEach(item => {
      // Render item
    });
  });
```

---

## Capability Tags

Every item is labeled with one of four capability domains:

| Tag | Examples |
|-----|----------|
| **AI** | AI-driven C2, targeting systems, autonomous decision support, large language models for defence |
| **Data & Digital** | Digital transformation, cyber resilience, comms/beamforming, command infrastructure |
| **Robotics** | Uncrewed systems (UGVs, UAVs), counter-UAS, loitering munitions, MUM-T, swarms |
| **DE/EMS/Materials** | Directed energy, electronic warfare, advanced materials, energetics, manufacturing |

---

## Country Desks

Items are tagged by primary region:

| Tag | Coverage |
|-----|----------|
| **US** | US companies, procurement, policy, analysis |
| **EU** | European defence, UK, NATO, industrial base |
| **APAC** | Indo-Pacific, Australia, Japan, South Korea, India, China, Taiwan |
| **ME** | Middle East, Israel, Gulf states |

---

## Item Flags

Every item carries one of three credibility/availability flags:

| Flag | Meaning |
|------|---------|
| **verified** | Source accessible, date confirmed, data corroborated or from reputable outlet |
| **paywall** | Behind paywall (e.g., Janes, InsideDefense, SCMP); headline and metadata included; full article not accessible |
| **unverified (blocked)** | Source unreachable (403, geo-block, domain down); included for manual follow-up |

---

## Quality Assurance

### Deduplication

- Same story, multiple outlets → one entry with `corroborators` array
- Subtle re-writes of the same news (same date, company, event) → consolidated into one entry
- Markedly different angles on the same event (e.g., tech capability vs geopolitical impact) → both kept, flagged as corroborated

### Missing Fields

- No company name (e.g., policy analysis) → `companyName: null`
- No funding mentioned → `fundingAmount: null`
- No secondary corroborators → `corroborators: null`
- Uncertain date (e.g., ~YYYY-MM) → `date: "YYYY-MM-01"` + `dateCertainty: "uncertain"`

### Validation

Before committing `data.js`, verify:
- All dates are ISO 8601 (`YYYY-MM-DD`)
- All URLs are valid and start with `https://`
- All `id` values are unique and formatted `YYYYMMDD-NNN`
- All `capabilityTag` and `countryDesk` values are canonical
- No duplicate items (same outlet, date, headline)
- Items sorted newest first

---

## Automation (Optional)

To automate weekly runs, add a GitHub Actions workflow (`.github/workflows/weekly-refresh.yml`):

```yaml
name: Weekly SIO Insights Refresh
on:
  schedule:
    - cron: "0 9 * * 1"  # Monday 09:00 UTC (trawler trigger)
    - cron: "0 16 * * 5" # Friday 16:00 UTC (generator trigger)

jobs:
  refresh:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Trigger trawler (Claude + web search)
        run: echo "TODO: Integrate with Claude API or trigger manual task"
      - name: Commit updated data.js
        run: |
          git config user.name "SIO Bot"
          git config user.email "bot@sio.local"
          git add data.js
          git commit -m "Update data.js with latest SIO Insights ($(date +%Y%m%d))" || true
          git push
```

(Manual trigger recommended until Claude API integration is available.)

---

## Signals to Watch

The trawler's output includes a "Signals to Watch" section — emerging themes that are not yet frequent enough for a dedicated series but warrant monitoring. Review these each week to identify potential new capability areas or regional hotspots.

---

## GitHub App (programmatic access)

For automated commits, refresh PRs, and webhook-driven workflows, this repo
ships a configured **GitHub App** ("SIO Insights Bot") instead of relying on
personal access tokens:

- `.github/github-app-manifest.yml` — permissions, events, and webhook config
- `docs/github-app/register.html` — one-click registration (App Manifest flow)
- `docs/GITHUB-APP.md` — full setup, credential storage, and usage guide
- `scripts/webhook-verify.js` — signature verification for webhook deliveries

See **[docs/GITHUB-APP.md](docs/GITHUB-APP.md)** to register and install it.

---

## Questions?

- **How do I add a new source?** Edit `TRAWLER-PROMPT.md` under the appropriate tier (Tier 1 daily or Tier 2 analysis), then restart the trawler.
- **Can I filter by capability or region?** Yes: the `capabilityTag` and `countryDesk` fields in `data.js` enable filtering in downstream apps.
- **What if a source is always paywalled?** Mark it as such in the flag. If it's consistently high-value despite paywall, consider a manual subscription or API access.
- **How often should we refresh?** Weekly (recommended Friday). Can be scaled to biweekly if bandwidth is limited.

---

## License

[TBD — specify your license, e.g., MIT, CC-BY]

---

**Last updated:** 2026-07-03  
**Next scheduled refresh:** 2026-07-11 (Friday)
