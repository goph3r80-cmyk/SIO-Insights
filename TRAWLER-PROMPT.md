# SIO Insights — Trawler Prompt (Step 1)

Paste this whole file into Claude (or your chosen LLM) **with web search
enabled**. It sweeps open-source defence-technology news and produces the raw
**feed** — one row per unique story — which the Generator (Step 2) then turns
into `data.js`.

Do not synthesise SIO decisions here. The trawler's job is discovery, tagging,
and deduplication only. Analysis happens in the Generator.

---

## Your task

Scan the sources below for defence-technology industry developments published
in the **trawler window** (default: the last 7 days; for the automated daily
run, the last ~48 hours). For each unique story, extract a structured row.
Deduplicate multi-outlet coverage. Flag anything paywalled or unreachable.

Output a Markdown table (schema below) plus a short **Signals to Watch**
section. Keep it to genuine defence-tech capability developments — funding,
contracts, fieldings, doctrine/analysis, tests, and threat/net-assessment
signals. Skip routine politics, opinion with no capability content, and
consumer-tech noise.

---

## Sources

**How to work the list.** You cannot open everything every run. Each run: sweep
**all of Tier 1**; dip into **Tier 2** analysis and the **domain specialists**
relevant to the week's stories; and rotate through the **regional desks** and
**Tier 3 wires** to catch what the trade press missed. Prefer primary reporting;
use aggregators only to corroborate. Respect the flag conventions — `paywall`
for subscription walls, `unverified` for blocked/unconfirmed. Treat
**state-controlled outlets** (marked ⚠) as *signals of what an actor wants said*,
never as confirmed fact — always corroborate and flag.

### Tier 1 — Greater: daily defence trade press (scan every run)

- Defense News — https://www.defensenews.com
- Breaking Defense — https://breakingdefense.com
- DefenseScoop — https://defensescoop.com
- C4ISRNET — https://www.c4isrnet.com
- Defense One — https://www.defenseone.com
- The Defense Post — https://thedefensepost.com
- Inside Defense — https://insidedefense.com  *(paywall)*
- Janes — https://www.janes.com  *(paywall)*
- Defense Daily — https://www.defensedaily.com  *(paywall)*
- National Defense (NDIA) — https://www.nationaldefensemagazine.org
- Shephard Media — https://www.shephardmedia.com
- Defense Industry Daily — https://www.defenseindustrydaily.com
- Military.com — https://www.military.com
- Military Times family (Army/Navy/AF/Marine Corps Times) — https://www.militarytimes.com
- Stars and Stripes — https://www.stripes.com
- Task & Purpose — https://taskandpurpose.com
- The War Zone (TWZ) — https://www.twz.com
- Army Recognition — https://www.armyrecognition.com
- The Defence Blog — https://defence-blog.com

### Tier 2 — Analysis, journals & think tanks (harvest when fresh)

- RUSI — https://www.rusi.org
- IISS (+ Military Balance) — https://www.iiss.org
- CSIS — https://www.csis.org  *(see also Missile Threat, Aerospace Security)*
- CNAS — https://www.cnas.org
- RAND — https://www.rand.org
- SIPRI — https://www.sipri.org
- Chatham House — https://www.chathamhouse.org
- Atlantic Council — https://www.atlanticcouncil.org
- Hudson Institute — https://www.hudson.org
- War on the Rocks — https://warontherocks.com
- Modern War Institute (West Point) — https://mwi.westpoint.edu
- CIMSEC (maritime) — https://cimsec.org
- Texas National Security Review — https://tnsr.org
- Lawfare — https://www.lawfaremedia.org
- Institute for the Study of War (ISW) — https://www.understandingwar.org
- Jamestown Foundation — https://jamestown.org
- NATO Review — https://www.nato.int/review

### Domain specialists (pull for the matching capability tag)

- **Naval** — USNI News https://news.usni.org · Naval News https://www.navalnews.com · Naval Technology https://www.naval-technology.com
- **Air / aerospace** — Aviation Week https://aviationweek.com · FlightGlobal https://www.flightglobal.com · Air & Space Forces Magazine https://www.airandspaceforces.com · The Aviationist https://theaviationist.com
- **Space** — SpaceNews https://spacenews.com · Payload https://payloadspace.com · Via Satellite https://www.satellitetoday.com
- **Cyber / EW / signals** — The Record https://therecord.media · CyberScoop https://cyberscoop.com · Breaking Defense (Networks) · C4ISRNET (above)
- **Land / autonomy** — Army Recognition (above) · The War Zone (above) · Overt Defense https://www.overtdefense.com
- **Missiles / nuclear / arms control** — Arms Control Wonk https://www.armscontrolwonk.com · Bulletin of the Atomic Scientists https://thebulletin.org

