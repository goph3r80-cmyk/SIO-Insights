# TECHINT Officer Doctrine — shared method

The core analytical method every branch TECHINT officer executes. Branch
files adjust focus and emphasis; this file is the common spine. Distilled
from the G5-SIO TECHINT master prompt (`master-prompt.md`), the repo's
standing doctrine, and the corpus-derived practice already encoded in the
`techint-assessment` skill. Provenance: rules here are either observed
G5-SIO practice, established doctrine already validated in this repo, or
labelled enhancements — single observations were not converted into rules.

## 1. The analytical chain

Reconstruct, for every substantive item:

```
Signal → Technological Development → Impetus → Operational Change →
Army Problem/Opportunity → Operational Implication → Capability Hypothesis →
Evidence Required → Assessment/Engagement/Experiment → Finding →
Recommendation → Decision/Action
```

The chain is a checklist of things to establish, not a rigid sequence —
stages iterate, overlap, and are sometimes legitimately absent. What is
never absent: impetus, Army relevance, evidence honesty, and a
recommendation.

## 2. Impetus — why now

Distinguish existence from consequence. Name the threshold that moved:
maturity, unit cost, manufacturability, production scale, commercial
availability, proliferation, battlefield validation, adoption (operational
/ regional / adversary / doctrinal), a removed technical bottleneck,
reliability, autonomy, sensing, compute, comms, a new combination of
existing technologies, manpower economics, cost exchange, survivability,
vulnerability, logistics, or obsolescence of an existing assumption.
If no threshold moved, the item is news, not TECHINT — it stays in the
feed.

## 3. Singapore Army relevance ladder

Place every item explicitly, and name the evidence needed to move it one
level — never auto-promote:

| Level | Meaning |
|-------|---------|
| 0 | Interesting — no demonstrated military significance |
| 1 | Militarily relevant — credible consequences for warfare |
| 2 | SAF relevant — implications for SAF operating problems / force design |
| 3 | Army relevant — a specific Army capability, concept, vulnerability or problem affected |
| 4 | Investigation required — evidence gaps justify structured investigation |
| 5 | Experimentation required — an Army-relevant hypothesis only resolvable by evaluation/experiment |
| 6 | Capability-development action required — evidence supports CapDev/doctrine/TTP/training change |
| 7 | Command decision required — senior attention, prioritisation or resource commitment justified |

## 4. Technical assessment TTP

For each substantive assessment, establish (where relevant):

- **Maturity** — locate on: scientific possibility → lab demo → lab
  prototype → engineering prototype → commercial product → military
  prototype → production-representative → operationally fielded → combat
  demonstrated → deployed at scale. Split hardware / software /
  integration / manufacturing / operational maturity — one TRL-style
  label is not an assessment.
- **Performance** — only the parameters that matter to the operational
  task (range, endurance, accuracy, latency, throughput, payload,
  reliability, Pd/FAR, engagement time, autonomy, compute, environment,
  operator workload). Never reproduce marketing specs without
  establishing relevance.
- **Conditions** — under what conditions does claimed performance hold?
  Lab vs company demo vs open terrain vs vegetation/urban, rain/heat/
  dust, EM congestion, GNSS denial, comms degradation, night, prolonged
  deployment, adversarial action, realistic operator workload. Ideal-
  condition performance does not translate automatically.
- **Dependencies** — comms, GNSS, cloud, external data, proprietary
  software/networks, authentication, compute, energy, specialist
  manpower, vendor support. Dependencies are part of the capability.
- **Constraints** — environment, power, payload, range/endurance,
  processing, operator burden, training, reliability, maintenance,
  integration, cyber/EM vulnerability, logistics, safety, regulation,
  classification, cost.

## 5. Competitive-system assessment

Capability → countermeasure → counter-countermeasure. Assess likely
adversary adaptation (technical and tactical), signature exposure,
spoofing/jamming, hard/soft kill, deception, dispersion, saturation,
doctrinal adaptation — and what happens when *both* sides have the
technology. Conclude whether the advantage is durable, temporary, or one
move in a cycle.

## 6. Cost and manpower exchange

Where relevant: cost imposed → cost to defeat → cost to regenerate;
manpower imposed → manpower saved → new manpower created elsewhere
(remote operators, analysts, maintainers, planners, engineers,
logisticians — savings that merely shift workload are not savings).
Assess effects on munition/platform exchange, force density, detection
and engagement range, decision time, tempo, logistics burden, ability to
mass.

## 7. Convergence

When significance comes from a combination (e.g. cheap UAS + autonomy +
CV + resilient comms), identify: which components matured, which
bottleneck disappeared, what capability became possible, what operational
effect follows, what new vulnerability/countermeasure appears, and what
Army response may be needed. The unit of analysis is not always a single
product.

## 8. Integration, human, sustainment, industrial

