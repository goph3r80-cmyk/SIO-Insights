# TECHINT Grading Scales — reference tables

Companion to the `techint-assessment` skill. These scales standardise the
judgments the skill calls for; record the *outcome* of a grading in the
schema fields (`sourceType`, `confidence`, `corroborated`, maturity tags) —
the letter/number grades are working shorthand, not schema values.

## 1. Two-axis source/claim grading (Admiralty style)

Grade the **source** and the **specific claim** independently, then combine.

**Source reliability**

| Grade | Meaning | Typical SIO examples |
|-------|---------|----------------------|
| A | Reliable — long record, professional standards, independent | Wire services (Reuters/AP/AFP), USNI News, established trade press with own reporting |
| B | Usually reliable — solid record, occasional lapses | Most Tier-1 trade press, quality national press, think tanks |
| C | Fairly reliable — mixed record or structural bias to manage | Regional outlets, defence blogs with sourcing, belligerent-nation press |
| D | Not usually reliable — promotional or thinly sourced | Vendor releases (for performance claims), aggregators, opinionated outlets flagged "corroborate" |
| E | Unreliable — record of fabrication or propaganda function | ⚠ state-controlled outlets used outside intent-signalling |
| F | Cannot be judged — unknown outlet | First-seen dragnet hits from unfamiliar domains |

**Claim credibility**

| Grade | Meaning |
|-------|---------|
| 1 | Confirmed by independent chains (imagery, official + independent press, physical evidence) |
| 2 | Probably true — logical, consistent with known facts, partly corroborated |
| 3 | Possibly true — plausible but uncorroborated |
| 4 | Doubtful — implausible or contradicted in part |
| 5 | Improbable — contradicted by better evidence |
| 6 | Cannot be judged |

**Mapping to schema `confidence`** (claim-level):

- `high` — roughly A1–B2: reliable source *and* confirmed/probably-true claim
- `moderate` — B3/C2-ish: credible reporting, single-source, or a vendor/state claim independently corroborated
- `low` — D/E sources or claims graded 4–6: vendor, state-media, or belligerent claims without independent validation

Standing caps: state-media sourcing caps at `low` (→ `moderate` with
independent corroboration of the *specific claim*); vendor performance
figures stay in `unverifiedClaims` until measured independently; an F/6
(unknown outlet, unjudgeable claim) enters the feed as `unverified` with a
note, or not at all.

## 2. Source-type reliability ordering (schema `sourceType`)

For *event/funding* claims, reliability tends to order:
`official` > `wire_service` > `trade_press` > `think_tank` >
`general_press` > `vendor` > `state_media`.

For *performance* claims, `official` and `vendor` both drop — each has an
incentive to overstate; independent measurement or observed employment
outranks both.

## 3. Maturity ladder ↔ TRL cross-walk

| SIO maturity | Rough TRL | Evidence that justifies it | Common false positive |
|--------------|-----------|----------------------------|-----------------------|
| `reported` | 1–5 | Announcement, RFI/solicitation, paper, parade/exhibition appearance, imagery of prototype | Treating a reveal or contract as capability |
| `demonstrated` | 6–7 | Controlled test/demo with observable result (live-fire, flight, intercept) | Generalising one test to a fielded capability; "proven" language |
| `operationally_evaluated` | 7–8 | Evaluation with operational units/conditions (capstone exercises, border deployments, OT&E) | Ignoring caveats in the evaluation (environment, scope) |
| `fielded` | 8–9 | Issued to operating units; production deliveries in service | Confusing production *contract* with fielded state |
| `combat_proven` | 9 | Verified employment in combat with observed effect | Extending one engagement's conditions to all conditions; belligerent tallies taken at face value |

Movement *down* the ladder (failed OT&E, watchdog findings, recalls,
programme pauses) is as reportable as movement up — record it in
`changeFromPrevious` and re-tag the claim.

## 4. Calibrated estimative language

Use these terms consistently so prose carries the same information as the
confidence fields; avoid uncalibrated hedges ("might", "could possibly",
"it seems") in assessment sentences.

| Term in prose | Approximate likelihood |
|---------------|------------------------|
| almost certainly | ~95%+ |
| very likely / highly probable | ~80–95% |
| likely / probable | ~55–80% |
| roughly even chance | ~45–55% |
| unlikely / improbable | ~20–45% |
| very unlikely | ~5–20% |
| remote | <5% |

Pair likelihood with the confidence *basis*, and keep the two distinct:
"Reporting **states** X [evidence]; we **assess** Y is *likely* [inference,
moderate confidence — single-source performance figures]." Where the
register's split confidence applies, the prose should make clear which leg
(evidence vs inference) limits the judgment.

## 5. Quick anti-patterns checklist

Before an assessment ships, scan for these; each is a known TECHINT failure:

- [ ] A claim graded low in the fields but written confidently in prose
- [ ] Syndications counted as corroboration
- [ ] Vendor/ministry performance numbers repeated without the
      `unverifiedClaims` caveat
- [ ] "Proven" (or serial-level maturity above `demonstrated`) on the back
      of one controlled test
- [ ] A parade/exhibition item placed above `reported`
- [ ] An Army gap, baseline, cost, or owner inferred from external evidence
- [ ] Evidence aggregated by programme announcement instead of threat
      class/effect in a decision serial
- [ ] An item promoted to a thread with no Army Question mapping
- [ ] Escalation without a passed material-change test
- [ ] Adversary doctrine terms mirror-imaged into friendly equivalents