### Tier 3 — Wire services & general press (breaking + corroboration)

- Reuters (Aerospace & Defense) — https://www.reuters.com/business/aerospace-defense/
- Associated Press — https://apnews.com
- Agence France-Presse — https://www.afp.com/en
- Bloomberg — https://www.bloomberg.com  *(paywall)*
- Financial Times — https://www.ft.com  *(paywall)*
- Wall Street Journal — https://www.wsj.com  *(paywall)*
- The Economist — https://www.economist.com  *(paywall)*
- Politico (Morning Defense / Pro) — https://www.politico.com/defense
- Axios — https://www.axios.com
- CNBC Defense — https://www.cnbc.com/defense
- BBC — https://www.bbc.com/news/world
- The Guardian — https://www.theguardian.com/world

### Regional desks — Lesser / national outlets

**US desk** — RealClearDefense https://www.realcleardefense.com · The Hill (Defense) https://thehill.com/policy/defense · Breaking Defense (above) · DoD News https://www.defense.gov/News/

**EU / UK / NATO desk**
- European Security & Defence — https://euro-sd.com
- European Defence Review (EDR) — https://www.edrmagazine.eu
- UK Defence Journal — https://ukdefencejournal.org.uk
- Forces News (UK) — https://www.forces.net
- Euronews (Defence) — https://www.euronews.com/tag/defence
- Opex360 / Zone Militaire (France) — https://www.opex360.com
- Meta-Defense (France) — https://www.meta-defense.fr/en/
- Mer et Marine (France, naval) — https://www.meretmarine.com
- Analisi Difesa (Italy) — https://www.analisidifesa.it
- Defensa.com (Spain) — https://www.defensa.com
- Hartpunkt (Germany) — https://www.hartpunkt.de
- Defence24 (Poland) — https://defence24.com
- **Ukraine war** — Defense Express https://en.defence-ua.com · Militarnyi https://mil.in.ua/en/ · Kyiv Independent https://kyivindependent.com · United24 Media https://united24media.com · Oryx (OSINT losses) https://www.oryxspioenkop.com

**APAC desk**
- Nikkei Asia (Defense) — https://asia.nikkei.com/Politics/Defense  *(paywall)*
- The Diplomat (Asia Defense) — https://thediplomat.com/category/asia-defense/
- Asia Pacific Defence Reporter (Australia) — https://asiapacificdefencereporter.com
- Australian Defence Magazine — https://www.australiandefence.com.au
- ASPI The Strategist (Australia) — https://www.aspistrategist.org.au
- Asian Military Review — https://www.asianmilitaryreview.com
- Defence Security Asia (SE Asia) — https://defencesecurityasia.com
- Defence Review Asia (Singapore) — https://defencereviewasia.com
- The Straits Times (Singapore) — https://www.straitstimes.com  *(paywall)*
- Yonhap (Korea) — https://en.yna.co.kr · NK News — https://www.nknews.org  *(paywall)*
- **India** — idrw.org https://idrw.org · Raksha Anirveda https://raksha-anirveda.com · Livefist https://www.livefistdefence.com · ThePrint (Defence) https://theprint.in/category/defence/ · Indian Defence News https://www.indiandefensenews.in
- SCMP (China/Asia) — https://www.scmp.com  *(paywall)*
- Military Watch Magazine — https://militarywatchmagazine.com  *(opinionated — corroborate)*
- ⚠ Global Times / Xinhua (China state) — https://www.globaltimes.cn

**ME desk**
- Times of Israel (IDF) — https://www.timesofisrael.com/topic/idf-israel-defense-forces/
- The Jerusalem Post — https://www.jpost.com
- i24NEWS — https://www.i24news.tv/en
- Ynetnews — https://www.ynetnews.com
- AGBI (Gulf business/defence) — https://www.agbi.com/sectors/defence/
- The National (UAE) — https://www.thenationalnews.com
- Al-Monitor — https://www.al-monitor.com
- Middle East Eye — https://www.middleeasteye.net
- Al Jazeera — https://www.aljazeera.com
- ⚠ Press TV / Tasnim (Iran state) — treat as adversary signalling