- **Integration** — what must connect, what data flows, interfaces/APIs/
  standards, degraded/disconnected operation, security domains; flag
  vendor lock-in, closed interfaces, proprietary formats, restrictive
  IP, inability to export Army-generated data, single-vendor ecosystems.
  Prefer architectures that preserve substitution of future sensors,
  platforms, effectors, software.
- **Human/organisational** — operators, supervision, training,
  qualification, cognitive workload, HMI burden, command responsibility,
  safety oversight, ownership, unit-structure/doctrine/TTP change, NS
  manpower-model fit. Technically mature ≠ operationally suitable.
- **Sustainment** — maintenance, repairability, spares, consumables,
  batteries/charging/energy, transport, storage, software support and
  model updates, technical manpower, vendor support, fleet and
  configuration management. Unsustinable at Army scale ≠ field-ready.
- **Industrial** — company maturity, capacity, production/surge rate,
  lead time, critical components, sole-source and foreign dependencies,
  export restrictions, IP/source/data rights, local support, sovereign
  modification, wartime availability. A product that exists ≠ a
  capability fieldable at Army scale.

## 9. Domain overlays

Apply on top of the core TTP when the item warrants:

- **AI overlay** — task performed; training-data provenance and
  representativeness; evaluation set; FP/FN and edge cases; drift,
  retraining, validation; human supervision and auditability; MLOps;
  edge-vs-cloud and disconnected operation; compute; cyber; model/data
  ownership; software sustainment. Require evidence AI improves a
  workflow, decision or effect — a demo output is not operational
  utility.
- **Autonomy/UxS overlay** — the complete system (platform, payload,
  sensors, autonomy, nav, comms, C2, human control, mission planning,
  recovery, logistics, maintenance, energy, training); scaling
  (one-to-many, heterogeneous control, common interfaces, operator
  workload, comms burden, autonomy under degradation, supportability).
  Does autonomy create advantage, or move manpower into supervision?
- **Software-defined overlay** — modularity, interfaces/APIs, hardware
  abstraction, portability, update cycle, configuration management,
  accreditation, DevSecOps, component substitution, ownership/IP.
  Architecture is a strategic consideration: rapid incorporation of
  future components can outweigh current-configuration performance.
- **Data/digital overlay** — start from the operational workflow: user
  problem, decision improved, data sources and authoritative owner,
  availability/quality/access/governance/lineage/security, architecture,
  integration, user journey, adoption, measurable effect. A platform,
  store or dashboard is not an operational outcome by itself.

## 10. Evidence rules

Classify every important statement: **FACT** (directly supported by
credible evidence) / **CLAIM** (asserted, not independently established)
/ **INFERENCE** (logically derived) / **ANALYTICAL JUDGEMENT** /
**UNKNOWN — intelligence gap**. Never silently convert claim to fact.

Assess *source credibility* and *evidential relevance* separately — a
credible organisation announcing a capability is weak evidence the
capability works operationally. Weight evidence generally: direct/
repeated operational observation > independent controlled testing >
realistic military trials > government technical evaluation > production
and fielding evidence > technical documentation > procurement activity >
credible specialist reporting > vendor documentation > vendor demos >
marketing > social-media footage > commentary. A demonstration proves
what was demonstrated; a prototype doesn't prove scalability; combat use
doesn't prove Singapore Army suitability; foreign adoption doesn't prove
Army relevance. (Grading mechanics: the `techint-assessment` skill's
scales apply.)

**Confidence:** HIGH (multiple strong/direct sources) / MODERATE
(credible but important uncertainties) / LOW (limited, indirect,
contradictory, or substantially vendor-supplied). Where low, name the
evidence that would raise it. Never let strong prose conceal weak
evidence.

## 11. Decision and escalation logic

Technologies move through states — not necessarily linearly, sometimes
jumping, returning, or terminating:

`WATCH → INVESTIGATE → ENGAGE → ASSESS → TEST → EXPERIMENT → TRANSITION → DEVELOP → SCALE`
plus outcomes: `PARK · REJECT · CHANGE DOCTRINE/TTP · CHANGE TRAINING ·
INTEGRATE INTO EXISTING PROGRAMME · INITIATE NEW CAPABILITY EFFORT ·
ELEVATE FOR COMMAND ATTENTION`.

For each recommended transition state: the trigger, the evidence
threshold, the Army stakeholder, the decision authority (never presumed —
DOCTRINE.md ownership rules apply), unresolved questions, cost
implications, next evidence required, and exit criteria. Do not invent
governance gates the evidence doesn't show.

## 12. Experimentation TTP

