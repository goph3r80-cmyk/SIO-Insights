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
contributing branch. Use `ASB4` (AS Br 4 — the data, digitalisation & AI
integration branch) for the data-integration branch code; `ADIO` and `ADO`
are legacy codes for the same branch and must not appear in new content.

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

---

## Schema v2.1 — CSIO/COS-GS vetting rules (8 Aug 2026)

**This section supersedes conflicting guidance above** (in particular the
"Single accountable owner" rule in v2). CSIO/COS-GS vetted the v2.0 output
on 8 Aug 2026 and corrected the organisational-ownership model and the
transition from external insight to Army force-development action. Every
future edition must follow these rules. The improved v2 analytical
architecture is **retained**: consolidation into capability questions, the
three-decision cap, the thematic watchlist, maturity and confidence labels,
the reported/demonstrated/fielded/combat-proven distinction, source
traceability, explicit qualification of state-linked/vendor claims,
superseded-thread tracking, and escalation triggers.

### 1. Ownership — never assign force-development ownership presumptuously

`owner`, `owner2` and `ao` are **retired**. Every serial instead carries
four role fields:

| Field | Meaning |
|-------|---------|
| `insightSponsor` | SIO, where SIO is responsible for maintaining the issue, sense-making and triggering further staff work. |
| `fdLead` | Force Development Lead — the G5 force-development element (`G5`) wherever the matter requires integration across capabilities, force design, concepts, doctrine, equipping, manpower or multiple functional branches. Where the correct lead cannot be established from available information, write `"To be determined by G5"` (or `"Unassigned — to be determined if an Army requirement emerges"` for watch lines with no Army requirement yet) — **never guess**. |
| `functionalLead` | The relevant capability branch where appropriate (e.g. `ASB2` for Sense-Strike/C-UAS matters); `"—"` or `"To be determined by G5"` otherwise. |
| `supporting` | Array of other relevant functional, C2, EW, logistics, protection, acquisition, doctrine, legal or technical stakeholders. Do not lump several organisations into one ambiguous owner field. |

Never use terms such as "sole executive agent", "sole accountable owner"
or equivalents unless the existing Army organisational arrangement
explicitly establishes that authority. `G5` is a valid branch code alongside
the existing ones.

### 2. Sense-making, not tasking

SIO Insights is a sense-making and decision-support product. Its chain is:

> External signal → assess Army relevance → identify the force-development
> question → establish whether an internal baseline is required → recommend
> staff action.

It must **not** automatically convert *signal → named branch → tasking*.
The established Army staff system determines formal ownership where
organisational authority is not already known.

### 3. External evidence is not a confirmed Army gap

Open-source evidence can establish that an external threat, opportunity or
capability trend exists. It **cannot** by itself establish the Army's
internal baseline or a confirmed gap. Never assert "Army has no X" /
"Army lacks Y" unless supported by verified internal Army information.
Where the internal baseline has not been provided, use formulations such
as: *"External developments indicate a requirement to establish whether
Army's existing and planned capabilities adequately address…"* or *"The
extent of the Army gap should be established against the current
force-development baseline."* Apply this standard to every serial,
including `armyProblem` fields and the internal-posture half of `maturity`.

### 4. Internal baseline before trials or programmes

For capability-development issues, follow this sequence and do not skip
steps:

> Threat / Opportunity → Army Operational Problem → Existing Army Baseline →
> Confirmed Gap → Required Effects → Architecture / Options → Trial
> Questions → Trial → Equipping / Programme Decision

Never jump from foreign technology developments straight to recommending a
large Army trial or a funded capability line. Recommend a trial only when
the operational requirement, baseline, gap and trial questions are
sufficiently defined; the usual first deliverable is a G5-led
force-development baseline (see D-1/D-2 for the worked pattern).

### 5. Organise decision evidence by effect or threat class

Programmes that collectively demonstrate a trend (e.g. layered defence,
changing cost exchange) rarely all solve the same Army threat class.
In a decision serial's `signal`, group supporting evidence by operational
effect or threat class — not as an aggregation of programme announcements
(see D-1 for the worked pattern).

