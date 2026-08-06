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
| `pf` | string | Portfolio code (`P1`…`P9`, or `X`) — see the Capability Development Portfolio table in TRAWLER-PROMPT.md |
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
| `pf` | string | Portfolio code — assign by operational outcome, not technology (`P1`…`P9`, `X`) — see TRAWLER-PROMPT.md |
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
   `status: "actioned"`). **Maintain the standing China / PLA net-assessment
   serials (e.g. `I-3`, `I-6`, `II-4`) as a permanent coverage line** — carry
   them forward every edition, refreshing sources when there's news; do not drop
   them just because a given week is quiet.
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

---

## Schema v2 — CSIO restructure (6 Aug 2026)

**This section supersedes conflicting guidance above.** CSIO reviewed the
edition-format output on 6 Aug 2026 and rejected it as "not yet a CSIO
decision product" — too many items marked `priority: "decision"` that were
really staff-work taskings, no visible ranking method, duplicate serials for
the same underlying capability question, an inconsistently-applied maturity
label, and source-count used as a confidence proxy. Every future edition
must follow the rules below. The `I-*`/`II-*`/`III-*` section-numbering
scheme above is retired; the new id scheme is `D-<n>` (decisions), `W-<n>`
(watchlist), and process items keep a stable id (e.g. `I-1`).

### The three-bucket model

Every serial carries `category` (`"capability"` or `"process"`) and `tier`
(`"decision"` or `"watchlist"`):

- **Decisions** (`category: "capability"`, `tier: "decision"`) — **cap at
  three per edition.** A matter earns this tier only if the paper can supply
  all of: a specific recommendation, at least one viable alternative, the
  consequence of approving/rejecting, resource/programme/policy implications,
  and a defined deliverable with an accountable owner. "Assess…", "Study…",
  "Monitor…", "Determine whether to track…" are **not** decisions — they are
  watchlist items, however interesting.
- **Watchlist** (`tier: "watchlist"`) — five to seven thematic capability
  questions, each clustering every feed item that bears on the same
  underlying question (see Consolidation below). Not capped as hard as
  decisions, but "approximately eight" capability questions total
  (decisions + watchlist) is the target — if you're above ten, consolidate
  further.
- **Process** (`category: "process"`) — SIO's own working method (e.g. the
  concept-design sprint). Reviewed and endorsed like a decision, but not a
  capability question and not counted against the three-decision cap.

### Consolidation — manage capability questions, not news stories

Before drafting serials, group feed items by the underlying command question
they answer, not by originating story. If a foreign programme, a domestic
programme and an allied-funding signal are all answers to "how should Army
build X", they are **one** serial, not three. Every serial must carry a
`supersedes: [...]` array naming every prior-edition serial id folded into
it, for audit trail. Known standing consolidations from the 6 Aug restructure
(carry forward; re-open only if CSIO directs otherwise):

- **D-1** — affordable, layered counter-UAS / sense-strike architecture
  (sensing, C2, soft-kill, directed energy, kinetic interceptors as one
  question, not five).
- **W-1** — maritime autonomy (attritable USV strike/sensing models as one
  thematic watch line, held at watchlist unless a defined Army littoral
  requirement is identified).
- **W-2** — ground autonomy, sustainment and enabling power under
  contested-spectrum conditions.
- **W-4** — PRC AI-C2, autonomy and missile net-assessment (the standing
  China net-assessment coverage requirement from the Trawler prompt lands
  here as one line, not three).
- **W-5** — allied acquisition, doctrine and vendor-ecosystem shifts (a
  comparator line for the I-1 process item — explicitly *indicative*
  relevance, not a demonstrated Army requirement; do not upgrade to decision
  status without a concrete Army opportunity).

### Decision format (Page 1)

Every `tier: "decision"` serial (capability or process) carries, in addition
to the existing fields:

| Field | Meaning |
|-------|---------|
| `recommendation` | What CSIO is being asked to approve, in one sentence. |
| `whyNow` | What changed and why delay matters. |
| `armyProblem` | The precise capability or operational gap — not "read-across" or "portfolio relevance" language. |
| `options` | Array of `{course, tradeoff}` — two or three realistic courses, each with its trade-off stated. |
| `implications` | Cost, manpower, architecture, doctrine, programme effects. Use `"TBD pending <owner> input"` rather than inventing a figure you don't have. |
| `directionSought` | Approve / reject / defer / select — stated plainly. |
| `deliverable` | The defined output type (concept note, option paper, trial proposal, policy recommendation). |
| `deliverableDate` | ISO date. Never `"Next edition"` — that is a publication cycle, not a deliverable. If a real deadline isn't yet known, still propose a working target date; do not leave it vague. |

