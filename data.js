/* SIO Insights edition data — generated. Replace to refresh. */
window.SIO_DATA = {
  "edition": "Aug 2026",
  "feedAsOf": "2026-08-08",
  "productVersion": "3.0",
  "changelog": [
    {
      "date": "2026-08-08",
      "note": "Decision-support evolution per Master Prompt (8 Aug 2026) — see DOCTRINE.md. Organising principle changed from news-derived serials to persistent Army questions: added a top-level questions[] register (Q1-Q7) carrying, per question: the enduring Army question, decision horizon, current Army baseline (internal-authorised information only — 'not established' where the pipeline holds none), external change, delta (which Army assumption/requirement may need reassessment), split confidence (evidence vs inference), typed escalation triggers (threat/technology/internal/programme/cost/partnership), direction required (typed), linked threads, decision log (direction given → responsible staff → deliverable → result → effect → assessment → follow-on), and next question. Serials become decision threads attached to questions via a 'question' field; threads persist after papers/baselines deliver and preserve decision history. Senior direction typed per the new taxonomy (priority_direction / capability_decision / resource_decision / policy_doctrine_decision / staff_action) replacing the undifferentiated 'CSIO decision'. W-3 elevated from watchlist to a Foundational Enabler / Dependency (tier: foundational) under Q5 — the question is whether Army can discover, integrate, govern and expose trusted data at the required classification, echelon and tempo; NGC2/Maven are comparators, not templates. W-7 reframed problem-first: the line now starts from which Army inventory/logistics processes carry the largest manpower burden, error rate or reconciliation effort — computer vision is a candidate technology assessed only after that process inventory, not a technology to find uses for. I-1 reframed from concept-note pilot to decision-workflow pilot: one real Army question run through define-question → data → minimum data view → AI-assisted triage → staff-user trial → measured time/quality → captured corrections → iterate, with a functioning measured workflow as the preferred output. Added decision-advantage metrics scaffold (provenance, internal-data coverage, closed-loop rate) replacing information-volume as the measure of value; the feed-item count is no longer surfaced as a headline indicator. Dashboard IA restructured: Army Question Register on top, then CSIO Direction Required, Active Force-Development Threads, Foundational Dependencies, Staff Actions, Below-the-line Watch, with material-changes and overdue surfaced and the source feed kept below the decision layer for provenance. Standing regeneration behaviour, material-change test, problem-first rule and QA checklist codified in GENERATORPROMPT.md (Schema v3.0)."
    },
    {
      "date": "2026-08-08",
      "note": "CSIO/COS-GS vetting revision per direction dated 8 Aug 2026. Ownership model corrected: retired the single 'owner'/'ao' fields in favour of insightSponsor / fdLead (force-development lead) / functionalLead / supporting — force-development ownership is no longer assigned presumptively; G5 force development is the default lead for Army-level integration questions, with 'to be determined by G5' where the lead cannot be established. Removed all 'sole executive agent' framing (D-1). D-1 reframed: endorse affordable layered C-UAS as an Army force-development priority; G5 to establish the requirement and integrated capability roadmap with ASB2 as functional lead; immediate deliverable is an Army C-UAS force-development baseline (threat classes, protected assets/echelons, existing/planned capabilities, residual gaps, static vs manoeuvre, kinetic/non-kinetic options, cost exchange, magazine depth, integration/C2, candidate trial areas); a layered trial is proposed only after that baseline; supporting evidence reorganised by operational effect / threat class. D-2 reframed: endorse spectrum survivability and low-signature operation as Army C2 force-development requirements with a G5-led baseline; the 'funded CapDev line under ASB2' recommendation is withdrawn pending baseline, scope and resource implications. D-3 downgraded from CSIO decision to SIO staff action (now S-1): SIO frames the cross-portfolio policy question and identifies stakeholders; SIO is not the authority for Army lethal-autonomy policy. Internal-baseline discipline applied across all serials: external evidence establishes threat/opportunity, not confirmed Army gaps — 'Army has no X' assertions replaced with 'establish whether existing and planned capabilities adequately address X against the force-development baseline'. W-1: capability ownership removed (fdLead unassigned pending a defined Army littoral requirement). W-2 narrowed to uncrewed last-mile sustainment under contested conditions; fixed logistics/inventory automation split out to new W-7; DARPA Lift Challenge scoped to the heavy-lift element only. W-3: 'pending ADIO input' converted to a defined internal tasking (ADIO architecture baseline due 15 Sep 2026). W-4: net-assessment relevance (design margins, red-teaming, resilience — actionable now) separated from force-development escalation (higher evidence bar); external maturity alone is not a procurement trigger. W-5 narrowed per COS-GS filter to developments creating force-design lessons, acquisition-model change, interoperability, co-development, classification-sharing precedent or concrete partnership opportunity — Helsing capital raise and IAI Hypnosis reveal moved to source-feed-only. W-6 moved below the priority watchlist (tier: background). I-1 reclassified from decision to staff action per the tightened decision test (approval to study/pilot is CSIO-taskable within existing authority). Decision count now 2 of a possible 3 — two genuine decisions preferred over three artificially elevated ones. COS-GS filter and the tightened decision test codified as standing logic in GENERATORPROMPT.md."
    },
    {
      "date": "2026-08-06",
      "note": "CSIO restructure per critique dated 6 Aug 2026, 8:46 PM SGT. Consolidated 33 serials into 10 (3 decisions, capped per CSIO direction; 6 watchlist capability questions; 1 SIO-internal process item). Added maturity ladder (reported/demonstrated/operationally_evaluated/fielded/combat_proven), confidence rating (high/moderate/low), single accountable owner + supporting agencies (replacing owner2/joint 'X + Y' framing), CSIO Page-1 decision format (recommendation/whyNow/armyProblem/options/implications/directionSought/deliverable/deliverableDate) and Page-2 watchlist format (latestDevelopment/changeFromPrevious/armyRelevance/escalationTrigger). Renamed owner code ADO -> ADIO. Fixed stale suspenses (I-1, III-2 now W-3) to dated deliverables or explicit trigger conditions; replaced 'Next edition' suspenses across the board. Reclassified III-7 (CCA weapons release) from 'proven' to 'demonstrated' per CSIO's maturity correction, and moved it from an ASB2 platform matter to a cross-portfolio SIO-owned decision (D-3). W-3 (was III-2, common data layer) explicitly NOT reframed against Army Data Store/ENCLAVE/STRONGWATCH/ADIO — this pipeline holds no verified information on those internal systems and flags that ADIO input is required before the line can mature into a decision, rather than fabricating the comparison. Annex (feed[]) enriched with sourceType, confidence, corroborated, primarySourceUrl, unverifiedClaims and dateLastChecked per item. NOTE: index.html has not yet been updated to render the new tier/category/decision/watchlist fields — this is flagged follow-up work; the dashboard will need a rendering update to display Page 1 / Page 2 / Annex structure and the new fields."
    },
    {
      "date": "2026-08-08",
      "note": "Daily refresh. Trawled Tier 1/2/3 defence trade press, the standing China/PLA desk, and EU/Ukraine/ME desks for the 2026-08-06 to 2026-08-08 window (plus a small number of high-significance 2026-08-01/04/05 items missed by the prior trawl). Added 23 new feed[] items, none duplicating existing coverage. Applied the material-change test per DOCTRINE.md §23: refreshed evidence (src[], latestDevelopment/changeFromPrevious, signal) on D-1, D-2, S-1, W-1, W-2, W-3, W-4 and W-5 where genuinely new; W-6 and W-7 carried forward unchanged (no new evidence found). No thread's ownership, decision status, or direction sought changed this cycle. All seven active questions (Q1-Q7) received a materialChange note; no question opened, closed, merged or split. Every serial's age incremented by one edition cycle."
    }
  ],
  "serials": [
    {
      "id": "D-1",
      "category": "capability",
      "tier": "decision",
      "pf": "P5",
      "tech": [
        "robo",
        "dews",
        "ai"
      ],
      "dom": "solution",
      "supporting": [],
      "desk": "US",
      "desk2": "EU",
      "maturity": "mixed (fielded – reported; see signal)",
      "confidence": "high",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "II-2",
        "II-4",
        "II-6",
        "III-1",
        "III-10",
        "III-14"
      ],
      "dlabel": "Affordable layered counter-UAS architecture",
      "suspense": "15 Sep 2026",
      "recommendation": "Endorse affordable layered counter-UAS as an Army force-development priority. Direct the G5 force-development element to establish the Army requirement and integrated capability roadmap, with ASB2 as functional lead for counter-UAS / Sense-Strike analysis and other relevant C2, EW, protection, logistics, acquisition and technical stakeholders supporting as G5 identifies. The immediate deliverable is an Army C-UAS force-development baseline; a layered trial is proposed only after that baseline confirms residual gaps and defines the trial questions.",
      "whyNow": "Multiple independent US and allied programmes converged from demonstration to production scale within the same 30-day window: CACI's SkyValor IDIQ (up to $500M) and AeroVironment's Titan task order (~$80M) are already fielding; the Army separately issued an RFI for a sub-$150K interceptor (NGCM, responses due 20 Aug); a $3B Patriot/THAAD industrial-base framework was signed 3 Aug; and NATO/EU have committed $40B+ and €11B respectively to allied counter-drone production. Tracking these as five separate items risks Army arriving late with an uncosted, unintegrated response after allies and the threat have already moved.",
      "armyProblem": "External developments indicate a requirement to establish whether Army's existing and planned capabilities adequately address layered counter-UAS — from detection through kinetic and non-kinetic defeat — and where Army stands on the affordability trade (cheap mass-produced interceptors vs exquisite systems) that peers and allies are deciding in parallel. The extent of any Army gap has not been confirmed from internal information and should be established against the current force-development baseline.",
      "options": [
        {
          "course": "Option A — Endorse the force-development priority and direct G5 to produce the Army C-UAS force-development baseline (scope per the deliverable), with ASB2 leading the C-UAS/Sense-Strike functional analysis; a layered trial proposal follows only if the baseline confirms residual gaps and defines the trial questions.",
          "tradeoff": "Disciplined sequence (threat → problem → baseline → gap → trial questions → trial); adds one staff step before any trial, so a trial decision arrives one cycle later than direct trial sponsorship would."
        },
        {
          "course": "Option B — Direct ASB2 to run a functional-lane comparative assessment of the external programmes (SkyValor, NGCM, low-cost interceptors, directed energy) without a G5-integrated baseline.",
          "tradeoff": "Faster technical read-out, but a single-branch framing cannot settle the integration, C2 and echelon-protection questions that span functional branches."
        },
        {
          "course": "Option C — Defer; continue watchlist tracking only.",
          "tradeoff": "No staffing cost now, but the external cost-exchange window keeps moving and Army would enter any later programme without a stated requirement or baseline."
        }
      ],
      "implications": "Staff effort only at this stage (G5-led baseline with ASB2 functional analysis); no funded programme or trial commitment is sought until the baseline defines the gap and trial questions. Programmatically, this consolidates five previously separate awareness/decision threads into one force-development line.",
      "directionSought": "Endorse or decline the force-development priority, and select Option A, B or C. No sole-executive-agent appointment is sought: force-development lead and functional lead follow the standing G5 / functional-branch construct.",
      "deliverable": "Army C-UAS force-development baseline covering: priority UAS threat classes; operational scenarios and assets/echelons requiring protection; existing and planned Army capabilities; residual capability gaps; static versus manoeuvre requirements; kinetic and non-kinetic defeat options; cost-exchange considerations; magazine-depth considerations; integration and C2 requirements; and candidate areas requiring trials",
      "deliverableDate": "2026-09-15",
      "decision": "Endorse affordable layered counter-UAS as an Army force-development priority; direct G5 (ASB2 as functional lead) to deliver the Army C-UAS force-development baseline by 15 Sep 2026. Trial proposal only after the baseline.",
      "signal": "Evidence is organised by the operational effect or threat class each programme addresses — these programmes collectively demonstrate the layered-defence need and the changing cost exchange, but they do not all solve the same Army threat class. — DEFEAT OF SMALL UAS BY SOFT-KILL (RF/EW): [Fielded] JIATF-401 converted a border-tested evaluation into a three-year, up-to-$500M IDIQ for CACI's SkyValor non-kinetic detect-and-defeat system (RF jamming plus net-capture) after a two-day Yuma demonstration (DefenseScoop, 31 Jul); AeroVironment's Titan task order (~$80M) is fielding AI-enabled RF detect-and-defeat at Air Force bases; the Marine Corps is integrating UGVs into its MADIS counter-drone system (Army Recognition, 27 Jun). — DEFEAT OF SMALL / ONE-WAY-ATTACK UAS BY LOW-COST KINETIC INTERCEPTOR: [Reported] the Army's Next Generation Counter-sUAS Missile RFI (4 Aug) seeks a purpose-built sub-$150K interceptor (responses due 20 Aug); [Combat-proven — single event] Ukraine's Griffen interceptor drone downed a Shahed one-way-attack drone for the first time (Militarnyi, 7 Jul). — CRUISE/BALLISTIC-CLASS AIR DEFENCE AND THE COST-EXCHANGE / MAGAZINE-DEPTH TREND (context for the affordability trade, not small-UAS defeat): [Fielded] the $58.6B FY26-32 Patriot multiyear (30 Jul) and $3B Patriot/THAAD component framework (3 Aug) triple PAC-3 MSE production; [Reported] Lockheed's sub-$2M PAC-3 ACE interceptor (Farnborough, 20 Jul) and the 10-nation coalition behind Ukraine's ~$700K Freyja/FP-7.X (Paris, 14 Jul) hedge against exquisite-interceptor cost; DIU's Ground-Based Affordable Mass call (27 Jul) applies the same cost logic to offensive fires. — COUNTER-SWARM DIRECTED ENERGY: [Demonstrated] the Pentagon's Joint Laser Weapon System programme (Lockheed Aculight, nLIGHT — up to $847M ceiling) is scaling 150kW counter-drone lasers toward 300-500kW cruise-missile defence, and Germany has commissioned a naval laser targeted for fielding by 2029 after 28,000nm of at-sea demonstration. [Reported — state-linked, corroborate] China is showcasing and exporting a man-portable-to-naval laser C-UAS line (Harbin Xinguang 'Lijian', CPMIEC LW-30, Novasky NI-L3K) to Gulf and SE Asian markets — vendor/state claims not independently verified at declared performance levels. — SWARM-CONTROL AUTONOMY LAYER: [Reported] AeroVironment/Applied Intuition's Acuity autonomy software (29 Jul) is moving single-operator, multi-drone swarm control from demonstrator toward the Army Launched Effects programme of record. — ALLIED PRODUCTION MASS AND INTEROPERABILITY: [Reported] NATO's $40B+ five-year counter-drone package (7 Jul) and the €11B EU-Ukraine Drone Deal (15 Jul) fund allied counter-drone mass production and interoperability standards at alliance scale, while Ukraine's drone campaign (1M+ targets struck since January; deep strikes into Russia) continues to define the threat's operational envelope. Since 4 Aug, further evidence of the marketplace/production-scale shift the baseline is being built against: [Reported] JIATF-401 funded Kaizen Laboratories ($15M) to build an AI-driven marketplace listing vetted counter-UAS vendors (Anduril, AeroVironment, DroneShield, SMARTSHOOTER) for military, allied and law-enforcement buyers (DefenseScoop, 4 Aug); [Reported] the Army is separately negotiating with AeroVironment to make the Enduring High Energy Laser (E-HEL) a permanent counter-drone capability, building on M-SHORAD directed-energy experimentation (Army Recognition, 7 Aug); and [Reported] Paramount (South Africa) integrated an AI-enhanced Aselsan EO/IR sensor onto its Mwari aircraft for a dedicated counter-UAS configuration (FlightGlobal, 6 Aug) — allied international uptake of the same layered architecture.",
      "sowhat": "Every element of a layered C-UAS/sense-strike architecture (sensing, soft-kill, directed energy, kinetic interceptors) is moving from demonstration to production somewhere in the alliance within the same 30-day window, at costs and quantities well characterised in open reporting. Treated as one force-development question, this is the most evidenced and most immediately actionable capability issue this edition — but the external evidence establishes the threat and the cost-exchange trend, not Army's internal baseline. The G5-led baseline step is what converts it from an external signal into a decision-grade confirmed gap.",
      "action": "G5 force-development element to produce the Army C-UAS force-development baseline by 15 Sep 2026, with ASB2 leading the C-UAS/Sense-Strike functional analysis and SIO maintaining the external evidence base as insight sponsor.",
      "src": [
        {
          "out": "Stars and Stripes",
          "date": "7 May 2026",
          "ttl": "Five US bases to get directed-energy weapons to counter drones",
          "url": "https://www.stripes.com/theaters/us/2026-05-07/directed-energy-weapons-to-counter-drones-21606215.html",
          "f": "verified"
        },
        {
          "out": "Army Recognition",
          "date": "6 May 2026",
          "ttl": "US Army accelerates laser and microwave weapons to defeat mass drone attacks",
          "url": "https://www.armyrecognition.com/news/army-news/2026/us-accelerates-laser-and-microwave-weapons-deployment-to-counter-drone-swarms",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "9 Jul 2026",
          "ttl": "Pentagon awards deals for laser weapons that could shoot down drone swarms",
          "url": "https://defensescoop.com/2026/07/09/pentagon-joint-laser-weapon-system-defeat-drone-swarms/",
          "f": "verified"
        },
        {
          "out": "Defense News",
          "date": "10 Jul 2026",
          "ttl": "Rheinmetall, MBDA to develop laser weapon for German Navy",
          "url": "https://www.defensenews.com/global/europe/2026/07/10/rheinmetall-mbda-to-develop-laser-weapon-for-german-navy/",
          "f": "verified"
        },
        {
          "out": "BusinessWire",
          "date": "7 Jul 2026",
          "ttl": "Aurelius Systems and American Rheinmetall Partner to Advance Autonomous Counter-Drone Defense",
          "url": "https://www.businesswire.com/news/home/20260707583744/en/Aurelius-Systems-and-American-Rheinmetall-Partner-to-Advance-Autonomous-Counter-Drone-Defense",
          "f": "verified"
        },
        {
          "out": "South China Morning Post",
          "date": "23 Jun 2026",
          "ttl": "China showcases portable laser weapons for a single soldier to shoot down drones",
          "url": "https://www.scmp.com/news/china/military/article/3357667/china-showcases-portable-laser-weapons-single-soldier-shoot-down-drones",
          "f": "verified",
          "note": "Hong Kong outlet; systems shown at a Beijing exhibition — vendor claims, corroborate."
        },
        {
          "out": "Global Times",
          "date": "26 Mar 2026",
          "ttl": "Two new types of Chinese anti-drone laser weapons revealed in official media report",
          "url": "https://www.globaltimes.cn/page/202603/1357573.shtml",
          "f": "verified",
          "note": "Chinese state media — treat as intent signalling; corroborate performance claims."
        },
        {
          "out": "Army Recognition",
          "date": "8 Feb 2026",
          "ttl": "WDS 2026: China's CPMIEC unveils LW-30 laser weapon system for Gulf counter-drone defense",
          "url": "https://www.armyrecognition.com/archives/archives-defense-exhibitions/2026-archives-news-defense-exhibitions/world-defense-show-2026/wds-2026-chinas-cpmiec-unveils-lw-30-laser-weapon-system-for-gulf-counter-drone-defense",
          "f": "verified"
        },
        {
          "out": "Defense News",
          "date": "30 Jul 2026",
          "ttl": "US strikes $58.6 billion Patriot missile deal amid rising stockpile concerns",
          "url": "https://www.defensenews.com/industry/techwatch/2026/07/30/us-strikes-586-billion-patriot-missile-deal-amid-rising-stockpile-concerns/",
          "f": "verified"
        },
        {
          "out": "Defense News",
          "date": "30 Jul 2026",
          "ttl": "The arms race for cheaper anti-ballistic weapons is underway",
          "url": "https://www.defensenews.com/industry/techwatch/2026/07/30/the-arms-race-for-cheaper-anti-ballistic-weapons-is-underway/",
          "f": "verified"
        },
        {
          "out": "Military Times",
          "date": "20 Jul 2026",
          "ttl": "Lockheed Martin announces cheaper Patriot interceptor missile",
          "url": "https://www.militarytimes.com/news/your-military/2026/07/20/lockheed-martin-announces-cheaper-patriot-interceptor-missile/",
          "f": "verified",
          "note": "Syndication of the Defense News wire story; unveiled at Farnborough."
        },
        {
          "out": "Defense News",
          "date": "27 Jul 2026",
          "ttl": "Pentagon calls for cheaper long-range strike weapons, with testing in just 3 months",
          "url": "https://www.defensenews.com/news/2026/07/27/pentagon-calls-for-cheaper-long-range-strike-weapons-with-testing-in-just-3-months/",
          "f": "verified"
        },
        {
          "out": "Defense News",
          "date": "14 Jul 2026",
          "ttl": "9 nations back Ukraine's Patriot alternative, Freyja — and want it flying in a year",
          "url": "https://www.defensenews.com/global/europe/2026/07/14/9-nations-back-ukraines-patriot-alternative-freyja-and-want-it-flying-in-a-year/",
          "f": "verified",
          "note": "Corroborated by Euronews, Al Jazeera, Foreign Policy, Kyiv Post, United24 Media and Opex360."
        },
        {
          "out": "DefenseScoop",
          "date": "3 Aug 2026",
          "ttl": "Pentagon inks $3B framework agreement for Patriot, THAAD components",
          "url": "https://defensescoop.com/2026/08/03/pentagon-inks-3b-framework-agreement-for-patriot-thaad-components/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "2 Jul 2026",
          "ttl": "Pentagon awards $500M contract to AeroVironment for counter-drone technology",
          "url": "https://defensescoop.com/2026/07/02/pentagon-awards-500m-contract-aerovironment-counter-drone-technology/",
          "f": "verified"
        },
        {
          "out": "Inside Unmanned Systems",
          "date": "19 May 2026",
          "ttl": "Pentagon awards $500M to Perennial Autonomy for counter-drone interceptors proven in Ukraine",
          "url": "https://insideunmannedsystems.com/pentagon-awards-500m-to-perennial-autonomy-for-counter-drone-interceptors-proven-in-ukraine/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "9 Jun 2026",
          "ttl": "Pentagon approves autonomous counter-UAS system after border testing",
          "url": "https://defensescoop.com/2026/06/09/pentagon-approves-autonomous-counter-drone-system-after-border-testing/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "6 Jul 2026",
          "ttl": "Pentagon awards $80M task order for AI-enabled tech to defend Air Force bases against small drones",
          "url": "https://defensescoop.com/2026/07/06/pentagon-awards-task-order-to-av-for-titan-drone-defense/",
          "f": "verified"
        },
        {
          "out": "Militarnyi",
          "date": "7 Jul 2026",
          "ttl": "Griffen intercepts and downs Shahed drone for the first time",
          "url": "https://militarnyi.com/en/news/griffen-intercepts-and-downs-shahed-drone-for-the-first-time/",
          "f": "verified"
        },
        {
          "out": "Army Recognition",
          "date": "7 Jul 2026",
          "ttl": "NATO approves $40 billion counter-drone initiative to defeat low-cost UAV threats",
          "url": "https://www.armyrecognition.com/news/aerospace-news/2026/nato-approves-40-billion-counter-drone-initiative-to-defeat-low-cost-uav-threats",
          "f": "verified"
        },
        {
          "out": "The Aviationist",
          "date": "14 Jul 2026",
          "ttl": "France Clears Rafale to Use 68mm Rockets Against Drones",
          "url": "https://theaviationist.com/2026/07/14/france-clears-rafale-to-use-68-mm-rockets-against-drones/",
          "f": "verified"
        },
        {
          "out": "The Defence Blog",
          "date": "15 Jul 2026",
          "ttl": "Japan taps German firm for its \"drone-killer\" program",
          "url": "https://defence-blog.com/japan-taps-a-german-company-for-its-drone-killer-program/",
          "f": "verified",
          "note": "Corroborated by a parallel same-week Terra Drone ATLA interceptor-drone selection and UASweekly coverage."
        },
        {
          "out": "DefenseScoop",
          "date": "31 Jul 2026",
          "ttl": "Pentagon's counter-drone task force inks $500M contract for SkyValor 'detect and defeat' system after border testing",
          "url": "https://defensescoop.com/2026/07/31/pentagon-counter-drone-task-force-500m-contract-caci-skyvalor/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "4 Aug 2026",
          "ttl": "Army seeks next-gen missile that could shoot down small drones for less than $150K a pop",
          "url": "https://defensescoop.com/2026/08/04/army-new-missile-shoot-down-drones/",
          "f": "verified"
        },
        {
          "out": "Euronews",
          "date": "15 Jul 2026",
          "ttl": "Von der Leyen and Zelenskyy sign EU-Ukraine drone deal",
          "url": "https://www.euronews.com/my-europe/2026/07/15/von-der-leyen-and-zelenskyy-sign-eu-ukraine-drone-deal",
          "f": "verified"
        },
        {
          "out": "Kyiv Independent",
          "date": "15 Jul 2026",
          "ttl": "EU signs Drone Deal with Ukraine, releases 1 billion euros for unmanned systems",
          "url": "https://kyivindependent.com/ukraine-signs-drone-deal-with-eu/",
          "f": "verified"
        },
        {
          "out": "Kyiv Independent",
          "date": "17 Jul 2026",
          "ttl": "Ukrainian drone units strike over 1 million targets since start of 2026, including nearly 200,000 Russian troops, ministry says",
          "url": "https://kyivindependent.com/ukrainian-drone-units-strike-over-1-million-targets-in-6-months-including-nearly-200-000-russian-troops-ministry-says/",
          "f": "verified"
        },
        {
          "out": "Naval News",
          "date": "27 Jul 2026",
          "ttl": "Inside Ukraine's Long-Range Strike Campaign with the AGM-188A Rusty Dagger",
          "url": "https://www.navalnews.com/naval-news/2026/07/inside-ukraines-long-range-strike-campaign-with-the-agm-188a-rusty-dagger/",
          "f": "verified"
        },
        {
          "out": "Kyiv Independent",
          "date": "27 Jul 2026",
          "ttl": "Ukrainian drones reportedly strike neighboring Belgorod, cities across southern Russia",
          "url": "https://kyivindependent.com/ukrainian-drones-reportedly-strike-russian-cities-of-belgorod-rostov-on-don/",
          "f": "verified"
        },
        {
          "out": "Militarnyi",
          "date": "30 Jul 2026",
          "ttl": "Ukraine and Latvia Sign Memorandums on Joint UAV Development",
          "url": "https://militarnyi.com/en/news/ukraine-latvia-memorandums-uav-development/",
          "f": "verified"
        },
        {
          "out": "Kyiv Independent",
          "date": "2 Aug 2026",
          "ttl": "Russian oil refinery, airbase, Wildberries warehouse reportedly struck by Ukrainian forces",
          "url": "https://kyivindependent.com/russian-oil-refinery-airbase-reportedly-struck-by-ukrainian-forces/",
          "f": "verified",
          "note": "Ukraine's General Staff confirmed the Engels/Saratov/Kaluga/Bryansk strikes; corroborated by United24 Media. Kyiv Independent notes full damage extent independently unverified."
        },
        {
          "out": "DefenseScoop",
          "date": "29 Jul 2026",
          "ttl": "AV and Applied Intuition team up to bring collaborative autonomy to new Mayhem 10 drone",
          "url": "https://defensescoop.com/2026/07/29/av-applied-intuition-collaborative-autonomy-mayhem-10-drone/",
          "f": "verified"
        },
        {
          "out": "Army Recognition",
          "date": "27 Jun 2026",
          "ttl": "US Marine Corps modernizes MADIS counter-drone system with autonomous ground vehicles",
          "url": "https://www.armyrecognition.com/news/army-news/2026/u-s-marine-corps-modernizes-madis-counter-drone-system-with-autonomous-ground-vehicles",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "4 Aug 2026",
          "ttl": "Pentagon's counter-drone hub picks software startup Kaizen to develop c-UAS marketplace for $15M",
          "url": "https://defensescoop.com/2026/08/04/pentagon-counter-drone-hub-picks-software-startup-kaizen-to-develop-c-uas-marketplace-for-15m/",
          "f": "verified",
          "note": "Corroborated by Defense One, DroneLife, Inside Unmanned Systems."
        },
        {
          "out": "Army Recognition",
          "date": "7 Aug 2026",
          "ttl": "U.S. Army Moves to Make High-Energy Lasers a Permanent Counter-Drone Weapon",
          "url": "https://www.armyrecognition.com/news/army-news/2026/u-s-army-moves-to-make-high-energy-lasers-a-permanent-counter-drone-weapon",
          "f": "verified"
        },
        {
          "out": "FlightGlobal",
          "date": "6 Aug 2026",
          "ttl": "Paramount's Mwari gets Aselsan sensor as focus shifts to counter-drone mission",
          "url": "https://www.flightglobal.com/defence/2026/08/paramounts-mwari-gets-aselsan-sensor-as-focus-shifts-to-counter-drone-mission/",
          "f": "verified",
          "note": "Corroborating: EDR Magazine, DefenceWeb."
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "G5",
      "functionalLead": "ASB2",
      "question": "Q1",
      "directionType": "priority_direction",
      "decisionLog": []
    },
    {
      "id": "D-2",
      "category": "capability",
      "tier": "decision",
      "pf": "P6",
      "tech": [
        "dews",
        "data"
      ],
      "dom": "solution",
      "supporting": [],
      "desk": "US",
      "desk2": "EU",
      "maturity": "fielded (adversary system — see signal); Army baseline: to be established",
      "confidence": "high",
      "status": "overdue",
      "raised": "Apr 2026",
      "age": 17,
      "supersedes": [
        "II-1"
      ],
      "dlabel": "Spectrum-survivable C2",
      "suspense": "15 Sep 2026",
      "recommendation": "Endorse spectrum survivability and low-signature operation as Army C2 force-development requirements. Direct the G5 force-development element to establish the current baseline, the affected capability lines and the required design standards, with the relevant C2, EW, communications and operational stakeholders contributing. No funded-programme approval is sought before the baseline, scope and resource implications are known.",
      "whyNow": "The threat side of this gap is no longer theoretical: Russia has fielded a dedicated counter-Starlink jammer (Volna Kupol Garant, ~20km² suppression radius; Reuters via Militarnyi, 8 Jul) — proof that comms-dependent C2 and uncrewed datalinks are now a live, fielded EW target, not a future risk. AI-accelerated signal analysis and adaptive jamming are maturing in parallel (DefenseScoop, 11 May / 26 Jun), narrowing the window before a comparable capability is turned against Army C2. This decision has been open since April without a delivered study; CSIO flagged the lapsed 28-July suspense on 6 Aug.",
      "armyProblem": "External developments — including a fielded counter-satellite-communications jammer — indicate a requirement to establish whether Army's command posts, C2 links and uncrewed datalinks adequately address an AI-accelerated EW threat, and what 'low-signature' should mean as an Army design standard. The extent of any Army gap has not been confirmed from internal information and should be established against the current force-development baseline.",
      "options": [
        {
          "course": "Option A — Direct G5 to produce the Army C2 spectrum-survivability baseline (scope per the deliverable), identifying affected capability lines and candidate design standards, benchmarked against the demonstrated Volna Kupol Garant-class threat.",
          "tradeoff": "Establishes the factual foundation before any funding decision; requires EW threat-modelling input G5 will need to draw from the contributing C2, EW and technical stakeholders."
        },
        {
          "course": "Option B — In parallel, direct an interim signature-awareness review of current command-post practices as a low-cost procedural mitigation while the baseline is produced.",
          "tradeoff": "Fast, low-cost first step; does not by itself establish the baseline or close any gap the baseline may confirm."
        }
      ],
      "implications": "Staff effort at this stage; resource implications are established by the baseline itself, not presumed. The baseline will indicate whether closing any confirmed gap touches C2 architecture, datalink hardware, doctrine or contracted EW threat-modelling capacity.",
      "directionSought": "Endorse the force-development requirement and approve Option A (baseline), optionally with Option B in parallel; confirm the revised 15 Sep 2026 suspense. No funded-programme approval is sought at this stage.",
      "deliverable": "Army C2 spectrum-survivability baseline covering: current command-post and C2 electromagnetic-signature considerations; primary, alternate, contingency and emergency communications; datalink resilience; anti-jam requirements; degraded-mode operations; network and terminal dependencies; procedural and doctrinal mitigations; implications for existing and planned Army C2 programmes; and test & evaluation requirements",
      "deliverableDate": "2026-09-15",
      "decision": "Endorse spectrum survivability and low-signature operation as Army C2 force-development requirements; direct G5 to deliver the baseline by 15 Sep 2026. No funded programme sought before the baseline.",
      "signal": "[Fielded — adversary system] Electronic warfare is described as an hourly fight in which fixed C2 assets are treated as liabilities, and it is accelerating: AI-enabled EW (automated signal analysis, adaptive jamming) is maturing fast (DefenseScoop, 11 May / 26 Jun) while peer forces routinely jam and spoof GNSS. Russia has fielded a dedicated counter-Starlink system, Volna Kupol Garant, able to suppress satellite-comms links across roughly 20km² (Reuters via Militarnyi, 8 Jul) — a fielded, not theoretical, EW capability confirming that comms-dependent C2 and uncrewed links are now a contested spectrum target in their own right, not just a navigation/GNSS problem. [Fielded — adversary] Since 4 Aug: ISW assesses Russia's Rubicon Center for Advanced Unmanned Technologies is now coordinating with the Aerospace Forces to strike Ukrainian drone control points and operator concentrations near Druzhkivka (Critical Threats, 6 Aug) — a concrete instance of an adversary locating and striking C2/control nodes, not merely jamming their links, reinforcing the fixed-C2-as-liability threat this baseline addresses.",
      "sowhat": "The clearest candidate capability-gap question this edition: the adversary EW threat is fielded, not projected. What remains to be established — and what this decision directs — is the Army-side baseline against which any gap, design standard and resource implication can be confirmed.",
      "action": "G5 to deliver the Army C2 spectrum-survivability baseline by 15 Sep 2026, with C2, EW, communications and operational stakeholders contributing; SIO to maintain the external threat evidence as insight sponsor.",
      "src": [
        {
          "out": "DefenseScoop",
          "date": "26 Jun 2026",
          "ttl": "Hiding in the spectrum: making the command post disappear",
          "url": "https://defensescoop.com/2026/06/26/hiding-in-the-spectrum-army-command-posts/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "11 May 2026",
          "ttl": "The future of war arrived (EW as an hourly contest)",
          "url": "https://defensescoop.com/2026/05/11/the-future-of-war-arrived-we-arent-ready/",
          "f": "verified"
        },
        {
          "out": "Militarnyi",
          "date": "8 Jul 2026",
          "ttl": "Russia deploys new Volna Kupol Garant EW system to jam Starlink",
          "url": "https://militarnyi.com/en/news/russia-deploys-new-volna-kupol-garant-ew-systems-to-jam-starlink-ukraine-already-destroying-them/",
          "f": "verified",
          "note": "Citing Reuters reporting; Ukrainian MoD adviser Serhii Beskrestnov cited on system parameters."
        },
        {
          "out": "ISW/Critical Threats",
          "date": "6 Aug 2026",
          "ttl": "Russia's Rubicon unmanned-systems centre boosts strikes on Ukrainian drone control points",
          "url": "https://www.criticalthreats.org/analysis/russian-offensive-campaign-assessment-august-6-2026",
          "f": "verified"
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "G5",
      "functionalLead": "To be determined by G5",
      "question": "Q2",
      "directionType": "priority_direction",
      "decisionLog": []
    },
    {
      "id": "S-1",
      "category": "process",
      "tier": "staff_action",
      "pf": "X",
      "tech": [
        "ai",
        "robo"
      ],
      "dom": "safety",
      "supporting": [
        "ASB2",
        "ASB3"
      ],
      "desk": "US",
      "maturity": "demonstrated (single developmental test, human-in-the-loop)",
      "confidence": "high",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "D-3",
        "III-7"
      ],
      "dlabel": "Autonomous strike-authority policy framing",
      "suspense": "15 Sep 2026",
      "recommendation": "SIO to frame the cross-portfolio policy question raised by uncrewed platforms carrying live weapons — human authority, human-machine command relationships, assurance and testing, legal/policy interfaces and CONOPS — and identify the appropriate Army stakeholders for subsequent consideration. SIO coordinates and frames the issue; it is not the authority that determines Army lethal-autonomy policy.",
      "whyNow": "An Anduril YFQ-44A CCA fired a live AIM-120 AMRAAM at a digital target from Edwards AFB (DefenseScoop, 15 Jul) — the first live weapons release from an uncrewed CCA platform. The Air Force states human operators retained exclusive control over weapon release throughout; a General Atomics YFQ-42A live-fire test is expected this autumn. The issue is valid and the framing work should start now, but the external trigger does not yet create an immediate Army programme or equipping decision — which is why this is carried as a staff action, not a CSIO command decision.",
      "armyProblem": "No Army position on human-authority safeguards, assurance/test standards or CONOPS for weapon-carrying uncrewed platforms has been identified in the material available to this pipeline; whether one exists, and where it sits, is itself part of what the framing paper must confirm. The question will recur across every autonomous-strike-capable line (CCA-analogues, loitering munitions, USV strike), so it is cross-portfolio, not a single-programme matter.",
      "implications": "Primarily a policy/doctrine resourcing question (legal, assurance/T&E standards) rather than a hardware programme; cost implications are minimal at this stage but TBD pending scope confirmation.",
      "directionSought": "None — for noting. SIO progresses the framing paper under existing authority; the stakeholder map and any decision-grade question return to CSIO when mature.",
      "deliverable": "Framing paper: the cross-portfolio autonomous strike-authority policy question (human authority, human-machine command relationships, assurance, testing, legal/policy interfaces, CONOPS) and the Army stakeholder map for subsequent consideration",
      "deliverableDate": "2026-09-15",
      "decision": "Staff action — SIO to frame the cross-portfolio autonomous strike-authority policy question and identify the appropriate Army stakeholders. Not a CSIO command decision this cycle.",
      "signal": "[Demonstrated — single developmental test, human-in-the-loop] An Anduril YFQ-44A Collaborative Combat Aircraft fired an AIM-120 AMRAAM at a digital target over the Mojave Desert from Edwards AFB — the first live weapons release from a CCA drone (DefenseScoop, 15 Jul; corroborated by Breaking Defense and Air & Space Forces Magazine). The Air Force states humans retain exclusive control over weapon release throughout; a General Atomics YFQ-42A live-fire test is expected this autumn. Framing note: this is a controlled test of a human-authorised release, not autonomous weapon employment — on the maturity ladder this sits at 'demonstrated', not 'proven' in an operational-employment sense. [Demonstrated] Since 4 Aug: the Air Force's X-62 VISTA testbed flew 27 autonomous air-to-air intercepts across eight flights, with AI agents processing live infrared sensor data to direct real-time interception (DefenseScoop, 5 Aug) — a further data point on the maturing autonomous-engagement chain this framing paper must address. Tier-2 analysis the same week (Breaking Defense, 5 Aug) cautions against 'best drone wins'/full-autonomy narratives, noting Ukrainian battlefield practice still favours human-in-the-loop control — a relevant caution for the framing paper's starting assumptions.",
      "sowhat": "Tests the edge of sensor-to-shooter autonomy and is the concrete trigger to begin framing a doctrine question that will recur across the portfolio. Downgraded from the decision slate per the tightened decision test: the staff work is within existing authority and no choice with operational or resource consequence is yet required of CSIO.",
      "action": "SIO, with ASB2 and ASB3 supporting, to deliver the framing paper and stakeholder map by 15 Sep 2026.",
      "src": [
        {
          "out": "DefenseScoop",
          "date": "15 Jul 2026",
          "ttl": "Air Force reaches CCA milestone with live-firing of missile from Anduril's robotic fighter jet",
          "url": "https://defensescoop.com/2026/07/15/air-force-live-fire-test-missile-anduril-cca-drone/",
          "f": "verified",
          "note": "Corroborated by Breaking Defense and Air & Space Forces Magazine."
        },
        {
          "out": "DefenseScoop",
          "date": "5 Aug 2026",
          "ttl": "Air Force expands autonomous flight tests with live, AI-enabled intercepts",
          "url": "https://defensescoop.com/2026/08/05/air-force-x-62-vista-have-heat-have-holiday/",
          "f": "verified"
        },
        {
          "out": "Breaking Defense",
          "date": "5 Aug 2026",
          "ttl": "Everyone is learning the wrong lessons from Ukraine's drone war",
          "url": "https://breakingdefense.com/2026/08/everyone-is-learning-the-wrong-lessons-from-ukraines-drone-war/",
          "f": "verified"
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "To be determined — stakeholders identified via the framing paper",
      "functionalLead": "—",
      "question": "Q6",
      "directionType": "staff_action",
      "decisionLog": []
    },
    {
      "id": "W-1",
      "category": "capability",
      "tier": "watchlist",
      "pf": "P5",
      "tech": [
        "robo"
      ],
      "dom": "solution",
      "supporting": [],
      "desk": "US",
      "desk2": "EU",
      "maturity": "mixed (reported – combat-proven; see signal)",
      "confidence": "high",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "II-5",
        "III-4",
        "III-6",
        "III-8",
        "III-12"
      ],
      "dlabel": "Maritime autonomy — attritable USV strike & sensing",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "Four new maritime-autonomy events since 4 Aug: Ukraine's Unmanned Systems Forces report their shadow-fleet interdiction campaign (Operation Molochka) has struck 218 Russian tankers since 6 Jul (Kyiv Independent, 8 Aug — Ukraine's own claim, unverified); the Royal Navy's 'Dragon Rider' trial linked aerial and surface drones via a MANET relay across 200 miles of southern England (Naval Today, 6 Aug); the Dutch MoD authorised design of a 12m uncrewed ASW surface vessel to extend sonar coverage for future Dutch/Belgian frigates (Meta-Defense, 6 Aug, paywalled); and an unidentified USV sank a vessel off Yemen's Al Mukha near Bab al-Mandeb, blamed by Yemen's government on the Houthis but not confirmed by UKMTO (Marine Insight, 6 Aug) — the clearest signal yet of armed/attritable USV tactics diffusing beyond the Black Sea to a third theatre.",
      "changeFromPrevious": "Material since the last edition (4 Aug), which reported no new maritime-autonomy events: four new items above, most notably an unconfirmed but reported USV attack outside Ukraine/CENTCOM waters (Yemen) — still does not meet the escalation trigger absent a defined Army littoral requirement.",
      "armyRelevance": "Indirect — Army has no identified littoral operating requirement in the material available to this pipeline; relevance is currently limited to the command-authority and production-model precedent this cluster feeds into S-1. No Army capability ownership is assigned at this stage.",
      "escalationTrigger": "Escalate only when there is a defined Army littoral/riverine requirement, an identified Army operational use case, a specific participation mechanism (e.g. in the SWAP-USV or MUSV programmes), or a force-development sponsor.",
      "decision": "Hold at watchlist — no Army capability ownership assigned pending a defined littoral requirement.",
      "signal": "[Combat-proven] CENTCOM conducted the first US combat use of lethal unmanned surface vessels: three armed Saronic Corsair one-way-attack USVs struck Iran's Bandar Abbas naval base (12 Jul), hitting a Ghadir-class midget submarine and port infrastructure, run as a CENTCOM operation outside the Navy's standing Task Force 59 framework (USNI News, 13 Jul; corroborated by Naval News, TWZ, Stars and Stripes, Military Times, The Aviationist). Saronic followed with a $3.2B 'Port Alpha' shipyard announcement at Port of Brownsville, TX (USNI News, 16 Jul) — production capacity, not an isolated demonstration. [Demonstrated] The Navy's GARC attritable USV detonated against the decommissioned USS Peleliu in a RIMPAC 2026 SINKEX (25-29 Jul; Naval News/TWZ/Military Times) — first GARC live-fire kill, built explicitly on lessons from Ukraine's Black Sea USV campaign; the 16ft BlackSea Technologies craft carries a 1,000lb payload over 700nm at 22kt and is designed to swarm. [Reported] DIU/Navy issued the SWAP-USV solicitation for market-ready attack-drone-carrying USVs ($100M prize purse + $200M follow-on procurement; responses due 10 Aug, Military Times, 29 Jul). [Reported] The Navy opened the next MUSV 'marketplace' phase (a high-capacity variant RPP from 1 Aug, Defense One) atop an existing 47-vessel-by-2031 acquisition goal; separately a UK-US team (Kraken/Capewell, Royal Navy Project Beehive) completed the first airdrop of a USV from an A400M (The Defense Post/Naval News, 10 Jul). [Reported] AUKUS signed its first Pillar 2 project — joint uncrewed-underwater-vehicle development, first payloads due 2027 (Breaking Defense, 31 May). [Reported — unverified] Ukraine's Unmanned Systems Forces claim their Sea of Azov/Black Sea shadow-fleet interdiction campaign has struck 218 Russian tankers since 6 Jul, including 12 in the week to 8 Aug (Kyiv Independent, 8 Aug) — Ukraine's own figures, independently unconfirmed. [Demonstrated] The Royal Navy's 'Dragon Rider' trial demonstrated coordinated aerial/surface drone operation with crewed assets over 200 miles, using a MANET relay to extend range past radio line-of-sight ahead of a planned satcom phase (Naval Today, 6 Aug). [Reported] The Dutch MoD authorised Dutch Naval Design to begin designing a 12m ASW USV to multiply sonar 'listening points' for future Dutch/Belgian frigates (Meta-Defense, 6 Aug). [Reported — unverified attribution] An unidentified USV sank a vessel off Yemen's Al Mukha near Bab al-Mandeb; UKMTO did not confirm responsibility, but Yemen's government blamed the Houthis (Marine Insight, 6 Aug) — if confirmed, the first reported armed-USV attack outside the Ukraine/CENTCOM theatres tracked in this line.",
      "sowhat": "Five separate maritime-autonomy threads (attack-USV solicitation, AUKUS UUV cooperation, MUSV/airdrop delivery models, armed-USV combat debut, GARC live-fire kill) are one thematic watch line, not five items — held at watchlist with force-development ownership deliberately unassigned because no Army littoral requirement has been identified.",
      "action": "SIO to monitor SWAP-USV and MUSV outcomes; escalate only against the defined Army triggers.",
      "src": [
        {
          "out": "Military Times",
          "date": "29 Jul 2026",
          "ttl": "Pentagon puts out call for robot boats that launch attack drones",
          "url": "https://www.militarytimes.com/industry/techwatch/2026/07/29/pentagon-puts-out-call-for-robot-boats-that-launch-attack-drones/",
          "f": "verified"
        },
        {
          "out": "Breaking Defense",
          "date": "31 May 2026",
          "ttl": "AUKUS partners sign agreement on underwater drones, speed up sub plan",
          "url": "https://breakingdefense.com/2026/05/aukus-partners-sign-agreement-on-underwater-drones-speed-up-sub-plan/",
          "f": "verified"
        },
        {
          "out": "Defense One",
          "date": "9 Jul 2026",
          "ttl": "Navy teases next step in key drone boat program",
          "url": "https://www.defenseone.com/defense-systems/2026/07/navy-teases-next-step-key-drone-boat-program/414683/",
          "f": "verified"
        },
        {
          "out": "The Defense Post",
          "date": "10 Jul 2026",
          "ttl": "UK-US team pulls off 'world's first' airdrop of USV from A400M aircraft",
          "url": "https://thedefensepost.com/2026/07/10/uk-us-airdrop-usv-aircraft/",
          "f": "verified"
        },
        {
          "out": "Naval News",
          "date": "10 Jul 2026",
          "ttl": "World's first USV airdrop accomplished by Kraken and Capewell",
          "url": "https://www.navalnews.com/naval-news/2026/07/worlds-first-usv-airdrop-accomplished-by-kraken-and-capewell/",
          "f": "verified"
        },
        {
          "out": "USNI News",
          "date": "13 Jul 2026",
          "ttl": "VIDEO: 3 Lethal U.S. Drones Attack Iranian Sub, Port Facility",
          "url": "https://news.usni.org/2026/07/13/video-3-lethal-u-s-drones-attack-iranian-sub-port-facility",
          "f": "verified",
          "note": "Corroborated by Naval News, TWZ, Stars and Stripes, Military Times and The Aviationist."
        },
        {
          "out": "USNI News",
          "date": "16 Jul 2026",
          "ttl": "Saronic Announces Texas Site for New $3.2B Shipyard",
          "url": "https://news.usni.org/2026/07/16/saronic-announces-texas-site-for-new-3-2b-shipyard",
          "f": "verified"
        },
        {
          "out": "The War Zone",
          "date": "27 Jul 2026",
          "ttl": "Navy's GARC Kamikaze Drone Boat Blew A Hole In Ex-USS Peleliu During Sinking Exercise",
          "url": "https://www.twz.com/sea/navys-garc-kamikaze-drone-boat-blew-a-hole-in-ex-uss-peleliu-during-sinking-exercise",
          "f": "verified"
        },
        {
          "out": "Naval News",
          "date": "25 Jul 2026",
          "ttl": "U.S. Navy Deploys Ukraine-Style Kamikaze Sea Drones During Pacific SINKEX",
          "url": "https://www.navalnews.com/naval-news/2026/07/u-s-navy-deploys-ukraine-style-kamikaze-sea-drones-during-pacific-sinkex/",
          "f": "verified"
        },
        {
          "out": "Military Times",
          "date": "29 Jul 2026",
          "ttl": "US Navy deploys GARC uncrewed surface vessel in first live-fire training exercise",
          "url": "https://www.militarytimes.com/news/your-military/2026/07/29/us-navy-deploys-garc-uncrewed-surface-vessel-in-first-live-fire-training-exercise/",
          "f": "verified"
        },
        {
          "out": "Kyiv Independent",
          "date": "8 Aug 2026",
          "ttl": "Ukraine's naval drone campaign passes 218 struck Russian 'shadow fleet' vessels",
          "url": "https://kyivindependent.com/12-russian-shadow-fleet-vessels-struck-in-black-sea-and-azov-sea-over-past-week-ukraine-says/",
          "f": "unverified",
          "note": "Ukraine's own claim, independently unconfirmed."
        },
        {
          "out": "Naval Today",
          "date": "6 Aug 2026",
          "ttl": "Royal Navy tests drone armada concept",
          "url": "https://www.navaltoday.com/2026/08/06/royal-navy-tests-drone-armada-concept",
          "f": "verified"
        },
        {
          "out": "Meta-Defense",
          "date": "6 Aug 2026",
          "ttl": "Dutch Naval Design enters design phase for uncrewed anti-submarine surface vessel",
          "url": "https://meta-defense.fr/2026/08/06/lutte-anti-sous-marine-drone-neerlandai/",
          "f": "paywall",
          "note": "Detail beyond the lede is subscriber-only."
        },
        {
          "out": "Marine Insight",
          "date": "6 Aug 2026",
          "ttl": "Uncrewed surface vessel sinks ship off Yemen's Al Mukha near Bab al-Mandeb",
          "url": "https://www.marineinsight.com/ship-sinks-off-southwest-yemen-after-being-targeted-by-an-uncrewed-surface-vessel/",
          "f": "unverified",
          "note": "UKMTO did not confirm Houthi responsibility; attribution via Yemeni government statement only."
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "Unassigned — to be determined if an Army requirement emerges",
      "functionalLead": "—",
      "question": "Q6",
      "decisionLog": []
    },
    {
      "id": "W-2",
      "category": "capability",
      "tier": "watchlist",
      "pf": "P7",
      "tech": [
        "robo",
        "ai"
      ],
      "dom": "solution",
      "supporting": [
        "ASB1",
        "AOTO"
      ],
      "desk": "US",
      "desk2": "EU",
      "maturity": "mixed (reported – fielded; see signal)",
      "confidence": "high",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "II-3",
        "III-3",
        "III-5",
        "III-15",
        "I-9"
      ],
      "dlabel": "Uncrewed last-mile sustainment under contested conditions",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "Firestorm Labs demonstrated at-sea, shore-independent drone manufacturing aboard USS Essex — a containerized 3D-printing 'xCell' microfactory produced over 1,000 parts and 12 Squall FPV drones during transit to RIMPAC 2026 (Navy Times, 5 Aug). DARPA's Lift Challenge (2-9 Aug, Dayton OH) remains mid-competition; results expected after this edition's close.",
      "changeFromPrevious": "New since 4 Aug: the Firestorm Labs at-sea manufacturing demonstration is a concrete instance of shore-independent, contested-logistics production — directly on point for the last-mile sustainment question this line tracks. Lift Challenge results still pending (due after 9 Aug), affecting only the heavy-lift element.",
      "armyRelevance": "Direct — EW-resilient UGV control, autonomous ground resupply and heavy-lift aerial resupply map onto Army's contested-logistics and forward-sustainment problem. G5 force development should frame the Army requirement, with functional organisations contributing according to their responsibilities; no Army-specific trial is yet underway.",
      "escalationTrigger": "Escalate if G5 frames an Army last-mile-sustainment requirement or a sustainment-autonomy trial is sponsored. DARPA Lift Challenge results (due after 9 Aug) affect only the heavy-lift / aerial-resupply element — they are not a trigger for the wider ground-autonomy portfolio.",
      "decision": "Hold at watchlist — narrowed to uncrewed last-mile sustainment under contested conditions; fixed-process automation split to W-7.",
      "signal": "[Fielded — adversary/partner] Ground robots face intense EW pressure — Russian wide-area GNSS jammers degrade UGV datalinks and navigation — and Ukraine has fielded a control system (Droid Box, cleared 26 Jun) that detects positioning anomalies and applies countermeasures under jamming/spoofing (Militarnyi/Modern War Institute). [Fielded] Ukraine's Protector UGV is fielded for frontline logistics, against a stated goal of 25,000 ground robotic systems by mid-2026 (Defense Express/United24 Media). [Reported→fielding] Overland AI won a Marine Corps production contract for autonomous ground vehicles (Breaking Defense, 29 Jun) — ground-resupply autonomy crossing into production. [Reported] DARPA's Lift Challenge (100+ teams, 2-9 Aug, $6.5M prizes) targets a 2:1 payload-to-weight ratio for 55lb-class drones lifting 110lb payloads (Military Times, 30 Jul) — the aerial-resupply element of this line. [Reported] DARPA's Rads to Watts programme (7 competing teams) is developing radiovoltaic cells for maintenance-free, multi-year power in soldier-worn, sensor and remote applications (Breaking Defense, 29 Jul) — an enabling-power signal for sustainment autonomy. [Demonstrated] Firestorm Labs used a containerized 3D-printing 'xCell' microfactory to manufacture over 1,000 parts and 12 Squall FPV drones aboard USS Essex en route to RIMPAC 2026, without shore resupply (Navy Times, 5 Aug) — evidence that distributed, resupply-independent production is now demonstrated afloat, not just discussed conceptually.",
      "sowhat": "Narrowed per CSIO direction from a broad ground-autonomy cluster to one force-development question: uncrewed / autonomous last-mile sustainment under contested conditions. Fixed logistics and inventory-process automation is tracked separately (W-7), and counter-UAS-related ground platforms sit under D-1's architecture question.",
      "action": "SIO to maintain the evidence base and report Lift Challenge results against the heavy-lift element only; on escalation, G5 frames the requirement with CESS and other functional stakeholders contributing according to their responsibilities.",
      "src": [
        {
          "out": "Militarnyi",
          "date": "26 Jun 2026",
          "ttl": "Ukrainian Defense Ministry clears Droid Box UGV control system for military use",
          "url": "https://militarnyi.com/en/news/ukrainian-defense-ministry-clears-droid-box-ugv-control-system-for-military-use/",
          "f": "verified"
        },
        {
          "out": "Modern War Institute",
          "date": "23 Jun 2026",
          "ttl": "Networked for war: lessons from Ukraine's ground robots",
          "url": "https://mwi.westpoint.edu/networked-for-war-lessons-from-ukraines-ground-robots/",
          "f": "verified"
        },
        {
          "out": "Breaking Defense",
          "date": "29 Jun 2026",
          "ttl": "Overland AI nets Marine Corps autonomous ground vehicle contract",
          "url": "https://breakingdefense.com/2026/06/overland-ai-nets-marine-corps-autonomous-ground-vehicle-contract/",
          "f": "verified"
        },
        {
          "out": "Defense Express",
          "date": "26 Jun 2026",
          "ttl": "Ukraine's largest Protector UGV to receive anti-aircraft drones alongside a laser",
          "url": "https://en.defence-ua.com/news/ukraines_largest_protector_ugv_to_receive_anti_aircraft_drones_alongside_mysterious_laser-18425.html",
          "f": "verified"
        },
        {
          "out": "United24 Media",
          "date": "24 Jun 2026",
          "ttl": "Ukraine plans 25,000 ground robotic systems by mid-2026",
          "url": "https://united24media.com/war-in-ukraine/how-ukraine-builds-its-ground-robots-for-the-kill-zone-18666",
          "f": "verified"
        },
        {
          "out": "Military Times",
          "date": "30 Jul 2026",
          "ttl": "DARPA challenge pushes limits of heavy-lift drone technology",
          "url": "https://www.militarytimes.com/news/your-military/2026/07/30/darpa-challenge-pushes-limits-of-heavy-lift-drone-technology/",
          "f": "verified"
        },
        {
          "out": "Breaking Defense",
          "date": "29 Jul 2026",
          "ttl": "How DARPA plans to get nuclear power in the size of a 'AA battery'",
          "url": "https://breakingdefense.com/2026/07/how-darpa-plans-to-get-nuclear-power-in-the-size-of-aa-battery/",
          "f": "verified"
        },
        {
          "out": "Navy Times",
          "date": "5 Aug 2026",
          "ttl": "Firestorm Labs builds drones aboard USS Essex without shore resupply",
          "url": "https://www.navytimes.com/industry/techwatch/2026/08/05/firestorm-labs-builds-drones-aboard-uss-essex-without-shore-resupply/",
          "f": "verified"
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "G5",
      "functionalLead": "CESS",
      "question": "Q4",
      "decisionLog": []
    },
    {
      "id": "W-7",
      "category": "capability",
      "tier": "watchlist",
      "pf": "P7",
      "tech": [
        "ai",
        "data"
      ],
      "dom": "solution",
      "insightSponsor": "SIO",
      "fdLead": "Unassigned — to be determined by G5 if a force-development question emerges",
      "functionalLead": "CESS",
      "supporting": [],
      "desk": "US",
      "maturity": "reported",
      "confidence": "moderate",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "III-13"
      ],
      "dlabel": "Sustainment process burden — problem-first automation",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "External candidate technology observed: MARSOC/SOFWERX RF-free computer-vision 'automated armory' for serialized-weapon inventory tracking (DefenseScoop, 28 Jul). Held as candidate evidence, not as the organising object of this line.",
      "changeFromPrevious": "Unchanged since last edition; still awaiting a process-owner-identified candidate process with a measurable baseline.",
      "armyRelevance": "Problem-first: the Army question is which inventory/logistics processes carry the largest manpower burden, error rate or reconciliation effort — established from Army process data, not inferred. Only once that inventory identifies a high-burden process is computer vision (or another technology) assessed as a candidate solution. No Army process baseline is held by this pipeline.",
      "escalationTrigger": "Escalate when an Army logistics/inventory process owner identifies a candidate high-burden process with a measurable baseline (manpower hours, error rate, reconciliation effort), or when a comparable system publishes operational-evaluation performance data worth benchmarking against such a process.",
      "decision": "Hold — problem-first: identify the highest-burden Army processes before assessing any technology.",
      "signal": "[Reported] MARSOC and SOFWERX are developing an RF-free 'automated armory' that uses computer vision to track serialized weapons and inventory without tags or manual counts (DefenseScoop, 28 Jul) — commercial computer-vision inventory technology applied to a fixed military logistics process.",
      "sowhat": "Discovering technologies and then searching for Army use cases is the failure mode this line now guards against. The evidence base (MARSOC armory et al.) is retained as candidate-technology reference for whenever the Army process inventory identifies a target.",
      "action": "SIO to hold candidate-technology evidence; escalation requires an Army process owner's burden data, via G5 where a force-development question emerges.",
      "src": [
        {
          "out": "DefenseScoop",
          "date": "28 Jul 2026",
          "ttl": "Marine commandos aim to automate armories with computer vision, other tech",
          "url": "https://defensescoop.com/2026/07/28/marine-forces-special-operations-command-automated-armory-marsoc/",
          "f": "verified"
        }
      ],
      "question": "Q4",
      "decisionLog": []
    },
    {
      "id": "W-3",
      "category": "capability",
      "tier": "foundational",
      "pf": "P6",
      "tech": [
        "data",
        "ai"
      ],
      "dom": "solution",
      "supporting": [],
      "desk": "US",
      "maturity": "mixed (operationally evaluating – fielding-track)",
      "confidence": "moderate",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "III-2"
      ],
      "dlabel": "Army data layer — foundational dependency",
      "suspense": "ADIO baseline due 15 Sep 2026",
      "latestDevelopment": "Two comparator-system updates since 4 Aug: Army leaders declared NGC2 'ready to scale' following Project Convergence-Capstone 6, though 4th Infantry Division's commander called it 'functional but not optimised', with I Corps next to receive it (Washington Times, 6 Aug); separately, Accenture Federal Services won an $821M contract to integrate the Pentagon's War Data Platform (formerly Advana) to consolidate military data sources for AI-driven operations, with former officials questioning whether a traditional-consulting approach avoids past shortfalls (DefenseScoop, 7 Aug).",
      "changeFromPrevious": "New since 4 Aug (previously unchanged): both are comparator maturity/caution signals, not Army-side movement — the ADIO baseline (due 15 Sep 2026) remains the escalation trigger.",
      "armyRelevance": "Foundational — every persistent question in the register depends on whether Army can discover, integrate, govern and expose trusted data to the people and applications that need it, at the required classification, echelon and tempo. This is not an ordinary technology watch item, and it is not 'should Army copy NGC2' — NGC2/Maven are comparators; the starting point is the Singapore Army's operational requirements and existing architecture. This pipeline holds no verified information on the internal systems concerned and will not fabricate the comparison.",
      "escalationTrigger": "Escalate once the ADIO baseline (due 15 Sep 2026) is received and the SIO/G5 comparison identifies what data exists, where it resides, who owns it, whether it is reusable, how it is exposed, whether it moves across required environments, where duplication exists, what blocks decision workflows, and which NGC2/Maven patterns are relevant vs inappropriate for the Singapore Army.",
      "note": "CSIO critique (6 Aug 2026) directed this entry be reframed against existing Army data architecture rather than approved as a generic NGC2 study. That reframe requires internal Army-architecture facts not available to this open-source pipeline. Per COS-GS vetting (8 Aug 2026), the precondition is converted into a defined internal tasking: ADIO to provide the current Army Data Store, ENCLAVE, STRONGWATCH and OUTREACH/SYNTEX architecture baseline by 15 Sep 2026 for comparison against relevant NGC2/common-data-layer lessons.",
      "decision": "Foundational dependency (Q5) — ADIO architecture baseline tasked (due 15 Sep 2026); comparison focuses on the Army decision workflows the data architecture must enable, not technology imitation.",
      "signal": "[Operationally evaluating] The US Army's Next Generation Command and Control (NGC2) programme moved from prototyping toward delivery: a named common-data-layer baseline (Anduril lead; Palantir edge-to-cloud data mesh) underwent division-scale force-on-force validation at Project Convergence Capstone 6 (July; Army.mil/DefenseScoop, 20-22 Jun). [Reported — single source, not independently corroborated] Project Maven is reported to be transmitting near-fully machine-generated intelligence to commanders using large language models (CSIS, 15 Jun).",
      "sowhat": "The open-source evidence describes a US programme's maturity, not an Army-specific integration decision. As a foundational enabler, the line is assessed by whether Army's data architecture enables persistent decision workflows — including the workflows this register itself requires.",
      "action": "Tasking: ADIO to provide the current Army Data Store, ENCLAVE, STRONGWATCH and OUTREACH/SYNTEX architecture baseline by 15 Sep 2026, for comparison against relevant NGC2/common-data-layer lessons. Once the baseline is available, SIO/G5 determine whether a genuine force-development gap or opportunity exists.",
      "src": [
        {
          "out": "The Army (army.mil)",
          "date": "20 Jun 2026",
          "ttl": "Army and industry align on common data baseline as NGC2 moves to delivery",
          "url": "https://www.army.mil/article/293409/army_and_industry_align_on_common_data_baseline_as_next_generation_command_and_control_moves_from_prototyping_to_delivery",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "22 Jun 2026",
          "ttl": "Army taps Anduril as lead for NGC2 common data layer baseline",
          "url": "https://defensescoop.com/2026/06/22/army-taps-anduril-lead-ngc2-common-data-layer-baseline/",
          "f": "verified"
        },
        {
          "out": "CSIS",
          "date": "15 Jun 2026",
          "ttl": "What is the Maven Smart System, and what does it do?",
          "url": "https://www.csis.org/analysis/what-maven-smart-system-and-what-does-it-do",
          "f": "verified"
        },
        {
          "out": "Washington Times",
          "date": "6 Aug 2026",
          "ttl": "Army's AI-fusion system is 'ready but not done'",
          "url": "https://www.washingtontimes.com/news/2026/aug/6/armys-ai-fusion-system-next-generation-command-control-ready-not-done/",
          "f": "verified",
          "note": "Corroborated by Army Times, Army.mil, Soldier Systems Daily and The Defense Post (3-4 Aug)."
        },
        {
          "out": "DefenseScoop",
          "date": "7 Aug 2026",
          "ttl": "War Data Platform integration plans under scrutiny as DOD hustles to weaponize AI",
          "url": "https://defensescoop.com/2026/08/07/pentagon-war-data-platform-integration-plans-under-scrutiny/",
          "f": "verified"
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "G5 — determination pending ADIO baseline",
      "functionalLead": "ADIO",
      "question": "Q5",
      "decisionLog": []
    },
    {
      "id": "W-4",
      "category": "capability",
      "tier": "watchlist",
      "pf": "P2",
      "tech": [
        "ai",
        "data",
        "robo",
        "dews"
      ],
      "dom": "solution",
      "supporting": [
        "ASB3"
      ],
      "desk": "APAC",
      "maturity": "mixed (reported – fielded; state-linked claims, corroborate)",
      "confidence": "moderate",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "I-3",
        "I-6",
        "I-10"
      ],
      "dlabel": "PRC AI-C2, autonomy & missile net-assessment",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "Four further PRC disclosures since the 3 Aug strike-planning-system reveal: CCTV footage (analysed by AEI, 7 Aug) showed the 72nd Group Army pairing armed quadrupedal UGVs, FPV drones and CH-4 UCAVs with largely unchanged massed-armour tactics in an amphibious drill; China Military Online (6 Aug) showed UAV-cued PHL-03 rocket strikes against a stationary maritime target with rapid-displacement re-engagement; Global Times (4 Aug) debuted the GJ-3A armed reconnaissance UAV as part of a claimed 'cross-service' ISR system feeding Army, Navy and Rocket Force; and SCMP (6 Aug) ran a feature framing PLA modernisation around AI/quantum/hypersonic/directed-energy 'disruptive' technology bets tied to Unrestricted Warfare thinking.",
      "changeFromPrevious": "Material since 4 Aug: four new state-linked disclosures extend the AI-C2 line into ground/amphibious robotics, sensor-to-shooter artillery cueing, cross-service ISR drones and explicit strategic framing. All four are state-sourced or state-linked with no independent corroboration found; confidence remains capped at low/moderate and the line stays net-assessment, not force-development escalation.",
      "armyRelevance": "Net-assessment relevance is actionable now: this line should inform Army design margins, red-teaming and resilience assumptions without waiting for confirmed operational employment — conceptual and threat-assessment work begins on current evidence. Force-development escalation is a separate, higher bar; this is not a direct Army procurement question.",
      "escalationTrigger": "Escalate to force-development consideration only on stronger evidence — independent (non-PRC-state) confirmation of operational fielding, or a clear implication for a specific Army capability. Apparent maturity of the external technology is not by itself grounds to convert this line into a procurement task.",
      "decision": "Maintain as the standing PRC net-assessment line — feeding Army design margins, red-teaming and resilience work now; force-development escalation only on stronger evidence.",
      "signal": "[Reported, state-linked — corroborate] Commercial AI providers (reported: DeepSeek, Alibaba, Tencent, Zhipu, Huawei-linked infrastructure) are being folded into a national military ecosystem for surveillance, target recognition, war-gaming and C2. PLA Daily (30 Jun) frames a future 'technological strategy' around AI-enabled C2 resistant to EW; Hong Kong reporting describes an 'AI Plus' push into PLA EW while warning PLA training may lag the hardware. A Reuters review (31 Jul) of 80+ Chinese academic papers/patents found PLA-linked units (Unit 96941, NUDT, Academy of Military Sciences) using 'model distillation' to train domestic defence AI on US-model outputs (OpenAI GPT-3.5/GPT-3, Anthropic Claude 3 Haiku) — a route sidestepping US chip export controls. Xi Jinping (Politburo study session, 30 Jul) directed the military to 'strengthen the military application of unmanned intelligent technologies' — elevating this to explicit top-down doctrine. [Reported, state-linked — 3 Aug] A CCTV PLA-99th-anniversary documentary revealed an 'intelligent strike planning system' (team under Senior Colonel Deng Jianping) that prioritises targets, sequences attack waves and assigns unit tasking across hundreds of targets/dozens of formations (SCMP, paywalled). [Reported, state-linked — corroborate] CETC's 'Atlas' system demonstrated ~96-drone single-operator swarm control, and a separate PLA demonstration put ~200 jam-resistant drones under one soldier using an anti-jamming algorithm for comms-independent cooperation — Western analysis assesses these as selective but real PLA bets on battlefield AI. The China-Russia 'Joint Sea-2026' exercise (Qingdao, 6-13 Jul) featured extensive unmanned-surface-vessel and counter-UAS tactics per Russian officials, independently corroborated by Defence Security Asia. [Reported, state-linked — corroborate] China's first confirmed YJ-20 hypersonic anti-ship missile (Mach 6+ cruise, ~1,000-1,500km range) launch came from a Type 052D destroyer rather than the Type 055 flagship (CCTV/Global Times trailer, 29 Jul; independently corroborated by The War Zone and Army Recognition) — with roughly 35 Type 052D hulls in service versus 10 Type 055s, this distributes a flagship-exclusive weapon across the fleet's numerical core. Further state-linked disclosures since 4 Aug (net-assessment value only; treat as intent signalling pending independent corroboration): [Reported — state-linked] CCTV footage analysed by AEI (7 Aug) showed the PLA 72nd Group Army pairing armed quadrupedal UGVs, FPV drones and CH-4 UCAVs with largely unchanged massed-armour tactics in an amphibious assault drill. [Reported — unverified, state media] China Military Online (6 Aug) showed forward UAVs cueing PHL-03 rocket-artillery strikes on a stationary maritime target with rapid-displacement re-engagement — a sensor-to-shooter drill against a stationary, not manoeuvring, target. [Reported — unverified, state media] Global Times (4 Aug) debuted the GJ-3A armed reconnaissance UAV as part of a claimed cross-service ISR system fielding to Army, Navy and Rocket Force. [Reported — Beijing-linked] SCMP (6 Aug) frames PLA modernisation around AI/quantum/hypersonic/directed-energy 'disruptive' technology bets tied explicitly to Unrestricted Warfare thinking.",
      "sowhat": "One net-assessment line covering how the PLA is fusing commercial-grade AI into C2/strike-planning, fielding autonomous swarm doctrine, and distributing long-range strike capability across its numerically dominant hull classes — three facets of the same adversary capability trajectory that Army's C2, EW and fleet-defence-adjacent concepts should track together, not as three separate awareness lines. Confidence is capped at moderate because a majority of the specific capability claims trace to PRC state media or state-linked footage; independent corroboration exists for the broad trend (Reuters model-distillation review, Western analyst commentary, The War Zone/Army Recognition) but not for every individual performance claim.",
      "action": "A4, with ASB3 and SIO net-assessment in support, to maintain the standing line, feed current assessments into Army red-teaming, design-margin and resilience work now, and flag independently confirmed fielding events for force-development escalation.",
      "src": [
        {
          "out": "Atlantic Council",
          "date": "16 Jun 2026",
          "ttl": "How NATO can integrate AI to prevail in future algorithmic warfare",
          "url": "https://www.atlanticcouncil.org/in-depth-research-reports/report/how-nato-can-integrate-ai-to-prevail-in-future-algorithmic-warfare/",
          "f": "verified",
          "note": "Analysis piece — adversary AI-C2 fusion framing; corroborate specific claims."
        },
        {
          "out": "South China Morning Post",
          "date": "18 May 2026",
          "ttl": "Can PLA training catch up with China's rapid weapon development?",
          "url": "https://www.scmp.com/news/china/military/article/3353974/can-pla-training-catch-chinas-rapid-weapon-development",
          "f": "verified",
          "note": "Hong Kong outlet citing PLA commentary on unmanned/intelligent-systems fielding."
        },
        {
          "out": "AEI (China-Taiwan Update)",
          "date": "10 Jul 2026",
          "ttl": "PLA Daily frames intelligentised warfare around manipulating and reconstructing intelligent networks",
          "url": "https://www.aei.org/articles/china-taiwan-update-july-10-2026/",
          "f": "verified",
          "note": "Summarises a 30 Jun PLA Daily doctrine article; PRC state-authored source — treat as intent signalling."
        },
        {
          "out": "Defense News",
          "date": "31 Jul 2026",
          "ttl": "Chinese military researchers tap US AI models to train defense systems",
          "url": "https://www.defensenews.com/industry/techwatch/2026/07/31/chinese-military-researchers-tap-us-ai-models-to-train-defense-systems/",
          "f": "verified",
          "note": "Reuters exclusive; independently carried by multiple outlets."
        },
        {
          "out": "CGTN",
          "date": "31 Jul 2026",
          "ttl": "Xi stresses political guidance, innovation in military modernization",
          "url": "https://news.cgtn.com/news/2026-07-31/Xi-stresses-political-guidance-innovation-in-military-modernization-1PdTkTGx6wM/p.html",
          "f": "verified",
          "note": "Chinese state media readout of a 30 Jul Politburo study session; treat as PRC intent signalling — corroborated independently by Bloomberg and SCMP."
        },
        {
          "out": "South China Morning Post",
          "date": "3 Aug 2026",
          "ttl": "Chinese military unveils AI system to plan and coordinate mass air strikes",
          "url": "https://www.scmp.com/news/china/military/article/3362824/chinese-military-unveils-ai-system-plan-and-coordinate-mass-air-strikes",
          "f": "paywall",
          "note": "Hong Kong outlet citing a CCTV PLA-99th-anniversary documentary; state-linked footage — treat as intent signalling."
        },
        {
          "out": "Global Times",
          "date": "25 Mar 2026",
          "ttl": "China unveils full-process demonstration of Atlas drone swarm operations system",
          "url": "https://www.globaltimes.cn/page/202603/1357519.shtml",
          "f": "verified",
          "note": "Chinese state media — treat as intent signalling; corroborated by Western trade press."
        },
        {
          "out": "South China Morning Post",
          "date": "22 Jan 2026",
          "ttl": "1 soldier, 200 drones: China showcases rapid launch and agility in swarm warfare tactics",
          "url": "https://www.scmp.com/news/china/military/article/3340972/1-soldier-200-drones-china-showcases-rapid-launch-and-agility-swarm-warfare-tactics",
          "f": "verified",
          "note": "Hong Kong outlet reporting a PLA/CCTV demonstration; state/vendor claims — corroborate."
        },
        {
          "out": "Defense News",
          "date": "7 Apr 2026",
          "ttl": "Outpaced by the US, China's military places selective bets on artificial intelligence",
          "url": "https://www.defensenews.com/global/asia-pacific/2026/04/07/outpaced-by-the-us-chinas-military-places-selective-bets-on-artificial-intelligence/",
          "f": "verified"
        },
        {
          "out": "Xinhua",
          "date": "13 Jul 2026",
          "ttl": "China, Russia wrap up joint naval exercise",
          "url": "https://english.news.cn/20260713/9379d756304e40088458553afd2c8264/c.html",
          "f": "verified",
          "note": "Chinese state media — treat force-posture framing as intent signalling; corroborated by TASS and Defence Security Asia, both confirming the unmanned-systems/counter-drone emphasis."
        },
        {
          "out": "The War Zone",
          "date": "29 Jul 2026",
          "ttl": "China Fires YJ-20 Hypersonic Anti-Ship Missile From Smaller Destroyer",
          "url": "https://www.twz.com/sea/china-fires-yj-20-hypersonic-anti-ship-missile-from-smaller-destroyer",
          "f": "verified"
        },
        {
          "out": "Army Recognition",
          "date": "30 Jul 2026",
          "ttl": "China Integrates YJ-20 Hypersonic Missile Across Its Most Numerous Modern Type 052D Destroyer Fleet",
          "url": "https://www.armyrecognition.com/news/navy-news/2026/china-integrates-yj-20-hypersonic-missile-across-its-most-numerous-modern-type-052d-destroyer-fleet",
          "f": "verified"
        },
        {
          "out": "USNI News",
          "date": "31 Jul 2026",
          "ttl": "Chinese Navy Showcases Hypersonic Anti-ship Capability Aboard Destroyers",
          "url": "https://news.usni.org/2026/07/31/chinese-navy-showcases-hypersonic-anti-ship-capability-aboard-destroyers",
          "f": "unverified",
          "note": "403 on direct fetch during this cycle; content corroborated via The War Zone and Army Recognition."
        },
        {
          "out": "GlobalSecurity.org (mirroring Global Times)",
          "date": "29 Jul 2026",
          "ttl": "Official video debuts YJ-20 hypersonic missile launched from Type 052D destroyer, boosting anti-ship capabilities: experts",
          "url": "https://www.globalsecurity.org/wmd/library/news/china/2026/07/china-260729-globaltimes05.htm",
          "f": "verified",
          "note": "Chinese state media (Global Times) — treat as intent/capability signalling, corroborated independently above."
        },
        {
          "out": "AEI",
          "date": "7 Aug 2026",
          "ttl": "China-Taiwan Update: PLA tests robot dogs, FPV drones and CH-4 UCAVs in amphibious assault drill",
          "url": "https://www.aei.org/commentary/china-taiwan-update-august-7-2026/",
          "f": "verified",
          "note": "Underlying footage is PLA-controlled CCTV; AEI analysis is independent."
        },
        {
          "out": "China Military Online",
          "date": "6 Aug 2026",
          "ttl": "China tests UAV-cued PHL-03 rocket strikes with rapid-displacement tactics",
          "url": "https://www.armyrecognition.com/news/navy-news/2026/china-tests-uav-cued-phl-03-maritime-strikes-and-rapid-displacement-tactics-for-coastal-denial-operations",
          "f": "unverified",
          "note": "State-controlled outlet; sole source."
        },
        {
          "out": "Global Times",
          "date": "4 Aug 2026",
          "ttl": "PLA Air Force unveils three-drone system with GJ-3A debut",
          "url": "https://www.globaltimes.cn/page/202608/1367510.shtml",
          "f": "unverified",
          "note": "State-controlled outlet; no independent corroboration."
        },
        {
          "out": "South China Morning Post",
          "date": "6 Aug 2026",
          "ttl": "Why China's military is 'laser-focused' on disruptive technologies",
          "url": "https://www.scmp.com/news/china/military/article/3362909/why-chinas-military-laser-focused-disruptive-technologies",
          "f": "paywall",
          "note": "Beijing-linked outlet; sole source for this framing."
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "N/A at net-assessment stage — G5 determination on any escalation",
      "functionalLead": "A4",
      "question": "Q3",
      "decisionLog": []
    },
    {
      "id": "W-5",
      "category": "capability",
      "tier": "watchlist",
      "pf": "X",
      "tech": [
        "ai",
        "robo",
        "data"
      ],
      "dom": "solution",
      "supporting": [
        "ADIO",
        "ASB3"
      ],
      "desk": "US",
      "desk2": "APAC",
      "maturity": "mixed (reported – fielded; see signal)",
      "confidence": "high",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "I-2",
        "I-4",
        "I-5",
        "I-7",
        "I-8",
        "I-11",
        "III-11"
      ],
      "dlabel": "Allied acquisition, doctrine & vendor-ecosystem shifts",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "The US Navy established a new direct-reporting portfolio-manager role for robotic and autonomous systems (RAS) and is weighing relocating RAS staff from Washington closer to fleet operations (DefenseScoop, 6 Aug) — an organisational-model data point alongside the DRPM-UxS consolidation already tracked here.",
      "changeFromPrevious": "New since 4 Aug (the Japan white paper): a Navy RAS organisational-restructuring signal, in the same acquisition/organisation-model vein as DRPM-UxS. No concrete Army interoperability or co-development opportunity identified.",
      "armyRelevance": "Retained only for developments that could plausibly create a force-design lesson, an acquisition-model change, an interoperability opportunity, a co-development/co-production opportunity, a classification/information-sharing precedent, or a concrete Army partnership opportunity. General defence-industry and organisational developments remain in the source feed without joining this line. Informs Army's own concept-design and acquisition-pattern choices (see I-1) but does not itself require an Army decision.",
      "escalationTrigger": "Escalate to a decision if any single thread (e.g. DRPM-UxS consolidation, the Talon Synapse classification-sharing model) produces a concrete interoperability or co-production opportunity Army could join.",
      "decision": "Maintain as a standing comparator line for the I-1 concept-design pilot.",
      "signal": "[Reported — acquisition-model change] The Pentagon is reportedly shifting AI acquisition from monolithic platforms toward modular, multi-vendor, auditable architectures (Federal News Network, 18 Jun), and suspended CMMC Phase 2 cybersecurity certification requirements pending a 60-day Reform Task Force (13 Jul) — both changing the acquisition model non-traditional vendors face. [Fielded — force-design lesson] A Defense Secretary memo (1 Jul) created the Direct Reporting Portfolio Manager for Unmanned Systems (DRPM-UxS), consolidating nearly all US unmanned programmes under one integrator (~$75B FY27 request); the Army realigned its Mission Autonomy office and DIU restructured around drones/autonomous-warfare, commercial-space 'kill webs' and '10x technologies' teams (USNI/DefenseScoop/Breaking Defense, 1-15 Jul). [Reported — force-design lesson] Israel's IDF Chief of Staff announced (8 Jul) a new General Staff structure for robotics/drones/AI, mirroring the US consolidation. [Fielded — classification/information-sharing precedent] CENTCOM and the UAE stood up Task Force Talon Synapse (28 Jul), the first bilateral AI task force (~20 personnel, Abu Dhabi), with classification-sharing rules flagged as the unresolved constraint. [Demonstrated — interoperability opportunity] Australia's MQ-28 Ghost Bat flew alongside crewed fighters in Valiant Shield 26 (27 Jul); PACAF and the RAAF are exploring 'operator-to-operator' command architectures letting US pilots command Ghost Bat drones directly. [Reported — force-design lesson] Japan's 2026 defence white paper (4 Aug) gives first dedicated treatment to a 'new way of warfare' naming drones and AI as central design elements, shortlisting four drone makers for rapid development.",
      "sowhat": "A single 'how are peer institutions organising for the AI/autonomy shift' line, useful as a concept-design and acquisition-pattern comparator (feeds I-1's pilot directly). Scope is deliberately narrow: each retained thread maps to one of the six opportunity types in the COS-GS filter; everything else stays in the source feed. This is indicative relevance, not a demonstrated Army requirement, and is held at watchlist accordingly.",
      "action": "SIO to maintain this as a standing comparator line for the I-1 concept-design pilot and flag any thread that matures into a concrete Army interoperability, co-development or partnership opportunity.",
      "src": [
        {
          "out": "Federal News Network",
          "date": "18 Jun 2026",
          "ttl": "The Pentagon is rewriting how it buys AI",
          "url": "https://federalnewsnetwork.com/commentary/2026/06/the-pentagon-is-rewriting-how-it-buys-ai-control-of-the-future-of-warfare/",
          "f": "verified"
        },
        {
          "out": "USNI News",
          "date": "1 Jul 2026",
          "ttl": "New Pentagon unmanned czar will oversee most drone programs, memo reads",
          "url": "https://news.usni.org/2026/07/01/new-pentagon-unmanned-czar-will-oversee-most-drone-programs-memo-reads",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "1 Jul 2026",
          "ttl": "Hegseth realigning DOD's scattered unmanned and autonomy work under new drone boss",
          "url": "https://defensescoop.com/2026/07/01/hegseth-realigning-unmanned-systems-programs-under-new-drone-boss/",
          "f": "verified"
        },
        {
          "out": "Breaking Defense",
          "date": "6 Jul 2026",
          "ttl": "Army makes new tweaks to acquisition portfolios, realigns autonomy office",
          "url": "https://breakingdefense.com/2026/07/army-makes-new-tweaks-to-acquisition-portfolios-realigns-autonomy-office/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "6 Jul 2026",
          "ttl": "DIU reshaping its tech priorities and portfolio teams under new leadership",
          "url": "https://defensescoop.com/2026/07/06/diu-reshaping-tech-priorities-under-new-leadership-owen-west/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "15 Jul 2026",
          "ttl": "In its next chapter, DIU aims to reduce the military's 'cost per kill'",
          "url": "https://defensescoop.com/2026/07/15/diu-owen-west-aims-to-reduce-the-militarys-cost-per-kill/",
          "f": "verified"
        },
        {
          "out": "JNS",
          "date": "8 Jul 2026",
          "ttl": "Zamir: IDF to finalize new AI, drone, robotics unit structure",
          "url": "https://www.jns.org/news/israel-news/zamir-idf-to-finalize-new-ai-drone-robotics-unit-structure",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "13 Jul 2026",
          "ttl": "DOD halts cybersecurity requirements for CMMC Phase 2",
          "url": "https://defensescoop.com/2026/07/13/dod-halts-cmmc-cybersecurity-requirements-phase-2/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "28 Jul 2026",
          "ttl": "U.S. military forms first bilateral AI task force with United Arab Emirates",
          "url": "https://defensescoop.com/2026/07/28/us-military-ai-task-force-united-arab-emirates/",
          "f": "verified"
        },
        {
          "out": "Breaking Defense",
          "date": "28 Jul 2026",
          "ttl": "CENTCOM announces US-UAE task force on AI",
          "url": "https://breakingdefense.com/2026/07/centcom-announces-us-uae-task-force-on-ai/",
          "f": "verified"
        },
        {
          "out": "Nippon.com (Jiji Press)",
          "date": "4 Aug 2026",
          "ttl": "Japan Sees Urgent Need to Prepare for New Ways of Warfare",
          "url": "https://www.nippon.com/en/news/yjj2026080400394/",
          "f": "verified"
        },
        {
          "out": "The Diplomat",
          "date": "4 Aug 2026",
          "ttl": "Japan's 2026 Defense White Paper Warns of China's Expanding Military Reach in the Pacific",
          "url": "https://thediplomat.com/2026/08/japans-2026-defense-white-paper-warns-of-chinas-expanding-military-reach-in-the-pacific/",
          "f": "verified",
          "note": "Corroborates the white paper's China-Pacific framing; drone/AI ‘new way of warfare’ section detail drawn primarily from the Jiji Press wire."
        },
        {
          "out": "DefenseScoop",
          "date": "27 Jul 2026",
          "ttl": "After Valiant Shield exercise, PACAF commander says he's 'impressed' with Australia's Ghost Bat drone program",
          "url": "https://defensescoop.com/2026/07/27/ghost-bat-drone-cca-valiant-shield-pacific-air-forces/",
          "f": "verified"
        },
        {
          "out": "The War Zone",
          "date": "27 Jul 2026",
          "ttl": "Australian MQ-28 Ghost Bat Fighter Drones Could Be Commanded By U.S. Pilots",
          "url": "https://www.twz.com/air/australian-mq-28-ghost-bat-fighter-drones-could-be-commanded-by-u-s-pilots",
          "f": "verified"
        },
        {
          "out": "Aviation Week",
          "date": "30 Jul 2026",
          "ttl": "Second-Generation U.S. Autonomous Fighters May Look Like the First",
          "url": "https://aviationweek.com/defense/budget-policy-operations/second-generation-us-autonomous-fighters-may-look-first",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "6 Aug 2026",
          "ttl": "Navy considers relocating robotic and autonomous systems staff amid broader portfolio restructuring",
          "url": "https://defensescoop.com/2026/08/06/navy-robotic-and-autonomous-systems-portfolio-staff/",
          "f": "verified"
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "Unassigned — comparator line",
      "functionalLead": "—",
      "question": "Q7",
      "decisionLog": []
    },
    {
      "id": "W-6",
      "category": "capability",
      "tier": "background",
      "pf": "P5",
      "tech": [
        "robo",
        "ai",
        "data"
      ],
      "dom": "solution",
      "supporting": [],
      "desk": "US",
      "maturity": "mixed (reported – demonstrated)",
      "confidence": "moderate",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 1,
      "supersedes": [
        "III-9",
        "III-16"
      ],
      "dlabel": "Space-domain sensing, autonomy & acquisition",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "True Anomaly's Jackal-004 executed the first space-to-space pursuit of an intentionally evading target under VICTUS HAZE tasking (Payload, 3 Aug) — an escalation from July's cooperative-target tracking demo.",
      "changeFromPrevious": "Unchanged since 4 Aug; no new space-domain developments found in this window.",
      "armyRelevance": "Indirect only — the autonomy and sensor-fusion techniques (30-minute autonomous re-planning against a manoeuvring, non-cooperative target) are analogous to the onboard decision-making problem in Army sense-strike concepts, but the platform domain (space) is outside Army's mission set. Held below the priority watchlist: interesting technological read-across alone is insufficient for senior-leadership attention absent a direct Army requirement or an identified terrestrial/aerial analogue.",
      "escalationTrigger": "Escalate to a decision only if a terrestrial/aerial analogue of the autonomous non-cooperative-pursuit technique becomes available for Army evaluation.",
      "decision": "Hold below the priority watchlist; monitor for a terrestrial/aerial autonomy analogue or a direct Army requirement.",
      "signal": "[Reported — one source unverified] Golden Dome's satellite architecture moved from contractor selection to hardware buys: after naming 12 companies for space-based interceptors (Apr, up to $3.2B), SDA awarded L3Harris (~$955M) and Sierra Space (~$798M) for 36 Tranche 3 tracking/warning satellites, and resumed the Tranche 1 Transport Layer launch campaign (21 more York Space satellites, 16 Jul) — a specific nine-month-pause narrative traces to one Defense One report not independently corroborated in this window. MDA separately selected Hanwha Philly Shipyard/TOTE Services to build 'Golden Defender' missile-range instrumentation vessels. [Demonstrated] True Anomaly's Jackal-004, on Space Systems Command tasking, produced a validated pursuit plan within 30 minutes, closed to ~10km of an actively-manoeuvring Rocket Lab Puma satellite, and used onboard multi-object detection to generate its own orbit estimates without ground cueing (Payload, 3 Aug) — the first space-to-space pursuit of an intentionally evading target, escalating from a cooperative-tracking demo in July.",
      "sowhat": "A space-domain sensing/autonomy watch line: the acquisition scale-up (Golden Dome) and the autonomy demonstration (VICTUS HAZE) are both relevant as technique/acquisition-model benchmarks, not as direct Army capability lines.",
      "action": "SIO to monitor for terrestrial/aerial read-across; promote to the priority watchlist only against the escalation trigger.",
      "src": [
        {
          "out": "DefenseScoop",
          "date": "24 Apr 2026",
          "ttl": "Space Force names 12 companies to develop Golden Dome space-based interceptors",
          "url": "https://defensescoop.com/2026/04/24/golden-dome-space-based-interceptor-missile-defense-contractors/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "14 Jul 2026",
          "ttl": "SDA awards $1.75B in deals for additional Golden Dome missile tracking sats",
          "url": "https://defensescoop.com/2026/07/14/sda-contract-awards-additional-golden-dome-missile-tracking-sats/",
          "f": "verified"
        },
        {
          "out": "Defense One",
          "date": "15 Jul 2026",
          "ttl": "Space Development Agency resumes key satellite launches after delays, watchdog criticisms",
          "url": "https://www.defenseone.com/policy/2026/07/space-development-agency-satellite-launches-criticisms/414781/",
          "f": "unverified",
          "note": "Source could not be independently corroborated in this window; treat Tranche 1 relaunch details as provisional pending confirmation."
        },
        {
          "out": "DefenseScoop",
          "date": "16 Jul 2026",
          "ttl": "SDA resumes satellite launch campaign following months-long pause, tech issues",
          "url": "https://defensescoop.com/2026/07/16/sda-resumes-satellite-launch-campaign-following-tech-issues/",
          "f": "verified"
        },
        {
          "out": "USNI News",
          "date": "17 Jul 2026",
          "ttl": "Philly Shipyard to Build 'Golden Defender' Ship as part of New Missile Defense Program",
          "url": "https://news.usni.org/2026/07/17/philly-shipyard-to-build-golden-defender-ship-as-part-of-new-missile-defense-program",
          "f": "verified"
        },
        {
          "out": "Payload",
          "date": "3 Aug 2026",
          "ttl": "True Anomaly Chases an Evading Target",
          "url": "https://payloadspace.com/true-anomaly-chases-an-evading-target-in-orbit/",
          "f": "verified"
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "Unassigned",
      "functionalLead": "—",
      "question": null,
      "decisionLog": []
    },
    {
      "id": "I-1",
      "category": "process",
      "tier": "staff_action",
      "pf": "X",
      "tech": [
        "ai",
        "robo"
      ],
      "dom": "solution",
      "supporting": [],
      "desk": "US",
      "status": "overdue",
      "raised": "Apr 2026",
      "age": 17,
      "dlabel": "Decision-workflow pilot sprint",
      "suspense": "5 Sep 2026",
      "recommendation": "Run a time-boxed pilot that takes 1-2 named Army questions from the question register through the full decision workflow: define the decision question → identify relevant external and internal data → establish the minimum data view → apply AI-assisted triage/fusion → put the output before the intended staff user → measure time and quality improvements → capture corrections → iterate. The preferred output is a functioning decision workflow with measured results; concept notes are the by-product, not the deliverable.",
      "whyNow": "The underlying signal — that standing plans are being overtaken by cheap autonomy and compressed kill chains — hasn't changed since April, but the original framing ('design it today' across the portfolios) was open-ended enough that CSIO could not endorse it as written (6 Aug critique). A bounded pilot lets SIO demonstrate the method before committing portfolio-wide.",
      "armyProblem": "SIO's own concept-design method has not been tested at pilot scale; endorsing a portfolio-wide sprint without first proving the method on a bounded problem set risks a diffuse, unresourced effort.",
      "implications": "SIO Concepts-cell time only, at pilot scale; no broader resourcing commitment until the pilot reports out.",
      "directionSought": "None — staff action. Per the tightened decision test (8 Aug), approval to run a bounded pilot is within existing authority: SIO runs the pilot and reports the concept notes to CSIO. A portfolio-wide rollout, if proposed, returns as a resourced decision.",
      "deliverable": "Functioning pilot decision workflow on 1-2 named Army questions, with measured results (signal-to-assessment time, analyst effort, user corrections captured) and one short concept note per question",
      "deliverableDate": "2026-09-05",
      "decision": "Staff action — decision-workflow pilot on named Army questions under SIO authority; measured results reported to CSIO by 5 Sep 2026.",
      "signal": "Unchanged since April: a recurring argument holds that standing operational plans are overtaken by cheap autonomy, compressed kill chains and commercial-grade capability, with once-peripheral firms now present-tense operational realities (DefenseScoop, 11 May; Bloomberg feature, 5 Jul, paywalled).",
      "sowhat": "Reframed from producing concept notes to testing whether the entire decision process can be improved on real Army questions — the internal testbed for the question-organised, AI-assisted operating model this register implements.",
      "action": "SIO Concepts cell to run the pilot per the workflow above, reporting measured results and concept notes by 5 Sep 2026.",
      "src": [
        {
          "out": "DefenseScoop",
          "date": "11 May 2026",
          "ttl": "The future of war arrived. We aren't ready.",
          "url": "https://defensescoop.com/2026/05/11/the-future-of-war-arrived-we-arent-ready/",
          "f": "verified"
        },
        {
          "out": "Bloomberg",
          "date": "5 Jul 2026",
          "ttl": "AI, Drones and Space Weapons: Governments Plan for Future of Warfare",
          "url": "https://www.bloomberg.com/news/features/2026-07-05/ai-drones-and-space-weapons-governments-plan-for-future-of-warfare",
          "f": "paywall",
          "note": "Feature analysis behind paywall; headline/framing captured via secondary reporting only."
        }
      ],
      "insightSponsor": "SIO",
      "fdLead": "—",
      "functionalLead": "SIO Concepts cell",
      "question": "Q7",
      "directionType": "staff_action",
      "decisionLog": []
    }
  ],
  "feed": [
    {
      "date": "2026-08-08",
      "out": "Kyiv Independent",
      "ttl": "Ukraine's naval drone campaign passes 218 struck Russian 'shadow fleet' vessels",
      "sum": "Ukraine's Unmanned Systems Forces say Operation Molochka has hit 218 Russian shadow-fleet tankers (134 in the Sea of Azov, 84 in the Black Sea) with long-range strike drones and USVs since 6 Jul, including 12 more in the week to 8 Aug.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://kyivindependent.com/12-russian-shadow-fleet-vessels-struck-in-black-sea-and-azov-sea-over-past-week-ukraine-says/",
      "f": "unverified",
      "note": "Ukraine's own claim; Kyiv Independent states it could not independently verify the total, and no technical specs on the drones/USVs were disclosed.",
      "serial": "W-1",
      "sourceType": "general_press",
      "corroborated": false,
      "confidence": "low",
      "primarySourceUrl": null,
      "unverifiedClaims": "Total struck-vessel count and the 12-vessel weekly increment are the Ukrainian Unmanned Systems Forces' own claim, not independently verified.",
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-07",
      "out": "AEI",
      "ttl": "China-Taiwan Update: PLA tests robot dogs, FPV drones and CH-4 UCAVs in amphibious assault drill",
      "sum": "AEI's tracker analyses CCTV footage (aired 1 Aug) of the PLA 72nd Group Army's Huangcaoling Hero Company using armed quadrupedal UGVs, FPV quadcopters and CH-4 UCAVs targeting simulated USVs in a mock beachhead assault; analysts note the new unmanned systems were paired with largely unchanged, vulnerability-prone armoured-vehicle massing tactics.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://www.aei.org/commentary/china-taiwan-update-august-7-2026/",
      "f": "verified",
      "note": "Underlying footage originates from PLA-controlled CCTV; AEI's tactical critique is independent analysis — treat PLA capability claims as intent signalling, corroborate independently.",
      "serial": "W-4",
      "sourceType": "think_tank",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": "PLA capability performance during the drill is shown only via state-controlled footage; independent assessment is limited to AEI's tactical interpretation.",
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-07",
      "out": "Bloomberg",
      "ttl": "Golden Dome Space Shield Targets First Flight Tests in 2027, Pentagon Says",
      "sum": "The Pentagon set funding and milestones for Golden Dome's space-based interceptor pillar, targeting first ground tests by end-2026 and orbital flight demonstrations in 2027, part of a $185B layered missile-defence shield with an AI-enabled command network.",
      "tech": [
        "dews",
        "data",
        "ai"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.bloomberg.com/news/articles/2026-08-07/pentagon-sets-funds-dates-for-secret-golden-dome-space-program",
      "f": "paywall",
      "note": "Bloomberg paywalled; corroborated by SpaceNews/Inside Defense/TWZ coverage of the same milestone.",
      "serial": null,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": "Body behind paywall; schedule and cost figures per Pentagon statements, not independently audited.",
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-07",
      "out": "DefenseScoop",
      "ttl": "War Data Platform integration plans under scrutiny as DOD hustles to weaponize AI",
      "sum": "Accenture Federal Services won an $821M contract to integrate the Pentagon's War Data Platform (formerly Advana), aiming to consolidate military data sources for AI-driven operations; former officials question whether the traditional-consulting approach will avoid past shortfalls.",
      "tech": [
        "data",
        "ai"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://defensescoop.com/2026/08/07/pentagon-war-data-platform-integration-plans-under-scrutiny/",
      "f": "verified",
      "serial": "W-3",
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-07",
      "out": "Army Recognition",
      "ttl": "U.S. Army Moves to Make High-Energy Lasers a Permanent Counter-Drone Weapon",
      "sum": "The Army is negotiating with AeroVironment to make the Enduring High Energy Laser (E-HEL) system a permanent part of its counter-drone arsenal, building on directed-energy M-SHORAD experimentation.",
      "tech": [
        "dews",
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.armyrecognition.com/news/army-news/2026/u-s-army-moves-to-make-high-energy-lasers-a-permanent-counter-drone-weapon",
      "f": "verified",
      "serial": "D-1",
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-07",
      "out": "Army Recognition",
      "ttl": "U.S. Marines Bring FPV Precision Strike to the Tactical Edge in South Korea With Neros Archer Attack Drones",
      "sum": "U.S. Marines conducted their first live-fire FPV attack-drone operations in South Korea using Neros Archer drones, applying tactics drawn from Ukraine's battlefield experience.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://www.armyrecognition.com/news/army-news/2026/u-s-marines-bring-fpv-precision-strike-to-the-tactical-edge-in-south-korea-with-neros-archer-attack-drones",
      "f": "verified",
      "serial": null,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "China Military Online",
      "ttl": "China tests UAV-cued PHL-03 rocket strikes with rapid-displacement tactics",
      "sum": "Footage released by China Military Online showed the PLA's 83rd Group Army using forward UAVs to cue PHL-03 300mm rocket-artillery strikes on a stationary maritime target, then rapidly relocating launchers for a second engagement; the drill tested only a stationary target, not a manoeuvring warship.",
      "tech": [
        "robo",
        "ai"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://www.armyrecognition.com/news/navy-news/2026/china-tests-uav-cued-phl-03-maritime-strikes-and-rapid-displacement-tactics-for-coastal-denial-operations",
      "f": "unverified",
      "note": "State-controlled outlet (China Military Online) is the sole source of the claimed drill effectiveness; treat as intent signalling, corroborate independently.",
      "serial": "W-4",
      "sourceType": "state_media",
      "corroborated": false,
      "confidence": "low",
      "primarySourceUrl": null,
      "unverifiedClaims": "Drill effectiveness and rapid-displacement timing are the PLA's own claim via state media; no independent corroboration found.",
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "South China Morning Post",
      "ttl": "Why China's military is 'laser-focused' on disruptive technologies",
      "sum": "SCMP feature frames PLA modernisation around asymmetric 'disruptive' technology bets — AI, quantum, hypersonic weapons and directed-energy systems — tracing the strategy to Qiao Liang's Unrestricted Warfare thesis of avoiding direct feature-for-feature competition with the US.",
      "tech": [
        "ai",
        "dews"
      ],
      "pf": "X",
      "desk": "APAC",
      "url": "https://www.scmp.com/news/china/military/article/3362909/why-chinas-military-laser-focused-disruptive-technologies",
      "f": "paywall",
      "note": "SCMP is Beijing-linked/semi-independent and the sole outlet for this framing; treat strategic-intent claims as uncorroborated pending Western trade-press pickup.",
      "serial": "W-4",
      "sourceType": "general_press",
      "corroborated": false,
      "confidence": "low",
      "primarySourceUrl": null,
      "unverifiedClaims": "Body behind paywall; strategic-framing claims not yet seen in independent Western reporting.",
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "Washington Times",
      "ttl": "Army's AI-fusion system is 'ready but not done'",
      "sum": "Army leaders declared the Next Generation Command and Control (NGC2) system 'ready to scale' after Project Convergence-Capstone 6 at Fort Irwin; 4th Infantry Division's commander called it 'functional but not optimized', with I Corps next to receive the AI-enabled, unified-data C2 capability.",
      "tech": [
        "ai",
        "data"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://www.washingtontimes.com/news/2026/aug/6/armys-ai-fusion-system-next-generation-command-control-ready-not-done/",
      "f": "verified",
      "note": "Corroborated by Army Times, Army.mil, Soldier Systems Daily and The Defense Post (3-4 Aug).",
      "serial": "W-3",
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "DefenseScoop",
      "ttl": "Navy considers relocating robotic and autonomous systems staff amid broader portfolio restructuring",
      "sum": "The Navy established a new direct-reporting portfolio-manager role for robotic and autonomous systems (RAS) and is weighing relocating RAS staff from Washington closer to fleet operations.",
      "tech": [
        "robo"
      ],
      "pf": "P4",
      "desk": "US",
      "url": "https://defensescoop.com/2026/08/06/navy-robotic-and-autonomous-systems-portfolio-staff/",
      "f": "verified",
      "serial": "W-5",
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "Naval Today",
      "ttl": "Royal Navy tests drone armada concept",
      "sum": "The Royal Navy's 'Dragon Rider' trial in southern England demonstrated coordinated operation of multiple aerial and surface drones alongside crewed naval assets, using a MANET data-relay system to extend drone range past radio line-of-sight ahead of a planned satcom phase.",
      "tech": [
        "robo",
        "data"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://www.navaltoday.com/2026/08/06/royal-navy-tests-drone-armada-concept",
      "f": "verified",
      "note": "Corroborating: Royal Navy (royalnavy.mod.uk).",
      "serial": "W-1",
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "Army Recognition",
      "ttl": "U.S. Demonstrates First P-8A Poseidon Tasking of MQ-4C Triton Drone for Future Naval Teaming",
      "sum": "Boeing and Northrop Grumman completed a lab demonstration where a P-8A Poseidon operator tasked an MQ-4C Triton drone and received ISR data via an open-architecture interface, validating crewed-uncrewed teaming for anti-surface warfare, ISR and targeting.",
      "tech": [
        "robo",
        "data"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.armyrecognition.com/news/navy-news/2026/u-s-demonstrates-first-p-8a-poseidon-tasking-of-mq-4c-triton-drone-for-future-naval-teaming",
      "f": "verified",
      "note": "Corroborating: FlightGlobal.",
      "serial": null,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "FlightGlobal",
      "ttl": "Paramount's Mwari gets Aselsan sensor as focus shifts to counter-drone mission",
      "sum": "Paramount integrated Aselsan's ASELFLIR-500 EO/IR sensor, with AI-enhanced image processing, onto its Mwari ISR/light-attack aircraft, creating a dedicated counter-UAS configuration for detecting and tracking drone threats.",
      "tech": [
        "dews",
        "robo",
        "ai"
      ],
      "pf": "P5",
      "desk": "ME",
      "url": "https://www.flightglobal.com/defence/2026/08/paramounts-mwari-gets-aselsan-sensor-as-focus-shifts-to-counter-drone-mission/",
      "f": "verified",
      "note": "Corroborating: EDR Magazine, DefenceWeb.",
      "serial": "D-1",
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "CyberScoop",
      "ttl": "Despite federal warnings, thousands of U.S. industrial controllers used in water systems remain exposed online",
      "sum": "A Forescout scan found over 4,000 internet-exposed Rockwell Automation PLCs nationwide, including 22 in cities hit by an ongoing water-utility cyberattack campaign spanning at least 12 states since late July.",
      "tech": [
        "data"
      ],
      "pf": "P1",
      "desk": "US",
      "url": "https://cyberscoop.com/exposed-rockwell-controllers-water-system-attacks/",
      "f": "verified",
      "serial": null,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "Meta-Defense",
      "ttl": "Dutch Naval Design enters design phase for uncrewed anti-submarine surface vessel",
      "sum": "The Dutch MoD authorised Dutch Naval Design to begin designing a 12m USV to multiply sonar 'listening points' for the future Dutch/Belgian ASW frigates, extending underwater surveillance and reducing reliance on NH90 helicopters.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://meta-defense.fr/2026/08/06/lutte-anti-sous-marine-drone-neerlandai/",
      "f": "paywall",
      "note": "Detail beyond the lede is subscriber-only.",
      "serial": "W-1",
      "sourceType": "trade_press",
      "corroborated": false,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": "Full design specifications and timeline are behind the Meta-Defense paywall.",
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "ISW/Critical Threats",
      "ttl": "Russia's Rubicon unmanned-systems centre boosts strikes on Ukrainian drone control points",
      "sum": "ISW assesses coordination between Russia's Rubicon Center for Advanced Unmanned Technologies and the Aerospace Forces is increasing the effectiveness of strikes on Ukrainian drone control points and operator concentrations near Druzhkivka, degrading Ukrainian freedom of manoeuvre there.",
      "tech": [
        "dews",
        "robo"
      ],
      "pf": "P1",
      "desk": "EU",
      "url": "https://www.criticalthreats.org/analysis/russian-offensive-campaign-assessment-august-6-2026",
      "f": "verified",
      "serial": "D-2",
      "sourceType": "think_tank",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-06",
      "out": "Marine Insight",
      "ttl": "Uncrewed surface vessel sinks ship off Yemen's Al Mukha near Bab al-Mandeb",
      "sum": "UKMTO reported a vessel attacked and sunk by an unidentified USV roughly 9nm off Al Mukha, Yemen; crew rescued, no fatalities. Yemen's internationally recognised government blamed the Houthis as part of an escalating campaign against Red Sea/Saudi-linked shipping.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "ME",
      "url": "https://www.marineinsight.com/ship-sinks-off-southwest-yemen-after-being-targeted-by-an-uncrewed-surface-vessel/",
      "f": "unverified",
      "note": "UKMTO did not officially confirm Houthi responsibility or name the vessel; attribution is via a Yemeni government statement, cited by Türkiye Today.",
      "serial": "W-1",
      "sourceType": "general_press",
      "corroborated": false,
      "confidence": "low",
      "primarySourceUrl": null,
      "unverifiedClaims": "Houthi attribution and vessel identity are unconfirmed by UKMTO; based on a Yemeni government statement only.",
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-05",
      "out": "DefenseScoop",
      "ttl": "Air Force expands autonomous flight tests with live, AI-enabled intercepts",
      "sum": "The Air Force's X-62 VISTA testbed flew 27 autonomous air intercepts across eight flights, with AI agents ingesting live infrared sensor data to direct real-time interception of an airborne target.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/08/05/air-force-x-62-vista-have-heat-have-holiday/",
      "f": "verified",
      "serial": "S-1",
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-05",
      "out": "DefenseScoop",
      "ttl": "Salesforce previews plans to deliver newly authorized 'AI agents' across DOD",
      "sum": "Salesforce's Agentforce 360 received DOD Impact Level 5 authorization; the Army's Human Resources Command is the first DOD component deploying it, aiming to automate over 1,500 daily cases and assist millions of monthly soldier inquiries.",
      "tech": [
        "ai",
        "data"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://defensescoop.com/2026/08/05/salesforce-plans-deliver-newly-authorized-ai-agents-across-dod/",
      "f": "verified",
      "serial": null,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-05",
      "out": "Navy Times",
      "ttl": "Firestorm Labs builds drones aboard USS Essex without shore resupply",
      "sum": "Firestorm Labs used a containerized 3D-printing 'xCell' microfactory to manufacture over 1,000 parts and 12 Squall FPV drones aboard USS Essex en route to RIMPAC 2026, demonstrating at-sea drone production without shore resupply.",
      "tech": [
        "robo"
      ],
      "pf": "P7",
      "desk": "US",
      "url": "https://www.navytimes.com/industry/techwatch/2026/08/05/firestorm-labs-builds-drones-aboard-uss-essex-without-shore-resupply/",
      "f": "verified",
      "serial": "W-2",
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-05",
      "out": "Breaking Defense",
      "ttl": "Everyone is learning the wrong lessons from Ukraine's drone war",
      "sum": "Analysis argues Western observers wrongly fixate on 'best drone wins' and full-autonomy narratives; Ukrainian battlefield practice favours human-in-the-loop control, distributed/resilient production and a whole-of-society adaptive-innovation ecosystem over any single platform or automation level.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "X",
      "desk": "EU",
      "url": "https://breakingdefense.com/2026/08/everyone-is-learning-the-wrong-lessons-from-ukraines-drone-war/",
      "f": "verified",
      "serial": "S-1",
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-04",
      "out": "DefenseScoop",
      "ttl": "Army seeks next-gen missile that could shoot down small drones for less than $150K a pop",
      "sum": "The Army issued an RFI for the Next Generation Counter-sUAS Missile (NGCM), targeting a sub-$150K-per-round interceptor against Group 2/3 UAS, compatible with the existing Coyote launcher and IBCS-M, with responses due 20 Aug.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/08/04/army-new-missile-shoot-down-drones/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-08-04",
      "out": "Nippon.com (Jiji Press)",
      "ttl": "Japan Sees Urgent Need to Prepare for New Ways of Warfare",
      "sum": "Japan's Cabinet adopted its 2026 defence white paper, giving dedicated treatment for the first time to a 'new way of warfare' centred on drones and AI, drawn from the Ukraine and Middle East wars, alongside China's expanding Pacific military reach.",
      "tech": [
        "robo",
        "ai"
      ],
      "pf": "X",
      "desk": "APAC",
      "url": "https://www.nippon.com/en/news/yjj2026080400394/",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "wire_service",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-08-04",
      "out": "Global Times",
      "ttl": "PLA Air Force unveils three-drone system with GJ-3A debut",
      "sum": "Chinese state media showed the PLA Air Force publicly debuting the GJ-3A armed reconnaissance UAV (over 6-ton MTOW, over 2-ton payload, air-to-ground and air-to-air capable) alongside WZ-10 and WZ-7 reconnaissance drones, described as a cross-service intelligence system feeding the Army, Navy and Rocket Force.",
      "tech": [
        "robo",
        "ai",
        "data"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://www.globaltimes.cn/page/202608/1367510.shtml",
      "f": "unverified",
      "note": "State-controlled outlet (Global Times); no independent corroboration found of the specifications or the 'cross-service' integration claim — treat as intent signalling.",
      "serial": "W-4",
      "sourceType": "state_media",
      "corroborated": false,
      "confidence": "low",
      "primarySourceUrl": null,
      "unverifiedClaims": "GJ-3A specifications and the claimed cross-service ISR integration are unconfirmed outside PLA state media.",
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-08-03",
      "out": "DefenseScoop",
      "ttl": "Pentagon inks $3B framework agreement for Patriot, THAAD components",
      "sum": "Northrop Grumman ($2B, Patriot solid-rocket motors, partnered with Lockheed Martin) and L3Harris ($1B, THAAD structural components and PAC-3 propulsion) signed seven-year framework deals to rebuild interceptor stockpiles depleted by the Iran war.",
      "tech": [
        "dews"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/08/03/pentagon-inks-3b-framework-agreement-for-patriot-thaad-components/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-08-03",
      "out": "South China Morning Post",
      "ttl": "Chinese military unveils AI system to plan and coordinate mass air strikes",
      "sum": "A CCTV documentary marking the PLA's 99th anniversary revealed an 'intelligent strike planning system', built by a team under Senior Colonel Deng Jianping, that prioritises targets, sequences attack waves and assigns unit tasking for large-scale aerial operations.",
      "tech": [
        "ai"
      ],
      "pf": "P2",
      "desk": "APAC",
      "url": "https://www.scmp.com/news/china/military/article/3362824/chinese-military-unveils-ai-system-plan-and-coordinate-mass-air-strikes",
      "f": "paywall",
      "note": "Hong Kong outlet citing a CCTV PLA-99th-anniversary documentary; state-linked footage — treat as intent signalling.",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": "Hong Kong outlet citing a CCTV PLA-99th-anniversary documentary; state-linked footage — treat as intent signalling.",
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-08-03",
      "out": "Payload",
      "ttl": "True Anomaly Chases an Evading Target",
      "sum": "True Anomaly's Jackal-004 executed the first space-to-space pursuit of an intentionally evading target, autonomously planning and closing on Rocket Lab's manoeuvring Puma satellite under Space Force VICTUS HAZE tasking.",
      "tech": [
        "robo",
        "ai"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://payloadspace.com/true-anomaly-chases-an-evading-target-in-orbit/",
      "f": "verified",
      "serial": "W-6",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-08-02",
      "out": "Kyiv Independent",
      "ttl": "Russian oil refinery, airbase, Wildberries warehouse reportedly struck by Ukrainian forces",
      "sum": "Ukraine's General Staff confirmed overnight strikes on Engels strategic air base and the Saratov oil refinery in Saratov Oblast, the Lyudinovskaya fuel depot in Kaluga Oblast, and a drone storage/launch site near Navlya, Bryansk Oblast; Russian officials reported two deaths.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://kyivindependent.com/russian-oil-refinery-airbase-reportedly-struck-by-ukrainian-forces/",
      "f": "verified",
      "note": "Corroborated by United24 Media; Kyiv Independent notes full damage extent independently unverified.",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-08-01",
      "out": "SSBCrack",
      "ttl": "IAF Helicopters To Be Armed With Micro-Missiles And AI Systems For Drone Defence",
      "sum": "The Indian Air Force, presenting at the IAF-SIDM SANKALP 2026 seminar, plans to equip AH-64E Apache and LCH Prachand helicopters with AI-driven target-identification systems, anti-drone micro-missiles and EW/jamming gear, validated via Exercise Rotor Clapp-III.",
      "tech": [
        "ai",
        "robo",
        "dews"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://www.ssbcrack.com/2026/08/indian-air-force-plans-to-arm-helicopters-with-ai-radars-and-micro-missiles-for-anti-drone-operations.html",
      "f": "verified",
      "note": "Originally published 1 Aug, republished/updated 8 Aug; corroborated by Indian Defence News and Raksha Anirveda.",
      "serial": null,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-08",
      "saved": false,
      "flagged": false
    },
    {
      "date": "2026-07-31",
      "out": "Defense News",
      "ttl": "Chinese military researchers tap US AI models to train defense systems",
      "sum": "A Reuters review of 80+ Chinese academic papers/patents found PLA-linked units — Unit 96941, National University of Defense Technology, Academy of Military Sciences — using OpenAI GPT-3.5/GPT-3 and Anthropic Claude 3 Haiku outputs via model distillation to train smaller domestic AI systems for code analysis, UAV image processing/navigation, and target recognition, sidestepping chip export controls.",
      "tech": [
        "ai"
      ],
      "pf": "P2",
      "desk": "APAC",
      "url": "https://www.defensenews.com/industry/techwatch/2026/07/31/chinese-military-researchers-tap-us-ai-models-to-train-defense-systems/",
      "f": "verified",
      "note": "Reuters exclusive; independently carried by multiple outlets.",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-31",
      "out": "DefenseScoop",
      "ttl": "Pentagon's counter-drone task force inks $500M contract for SkyValor 'detect and defeat' system after border testing",
      "sum": "JIATF-401 awarded CACI a three-year, up-to-$500M IDIQ for its non-kinetic SkyValor counter-UAS system (RF jamming, net-capture) after a two-day operational demonstration at the Cannon Air Defense Complex, Yuma; the fixed-site CORIAN v3 variant is slated for critical-site deployment under the Domestic Shield initiative.",
      "tech": [
        "robo",
        "dews"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/31/pentagon-counter-drone-task-force-500m-contract-caci-skyvalor/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-31",
      "out": "DefenseScoop",
      "ttl": "Space Force establishes $981M contract vehicle to develop testing, training infrastructure",
      "sum": "Space Force's NITE-STAR IDIQ pooled 15 vendors (incl. L3Harris, Northrop Grumman, Lockheed Martin, CACI) to build a combined digital/cyber/live test-and-training range — adversary-mimicking spacecraft plus ground systems that reproduce jamming and cyberattacks — addressing a self-identified simulator shortfall for orbital-warfare training.",
      "tech": [
        "data",
        "dews"
      ],
      "pf": "P9",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/31/space-force-contract-vehicle-develop-testing-training-infrastructure/",
      "f": "verified",
      "note": "Corroborated by Breaking Defense and SpaceNews.",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-30",
      "out": "South China Morning Post",
      "ttl": "Xi Jinping urges Chinese armed forces to 'strengthen military application' of AI",
      "sum": "At a Politburo group study session, Xi directed the PLA to \"strengthen the military application of unmanned intelligent technologies\" and deepen network information systems to build an \"intelligent military system,\" per the official readout.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P2",
      "desk": "APAC",
      "url": "https://www.scmp.com/news/china/military/article/3362496/xi-jinping-urges-chinese-armed-forces-strengthen-military-application-ai",
      "f": "paywall",
      "note": "Body behind SCMP paywall; underlying claim is a state-media (Xinhua/CGTN) readout — treat as PRC intent signal, independently corroborated by Bloomberg and CGTN.",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": "Body behind SCMP paywall; underlying claim is a state-media (Xinhua/CGTN) readout — treat as PRC intent signal, independently corroborated by Bloomberg and CGTN.",
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-30",
      "out": "Militarnyi",
      "ttl": "Ukraine and Latvia Sign Memorandums on Joint UAV Development",
      "sum": "Kyiv and Riga signed memorandums to build UAV production and dual-use testing infrastructure in Latvia, including a planned drone-manufacturing facility in the Latgale border region, transferring Ukrainian combat-derived UAV technology to Latvian industry.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://militarnyi.com/en/news/ukraine-latvia-memorandums-uav-development/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-30",
      "out": "Military Times",
      "ttl": "DARPA challenge pushes limits of heavy-lift drone technology",
      "sum": "DARPA opened its Lift Challenge, with 100+ teams competing Aug 2-9 in Dayton, OH for $6.5M in prizes; drones capped at 55lb must lift a 110lb payload around a 5-nautical-mile course, targeting the payload-to-weight ceiling of current multirotor designs.",
      "tech": [
        "robo"
      ],
      "pf": "P8",
      "desk": "US",
      "url": "https://www.militarytimes.com/news/your-military/2026/07/30/darpa-challenge-pushes-limits-of-heavy-lift-drone-technology/",
      "f": "verified",
      "serial": "W-2",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-30",
      "out": "Aviation Week",
      "ttl": "Second-Generation U.S. Autonomous Fighters May Look Like the First",
      "sum": "As the Air Force refines Collaborative Combat Aircraft Increment 2 requirements, officials including Secretary Frank Kendall indicated the next-gen loyal-wingman design won't radically depart from Increment 1, prioritizing affordability (20-30% cost growth acceptable) over an \"exquisite\" sensor/weapons loadout.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://aviationweek.com/defense/budget-policy-operations/second-generation-us-autonomous-fighters-may-look-first",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-30",
      "out": "Defense News",
      "ttl": "US strikes $58.6 billion Patriot missile deal amid rising stockpile concerns",
      "sum": "The Army converted a $4.7B one-year Patriot deal into a $58.6B, FY26-32 multiyear buy with Lockheed Martin, tripling PAC-3 MSE production to 2,000/year and funding $8-9B in facility upgrades across 20+ sites.",
      "tech": [
        "dews"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.defensenews.com/industry/techwatch/2026/07/30/us-strikes-586-billion-patriot-missile-deal-amid-rising-stockpile-concerns/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-30",
      "out": "Defense News",
      "ttl": "The arms race for cheaper anti-ballistic weapons is underway",
      "sum": "Analysis of the competing tracks to field cheaper interceptors post-Iran-war: Lockheed's sub-$2M PAC-3 ACE, Ukraine's ~$700K Freyja/FP-7.X coalition, and a US pledge to license Patriot production to Ukraine.",
      "tech": [
        "dews"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.defensenews.com/industry/techwatch/2026/07/30/the-arms-race-for-cheaper-anti-ballistic-weapons-is-underway/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-29",
      "out": "USNI News",
      "ttl": "More than 35 Experiments Test Unmanned Systems, Emerging Technologies During RIMPAC",
      "sum": "RIMPAC 2026 embedded 35+ unmanned-systems experiments into live fleet operations across 30 nations, including shipboard additive-manufacturing-to-drone delivery, a Typhoon USV autonomously entering USS Essex's well deck, and long-range ISR trials with uncrewed surface and underwater vehicles.",
      "tech": [
        "robo",
        "data"
      ],
      "pf": "P7",
      "desk": "US",
      "url": "https://news.usni.org/2026/07/29/more-than-35-experiments-test-unmanned-systems-emerging-technologies-during-rimpac",
      "f": "verified",
      "note": "Corroborated by Army Recognition and Indo-Pacific Defense FORUM.",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-29",
      "out": "Military Times",
      "ttl": "Pentagon puts out call for robot boats that launch attack drones",
      "sum": "DIU/Navy issued the SWAP-USV solicitation for \"market-ready\" unmanned surface vessels integrated with two or more market-ready aerial drones to detect, identify, track, and defeat maritime threats, deployable within 120 days; $100M prize purse plus a $200M follow-on procurement budget, responses due 10 Aug.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.militarytimes.com/industry/techwatch/2026/07/29/pentagon-puts-out-call-for-robot-boats-that-launch-attack-drones/",
      "f": "verified",
      "serial": "W-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-29",
      "out": "DefenseScoop",
      "ttl": "AV and Applied Intuition team up to bring collaborative autonomy to new Mayhem 10 drone",
      "sum": "AeroVironment and Applied Intuition are integrating Applied Intuition's Acuity ISR/Strike autonomy software into AV's Mayhem 10 loitering munition, enabling single-operator control of multiple collaborating drones for the Army's Launched Effects program.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/29/av-applied-intuition-collaborative-autonomy-mayhem-10-drone/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-29",
      "out": "Breaking Defense",
      "ttl": "How DARPA plans to get nuclear power in the size of a 'AA battery'",
      "sum": "DARPA's new Rads to Watts program is funding seven teams to build radiovoltaic cells that convert radiation directly into electricity, aiming for miniature nuclear batteries that could power satellites, tactical radios and sensors for years without recharging.",
      "tech": [
        "dews"
      ],
      "pf": "X",
      "desk": "US",
      "url": "https://breakingdefense.com/2026/07/how-darpa-plans-to-get-nuclear-power-in-the-size-of-aa-battery/",
      "f": "verified",
      "serial": "W-2",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-29",
      "out": "The War Zone",
      "ttl": "China Fires YJ-20 Hypersonic Anti-Ship Missile From Smaller Destroyer",
      "sum": "CCTV footage confirmed China's first launch of the YJ-20 hypersonic anti-ship missile (Mach 6+, 1,000-1,500km range) from a Type 052D destroyer rather than the flagship Type 055, distributing the weapon across ~35 hulls instead of 10.",
      "tech": [
        "dews"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://www.twz.com/sea/china-fires-yj-20-hypersonic-anti-ship-missile-from-smaller-destroyer",
      "f": "verified",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-28",
      "out": "DefenseScoop",
      "ttl": "U.S. military forms first bilateral AI task force with United Arab Emirates",
      "sum": "CENTCOM and the UAE launched Task Force Talon Synapse, a ~20-person bilateral AI cell based in Abu Dhabi focused on intelligence support, critical-infrastructure protection and regional security monitoring.",
      "tech": [
        "ai",
        "data"
      ],
      "pf": "X",
      "desk": "ME",
      "url": "https://defensescoop.com/2026/07/28/us-military-ai-task-force-united-arab-emirates/",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-28",
      "out": "DefenseScoop",
      "ttl": "Marine commandos aim to automate armories with computer vision, other tech",
      "sum": "MARSOC and SOFWERX are developing an RF-free, computer-vision \"automated armory\" to track thousands of serialized weapons and equipment by image recognition instead of manual inventory.",
      "tech": [
        "ai",
        "data"
      ],
      "pf": "P7",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/28/marine-forces-special-operations-command-automated-armory-marsoc/",
      "f": "verified",
      "serial": "W-7",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-27",
      "out": "DefenseScoop",
      "ttl": "After Valiant Shield exercise, PACAF commander says he's 'impressed' with Australia's Ghost Bat drone program",
      "sum": "PACAF commander Gen. Kevin Schneider praised Australia's MQ-28 Ghost Bat collaborative combat aircraft after it flew alongside crewed fighters for the first time in the multinational Valiant Shield 26 exercise.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://defensescoop.com/2026/07/27/ghost-bat-drone-cca-valiant-shield-pacific-air-forces/",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-27",
      "out": "The War Zone",
      "ttl": "Navy's GARC Kamikaze Drone Boat Blew A Hole In Ex-USS Peleliu During Sinking Exercise",
      "sum": "A Navy Global Autonomous Reconnaissance Craft (GARC) uncrewed surface vessel from USVDIV 32 detonated against the decommissioned USS Peleliu during a RIMPAC 2026 SINKEX, the Navy's first live-fire kill by the attritable USV.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.twz.com/sea/navys-garc-kamikaze-drone-boat-blew-a-hole-in-ex-uss-peleliu-during-sinking-exercise",
      "f": "verified",
      "note": "Corroborated by Naval News.",
      "serial": "W-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-27",
      "out": "The War Zone",
      "ttl": "Aerostar High-Altitude Balloons Being Turned Into Drone Motherships",
      "sum": "Aerostar demonstrated its Lightning stratospheric balloon carrying a single Apollo-R surveillance drone, with plans to scale toward a multi-drone \"mothership\" platform for persistent surveillance, EW and comms relay.",
      "tech": [
        "robo",
        "dews"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.twz.com/news-features/aerostar-high-altitude-balloons-being-turned-into-drone-motherships",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-27",
      "out": "Naval News",
      "ttl": "Inside Ukraine's Long-Range Strike Campaign with the AGM-188A Rusty Dagger",
      "sum": "Ukraine has fielded the American-Norwegian AGM-188A Rusty Dagger cruise missile (500+nm range) from fighter aircraft since June 2026, using it to strike targets including a semiconductor plant deep inside Russia.",
      "tech": [
        "robo",
        "dews"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://www.navalnews.com/naval-news/2026/07/inside-ukraines-long-range-strike-campaign-with-the-agm-188a-rusty-dagger/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-27",
      "out": "Kyiv Independent",
      "ttl": "Ukrainian drones reportedly strike neighboring Belgorod, cities across southern Russia",
      "sum": "Ukrainian drones struck Belgorod, Rostov-on-Don and oil facilities in Udmurtia and Yaroslavl -- over 1,300km inside Russia -- in what regional officials called the most massive drone attack yet; Russia's defence ministry said it downed 276 UAVs overnight.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://kyivindependent.com/ukrainian-drones-reportedly-strike-russian-cities-of-belgorod-rostov-on-don/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-27",
      "out": "The War Zone",
      "ttl": "Australian MQ-28 Ghost Bat Fighter Drones Could Be Commanded By U.S. Pilots",
      "sum": "PACAF commander Gen. Kevin Schneider said the US and Australia are exploring \"operator-to-operator\" command architectures that would let American pilots command Australian MQ-28 Ghost Bat drones, building on their joint flights in Valiant Shield 26.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://www.twz.com/air/australian-mq-28-ghost-bat-fighter-drones-could-be-commanded-by-u-s-pilots",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-26",
      "out": "The War Zone",
      "ttl": "Meet BARB, The Robot That's A Glimpse At Future Jet Engine Assembly",
      "sum": "Pratt & Whitney is testing BARB, a robotic arm system for automating jet-engine assembly steps, as part of a broader push toward more automated production lines.",
      "tech": [
        "robo"
      ],
      "pf": "P7",
      "desk": "US",
      "url": "https://www.twz.com/air/meet-barb-the-robot-thats-a-glimpse-future-jet-engine-assembly",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-17",
      "out": "Kyiv Independent",
      "ttl": "Ukrainian drone units strike over 1 million targets since start of 2026, including nearly 200,000 Russian troops, ministry says",
      "sum": "Ukraine's Defense Ministry says UAVs now account for roughly 90% of engaged targets, having struck more than 1 million verified targets and killed or wounded about 193,500 Russian troops since the start of 2026.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://kyivindependent.com/ukrainian-drone-units-strike-over-1-million-targets-in-6-months-including-nearly-200-000-russian-troops-ministry-says/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-17",
      "out": "DefenseScoop",
      "ttl": "Air commandos seek 'SOF-peculiar' attack drones with automatic target recognition capabilities",
      "sum": "US Special Operations Command is seeking Group 1/2 one-way-attack drones with automatic target recognition, launchable from aircraft via a common 5.9-inch by 42-inch tube, for SOF-specific missions.",
      "tech": [
        "robo",
        "ai"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/17/air-commandos-attack-drones-automatic-target-recognition/",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-17",
      "out": "USNI News",
      "ttl": "Philly Shipyard to Build 'Golden Defender' Ship as part of New Missile Defense Program",
      "sum": "Hanwha Philly Shipyard and TOTE Services were selected to build Missile Defense Agency missile-range instrumentation/tracking vessels, dubbed \"Golden Defender,\" based on the National Security Multi-Mission Vessel design, to support the Golden Dome missile-tracking effort.",
      "tech": [
        "data"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://news.usni.org/2026/07/17/philly-shipyard-to-build-golden-defender-ship-as-part-of-new-missile-defense-program",
      "f": "verified",
      "serial": "W-6",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-16",
      "out": "DefenseScoop",
      "ttl": "SDA resumes satellite launch campaign following months-long pause, tech issues",
      "sum": "The Space Development Agency launched 21 more York Space Systems Transport Layer satellites on a Falcon 9 on 16 July, resuming Tranche 1 launches after a nine-month pause and bringing the PWSA data-relay constellation to 63 of its planned 126 satellites.",
      "tech": [
        "data"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/16/sda-resumes-satellite-launch-campaign-following-tech-issues/",
      "f": "verified",
      "serial": "W-6",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-16",
      "out": "Ynetnews",
      "ttl": "IAI reveals 'Hypnosis' system to disrupt and neutralize drone swarms",
      "sum": "Israel Aerospace Industries unveiled Hypnosis, a non-kinetic electronic-warfare system that disrupts the satellite navigation guiding large-scale drone swarms and other GNSS-dependent aerial threats.",
      "tech": [
        "dews",
        "robo"
      ],
      "pf": "P5",
      "desk": "ME",
      "url": "https://www.ynetnews.com/article/sjsdeuwezx",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-16",
      "out": "Aviation Week",
      "ttl": "Northrop Grumman Sets Launch Date For Robotic Servicing Spacecraft",
      "sum": "DARPA and Northrop Grumman set a 21 July launch for the Mission Robotic Vehicle, a dexterous dual-arm spacecraft built with the US Naval Research Laboratory to inspect, repair and extend the life of satellites in geosynchronous orbit under the decade-long RSGS program.",
      "tech": [
        "robo"
      ],
      "pf": "P7",
      "desk": "US",
      "url": "https://aviationweek.com/space/operations-safety/northrop-grumman-sets-launch-date-robotic-servicing-spacecraft",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-16",
      "out": "USNI News",
      "ttl": "Saronic Announces Texas Site for New $3.2B Shipyard",
      "sum": "Saronic will build an 835-acre \"Port Alpha\" autonomous-vessel shipyard at the Port of Brownsville, Texas — its third facility — following the Corsair USV's first combat use against Iranian naval targets on 12 July.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://news.usni.org/2026/07/16/saronic-announces-texas-site-for-new-3-2b-shipyard",
      "f": "verified",
      "serial": "W-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "DefenseScoop",
      "ttl": "Air Force reaches CCA milestone with live-firing of missile from Anduril's robotic fighter jet",
      "sum": "An Anduril YFQ-44A Collaborative Combat Aircraft fired an AIM-120 AMRAAM at a digital target over the Mojave Desert from Edwards AFB — the first live weapons release from a CCA drone; the Air Force says humans retain exclusive control over weapon release.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/15/air-force-live-fire-test-missile-anduril-cca-drone/",
      "f": "verified",
      "note": "Corroborated by Breaking Defense and Air & Space Forces Magazine.",
      "serial": "S-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "DefenseScoop",
      "ttl": "In its next chapter, DIU aims to reduce the military's 'cost per kill'",
      "sum": "DIU director Owen West outlined a reorganisation into new portfolio teams — drones/autonomous warfare, commercial-space \"kill webs\", and \"10x technologies\" — with AI treated as a horizontal capability across all DIU activity rather than a standalone unit.",
      "tech": [
        "ai",
        "robo",
        "data"
      ],
      "pf": "X",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/15/diu-owen-west-aims-to-reduce-the-militarys-cost-per-kill/",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "Defense One",
      "ttl": "Space Development Agency resumes key satellite launches after delays, watchdog criticisms",
      "sum": "SDA is set to resume Tranche 1 Transport Layer launches (21 satellites, the data-transport layer of the Proliferated Warfighter Space Architecture) via SpaceX Falcon 9 after a nine-month pause; a draft NDAA provision would fold SDA into Space Force's portfolio acquisition executive.",
      "tech": [
        "data"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://www.defenseone.com/policy/2026/07/space-development-agency-satellite-launches-criticisms/414781/",
      "f": "unverified",
      "note": "Could not be independently corroborated in this window; treat details as provisional pending confirmation.",
      "serial": "W-6",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "low",
      "primarySourceUrl": null,
      "unverifiedClaims": "Could not be independently corroborated in this window; treat details as provisional pending confirmation.",
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "The Defence Blog",
      "ttl": "Japan taps German firm for its \"drone-killer\" program",
      "sum": "Japan's ATLA selected German drone-maker Quantum Systems for its Counter-UAS Proof-of-Concept Program, an evaluation track under ATLA's Early Acquisition Program to fast-track interceptor-drone technology into the JSDF.",
      "tech": [
        "robo",
        "ai"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://defence-blog.com/japan-taps-a-german-company-for-its-drone-killer-program/",
      "f": "verified",
      "note": "Corroborated by a parallel same-week Terra Drone ATLA interceptor-drone selection and UASweekly coverage.",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "USNI News",
      "ttl": "Blue Water Autonomy, Saildrone Sue Navy Over MUSV Rejection",
      "sum": "Two unmanned-surface-vessel makers filed separate suits in the US Court of Federal Claims alleging the Navy's Medium USV vendor-selection process was arbitrary and capricious after each was passed over in favor of seven other companies.",
      "tech": [
        "robo"
      ],
      "pf": "P4",
      "desk": "US",
      "url": "https://news.usni.org/2026/07/15/blue-water-autonomy-saildrone-sue-navy-over-musv-rejection",
      "f": "verified",
      "serial": "W-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "Euronews",
      "ttl": "Von der Leyen and Zelenskyy sign EU-Ukraine drone deal",
      "sum": "The EU and Ukraine signed a Defense Industrial Partnership (\"Drone Deal\") releasing €1B immediately and unlocking €10B more for FPV drones, counter-drone systems, deep-strike missiles and Gripen jets, with a Ukrainian-industry consortium and EU-based joint production facilities planned.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://www.euronews.com/my-europe/2026/07/15/von-der-leyen-and-zelenskyy-sign-eu-ukraine-drone-deal",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "Defense One",
      "ttl": "Defense Business Brief: Pennsylvania's DIB — Gecko Robotics manufacturing hub",
      "sum": "At a Pennsylvania Defense and Innovation Summit featuring prime-contractor and investor leadership, Gecko Robotics announced a new 10,000-sq-ft manufacturing and integration hub in Pittsburgh to bring its AI-powered robotic non-destructive-testing tech to defense-industrial-base partners.",
      "tech": [
        "robo",
        "data"
      ],
      "pf": "P7",
      "desk": "US",
      "url": "https://www.defenseone.com/business/2026/07/defense-business-brief-farnborough-preview-thoughts-trends-trade-groups-balk-ndaa-buyback-provision-pennsylvanias-dib/414806/",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "UPI",
      "ttl": "Korean Air unveils AI pilot technology at South Korea expo",
      "sum": "At the Korea Drone & UAM Expo in Incheon, Korean Air showcased an \"AI Pilot\" autonomous fighter-drone concept, a low-observability unmanned formation, a jointly developed prototype with Anduril, and an AI aircraft-inspection system cutting exterior checks from about 10 hours to under an hour.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://www.upi.com/Top_News/World-News/2026/07/15/korean-air-ai-tech/3141784154992/",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "wire_service",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-15",
      "out": "USNI News",
      "ttl": "Taiwan Mobilizes HIMARS, Anti-ship Missiles For Major Defense Drill",
      "sum": "Taiwan ran a five-day (13–17 Jul) joint drill using US-supplied HIMARS and domestic Hsiung Feng anti-ship missiles to rehearse decentralized, distributed command-and-control against a simulated Chinese amphibious/maritime incursion, ahead of the August Han Kuang exercise.",
      "tech": [
        "data"
      ],
      "pf": "P6",
      "desk": "APAC",
      "url": "https://news.usni.org/2026/07/15/taiwan-mobilizes-himars-anti-ship-missiles-for-major-defense-drill",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-14",
      "out": "Defense News",
      "ttl": "9 nations back Ukraine's Patriot alternative, Freyja — and want it flying in a year",
      "sum": "Ukraine, Denmark, France, Germany, Italy, the Netherlands, Norway, Spain, Sweden and the UK formed an Integrated Anti-Ballistic Missile Coalition in Paris, aiming to mass-produce Ukraine's Freyja system (built around Fire Point's FP-7.X interceptor, ~$700K/shot vs ~$3.8M for Patriot) within 12 months.",
      "tech": [
        "dews"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://www.defensenews.com/global/europe/2026/07/14/9-nations-back-ukraines-patriot-alternative-freyja-and-want-it-flying-in-a-year/",
      "f": "verified",
      "note": "Corroborated by Euronews, Al Jazeera, Foreign Policy, Kyiv Post, United24 Media and Opex360.",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-14",
      "out": "DefenseScoop",
      "ttl": "SDA awards $1.75B in deals for additional Golden Dome missile tracking sats",
      "sum": "The Space Development Agency awarded L3Harris (~$955M, 18 HBTSS-variant satellites) and Sierra Space (~$798M, 18 missile-warning/tracking satellites) to build 36 Accelerated Missile Defense Tranche 3 satellites for Golden Dome, targeted for 2028 launch.",
      "tech": [
        "data"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/14/sda-contract-awards-additional-golden-dome-missile-tracking-sats/",
      "f": "verified",
      "note": "Corroborated by SpaceNews, Via Satellite, Defense Daily, Military Times, Breaking Defense and SDA's own release.",
      "serial": "W-6",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-14",
      "out": "Kyiv Independent",
      "ttl": "Ukraine hits 2 Russian oil refineries, 11 vessels in strike spanning hundreds of miles",
      "sum": "Ukrainian long-range drones struck the Gazprom Neftekhim Salavat complex (Bashkortostan, ~1,300 km from the front) and the Afipsky refinery (Krasnodar) alongside vessel and logistics targets.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://kyivindependent.com/drones-attack-major-oil-refinery-in-bashkortostan/",
      "f": "verified",
      "note": "Corroborated by The Moscow Times, Kyiv Post, Ukrainska Pravda and ISW's 14 July assessment.",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-14",
      "out": "Military Times",
      "ttl": "Army to move aerial intelligence brigade to Texas for HADES program",
      "sum": "The 224th Military Intelligence Battalion relocates from Hunter Army Airfield, GA to Fort Hood, TX by 2027, standing up the Army's first dedicated unmanned-aircraft battalion (two MQ-1C Gray Eagle companies) alongside incoming ME-11B HADES signals-intelligence jets.",
      "tech": [
        "data",
        "robo"
      ],
      "pf": "P2",
      "desk": "US",
      "url": "https://www.militarytimes.com/news/your-military/2026/07/14/army-to-move-aerial-intelligence-brigade-to-texas-for-hades-program/",
      "f": "verified",
      "note": "Corroborated by The War Zone and an Army.mil/DVIDS release.",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-14",
      "out": "The Aviationist",
      "ttl": "France Clears Rafale to Use 68mm Rockets Against Drones",
      "sum": "France's DGA cleared the Rafale for \"LADAC\" — a 12-round pod firing Thales Aculeus LG laser-guided 68mm rockets — reaching initial operational capability as a low-cost (~$25-40K/shot) counter to Shahed-type drones versus $680K-1.14M MICA missiles.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://theaviationist.com/2026/07/14/france-clears-rafale-to-use-68-mm-rockets-against-drones/",
      "f": "verified",
      "note": "Corroborated by Army Recognition, The Defense Post, Aviation Week and Militarnyi.",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-13",
      "out": "USNI News",
      "ttl": "VIDEO: 3 Lethal U.S. Drones Attack Iranian Sub, Port Facility",
      "sum": "CENTCOM confirmed three Saronic Corsair one-way-attack unmanned surface vessels struck a Ghadir-class midget submarine and port infrastructure at Iran's Bandar Abbas Naval Base on 12 July — the first-ever US combat use of armed sea drones.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "ME",
      "desk2": "US",
      "url": "https://news.usni.org/2026/07/13/video-3-lethal-u-s-drones-attack-iranian-sub-port-facility",
      "f": "verified",
      "note": "Corroborated by Naval News, TWZ, Stars and Stripes, Military Times and The Aviationist.",
      "serial": "W-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-13",
      "out": "Defense News",
      "ttl": "Helsing raises $1.8 billion in Europe's biggest defense-startup round",
      "sum": "German AI-defence firm Helsing closed a Series E raising $1.8B at an $18B valuation — Europe's largest-ever defence-tech funding round — earmarked to scale AI platforms (drones, EW/underwater sensing, C2 software) across partner nations.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "X",
      "desk": "EU",
      "url": "https://www.defensenews.com/global/europe/2026/07/13/helsing-raises-18-billion-in-europes-biggest-defense-startup-round/",
      "f": "verified",
      "note": "Corroborated by CNBC, Axios and SiliconANGLE.",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-13",
      "out": "DefenseScoop",
      "ttl": "DOD halts cybersecurity requirements for CMMC Phase 2",
      "sum": "DoD CIO Kirsten Davies and USD(A&S) Michael Duffey suspended CMMC Phase 2 third-party cybersecurity certification requirements (was to take effect 10 Nov), citing prohibitive compliance costs (~$600K per firm) and an assessor shortfall; a new CMMC Reform Task Force has 60 days to report.",
      "tech": [
        "data"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/13/dod-halts-cmmc-cybersecurity-requirements-phase-2/",
      "f": "verified",
      "note": "Corroborated by Breaking Defense and Federal News Network.",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-13",
      "out": "Xinhua",
      "ttl": "China, Russia wrap up joint naval exercise",
      "sum": "The 12th 'Joint Sea-2026' China-Russia exercise concluded at Qingdao after live-force drills from 6-13 July; Russian officials said extensive use of unmanned surface vessels and counter-unmanned-system tactics was a key feature alongside reconnaissance and air-defence drills.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "APAC",
      "url": "https://english.news.cn/20260713/9379d756304e40088458553afd2c8264/c.html",
      "f": "verified",
      "note": "Chinese state media — treat force-posture framing as intent signalling; corroborated by TASS and Defence Security Asia.",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "state_media",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-13",
      "out": "The Defense Post",
      "ttl": "Philippine Military to Establish Space Arm",
      "sum": "AFP chief Gen. Romeo Brawner Jr. said the Philippine military will stand up a space centre — intended to grow into a Space Command/Force by 2028 — to strengthen satellite-enabled ISR, comms, C2, missile systems and drone operations amid South China Sea tensions.",
      "tech": [
        "data",
        "robo"
      ],
      "pf": "P6",
      "desk": "APAC",
      "url": "https://thedefensepost.com/2026/07/13/philippines-military-space-arm/",
      "f": "verified",
      "note": "Corroborated by Rappler and Inquirer.net; a Manila Times precursor item ran 8 Jul.",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-13",
      "out": "Geopolitical Monitor",
      "ttl": "Who Fires the Shot? Closing the Authority Gap in Indo-Pacific Autonomous Warfare",
      "sum": "Analysis argues the fielding of unmanned/autonomous systems across Indo-Pacific coalitions (AUKUS Pillar 2, Quad) has outpaced agreement on who may authorise lethal autonomous force, given divergent US/Japan/India/Australia/South Korea legal ceilings.",
      "tech": [
        "ai"
      ],
      "pf": "P6",
      "desk": "APAC",
      "url": "https://www.geopoliticalmonitor.com/who-fires-the-shot-closing-the-authority-gap-in-indo-pacific-autonomous-warfare/",
      "f": "verified",
      "note": "Doctrine/analysis piece rather than spot news; also syndicated via Eurasia Review.",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "think_tank",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-13",
      "out": "Aerospace Global News",
      "ttl": "Houthis shoot down Saudi drone as airspace warning issued",
      "sum": "Houthi spokesman Yahya Saree claimed Yemeni forces downed a Saudi-operated Wing Loong II reconnaissance drone over Al-Bayda governorate, part of a broader escalation in which Houthi forces fired missiles/drones toward Abha airport following strikes on Sanaa airport.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "ME",
      "url": "https://aerospaceglobalnews.com/news/houthis-saudi-wing-loong-shootdown/",
      "f": "unverified",
      "note": "Single-source adversary claim (Houthi spokesman); no Saudi MoD confirmation of a drone loss found.",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": false,
      "confidence": "low",
      "primarySourceUrl": null,
      "unverifiedClaims": "Single-source adversary claim (Houthi spokesman); no Saudi MoD confirmation of a drone loss found.",
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-10",
      "out": "Defense News",
      "ttl": "Rheinmetall, MBDA to develop laser weapon for German Navy",
      "sum": "BAAINBw commissioned a Rheinmetall-MBDA joint venture (ARGE HEL) to develop a high-energy naval laser weapon system, building on a demonstrator that logged 28,000nm aboard the frigate Sachsen; the system is slated for service by 2029.",
      "tech": [
        "dews"
      ],
      "pf": "P6",
      "desk": "EU",
      "url": "https://www.defensenews.com/global/europe/2026/07/10/rheinmetall-mbda-to-develop-laser-weapon-for-german-navy/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-10",
      "out": "The Defense Post",
      "ttl": "UK-US team pulls off 'world's first' airdrop of USV from A400M aircraft",
      "sum": "Kraken Technology Group and Capewell, supported by the Royal Navy under Project Beehive, completed the world's first extracted-load airdrop of an uncrewed surface vessel — a K3 SCOUT USV parachuted from an A400M at 1,300 ft into up to Sea State 4, ready for immediate operations.",
      "tech": [
        "robo"
      ],
      "pf": "P4",
      "desk": "EU",
      "url": "https://thedefensepost.com/2026/07/10/uk-us-airdrop-usv-aircraft/",
      "f": "verified",
      "serial": "W-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-09",
      "out": "DefenseScoop",
      "ttl": "Pentagon awards deals for laser weapons that could shoot down drone swarms",
      "sum": "The Joint Laser Weapon System program awarded Lockheed Martin Aculight and nLIGHT Defense OTAs (initial $86M, ceiling $847M) to mature 150kW counter-drone laser prototypes and scale toward 300-500kW systems for cruise-missile defense.",
      "tech": [
        "dews"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/09/pentagon-joint-laser-weapon-system-defeat-drone-swarms/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-09",
      "out": "Defense One",
      "ttl": "Navy teases next step in key drone boat program",
      "sum": "The US Navy plans to open the next phase of its Medium Unmanned Surface Vessel (MUSV) 'marketplace' on 1 August, issuing a request for prototype proposals for a new high-capacity MUSV variant — the one unmanned surface program carved out of the Pentagon's new DRPM-UxS consolidation.",
      "tech": [
        "robo"
      ],
      "pf": "P4",
      "desk": "US",
      "url": "https://www.defenseone.com/defense-systems/2026/07/navy-teases-next-step-key-drone-boat-program/414683/",
      "f": "verified",
      "serial": "W-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-08",
      "out": "Militarnyi",
      "ttl": "Russia deploys new Volna Kupol Garant EW systems to jam Starlink",
      "sum": "Russia has fielded roughly 10 Volna Kupol Garant electronic-warfare complexes able to suppress Starlink satellite-comms links across ~20 sq km each; Ukrainian forces have already destroyed at least two of the $1.5M systems.",
      "tech": [
        "dews"
      ],
      "pf": "P6",
      "desk": "EU",
      "url": "https://militarnyi.com/en/news/russia-deploys-new-volna-kupol-garant-ew-systems-to-jam-starlink-ukraine-already-destroying-them/",
      "f": "verified",
      "note": "Citing Reuters reporting.",
      "serial": "D-2",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-08",
      "out": "JNS",
      "ttl": "Zamir: IDF to finalize new AI, drone, robotics unit structure",
      "sum": "IDF Chief of Staff Lt. Gen. Eyal Zamir said the military will soon finalise a new General Staff structure dedicated to robotics, drones and AI, setting a goal for the IDF to be a global leader in unmanned systems in both defence and offence.",
      "tech": [
        "ai",
        "robo",
        "data"
      ],
      "pf": "X",
      "desk": "ME",
      "url": "https://www.jns.org/news/israel-news/zamir-idf-to-finalize-new-ai-drone-robotics-unit-structure",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-07",
      "out": "BusinessWire",
      "ttl": "Aurelius Systems and American Rheinmetall Partner to Advance Autonomous Counter-Drone Defense",
      "sum": "Aurelius Systems is integrating its autonomous Archimedes directed-energy counter-drone system onto American Rheinmetall's Ox unmanned ground vehicle, the company's bid for the US Army's Ground Optionally Autonomous Transport (GOAT) program.",
      "tech": [
        "dews",
        "robo"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://www.businesswire.com/news/home/20260707583744/en/Aurelius-Systems-and-American-Rheinmetall-Partner-to-Advance-Autonomous-Counter-Drone-Defense",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "wire_service",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-07",
      "out": "Militarnyi",
      "ttl": "Griffen intercepts and downs Shahed drone for the first time",
      "sum": "The UK-Ukrainian jet-powered interceptor Griffen (Firebolt Engineering), capable of over 350 km/h, scored its first confirmed combat kill against a Russian Shahed/Geran-2 drone — built to counter newer jet-powered Shahed variants that outrun older interceptors.",
      "tech": [
        "robo"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://militarnyi.com/en/news/griffen-intercepts-and-downs-shahed-drone-for-the-first-time/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-07",
      "out": "Army Recognition",
      "ttl": "NATO approves $40 billion counter-drone initiative to defeat low-cost UAV threats",
      "sum": "NATO allies announced a five-year package of more than $40B for counter-drone defence, drone procurement and operator training (Ankara, 7 Jul), adding an alliance-wide counter-drone marketplace and expanded operator training — a shift from national efforts to coordinated C-UAS scaling.",
      "tech": [
        "robo",
        "dews"
      ],
      "pf": "P5",
      "desk": "EU",
      "url": "https://www.armyrecognition.com/news/aerospace-news/2026/nato-approves-40-billion-counter-drone-initiative-to-defeat-low-cost-uav-threats",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-07",
      "out": "Fortune",
      "ttl": "From missiles to malware: Why the Gulf is stepping up its operational resilience",
      "sum": "Citing Help AG (e&) data, AI is reported to have cut cyberattack-to-damage time by 65% amid US-Iran war fallout; UAE daily attack attempts reportedly surged from ~200,000 to ~700,000, with coverage gaps emerging in Gulf cyber-insurance for state-linked incidents.",
      "tech": [
        "data",
        "ai"
      ],
      "pf": "X",
      "desk": "ME",
      "url": "https://fortune.com/2026/07/07/missiles-to-malware-gulf-stepping-up-operational-resilience/",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-06",
      "out": "DefenseScoop",
      "ttl": "Pentagon awards $80M task order for AI-enabled tech to defend Air Force bases against small drones",
      "sum": "The first (~$80.5M) task order under AeroVironment's $500M Army C-UAS IDIQ, fielding Titan 4 RF detect-and-defeat systems with AI/ML-supported signal analysis to protect Air Force bases from small UAS.",
      "tech": [
        "robo",
        "dews"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/06/pentagon-awards-task-order-to-av-for-titan-drone-defense/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-06",
      "out": "Breaking Defense",
      "ttl": "Army makes new tweaks to acquisition portfolios, realigns autonomy office",
      "sum": "The Army moved its Mission Autonomy office from PAE Maneuver Air to PAE Layered Protection and Integration, nesting cross-disciplinary autonomy functions ahead of the Pentagon's new DRPM-UxS joint integrator for unmanned/autonomous programs.",
      "tech": [
        "robo"
      ],
      "pf": "X",
      "desk": "US",
      "url": "https://breakingdefense.com/2026/07/army-makes-new-tweaks-to-acquisition-portfolios-realigns-autonomy-office/",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-06",
      "out": "DefenseScoop",
      "ttl": "DIU reshaping its tech priorities and portfolio teams under new leadership",
      "sum": "DIU's new director, Owen West, is restructuring the unit's technology priorities and portfolio teams, coinciding with DIU's new formal role as primary industry-engagement interface for the Pentagon's unmanned-systems portfolio office (DRPM-UxS).",
      "tech": [
        "data",
        "robo"
      ],
      "pf": "X",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/06/diu-reshaping-tech-priorities-under-new-leadership-owen-west/",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-05",
      "out": "Bloomberg",
      "ttl": "AI, Drones and Space Weapons: Governments Plan for Future of Warfare",
      "sum": "Feature framing AI, hypersonics, space weapons and drones as displacing Cold War-style nuclear-stockpile deterrence, grounded in Ukraine strike reporting.",
      "tech": [
        "ai",
        "robo",
        "dews"
      ],
      "pf": "X",
      "desk": "US",
      "url": "https://www.bloomberg.com/news/features/2026-07-05/ai-drones-and-space-weapons-governments-plan-for-future-of-warfare",
      "f": "paywall",
      "note": "Feature analysis behind Bloomberg paywall; headline/framing captured via secondary reporting only.",
      "serial": "I-1",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": "Feature analysis behind Bloomberg paywall; headline/framing captured via secondary reporting only.",
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-03",
      "out": "The Defense Post",
      "ttl": "The next soldier? Ukraine begins hunt for more humanoid combat robots",
      "sum": "Brave1 launched a grant competition for humanoid combat robots for Ukraine's Defense Forces, aiming to robotise as much of the first line of contact as possible and reduce risk to personnel.",
      "tech": [
        "robo"
      ],
      "pf": "P7",
      "desk": "EU",
      "url": "https://thedefensepost.com/2026/07/03/ukraine-humanoid-combat-robots/",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-07-02",
      "out": "DefenseScoop",
      "ttl": "Pentagon awards $500M contract to AeroVironment for counter-drone technology",
      "sum": "A firm-fixed-price US Army order for commercial C-UAS/C-sUAS through 2029, spanning larger UAS down to commercial quadcopters and fixed-wing drones.",
      "tech": [
        "robo",
        "dews"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/07/02/pentagon-awards-500m-contract-aerovironment-counter-drone-technology/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-30",
      "out": "PLA Daily",
      "ttl": "Intelligentised warfare: manipulating, suppressing and reconstructing intelligent networks",
      "sum": "A PLA Academy of Military Science article frames future 'technological strategy' around AI-enabled command and control resistant to electromagnetic interference, and around paralysing an enemy's operational system by deceiving its information and AI algorithms.",
      "tech": [
        "ai",
        "data"
      ],
      "pf": "P2",
      "desk": "APAC",
      "url": "https://www.aei.org/articles/china-taiwan-update-july-10-2026/",
      "f": "verified",
      "note": "PRC military-press doctrine (PLA Daily, 30 Jun); captured via AEI China-Taiwan Update (10 Jul) — state-authored, treat as intent signalling.",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "state_media",
      "corroborated": false,
      "confidence": "low",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-29",
      "out": "Breaking Defense",
      "ttl": "Overland AI nets Marine Corps autonomous ground vehicle contract",
      "sum": "A production OTA under APFIT — reported as the first ground-autonomy firm to prime a US military production contract, for AGVs supporting the MADIS air-defence system.",
      "tech": [
        "robo"
      ],
      "pf": "P4",
      "desk": "US",
      "url": "https://breakingdefense.com/2026/06/overland-ai-nets-marine-corps-autonomous-ground-vehicle-contract/",
      "f": "verified",
      "serial": "W-2",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-27",
      "out": "Army Recognition",
      "ttl": "US Marine Corps modernizes MADIS counter-drone system with autonomous ground vehicles",
      "sum": "Ground autonomy extended into air defence — AGVs integrated into the Marine Air Defense Integrated System.",
      "tech": [
        "robo"
      ],
      "pf": "P4",
      "desk": "US",
      "url": "https://www.armyrecognition.com/news/army-news/2026/u-s-marine-corps-modernizes-madis-counter-drone-system-with-autonomous-ground-vehicles",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-26",
      "out": "Defense Express",
      "ttl": "Ukraine's largest Protector UGV to receive anti-aircraft drones alongside a laser",
      "sum": "The Protector UGV, fielded for high-risk logistics, is being turned into a mobile interceptor-drone launcher and fitted with the Tryzub laser (FPV to ~900m; Shahed to ~5km).",
      "tech": [
        "robo",
        "dews"
      ],
      "pf": "P7",
      "desk": "EU",
      "url": "https://en.defence-ua.com/news/ukraines_largest_protector_ugv_to_receive_anti_aircraft_drones_alongside_mysterious_laser-18425.html",
      "f": "verified",
      "serial": "W-2",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-26",
      "out": "Militarnyi",
      "ttl": "Ukrainian Defense Ministry clears Droid Box UGV control system for military use",
      "sum": "Control system monitors positioning anomalies and applies countermeasures to sustain comms and navigation under EW and GNSS spoofing.",
      "tech": [
        "robo",
        "dews"
      ],
      "pf": "P7",
      "desk": "EU",
      "url": "https://militarnyi.com/en/news/ukrainian-defense-ministry-clears-droid-box-ugv-control-system-for-military-use/",
      "f": "verified",
      "serial": "W-2",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-24",
      "out": "United24 Media",
      "ttl": "Ukraine plans 25,000 ground robotic systems by mid-2026",
      "sum": "Confirmation of the scale of Ukraine's ground-robot build-out for logistics, strike and casualty evacuation in the kill zone.",
      "tech": [
        "robo"
      ],
      "pf": "P4",
      "desk": "EU",
      "url": "https://united24media.com/war-in-ukraine/how-ukraine-builds-its-ground-robots-for-the-kill-zone-18666",
      "f": "verified",
      "serial": "W-2",
      "saved": false,
      "flagged": false,
      "sourceType": "official",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": "https://united24media.com/war-in-ukraine/how-ukraine-builds-its-ground-robots-for-the-kill-zone-18666",
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-23",
      "out": "South China Morning Post",
      "ttl": "China showcases portable laser weapons for a single soldier to shoot down drones",
      "sum": "Harbin Xinguang's man-portable 'Lijian' II/III lasers (25-30kg, ~2kW, AI-aided targeting, ~500m) were displayed at a Beijing defence exhibition — part of a broad Chinese directed-energy counter-drone line spanning portable to naval systems.",
      "tech": [
        "dews"
      ],
      "pf": "P6",
      "desk": "APAC",
      "url": "https://www.scmp.com/news/china/military/article/3357667/china-showcases-portable-laser-weapons-single-soldier-shoot-down-drones",
      "f": "verified",
      "note": "Hong Kong outlet reporting vendor claims from a Beijing exhibition — corroborate performance.",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-22",
      "out": "DefenseScoop",
      "ttl": "Army taps Anduril as lead for NGC2 common data layer baseline",
      "sum": "A named common data-layer baseline (Anduril lead, Palantir data mesh) as groundwork for rapid scaling of connected capability.",
      "tech": [
        "data",
        "ai"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://defensescoop.com/2026/06/22/army-taps-anduril-lead-ngc2-common-data-layer-baseline/",
      "f": "verified",
      "serial": "W-3",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-20",
      "out": "The Army (army.mil)",
      "ttl": "Army and industry align on common data baseline as NGC2 moves to delivery",
      "sum": "NGC2 shifts from prototyping toward delivery after division-scale validations, heading to Project Convergence Capstone 6 in July.",
      "tech": [
        "data"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://www.army.mil/article/293409/army_and_industry_align_on_common_data_baseline_as_next_generation_command_and_control_moves_from_prototyping_to_delivery",
      "f": "verified",
      "serial": "W-3",
      "saved": false,
      "flagged": false,
      "sourceType": "official",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": "https://www.army.mil/article/293409/army_and_industry_align_on_common_data_baseline_as_next_generation_command_and_control_moves_from_prototyping_to_delivery",
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-18",
      "out": "Federal News Network",
      "ttl": "The Pentagon is rewriting how it buys AI",
      "sum": "A reported shift toward modular, interoperable, multi-vendor AI architectures with auditable models rather than monolithic black-box platforms.",
      "tech": [
        "ai",
        "data"
      ],
      "pf": "X",
      "desk": "US",
      "url": "https://federalnewsnetwork.com/commentary/2026/06/the-pentagon-is-rewriting-how-it-buys-ai-control-of-the-future-of-warfare/",
      "f": "verified",
      "serial": "W-5",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-16",
      "out": "Atlantic Council",
      "ttl": "How NATO can integrate AI to prevail in future algorithmic warfare",
      "sum": "Analysis framing adversary civil-military AI fusion — commercial providers folded into military surveillance, target recognition and C2 — as an algorithmic-warfare challenge.",
      "tech": [
        "ai",
        "data"
      ],
      "pf": "P2",
      "desk": "APAC",
      "url": "https://www.atlanticcouncil.org/in-depth-research-reports/report/how-nato-can-integrate-ai-to-prevail-in-future-algorithmic-warfare/",
      "f": "verified",
      "note": "Analysis piece — corroborate specific vendor/military-fusion claims.",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "think_tank",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-06-09",
      "out": "DefenseScoop",
      "ttl": "Pentagon approves autonomous counter-UAS system after border testing",
      "sum": "A long-range, 24/7 non-kinetic detect-and-defeat C-UAS validated for Joint Force use after southern-border testing.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://defensescoop.com/2026/06/09/pentagon-approves-autonomous-counter-drone-system-after-border-testing/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-05-31",
      "out": "Breaking Defense",
      "ttl": "AUKUS partners sign agreement on underwater drones, speed up sub plan",
      "sum": "First officially announced AUKUS Pillar 2 project — joint uncrewed-underwater-vehicle development, first payloads slated for 2027.",
      "tech": [
        "robo"
      ],
      "pf": "P4",
      "desk": "APAC",
      "url": "https://breakingdefense.com/2026/05/aukus-partners-sign-agreement-on-underwater-drones-speed-up-sub-plan/",
      "f": "verified",
      "serial": "W-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-05-19",
      "out": "Inside Unmanned Systems",
      "ttl": "Pentagon awards $500M to Perennial Autonomy for counter-drone interceptors proven in Ukraine",
      "sum": "A three-year IDIQ (up to $500M) for autonomous counter-drone interceptors with combat provenance in Ukraine.",
      "tech": [
        "robo",
        "ai"
      ],
      "pf": "P5",
      "desk": "US",
      "url": "https://insideunmannedsystems.com/pentagon-awards-500m-to-perennial-autonomy-for-counter-drone-interceptors-proven-in-ukraine/",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-05-11",
      "out": "DefenseScoop",
      "ttl": "The future of war arrived. We aren't ready.",
      "sum": "Op-ed: standing plans overtaken by cheap autonomy and compressed kill chains; commercial firms now operational realities.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "X",
      "desk": "US",
      "url": "https://defensescoop.com/2026/05/11/the-future-of-war-arrived-we-arent-ready/",
      "f": "verified",
      "serial": "I-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-05-07",
      "out": "Stars and Stripes",
      "ttl": "Five US bases to get directed-energy weapons to counter drones",
      "sum": "A federal pilot fields high-energy laser and high-power microwave systems at five bases to protect critical infrastructure and airbases from small UAS.",
      "tech": [
        "dews"
      ],
      "pf": "P6",
      "desk": "US",
      "url": "https://www.stripes.com/theaters/us/2026-05-07/directed-energy-weapons-to-counter-drones-21606215.html",
      "f": "verified",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-05-06",
      "out": "Anduril",
      "ttl": "Anduril announces $5B Series H raise at a $61B valuation",
      "sum": "A record defence-tech round as Arsenal-1 scales production (Fury, Roadrunner, Barracuda) — a marker of the industrial base behind autonomous mass.",
      "tech": [
        "robo",
        "ai"
      ],
      "pf": "P4",
      "desk": "US",
      "url": "https://www.anduril.com/news/anduril-announces-usd5b-series-h-raise",
      "f": "verified",
      "serial": null,
      "saved": false,
      "flagged": false,
      "sourceType": "vendor",
      "corroborated": false,
      "confidence": "low",
      "primarySourceUrl": "https://www.anduril.com/news/anduril-announces-usd5b-series-h-raise",
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-04-24",
      "out": "DefenseScoop",
      "ttl": "Space Force names 12 companies to develop Golden Dome space-based interceptors",
      "sum": "Up to $3.2B in OTAs for space-based interceptors, targeted for integration into the Golden Dome architecture by 2028.",
      "tech": [
        "data",
        "dews"
      ],
      "pf": "P9",
      "desk": "US",
      "url": "https://defensescoop.com/2026/04/24/golden-dome-space-based-interceptor-missile-defense-contractors/",
      "f": "verified",
      "serial": "W-6",
      "saved": false,
      "flagged": false,
      "sourceType": "trade_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-03-26",
      "out": "Global Times",
      "ttl": "Two new types of Chinese anti-drone laser weapons revealed in official media report",
      "sum": "Chinese state media revealed two new anti-drone laser systems, with an expert claiming China's laser-based counter-drone technologies are at the global forefront.",
      "tech": [
        "dews"
      ],
      "pf": "P6",
      "desk": "APAC",
      "url": "https://www.globaltimes.cn/page/202603/1357573.shtml",
      "f": "verified",
      "note": "Chinese state media (Global Times) — treat as intent signalling; corroborated by Western trade press.",
      "serial": "D-1",
      "saved": false,
      "flagged": false,
      "sourceType": "state_media",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-03-25",
      "out": "Global Times",
      "ttl": "China unveils full-process demonstration of Atlas drone swarm operations system",
      "sum": "State media presented CETC's 'Atlas' system linking target identification, launcher activation, drone deployment and precision strike into one chain — launching up to ~96 drones in minutes under a single operator, with autonomous task division.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P2",
      "desk": "APAC",
      "url": "https://www.globaltimes.cn/page/202603/1357519.shtml",
      "f": "verified",
      "note": "Chinese state media (Global Times); corroborated by Army Recognition and SCMP.",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "state_media",
      "corroborated": true,
      "confidence": "moderate",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    },
    {
      "date": "2026-01-22",
      "out": "South China Morning Post",
      "ttl": "1 soldier, 200 drones: China showcases rapid launch and agility in swarm warfare tactics",
      "sum": "A PLA/CCTV demonstration showed ~200 jam-resistant drones controlled by a single soldier, using an intelligent algorithm that lets individual units keep cooperating autonomously after losing the operator link.",
      "tech": [
        "ai",
        "robo"
      ],
      "pf": "P2",
      "desk": "APAC",
      "url": "https://www.scmp.com/news/china/military/article/3340972/1-soldier-200-drones-china-showcases-rapid-launch-and-agility-swarm-warfare-tactics",
      "f": "verified",
      "note": "Hong Kong outlet reporting a PLA/CCTV demonstration; state/vendor claims — corroborate.",
      "serial": "W-4",
      "saved": false,
      "flagged": false,
      "sourceType": "general_press",
      "corroborated": true,
      "confidence": "high",
      "primarySourceUrl": null,
      "unverifiedClaims": null,
      "dateLastChecked": "2026-08-04"
    }
  ],
  "questions": [
    {
      "id": "Q1",
      "title": "Affordable Layered C-UAS",
      "category": "capability",
      "question": "How is the changing UAS threat altering the protection architecture, cost exchange and magazine depth required by Army — and how should Army defeat increasingly numerous, affordable UAS at a sustainable cost?",
      "decisionHorizon": "Near-term: allied and peer programmes are committing at production scale now; the G5 baseline (due 15 Sep 2026) defines when Army-side choices become consequential.",
      "armyBaseline": "Not established from internal information. A G5-led Army C-UAS force-development baseline is directed (due 15 Sep 2026) covering threat classes, protected assets/echelons, existing and planned capabilities, residual gaps, static vs manoeuvre requirements, kinetic/non-kinetic options, cost exchange, magazine depth, integration/C2 and candidate trial areas.",
      "externalChange": "Every layer of a layered counter-UAS architecture (soft-kill RF/EW, low-cost kinetic interceptors, directed energy, swarm-control autonomy) moved from demonstration toward production within a single 30-day window, while allied production packages (NATO $40B+, EU-Ukraine €11B) and sub-$150K interceptor programmes reset the cost-exchange curve.",
      "delta": "Whether Army's assumed protection architecture, interceptor cost-exchange position and magazine depth remain adequate against proliferating low-cost UAS — and whether the affordability trade peers are making (cheap mass vs exquisite systems) is one Army has explicitly made.",
      "confidence": {
        "evidence": "high",
        "inference": "moderate"
      },
      "triggers": [
        {
          "type": "threat",
          "trigger": "A new UAS class, tactic or operational use materially alters the threat envelope the baseline assumes."
        },
        {
          "type": "cost",
          "trigger": "Interceptor cost-exchange shifts materially (e.g. a sub-$150K class interceptor fielded at scale)."
        },
        {
          "type": "internal",
          "trigger": "The G5 baseline confirms residual gaps and defines trial questions."
        },
        {
          "type": "programme",
          "trigger": "An existing Army protection or sense-strike capability line approaches requirement freeze or a major decision."
        }
      ],
      "directionRequired": {
        "type": "priority_direction",
        "statement": "Endorse affordable layered C-UAS as an Army force-development priority and direct the G5 baseline (thread D-1)."
      },
      "threads": [
        "D-1"
      ],
      "decisionLog": [],
      "nextQuestion": "Which residual gaps survive the baseline, and what trial questions do they define? Trial design should produce decision-relevant measurements (detection probability, classification accuracy, engagement success, leakage, cost per engagement, magazine expenditure, operator workload, integration latency).",
      "status": "active",
      "materialChange": "Continued production-scale evidence (counter-UAS vendor marketplace, permanent high-energy-laser fielding, allied sensor integration) reinforces the layered C-UAS trend; no change to the 15 Sep baseline-first direction."
    },
    {
      "id": "Q2",
      "title": "Spectrum-Survivable C2",
      "category": "capability",
      "question": "What level of connectivity degradation, electromagnetic exposure and communications disruption must future Army C2 remain effective through — and what survivability and signature standards follow?",
      "decisionHorizon": "Near-term: the threat side is fielded (counter-satellite-communications jamming, AI-accelerated EW); the G5 baseline (due 15 Sep 2026) determines when Army design-standard decisions are required.",
      "armyBaseline": "Not established from internal information. A G5-led C2 spectrum-survivability baseline is directed (due 15 Sep 2026): current dependencies, PACE communications, datalink resilience, anti-jam requirements, degraded-mode operation, network/terminal dependencies, procedural and doctrinal mitigations, affected programmes, and T&E needs.",
      "externalChange": "Russia fielded a dedicated counter-Starlink jammer (~20km² suppression); AI-enabled EW (automated signal analysis, adaptive jamming) is maturing; peer forces treat fixed C2 nodes as targets and the spectrum as an hourly fight.",
      "delta": "Whether Army command posts, C2 links and uncrewed datalinks meet any defensible survivability/signature standard — and what that standard should be. Exercise-derived measurements (connectivity availability, latency, degradation, link-switching, recovery time, emission/signature, effect on decision timelines) should progressively replace theoretical assumptions.",
      "confidence": {
        "evidence": "high",
        "inference": "moderate"
      },
      "triggers": [
        {
          "type": "threat",
          "trigger": "A comparable EW capability is employed against a partner force, or a new jamming class is confirmed fielded."
        },
        {
          "type": "internal",
          "trigger": "An Army exercise or trial produces evidence of C2 degradation or signature exposure."
        },
        {
          "type": "programme",
          "trigger": "An Army C2 programme approaches requirement freeze where survivability standards must be settled."
        }
      ],
      "directionRequired": {
        "type": "priority_direction",
        "statement": "Endorse spectrum survivability and low-signature operation as Army C2 force-development requirements; direct the G5 baseline (thread D-2)."
      },
      "threads": [
        "D-2"
      ],
      "decisionLog": [],
      "nextQuestion": "Which capability lines and design standards does the baseline implicate, and which exercise measurements will replace theoretical assumptions first?",
      "status": "active",
      "materialChange": "New evidence that Russia is actively locating and striking (not just jamming) Ukrainian drone control points reinforces the fixed-C2 threat; no change to the 15 Sep baseline-first direction."
    },
    {
      "id": "Q3",
      "title": "Adversary AI-Enabled C2 & Autonomy",
      "category": "net_assessment",
      "question": "How should adversary AI-enabled planning, sensing and command — and distributed long-range strike — alter Army design assumptions, red-teaming and resilience?",
      "decisionHorizon": "Continuous: net-assessment input is actionable now against design margins and red-teaming; force-development escalation awaits stronger evidence.",
      "armyBaseline": "Not held by this pipeline. Design margins, red-teaming assumptions and resilience standards rest with Army concept and functional owners; this question feeds them current adversary-capability assessments.",
      "externalChange": "PLA reveal of an AI 'intelligent strike planning system'; commercial-AI-into-military-ecosystem integration (incl. model distillation from US models); ~96-200-drone single-operator swarm demonstrations; YJ-20 hypersonic anti-ship distribution across the numerically dominant destroyer class. Majority of specific claims are state-linked; the broad trend is independently corroborated.",
      "delta": "Whether Army C2, EW and resilience design margins assume an adversary planning/sensing tempo and strike distribution that is now outdated.",
      "confidence": {
        "evidence": "moderate",
        "inference": "moderate"
      },
      "triggers": [
        {
          "type": "threat",
          "trigger": "Independent (non-PRC-state) confirmation of operational fielding of AI strike-planning, or a comparable capability confirmed against a partner force."
        },
        {
          "type": "internal",
          "trigger": "Army red-teaming or exercise play identifies a design assumption invalidated by the assessed capability."
        }
      ],
      "directionRequired": null,
      "threads": [
        "W-4"
      ],
      "decisionLog": [],
      "nextQuestion": "Which specific Army design assumptions (C2 tempo, EW resilience, dispersal, deception) are most sensitive to the assessed adversary trajectory — a question for red-teaming, not procurement.",
      "status": "active",
      "materialChange": "Four new state-linked PRC disclosures (amphibious robotics, UAV-cued artillery, cross-service ISR drone system, 'disruptive tech' strategic framing) extend the AI-C2/autonomy line; confidence remains capped at low/moderate pending independent corroboration — no change to the net-assessment (not force-development) treatment."
    },
    {
      "id": "Q4",
      "title": "Contested Sustainment & Autonomy",
      "category": "capability",
      "question": "Where can autonomy materially reduce exposure, manpower, sustainment burden or decision latency for Army — starting with sustainment under contested conditions?",
      "decisionHorizon": "Medium-term: partner fielding (Ukraine UGV logistics) proves feasibility now; Army timing depends on a framed requirement and the problem-first process inventory.",
      "armyBaseline": "Not established from internal information. No Army sustainment-autonomy requirement or trial is identified in material available to this pipeline. The problem-first inventory — which Army sustainment and inventory processes carry the largest manpower burden, exposure, error rate or reconciliation effort — is the missing baseline.",
      "externalChange": "Ukraine fielded EW-resilient UGV control (Droid Box) and UGV frontline logistics at scale (25,000-system goal); a US ground-autonomy production contract; DARPA Lift Challenge targeting 2:1 payload-to-weight heavy-lift drones; radiovoltaic maintenance-free power in development.",
      "delta": "Whether Army last-mile resupply and fixed logistics processes carry exposure and manpower burdens that autonomy could materially reduce — to be established from Army process data, not inferred from foreign fielding.",
      "confidence": {
        "evidence": "high",
        "inference": "low"
      },
      "triggers": [
        {
          "type": "internal",
          "trigger": "G5 frames an Army last-mile sustainment requirement, or a process owner identifies a high-burden inventory/logistics process (W-7)."
        },
        {
          "type": "technology",
          "trigger": "DARPA Lift Challenge validates a payload-to-weight ratio usable against an Army lift requirement (heavy-lift element only)."
        },
        {
          "type": "internal",
          "trigger": "An Army exercise or trial produces sustainment-burden or exposure evidence (manpower saved, delivery time, intervention rate)."
        }
      ],
      "directionRequired": null,
      "threads": [
        "W-2",
        "W-7"
      ],
      "decisionLog": [],
      "nextQuestion": "Which Army sustainment/inventory processes have the largest measured manpower burden, exposure or error rate? That inventory precedes any technology selection.",
      "status": "active",
      "materialChange": "New evidence for W-2 (at-sea, shore-independent drone manufacturing aboard USS Essex) strengthens the contested-sustainment case; still awaiting a G5-framed Army requirement (W-2) and a process-owner-identified candidate process (W-7) before either converts to a decision."
    },
    {
      "id": "Q5",
      "title": "Army Data for Decision Advantage",
      "category": "foundational",
      "question": "Can Army discover, integrate, govern and exploit the data needed for operational and force-development decisions at the required echelon, classification and tempo?",
      "decisionHorizon": "Foundational: every other question's decision workflow depends on it; the ADIO baseline (due 15 Sep 2026) starts the internal assessment.",
      "armyBaseline": "Tasked, not yet held: ADIO to provide the current Army Data Store, ENCLAVE, STRONGWATCH and OUTREACH/SYNTEX architecture baseline by 15 Sep 2026. The subsequent SIO/G5 comparison assesses what data exists, where it resides, who owns it, whether it is reusable, how it is exposed, whether it moves across required environments, where duplication exists, and what prevents decision workflows from accessing it.",
      "externalChange": "US NGC2 common-data-layer baseline validated at division scale (Project Convergence Capstone 6); Maven reported delivering near-fully machine-generated intelligence. These are comparators for pattern relevance — not templates; the starting point is the Singapore Army's operational requirements and existing architecture.",
      "delta": "Whether Army's data architecture enables or blocks persistent decision workflows — which NGC2/Maven patterns are relevant, and which are inappropriate for Singapore Army scale, security constraints and structure.",
      "confidence": {
        "evidence": "moderate",
        "inference": "moderate"
      },
      "triggers": [
        {
          "type": "internal",
          "trigger": "The ADIO baseline (due 15 Sep 2026) is received; SIO/G5 comparison identifies a genuine force-development gap or opportunity."
        },
        {
          "type": "programme",
          "trigger": "An Army data/C2 programme approaches a decision that depends on the architecture assessment."
        }
      ],
      "directionRequired": null,
      "threads": [
        "W-3"
      ],
      "decisionLog": [],
      "nextQuestion": "Which Army decision workflows (starting with the questions in this register) does the architecture currently enable, and which does it block?",
      "status": "active",
      "materialChange": "Comparator systems (NGC2, War Data Platform) both show maturity caveats this edition ('ready but not optimised'; scrutiny over the integration approach) — a useful caution for the ADIO baseline, not yet Army-side evidence."
    },
    {
      "id": "Q6",
      "title": "Human Authority in Autonomous Systems",
      "category": "policy",
      "question": "What safeguards, command relationships and assurance requirements are necessary as autonomy enters weapon-capable systems?",
      "decisionHorizon": "Medium-term: no Army platform decision is imminent, but the policy question recurs across every autonomous-strike-capable line; framing now avoids answering reactively later.",
      "armyBaseline": "Whether an Army position on human-authority safeguards, assurance/test standards and CONOPS exists — and where it sits — is itself being confirmed by the S-1 framing paper (due 15 Sep 2026).",
      "externalChange": "First live weapons release from an uncrewed CCA (human authority retained throughout); first US combat use of lethal USVs under a combatant-command construct outside standing task-force frameworks.",
      "delta": "Whether Army manned-unmanned teaming concepts assume command-authority and assurance arrangements that these precedents are already redefining.",
      "confidence": {
        "evidence": "high",
        "inference": "moderate"
      },
      "triggers": [
        {
          "type": "technology",
          "trigger": "An autonomous weapons-release capability (vs human-authorised) is demonstrated or fielded."
        },
        {
          "type": "programme",
          "trigger": "An Army programme with weapon-capable autonomy approaches a decision requiring a stated authority position."
        },
        {
          "type": "partnership",
          "trigger": "A defined Army littoral/riverine requirement or participation mechanism emerges (W-1 escalation)."
        }
      ],
      "directionRequired": null,
      "threads": [
        "S-1",
        "W-1"
      ],
      "decisionLog": [],
      "nextQuestion": "Which Army stakeholders own each facet (authority, assurance, legal, CONOPS), per the S-1 stakeholder map — SIO frames; it does not determine policy.",
      "status": "active",
      "materialChange": "New evidence on both threads: X-62 VISTA autonomous-intercept tests and a Tier-2 caution against full-autonomy narratives inform the S-1 framing paper; W-1 gains four new maritime-autonomy events (Ukraine's shadow-fleet campaign passing 218 vessels, the RN Dragon Rider trial, a Dutch ASW USV design phase, and an unconfirmed Yemen-coast USV attack). Neither thread's ownership or decision status changes."
    },
    {
      "id": "Q7",
      "title": "Organising for the AI/Autonomy Shift",
      "category": "organisational",
      "question": "How should Army organise, acquire and learn in order to absorb AI and autonomy at the pace peer institutions are setting?",
      "decisionHorizon": "Continuous: comparator evidence accumulates; Army-side timing is set by the I-1 decision-workflow pilot and any concrete partnership opportunity.",
      "armyBaseline": "SIO's own working method is the internal testbed: the I-1 pilot measures whether a question-organised, AI-assisted decision workflow improves assessment speed and quality on real Army questions.",
      "externalChange": "US DRPM-UxS consolidation (~$75B portfolio); Pentagon shift to modular multi-vendor AI acquisition and CMMC pause; IDF robotics/AI restructure; CENTCOM-UAE bilateral AI task force (classification-sharing precedent); Ghost Bat operator-to-operator command precedent; Japan's 'new way of warfare' white paper.",
      "delta": "Whether Army's organisational and acquisition patterns for AI/autonomy match the tempo peers now demonstrate — assessed via the comparator line (W-5), not asserted.",
      "confidence": {
        "evidence": "high",
        "inference": "low"
      },
      "triggers": [
        {
          "type": "partnership",
          "trigger": "A comparator thread produces a concrete interoperability, co-development or classification-sharing opportunity Army could join."
        },
        {
          "type": "internal",
          "trigger": "The I-1 pilot produces measured results warranting scale-up (or refutation) of the decision-workflow approach."
        }
      ],
      "directionRequired": null,
      "threads": [
        "W-5",
        "I-1"
      ],
      "decisionLog": [],
      "nextQuestion": "Does the measured I-1 pilot justify scaling the decision-workflow model across the question register?",
      "status": "active",
      "materialChange": "A Navy RAS portfolio-manager restructuring adds a further organisational comparator; no concrete Army interoperability or co-development opportunity yet identified — escalation trigger unmet."
    }
  ],
  "metrics": {
    "asOf": "2026-08-08",
    "note": "Decision-advantage metrics per DOCTRINE.md §21 — measured where practicable; information volume is not an outcome. Time-based metrics (signal-to-assessment, assessment-to-direction, decision-to-action) require timestamps captured across future editions and are not yet measurable.",
    "provenanceTraceablePct": 94.9,
    "internalDataCoveragePct": 0,
    "internalDataCoverageNote": "0% — every thread currently rests on external evidence alone; internal baselines are tasked (G5 × 2 due 15 Sep 2026, ADIO due 15 Sep 2026) and this figure is the register's most important number to move.",
    "closedLoop": {
      "directed": 0,
      "resultCaptured": 0,
      "note": "No senior direction has yet completed the direction → action → observed effect → updated assessment loop; decisionLog fields are in place to capture it."
    },
    "materialChangesThisEdition": 7
  }
};