### 6. Tightened definition of a "Decision"

A CSIO Decision requires an actual choice with consequences. Approval to
*study, assess, monitor, produce another paper, or conduct generic further
analysis* is **not** a decision. A mature decision contains: the Army
problem; a confirmed or bounded baseline; a recommendation; meaningful
alternatives; operational consequence; resource/programme implications
where applicable; the consequence of inaction; and direction genuinely
required from CSIO. If CSIO can reasonably task the work within existing
authority, classify it as a **Staff Action** instead: `category:
"process"`, `tier: "staff_action"`, id prefix `S-<n>` (legacy process ids
like `I-1` may persist), `directionSought: "None — staff action…"`. The
three-decision cap stands, but there is no requirement to fill all three
slots — two genuine decisions are preferable to three artificially
elevated ones.

### 7. Tiers — including below-the-line watch

`tier` ∈ {`decision`, `watchlist`, `background`, `staff_action`}. Use
`background` for lines held **below** the main priority watchlist —
interesting technological read-across with no direct Army requirement or
identified terrestrial/aerial analogue (e.g. space-domain autonomy) does
not merit senior-leadership attention on the priority list. Promote only
against a defined escalation trigger.

### 8. Watchlist breadth filters

- **Allied acquisition / doctrine / ecosystem lines (W-5 pattern):** retain
  only developments that could plausibly create a force-design lesson, an
  acquisition-model change, an interoperability opportunity, a
  co-development/co-production opportunity, a classification /
  information-sharing precedent, or a concrete Army partnership
  opportunity. General defence-industry or organisational developments
  remain in the source feed without becoming priority watchlist lines.
- **Net-assessment lines (W-4 pattern):** separate *net-assessment
  relevance* — which can already influence Army design margins,
  red-teaming and resilience, and does **not** wait for confirmed
  operational employment — from *force-development escalation*, which
  requires stronger evidence or a clear implication for Army capabilities.
  Never convert a net-assessment item into a procurement task merely
  because the external technology appears mature.
- **Preconditions become tasked actions (W-3 pattern):** where a line is
  blocked on internal input, convert "pending X input" into a defined
  internal action — named provider, named deliverable, dated suspense —
  not an indefinite external watch condition.

### 9. COS-GS filter

For any item intended for eventual COS-GS consideration, apply an
additional filter: COS-GS sees only matters that materially affect Army
operating concepts, force structure, readiness, capability priorities,
resource allocation, major programmes, significant organisational changes,
or strategic partnerships. A COS-GS output must answer: (1) What is the
Army problem? (2) What is the current Army baseline? (3) Why does it
matter now? (4) What changes if we act? (5) What are the options and
trade-offs? (6) What are the manpower/funding/programme implications?
(7) What specific decision is required today? **Do not send the full
horizon-scanning dashboard upwards as the decision product** — mature
relevant issues into a separate, concise command decision brief.

### v2.1 validation additions

- No serial carries `owner`, `owner2` or `ao`; every serial carries
  `insightSponsor`, `fdLead`, `functionalLead` and `supporting`.
- The strings "sole executive agent" / "sole accountable owner" appear
  nowhere in serial content.
- `tier` ∈ {`decision`,`watchlist`,`background`,`staff_action`}; capability
  decisions number at most three (fewer is fine).
- No decision recommends a trial or funded programme without a delivered
  (or first-directed) internal baseline.
- "Army has no…" style assertions appear only where verified internal
  information supports them.

---

## Schema v3.0 — Decision-support model (8 Aug 2026)

**Read `DOCTRINE.md` before generating — it is the standing intent that
governs every edition.** This section implements it in the data model and
supersedes conflicting guidance above. The organising principle is no
longer the news-derived serial: it is the **persistent Army question**.
Operating model: `Army Question → Relevant Data → Insight → Decision →
Action → Observed Effect → Updated Assessment`. External news remains an
input, not the organising principle.

