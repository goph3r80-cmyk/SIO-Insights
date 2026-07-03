/*
 * Webhook signature verification for the SIO Insights GitHub App.
 *
 * GitHub signs every webhook delivery with the App's webhook secret using
 * HMAC-SHA256 and sends the digest in the `X-Hub-Signature-256` header.
 * Verify it before trusting any payload. Dependency-free (Node built-ins).
 *
 * Usage in a receiver (raw body required — do NOT use a parsed body):
 *
 *   const { verifyWebhook } = require('./scripts/webhook-verify');
 *   const ok = verifyWebhook(
 *     rawBody,                              // Buffer or string, exactly as received
 *     req.headers['x-hub-signature-256'],   // e.g. "sha256=abcd..."
 *     process.env.GITHUB_APP_WEBHOOK_SECRET
 *   );
 *   if (!ok) return res.writeHead(401).end('bad signature');
 */

'use strict';

const crypto = require('crypto');

/**
 * @param {Buffer|string} rawBody   Raw request body, byte-for-byte as delivered.
 * @param {string} signatureHeader  Value of the X-Hub-Signature-256 header.
 * @param {string} secret           The App's webhook secret.
 * @returns {boolean}               True only if the signature is valid.
 */
function verifyWebhook(rawBody, signatureHeader, secret) {
  if (!secret || !signatureHeader) return false;

  const expected =
    'sha256=' + crypto.createHmac('sha256', secret).update(rawBody).digest('hex');

  const a = Buffer.from(expected);
  const b = Buffer.from(signatureHeader);

  // Length check guards timingSafeEqual, which throws on mismatched lengths.
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

module.exports = { verifyWebhook };
