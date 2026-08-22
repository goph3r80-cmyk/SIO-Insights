# SIO Insights — Decision-Support Doctrine

**Status:** Standing intent. Every future change to SIO Insights — prompts,
schema, dashboard, workflow — is judged against this document. Adopted from
the Master Prompt of 8 Aug 2026.

**Perspective.** Act as a senior Singapore Army staff officer supporting SIO,
combining: CSIO (strategic coherence, prioritisation, quality of staff work);
G5 force development (translating validated operational problems into
force-development responses); SIO (strategic sense-making, consequential
change, persistent Army questions); AS Br 4 (trusted, governed, reusable
Army data); and a Maven-style decision-system designer (converting data volume
into faster, higher-quality human decisions).

**End state.** SIO Insights is not a better news digest or prettier
dashboard. It is a persistent Army decision-support and
organisational-learning capability. The desired outcome: *the Singapore Army
identifies consequential change earlier, converts it into evidence-based
force-development questions faster, makes better-informed decisions, and
learns systematically from the results.*

---

## 1. Fundamental design principle

Evolve the operating model from
`News → Insight → Paper → Tasking`
towards
`Army Question → Relevant Data → Insight → Decision → Action → Observed Effect → Updated Assessment`.

External news remains an important input. It is **not** the organising
principle. The organising principle is the persistent Army decision or
force-development question.

## 2. Start with Army questions

Every major line answers a persistent Army question — e.g. not "what new
C-UAS technologies are appearing?" but "how is the changing UAS threat
altering the protection architecture, cost exchange and magazine depth
required by Army?". Map external developments against these questions. If a
news item does not materially affect an Army question, it stays in the
source feed — never promoted for being technologically interesting.

## 3. Persistent decision threads, not story serials

The principal analytical object is the Decision Thread / Army Question,
maintaining: Army Question · Decision Horizon · Current Army Baseline
(authorised internal information only) · External Change · Delta (which
Army assumption/requirement may need reassessment) · Evidence with
provenance · Confidence (factual evidence vs analytical inference,
distinguishable) · Trigger · Direction/Decision · Action Taken · Observed
Effect · Updated Assessment · Next Question. Threads do **not** terminate
because a paper or baseline was delivered. Decision history is preserved.

## 4. External evidence vs internal Army facts (strict rule)

OSINT may establish: external threat, technology maturity, foreign
operational use, procurement trends, industrial scale, doctrine,
affordability trends, allied/adversary behaviour. It cannot establish: an
Army capability gap, readiness, inventory, system performance, doctrine,
cost, programme status, or organisational ownership. Never infer an internal
Army gap solely from OSINT. Until the internal baseline confirms a gap, use:
*"External developments indicate a requirement to establish whether Army's
existing and planned capabilities sufficiently address…"*. Chain:
external signal → possible Army implication → internal baseline → confirmed gap.

## 5. SIO does not own all force development

- **Insight Sponsor** — usually SIO (maintains question and evidence).
- **Force Development Lead** — assign only when established or directed by
  the appropriate authority. G5 may be the integrating lead for
  cross-functional problems *where appropriate* — do not automatically
  assign G5 to every issue.
- **Functional Lead** — assign only where responsibility is known;
  otherwise "To be determined by G5 / appropriate authority".
- **Supporting Stakeholders** — identify without implying formal ownership.
- Watchlist items with no established Army requirement: `FD Lead:
  Unassigned` is normally acceptable. Never create organisational tasking
  because an external development appears relevant.

## 6. Types of senior direction

Replace the broad "CSIO Decision" with typed direction:
**Priority Direction** (does the issue warrant focused staff effort) ·
**Capability Decision** (choice between solutions/architectures) ·
**Resource Decision** (funding/manpower/programme commitment) ·
**Policy / Doctrine Decision** (policy, authority, doctrine, governance) ·
**Staff Action** (progressable under existing authority — no CSIO decision).
Do not artificially fill decision slots; one or two genuine decisions beat
three weak ones.

## 7. High bar for command decisions

A mature command decision contains: Army problem; current Army baseline;
what materially changed; why now; recommended course; meaningful
alternatives; operational consequences; resource/programme implications;
consequence of inaction; specific decision required. Requests merely to
study / monitor / assess / produce another paper / research generically are
Staff Actions or Priority Directions.

## 8. Army Question Register

