# SIO Insights GitHub App

A private GitHub App that lets the weekly pipeline authenticate to the repo
programmatically — committing a refreshed `data.js` and opening the refresh PR
without a personal access token. This document is the setup and operations
guide.

## Why an App (not a PAT)

- **Scoped, least-privilege access** — only `contents`, `pull_requests`,
  `metadata`, and `actions`, only on the repos where it is installed.
- **Short-lived tokens** — installation tokens expire after one hour; nothing
  long-lived sits in CI.
- **Own identity** — commits and PRs are authored by *SIO Insights Bot*, not a
  human's account.
- **Webhooks** — the App can react to `push` / `pull_request` events.

## Configuration files

| File | Purpose |
|------|---------|
| `.github/github-app-manifest.yml` | Source of truth: name, permissions, events, webhook config. |
| `docs/github-app/register.html` | One-click registration via GitHub's App Manifest flow. |
| `.env.example` | Credentials template (copy to `.env`, never commit). |
| `scripts/webhook-verify.js` | Dependency-free `X-Hub-Signature-256` verification. |

## 1. Register the App

GitHub's [App Manifest flow](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app-from-a-manifest)
turns the manifest into a real App and hands back the credentials — you never
type permissions into a form by hand.

1. Open `docs/github-app/register.html` in a browser (double-click, or serve it
   with `npx serve docs/github-app`).
2. Set the account, optionally a webhook URL, and a redirect URL.
3. Click **Create App on GitHub**. Confirm on the GitHub page that opens.
4. GitHub redirects to your redirect URL with `?code=<temporary-code>`.
5. Exchange the code within one hour for the permanent credentials:

   ```bash
   curl -X POST https://api.github.com/app-manifest/<temporary-code>/conversions \
     -H "Accept: application/vnd.github+json"
   ```

   The response contains `id` (App ID), `pem` (private key), `client_id`,
   `client_secret`, and `webhook_secret`.

> No server for the redirect? Register manually instead: **Settings → Developer
> settings → GitHub Apps → New GitHub App**, and copy the permissions/events
> from `.github/github-app-manifest.yml`.

## 2. Store the credentials

```bash
cp .env.example .env
```

Fill in the values from step 1. Save the `pem` to the path named in
`GITHUB_APP_PRIVATE_KEY_PATH` (default `./sio-insights-app.private-key.pem`).
`.env` and `*.pem` are git-ignored.

For CI, store the same values as repository/organization **secrets** rather than
a committed `.env`.

## 3. Install on the repo

On the App's page choose **Install App**, then select
`goph3r80-cmyk/sio-insights` (Only select repositories). After installing, grab
the installation id — it appears in the install URL and in the
`installation.id` field of every webhook — and set `GITHUB_APP_INSTALLATION_ID`.

## 4. Authenticate at runtime

Mint a short-lived installation token from the App credentials, e.g. with
[`@octokit/auth-app`](https://github.com/octokit/auth-app.js):

```js
const { createAppAuth } = require('@octokit/auth-app');
const { Octokit } = require('@octokit/rest');
const fs = require('fs');

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.GITHUB_APP_ID,
    privateKey: fs.readFileSync(process.env.GITHUB_APP_PRIVATE_KEY_PATH, 'utf8'),
    installationId: process.env.GITHUB_APP_INSTALLATION_ID,
  },
});

// Commit a refreshed data.js and open the weekly PR with octokit.rest.*
```

## 5. Handle webhooks

Point the App's webhook (`hook_attributes.url` in the manifest) at your
receiver and verify every delivery:

```js
const { verifyWebhook } = require('./scripts/webhook-verify');

if (!verifyWebhook(rawBody, req.headers['x-hub-signature-256'],
                   process.env.GITHUB_APP_WEBHOOK_SECRET)) {
  return res.writeHead(401).end('bad signature');
}
```

`rawBody` must be the exact bytes received — verify **before** JSON-parsing.

## Permissions reference

| Permission | Level | Why |
|------------|-------|-----|
| `contents` | write | Commit the refreshed `data.js`. |
| `pull_requests` | write | Open the weekly refresh PR instead of pushing to `main`. |
| `metadata` | read | Mandatory baseline (auto-granted). |
| `actions` | write | Optional — trigger the deploy workflow via API. |

Subscribed events: `push`, `pull_request`. Trim either the permissions or the
events in the manifest if your integration needs less, then re-register.
