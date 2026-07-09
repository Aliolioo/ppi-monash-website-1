# Security

PPI Monash Malaysia's website is a **static single-page app** (React + Vite) with
no backend and no database. There are no user accounts, no payments, and no
server-side code — which removes most classic web-app attack surface. This
document records the protections that live in the repo and the few that must be
configured at the host.

## What's implemented in the repo

- **Content-Security-Policy** (meta tag in `index.html`) restricts resource
  loading to this origin plus the only trusted third parties the site uses:
  - scripts: self + `https://www.googletagmanager.com` (Google Analytics, consent-gated)
  - styles: self + inline styles + `https://fonts.googleapis.com`
  - fonts: self + `https://fonts.gstatic.com`
  - images: self + `data:` + `https:`
  - connections: self + `https://docs.google.com` (Google Forms) + `*.google-analytics.com` / `*.googletagmanager.com`
  - `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `upgrade-insecure-requests`
  > If you change analytics or form providers, update `script-src` / `connect-src`
  > accordingly.
- **Referrer-Policy** `strict-origin-when-cross-origin` (meta tag).
- **External links** all use `target="_blank"` together with
  `rel="noopener noreferrer"` (prevents tab-nabbing / referrer leakage).
- **Markdown link sanitisation** — the tiny renderer in
  `src/utils/markdown.js` only allows `http`, `https`, `mailto`, and `tel`
  schemes (plus relative URLs) in `[text](url)` links, after stripping
  whitespace tricks. This blocks `javascript:` / `data:` / `vbscript:` XSS in
  migrated or external article content.
- **No `dangerouslySetInnerHTML`** anywhere — all content renders as escaped
  React children, so stored content cannot inject markup.
- **Analytics is consent-gated** — Google Analytics only loads after the visitor
  accepts the cookie banner, and only when `VITE_GA_MEASUREMENT_ID` is set (off by
  default). `.env` is git-ignored; `.env.example` documents the (non-secret)
  config. There are no API keys or secrets in the client bundle.
- **Form input limits** — the inquiry and feedback forms cap field lengths
  (`maxLength`) and are client-side only (nothing is transmitted or stored yet).
- **Dependencies** — `npm audit` is clean (run it before each release).

## What must be set at the host (HTTP headers)

A few protections can only be delivered as real HTTP response headers, which
**GitHub Pages cannot set**. If/when the site is served through a custom domain
behind Cloudflare, Netlify, or similar, add these:

| Header | Recommended value |
| --- | --- |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` (or CSP `frame-ancestors 'none'` as a header) |
| `Permissions-Policy` | `geolocation=(), camera=(), microphone=(), interest-cohort=()` |
| `Content-Security-Policy` | mirror the meta-tag policy (headers take precedence) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |

**Netlify** — drop a `public/_headers` file:

```
/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Permissions-Policy: geolocation=(), camera=(), microphone=()
  Referrer-Policy: strict-origin-when-cross-origin
```

**Cloudflare** — set the same via a Transform Rule (Response Header
Modification) or the Managed Transforms "Add security headers" toggle.

## If the forms ever get a backend

The inquiry and feedback forms are currently client-only. Before wiring them to
Google Forms, an email service, or an API:

- Validate and sanitise **server-side** (never trust the client).
- Add rate limiting and a spam/bot check (honeypot or CAPTCHA).
- Send over HTTPS only; don't log full message bodies with PII.
- Update the CSP `connect-src` / `form-action` to include the endpoint.

## Reporting a vulnerability

Email **ppimonashmalaysia@gmail.com** with details and steps to reproduce.
Please give us a reasonable window to respond before any public disclosure.