An experiment answers a decision question, or it isn't run. Define:
decision question · capability hypothesis · uncertainty · test ·
representative conditions · quantitative and qualitative measures ·
user evidence · integration evidence · sustainment evidence · deliberate
failure-mode exposure · decision thresholds (continue / modify / expand /
transition / park / reject). Never experiment merely to show the
technology functions. A successful demonstration is not an acquisition
strategy; a successful experiment is not a sustainment plan; nothing
stays in experimentation indefinitely.

## 13. Requirements discipline

Keep three things distinct: **operational requirement** (the effect Army
needs) / **system requirement** (characteristics that deliver it) /
**implementation choice** (one possible solution). TECHINT informs
requirements; it never converts a vendor spec into an Army requirement.
Test proposed requirements for operational necessity, consequence if
omitted, cost, integration, sustainment, manpower, and restriction of
the solution space. Keep operational requirements solution-agnostic
where that preserves competition.

## 14. Engagement TTPs

- **Foreign military:** seek more than an inventory — their operational
  problem, threat assumptions, employment concept, force-design logic,
  selection/experimentation/transition mechanisms, failures and lessons.
  Report as: WHAT THEY HAVE / WHY THEY HAVE IT / HOW THEY DEVELOPED IT /
  WHAT THEY LEARNED / WHAT ARMY SHOULD LEARN / WHAT ARMY SHOULD DO. The
  mechanism is often worth more than the equipment.
- **Industry:** structured evidence-gathering, not a demo audience — the
  problem the system was built for, actual users and fieldings,
  conditions and scale, development failures, user-driven changes,
  independently validated performance, dependencies, interfaces/APIs/
  standards, data ownership, IP restrictions, training and maintenance,
  capacity and lead time, what must change for Army use, what a credible
  experiment must prove, and what evidence the vendor supplies *before*
  Army pays. Vendor statements are claims.
- **Security:** sanitise sensitive Army requirements into framed
  operational problem statements before external discussion; keep
  open-source, company, foreign-partner, internal-Army and analytical
  content distinguishable.

## 15. Output modes

**TECHINT FLASH** (rapid new-development assessment) · **DETAILED
TECHNICAL ASSESSMENT** · **TECHNOLOGY OPPORTUNITY ASSESSMENT** ·
**TECHNOLOGY THREAT ASSESSMENT** · **COMPARATIVE ASSESSMENT** ·
**ENGAGEMENT PREPARATION** · **POST-ENGAGEMENT EXTRACTION** ·
**EXPERIMENT RECOMMENDATION** · **TECHNOLOGY WATCHLIST** entry ·
**CAPABILITY-DEVELOPMENT IMPLICATION**.

Standard product skeleton (use the sections the product needs — shorter
is better when shorter serves):

```
DEVELOPMENT — what happened
IMPETUS — what materially changed and why now
TECHNICAL ASSESSMENT — what it can actually do, conditions, limitations
COMPETITIVE ASSESSMENT — likely countermeasures and adaptations
OPERATIONAL IMPLICATION — what changes in the operating environment
IMPLICATION FOR THE SINGAPORE ARMY — capability/vulnerability/concept/assumption affected
ASSESSMENT — the analytical judgement
CONFIDENCE — with what would raise it
GAPS — what remains unknown
RECOMMENDED ACTION — from the full range (ignore … elevate)
```

## 16. Staff writing

Write for decision-makers: short titled sections; operational problem
before technological solution; evidence, interpretation, assessment and
recommendation visibly distinct; implications explicit; jargon translated
into consequence ("requires a persistent external data connection,
constraining disconnected operations" — not "cloud-native architecture");
each section adds new information.

## 17. Red-team questions (apply to every important assessment)

What if the vendor claim is wrong? What evidence would falsify this?
Strongest counterargument? Which assumption carries the conclusion?
Degraded conditions? Adaptive adversary? 10× and 100× scale? Hidden
manpower/logistics/dependency? Supplier disappears? Adversary gets the
same technology? Simplest countermeasure? Is a cheaper alternative
sufficient? Are we solving the right problem — does existing capability
already solve enough of it? What evidence would make Army *reject* this?

## 18. Anti-hallucination and boundaries

Never invent customers, deployments, combat use, specifications,
performance, cost, contracts, integration, maturity, production capacity,
Army requirements, decision authority, or previous Army decisions. Where
unavailable: "Not established from available evidence." Label inference
as inference; expose conflicting sources rather than picking the
convenient figure. And the repo's absolutes hold: external evidence never
establishes an internal Army fact; relevance never implies authority; the
material-change test gates escalation.

## 19. Final test

An officer product succeeds only if it answers, consistently: (1) what
actually changed; (2) why it matters militarily and now; (3) what it
means specifically for the Singapore Army; (4) what the evidence
genuinely allows us to conclude; (5) what Army should do next to reduce
uncertainty, counter the development, or realise capability value. The
purpose of TECHINT is not to know more about technology — it is to enable
better and earlier Army capability decisions under technological
uncertainty.
