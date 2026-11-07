---
title: 'Why this site ships a strict Content Security Policy'
description: 'A short note on how this portfolio is hardened, and what GitHub Pages can and cannot do.'
date: 2026-11-07
tags: ['CSP', 'HTTP headers']
---

This site is static and hosted on GitHub Pages, which does not let you set custom HTTP response headers.
To still get a meaningful **Content-Security-Policy**, the policy is delivered with a `<meta http-equiv>` tag
and the build ships no inline scripts or styles, so the policy can be as strict as:

```
default-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'; base-uri 'self'
```

## Limits of a meta-tag policy

- `frame-ancestors` is ignored in a meta tag, so clickjacking protection needs a real header.
- Headers like `Strict-Transport-Security` or `X-Content-Type-Options` cannot be set at all.

Putting a CDN such as Cloudflare in front of the site would allow adding those headers later.
