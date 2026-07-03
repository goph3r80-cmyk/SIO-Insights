# SIO Insights

An automated pipeline for curating defence-technology industry news and analysis into a clean, structured dataset for the Systems Integration Office (SIO). Runs on a daily schedule (and on demand), opening a pull request for review each refresh.

## What This Is

**SIO Insights** scans open-source defence trade publications, think tanks, and business newswires each cycle to identify emerging industry developments, funding, contracts, and doctrine analysis in defence-tech capability areas (AI, autonomy, EW, space, cyber, materials, etc.). The pipeline deduplicates stories, tags them (capability, region, source credibility), synthesises them into SIO decision products, and exports a structured JS module (`window.SIO_DATA`) ready for downstream dashboard, API, or newsletter applications.

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
  │ • Scans 80+ sources │       │ • Transforms table   │         │ Valid JS │
  │ • 7-day window      │       │   → JavaScript object│         │ module   │
  │ • Deduplicates      │       │ • Validates schema   │         │ (ready   │
  │ • Outputs: table +  │       │ • Outputs: data.js   │         │  to use) │
  │   signals           │       │                      │         │          │
  └─────────────────────┘       └──────────────────────┘         └──────────┘
```

### Step 1: Trawler (Monday–Friday)

**Input:** Open internet, 80+ curated sources across daily trade press, think tanks, domain specialists, wire services, and regional desks (see `TRAWLER-PROMPT.md` for the full catalog)

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
1. Parse the feed rows into `feed[]` entries (set `saved`/`flagged` to `false`)
2. Cluster related feed items into **serials** — the synthesised SIO products
3. Write each serial's SIO framing (signal → so-what → action, owner, verdict, priority, decision)
4. Cross-link feed items to serials via the `serial` field
5. Carry over still-live serials from the previous edition (keep `id`, bump `age`)
6. Update the header (`edition`, `feedAsOf`) and sort (feed newest-first)

**Output:** A browser module (`data.js`) — a `window.SIO_DATA` global (not a
CommonJS export) with two collections:

```javascript
/* SIO Insights edition data — generated. Replace to refresh. */
window.SIO_DATA = {
  "edition": "Jul 2026",
  "feedAsOf": "2026-07-01",
  "serials": [
    // Synthesised SIO products: id, pf, tech[], dom, owner, desk, verdict,
    // priority, status, raised, age, dlabel, ao, suspense, decision, signal,
    // sowhat, action, src[]
  ],
  "feed": [
    // Raw trawler stream, one per story: date, out, ttl, sum, tech[], pf,
    // desk, url, f, serial, saved, flagged
  ]
};
```

See **`GENERATOR-PROMPT.md`** for the full field-by-field schema and allowed
values.

**Time estimate:** 15–20 minutes (if trawler output is clean)

### Step 3: Deploy (Friday evening)

**Actions:**
1. Test `data.js` locally: `node -e "globalThis.window={}; require('./data.js'); console.log(window.SIO_DATA.serials.length, 'serials,', window.SIO_DATA.feed.length, 'feed items');"`
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
├── data.js                    ← Output (window.SIO_DATA browser module: serials[] + feed[])
├── index.html                 ← Dashboard that renders data.js (serials + feed)
├── docs/GITHUB-APP.md         ← GitHub App setup for programmatic/automated refreshes
└── scripts/webhook-verify.js  ← Webhook signature verification helper
```

---

## Viewing the Dashboard

`index.html` is a self-contained dashboard that reads `data.js` and renders the
serials (grouped by section, with verdict/priority state and the signal → so-what
→ action analysis) and the source feed. It has client-side filters (tech, desk,
verdict, search) and follows the viewer's light/dark theme.

Because it loads `./data.js`, open it from a server, not `file://`:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

To publish it, enable **GitHub Pages** (Settings → Pages → Deploy from branch →
`main` / root). The dashboard then updates automatically whenever a refresh PR
lands a new `data.js`.

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
   node -e "globalThis.window={}; require('./data.js'); const d = window.SIO_DATA; console.log('✓ data.js loaded:', d.serials.length, 'serials,', d.feed.length, 'feed items');"
   ```
4. Commit and push:
   ```bash
   git add data.js
   git commit -m "Update data.js with latest SIO Insights ($(date +%Y%m%d))"
   git push origin main
   ```

---

## Consuming data.js

`data.js` assigns a global, `window.SIO_DATA`, with two collections: `serials`
(synthesised SIO products) and `feed` (the raw story stream).

### Frontend / Web App

```html
<script src="data.js"></script>
<script>
  const { edition, feedAsOf, serials, feed } = window.SIO_DATA;

  serials.forEach(s => {
    console.log(`[${s.id}] ${s.dlabel || s.decision} — ${s.verdict}/${s.priority}`);
  });

  feed.forEach(item => {
    console.log(`[${item.date}] ${item.ttl} (${item.out})`);
  });
