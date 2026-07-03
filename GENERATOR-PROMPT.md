# SIO Insights — Generator Prompt (Step 2)

Paste this whole file into Claude, followed by the Trawler output (Step 1: the
feed table + Signals to Watch). It transforms that raw feed into the complete
`data.js` module — both the raw **feed** stream and the synthesised **serials**
(the SIO decision products).

**Authoritative template:** always read the current `data.js` first and match
its structure, field names, and value vocabulary exactly. When in doubt, copy
the shape of an existing entry. The spec below documents that shape — it does
not override it.

---

## Output shape

`data.js` is a browser module (a global assignment, **not** a CommonJS export):

```javascript
/* SIO Insights edition data — generated. Replace to refresh. */
window.SIO_DATA = {
  "edition": "Jul 2026",         // human label for this edition ("Mon YYYY")
  "feedAsOf": "2026-07-01",      // ISO date the feed was current as of
  "serials": [ /* synthesised SIO products — see below */ ],
  "feed":    [ /* raw trawler stream — one entry per story */ ]
};
```

Two collections, two jobs:

- **`feed[]`** — the raw stream, one entry per unique story from the trawler.
- **`serials[]`** — curated analytic products. Each clusters one or more feed
  items into a single SIO signal → so-what → action, with ownership and a
  decision. Feed items link back to their serial via the `serial` field.

---

## `feed[]` entry schema

Carry the trawler rows through, adding the three linkage/UI fields:

| Field | Type | Notes |
|-------|------|-------|
| `date` | string | ISO `YYYY-MM-DD` |
| `out` | string | Outlet |
| `ttl` | string | Headline |
| `sum` | string | 1–2 sentence factual summary |
| `tech` | string[] | `ai` / `data` / `robo` / `dews` |
| `pf` | string | Portfolio code (`P2`…`P9`, or `X`) |
| `desk` | string | `US` / `EU` / `APAC` / `ME` |
| `url` | string | `https://…` |
| `f` | string | `verified` / `paywall` / `unverified` |
| `note` | string | *(optional)* caveat for `paywall`/`unverified` |
| `serial` | string\|null | id of the serial this item supports, or `null` if unassigned |
| `saved` | boolean | UI state — always initialise `false` |
| `flagged` | boolean | UI state — always initialise `false` |

Sort `feed` **newest first** by `date`.

---

## `serials[]` entry schema

Each serial is an SIO analytic product. Cluster related feed items (same theme,
capability, or event) and write one serial per cluster.

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | `<section>-<n>`: Roman-numeral section + index, e.g. `I-1`, `II-3`, `III-2`. See Sections below. |
| `pf` | string | Portfolio code — reuse existing (`P2`…`P9`, `X`) |
| `tech` | string[] | Capability tags for the cluster |
| `dom` | string | Lane: `solution` (capability solution) / `safety` (protection/sustainment) / `te` (test & evaluation) |
| `owner` | string | Owning branch — reuse existing codes: `SIO`, `ASB1`, `ASB2`, `ASB3`, `CESS`, `AOTO`, `ADO` |
| `owner2` | string | *(optional)* second owning branch |
| `office` | boolean | *(optional)* `true` only for SIO-office-level overarching items |
| `desk` | string | Primary desk |
| `desk2` | string | *(optional)* second desk |
| `verdict` | string | `gap` (capability gap) / `emerging` (emerging trend) / `proven` (demonstrated/fielded) |
| `priority` | string | `decision` (needs a call) / `monitor` (awareness) |
| `status` | string | `open` / `actioned` |
| `raised` | string | Month raised, `"Mon YYYY"` |
| `age` | number | Editions/cycles since raised (integer) |
| `dlabel` | string | Short decision label, or `""` if none |
| `ao` | string | Action officer / owning cell (free text) |
| `suspense` | string | Deadline or timeframe (free text, e.g. `"By 28 Jul"`, `"+30 days"`, `"Next edition"`). **Do not name internal meetings, boards, committees, or forums** (e.g. ACC(AI), capability board) — use a neutral date or timeframe instead. |
| `decision` | string | The decision sought this cycle |
| `signal` | string | The intelligence signal — what the open sources show |
| `sowhat` | string | SIO relevance — why it matters to CapDev / which capability line it feeds |
| `action` | string | The recommended action and owner |
| `src` | object[] | Supporting sources — see below |