### `questions[]` — the Army Question Register (top-level collection)

`window.SIO_DATA.questions` holds ~6–10 persistent Army questions. Each:

| Field | Meaning |
|-------|---------|
| `id` | `Q<n>` — stable across editions. |
| `title` | Short name (e.g. "Affordable Layered C-UAS"). |
| `category` | `capability` / `foundational` / `net_assessment` / `policy` / `organisational`. |
| `question` | The enduring Army question — framed as what Army must answer, never "what technologies are appearing". |
| `decisionHorizon` | When the issue is likely to become consequential. |
| `armyBaseline` | What Army possesses/plans/does — **authorised internal information only**; write "Not established…" + the tasked baseline where the pipeline holds none. |
| `externalChange` | What materially changed externally. |
| `delta` | Which Army assumption, requirement or capability may need reassessment. |
| `confidence` | `{evidence, inference}` — factual-evidence confidence and analytical-inference confidence, separately. |
| `triggers` | Array of `{type, trigger}`; `type` ∈ {`threat`,`technology`,`internal`,`programme`,`cost`,`partnership`}. |
| `directionRequired` | `{type, statement}` or `null`; `type` per the direction taxonomy below. |
| `threads` | Serial ids attached to this question. |
| `decisionLog` | Closed-loop history — see below. |
| `nextQuestion` | What Army now needs to understand. |
| `status` | `active` / `dormant` / `closed`. |
| `materialChange` | Short statement of what materially changed this edition, or `null` — drives the "Material changes since last review" view. |

A question does **not** terminate because a paper or baseline was
delivered; preserve it and its decision history. Merge/split/close/
reprioritise questions only on evidence.

### Serials become decision threads

Every serial carries `question` (a `Q<n>` id, or `null` only for
below-the-line lines) and `decisionLog: []`. Decisions and staff actions
also carry `directionType`. Create a new thread only where no existing Army
question adequately contains the issue; if a news item does not materially
affect an Army question, it stays in `feed[]` — never promoted for being
technologically interesting.

### Direction taxonomy (replaces the undifferentiated "CSIO decision")

`directionType` ∈ {`priority_direction`, `capability_decision`,
`resource_decision`, `policy_doctrine_decision`, `staff_action`}:
priority direction (is focused staff effort warranted), capability decision
(choice between solutions/architectures), resource decision
(funding/manpower/programme commitment), policy/doctrine decision, staff
action (existing authority — no CSIO decision). Requests merely to study /
monitor / assess / produce another paper are staff actions or priority
directions, never capability/resource decisions. The high bar of v2.1 §6
stands; do not fill slots.

### Closed decision loop

When senior direction is given on any thread or question, append to
`decisionLog`: `{date, direction, responsibleStaff, deliverable, result,
effect, assessment, followOn}` — filling later fields as the action
completes. Never delete entries; this is institutional memory for why
decisions were taken and what resulted.

### Foundational enablers

`tier: "foundational"` marks foundational dependencies (currently the Army
data layer, W-3/Q5). These are assessed by whether they enable persistent
Army decision workflows — never reduced to "should Army copy <foreign
system>"; NGC2/Maven are comparators, not templates.

### Material-change test (apply before surfacing anything)

Surface an update to the decision layer only if it changed the assessed
threat, technology maturity or affordability; challenged an Army
assumption; exposed or closed a confirmed gap; created an actionable
opportunity; changed a recommended course; or crossed a decision trigger.
Otherwise update the evidence base (feed, `src[]`, confidence) silently.
Never escalate because a reporting cycle arrived — escalation is
trigger-driven only.

### Problem-first rule

Never track a technology and then search for an Army use case. Lines start
from an operational problem, workload bottleneck, manpower burden,
capability gap, decision latency or survivability issue; external systems
are candidate evidence against that problem (see W-7 for the worked
pattern).

### Metrics

`window.SIO_DATA.metrics` carries decision-advantage indicators —
provenance-traceable share, internal-data coverage (share of threads
incorporating validated Army data — the most important number to move),
closed-loop rate, material changes this edition. Information volume
(source/feed counts) is never presented as an indicator of value.

