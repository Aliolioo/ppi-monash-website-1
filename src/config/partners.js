// ============================================================================
// Part of the site content config (split from siteConfig.js).
// Re-exported by siteConfig.js — import from "../config/siteConfig" as usual.
// ============================================================================

// ─── 🤝 Partners ─────────────────────────────────────────────────────────────
// Partners, sponsors, and institutional collaborators shown on /collaboration.
//
// Categories: "Institutional Partner" | "University Partner" |
// "Embassy / Government" | "Student Organization" | "Media Partner" |
// "Event Sponsor" | "Corporate Sponsor" | "Community Partner"
//
// active: false  → archived past partner; shown in the "View archive" section
// displayOrder   → lower = shown first in the partner grid
//
export const PARTNERS = [
  {
    id: "kbri-kuala-lumpur",
    name: "KBRI Kuala Lumpur",
    logo: null,
    category: "Embassy / Government",
    website: "https://kbrikualalumpur.org/",
    socialUrl: null,
    description: "The Embassy of the Republic of Indonesia in Kuala Lumpur — our official institutional partner for student support, consular services, and cultural programs.",
    active: true,
    displayOrder: 1,
    partnershipSince: "2017",
    relatedEventIds: [],
  },
  {
    id: "ppim",
    name: "PPIM",
    logo: null,
    category: "Institutional Partner",
    website: "https://ppimalaysia.org/",
    socialUrl: "https://instagram.com/ppimalaysia",
    description: "Perhimpunan Pelajar Indonesia se-Malaysia — the national umbrella body coordinating all PPI branches across Malaysia. PPI Monash is a proud member branch.",
    active: true,
    displayOrder: 2,
    partnershipSince: "2017",
    relatedEventIds: [],
  },
  {
    id: "monash-malaysia",
    name: "Monash University Malaysia",
    logo: null,
    category: "University Partner",
    website: "https://www.monash.edu.my/",
    socialUrl: "https://instagram.com/monashmalaysia",
    description: "Our home campus. Monash University Malaysia recognises PPI Monash as an officially registered student organisation and supports our activities on campus.",
    active: true,
    displayOrder: 3,
    partnershipSince: "2017",
    relatedEventIds: [],
  },
  {
    id: "muiss",
    name: "MUISS",
    logo: null,
    category: "Student Organization",
    website: null,
    socialUrl: "https://instagram.com/muiss_official",
    description: "Monash University International Students Society — our on-campus partner for multicultural events including the annual OneWorld sports competition.",
    active: true,
    displayOrder: 5,
    partnershipSince: "2023",
    relatedEventIds: ["one-world-2026"],
  },
  // Past / inactive partners — shown in the archive section on /collaboration
  {
    id: "sunway-pyramid",
    name: "Sunway Pyramid Mall",
    logo: null,
    category: "Event Sponsor",
    website: "https://www.sunwaypyramid.com/",
    socialUrl: null,
    description: "Venue and logistical sponsor for the 2024 Merdeka Charity Run, providing the boulevard route and on-site event support.",
    active: false,
    displayOrder: 10,
    partnershipSince: null,
    relatedEventIds: ["merdeka-run-2024"],
  },
];

