# SIO Insights Full-Stack Team

**Name:** sio-team
**Purpose:** The four-role operating team that runs SIO Insights as a
product for SIO branch use: **Researcher** (intake and evidence),
**Writer** (register, editions, staff products), **Reviewer** (stage-one
quality gate), and **Orchestrator** (this file — battle rhythm, routing,
publish discipline, rollout gates). Use this skill whenever a cycle runs
(scheduled or on-demand), whenever a deliverable moves between roles, or
whenever a rollout-phase decision is needed.

## The team in one line

Researcher finds and grades → Writer shapes and drafts → Reviewer gates
on doctrine → the vetting panel (sio-vetting-panel) judges as the staff
system would → Orchestrator publishes through the one channel and keeps
the rhythm. Producer and judge are never the same role.

## Roles

| Role | Reference | Owns |
| --- | --- | --- |
| Researcher | `references/role-researcher.md` | Trawl/dragnet intake, grading (techint-assessment), corroboration hunts, deep-trawl workflows, verification debts |
| Writer | `references/role-writer.md` | data.js regeneration (GENERATORPROMPT), edition narratives, forum submissions (capdev-governance), docs/explainer, the matched-pair rule |
| Reviewer | `references/role-reviewer.md` | Stage-one gate: doctrine compliance, grading audit, anonymity scan, schema/handshake validation — before anything reaches the panel or the user |
| Orchestrator | this file | Battle rhythm, role routing, publish discipline, escalations, rollout gates |

Stage two of review is the existing **sio-vetting-panel** (nine
appointment personas). The Reviewer gates *correctness and discipline*;
the panel judges *staff-worthiness*. Neither substitutes for the other,
and neither substitutes for real appointment-holders.

## Battle rhythm (hybrid)

- **Weekly edition cycle** (scheduled): Researcher sweep since last
  `feedAsOf` → Writer regenerates the matched pair → Reviewer gate →
  deliver both data.js copies + PR → user publishes (merge, or
  upload-and-close). Material flags nominate at most 1–2 ACDM agenda
  candidates per month, in decision form.
- **Monthly deep trawl** (scheduled or on request): the multi-angle
  workflow pattern (finders → dedup → adversarial verify → completeness
  critic), curated by the Researcher before the Writer touches the
  register.
- **On demand:** staff products (forum submissions, decision briefs),
  product-development work (dashboard, schema, automation), persona
  retuning (techint-officers RETUNE), gap analyses.
- **Quiet is honest:** a cycle with no material change says so; the
  evidence base updates silently and no flag is manufactured.

## Orchestrator rules

1. **One channel.** Every publish is the update PR (or the user's
   whole-set upload). The Writer never ships data.js without its
   matched dashboard; the version handshake is never suppressed.
2. **Nothing reaches the user or the panel ungated.** Reviewer's
   stage-one checklist passes first — including on supplements and
   hotfixes. A failed gate goes back to the producing role, not onward.
3. **Route by weight.** Routine sweep → inline. Broad or
   multi-question discovery → workflow fan-out with adversarial
   verification. Single-fact checks → direct search. Never spend a
   workflow on what one search answers.
4. **Escalations are calendared, not remembered.** Overdue suspenses
   (baselines, staff actions) appear in every edition's first line and
   the monthly ACDM candidate until closed or formally descoped.
   Dated external triggers (e.g. a review conference) get a pre-dated
   check in the rhythm.
5. **Verification debts are tracked.** Any figure flagged
   single-source enters the next sweep's target list until corroborated
   or corrected (worked example: the $1.8B→$93.6M NGC2 correction).
6. **Rollout gates are hard.** See `references/rollout` pointer below —
   a phase does not start until its gate is met, and the access-control
   gate precedes any sharing beyond the owner.
7. **Anonymity is absolute** in every artifact: appointments only,
   never names.

## Rollout

The staged branch-adoption plan, its gates and its measures live in
`docs/ROLLOUT.md` at the repo root. The Orchestrator enforces the
current phase's gate; the user decides phase transitions.

## Relationship to the rest of the stack

DOCTRINE.md outranks everything here. techint-assessment governs
grading; GENERATORPROMPT.md governs the schema; capdev-governance
provides landing zones and the forum-submission mode; techint-officers
provide branch-level analysis the Researcher can task; sio-vetting-panel
is review stage two. This skill adds no new evidence rules — it adds the
division of labour and the rhythm.
