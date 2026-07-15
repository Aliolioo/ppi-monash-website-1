# Editing the PPI Monash Website — Committee Guide

This guide is for committee members who will edit the site **locally in VS Code**.
You do **not** need to know React. Almost all content is plain text inside
`src/config/` files. You edit the text, save, commit, and push — the site
rebuilds and republishes automatically.

---

## 1. One-time setup (do this once)

Install these three free tools:

| Tool | Where | Notes |
|------|-------|-------|
| **Git** | https://git-scm.com/downloads | Click through the installer with the defaults. |
| **Node.js (LTS)** | https://nodejs.org | Pick the **LTS** version. This gives you `npm`. |
| **VS Code** | https://code.visualstudio.com | You already have this. |

Then get the project onto your computer. Open VS Code → **Terminal → New Terminal**
and run:

```bash
git clone https://github.com/aliolioo/ppi-monash-website-1.git
cd ppi-monash-website-1
npm install
```

`npm install` downloads everything the project needs. It can take a couple of
minutes and only has to be done once (re-run it only if someone adds a new
library).

---

## 2. Every time you want to edit

```bash
git pull                 # 1. get the latest version first (important!)
npm run dev              # 2. start the live preview
```

`npm run dev` prints a link like `http://localhost:5173/ppi-monash-website-1/`.
Open it in your browser — it **updates instantly** every time you save a file, so
you can see your changes live. Leave it running while you work; press `Ctrl + C`
in the terminal to stop it.

> Always `git pull` **before** you start editing, so you don't clash with a
> teammate's changes.

---

## 3. Which file controls which part of the site

Everything you'll normally edit is in the **`src/config/`** folder:

| To change… | Edit this file |
|------------|----------------|
| Events (names, dates, descriptions) | `src/config/events.js` |
| Student guides (transport, food, iKad, etc.) | `src/config/guides.js` |
| Team members, departments, photos | `src/config/team.js` |
| Partners, sponsors, PPI network | `src/config/partners.js` |
| Articles / news posts | `src/config/articles.js` |
| FAQ questions & answers | `src/config/faqs.js` |
| Leadership history (past cabinets) | `src/config/leadership.js` |
| Homepage "What's Up Next?" announcements, stats, socials, contact info | `src/config/site.js` |
| Buttons, labels, and other UI wording | `src/i18n/strings.js` |
| Committee/event photos | put image files in `src/assets/photos/` |

---

## 4. How the text looks (and the rules)

Most content is written in **both English and Indonesian**, like this:

```js
title: { en: "Independence Day", id: "Hari Kemerdekaan" },
```

- Edit the words **inside the quotes** only.
- Keep every `"` quote, `,` comma, `{ }` brace and `[ ]` bracket exactly where it
  is — those are the structure. **Deleting a comma or a quote is the #1 way to
  break a build.**
- If a field only has `en:` and no `id:`, the site simply shows the English text
  on the Indonesian version too. You can add an `id:` translation any time.

### Adding a photo
1. Drop the image file into the right folder under `src/assets/photos/`.
2. Reference its filename in the matching config file (see how existing entries
   do it and copy the pattern).

---

## 5. Saving your work (commit & push)

You can use VS Code's **Source Control** panel (the branch icon on the left) or
the terminal. Terminal version:

```bash
git add .
git commit -m "content: update August event dates"      # short description of what you changed
git push
```

After `git push`, GitHub automatically rebuilds and republishes the site. Wait
~2 minutes, then refresh the live site to see your change.

---

## 6. Safety net — you can't easily break the live site

- If you make a typo that breaks the code, the automatic build **fails and the
  live site stays on the last working version.** Nothing goes down.
- You'll see a red ❌ next to your commit on GitHub. Just fix the typo and push
  again.
- To catch mistakes *before* pushing, run this locally — if it finishes without
  errors, you're good:

```bash
npm run build
```

---

## 7. Quick troubleshooting

| Problem | Fix |
|---------|-----|
| `npm: command not found` | Node.js isn't installed / VS Code needs a restart after installing it. |
| `git pull` says you have conflicts | You edited something a teammate also changed. Ask in the group chat before resolving. |
| The preview page is blank or errors | Check the terminal for a red message — it usually names the file and line with the typo. |
| Emoji/dash "Crashacter" warnings in VS Code | Harmless. It's a picky extension flagging em-dashes and emoji — the site builds fine. You can ignore or disable that extension. |

---

**When in doubt, ask in the committee chat before pushing.** Someone has almost
always already done what you're trying to do.
