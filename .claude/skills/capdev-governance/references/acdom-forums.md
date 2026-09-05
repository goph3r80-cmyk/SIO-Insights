# ACDOM governance map — tiers, forums, routing

The ACDOM (Army Capability Development Operating Manual) organises
capability-development governance in three tiers. Chairs are given by
appointment only.

## Tier 1 — Army level (steering committees)

| Forum | Chair | Role |
| --- | --- | --- |
| **ACC** — Army Commanders Conference | COA | Strategic guidance and key decisions for all Army matters; final endorsement forum for capability-development papers before SAF/MINDEF levels. |
| **ASSC** — Army Systems Steering Committee | COA + DS(T) co-chair | Strategic guidance and decisions for Army capital and R&T projects; monitors, directs, steers and integrates development and acquisition; reviews programme progress through WSSC. |
| **AISC** — Army Infrastructure Steering Committee | COA + DS(T) co-chair | Same construct for infrastructure projects. |

## Tier 2 — General Staff level

| Forum | Chair | Cadence | Role |
| --- | --- | --- | --- |
| **ACDM** — Army Capability Development Meeting | COS-GS | Monthly | Pinnacle forum of the development community: governance and strategic direction for Army cap-dev, holistic front-end integration at master-planning level, strategic resource steering, shaping the Army's contribution to Joint/MINDEF objectives. Items typically proceed ACDM → ACC. |
| **ASTC** — Army Science & Technology Conference | CSIO co-chair (with the defence-technology community) | Monthly | Central agency monitoring Army R&T; gates and prioritises R&T proposals; accountable to ASSC for R&T developments. |
| **CPRC** — Central Plans and Resource Committee | ACGS(Plans) | Monthly | Army-level governance of strategic resources; resource optimisation in force build-up. |
| **AOM** — Army Operations Meeting | ACGS(Ops) | Monthly | Endorses ops matters: ops-concept formulation, exercise concept/conduct, establishment changes. |
| **ADTC** — Army Doctrine and Training Conference | Comd TRADOC | Monthly | Approves doctrine manuals, exercise concepts/design; anchors modelling & simulation. |

## Executive level — SSSO / Div HQs and working committees

- Capability-programme working committees anchored by the PEOs with
  sponsoring Div/SSSO HQs; CSIO co-chairs for system interoperability.
- **CSIO–Dir(Land) forum** (with DSTA): system-level resolution of
  integration and development issues across PEOs and functional areas;
  executive-level supervision of projects outside PEO ambit.
- **WSSC** — weapons-systems staffing/review channel through which
  Tier-1 committees review programme progress; AOR papers pass here.
- **EMF** — equipping management forum (equipping plans, retirement).
- Formation cap-dev forums (SSSO HQ level) — SOR endorsement, ops
  manager hand/take-over.

## Direction-type → forum routing

| Register direction type | Natural forum | Notes |
| --- | --- | --- |
| `priority_direction` | **ACDM** | Attention/priority calls are COS-GS business at the pinnacle cap-dev forum. |
| `capability_decision` | **ACDM**, then **ASSC/ACC** by project class | Capital/R&T project decisions escalate per tier; R&T gating starts at **ASTC**. |
| `resource_decision` | **CPRC** (strategic resources) or **ACDM** (cap-dev trade-offs) | Name which; resource arithmetic must meet the leadership bar first. |
| `policy_doctrine_decision` | **ADTC** (doctrine) / **AOM** (ops policy) | Doctrine consequences of new capabilities ride the doctrine-directive instrument. |
| `staff_action` | In-branch / formation cap-dev forum | Below forum threshold; keep it off agendas. |

## Battle-rhythm rules

1. ACDM is monthly: an edition's material-change flags are the natural
   feeder for at most one or two **agenda candidates**, surfaced with
   the decision statement already in decision form (approve / trial /
   fund / reject), per the tightened decision test.
2. Escalation is a ladder, not a broadcast: executive level → ACDM →
   ASSC/AISC → ACC. A paper should enter at the lowest tier that can
   decide it (at most a few endorsement forums before ACC).
3. The register records **candidacy and outcomes**, never attendance:
   what a forum actually decided enters the changelog only on
   user-supplied evidence (a record of discussion, a minute, a
   direction), graded as internal evidence.
4. Forum names and chairs above are structural facts for routing; do
   not embellish them with membership lists or agenda detail the
   corpus has not evidenced.
