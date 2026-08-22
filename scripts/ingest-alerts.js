#!/usr/bin/env node
/*
 * SIO Insights — Google Alerts RSS ingest (Step 0 of the pipeline)
 *
 * Fetches the Google Alerts RSS feeds configured in scripts/alerts-feeds.json,
 * unwraps Google's redirect links to canonical article URLs, deduplicates
 * against data.js and previously-seen items, pre-tags each hit from the
 * matching alert's tech/pf/question mapping, and writes a structured intake
 * file for triage.
 *
 * This script does DISCOVERY ONLY — the machine half of the human-machine
 * boundary in DOCTRINE.md (§10/§25): fetch, structure, link, dedupe.
 * It never writes to data.js. Triage against the Army Question Register
 * (material-change test, outlet verification, summary writing) remains a
 * generator/analyst step.
 *
 * Usage:
 *   node scripts/ingest-alerts.js              # fetch, dedupe, write intake file
 *   node scripts/ingest-alerts.js --dry-run    # print table only, save nothing
 *   node scripts/ingest-alerts.js --all        # include already-seen items
 *
 * Output:
 *   intake/alerts-<YYYY-MM-DD>.json  — structured candidates for the Generator
 *   intake/seen.json                 — persistent set of processed URLs
 *   stdout                           — markdown triage table
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, 'alerts-feeds.json'), 'utf8'));
const INTAKE_DIR = path.join(ROOT, 'intake');
const SEEN_PATH = path.join(INTAKE_DIR, 'seen.json');
const DRY = process.argv.includes('--dry-run');
const ALL = process.argv.includes('--all');

/* ---------- helpers ---------- */

function fetchUrl(url, redirects) {
  redirects = redirects || 0;
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'SIO-Insights-ingest/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 3) {
        res.resume();
        return resolve(fetchUrl(res.headers.location, redirects + 1));
      }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode + ' for ' + url)); }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', c => body += c);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&amp;/g, '&');
}

/* Atom fields with type="html" arrive entity-encoded (often doubly): decode
   first so tags become real, strip them, then decode the remaining entities. */