// ─── 🌐 Collaborations ───────────────────────────────────────────────────────
// Records of specific joint programs, events, and exchanges.
// Each entry references a PARTNERS id via partnerId.
//
// Types: "International Collaboration" | "PPI Malaysia Joint Event" |
// "Sponsorship Partnership" | "Institutional Program" |
// "Media Collaboration" | "Article Exchange" | "Cultural Exchange" |
// "Academic Webinar"
//
// status: "upcoming" | "ongoing" | "completed" | "archived"
// featured: true → shown in the hub page spotlight section
//
export const COLLABORATIONS = [
  {
    id: "muiss-mcn-2026",
    title: "Monash Cultural Night (MCN) 2026",
    partnerId: "muiss",
    type: "Cultural Exchange",
    date: "2026-10-01",
    dateDisplay: "Oct 2026",
    description: "PPI Monash's ongoing participation in Monash Cultural Night 2026, once again showcasing Indonesian culture and performance on campus alongside MUISS.",
    relatedEventId: null,
    relatedArticleId: null,
    mediaUrl: null,
    photos: null,
    status: "ongoing",
    featured: true,
  },
  {
    id: "muiss-one-world-2026",
    title: "MUISS OneWorld 2026",
    partnerId: "muiss",
    type: "Cultural Exchange",
    date: "2026-05-09",
    dateDisplay: "9 May 2026",
    description: "PPI Monash participated as the Indonesian contingent in MUISS OneWorld — a multi-sport multicultural event at Monash Sunway campus. Finished third overall across four sports.",
    relatedEventId: "one-world-2026",
    relatedArticleId: "one-world-2026",
    mediaUrl: null,
    photos: null,
    status: "completed",
    featured: false,
  },
  {
    id: "muiss-mcn-2025",
    title: "Monash Cultural Night (MCN) 2025",
    partnerId: "muiss",
    type: "Cultural Exchange",
    date: "2025-10-01",
    dateDisplay: "Oct 2025",
    description: "PPI Monash represented Indonesia at Monash Cultural Night 2025, showcasing Indonesian culture and performance alongside other international student communities.",
    relatedEventId: null,
    relatedArticleId: null,
    mediaUrl: null,
    photos: null,
    status: "completed",
    featured: false,
  },
  {
    id: "muiss-one-world-2025",
    title: "MUISS OneWorld 2025",
    partnerId: "muiss",
    type: "Cultural Exchange",
    date: "2025-05-01",
    dateDisplay: "2025",
    description: "PPI Monash joined MUISS OneWorld as the Indonesian contingent — a multi-sport, multicultural competition bringing together international student communities at Monash Sunway.",
    relatedEventId: null,
    relatedArticleId: null,
    mediaUrl: null,
    photos: null,
    status: "completed",
    featured: false,
  },
  {
    id: "muiss-one-world-2023",
    title: "MUISS OneWorld 2023",
    partnerId: "muiss",
    type: "Cultural Exchange",
    date: "2023-05-01",
    dateDisplay: "2023",
    description: "PPI Monash joined MUISS OneWorld as the Indonesian contingent — a multi-sport, multicultural competition bringing together international student communities at Monash Sunway.",
    relatedEventId: null,
    relatedArticleId: null,
    mediaUrl: null,
    photos: null,
    status: "completed",
    featured: false,
  },
];

// ─── 🇲🇾 PPI Malaysia Network ────────────────────────────────────────────────
// Directory of Indonesian student associations across Malaysian universities,
// shown on the /network page.
//
// collaborationStatus: "active" | "occasional" | "none"
//
// NOTE TO COMMITTEE: The Instagram URLs below follow a placeholder pattern
// (instagram.com/ppi_[campus]). Please verify and replace each one with the
// actual official handle before going live. Contact PPIM for the full
// branch directory and correct social links.
//
export const PPI_NETWORK = [
  {
    id: "ppi-sunway",
    name: "PPI Sunway University",
    city: "Subang Jaya",
    university: "Sunway University",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_sunwayuniversity",
    collaborationStatus: "active",
    description: "Indonesian students at Sunway University — a natural collaborator given the shared Bandar Sunway location.",
  },
  {
    id: "ppi-taylors",
    name: "PPI Taylor's University",
    city: "Subang Jaya",
    university: "Taylor's University",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_taylors",
    collaborationStatus: "active",
    description: "Indonesian student community at Taylor's University — a neighbour campus and frequent collaborator for joint events across Subang Jaya.",
  },
  {
    id: "ppi-ukm",
    name: "PPI UKM",
    city: "Bangi",
    university: "Universiti Kebangsaan Malaysia",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_ukm",
    collaborationStatus: "active",
    description: "Indonesian student community at Universiti Kebangsaan Malaysia (UKM), Bangi — a fellow PPI branch in the Klang Valley.",
  },
  {
    id: "ppi-malaysia",
    name: "PPI Malaysia",
    city: "Nationwide",
    university: "PPIM — National Body",
    logo: null,
    website: "https://ppimalaysia.org/",
    socialUrl: "https://instagram.com/ppimalaysia",
    collaborationStatus: "active",
    description: "Perhimpunan Pelajar Indonesia se-Malaysia — the national umbrella body coordinating all PPI branches across Malaysia. PPI Monash is a proud member branch.",
  },
];