### Watchlist format (Page 2)

Every `tier: "watchlist"` serial carries:

| Field | Meaning |
|-------|---------|
| `latestDevelopment` | The newest fact since the previous edition. |
| `changeFromPrevious` | What's different from the last assessment — "unchanged" is a valid, honest answer. |
| `armyRelevance` | State plainly if relevance is not yet established, rather than asserting "read-across"/"portfolio relevance" without a named Army problem, project or concept. If the entry genuinely requires internal Army-system information (e.g. a named architecture, programme or roadmap) this pipeline does not hold, **say so explicitly and do not fabricate the comparison** — flag it as a precondition (see W-3 for the model). |
| `escalationTrigger` | The specific, checkable condition that would promote this item to a decision next edition. |

`suspense` for a watchlist item should read `"Trigger-based — see
escalationTrigger"` unless a real calendar date is meaningful for that
specific line.

### Maturity ladder (replaces `verdict` for tracked external developments)

`verdict` (`gap`/`emerging`/`proven`) is retained only for the internal
gap/decision framing of the SIO's own capability-development posture (e.g.
D-2, whose Army posture is a `gap` even though the adversary system that
motivates it is `fielded`). For anything tracking an **external**
development, use `maturity` on the ladder:

`reported` → `demonstrated` → `operationally_evaluated` → `fielded` →
`combat_proven`

Tag individual claims inline within `signal` text with the maturity that
applies to *that specific fact* — a consolidated serial routinely spans
several rungs at once (e.g. `[Reported]`, `[Demonstrated]`,
`[Combat-proven]`) and the serial-level `maturity` field should say
`"mixed (X – Y; see signal)"` rather than force one label onto a
heterogeneous cluster. A single controlled test with human authority intact
is `demonstrated`, never `proven` — "proven" implies operational employment.

### Confidence rating

Every serial and every `feed[]` item carries `confidence` ∈
{`high`,`moderate`,`low`}:

- **High** — official confirmation plus independent corroboration, or
  reputable trade press/wire with no contested claim.
- **Moderate** — credible reporting but incomplete technical detail, a
  single-source claim, or a vendor claim independently corroborated.
- **Low** — vendor, state-media, or belligerent claim without independent
  validation.

State-media sourcing (`⚠` outlets per the Trawler prompt) caps confidence at
`low` unless the specific claim is independently corroborated by a
non-state-linked outlet, in which case `moderate` — never let the prose
acknowledge "vendor/state claims, corroborate" and then write a confident
conclusion ("is fielding and exporting…") in the same serial; the confidence
field and the prose must agree.

### Single accountable owner

`owner` is a single string — the one accountable branch. `owner2` is
retired; use `supporting: [...]` (array of branch codes) for every other
contributing branch. Use `ADIO` (Army Data Integration Office), not `ADO`,
for the data-integration branch code.

### Status

`status` ∈ {`not_started`,`in_progress`,`overdue`,`completed`,`closed`}
(replaces the old `open`/`actioned` pair). Mark an item `overdue` honestly
when its previous suspense/deliverable date has passed without a delivered
output — do not silently roll the date forward without flagging it.

### Annex (feed[]) enrichment

Every `feed[]` item carries, in addition to the existing fields:

| Field | Meaning |
|-------|---------|
| `sourceType` | One of `official`, `trade_press`, `wire_service`, `think_tank`, `state_media`, `vendor`, `general_press`. |
| `corroborated` | Boolean — is this specific claim independently corroborated, not just multiply-syndicated from one wire. |
| `confidence` | Per the rubric above, applied at item level. |
| `primarySourceUrl` | The primary-source link (official release, vendor announcement) where one exists; `null` if the item is press coverage of something without an accessible primary link. |
| `unverifiedClaims` | Carry the caveat text for `paywall`/`unverified` items; `null` otherwise. |
| `dateLastChecked` | ISO date this pipeline last processed/verified the record. |

### What NOT to do

Do not invent facts about named internal systems, programmes or
architectures you have no verified information on, even when a consolidation
or reframe would clearly benefit from doing so (e.g. tying a common-data-
-layer watch item to specific internal Army systems). Flag the gap and name
the precondition (who needs to provide what) instead — see `W-3` for the
worked example. Fabricating that kind of specificity is a worse failure mode
than leaving the item under-developed, because it manufactures false
confidence in exactly the way CSIO's critique warns against.
