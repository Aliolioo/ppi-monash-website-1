// ============================================================================
// Part of the site content config (split from siteConfig.js).
// Re-exported by siteConfig.js — import from "../config/siteConfig" as usual.
// ============================================================================

// ─── 📰 Articles ─────────────────────────────────────────────────────────────
// Categories: "Student Guide" | "Event Recap" | "Campus Life" | "Accommodation"
// | "Finance & Banking" | "Transport" | "Food & Culture" | "Academic Tips"
// | "Career & Internship" | "Community News" | "Collaboration" | "Announcement"
// (add new ones by just using them — category filter buttons auto-generate)
//
// "body" supports a tiny markdown subset (see src/utils/markdown.js):
// blank-line-separated paragraphs, "## " subheadings, "- " list items,
// and **bold** / *italic* inline spans.
//
// MIGRATING ARTICLES FROM THE OLD WORDPRESS SITE?  See docs/MIGRATING_ARTICLES.md
// for the full step-by-step. There is a ready-to-copy PLACEHOLDER entry at the
// bottom of this array (id: "placeholder-article") marked `draft: true` so it
// stays hidden from the live site until you fill it in and remove the flag.
//
// Translatable fields (title, excerpt, body) accept EITHER a plain string OR a
// bilingual object { en: "...", id: "..." }. Plain strings show in both
// languages; use the object form once you have an Indonesian translation.
//
// To add a new article, copy-paste this template:
// {
//   id: "kebab-case-slug-year",        ← unique, used in the /articles/:id URL
//   title: { en: "Article Title", id: "Judul Artikel" },
//   date: "YYYY-MM-DD",                ← ISO format, used for sorting
//   dateDisplay: "DD Mon YYYY",
//   author: "Person or Department",
//   category: "Student Guide",         ← English; translated for display via tcat
//   tags: ["lowercase", "free-form", "tags"],   ← searched against
//   excerpt: { en: "Short preview…", id: "Pratinjau singkat…" },
//   body: { en: `Full body…`, id: `Isi lengkap…` },   ← or a plain `template string`
//   coverImage: null,                  ← image path, or null for icon fallback
//   externalUrl: null,                 ← set if originally published elsewhere
//   featured: false,                   ← true to show on the homepage
//   draft: false,                      ← true = hidden from listings/home (preview only)
//   relatedArticles: [],               ← explicit IDs, or [] to auto-pick by category
// },
//
export const ARTICLES = [
  {
    id: "one-world-2026",
    title: "One World: Indonesia Hand in Hand",
    date: "2026-05-20",
    dateDisplay: "20 May 2026",
    author: "PPI Monash Editorial",
    category: "Event Recap",
    tags: ["sports", "muiss", "community"],
    excerpt: {
      en: "MUISS OneWorld has once again delivered a wonderful event with students representing their country in four different sports!",
      id: "MUISS OneWorld kembali menghadirkan acara yang luar biasa dengan para mahasiswa yang mewakili negaranya di empat cabang olahraga berbeda!",
    },
    body: `MUISS OneWorld has once again delivered a wonderful event with students representing their country in four different sports. PPI Monash Malaysia fielded contingents across futsal, badminton, basketball, and tug-of-war, bringing together students from over a dozen nationalities for a day of friendly competition.

## A Day of Firsts

For many of our newer members, this was their first time competing under the Indonesian flag outside of their home country. The energy on the sidelines was just as competitive as the energy on the court, with chants and drumbeats keeping spirits high through every match.

Highlights from the day included:

- A nail-biting futsal semifinal that went to penalties
- A badminton doubles pair who hadn't played together before the tournament
- A tug-of-war final that PPI Monash narrowly lost by inches

**The result?** A third-place overall finish across all sports — our best showing yet. More importantly, the event reinforced something we say every year: *competition is just an excuse to build community.*

We're already looking forward to representing PPI Monash again next year, and recruiting a few more badminton players in the meantime.`,
    coverImage: null,
    externalUrl: "https://ppimonashmalaysia.com/articles/one-world-2026/",
    featured: true,
    relatedArticles: ["study-tips-2026", "banking-101-malaysia-2026"],
  },
  {
    id: "study-tips-2026",
    title: { en: "Study Tips from PPI", id: "Tips Belajar dari PPI" },
    date: "2026-02-10",
    dateDisplay: "10 Feb 2026",
    author: "PPI Monash Editorial",
    category: "Academic Tips",
    tags: ["study tips", "academic", "wellbeing"],
    excerpt: {
      en: "PPI is here to help by sharing five tips on how to balance your academics and social life as an international student.",
      id: "PPI hadir untuk membantu dengan berbagi lima tips menyeimbangkan akademik dan kehidupan sosial sebagai mahasiswa internasional.",
    },
    body: `Balancing academics and social life as an international student is no small feat — especially in your first semester away from home. We asked a few senior students what actually worked for them, and compiled their answers below.

## 1. Build a Loose Routine, Not a Rigid One

Strict hour-by-hour schedules tend to fall apart the moment something unexpected happens (and something always does). Instead, block out *rough* zones of your day — mornings for lectures, afternoons for revision, evenings for whatever you need them to be.

## 2. Use the Library Differently Each Week

Sitting in the same seat every day gets old fast. Rotate between the quiet floors, the group discussion rooms, and the campus cafés depending on what kind of work you're doing.

Some quick wins our seniors swore by:

- Reviewing lecture slides within 24 hours, not the night before the exam
- Joining at least one study group, even if you're an introvert
- Setting a hard stop time for studying each night

**Most importantly**, give yourself permission to rest. Burnout doesn't make you a better student — it just makes everything harder. PPI's Welfare department runs regular check-ins if you ever need someone to talk to.`,
    coverImage: null,
    externalUrl: "https://ppimonashmalaysia.com/articles/study-tips-2026/",
    featured: true,
    relatedArticles: [],
  },
  {
    id: "ramadhan-away-from-home-2025",
    title: { en: "Ramadhan Away From Home", id: "Ramadan Jauh dari Rumah" },
    date: "2025-03-05",
    dateDisplay: "5 Mar 2025",
    author: "Welfare Department",
    category: "Food & Culture",
    tags: ["ramadan", "culture", "community"],
    excerpt: {
      en: "Navigating the holy month as an Indonesian student abroad — finding community, iftar gatherings, and keeping traditions alive.",
      id: "Menjalani bulan suci sebagai mahasiswa Indonesia di luar negeri — menemukan komunitas, berbuka bersama, dan menjaga tradisi tetap hidup.",
    },
    body: `Spending Ramadhan away from family for the first time can feel strange. No mother cooking in the kitchen before dawn, no familiar mosque down the street, no sound of takbir drifting through the neighbourhood. But over the past few years, PPI Monash has tried to recreate a little bit of that warmth here in Sunway.

## Communal Iftars

Every week during Ramadhan, members gather for a potluck-style iftar near campus. Everyone brings a dish — usually whatever reminds them most of home — and for a couple of hours, the room genuinely *smells* like Indonesia.

A few things that helped students we spoke to feel more at home this Ramadhan:

- Joining the weekly iftar gatherings, even just to sit and chat
- Finding a sahur buddy so waking up before dawn doesn't feel so lonely
- Calling family during iftar time back home, even if the time zones don't line up perfectly

**Ramadhan abroad is different, not lesser.** It just takes a bit more intention to build the community that used to come naturally back home — and that's exactly what PPI tries to help with every year.`,
    coverImage: null,
    externalUrl: "https://ppimonashmalaysia.com/articles/",
    featured: false,
    relatedArticles: [],
  },
  {
    id: "banking-101-malaysia-2026",
    title: {
      en: "Banking 101: Opening Your First Malaysian Bank Account",
      id: "Perbankan 101: Membuka Rekening Bank Malaysia Pertamamu",
    },
    date: "2026-01-15",
    dateDisplay: "15 Jan 2026",
    author: "PPI Monash Editorial",
    category: "Finance & Banking",
    tags: ["banking", "finance", "student guide"],
    excerpt: {
      en: "A step-by-step walkthrough of opening a bank account in Malaysia as a new international student — documents, timing, and which banks are most student-friendly.",
      id: "Panduan langkah demi langkah membuka rekening bank di Malaysia sebagai mahasiswa internasional baru — dokumen, waktu, dan bank mana yang paling ramah mahasiswa.",
    },
    body: `One of the first administrative tasks every new student faces is opening a local bank account. It sounds simple, but the process can be confusing if nobody warns you what to expect — so here's what you actually need.

## What to Bring

Most banks near Monash Malaysia (Sunway) will ask for the same core documents:

- Your original passport
- A copy of your student visa or visa approval letter
- A Student Verification Letter from the Monash student portal
- A completed account-opening form (usually available at the branch)

## Timing Matters

Try to open your account *within your first two weeks*, before your visa sticker is processed — some banks accept the approval letter as a temporary substitute, but policies vary by branch, so call ahead if you can.

**A tip from past students:** branches inside shopping malls (like Sunway Pyramid) tend to have shorter queues on weekdays than standalone branches. Bring a friend who's already been through the process if you can — having someone explain the form in person saves a lot of back-and-forth.`,
    coverImage: null,
    externalUrl: null,
    featured: true,
    relatedArticles: [],
  },
  {
    id: "settling-into-monash-2025",
    title: {
      en: "Settling Into Monash: A First-Semester Survival Guide",
      id: "Beradaptasi di Monash: Panduan Bertahan Semester Pertama",
    },
    date: "2025-08-01",
    dateDisplay: "1 Aug 2025",
    author: "Welfare Department",
    category: "Student Guide",
    tags: ["orientation", "student guide", "campus life"],
    excerpt: {
      en: "Everything we wish someone had told us before our first week at Monash Malaysia — from finding your way around campus to making your first friends.",
      id: "Semua hal yang kami harap seseorang beri tahu sebelum minggu pertama di Monash Malaysia — dari mengenali kampus hingga menjalin pertemanan pertama.",
    },
    body: `Your first week at Monash can feel overwhelming — new campus, new city, new everything. Here's a short guide from students who've been exactly where you are now.

## Before Classes Start

Walk the campus at least once before your first lecture. Knowing where Block H is *before* you're rushing to a 9am class makes a surprising difference to how calm your first week feels.

## Finding Your People

Orientation week activities can feel forced, but they're genuinely the fastest way to meet people. Beyond that:

- Join your faculty's student WhatsApp or Discord group early
- Say yes to the first PPI event you're invited to, even if you don't know anyone yet
- Sit with the same group in tutorials for the first few weeks — familiarity builds fast

**It gets easier.** Almost everyone we interviewed for this guide said the same thing: the first month is the hardest, and *then it just starts to feel like home.*`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },
  {
    id: "shuttle-bus-survival-guide-2025",
    title: {
      en: "The Monash Shuttle Bus Survival Guide",
      id: "Panduan Bertahan Naik Bus Shuttle Monash",
    },
    date: "2025-09-12",
    dateDisplay: "12 Sep 2025",
    author: "PPI Monash Editorial",
    category: "Transport",
    tags: ["transport", "commute", "sunway"],
    excerpt: {
      en: "How to actually catch the shuttle bus on time, where it stops, and what to do when it doesn't show up — a practical guide for commuting students.",
      id: "Cara benar-benar mengejar bus shuttle tepat waktu, di mana haltenya, dan apa yang harus dilakukan saat bus tidak muncul — panduan praktis bagi mahasiswa komuter.",
    },
    body: `If you live off-campus around Sunway, the shuttle bus probably runs your life more than you'd like to admit. Here's how to make peace with it.

## Know the Real Schedule, Not the Posted One

The official timetable is a guideline at best. During peak hours, buses can run a few minutes early or late depending on traffic around the BRT line. Give yourself a 10-minute buffer if you have a class you absolutely cannot be late for.

Useful habits seasoned commuters swear by:

- Standing at the stop a few minutes early during exam season, when buses fill up fast
- Having a backup plan (Grab, walking, or a friend with a car) for when the shuttle is full
- Checking the driver group chat or app updates if your residence has one

**When all else fails**, walking from Sunway Pyramid to campus takes about 20 minutes — not glamorous, but reliable, and honestly a nice way to wake up before an early class.`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },
  {
    id: "ppi-collab-spotlight-2026",
    title: {
      en: "Behind the Scenes: How PPI Builds Collaborations With Other Student Societies",
      id: "Di Balik Layar: Bagaimana PPI Membangun Kolaborasi dengan Himpunan Mahasiswa Lain",
    },
    date: "2026-04-02",
    dateDisplay: "2 Apr 2026",
    author: "External Relations Department",
    category: "Collaboration",
    tags: ["collaboration", "external relations", "community"],
    excerpt: {
      en: "A look at how PPI's External Relations department plans joint events with other student associations on campus — and what it takes to pull one off.",
      id: "Mengintip bagaimana departemen Hubungan Eksternal PPI merancang acara bersama himpunan mahasiswa lain di kampus — dan apa yang dibutuhkan untuk mewujudkannya.",
    },
    body: `Every joint event you see on our calendar — night markets, sports days, cultural showcases — starts months earlier as a quiet conversation between committee members from different student societies.

## Where Collaborations Start

Most partnerships begin informally, often at another society's own event. Someone from External Relations strikes up a conversation, exchanges contacts, and a rough idea starts to form. *Most ideas never make it past this stage* — but the ones that do tend to be the ones built on genuine shared interest, not just convenience.

## What It Actually Takes

Once an idea is greenlit, the real work begins:

- Aligning on a shared budget and who's responsible for what
- Booking venues that work for both societies' usual crowd sizes
- Cross-promoting through both societies' social media and WhatsApp groups

**The payoff is worth it.** Collaborative events consistently draw bigger, more diverse crowds than anything either society could pull off alone — and they're often where some of our members make friends outside the Indonesian community for the first time.`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },
  {
    id: "merdeka-spirit-on-campus-2025",
    title: "Merdeka Spirit on Campus: Celebrating Independence Far From Home",
    date: "2025-08-20",
    dateDisplay: "20 Aug 2025",
    author: "Documentation Department",
    category: "Event Recap",
    tags: ["independence day", "culture", "community"],
    excerpt:
      "A recap of how PPI Monash brought Indonesian Independence Day celebrations to campus, complete with traditional games and a flag ceremony.",
    body: `Every August, PPI Monash takes a day to celebrate something that doesn't pause just because we're studying abroad: Indonesian Independence Day.

## A Flag Ceremony, Far From Home

This year's ceremony drew one of our biggest turnouts yet, with students gathering before sunset for a short but meaningful flag-raising and a moment of collective reflection on what home means when you're thousands of kilometres away from it.

## Games, Food, and a Lot of Noise

After the ceremony, the evening turned considerably louder. Traditional games like *panjat pinang* and balap karung had everyone — committee members included — laughing at themselves within minutes.

A few crowd favourites from the night:

- The sack race finals, which ended in a three-way photo finish
- A potluck table that ran out of food twice and got restocked twice
- An impromptu karaoke session that nobody planned but everyone joined

**Independence Day abroad will never feel quite like Independence Day at home** — but every year, PPI tries to close that gap a little more.`,
    coverImage: null,
    externalUrl: null,
    featured: false,
    relatedArticles: [],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // PLACEHOLDER / TEMPLATE — for migrating an article from the old WordPress
  // site. `draft: true` keeps it hidden from the homepage and the /articles
  // listing; you can still preview it at /articles/placeholder-article. To
  // publish: fill in the fields, then set `draft: false` (or delete the line).
  // Duplicate this whole object for each article you migrate. Full guide:
  // docs/MIGRATING_ARTICLES.md
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "placeholder-article",
    title: { en: "Untitled (migrated draft)", id: "Tanpa Judul (draf migrasi)" },
    date: "2026-01-01",
    dateDisplay: "1 Jan 2026",
    author: "PPI Monash Editorial",
    category: "Community News",
    tags: ["placeholder"],
    excerpt: {
      en: "Replace this with the article's one- or two-sentence summary.",
      id: "Ganti ini dengan ringkasan satu atau dua kalimat dari artikel.",
    },
    body: {
      en: `Paste the migrated article body here. Supported formatting:

## A subheading

A normal paragraph. Separate paragraphs with a blank line. Inline you can use **bold** and *italic*, and links like [PPI Monash](https://ppimonashmalaysia.com).

- A bullet point
- Another bullet point`,
      id: `Tempel isi artikel hasil migrasi di sini. Format yang didukung:

## Sebuah subjudul

Paragraf biasa. Pisahkan paragraf dengan satu baris kosong. Di dalam teks kamu bisa pakai **tebal** dan *miring*, serta tautan seperti [PPI Monash](https://ppimonashmalaysia.com).

- Poin daftar
- Poin daftar lainnya`,
    },
    coverImage: null,
    externalUrl: "https://ppimonashmalaysia.com/articles/REPLACE-WITH-SLUG/",
    featured: false,
    draft: true,
    relatedArticles: [],
  },
];
