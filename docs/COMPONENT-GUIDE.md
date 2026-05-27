# 🧩 Component Guide

> How each component works, what it does, and how to modify it.

---

## Architecture at a Glance

```
App.jsx                      ← Assembles everything
├── Navbar                   ← Fixed top nav + mobile menu
├── Hero                     ← Landing section with particles
│   └── HeroCanvas           ← Canvas-based particle animation
├── About                    ← History, mission, animated stats
│   └── StatCard             ← Animated counter for each stat
├── Team                     ← Departments grid + committee photos
│   └── MemberAvatar         ← Photo with initials fallback
├── Events                   ← Filterable event cards
├── Articles                 ← Article card grid
├── FAQ                      ← Accordion on dark background
├── Contact                  ← CTA + social links
└── Footer                   ← Copyright line
```

---

## Shared Components

### `<FadeIn>`
**File:** `components/FadeIn.jsx`
**Purpose:** Wraps any content to fade + slide up when it enters the viewport.

| Prop | Type | Default | Description |
|---|---|---|---|
| `delay` | number | `0` | Seconds before animation starts |
| `className` | string | `""` | Extra CSS class |

**Usage:**
```jsx
<FadeIn delay={0.2}>
  <h2>This fades in</h2>
</FadeIn>
```

**How it works:** Uses the `useInView` hook (IntersectionObserver) to detect when the element enters the viewport. Fires once, then stops observing for performance.

---

## Hooks

### `useInView(threshold)`
Returns `[ref, isVisible]`. Attach `ref` to a DOM element, and `isVisible` flips to `true` when it enters the viewport.

### `useActiveSection(sectionIds)`
Returns the `id` of whichever section is currently closest to the top of the viewport. Powers the active state in the navbar.

### `useCountUp(target, duration)` *(preview only)*
Animated number counter. Returns `[ref, currentCount]`. Attach `ref` to trigger the animation when visible.

---

## Section Components

### `<Hero>`
**File:** `components/Hero.jsx`
**Reads from config:** `SITE_INFO`, `SOCIAL_LINKS`

Contains:
- Canvas particle network animation (subtle, auto-resizes)
- Floating gradient blobs (CSS animations)
- Grid pattern background
- Badge with pulsing dot
- Title with gold underline highlight
- WhatsApp CTA + scroll hint

**To modify:** Change text in `SITE_INFO`, change CTA link in `SOCIAL_LINKS.whatsapp`.

---

### `<About>`
**File:** `components/About.jsx`
**Reads from config:** `SITE_INFO`, `STATS`

Contains:
- History paragraph (hardcoded in component)
- Stats grid with animated counters
- 4-card visual grid (Unity, Growth, Friendship, Eunoia)
- Vision quote with gold border

**To modify:** Update stats in `STATS`. The visual cards are currently hardcoded — change emojis/words in the component's `cards` array.

---

### `<Team>`
**File:** `components/Team.jsx`
**Reads from config:** `DEPARTMENTS`, `COMMITTEE`, `SITE_INFO`

Two sub-sections:
1. **Department cards** — 3-column grid with emoji, name, description
2. **Committee members** — Grouped by department, photo grid with initials fallback

**To modify:** Add/change members in `COMMITTEE`. Photo system:
- `photo: null` → shows initials
- `photo: "executive/radhitya-hendra-putra.jpg"` → loads from `assets/photos/`
- If photo fails to load → gracefully falls back to initials

---

### `<Events>`
**File:** `components/Events.jsx`
**Reads from config:** `EVENTS`

- Filter buttons auto-generate from event categories — no hardcoding needed
- Each card shows date, category badge, description, optional photo link
- Empty state message when no events match filter

**To modify:** Add events to `EVENTS` array. Use any category string — new ones automatically create a filter button.

---

### `<Articles>`
**File:** `components/Articles.jsx`
**Reads from config:** `ARTICLES`

- 3-column card grid with decorative thumbnail patterns
- Icon based on article tag (Sports → ⚽, Academic → 📚, etc.)
- Links to external article URLs

**To modify:** Add articles to `ARTICLES` array. Tag icons are in the `TAG_ICONS` map inside the component — add new ones there.

---

### `<FAQ>`
**File:** `components/FAQ.jsx`
**Reads from config:** `FAQS`

- Dark-themed section with accordion
- One item open at a time
- Smooth max-height animation
- Decorative radial gradient in background

**To modify:** Add questions to `FAQS` array as `{ q: "...", a: "..." }`.

---

### `<Contact>` + `<Footer>`
**File:** `components/Contact.jsx`
**Reads from config:** `SOCIAL_LINKS`, `SITE_INFO`

- CTA section with radial gradient background
- WhatsApp join button
- Social media pill buttons
- Footer with copyright and PPIM link

**To modify:** Update links in `SOCIAL_LINKS`.

---

## Adding a New Section

1. Create `src/components/NewSection.jsx`
2. Import any config data from `../config/siteConfig`
3. Use `<FadeIn>` for scroll animations
4. Give the section a unique `id` (e.g., `id="gallery"`)
5. Add to `NAV_ITEMS` in `siteConfig.js`: `{ label: "Gallery", id: "gallery" }`
6. Import and add to `App.jsx` in the desired position
7. Add any new styles to `global.css`

---

## Design Decisions

| Decision | Why |
|---|---|
| Single config file | Next committee edits one file for 90% of updates |
| Vanilla CSS (no Tailwind) | Zero build dependencies, easier to understand |
| Bricolage Grotesque + DM Sans | Distinctive but readable; avoids generic AI fonts |
| Auto-generated filter categories | Adding new event category = automatic new filter button |
| Photo fallback to initials | Site looks polished even with no photos uploaded |
| Canvas particles | Subtle ambient motion that feels alive, not distracting |
| Grain texture overlay | Adds warmth and analog feel to the digital interface |