**Other regions (lesser)**
- Africa — defenceWeb — https://www.defenceweb.co.za
- Latin America — Infodefensa https://www.infodefensa.com · Zona Militar https://www.zona-militar.com
- ⚠ Russia state — TASS https://tass.com · RIA/Sputnik — adversary signalling only

### Primary & OSINT sources (high-signal, use directly)

- **Government / procurement** — DoD contract announcements https://www.defense.gov/News/Contracts/ · DARPA https://www.darpa.mil · SAM.gov · GAO https://www.gao.gov · UK MoD/DE&S · European Defence Agency https://eda.europa.eu
- **Industry** — prime & startup press releases (Anduril, Palantir, Lockheed Martin, RTX, etc.), SEC filings, and defence-VC announcements — for funding/contract items
- **OSINT** — Oryx (equipment losses), ISW daily updates, and reputable open-source analysts — corroborate before treating as fact

Add or remove sources here as coverage needs change. When you add one, note its
typical flag (open / `paywall` / ⚠ state-controlled) so downstream runs handle it
consistently.

---

## What to extract per story (the `feed` row)

| Field | Meaning | Example |
|-------|---------|---------|
| `date` | Publication date, **ISO `YYYY-MM-DD`** | `2026-06-30` |
| `out` | Outlet name | `Breaking Defense` |
| `ttl` | Headline (verbatim or lightly trimmed) | `Overland AI nets Marine Corps AGV contract` |
| `sum` | 1–2 sentence factual summary (no SIO framing) | `A ~$20M production deal for autonomous ground vehicles…` |
| `tech` | Array of capability tags (see below) | `["robo"]` |
| `pf` | Portfolio code (see below; reuse existing codes) | `P4` |
| `desk` | Primary country desk | `US` |
| `url` | Canonical article URL (`https://…`) | `https://…` |
| `f` | Credibility/availability flag | `verified` |
| `note` | Optional caveat (only for `paywall` / `unverified`) | `Body behind paywall.` |

The Generator adds `serial`, `saved`, and `flagged`; you do **not** set those.

### `tech` — capability tags (pick one or more)

| Tag | Domain | Covers |
|-----|--------|--------|
| `ai` | AI | AI-driven C2, targeting, autonomous decision support, ML models |
| `data` | Data & Digital | data layers, digital transformation, cyber, comms, command infrastructure |
| `robo` | Robotics / autonomy | UGVs, UAVs, counter-UAS, loitering munitions, MUM-T, swarms |
| `dews` | DE / EMS / Materials | directed energy, electronic warfare, spectrum, advanced materials, energetics |

### `desk` — country desks

| Desk | Coverage |
|------|----------|
| `US` | US companies, procurement, policy, analysis |
| `EU` | Europe, UK, NATO, Ukraine, industrial base |
| `APAC` | Indo-Pacific — Australia, Japan, South Korea, India, China, Taiwan, SE Asia |
| `ME` | Middle East, Israel, Gulf states |

### `pf` — portfolio codes

Reuse the codes already present in `data.js` (e.g. `P2`, `P4`, `P5`, `P6`,
`P7`, `P9`, and `X` for cross-cutting/overarching signals). Assign the closest
existing portfolio; if a story genuinely fits none, tag `X` and flag it in
Signals to Watch rather than inventing a new code.

### `f` — flags

| Flag | Meaning |
|------|---------|
| `verified` | Source accessible, date confirmed, from a reputable outlet |
| `paywall` | Behind a paywall — headline/metadata captured, body inaccessible (`note` required) |
| `unverified` | Source unreachable (403/geo-block/down) or a claim unconfirmed (`note` required) |

---

## Deduplication

- Same event across multiple outlets → **one** row, using the most authoritative
  outlet as `out`. List corroborating outlets in the Signals notes so the
  Generator can populate the serial's `src[]`.
- Subtle rewrites of the same story (same date/company/event) → collapse to one.
- Genuinely different angles on the same event (capability vs geopolitics) →
  keep both only if each carries distinct capability signal.

## Dates

- Always ISO `YYYY-MM-DD`. If only month/year is known, use the first of the
  month and add a `note` ("date approximate").

---

## Output format

1. **Feed table** — one row per unique story, newest first:

   ```
   | date | out | ttl | sum | tech | pf | desk | url | f | note |
   ```

2. **Signals to Watch** — 3–6 short bullets naming emerging themes, cross-outlet
   corroboration (which stories reinforce each other), and any capability area
   worth a future serial. This is the raw material the Generator uses to cluster
   feed rows into serials.

Hand the full output to the Generator (Step 2) unchanged.
