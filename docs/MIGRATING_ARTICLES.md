# Migrating Articles from the Old WordPress Site

All articles live in **one place**: the `ARTICLES` array in
[`src/config/siteConfig.js`](../src/config/siteConfig.js). There's no database
and no admin panel — you add an article by adding an object to that array.

A ready-to-copy **placeholder** (`id: "placeholder-article"`) sits at the bottom
of the array. It's marked `draft: true`, so it stays hidden from the live site
until you're done.

---

## Quick steps

1. Open `src/config/siteConfig.js` and find the `ARTICLES` array.
2. **Duplicate** the `placeholder-article` object (or copy the template from the
   comment just above the array).
3. Fill in the fields (see the reference below).
4. Convert the WordPress body to the simple text format (see "Body formatting").
5. While drafting, keep `draft: true` and preview at
   `/articles/<your-id>` (the page renders even for drafts — it just won't show
   in listings or on the homepage).
6. When it's ready, set `draft: false` (or remove the line) → it now appears in
   the Articles listing and, if `featured: true`, on the homepage.

---

## Field reference

| Field | What goes in it |
| --- | --- |
| `id` | Unique kebab-case slug, used in the URL `/articles/<id>`. Match the old post's slug where you can. |
| `title` | Headline. Plain `"string"` **or** `{ en, id }` (see Bilingual). |
| `date` | ISO date `"YYYY-MM-DD"` — used for sorting. |
| `dateDisplay` | Human date shown on the page, e.g. `"20 May 2026"`. |
| `author` | Person or department, e.g. `"PPI Monash Editorial"`. |
| `category` | One label (English) — drives the filter pills. Reuse an existing one if you can: Student Guide, Event Recap, Campus Life, Accommodation, Finance & Banking, Transport, Food & Culture, Academic Tips, Career & Internship, Community News, Collaboration, Announcement. New categories auto-create a filter button; add an Indonesian label in `src/i18n/categories.js` so it translates. |
| `tags` | Array of lowercase strings; searched against. |
| `excerpt` | 1–2 sentence card preview. Plain string or `{ en, id }`. |
| `body` | Full article text. Plain string or `{ en, id }`. See formatting below. |
| `coverImage` | Path/URL to a cover image, or `null` for the category-icon fallback. |
| `externalUrl` | If the piece was first published elsewhere (e.g. the old site), put that URL here — the detail page shows a "originally published on…" notice. Otherwise `null`. |
| `featured` | `true` to surface it on the homepage teaser. |
| `draft` | `true` hides it from listings/homepage (still previewable by direct URL). Omit or `false` to publish. |
| `relatedArticles` | Array of other article `id`s to show as "Related". `[]` auto-picks recent ones in the same category. |

---

## Body formatting

The body uses a tiny, safe markdown subset (parsed by
[`src/utils/markdown.js`](../src/utils/markdown.js)) — **not** full HTML. Write
it inside backticks (a template string). Supported:

- **Paragraphs** — separate with a blank line.
- **Subheadings** — a line starting with `## `.
- **Bullet lists** — lines starting with `- `.
- **Bold** `**like this**`, **italic** `*like this*`.
- **Links** — `[label](https://example.com)`. For security, only
  `http`, `https`, `mailto`, and `tel` links are allowed; anything else (e.g.
  `javascript:`) is stripped to plain text automatically.

Not supported (by design): raw HTML, images inside the body, tables, nested
lists, code blocks. If you paste HTML from WordPress, strip the tags and keep
the plain text — headings become `## `, links become `[text](url)`, lists
become `- ` lines. (If you ever truly need rich content, swap the renderer for
`react-markdown`; see the note at the top of `markdown.js`.)

---

## Bilingual (English / Bahasa Indonesia)

`title`, `excerpt`, and `body` can each be **either**:

- a plain string — shows the same text in both languages, or
- an object `{ en: "...", id: "..." }` — shows the right language per the
  site's language switcher.

You can migrate in English first (plain strings) and add the `id` translation
later by converting the field to the object form. Mixing is fine — some fields
bilingual, others plain.

```js
// English only (fine to start with):
title: "Study Tips from PPI",

// Bilingual (once translated):
title: { en: "Study Tips from PPI", id: "Tips Belajar dari PPI" },
```

`category` stays an English string (it's also a filter key); its on-screen label
is translated separately in `src/i18n/categories.js`.

---

## Checklist before publishing

- [ ] `id` is unique and URL-friendly.
- [ ] `date` / `dateDisplay` are correct.
- [ ] Body converted to the supported format (no raw HTML).
- [ ] Links use `[text](https://…)`.
- [ ] Previewed at `/articles/<id>` in both languages.
- [ ] `draft` removed / set to `false`.
