---
name: techint-assessment
description: Military technological-intelligence (TECHINT) assessment doctrine for SIO Insights. Use whenever generating, refreshing, or triaging SIO Insights content — an edition update or data.js refresh, alerts/trawler intake triage, writing or revising a serial or Army Question assessment, or evaluating any foreign military-technology claim (a test, fielding, contract, performance figure, state-media reveal, or combat-use report). Also use when asked to assess a defence-technology development's credibility, maturity, cost-exchange implications, or Army relevance, even outside a formal refresh — if the task involves judging what a military-technology report actually establishes, apply this skill.
---

# TECHINT Assessment Doctrine — SIO Insights

This skill is the **assessment tradecraft layer** of SIO Insights. `DOCTRINE.md`
(repo root) defines what the system is for; `GENERATORPROMPT.md` defines the
data schema; this skill defines **how to judge each piece of evidence** on its
way into an assessment. Read `DOCTRINE.md` first if it is not already in
context — nothing here overrides it, and its strict rule (external evidence
never establishes an internal Army fact) applies to every step below.

The discipline exists because technological intelligence fails in
characteristic ways: mistaking a demonstration for a capability, a vendor
figure for a measured one, syndication for corroboration, a parade for a
fielding, and technological interest for operational relevance. Each step
below closes one of those failure modes.

## The assessment sequence

Run every candidate item (alert hit, trawler row, pasted digest entry)
through this sequence. Steps 1–4 are about what the evidence *is*; steps 5–8
are about what it *means* for Army.

```
1 Decompose claims → 2 Grade the source → 3 Corroborate → 4 Place maturity
→ 5 Extract the quantitative lens → 6 Map to an Army Question
→ 7 Assign split confidence → 8 Apply the material-change test
```

### 1. Decompose the claims

A single article usually bundles claims of different kinds. Never grade an
article; grade its claims, separately:

- **Event claims** — something happened (a test, a contract award, a strike,
  an exercise). Usually the most verifiable part.
- **Performance claims** — numbers attached to the event (range, power,
  cost-per-round, payload, suppression radius, hit rate). Usually the least
  verifiable part, and the part most often sourced to a vendor or ministry.
- **Intent claims** — what an actor says it will do (doctrine articles,
  budget requests, announced programmes). Real as signals of intent; not
  evidence the capability exists.
- **Assessment claims** — a journalist's or analyst's interpretation. Keep
  the underlying fact; treat the interpretation as one input to your own.

A contract award is evidence of *funding and schedule*, not of capability.
An RFI/solicitation is evidence of a *perceived requirement*. A live-fire
with human authority intact is evidence of *integration*, not autonomy.
State which kind of claim you are carrying forward, and tag it inline in the
serial `signal` (the `[Fielded]` / `[Reported — state-linked]` convention).

### 2. Grade the source

Grade reliability of the *source* and credibility of the *specific claim*
independently — a reliable outlet can carry an uncheckable claim, and a
state outlet can carry a true one. Use the two-axis scale in
`references/grading-scales.md` (Admiralty-style A–F / 1–6) as the mental
model; it maps onto the schema's `sourceType`, `confidence` and
`corroborated` fields, so the grade is recorded, not just felt.

Standing rules that follow from the scale:

- **State-controlled media** (⚠ outlets per the trawler prompt) are evidence
  of what an actor *wants said*. Cap claim confidence at `low` unless a
  non-state-linked source independently confirms the specific claim — then
  `moderate`, never `high` on the state claim alone.
- **Vendor and belligerent claims** carry an inherent incentive to
  overstate. Performance figures from either are `unverifiedClaims`
  material until independently measured or observed.
- **Official primary sources** (contract announcements, budget documents,
  service releases) are highly reliable for *event and funding* claims and
  still self-interested for *performance* claims.

### 3. Corroborate — and don't confuse syndication with corroboration

Two outlets carrying the same wire story is **one** source. Corroboration
means independent reporting chains: a second outlet with its own sourcing,
official confirmation, imagery, or physical evidence. Before setting
`corroborated: true`, check whether the "second source" traces to the same
press release, wire, or state broadcast. When resolving alert hits, always
unwrap to the canonical article and identify the *original* reporting
outlet (the ingest script and dragnet rules handle the mechanics).

### 4. Place maturity honestly