> **House style — no internal meeting names.** Do not reference named internal
> governance events (ACC(AI), capability boards, committees, working groups, etc.)
> anywhere in a serial — not in `suspense`, `ao`, `decision`, or `action`. Refer
> to deadlines as dates or timeframes and to owners by branch code. The dataset
> is for open downstream use; keep internal forum names out of it.

### `src[]` (inside a serial)

| Field | Type | Notes |
|-------|------|-------|
| `out` | string | Outlet |
| `date` | string | Display date, `"D Mon YYYY"` (e.g. `"9 Jun 2026"`) |
| `ttl` | string | Headline (may be trimmed for context) |
| `url` | string | `https://…` |
| `f` | string | `verified` / `paywall` / `unverified` |
| `note` | string | *(optional)* caveat |

Note the date formats differ by collection: `feed[].date` is ISO
(`2026-06-09`); `serial.src[].date` is display style (`9 Jun 2026`). Match the
existing file.

### Sections (the `id` prefix)

Serials are grouped into Roman-numeral sections that order the edition from
strategic to concrete. Follow the pattern of the existing `data.js`:

- **`I-*`** — strategic / concept-shaping signals and portfolio-level trends.
- **`II-*`** — capability contests and gaps (things being fought over now).
- **`III-*`** — proven / fielding developments (crossing into programmes).

Keep numbering contiguous within each section and stable across editions where a
serial persists (a carried-over item keeps its id and increments `age`).

---

## Generation steps

1. **Read the current `data.js`** — learn the exact shape and the codes already
   in use (portfolios, owners, sections). Reuse them.
2. **Build `feed[]`** from the trawler rows: normalise dates to ISO, set
   `saved`/`flagged` to `false`, `serial` to `null` for now.
3. **Cluster into serials.** Group feed items by theme/capability/event. For
   each cluster write one serial with full SIO framing (signal → sowhat →
   action), choosing `dom`, `verdict`, `priority`, `owner`, `desk`, section id,
   and `src[]` (from the cluster's sources).
4. **Cross-link.** Set each feed item's `serial` to its serial `id`. Leave
   `serial: null` for items you deliberately keep unassigned (watch items).
5. **Carry-over.** Persist still-relevant serials from the previous edition:
   keep their `id`, refresh `src`/`signal` if there's news, and increment `age`.
   Retire items that are fully actioned and no longer live (or set
   `status: "actioned"`).
6. **Update the header:** `edition` (e.g. `"Jul 2026"`) and `feedAsOf` (ISO date
   of the trawler window's end).
7. **Sort:** `feed` newest-first by `date`; `serials` by section then index.

---

## Validation (before committing)

- File begins with the comment line and `window.SIO_DATA = {` — **not**
  `module.exports`.
- Valid JS: it must load in a browser-like context. Quick check in Node:

  ```bash
  node -e "globalThis.window={}; require('./data.js'); \
    const d=window.SIO_DATA; \
    console.log('edition', d.edition, '| serials', d.serials.length, '| feed', d.feed.length);"
  ```

- Every `tech` value ∈ {`ai`,`data`,`robo`,`dews`}; `desk` ∈ {`US`,`EU`,`APAC`,`ME`};
  `f` ∈ {`verified`,`paywall`,`unverified`}; `verdict` ∈ {`gap`,`emerging`,`proven`};
  `priority` ∈ {`decision`,`monitor`}; `dom` ∈ {`solution`,`safety`,`te`};
  `status` ∈ {`open`,`actioned`}.
- All `feed[].date` are ISO `YYYY-MM-DD`; all `url` start with `https://`.
- Every `serial` id is unique; every `feed[].serial` either matches a serial id
  or is `null`.
- Any `paywall`/`unverified` item carries a `note`.

Output the full `data.js` file contents, ready to replace the existing file.