### Regeneration behaviour (every edition)

1. Preserve established questions and thread ids; increment `age`.
2. Ingest and deduplicate new information against existing evidence.
3. Apply the material-change test per thread; set each question's
   `materialChange` honestly (`null` when nothing material changed).
4. Never infer internal Army facts; never assign ownership without
   authority (v2.1 rules stand in full).
5. Update `confidence` (evidence vs inference separately), `maturity` and
   triggers.
6. Track directions given and overdue actions; append to `decisionLog` —
   never rewrite history.
7. Explicitly identify where internal Army data is required to mature an
   assessment (the W-3/Q5 pattern).
8. Prefer concise decision-relevant language over technology description.

### QA before publishing (act as CSIO)

Relevance — why should Army care? · Baseline — known or assumed? ·
Materiality — what actually changed? · Decision — does anyone genuinely
need to decide? · Ownership — presumed? · Duplication — does an existing
question cover it? · Evidence — strength and provenance? · Army data —
what internal data could confirm/reject the hypothesis? · Action — what
happens if accepted? · Feedback — how will we know it worked?
If unanswerable, downgrade the item rather than overstate maturity.

### v3.0 validation additions

- `questions[]` present (6–10 entries); every `questions[].threads` id
  exists; every serial `question` is a valid `Q<n>` or `null` (null only
  for `background` tier).
- Every question carries `armyBaseline` that is either authorised internal
  information or an explicit "Not established…" statement — never an
  OSINT-inferred baseline.
- `tier` ∈ {`decision`,`watchlist`,`foundational`,`background`,`staff_action`};
  `directionType` valid where present.
- `decisionLog` arrays present (may be empty) on questions and serials.

## Schema v3.1 — DCM/ACDOM landing zones (5 Sep 2026)

The register now names where each thread lands in the Army
capability-development machinery (see DOCTRINE.md §29 and the
capdev-governance skill).

### New top-level: `forums`

A reference map of the governance structure keyed by forum code
(`ACDM`, `ASTC`, `CPRC`, `AOM`, `ADTC`, `ASSC`, `AISC`, `ACC`, `WSSC`,
`EMF`), each `{ code, name, tier, chair, cadence, role }`. Chairs are
appointments only. This map is structural reference data — regenerate
it verbatim unless doctrine changes.

### New serial fields (decision tier mandatory; others where honest)

- `dcmPhase` — `long_term_planning | front_end_planning |
  acquisition_management | transition_to_oands | oands | retirement |
  null`. Describes the **Army thread's** lifecycle state, from evidenced
  Army-side facts only. Null when unknown (flag the baseline as the
  precondition) and null for non-system (policy/organisational)
  threads. Never inferred from external technology maturity.
- `nextInstrument` — the single staffing instrument that would move the
  thread (e.g. `"AOR (SON/SOR)"`, `"experiment design → ASTC proposal"`,
  `"OCF"`), or null.
- `targetForum` — forum code from `forums` where that instrument is
  decided, or null. Route by direction type: priority_direction → ACDM;
  capability_decision → ACDM (R&T gating ASTC; escalation ASSC/ACC);
  resource_decision → CPRC or ACDM; policy_doctrine_decision → ADTC or
  AOM; staff_action → null (in-branch).

### New question field

- `decisionForum` — forum code where `directionRequired` would naturally
  land, or null when no direction is required.

### Edition behaviour

- Each edition may nominate at most one or two **ACDM agenda
  candidates** from the material-change flags, stated in decision form.
  Record candidacy in the changelog note; record forum outcomes only on
  user-supplied evidence, as decisionLog entries.

### v3.1 validation additions

- `forums` present with the ten codes above.
- Every `targetForum`/`decisionForum` value is null or a key of
  `forums`.
- Every `dcmPhase` is null or one of the six phase values.
- Every decision-tier serial has all three landing-zone fields present
  (null allowed only with the missing Army baseline flagged in the
  serial text).
