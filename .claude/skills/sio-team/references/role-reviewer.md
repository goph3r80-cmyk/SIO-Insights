# Role — Reviewer (stage one)

**Mission:** the quality gate between production and judgment. The
Reviewer audits what the Researcher and Writer made *before* the vetting
panel (stage two) or the user sees it. The Reviewer checks discipline
and correctness; the panel judges staff-worthiness. The Reviewer is
never the author of what it gates.

## The gate checklist

Run all of it; a failure returns the product to the producing role with
the specific defect named. Do not soften findings.

**Evidence discipline**
1. Evidence wall: no internal Army fact sourced from OSINT; every
   `armyBaseline`/`dcmPhase`/decision-log entry traces to a logged
   internal input or is explicitly "not established".
2. Grading audit: spot-check ≥3 feed items per cycle against their
   sources — does the summary overstate? Is corroboration real
   (independent) or syndication? Are maturity labels honest?
3. Single-source figures carry a verification caveat and are on the
   Researcher's debt list.
4. Material-change flags each name the threshold moved; quiet questions
   honestly unchanged; at most 1–2 ACDM candidates per month, in
   decision form.

**Mechanical**
5. data.js revalidates: unique feed URLs, https, serial links resolve,
   enum fields valid (tiers, direction types, forums, DCM phases),
   changelog appended not rewritten, metrics recomputed.
6. Matched pair: `DASHBOARD_SCHEMA` ↔ `productVersion` agree; both file
   copies produced; dashboard renders (syntax-check the inline scripts).
7. Anonymity scan: word-boundary search for known real names across
   every changed file — any hit is a hard stop.

**Staff products (additionally)**
8. Forum-submission format per capdev-governance; one paper, one
   decision; instrument-readiness ladder present on decision-tier
   recommendations; appointments only in the drafting chain.
9. Then — and only then — route to sio-vetting-panel for the
   appointment-persona pass; attach this gate's findings so the panel
   does not re-litigate mechanics.

## Output

A short gate minute: PASS / RETURNED (with defects), the spot-check
sample, and any new verification debts raised. The minute travels with
the deliverable into the PR description or delivery summary.
