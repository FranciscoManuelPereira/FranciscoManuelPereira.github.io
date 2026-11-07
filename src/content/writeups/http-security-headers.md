---
title: 'Building a security headers checker: what each header protects'
description: 'The nine checks behind my security-headers-checker CLI, what attack each one blocks, and how the grade is calculated.'
date: 2026-11-07
tags: ['HTTP headers', 'CSP', 'HSTS', 'Node.js']
---

Security headers are one of the cheapest ways to make a website harder to attack: a few lines of server
configuration, no code changes. They are also one of the most often forgotten. I built
[security-headers-checker](https://github.com/FranciscoManuelPereira/security-headers-checker), a small Node.js
command-line tool, to check them quickly and explain the fix for each one.

```
shc example.com
```

## What it checks

### Content-Security-Policy (25 points)

The main defence against cross-site scripting (XSS). It tells the browser which sources scripts, styles and other
resources may load from, so an injected `<script>` will not run. The checker flags policies that allow
`'unsafe-inline'` (without a nonce or hash), `'unsafe-eval'` or any host, and policies missing `object-src` and
`base-uri`.

### Strict-Transport-Security (20 points)

Forces the browser to use HTTPS for future visits, so someone on the same Wi-Fi cannot downgrade the connection to
HTTP. A `max-age` of at least six months and `includeSubDomains` get full marks.

### Clickjacking protection (10 points)

Without `frame-ancestors` in the CSP (or the older `X-Frame-Options`), another site can load your page in an
invisible frame and trick users into clicking buttons on it.

### X-Content-Type-Options (10 points)

`nosniff` stops browsers guessing a file's type, so a user-uploaded file cannot be run as a script.

### Referrer-Policy (10 points)

Controls how much of the current URL is sent to other sites. Full URLs can contain password reset tokens or IDs.

### Cookies (10 points)

Every cookie should be `Secure` (only sent over HTTPS), `HttpOnly` (unreadable by JavaScript, so XSS cannot steal
it) and have a `SameSite` value (which helps against CSRF).

### Permissions-Policy, Cross-Origin-Opener-Policy and version disclosure (5 points each)

Turning off browser features you do not use, isolating your page from windows it opens, and not advertising
software versions such as `Server: Apache/2.4.41`, which point attackers to known vulnerabilities.

## How the grade works

Each check returns points out of its maximum. The total becomes a score out of 100 and a letter: A from 90,
B from 75, C from 60, D from 45, E from 30, F below. The `--fail-under` option makes the tool exit with an error
below a given score, so it can run in a CI pipeline and catch a header that disappears after a deploy.

## Design choices

- **No dependencies.** Node.js has `fetch` built in, so there is nothing to install and nothing to keep patched.
- **Pure, testable checks.** Every check is a function that takes a `Headers` object and returns a finding, so the
  test suite runs without touching the network.
- **Fixes, not just failures.** Each problem comes with the exact header to add.

## Limits

It checks the headers of one page, not TLS configuration or the page's content. It is a quick first look, not a
replacement for a full security review.

Only scan sites you own or have permission to test.
