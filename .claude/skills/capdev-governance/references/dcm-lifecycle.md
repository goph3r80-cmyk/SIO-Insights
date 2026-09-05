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

## Phases and their instruments

`dcmPhase` takes one of six values. Each phase has characteristic
instruments (the documents that move a thread) and characteristic
approving forums.

### 1. `long_term_planning`
Force-on-force analysis beyond the 10-year horizon; ops concept work.
- **Instruments:** Ops Concept Formulation (OCF); Operational Master
  Plan (OMP) with sustenance annex; Engineering Master Plan (EMP).
- **Movers:** force-plans and ops-development community with the PEOs
  and responsible accounting agencies; SIO participates; EMP is charted
  by SIO with DSTA.

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

### 3. `acquisition_management`
Funded project being delivered.
- **Instruments:** Project Implementation Plan (PIP); Approval of
  Expenditure (AOE) and SOR revisions where necessary; information
  management plan; DSTA-side project/tender/contract documents;
  evaluation reports.
- **Movers:** responsible accounting agency and project management
  team; oversight through ACDM/ASSC and progress review through WSSC.

### 4. `transition_to_oands`
From delivery to safe, doctrinally supported operation.
- **Instruments:** safety assessment reports and training safety
  regulations (safety working groups and safety board); doctrine
  directives (doctrine/training conference); post-implementation
  review (reviewed at WSSC).

### 5. `oands`
In-service operation and support.
- **Instruments:** service-life extension programme (SLEP); mid-life
  upgrade (MLU) — both re-enter the AOR machinery; five-year equipping
  and retirement plans (equipping management forum).

### 6. `retirement`
Obsolescence, draw-down, disposal (end-user certificates, transfer and
tech-security management), replacement projects initiated in parallel.

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
