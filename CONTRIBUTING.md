# Contributing

Welcome! This guide is for committee members and friends helping build the
PPI Monash Malaysia website. It's a normal React + Vite project on GitHub —
no prior experience with the repo required.

## 1. Prerequisites

- **Node.js 20+** (check with `node --version`)
- **Git** and a **GitHub account**
- Ask the repo owner to add you as a **collaborator**
  (repo → Settings → Collaborators), or **fork** the repo and send Pull Requests.

## 2. Get it running locally

```bash
git clone https://github.com/Aliolioo/ppi-monash-website-1.git
cd ppi-monash-website-1
npm install
npm run dev      # http://localhost:5173/ppi-monash-website-1/
```

Useful scripts:

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint check (must pass before a PR) |

## 3. Where things live

```
src/
├── config/siteConfig.js   ⭐ ALL content/data (events, articles, team, FAQ, …)
├── i18n/                  EN/ID translations (strings.js) + helpers
├── pages/                 one file per route (/about, /events/:id, …)
├── components/            shared UI (Navbar, cards, Hero, forms, …)
├── utils/                 data helpers (events, articles, markdown, analytics, …)
└── styles/global.css      all styling
docs/                      content & ops guides (forms, article migration)
```

**90% of edits are just `src/config/siteConfig.js`.** See `docs/` for content
guides (e.g. `docs/MIGRATING_ARTICLES.md`, `docs/FORMS.md`).

## 4. The workflow (please don't commit straight to `main`)

```bash
git checkout main && git pull            # always start from latest main
git checkout -b feat/short-description   # your own branch
# ...make changes, save...
npm run lint && npm run build            # must both pass
git add -A
git commit -m "feat(events): add welcome night event"
git push -u origin feat/short-description
# then open a Pull Request on GitHub
```

- **Branch names:** `feat/...`, `fix/...`, `content/...`, `docs/...`
- **Commit messages:** start with a type — `feat:`, `fix:`, `content:`,
  `docs:`, `style:`, `chore:` — then a short description.
- Open a **Pull Request**, get a quick review, then **Merge**. CI (lint + build)
  runs automatically on every PR; it must be green to merge.

## 5. ⚠️ The one big coordination rule: `siteConfig.js`

Almost all content lives in the single large file `src/config/siteConfig.js`.
If two people edit it at the same time you'll get merge conflicts. So:

- **Say what you're touching** ("I'm editing events, you take articles").
- Keep PRs **small** and merge them quickly.
- Always `git pull` before starting.

## 6. Bilingual content (EN / ID)

Translatable fields accept either a plain string **or** `{ en: "...", id: "..." }`.
A plain string shows in both languages; use the object form once you have an
Indonesian translation. UI labels (buttons, headings) live in
`src/i18n/strings.js`. After any UI change, toggle the language switcher and
check both languages.

## 7. House rules

- Don't commit secrets/keys. Config goes through `VITE_*` env vars; `.env` is
  gitignored (`.env.example` documents what's available).
- External links: always `target="_blank" rel="noopener noreferrer"`.
- Don't use `dangerouslySetInnerHTML`.
- Keep `npm run lint` and `npm run build` green.

## 8. Deployment (automatic)

You **don't** deploy manually. When a PR is merged into `main`, the
**Deploy to GitHub Pages** GitHub Action builds and publishes the site
(~1 minute). Watch progress in the repo's **Actions** tab.

> One-time setup by the owner: repo → Settings → Pages → **Source: "GitHub
> Actions"**. (The old `npm run deploy` / `gh-pages` flow is no longer needed.)
