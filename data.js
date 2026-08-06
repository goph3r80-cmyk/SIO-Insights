/* SIO Insights edition data — generated. Replace to refresh. */
window.SIO_DATA = {
  "edition": "Aug 2026",
  "feedAsOf": "2026-08-04",
  "productVersion": "2.0",
  "changelog": [
    {
      "date": "2026-08-06",
      "note": "CSIO restructure per critique dated 6 Aug 2026, 8:46 PM SGT. Consolidated 33 serials into 10 (3 decisions, capped per CSIO direction; 6 watchlist capability questions; 1 SIO-internal process item). Added maturity ladder (reported/demonstrated/operationally_evaluated/fielded/combat_proven), confidence rating (high/moderate/low), single accountable owner + supporting agencies (replacing owner2/joint 'X + Y' framing), CSIO Page-1 decision format (recommendation/whyNow/armyProblem/options/implications/directionSought/deliverable/deliverableDate) and Page-2 watchlist format (latestDevelopment/changeFromPrevious/armyRelevance/escalationTrigger). Renamed owner code ADO -> ADIO. Fixed stale suspenses (I-1, III-2 now W-3) to dated deliverables or explicit trigger conditions; replaced 'Next edition' suspenses across the board. Reclassified III-7 (CCA weapons release) from 'proven' to 'demonstrated' per CSIO's maturity correction, and moved it from an ASB2 platform matter to a cross-portfolio SIO-owned decision (D-3). W-3 (was III-2, common data layer) explicitly NOT reframed against Army Data Store/ENCLAVE/STRONGWATCH/ADIO — this pipeline holds no verified information on those internal systems and flags that ADIO input is required before the line can mature into a decision, rather than fabricating the comparison. Annex (feed[]) enriched with sourceType, confidence, corroborated, primarySourceUrl, unverifiedClaims and dateLastChecked per item. NOTE: index.html has not yet been updated to render the new tier/category/decision/watchlist fields — this is flagged follow-up work; the dashboard will need a rendering update to display Page 1 / Page 2 / Annex structure and the new fields."
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
      "owner": "ASB2",
      "supporting": [
        "SIO"
      ],
      "desk": "US",
      "desk2": "EU",
      "maturity": "mixed (fielded – reported; see signal)",
      "confidence": "high",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 0,
      "supersedes": [
        "II-2",
        "II-4",
        "II-6",
        "III-1",
        "III-10",
        "III-14"
      ],
      "dlabel": "Affordable layered counter-UAS architecture",
      "ao": "ASB2 (lead) + SIO",
      "suspense": "25 Aug 2026",
      "recommendation": "Approve ASB2 as sole executive agent to build one integrated, affordable, layered counter-UAS / sense-strike architecture spanning sensing, C2, soft-kill (RF/EW), directed energy and kinetic interceptors — replacing the five separate awareness/decision threads previously tracked (II-2, II-4, II-6, III-1, III-10, III-14).",
      "whyNow": "Multiple independent US and allied programmes converged from demonstration to production scale within the same 30-day window: CACI's SkyValor IDIQ (up to $500M) and AeroVironment's Titan task order (~$80M) are already fielding; the Army separately issued an RFI for a sub-$150K interceptor (NGCM, responses due 20 Aug); a $3B Patriot/THAAD industrial-base framework was signed 3 Aug; and NATO/EU have committed $40B+ and €11B respectively to allied counter-drone production. Tracking these as five separate items risks Army arriving late with an uncosted, unintegrated response after allies and the threat have already moved.",
      "armyProblem": "Army has no single, funded, layered counter-UAS architecture spanning detection through kinetic/non-kinetic defeat, and no stated position on the affordability trade (cheap mass-produced interceptors vs. exquisite systems) that every peer and ally is now making in parallel.",
      "options": [
        {
          "course": "Option A — Sponsor a layered C-UAS trial (sensing + soft-kill + DE + kinetic) against Army's own small-UAS threat envelope, benchmarked against the SkyValor/NGCM and allied low-cost-interceptor models, with a costed adoption recommendation.",
          "tradeoff": "Highest near-term relevance and fastest path to a fielding decision; requires dedicated ASB2 trial budget and range access this cycle."
        },
        {
          "course": "Option B — Commission a comparative options paper only (no trial): SkyValor, NGCM, PAC-3 ACE/Freyja-style interceptors and allied DE systems assessed against Army's threat envelope and cost ceiling.",
          "tradeoff": "Lower cost and faster to produce, but defers the fielding decision and risks Army falling further behind allied procurement cycles."
        },
        {
          "course": "Option C — Defer to the next portfolio review; continue awareness-only tracking.",
          "tradeoff": "No resource commitment now, but concedes the pace-setting position this paper argues against, and any future acquisition happens later and at a worse price point than allies already committing at scale."
        }
      ],
      "implications": "Cost and manpower implications depend on the option selected; a costed estimate is TBD pending ASB2 input. Programmatically, this decision consolidates and closes out five previously separate awareness/monitor lines, reducing SIO's standing tasking load to ASB2 from six threads to one.",
      "directionSought": "Approve/reject/defer — select Option A, B or C, and confirm ASB2 as sole accountable owner.",
      "deliverable": "Option paper with costed trial proposal (Option A) or comparative assessment (Option B)",
      "deliverableDate": "2026-08-25",
      "decision": "Approve ASB2 as sole owner of one consolidated, affordable, layered counter-UAS/sense-strike architecture decision, replacing five separate threads.",
      "signal": "This decision consolidates six previously separate threads into one capability question — how Army should build an affordable, layered counter-UAS and sense-strike architecture. [Fielded] JIATF-401 converted a border-tested evaluation into a three-year, up-to-$500M IDIQ for CACI's SkyValor non-kinetic detect-and-defeat system (RF jamming plus net-capture) after a two-day demonstration at Yuma (DefenseScoop, 31 Jul); AeroVironment's Titan task order (~$80M) is already fielding AI-enabled RF detect-and-defeat at Air Force bases. [Fielded] The Army converted a $4.7B one-year Patriot deal into a $58.6B FY26-32 multiyear buy (30 Jul), tripling PAC-3 MSE production; a further $3B Patriot/THAAD component framework followed 3 Aug (Northrop Grumman, L3Harris). [Reported] Lockheed's sub-$2M PAC-3 ACE interceptor (Farnborough, 20 Jul) and a 10-nation coalition backing Ukraine's ~$700K Freyja/FP-7.X system (Paris, 14 Jul) both hedge against exquisite-interceptor cost; DIU's Ground-Based Affordable Mass call (27 Jul) applies the same logic to offence. [Reported] The Army's Next Generation Counter-sUAS Missile RFI (4 Aug) seeks a purpose-built sub-$150K interceptor; responses due 20 Aug. [Demonstrated] Directed energy is moving toward fielding in parallel: the Pentagon's Joint Laser Weapon System programme (Lockheed Aculight, nLIGHT — up to $847M ceiling) is scaling 150kW counter-drone lasers to 300-500kW cruise-missile defence, and Germany has commissioned a naval laser targeted for fielding by 2029 after 28,000nm of at-sea demonstration. [Reported — state-linked, corroborate] China is showcasing and exporting a parallel man-portable-to-naval laser C-UAS line (Harbin Xinguang 'Lijian', CPMIEC LW-30, Novasky NI-L3K) to Gulf and SE Asian markets — vendor/state claims requiring independent corroboration of demonstrated performance; not yet independently verified as fielded at declared performance levels. [Reported] AeroVironment/Applied Intuition's Acuity autonomy software (29 Jul) is moving single-operator, multi-drone swarm control from demonstrator toward the Army Launched Effects programme of record. [Reported] NATO (7 Jul, $40B+ five-year package) and the EU-Ukraine Drone Deal (15 Jul, €11B total) are funding allied counter-drone mass production and interoperability standards at alliance scale.",
      "sowhat": "Every element of a layered C-UAS/sense-strike architecture (sensing, soft-kill, directed energy, kinetic interceptors) is moving from demonstration to production somewhere in the alliance within the same 30-day window, at costs and quantities well characterised in open reporting. Treated separately, these understate the urgency and duplicate ASB2 tasking; treated as one architecture question, this is Army's most evidenced, most consolidated and most immediately actionable capability decision this edition.",
      "action": "ASB2, as sole accountable owner with SIO in support, to produce the option paper/trial proposal specified above by 25 Aug 2026.",
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
        }
      ]
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
      "owner": "ASB2",
      "supporting": [],
      "desk": "US",
      "desk2": "EU",
      "maturity": "fielded (adversary system — see signal); Army posture: gap",
      "verdict": "gap",
      "confidence": "high",
      "status": "overdue",
      "raised": "Apr 2026",
      "age": 16,
      "supersedes": [
        "II-1"
      ],
      "dlabel": "Spectrum-survivable C2",
      "ao": "ASB2 Sense-Strike",
      "suspense": "15 Sep 2026",
      "recommendation": "Endorse spectrum-survivable, low-signature C2 as a funded CapDev line under ASB2, with a named baseline architecture and EW threat model delivered by the suspense date.",
      "whyNow": "The threat side of this gap is no longer theoretical: Russia has fielded a dedicated counter-Starlink jammer (Volna Kupol Garant, ~20km² suppression radius; Reuters via Militarnyi, 8 Jul) — proof that comms-dependent C2 and uncrewed datalinks are now a live, fielded EW target, not a future risk. AI-accelerated signal analysis and adaptive jamming are maturing in parallel (DefenseScoop, 11 May / 26 Jun), narrowing the window before a comparable capability is turned against Army C2. This decision has been open since April without a delivered study; CSIO flagged the lapsed 28-July suspense on 6 Aug.",
      "armyProblem": "Army's command posts and C2/uncrewed datalinks have no stated spectrum-survivability standard, and no baseline for what 'low-signature' means in practice against an AI-accelerated EW threat that has already fielded a Starlink-class jammer.",
      "options": [
        {
          "course": "Option A — Fund a spectrum-survivable C2 baseline-architecture study (signature management, resilient/alternate comms paths, anti-jam datalinks) benchmarked against the demonstrated Volna Kupol Garant-class threat.",
          "tradeoff": "Establishes a concrete, testable standard; requires ASB2 to commission EW threat-modelling support it may not currently hold in-house."
        },
        {
          "course": "Option B — Direct an immediate signature-reduction posture review of current command-post SOPs as an interim measure, pending the fuller architecture study.",
          "tradeoff": "Faster, lower-cost first step; does not by itself close the underlying capability gap."
        }
      ],
      "implications": "Resource implications are TBD pending ASB2 scoping; likely touches C2 architecture, datalink hardware refresh, and EW threat-modelling capacity or contracted support.",
      "directionSought": "Approve Option A, Option B, or both in sequence; confirm the revised 15 Sep 2026 suspense.",
      "deliverable": "Spectrum-survivable C2 baseline-architecture study",
      "deliverableDate": "2026-09-15",
      "decision": "Prioritise spectrum-survivable, low-signature C2 as a funded CapDev line; deliver baseline study by 15 Sep 2026.",
      "signal": "[Fielded — adversary system] Electronic warfare is described as an hourly fight in which fixed C2 assets are treated as liabilities, and it is accelerating: AI-enabled EW (automated signal analysis, adaptive jamming) is maturing fast (DefenseScoop, 11 May / 26 Jun) while peer forces routinely jam and spoof GNSS. Russia has fielded a dedicated counter-Starlink system, Volna Kupol Garant, able to suppress satellite-comms links across roughly 20km² (Reuters via Militarnyi, 8 Jul) — a fielded, not theoretical, EW capability confirming that comms-dependent C2 and uncrewed links are now a contested spectrum target in their own right, not just a navigation/GNSS problem.",
      "sowhat": "This is Army's clearest capability-gap decision this edition: resilient, low-signature C2 that survives an EW threat that is now demonstrably fielded, not projected. The gap sits in the DE/EMS priority and must be closed ahead of, not after, a comparable jammer is turned against Army systems.",
      "action": "ASB2 to deliver the baseline-architecture study by 15 Sep 2026, accounting for AI-accelerated EW.",
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
        }
      ]
    },
    {
      "id": "D-3",
      "category": "capability",
      "tier": "decision",
      "pf": "X",
      "tech": [
        "ai",
        "robo"
      ],
      "dom": "safety",
      "owner": "SIO",
      "supporting": [
        "ASB2",
        "ASB3"
      ],
      "desk": "US",
      "maturity": "demonstrated (single developmental test, human-in-the-loop)",
      "confidence": "high",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 0,
      "supersedes": [
        "III-7"
      ],
      "dlabel": "Autonomous strike-authority doctrine",
      "ao": "SIO (lead) + ASB2 + ASB3",
      "suspense": "15 Sep 2026",
      "recommendation": "Direct a cross-portfolio (not ASB2-only) review of autonomous strike-authority safeguards, human-machine command relationships, and assurance/testing doctrine, triggered by the first live weapons release from a Collaborative Combat Aircraft.",
      "whyNow": "An Anduril YFQ-44A CCA fired a live AIM-120 AMRAAM at a digital target from Edwards AFB (DefenseScoop, 15 Jul) — the first live weapons release from an uncrewed CCA platform. The Air Force states human operators retain exclusive control over weapon release throughout; a General Atomics YFQ-42A live-fire test is expected this autumn. This is a single developmental test with human authority intact — not evidence of autonomous weapon employment — but it is the concrete trigger to settle Army's own doctrine before a comparable platform is closer to fielding.",
      "armyProblem": "Army has no stated position on human-authority safeguards, assurance/test standards, or CONOPS for any future manned-unmanned teaming or loyal-wingman platform that carries a live weapon — a policy gap that will recur across every autonomous-strike-capable line in the portfolio (CCA-analogues, loitering munitions, USV strike), not a single-programme matter.",
      "options": [
        {
          "course": "Option A — Commission a cross-portfolio policy paper defining Army's human-authority-retention standard and assurance/test criteria for any future autonomous-strike platform, using the YFQ-44A test and CENTCOM's Corsair USV strike (see W-1) as reference cases.",
          "tradeoff": "Produces a durable, reusable doctrine standard; requires input beyond ASB2 (legal/policy, ASB3 net-assessment, CESS)."
        },
        {
          "course": "Option B — Limit scope to ASB2's existing platform-level tracking; revisit only if a specific Army programme reaches this maturity.",
          "tradeoff": "Lower effort now, but repeats treating a doctrine-level question as a single platform matter, and leaves Army answering reactively rather than ahead of the event."
        }
      ],
      "implications": "Primarily a policy/doctrine resourcing question (legal, assurance/T&E standards) rather than a hardware programme; cost implications are minimal at this stage but TBD pending scope confirmation.",
      "directionSought": "Approve Option A (cross-portfolio) or Option B (status quo); confirm SIO as accountable owner.",
      "deliverable": "Cross-portfolio autonomous strike-authority policy paper",
      "deliverableDate": "2026-09-15",
      "decision": "Assess autonomous strike-authority safeguards and CONOPS as a cross-portfolio policy question, not an ASB2 platform matter.",
      "signal": "[Demonstrated — single developmental test, human-in-the-loop] An Anduril YFQ-44A Collaborative Combat Aircraft fired an AIM-120 AMRAAM at a digital target over the Mojave Desert from Edwards AFB — the first live weapons release from a CCA drone (DefenseScoop, 15 Jul; corroborated by Breaking Defense and Air & Space Forces Magazine). The Air Force states humans retain exclusive control over weapon release throughout; a General Atomics YFQ-42A live-fire test is expected this autumn. Framing note: this is a controlled test of a human-authorised release, not autonomous weapon employment — on the maturity ladder this sits at 'demonstrated', not 'proven' in an operational-employment sense.",
      "sowhat": "Tests the edge of sensor-to-shooter autonomy and is the concrete trigger for a doctrine question that will recur across the portfolio: as uncrewed platforms increasingly carry live weapons (CCA-analogues here; the Corsair USV strike in W-1), Army needs one settled position on human-authority retention and assurance standards, not a platform-by-platform answer.",
      "action": "SIO, with ASB2 and ASB3 in support, to deliver the cross-portfolio autonomous strike-authority policy paper by 15 Sep 2026.",
      "src": [
        {
          "out": "DefenseScoop",
          "date": "15 Jul 2026",
          "ttl": "Air Force reaches CCA milestone with live-firing of missile from Anduril's robotic fighter jet",
          "url": "https://defensescoop.com/2026/07/15/air-force-live-fire-test-missile-anduril-cca-drone/",
          "f": "verified",
          "note": "Corroborated by Breaking Defense and Air & Space Forces Magazine."
        }
      ]
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
      "owner": "ASB2",
      "supporting": [
        "ASB3",
        "SIO"
      ],
      "desk": "US",
      "desk2": "EU",
      "maturity": "mixed (reported – combat-proven; see signal)",
      "confidence": "high",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 0,
      "supersedes": [
        "II-5",
        "III-4",
        "III-6",
        "III-8",
        "III-12"
      ],
      "dlabel": "Maritime autonomy — attritable USV strike & sensing",
      "ao": "ASB2 (lead) + ASB3 + SIO",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "CENTCOM's 12 Jul combat strike by armed Saronic Corsair USVs against Iran's Bandar Abbas base (a Ghadir-class midget sub and port infrastructure hit) remains the most significant single event in this cluster; Saronic followed with a $3.2B Port Alpha shipyard announcement (16 Jul) signalling production scale-up, not an isolated demonstration.",
      "changeFromPrevious": "No new maritime-autonomy events since the last edition (4 Aug); this line is unchanged pending the DIU SWAP-USV solicitation deadline (10 Aug) and the Navy's high-capacity MUSV RPP (from 1 Aug).",
      "armyRelevance": "Indirect — Army has no stated littoral operating requirement; relevance is currently limited to the command-authority and production-model precedent this cluster feeds into D-3, rather than a direct Army capability need.",
      "escalationTrigger": "Escalate to a decision only if Army identifies a defined littoral/riverine requirement, a funding sponsor, or a specific participation mechanism in the SWAP-USV or MUSV programmes.",
      "decision": "Hold at watchlist pending a defined Army littoral requirement.",
      "signal": "[Combat-proven] CENTCOM conducted the first US combat use of lethal unmanned surface vessels: three armed Saronic Corsair one-way-attack USVs struck Iran's Bandar Abbas naval base (12 Jul), hitting a Ghadir-class midget submarine and port infrastructure, run as a CENTCOM operation outside the Navy's standing Task Force 59 framework (USNI News, 13 Jul; corroborated by Naval News, TWZ, Stars and Stripes, Military Times, The Aviationist). Saronic followed with a $3.2B 'Port Alpha' shipyard announcement at Port of Brownsville, TX (USNI News, 16 Jul) — production capacity, not an isolated demonstration. [Demonstrated] The Navy's GARC attritable USV detonated against the decommissioned USS Peleliu in a RIMPAC 2026 SINKEX (25-29 Jul; Naval News/TWZ/Military Times) — first GARC live-fire kill, built explicitly on lessons from Ukraine's Black Sea USV campaign; the 16ft BlackSea Technologies craft carries a 1,000lb payload over 700nm at 22kt and is designed to swarm. [Reported] DIU/Navy issued the SWAP-USV solicitation for market-ready attack-drone-carrying USVs ($100M prize purse + $200M follow-on procurement; responses due 10 Aug, Military Times, 29 Jul). [Reported] The Navy opened the next MUSV 'marketplace' phase (a high-capacity variant RPP from 1 Aug, Defense One) atop an existing 47-vessel-by-2031 acquisition goal; separately a UK-US team (Kraken/Capewell, Royal Navy Project Beehive) completed the first airdrop of a USV from an A400M (The Defense Post/Naval News, 10 Jul). [Reported] AUKUS signed its first Pillar 2 project — joint uncrewed-underwater-vehicle development, first payloads due 2027 (Breaking Defense, 31 May).",
      "sowhat": "Five separate maritime-autonomy threads (attack-USV solicitation, AUKUS UUV cooperation, MUSV/airdrop delivery models, armed-USV combat debut, GARC live-fire kill) are one thematic watch line, not five items, per CSIO's 6 Aug direction — held at watchlist because no Army littoral requirement has been identified.",
      "action": "ASB2 to monitor SWAP-USV and MUSV outcomes; escalate only against a defined Army trigger.",
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
        }
      ]
    },
    {
      "id": "W-2",
      "category": "capability",
      "tier": "watchlist",
      "pf": "P7",
      "tech": [
        "robo",
        "ai",
        "dews"
      ],
      "dom": "solution",
      "owner": "CESS",
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
      "age": 0,
      "supersedes": [
        "II-3",
        "III-3",
        "III-5",
        "III-13",
        "III-15",
        "I-9"
      ],
      "dlabel": "Ground autonomy & sustainment under contested spectrum",
      "ao": "CESS (lead) + ASB1 + AOTO",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "No new developments since 4 Aug; DARPA's Lift Challenge (heavy-lift drone benchmark) is mid-competition (2-9 Aug, Dayton OH), with results expected after this edition's close.",
      "changeFromPrevious": "Unchanged since last edition; awaiting Lift Challenge results.",
      "armyRelevance": "Direct — EW-resilient UGV control, multi-role attritable ground platforms, RF-free inventory automation and maintenance-free power sources all map onto Army's own contested-logistics and forward-sustainment gaps; no Army-specific trial is yet underway.",
      "escalationTrigger": "Escalate to a decision if Army stands up a sustainment-autonomy trial, or if DARPA Lift Challenge results (due after 9 Aug) validate a payload-to-weight ratio directly usable against an Army lift requirement.",
      "decision": "Hold at watchlist; escalate on trial sponsorship or Lift Challenge results.",
      "signal": "[Fielded — adversary/partner] Ground robots face intense EW pressure — Russian wide-area GNSS jammers degrade UGV datalinks and navigation — and Ukraine has fielded a control system (Droid Box, cleared 26 Jun) that detects positioning anomalies and applies countermeasures under jamming/spoofing (Militarnyi/Modern War Institute). [Fielded] Ukraine's Protector UGV is fielded for frontline logistics and being converted into a mobile launch platform for interceptor drones and a Tryzub laser, against a stated goal of 25,000 ground robotic systems by mid-2026 (Defense Express/United24 Media); Brave1 has opened a grant competition for humanoid combat robots (The Defense Post, 3 Jul) — a new form factor added to the existing UGV line. [Reported→fielding] A ground-autonomy firm won a Marine Corps production contract for autonomous ground vehicles, and the Corps is separately integrating UGVs into its MADIS counter-drone system (Breaking Defense/Army Recognition, late Jun). [Reported] MARSOC/SOFWERX are developing an RF-free, computer-vision 'automated armory' for serialized-weapon inventory tracking (DefenseScoop, 28 Jul). [Reported] DARPA's Lift Challenge (100+ teams, 2-9 Aug, $6.5M prizes) targets a 2:1 payload-to-weight ratio for 55lb-class drones lifting 110lb payloads (Military Times, 30 Jul). [Reported] DARPA's Rads to Watts programme (7 competing teams) is developing radiovoltaic cells for maintenance-free, multi-year power in soldier-worn, sensor and space applications (Breaking Defense, 29 Jul) — a cross-cutting enabler for any sustainment-autonomy line in this cluster.",
      "sowhat": "Five separate ground-autonomy/sustainment threads plus the DARPA power-source signal are one capability question per CSIO's 6 Aug direction: 'autonomous sustainment and unmanned ground operations under contested-spectrum conditions.'",
      "action": "CESS to monitor Lift Challenge results and flag any Army-specific trial opportunity for escalation.",
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
          "out": "Army Recognition",
          "date": "27 Jun 2026",
          "ttl": "US Marine Corps modernizes MADIS counter-drone system with autonomous ground vehicles",
          "url": "https://www.armyrecognition.com/news/army-news/2026/u-s-marine-corps-modernizes-madis-counter-drone-system-with-autonomous-ground-vehicles",
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
          "out": "The Defense Post",
          "date": "3 Jul 2026",
          "ttl": "The next soldier? Ukraine begins hunt for more humanoid combat robots",
          "url": "https://thedefensepost.com/2026/07/03/ukraine-humanoid-combat-robots/",
          "f": "verified"
        },
        {
          "out": "DefenseScoop",
          "date": "28 Jul 2026",
          "ttl": "Marine commandos aim to automate armories with computer vision, other tech",
          "url": "https://defensescoop.com/2026/07/28/marine-forces-special-operations-command-automated-armory-marsoc/",
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
        }
      ]
    },
    {
      "id": "W-3",
      "category": "capability",
      "tier": "watchlist",
      "pf": "P6",
      "tech": [
        "data",
        "ai"
      ],
      "dom": "solution",
      "owner": "ADIO",
      "supporting": [
        "SIO"
      ],
      "desk": "US",
      "maturity": "mixed (operationally evaluating – fielding-track)",
      "confidence": "moderate",
      "status": "not_started",
      "raised": "Aug 2026",
      "age": 0,
      "supersedes": [
        "III-2"
      ],
      "dlabel": "C2 / data-layer integration architecture",
      "ao": "ADIO (lead) + SIO",
      "suspense": "Pending ADIO architecture input — see note",
      "latestDevelopment": "No new open-source development since 4 Aug; the last confirmed movement was Project Convergence Capstone 6 (July) validating the NGC2 common-data-layer baseline at division scale.",
      "changeFromPrevious": "Unchanged.",
      "armyRelevance": "Not yet established against Army's own architecture. CSIO (6 Aug) directed this be reframed against the Army Data Store, ENCLAVE, STRONGWATCH and the OUTREACH/SYNTEX integration roadmap. SIO Insights holds no verified open-source information on those internal systems and will not fabricate that comparison — this line is held at watchlist, unexpanded, pending ADIO input.",
      "escalationTrigger": "Escalate to a decision once ADIO provides the current Army Data Store / ENCLAVE / STRONGWATCH / OUTREACH-SYNTEX baseline for comparison. Until then this remains an open-source NGC2/Maven watch item, not an Army-specific integration study.",
      "note": "CSIO critique (6 Aug 2026) directed this entry be reframed against existing Army data architecture rather than approved as a generic NGC2 study. That reframe requires internal Army-architecture facts not available to this open-source pipeline; ADIO input is a precondition for this line to mature into a decision, not an optional enhancement.",
      "decision": "Hold at watchlist — do not approve a generic NGC2 study; awaiting ADIO architecture baseline.",
      "signal": "[Operationally evaluating] The US Army's Next Generation Command and Control (NGC2) programme moved from prototyping toward delivery: a named common-data-layer baseline (Anduril lead; Palantir edge-to-cloud data mesh) underwent division-scale force-on-force validation at Project Convergence Capstone 6 (July; Army.mil/DefenseScoop, 20-22 Jun). [Reported — single source, not independently corroborated] Project Maven is reported to be transmitting near-fully machine-generated intelligence to commanders using large language models (CSIS, 15 Jun).",
      "sowhat": "The open-source evidence describes a US programme's maturity, not an Army-specific integration decision. Per CSIO's correction, this cannot be responsibly converted into 'approve a study of the NGC2 delivery model' without first anchoring it to Army's own Data Store/ENCLAVE/STRONGWATCH/ADIO roadmap — information this pipeline does not hold.",
      "action": "ADIO to provide the current Army Data Store / ENCLAVE / STRONGWATCH / OUTREACH-SYNTEX integration baseline; SIO to hold this at watchlist pending that input.",
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
        }
      ]
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
      "owner": "A4",
      "supporting": [
        "ASB3",
        "SIO"
      ],
      "desk": "APAC",
      "maturity": "mixed (reported – fielded; state-linked claims, corroborate)",
      "confidence": "moderate",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 0,
      "supersedes": [
        "I-3",
        "I-6",
        "I-10"
      ],
      "dlabel": "PRC AI-C2, autonomy & missile net-assessment",
      "ao": "A4 (lead) + ASB3 + SIO net-assessment",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "A CCTV documentary (制胜/'Zhisheng', PLA 99th-anniversary programming) revealed a PLA 'intelligent strike planning system' — prioritising targets, sequencing attack waves, assigning unit tasking for large-scale aerial operations (SCMP, 3 Aug; paywalled, state-linked footage).",
      "changeFromPrevious": "New since last edition (4 Aug): the strike-planning-system reveal is a concrete instance of AI-into-C2 fusion, extending beyond the surveillance/target-recognition applications previously tracked.",
      "armyRelevance": "Net-assessment input only — informs Army's own C2/EW design margins and export-control posture; not a direct Army procurement question.",
      "escalationTrigger": "Escalate to a decision if independent (non-PRC-state) reporting confirms operational fielding of the AI strike-planning system, or if a comparable capability is confirmed against a partner force.",
      "decision": "Maintain as the standing PRC AI/autonomy/missile net-assessment line.",
      "signal": "[Reported, state-linked — corroborate] Commercial AI providers (reported: DeepSeek, Alibaba, Tencent, Zhipu, Huawei-linked infrastructure) are being folded into a national military ecosystem for surveillance, target recognition, war-gaming and C2. PLA Daily (30 Jun) frames a future 'technological strategy' around AI-enabled C2 resistant to EW; Hong Kong reporting describes an 'AI Plus' push into PLA EW while warning PLA training may lag the hardware. A Reuters review (31 Jul) of 80+ Chinese academic papers/patents found PLA-linked units (Unit 96941, NUDT, Academy of Military Sciences) using 'model distillation' to train domestic defence AI on US-model outputs (OpenAI GPT-3.5/GPT-3, Anthropic Claude 3 Haiku) — a route sidestepping US chip export controls. Xi Jinping (Politburo study session, 30 Jul) directed the military to 'strengthen the military application of unmanned intelligent technologies' — elevating this to explicit top-down doctrine. [Reported, state-linked — 3 Aug] A CCTV PLA-99th-anniversary documentary revealed an 'intelligent strike planning system' (team under Senior Colonel Deng Jianping) that prioritises targets, sequences attack waves and assigns unit tasking across hundreds of targets/dozens of formations (SCMP, paywalled). [Reported, state-linked — corroborate] CETC's 'Atlas' system demonstrated ~96-drone single-operator swarm control, and a separate PLA demonstration put ~200 jam-resistant drones under one soldier using an anti-jamming algorithm for comms-independent cooperation — Western analysis assesses these as selective but real PLA bets on battlefield AI. The China-Russia 'Joint Sea-2026' exercise (Qingdao, 6-13 Jul) featured extensive unmanned-surface-vessel and counter-UAS tactics per Russian officials, independently corroborated by Defence Security Asia. [Reported, state-linked — corroborate] China's first confirmed YJ-20 hypersonic anti-ship missile (Mach 6+ cruise, ~1,000-1,500km range) launch came from a Type 052D destroyer rather than the Type 055 flagship (CCTV/Global Times trailer, 29 Jul; independently corroborated by The War Zone and Army Recognition) — with roughly 35 Type 052D hulls in service versus 10 Type 055s, this distributes a flagship-exclusive weapon across the fleet's numerical core.",
      "sowhat": "One net-assessment line covering how the PLA is fusing commercial-grade AI into C2/strike-planning, fielding autonomous swarm doctrine, and distributing long-range strike capability across its numerically dominant hull classes — three facets of the same adversary capability trajectory that Army's C2, EW and fleet-defence-adjacent concepts should track together, not as three separate awareness lines. Confidence is capped at moderate because a majority of the specific capability claims trace to PRC state media or state-linked footage; independent corroboration exists for the broad trend (Reuters model-distillation review, Western analyst commentary, The War Zone/Army Recognition) but not for every individual performance claim.",
      "action": "A4, with ASB3 and SIO net-assessment in support, to maintain this as the standing PRC AI/autonomy/missile net-assessment line and flag confirmed fielding events for escalation.",
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
        }
      ]
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
      "owner": "SIO",
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
      "age": 0,
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
      "ao": "SIO (lead) + ADIO + ASB3",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "Japan's Cabinet adopted its 2026 defence white paper (4 Aug), for the first time giving dedicated treatment to a 'new way of warfare' naming drones and AI as central design elements, alongside China's expanding Pacific reach (Nippon.com/Jiji Press, The Diplomat, 4 Aug).",
      "changeFromPrevious": "New since last edition: the Japan white paper is the first entrant in this cluster since 28 Jul (Task Force Talon Synapse).",
      "armyRelevance": "Indicative only — signals how peer institutions (US, Israel, Japan, Australia, Germany) are restructuring acquisition, force-design and vendor relationships around AI/autonomy; informs Army's own concept-design and acquisition-pattern choices (see I-1) but does not itself require an Army decision.",
      "escalationTrigger": "Escalate to a decision if any single thread (e.g. DRPM-UxS consolidation, the Talon Synapse classification-sharing model) produces a concrete interoperability or co-production opportunity Army could join.",
      "decision": "Maintain as a standing comparator line for the I-1 concept-design pilot.",
      "signal": "[Reported] The Pentagon is reportedly shifting AI acquisition from monolithic platforms toward modular, multi-vendor, auditable architectures (Federal News Network, 18 Jun). [Fielded — organisational] A Defense Secretary memo (1 Jul) created the Direct Reporting Portfolio Manager for Unmanned Systems (DRPM-UxS), consolidating nearly all US unmanned programmes under one integrator (~$75B FY27 request); the Army realigned its Mission Autonomy office and DIU restructured around drones/autonomous-warfare, commercial-space 'kill webs' and '10x technologies' teams (USNI/DefenseScoop/Breaking Defense, 1-15 Jul). [Reported — organisational] Israel's IDF Chief of Staff announced (8 Jul) a new General Staff structure for robotics/drones/AI, mirroring the US consolidation; IAI's 'Hypnosis' EW system (16 Jul) is an early capability output. [Fielded — capital/policy] Germany's Helsing closed a $1.8B Series E (Europe's largest defence-tech round, $18B valuation, 13 Jul) while the Pentagon suspended CMMC Phase 2 cybersecurity certification requirements the same week, standing up a 60-day Reform Task Force — both lowering the barrier for non-traditional vendors. [Fielded — organisational] CENTCOM and the UAE stood up Task Force Talon Synapse (28 Jul), the first bilateral AI task force (~20 personnel, Abu Dhabi), with classification-sharing rules flagged as the unresolved constraint. [Demonstrated] Australia's MQ-28 Ghost Bat flew alongside crewed fighters in Valiant Shield 26 (27 Jul); PACAF and the RAAF are exploring 'operator-to-operator' command architectures letting US pilots command Ghost Bat drones directly — an interoperability precedent. [Reported] Japan's 2026 defence white paper (4 Aug) names drones and AI as central to a 'new way of warfare', shortlisting four drone makers for rapid development advancing to navy testing.",
      "sowhat": "A single 'how are peer institutions organising for the AI/autonomy shift' line, useful as a concept-design and acquisition-pattern comparator (feeds I-1's pilot sprint directly) but — per CSIO's Deficiency #3 — this is asserted portfolio relevance, not a demonstrated Army requirement, and is held at watchlist accordingly.",
      "action": "SIO to maintain this as a standing comparator line for the I-1 concept-design pilot and flag any thread that produces a concrete Army opportunity.",
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
          "out": "Ynetnews",
          "date": "16 Jul 2026",
          "ttl": "IAI reveals 'Hypnosis' system to disrupt and neutralize drone swarms",
          "url": "https://www.ynetnews.com/article/sjsdeuwezx",
          "f": "verified"
        },
        {
          "out": "Defense News",
          "date": "13 Jul 2026",
          "ttl": "Helsing raises $1.8 billion in Europe's biggest defense-startup round",
          "url": "https://www.defensenews.com/global/europe/2026/07/13/helsing-raises-18-billion-in-europes-biggest-defense-startup-round/",
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
        }
      ]
    },
    {
      "id": "W-6",
      "category": "capability",
      "tier": "watchlist",
      "pf": "P5",
      "tech": [
        "robo",
        "ai",
        "data"
      ],
      "dom": "solution",
      "owner": "ASB2",
      "supporting": [
        "SIO"
      ],
      "desk": "US",
      "maturity": "mixed (reported – demonstrated)",
      "confidence": "moderate",
      "status": "in_progress",
      "raised": "Aug 2026",
      "age": 0,
      "supersedes": [
        "III-9",
        "III-16"
      ],
      "dlabel": "Space-domain sensing, autonomy & acquisition",
      "ao": "ASB2 (lead) + SIO",
      "suspense": "Trigger-based — see escalationTrigger",
      "latestDevelopment": "True Anomaly's Jackal-004 executed the first space-to-space pursuit of an intentionally evading target under VICTUS HAZE tasking (Payload, 3 Aug) — an escalation from July's cooperative-target tracking demo.",
      "changeFromPrevious": "New since last edition: the VICTUS HAZE pursuit demo is the first development in this cluster since 17 Jul (Golden Defender shipbuilder award).",
      "armyRelevance": "Indirect — autonomy and sensor-fusion techniques (30-minute autonomous re-planning against a manoeuvring, non-cooperative target) are directly analogous to the onboard decision-making problem in Army's own sense-strike concepts, even though the platform domain (space) is outside Army's mission set.",
      "escalationTrigger": "Escalate to a decision only if a terrestrial/aerial analogue of the autonomous non-cooperative-pursuit technique becomes available for Army evaluation.",
      "decision": "Hold at watchlist; monitor for terrestrial/aerial autonomy read-across.",
      "signal": "[Reported — one source unverified] Golden Dome's satellite architecture moved from contractor selection to hardware buys: after naming 12 companies for space-based interceptors (Apr, up to $3.2B), SDA awarded L3Harris (~$955M) and Sierra Space (~$798M) for 36 Tranche 3 tracking/warning satellites, and resumed the Tranche 1 Transport Layer launch campaign (21 more York Space satellites, 16 Jul) — a specific nine-month-pause narrative traces to one Defense One report not independently corroborated in this window. MDA separately selected Hanwha Philly Shipyard/TOTE Services to build 'Golden Defender' missile-range instrumentation vessels. [Demonstrated] True Anomaly's Jackal-004, on Space Systems Command tasking, produced a validated pursuit plan within 30 minutes, closed to ~10km of an actively-manoeuvring Rocket Lab Puma satellite, and used onboard multi-object detection to generate its own orbit estimates without ground cueing (Payload, 3 Aug) — the first space-to-space pursuit of an intentionally evading target, escalating from a cooperative-tracking demo in July.",
      "sowhat": "A space-domain sensing/autonomy watch line: the acquisition scale-up (Golden Dome) and the autonomy demonstration (VICTUS HAZE) are both relevant as technique/acquisition-model benchmarks, not as direct Army capability lines.",
      "action": "ASB2 to monitor for terrestrial/aerial read-across opportunities from the VICTUS HAZE autonomy technique.",
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
      ]
    },
    {
      "id": "I-1",
      "category": "process",
      "tier": "decision",
      "pf": "X",
      "tech": [
        "ai",
        "robo"
      ],
      "dom": "solution",
      "owner": "SIO",
      "supporting": [],
      "desk": "US",
      "status": "overdue",
      "raised": "Apr 2026",
      "age": 16,
      "dlabel": "Concept-design pilot sprint",
      "ao": "SIO Concepts cell",
      "suspense": "5 Sep 2026",
      "recommendation": "Endorse a time-boxed (approx. 2-week) first-principles concept-design pilot sprint on 2-3 NAMED operational problems (not the full portfolio at once), with confirmed SIO Concepts-cell participants and a defined output (one concept note per problem).",
      "whyNow": "The underlying signal — that standing plans are being overtaken by cheap autonomy and compressed kill chains — hasn't changed since April, but the original framing ('design it today' across the portfolios) was open-ended enough that CSIO could not endorse it as written (6 Aug critique). A bounded pilot lets SIO demonstrate the method before committing portfolio-wide.",
      "armyProblem": "SIO's own concept-design method has not been tested at pilot scale; endorsing a portfolio-wide sprint without first proving the method on a bounded problem set risks a diffuse, unresourced effort.",
      "options": [
        {
          "course": "Option A — Run one time-boxed pilot sprint on 2-3 named operational problems (SIO to nominate), with a fixed output (one concept note per problem) and named participants, before considering portfolio-wide rollout.",
          "tradeoff": "Lower risk, provides a testable proof of method; delays the full cross-portfolio ambition of the original proposal."
        },
        {
          "course": "Option B — Do not endorse; close this item.",
          "tradeoff": "No resourcing draw, but forgoes the concept-currency benefit CSIO agreed the underlying signal identifies."
        }
      ],
      "implications": "SIO Concepts-cell time only, at pilot scale (Option A); no broader resourcing commitment until the pilot reports out.",
      "directionSought": "Approve Option A (bounded pilot) or Option B (close).",
      "deliverable": "One concept note per named operational problem (2-3 notes)",
      "deliverableDate": "2026-09-05",
      "decision": "Endorse a bounded, time-boxed concept-design pilot sprint on named problems — not an open-ended, portfolio-wide sprint.",
      "signal": "Unchanged since April: a recurring argument holds that standing operational plans are overtaken by cheap autonomy, compressed kill chains and commercial-grade capability, with once-peripheral firms now present-tense operational realities (DefenseScoop, 11 May; Bloomberg feature, 5 Jul, paywalled).",
      "sowhat": "This is the CapDev mandate in one signal: shape future operating concepts as emerging tech reshapes the possible. CSIO's correction (6 Aug) — endorse only a bounded, time-boxed pilot with named problems, participants and outputs — converts this from an open-ended aspiration into a testable first step.",
      "action": "SIO Concepts cell to scope and run the pilot sprint per the approved option, reporting concept notes by 5 Sep 2026.",
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
      ]
    }
  ],
  "feed": [
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
      "serial": "D-3",
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
  ]
};