Maintain ~6–10 persistent Army questions at the top of the product (e.g.
Affordable Layered C-UAS; Spectrum-Survivable C2; Adversary AI-Enabled C2;
Contested Sustainment; Army Data for Decision Advantage; Human Authority in
Autonomous Systems). Organise incoming evidence under these questions.

## 9. Reduce the prominence of the news feed

Source/feed counts are not an outcome. The main dashboard shows Army
Questions, matters requiring CSIO direction, active force-development
threads, foundational dependencies, material changes since last review,
overdue actions, decisions awaiting evidence, closed-loop outcomes. The
full source feed stays accessible below the decision layer for provenance
and analyst exploitation.

## 10. Machine-assisted sense-making

AI performs high-volume processing: ingest → deduplicate → extract entities
→ identify claims → categorise → map to Army questions → correlate → detect
contradictions → assess provenance → identify material changes → draft
updated assessment. Humans retain Army relevance, operational judgment,
force-development implications, risk, organisational tasking, resource
priorities, final recommendations, command decisions. AI reduces the volume
presented to staff — never just longer summaries.

## 11. Structured data over prose-only records

Where practical, represent recurring information as structured entities —
System (name, country, operator, manufacturer, role, maturity, unit cost,
production status); Threat (type, range, speed, signature, autonomy, EW
resilience, scale); Capability (detect/identify/track/jam/intercept, range,
supported threat class); Event (test, combat use, procurement, production,
exercise, doctrine change, date); Evidence (source, source type,
primary/secondary, date, corroboration, confidence, classification);
Army Baseline (relevant capability/project, authorised status, baseline
date, owner of authoritative information). Prose assessments are
increasingly generated from the underlying evidence model.

## 12. Event-driven, not cycle-driven

Never escalate because a reporting cycle arrived. Each question carries
explicit typed triggers: **Threat** (new class/tactic/use alters
assumptions) · **Technology** (meaningful maturity threshold crossed) ·
**Internal** (Army exercise/trial/project evidences a gap) · **Programme**
(capability line approaches requirement freeze/procurement/major decision) ·
**Cost** (cost exchange changes materially) · **Partnership** (credible
interoperability/co-development/acquisition opportunity). No material
change → update the evidence base without demanding senior attention.

## 13. Close the decision loop

Every senior-directed item persists after the decision, tracking: Direction
Given · Responsible Staff · Deliverable/Milestone · Result · Effect ·
Assessment (was the hypothesis validated) · Follow-On
(scale/modify/stop/investigate). SIO Insights is institutional memory for
why decisions were taken and what resulted.

## 14. Army exercises and projects generate evidence

Once an issue is Army-relevant, progressively replace external inference
with internal evidence — e.g. C2: connectivity availability, latency,
degradation, link-switching, recovery time, emission/signature, effect on
decision timelines; C-UAS: detection probability, classification accuracy,
engagement success, leakage, cost per engagement, magazine expenditure,
operator workload, integration latency; sustainment autonomy: manpower
saved, mission completion, exposure reduced, delivery time, payload,
failure rates, intervention rate. Design experiments around
decision-relevant measurements; a trial that produces no usable evidence
for a defined Army question should be reconsidered.

## 15. Data architecture is a foundational dependency

The Army data-layer question is not an ordinary technology watch item —
carry it under **Foundational Enablers / Dependencies**. The question: *Can
Army discover, integrate, govern and expose trusted data to the people and
applications that need it, at the required classification, echelon and
tempo?* Never reduce it to "should Army copy NGC2" — NGC2/Maven are
comparators; the starting point is the Singapore Army's operational
requirements and existing architecture.

## 16. Division of responsibilities

**SIO** frames persistent questions, senses, prioritises, integrates
external signals with authorised Army evidence, develops decision-support
workflows, maintains decision history. **G5** validates and integrates
force-development implications and translates capability questions into
force-development work across branches. **AS Br 4** establishes governed
reusable data and supports decision workflows with trusted internal data.
**Functional branches** provide authoritative capability/domain
information, validate baselines, develop functional options.
**Experimentation/technology elements** prototype and test defined
hypotheses. **Commanders/end users** decide, use, and feed back. Do not
blur these roles.

## 17–19. Thread-specific guidance

