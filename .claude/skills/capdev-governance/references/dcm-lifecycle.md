# DCM Lifecycle — phases, instruments, register mapping

**DCM (Defence Capability Management)** is the MINDEF framework that
integrates long-term planning with life-cycle management: a structured,
controlled process by which the need for a new defence capability is
transformed into operational and support-system requirements, and by
which the system and everything needed to operate and support it is
managed across its entire life. Sustenance considerations start at the
beginning of the lifecycle, not after fielding. Within the Army's
system-development lane, SIO — with the materiel community, DSTA and the
end-users — conducts DCM of systems and platforms.

## Phases, instruments, and the information-and-action ladder

`dcmPhase` takes one of six values. Each phase has characteristic
instruments (the documents that move a thread), characteristic approving
forums — and, because DCM sits in the doctrine spine, **information
requirements**: what a decision at that stage needs to know, and what
actions implement its outcome. An assessment feeding a phase is judged
against that phase's requirements: state which are satisfied, which are
open, and whose action closes each gap.

### 1. `long_term_planning`
Force-on-force analysis beyond the 10-year horizon; ops concept work.
- **Instruments:** Ops Concept Formulation (OCF); Operational Master
  Plan (OMP) with sustenance annex; Engineering Master Plan (EMP).
- **Movers:** force-plans and ops-development community with the PEOs
  and responsible accounting agencies; SIO participates; EMP is charted
  by SIO with DSTA.
- **To decide, the instrument needs:** the threat/technology trend and
  its trajectory (graded, with confidence); the operational capability
  it affects; candidate force-mix and concept options with their
  feasibility factors (technological, economic, legal, political); the
  resource envelope at aggregate level.
- **Implementing actions:** concept work, wargaming/red-teaming of the
  trend, master-plan entries, seeding the R&T watch that will feed the
  next phase.

### 2. `front_end_planning`
Turning an approved concept and a named capability gap into a funded
requirement; also the R&T front end (seeding TRL 4+ technologies,
tech-watch, ops-tech brokering).
- **Instruments:** Approval of Requirement (AOR) package — Statement of
  Need (SON), Specific Operational Requirement (SOR), total-cost annex,
  DSTA annex, logistics annex. R&T proposals gated at ASTC. Ideas from
  the ops-tech ideas-generation process (ideas register; ops-concept
  sponsorship for high-payoff tech-push proposals); open-call
  innovation challenges and rapid-equipping (RACE) channels for
  buy-and-try.
- **Movers:** SIO with the sponsoring formation/SSSO HQ and the
  responsible accounting agency; SIO endorses the SOR at formation
  level; approving authority depends on project value (per the AOR
  approving-authority table in the manual — cite the table, never
  guess a threshold).
- **To decide, the instrument needs:** the operational need and the
  **deficiency stated against a confirmed internal baseline** (the SON's
  core — this is why the evidence wall makes baselines the binding
  item); the specific requirement in measurable terms (SOR); options
  compared with honest maturity; total-cost basis (quote / comparable /
  estimate, by phase); sustainment and manpower implications; for R&T
  gating at ASTC — TRL, the ops concept served, funding ask, and the
  experiment's decision question with pre-agreed thresholds.
- **Implementing actions:** baseline confirmation by the process owner,
  ops-tech brokering, experiment design and conduct, SOR endorsement,
  the AOR staffing chain.

### 3. `acquisition_management`
Funded project being delivered.
- **Instruments:** Project Implementation Plan (PIP); Approval of
  Expenditure (AOE) and SOR revisions where necessary; information
  management plan; DSTA-side project/tender/contract documents;
  evaluation reports.
- **Movers:** responsible accounting agency and project management
  team; oversight through ACDM/ASSC and progress review through WSSC.
- **To decide, the instrument needs:** delivery schedule and milestone
  status; evaluation evidence against the SOR; cost/expenditure state
  against approval; vendor/dependency risk (data rights, lock-in, exit
  paths); any external development material enough to force an SOR
  revision — the one input this pipeline routinely supplies here.
- **Implementing actions:** trial/acceptance evaluation, contract and
  tender steps, expenditure approvals, revision staffing.

### 4. `transition_to_oands`
From delivery to safe, doctrinally supported operation.
- **Instruments:** safety assessment reports and training safety
  regulations (safety working groups and safety board); doctrine
  directives (doctrine/training conference); post-implementation
  review (reviewed at WSSC).
- **To decide, the instrument needs:** safety evidence under realistic
  operating conditions; the doctrine and training deltas the new system
  forces; user/unit readiness; lessons captured while they can still
  change the fielding.
- **Implementing actions:** safety clearance, doctrine-directive
  drafting, training development, post-implementation review.

### 5. `oands`
In-service operation and support.
- **Instruments:** service-life extension programme (SLEP); mid-life
  upgrade (MLU) — both re-enter the AOR machinery; five-year equipping
  and retirement plans (equipping management forum).
- **To decide, the instrument needs:** in-service performance and
  obsolescence evidence; the external technology trend against which
  the fleet is ageing (a core pipeline input); upgrade-vs-replace
  cost bases; sustainment burden data from the owning units.
- **Implementing actions:** SLEP/MLU staffing (back through the AOR
  machinery), equipping-plan updates.

### 6. `retirement`
Obsolescence, draw-down, disposal (end-user certificates, transfer and
tech-security management), replacement projects initiated in parallel.
- **To decide, the instrument needs:** obsolescence case, disposal and
  tech-security constraints, and the replacement thread's state —
  retirement decisions are paired with front-end decisions, not made
  alone.
- **Implementing actions:** retirement/disposal plan staffing,
  replacement project initiation.

## Mapping register threads

- The phase describes the **Army thread**, not the foreign technology.
  Set it from evidenced Army-side state only (an internal baseline, a
  user-confirmed programme fact, a changelog-recorded decision). Where
  the Army-side state is unknown, use `null` and flag the baseline as
  the precondition — never infer phase from external maturity.
- `nextInstrument` is the *single* next instrument that would move the
  thread (e.g. "AOR (SON/SOR)" for a trial that has met its decision
  threshold; "OCF" for a concept-level question; "experiment design →
  ASTC proposal" for an R&T candidate).
- Most SIO Insights capability threads live at `front_end_planning`:
  the product's core business is evidence for what should (or should
  not) enter the AOR/ASTC machinery, and at what priority.
- A thread whose question is organisational or policy (not a system)
  takes `dcmPhase: null` — the lifecycle applies to systems, and
  pretending otherwise manufactures false precision.