</script>
```

### Node.js (for validation / tooling)

The module targets the browser, so provide a `window` global before requiring:

```javascript
globalThis.window = {};
require('./data.js');
const { serials, feed, edition } = window.SIO_DATA;
console.log(`${edition}: ${serials.length} serials, ${feed.length} feed items`);
```

---

## Capability Tags

Every item is labeled with one or more capability domains. The `tech` field
stores the short **code**; the domain name is for display:

| Code (`tech`) | Domain | Examples |
|------|--------|----------|
| `ai` | **AI** | AI-driven C2, targeting systems, autonomous decision support, large language models for defence |
| `data` | **Data & Digital** | Digital transformation, cyber resilience, comms/beamforming, command infrastructure, common data layers |
| `robo` | **Robotics** | Uncrewed systems (UGVs, UAVs), counter-UAS, loitering munitions, MUM-T, swarms |
| `dews` | **DE/EMS/Materials** | Directed energy, electronic warfare, spectrum, advanced materials, energetics, manufacturing |

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

- Same story, multiple outlets → one `feed` entry (most authoritative outlet);
  the corroborating outlets become the serial's `src[]` list
- Subtle re-writes of the same news (same date, company, event) → consolidated into one entry
- Markedly different angles on the same event (e.g., tech capability vs geopolitical impact) → both kept only if each carries distinct capability signal

### Optional / empty fields

- Unassigned feed item (no serial yet) → `serial: null`
- No second owner / desk → omit `owner2` / `desk2`
- Paywalled or unreachable source → set `f` to `paywall`/`unverified` and add a `note`
- Uncertain date → use the first of the month and add a `note`

### Validation

Before committing `data.js`, verify:
- File starts with `window.SIO_DATA = {` (not `module.exports`) and loads in Node with a `window` shim
- All `feed[].date` are ISO 8601 (`YYYY-MM-DD`); all `url` start with `https://`
- All enum values are canonical — `tech` ∈ {ai, data, robo, dews}; `desk` ∈ {US, EU, APAC, ME}; `f` ∈ {verified, paywall, unverified}; `verdict` ∈ {gap, emerging, proven}; `priority` ∈ {decision, monitor}; `dom` ∈ {solution, safety, te}; `status` ∈ {open, actioned}
- Every serial `id` is unique; every `feed[].serial` matches a serial id or is `null`
- No duplicate feed items (same outlet, date, headline); feed sorted newest first

---

## Automation

The refresh runs automatically via a **scheduled Claude session** ("Daily SIO
Insights refresh"): each run spins up a fresh session, executes the Trawler and
Generator steps against these prompt files with web search, regenerates
`data.js`, and **opens a pull request** for human review (never pushing straight
to `main`). It authenticates via the configured GitHub App — see
[`docs/GITHUB-APP.md`](docs/GITHUB-APP.md).

Because trawling needs an LLM with web search, a pure GitHub Actions workflow
can't do the research on its own; the scheduled Claude session is the engine,
and Actions (if added) would only run validation on the resulting PR.

Every automated edition lands as a PR so a human vets low-confidence, paywalled,
and unverified items before it ships.

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
- **Can I filter by capability or region?** Yes: the `tech` and `desk` fields (on both `serials` and `feed`) enable filtering in downstream apps.
- **What if a source is always paywalled?** Mark it `paywall` in the `f` flag with a `note`. If it's consistently high-value despite the paywall, consider a manual subscription or API access.
- **How often should we refresh?** A scheduled daily run opens a refresh PR each morning; you can also run the pipeline manually any time. Adjust or pause the schedule as bandwidth requires.

---

## License

[TBD — specify your license, e.g., MIT, CC-BY]

---

**Last updated:** 2026-07-03  
**Refresh cadence:** daily at 07:00 SGT (automated PR)