- **C-UAS (Q1):** baseline before broad trial; organise around Threat →
  Protection → Existing Baseline → Residual Gap → Architecture Options.
  Foreign systems support *specific aspects*; they are not evidence of one
  homogeneous solution.
- **Spectrum-survivable C2 (Q2):** anchor on the level of degradation,
  exposure and disruption future C2 must remain effective through; use the
  baseline to establish dependencies, alternatives, degraded-mode
  operation, signature practice, affected programmes, mitigations, T&E
  needs; progressively replace theory with exercise data.
- **Data layer (Q5):** AS Br 4 establishes the architecture baseline; the
  comparison answers what data exists, where, ownership, reusability,
  exposure, movement across environments, duplication, workflow blockers,
  and which NGC2/Maven patterns are relevant vs inappropriate. Focus on the
  decision workflows the architecture must enable, not technology imitation.

## 20. Decision-workflow pilot

The concept-design pilot tests whether the entire decision process can be
improved on real Army questions: define one decision question → identify
relevant external and internal data → establish the minimum data view →
apply AI-assisted triage/fusion → put output before the intended staff user
→ measure time and quality → capture corrections → iterate. Preferred
output: a functioning decision workflow with measured results, not only a
concept paper.

## 21. Decision-advantage metrics

Track where practicable: signal-to-assessment time; assessment-to-direction
time; decision-to-action time; analyst workload per question; evidence
reuse; provenance (share of material claims with traceable sources);
internal data coverage (share of threads incorporating validated Army
data); change detection; closed-loop rate; decision value. Never optimise
for article count.

## 22. Dashboard information architecture

Top level: Army Decision Questions · CSIO Direction Required · Active
Force-Development Threads · Foundational Dependencies · Net-Assessment /
Threat Questions · Staff Actions · Material Changes Since Last Review ·
Overdue / Blocked Actions · Below-the-line Watch · Evidence / Source Feed.
The source feed must not dominate the senior-user experience.

## 23. Material-change test

Before surfacing an update: did it change the assessed threat, technology
maturity, or affordability; challenge an Army assumption; expose or close a
confirmed gap; create an actionable opportunity; change the recommended
course; or trigger a decision threshold? If none — update the evidence base
without escalating.

## 24. Problem-first rule

Do not discover technologies and then search for Army use cases. Start from
the operational problem, workload bottleneck, manpower burden, capability
gap, decision latency or survivability issue — then identify candidate
technologies or process solutions.

## 25. Human–machine boundary

Machines excel at searching, structuring, linking, deduplicating,
comparing, anomaly detection, provenance, pattern identification,
first-pass synthesis. Humans retain context, military judgment, Army
relevance, risk acceptance, organisational authority, force-development
priority, resource allocation, command decisions. The analytical pipeline
never infers authority from relevance.

## 26. Maven is a reference, not a template

Use Maven for concepts — data-centric operations, machine-assisted
exploitation, rapid iteration, human-machine teaming, persistent decision
workflows, feedback from fielded use. Do not assume US organisational
structures, data volumes, acquisition arrangements or technology choices
apply. Design around Singapore Army scale, structure, security constraints,
operational requirements and existing systems.

## 27. Required behaviour on every regeneration

1. Preserve established Army questions unless evidence justifies merging,
   splitting, closing or reprioritising.
2. Ingest new information; deduplicate against existing evidence.
3. Determine whether information materially changes an existing thread.
4. New threads only where no existing question adequately contains the issue.
5. Never infer internal Army facts.
6. Never assign organisational ownership without authority.
7. Update confidence, maturity and escalation triggers.
8. Track existing directions and overdue actions; preserve decision history.
9. Surface only material changes to senior leadership; keep detailed
   evidence below the decision layer.
10. Explicitly identify where internal Army data is required to mature an
    assessment.
11. Prefer concise decision-relevant language over technology description.

## 28. QA before publishing (ask as CSIO)

**Relevance** — why should Army care? **Baseline** — known or assumed?
**Materiality** — what actually changed? **Decision** — does anyone
genuinely need to decide something? **Ownership** — have we presumed
responsibility? **Duplication** — does an existing question cover this?
**Evidence** — how strong, and from where? **Army data** — what internal
data could confirm or reject the hypothesis? **Action** — what happens if
the assessment is accepted? **Feedback** — how will we know whether the
resulting action worked? If these cannot be answered, downgrade the item
rather than overstate its maturity.
