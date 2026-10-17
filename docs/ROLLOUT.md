# SIO Insights — Branch Adoption Rollout Plan

**Objective:** take SIO Insights from a single-owner decision-support
tool to a product the SIO branch team uses, on a hybrid battle rhythm,
without compromising the discipline that makes it credible or the
information posture that makes it safe.

**Operating team:** the four-role stack in `.claude/skills/sio-team/`
(Researcher → Writer → Reviewer → vetting panel, conducted by the
Orchestrator). **Phases advance only when their gate is met; the owner
decides each transition.**

---

## Phase 0 — Secure the footing (gate for everything else)

The vetting panel's standing finding: the question register on a public
site reveals what the Army is watching and in what priority, even with
every source open. **Branch adoption multiplies readership; access
control must precede it.**

- [ ] **Access control decision (owner):** private GitHub repo +
      authenticated hosting (e.g. Netlify password/Identity or an
      equivalent gated host), or a documented accepted-risk decision by
      the real appointment-holders. No sharing beyond the owner until
      one of these is true.
- [ ] One-channel publish rule in force (it is — version handshake live).
- [ ] Anonymity scan green across the repo (standing).

**Gate: the site and repo are no longer world-readable, or the risk is
formally accepted.**

## Phase 1 — Make it usable by someone who didn't build it

- [ ] **Onboarding guide** (`docs/ONBOARDING.md`): how to read the
      dashboard (bands, tiers, grades, landing zones), what an edition
      is, what a material flag means, how the battle rhythm works, and
      — critically — **how an officer submits internal inputs**
      (baselines, burden data, forum outcomes) so they enter the
      register as logged internal evidence.
- [ ] **Conventions one-pager:** who may publish (merge/upload), the
      matched-pair rule, the anonymity rule, grading vocabulary.
- [ ] Weekly edition routine running reliably for ≥3 consecutive cycles
      with Reviewer gates passed.
- [ ] Google Alerts RSS URLs wired (`scripts/alerts-feeds.json`) so
      intake does not depend on one person's sessions.

**Gate: a new reader can use the dashboard and contribute an internal
input without the owner in the loop.**

## Phase 2 — Pilot with 2–3 officers

- [ ] Recruit 2–3 branch officers (map to the branch TECHINT lanes —
      e.g. the AS Br 2 and CESS lanes where the register is richest).
- [ ] Each pilot officer: reads the weekly edition, challenges at least
      one grading or flag per cycle, and supplies at least one internal
      input through the Phase-1 channel.
- [ ] Measure with the register's own decision-advantage metrics:
      internal-data coverage % (the number to move — it has been 0%),
      verification-debt closure rate, time-from-signal-to-assessment,
      and whether any edition item reaches a real forum agenda.
- [ ] Capture friction in the I-1 pilot thread; retune personas/skills
      (RETUNE cycle) on observed failure modes, not opinions.

**Gate: two consecutive cycles where pilot officers' inputs materially
improved an edition (internal-data coverage > 0%), and they'd keep
using it — stated, not assumed.**

## Phase 3 — Branch steady state

- [ ] Battle rhythm owned by the branch: weekly edition, monthly deep
      trawl, pre-forum staff-product runs keyed to the real ACDM/ASTC
      calendar.
- [ ] Internal-evidence intake is routine (baselines current, suspenses
      tracked, forum outcomes logged) — the register finally closes the
      loop its doctrine was built for.
- [ ] Decision log populated by real directions; decision-advantage
      metrics reported quarterly.
- [ ] Only then: consider the leadership showing (CSIO/COS-GS demo or
      an ACDM item) as a separate, owner-decided step — the product
      will by then have branch usage evidence instead of promises.

**Gate (exit): the branch would notice if it stopped. That is the test
of a tool making sense.**

---

## Standing risks the plan carries

1. **Public exposure** until Phase 0 closes — the hard gate.
2. **Single-operator dependency** until Phase 1's automation and
   onboarding land.
3. **0% internal data**: every thread rests on external evidence; the
   three directed baselines are the long pole, and Phase 2 is designed
   to force that number off zero.
4. **Panel self-confirmation**: personas simulate scrutiny; real
   clearance stays with real appointment-holders — stated in every
   artifact that leaves the tool.