Use the schema's ladder: `reported → demonstrated → operationally_evaluated
→ fielded → combat_proven`, with the TRL cross-walk in
`references/grading-scales.md`. The characteristic errors to refuse:

- A single controlled test is `demonstrated`, never proven — "proven"
  implies operational employment.
- A parade, exhibition, or export-marketing appearance is `reported`
  (existence), not `fielded` — display proves the object exists, not that
  it works or is issued to units.
- One combat use is `combat_proven` *for that event's conditions only* —
  say so ("single event") rather than generalising.
- A programme entering production is fielding-*track*; note the distinction
  until units actually operate it.
- Downgrades are information: when a watchdog report, failed test, or
  recall contradicts an earlier maturity placement, update the ladder
  visibly (see the GAO/NGC2 handling in W-3 for the worked example).

A consolidated serial spans rungs: keep the serial-level `maturity` as
`"mixed (X – Y; see signal)"` and tag each claim inline at its own rung.

### 5. Extract the quantitative lens

TECHINT earns its keep in numbers. For each item, pull out whichever of
these the reporting supports, and say explicitly when a number is claimed
but unmeasured:

- **Cost exchange** — cost per engagement vs cost of the threat killed
  (the interceptor-vs-drone ratio that drives the C-UAS question).
- **Magazine depth** — rounds/effectors available vs expected threat mass;
  production rate as the replenishment term.
- **Scale and rate** — units produced, sortie/strike counts, fleet
  distribution (capability spread across hull/vehicle classes matters as
  much as peak capability).
- **Latency** — sensor-to-shooter time, decision-cycle compression,
  autonomy's effect on operator-to-platform ratios.
- **Burden** — manpower per task, exposure per resupply, intervention rate
  (the problem-first metrics for sustainment autonomy).

Organise a decision serial's evidence **by operational effect or threat
class**, not by programme announcement (the D-1 pattern) — programmes that
share a trend rarely solve the same threat class.

### 6. Map to an Army Question — or leave it in the feed

Evidence joins the product only through the Army Question Register
(`data.js questions[]`). Ask: which persistent question does this
materially bear on? If none, it stays in the source feed — technological
interest is not a promotion criterion. Never invent an Army implication to
justify carrying an item; the honest "no registered question owns this"
(e.g. hypersonic strike) is a valid and useful outcome. New questions are
rare and need evidence that no existing question contains the issue.

Respect the lane split: **net-assessment relevance** (informs design
margins, red-teaming, resilience — actionable now) is distinct from
**force-development escalation** (needs stronger evidence or a specific
Army implication). External maturity alone never converts a watch line
into a procurement task.

### 7. Assign split confidence

Confidence in the *evidence* and confidence in the *inference* are
different judgments — record both (the register's
`confidence: {evidence, inference}`). Combat-proven foreign practice with
an uncertain Army read-across is `evidence: high, inference: low` — and
saying so is the point. In prose, use the calibrated estimative language
table in `references/grading-scales.md`, and keep prose and fields
consistent: never write a confident conclusion above a `low`-confidence
grade. Distinguish "we assess" (inference) from "reporting states"
(evidence) in every assessment sentence where it could be ambiguous.

### 8. Apply the material-change test

Before any item escalates past the evidence base, it must change something:
the assessed threat, technology maturity, affordability, an Army
assumption, a confirmed gap, an actionable opportunity, a recommended
course, or a decision trigger. Otherwise update the evidence base silently
— quiet questions showing "unchanged" are the register's discipline
working, not a gap to fill.

## Deception, denial and signalling

Assume capable actors manage what open sources see. Practical
counter-measures, proportionate to this product's OSINT footing:

- Ask *why is this visible?* A state reveal is a communication — deterrent
  signalling, export marketing, or domestic messaging — before it is a
  capability datum. Record the claim, grade it low, and note the plausible
  signalling purpose when it is evident.
- Weight *observed behaviour* (imagery-confirmed construction, verified
  strikes, exercised tactics) over *described capability*.
- Watch for **absence patterns**: a programme that goes quiet after loud
  promotion, or claims that never progress up the maturity ladder across
  editions, are themselves signals — track them via `age` and
  `changeFromPrevious` rather than deleting the thread.
- Beware mirror-imaging: an adversary's doctrine terms ("intelligentised
  warfare") are not equivalents of friendly concepts; assess what they do,
  not what the translation suggests they mean.

## Boundaries this skill never crosses

- It grades **external** evidence only. It never manufactures an Army
  baseline, gap, readiness figure, cost, or ownership — those come from
  authorised internal input or remain explicitly "not established"
  (DOCTRINE.md §4 is absolute).
- It informs, it does not task: relevance never implies authority
  (DOCTRINE.md §5, §25). Ownership fields follow the
  insightSponsor/fdLead/functionalLead/supporting construct.
- It assesses; humans decide. Its output is graded evidence and calibrated
  assessments inside the existing schema — every claim tagged, every grade
  recorded in the fields, every assessment traceable to sources.

## Where results land

Apply this skill's outputs through the existing schema — no new formats:

| Product | Fields this skill disciplines |
|---------|-------------------------------|
| `feed[]` item | `sourceType`, `corroborated`, `confidence`, `primarySourceUrl`, `unverifiedClaims`, `f`, `note` |
| Serial `signal` | inline maturity/provenance tags per claim; evidence organised by threat class or effect |
| Serial fields | `maturity` (ladder or "mixed"), `confidence`, `changeFromPrevious`, `latestDevelopment` |
| Question register | `externalChange`, `delta`, `confidence: {evidence, inference}`, `materialChange`, trigger updates |
| QA gate | the DOCTRINE.md §28 checklist, answered before publishing |

For the grading tables (Admiralty scale, estimative-language calibration,
TRL↔maturity cross-walk, source-type reliability ordering), read
`references/grading-scales.md`.
