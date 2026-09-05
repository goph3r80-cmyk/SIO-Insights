# Capability-Development Governance (DCM + ACDOM alignment)

**Name:** capdev-governance
**Purpose:** Route SIO Insights outputs into the Army's real
capability-development machinery. This skill encodes two things the
register must speak natively: the **DCM framework** (Defence Capability
Management — the MINDEF lifecycle-management process by which a capability
need is transformed into operational and support-system requirements and
managed cradle-to-retirement) and the **ACDOM** (Army Capability
Development Operating Manual — the Army's operating doctrine for the
capability-development system: its sub-systems, governance tiers, forums
and staffing instruments).

Use this skill whenever an SIO Insights product must leave the dashboard
and enter the staff system: naming the lifecycle phase a thread sits in,
the instrument that moves it, and the forum where the decision lands —
or drafting a forum-ready submission from register content.

## Why this exists

SIO Insights establishes *what changed and what decision it poses*. The
staff system decides through **instruments** (OCF, OMP, EMP, AOR with its
SON/SOR and annexes, AOE, PIP, safety and doctrine documents) moving
through **forums** (ACDM, ASTC, CPRC, AOM, ADTC at General Staff tier;
ASSC, AISC, ACC at Army tier; WSSC, EMF, PEO working committees and the
CSIO–Dir(Land) forum at executive level). A register item that cannot
name its phase, instrument and forum is analysis without a landing zone.
This skill closes that loop.

## Core rules

1. **Every decision-tier serial carries a landing zone.** `dcmPhase`
   (which DCM lifecycle phase the underlying Army thread sits in),
   `nextInstrument` (the staffing instrument that would move it), and
   `targetForum` (where that instrument is decided). Watchlist and
   background items carry a phase only when one is honestly known;
   never invent programme state — the evidence wall applies to internal
   staffing facts exactly as it does to external claims.
2. **Direction types map to forums, not to people.** Use the routing
   table in `references/acdom-forums.md`. A priority direction is ACDM
   business; an R&T gating call is ASTC business; a resource trade is
   CPRC/ACDM business; doctrine consequences go to the doctrine and ops
   forums; a staff action stays in-branch.
3. **The register feeds the battle rhythm; it does not replace it.**
   ACDM meets monthly. Editions should surface, at most, the one or two
   register items whose material-change test would survive the COS-GS
   filter as agenda candidates — flagged as candidates, never minuted
   as tabled. Only the changelog may record what a forum actually did,
   and only on user-supplied evidence.
4. **Forum-ready output follows the house format.** When asked to
   produce a submission, use `references/forum-submission.md`. Address
   by appointment only. Never expose any individual's name.
5. **Lifecycle honesty.** The maturity ladder used for external evidence
   (reported → demonstrated → operationally_evaluated → fielded →
   combat_proven) is about the *technology*; `dcmPhase` is about the
   *Army thread*. Do not conflate them: a combat-proven foreign system
   can sit in a thread still at front-end planning.

## References

- `references/dcm-lifecycle.md` — DCM phases, the instruments live in
  each phase, and how register threads map onto them.
- `references/acdom-forums.md` — the three-tier governance map, forum
  chairs by appointment, cadence, and the direction-type → forum
  routing table.
- `references/forum-submission.md` — the forum-submission output mode
  (structure, drafting chain, anonymity rules).

## Interaction with the other skills

- **sio-vetting-panel:** the vetting minute's final line names the
  destination forum for every CLEARED item that carries a direction.
- **techint-officers:** officer decision states map onto the R&T
  front-end — INVESTIGATE/ENGAGE feed the ideas-generation process
  (GREENWISH-style ops-tech brokering), TEST/EXPERIMENT feed ASTC
  gating and rapid-equipping channels (open-call challenges, RACE),
  TRANSITION invokes the AOR machinery.
- **techint-assessment:** grading discipline is unchanged; this skill
  only adds where a graded finding goes.