function stripTags(s) { return decodeEntities(decodeEntities(s).replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim(); }

/* Google Alerts wraps links: https://www.google.com/url?...&url=<canonical>&... */
function unwrapGoogleUrl(href) {
  try {
    const u = new URL(href);
    if (u.hostname.endsWith('google.com') && u.pathname === '/url') {
      const target = u.searchParams.get('url') || u.searchParams.get('q');
      if (target) return target;
    }
  } catch (e) { /* fall through */ }
  return href;
}

/* Canonicalise for dedupe: drop query/fragment/trailing slash, lowercase host, strip amp */
function canonKey(url) {
  try {
    const u = new URL(url);
    let p = u.pathname.replace(/\/amp\/?$/, '').replace(/\/$/, '');
    return (u.hostname.toLowerCase().replace(/^www\./, '') + p);
  } catch (e) { return url; }
}

/* Parse an Atom feed (Google Alerts format) into entries. */
function parseAtom(xml) {
  const entries = [];
  const blocks = xml.split(/<entry\b[^>]*>/).slice(1);
  for (const raw of blocks) {
    const block = raw.split('</entry>')[0];
    const title = (block.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1] || '';
    const href = (block.match(/<link[^>]*href="([^"]+)"/) || [])[1] || '';
    const published = (block.match(/<published>([\s\S]*?)<\/published>/) || [])[1] || '';
    const content = (block.match(/<content[^>]*>([\s\S]*?)<\/content>/) || [])[1] || '';
    if (!href) continue;
    entries.push({
      title: stripTags(title),
      url: unwrapGoogleUrl(decodeEntities(href)),
      published: published.slice(0, 10),
      snippet: stripTags(content).slice(0, 300)
    });
  }
  return entries;
}

/* ---------- load dedupe state ---------- */

function loadDataJsUrls() {
  const keys = new Set();
  try {
    globalThis.window = {};
    require(path.join(ROOT, 'data.js'));
    for (const f of (window.SIO_DATA.feed || [])) keys.add(canonKey(f.url));
    for (const s of (window.SIO_DATA.serials || []))
      for (const src of (s.src || [])) keys.add(canonKey(src.url));
  } catch (e) {
    console.error('warn: could not load data.js for dedupe (' + e.message + ')');
  }
  return keys;
}

function loadSeen() {
  try { return new Set(JSON.parse(fs.readFileSync(SEEN_PATH, 'utf8'))); }
  catch (e) { return new Set(); }
}

/* ---------- main ---------- */

(async () => {
  const feeds = [];
  if (CONFIG.merged && CONFIG.merged.url) feeds.push({ id: 'MERGED', url: CONFIG.merged.url });
  for (const f of (CONFIG.feeds || [])) if (f.url) feeds.push(f);
  if (!feeds.length) {
    console.error('No feed URLs configured. Paste the Google Alerts RSS feed URLs into scripts/alerts-feeds.json');
    console.error('(Google Alerts → alert → "Deliver to: RSS feed" → copy the feed link.)');
    process.exit(1);
  }

  const inDataJs = loadDataJsUrls();
  const seen = loadSeen();
  const candidates = [];
  const skipped = { dupData: 0, dupSeen: 0, dupBatch: 0 };
  const batch = new Set();

  for (const feed of feeds) {
    let xml;
    try { xml = await fetchUrl(feed.url); }
    catch (e) { console.error('warn: fetch failed for ' + feed.id + ': ' + e.message); continue; }
    for (const entry of parseAtom(xml)) {
      const key = canonKey(entry.url);
      if (batch.has(key)) { skipped.dupBatch++; continue; }
      batch.add(key);
      if (inDataJs.has(key)) { skipped.dupData++; continue; }
      if (!ALL && seen.has(key)) { skipped.dupSeen++; continue; }
      let outlet = '';
      try { outlet = new URL(entry.url).hostname.replace(/^www\./, ''); } catch (e) {}
      candidates.push({
        alert: feed.id,
        date: entry.published,
        title: entry.title,
        outlet: outlet,
        url: entry.url,
        snippet: entry.snippet,
        suggestedTech: feed.tech || [],
        suggestedPf: feed.pf || [],
        suggestedQuestions: feed.questions || [],
        triage: null
      });
    }
  }

  candidates.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  /* stdout: triage table */
  console.log('# Alerts intake — ' + new Date().toISOString().slice(0, 10));
  console.log('');
  console.log('| date | alert | title | outlet | suggested Q |');
  console.log('|------|-------|-------|--------|-------------|');
  for (const c of candidates) {
    console.log('| ' + c.date + ' | ' + c.alert + ' | ' + c.title.slice(0, 80) + ' | ' + c.outlet + ' | ' + c.suggestedQuestions.join(' ') + ' |');
  }
  console.log('');
  console.log(candidates.length + ' new candidates · skipped: ' + skipped.dupData + ' already in data.js, '
    + skipped.dupSeen + ' previously seen, ' + skipped.dupBatch + ' in-batch duplicates');
  console.log('');
  console.log('Next: triage each candidate against the Army Question Register per DOCTRINE.md');
  console.log('(material-change test §23; problem-first §24; drop what affects no question).');

  if (DRY) return;

  fs.mkdirSync(INTAKE_DIR, { recursive: true });
  const outPath = path.join(INTAKE_DIR, 'alerts-' + new Date().toISOString().slice(0, 10) + '.json');
  fs.writeFileSync(outPath, JSON.stringify({ generated: new Date().toISOString(), candidates: candidates }, null, 2));
  for (const c of candidates) seen.add(canonKey(c.url));
  fs.writeFileSync(SEEN_PATH, JSON.stringify([...seen].sort(), null, 2));
  console.log('wrote ' + outPath + ' and updated intake/seen.json');
})();
