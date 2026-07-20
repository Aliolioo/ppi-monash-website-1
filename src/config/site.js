// ============================================================================
// Part of the site content config (split from siteConfig.js).
// Re-exported by siteConfig.js — import from "../config/siteConfig" as usual.
// ============================================================================

// ============================================================================
// 📝 SITE CONFIGURATION — PPI Monash Malaysia
// ============================================================================
//
// Hey future committee! 👋
// This is the ONLY file you need to edit to update the website content.
// Everything — text, events, articles, team members, FAQs, links — lives here.
//
// HOW TO UPDATE:
// 1. Find the section you want to change (use Ctrl+F / Cmd+F)
// 2. Edit the text/data
// 3. Save → changes appear on the site
//
// ADDING COMMITTEE PHOTOS:
// 1. Put the photo in: assets/photos/{department}/firstname-lastname.jpg
// 2. Update the "photo" field below to match the filename
// 3. Recommended: 400×400px, square crop, .jpg or .png
//
// ============================================================================

// ─── 🏠 General Info ────────────────────────────────────────────────────────
export const SITE_INFO = {
  name: "PPI Monash Malaysia",
  tagline: "Eunoia",
  foundedYear: 2017,
  currentYear: 2026,
  committeeTerm: "Semester 2 2026",
  description: {
    en: "Perhimpunan Pelajar Indonesia (PPI) Monash Malaysia — building a close-knit community where long-lasting friendships are forged through fun and valuable experiences.",
    id: "Perhimpunan Pelajar Indonesia (PPI) Monash Malaysia — membangun komunitas yang erat tempat persahabatan abadi terjalin melalui pengalaman yang seru dan berharga.",
  },
  vision: {
    en: "To increase the welfare and develop the potential of Indonesian community in Monash University Malaysia",
    id: "Meningkatkan kesejahteraan dan mengembangkan potensi komunitas Indonesia di Monash University Malaysia",
  },
};

// ─── 🔗 Social Links & Contact ──────────────────────────────────────────────
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ppimonash_my/",
  tiktok: "https://www.tiktok.com/@ppi.eunoia/",
  youtube: "https://www.youtube.com/@ppimonashmalaysia9894",
  spotify: "https://open.spotify.com/show/0ygQcEUwrGbEelJMc2fhpp",
  whatsapp: "https://chat.whatsapp.com/Jow9rWRT4AJD2l47dulEA4",
  email: "ppimonashmalaysia@gmail.com",
  website: "https://ppimonashmalaysia.com/",
};

// ─── 🧭 Navigation ──────────────────────────────────────────────────────────
// To add/remove pages, just add/remove items here.
// The "path" is the React Router route path for each page.
export const NAV_ITEMS = [
  { label: { en: "Home", id: "Beranda" }, path: "/" },
  { label: { en: "About", id: "Tentang" }, path: "/about" },
  { label: { en: "Student Guide", id: "Panduan Mahasiswa" }, path: "/guide" },
  { label: { en: "Team", id: "Tim" }, path: "/team" },
  { label: { en: "Events", id: "Acara" }, path: "/events" },
  { label: { en: "Articles", id: "Artikel" }, path: "/articles" },
  { label: { en: "Collaboration", id: "Kolaborasi" }, path: "/collaboration" },
  { label: { en: "FAQ", id: "FAQ" }, path: "/faq" },
  { label: { en: "Contact", id: "Kontak" }, path: "/contact" },
];

// ─── 📊 Stats (shown in About section) ──────────────────────────────────────
// Update these numbers each year!
export const STATS = [
  { number: "9+", label: { en: "Years of Community", id: "Tahun Berkomunitas" } },
  { number: "7", label: { en: "Departments", id: "Departemen" } },
  { number: "50+", label: { en: "Events Organized", id: "Acara Terselenggara" } },
  { number: "300+", label: { en: "Members Connected", id: "Anggota Terhubung" } },
];

// ─── 📣 Announcements ("What's Up Next?") ────────────────────────────────────
// Short, timely notices shown on the homepage strip. Newest first.
// `link` may be an internal route (e.g. "/events/...") or null for plain text.
export const ANNOUNCEMENTS = [
  {
    id: "mini-welpar-2026",
    text: {
      en: "Mini Welpar opens Semester 2 on 8 Aug — details to be announced.",
      id: "Mini Welpar membuka Semester 2 pada 8 Agu — detail akan diumumkan.",
    },
    link: "/events/mini-welpar-2026",
  },
  {
    id: "independence-day-2026",
    text: {
      en: "Independence Day — 15 Aug. Save the date!",
      id: "Independence Day — 15 Agu. Catat tanggalnya!",
    },
    link: "/events/independence-day-2026",
  },
  {
    id: "independence-day-charity-2026",
    text: {
      en: "Independence Day Charity Event runs 17–19 Aug — details to be announced.",
      id: "Independence Day Charity Event digelar 17–19 Agu — detail akan diumumkan.",
    },
    link: "/events/independence-day-charity-2026",
  },
  {
    id: "join-whatsapp",
    text: {
      en: "New here? Join our WhatsApp community to stay in the loop.",
      id: "Baru di sini? Gabung komunitas WhatsApp kami agar tidak ketinggalan.",
    },
    link: null,
  },
];

// ─── 🎨 Theme ────────────────────────────────────────────────────────────────
// Tweak colours here if you want to rebrand slightly each year
export const THEME = {
  redDeep: "#B22234",
  redBright: "#DC3545",
  cream: "#FFF8F0",
  creamDark: "#F5EDE0",
  gold: "#D4A843",
  goldSoft: "#F0D78C",
  charcoal: "#1A1A1A",
  slate: "#4A4A4A",
  white: "#FFFFFF",
};

// ─── ⚖️  Legal & Institutional ────────────────────────────────────────────────
export const LEGAL_INFO = {
  organizationName: "Perhimpunan Pelajar Indonesia Monash Malaysia",
  shortName: "PPI Monash Malaysia",
  tagline: "Eunoia",
  parentOrganization: "Perhimpunan Pelajar Indonesia se-Malaysia (PPIM)",
  affiliatedCampus: "Monash University Malaysia",
  affiliatedEmbassy: "Embassy of the Republic of Indonesia, Kuala Lumpur (KBRI Kuala Lumpur)",
  officialEmail: "ppimonashmalaysia@gmail.com",
  officialWebsite: "https://ppimonashmalaysia.com",
  committeeName: "Kabinet Eunoia",
  committeePeriod: "Semester 2 2026",
  privacyContactEmail: "ppimonashmalaysia@gmail.com",
  privacyLastUpdated: "2026-05-01",
  imprintLastUpdated: "2026-05-01",
};
