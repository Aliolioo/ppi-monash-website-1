# PPI Monash Malaysia Website 🇮🇩

> **Eunoia** — Your Indonesian Community at Monash Malaysia

A bilingual (English / Bahasa Indonesia) React + Vite website for PPI Monash
Malaysia, built for easy handoff between annual committees.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173/ppi-monash-website-1/
```

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint check |

## Updating content

**~90% of changes are just editing [`src/config/siteConfig.js`](src/config/siteConfig.js)** —
events, articles, team, FAQs, partners, leadership history, etc. Translatable
fields take either a plain string or `{ en, id }`.

## Project structure

```
src/
├── config/                ⭐ content/data, split per section
│   ├── siteConfig.js          barrel (import from here)
│   └── events.js, articles.js, team.js, faqs.js, …
├── i18n/                  EN/ID translations + helpers
├── pages/                 one file per route
├── components/            shared UI (navbar, cards, hero, forms)
├── utils/                 data + markdown + analytics helpers
└── styles/global.css      all styling
docs/                      content & ops guides
```

## Documentation

| Doc | What's in it |
|---|---|
| [CONTRIBUTING.md](CONTRIBUTING.md) | **Team workflow — start here** |
| [docs/MIGRATING_ARTICLES.md](docs/MIGRATING_ARTICLES.md) | Moving articles from the old WordPress site |
| [docs/FORMS.md](docs/FORMS.md) | Registration / pre-order forms with QR payment |
| [SECURITY.md](SECURITY.md) | Security posture & reporting |

## Working as a team

Don't commit straight to `main` — branch, open a Pull Request, let CI run, then
merge. Full details in [CONTRIBUTING.md](CONTRIBUTING.md). The big rule: most
content is in one large file (`siteConfig.js`), so **coordinate who edits it**
to avoid merge conflicts.

## Deployment

Automatic via GitHub Actions: merging to `main` builds and publishes to GitHub
Pages (~1 min, see the **Actions** tab). One-time setup: repo → Settings →
Pages → **Source: "GitHub Actions"**.

## Tech

React 19 · React Router · Vite · vanilla CSS · Google Fonts · optional cookieless
analytics (Plausible-compatible).

---

Built with care for PPI Monash Malaysia. 🤙
