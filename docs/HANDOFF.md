# PPI Monash Malaysia Website — Documentation

> **Last updated:** May 2026 · Built for the PPI Monash Malaysia committee

---

## 🏗️ Project Structure

```
ppi-monash-website/
│
├── docs/                          ← You are here
│   ├── HANDOFF.md                 ← This file — start here
│   ├── YEARLY-CHECKLIST.md        ← What to update each year
│   └── COMPONENT-GUIDE.md         ← How each component works
│
├── src/
│   ├── config/
│   │   └── siteConfig.js          ← ⭐ THE MAIN FILE TO EDIT ⭐
│   │
│   ├── components/
│   │   ├── FadeIn.jsx             ← Scroll animation wrapper
│   │   ├── Navbar.jsx             ← Top navigation + mobile menu
│   │   ├── Hero.jsx               ← Landing hero section
│   │   ├── About.jsx              ← History, mission, stats
│   │   ├── Team.jsx               ← Departments + committee photos
│   │   ├── Events.jsx             ← Filterable events grid
│   │   ├── Articles.jsx           ← Article cards
│   │   ├── FAQ.jsx                ← Accordion FAQ
│   │   └── Contact.jsx            ← CTA + social links + footer
│   │
│   ├── hooks/
│   │   ├── useInView.js           ← Scroll-triggered visibility
│   │   └── useActiveSection.js    ← Navbar section tracking
│   │
│   ├── styles/
│   │   └── global.css             ← All styles (design tokens at top)
│   │
│   ├── assets/
│   │   └── photos/                ← Committee photos go here
│   │       ├── executive/
│   │       ├── documentation/
│   │       ├── media-creative/
│   │       ├── welfare/
│   │       ├── events/
│   │       └── external-relations/
│   │
│   └── App.jsx                    ← Main app (assembles everything)
│
└── README.md                      ← Quick start guide
```

---

## ⭐ How to Update the Website (90% of changes)

Almost everything you need to change lives in **one file:**

### `src/config/siteConfig.js`

This is the single source of truth. Open it, and you'll find clearly labelled sections:

| What to update | Section in siteConfig.js | Example |
|---|---|---|
| Year, org name | `SITE_INFO` | Change `currentYear: 2027` |
| Social media links | `SOCIAL_LINKS` | Paste new WhatsApp group link |
| Navigation pages | `NAV_ITEMS` | Add `{ label: "Gallery", id: "gallery" }` |
| About stats | `STATS` | Update `"10+"` years, `"400+"` members |
| Department info | `DEPARTMENTS` | Add/rename departments |
| Committee members | `COMMITTEE` | Add names, roles, photo paths |
| Events | `EVENTS` | Copy template, fill in details |
| Articles | `ARTICLES` | Add title, excerpt, URL, tag |
| FAQ | `FAQS` | Add `{ q: "...", a: "..." }` |
| Colours | `THEME` | Change the red, gold, etc. |

---

## 📸 Adding Committee Photos

### Step 1: Prepare the photo
- **Size:** 400×400px minimum, square crop
- **Format:** `.jpg` or `.png`
- **Naming:** `firstname-lastname.jpg` (lowercase, hyphens)

### Step 2: Put it in the right folder
```
src/assets/photos/{department}/firstname-lastname.jpg
```

Example:
```
src/assets/photos/executive/radhitya-hendra-putra.jpg
```

### Step 3: Update siteConfig.js
```javascript
// Before (placeholder)
{ name: "Radhitya Hendra Putra", role: "President", photo: null },

// After (with photo)
{ name: "Radhitya Hendra Putra", role: "President", photo: "executive/radhitya-hendra-putra.jpg" },
```

That's it! The website automatically shows the photo, and falls back to initials if the photo is missing.

---

## 🎪 Adding a New Event

Open `siteConfig.js`, find the `EVENTS` array, and add:

```javascript
{
  title: "Your Event Name",
  date: "DD Mon YYYY",
  category: "Welcome",   // Welcome, Welfare, Cultural, Sports, Academic
  desc: "A short description of the event.",
  photos: "https://drive.google.com/...",  // optional — remove if none
},
```

> **Tip:** New categories auto-appear as filter buttons. Just use a new category name and it shows up.

---

## 📰 Adding a New Article

```javascript
{
  title: "Article Title",
  excerpt: "A 1-2 sentence preview.",
  tag: "Culture",          // Sports, Academic, Culture, Lifestyle
  url: "https://ppimonashmalaysia.com/articles/your-article/",
},
```

---

## 🎨 Changing the Design

### Quick colour change
Edit the `THEME` object in `siteConfig.js`. Then update the matching CSS variables at the top of `src/styles/global.css`.

### Fonts
Fonts are loaded in `global.css` via Google Fonts. To change:
1. Pick fonts at [fonts.google.com](https://fonts.google.com)
2. Update the `@import` URL in `global.css`
3. Update `--font-display` and `--font-body` CSS variables

---

## 🧩 Architecture Overview

```
siteConfig.js (data) ──→ Components (UI) ──→ App.jsx (assembly)
                              ↑
                         global.css (styles)
                         hooks/ (behaviour)
```

**Data flows one way:** Config → Components → Screen

This means:
- To change **content**, edit `siteConfig.js`
- To change **look/layout**, edit `global.css`
- To change **behaviour**, edit the component or hook
- To **add a new section**, create a component + add it to `App.jsx`

---

## 🔧 Tech Stack

| Tool | Purpose |
|---|---|
| React | UI framework |
| CSS (vanilla) | Styling — no Tailwind/SCSS dependency |
| Google Fonts | Typography (Bricolage Grotesque + DM Sans) |
| IntersectionObserver | Scroll animations (no library needed) |

No build dependencies beyond React. No npm packages to break. Simple and future-proof.

---

## 💡 Tips for the Next Committee

1. **Don't overthink it.** 90% of updates are just editing `siteConfig.js`.
2. **Photos make a huge difference.** Even just adding President/VP photos transforms the Team section.
3. **Keep events updated.** Old events with photo links are social proof. New events show you're active.
4. **FAQ is gold.** Every question a new student asks you → add it to the FAQ.
5. **Test on mobile.** Most students browse on their phone.

---

## 🆘 Need Help?

- The structure is designed so non-developers can maintain it
- If something breaks, the component files are independent — you can debug one at a time
- Each file has comments explaining what it does
- When in doubt, ask Claude or ChatGPT with the file contents and error message
