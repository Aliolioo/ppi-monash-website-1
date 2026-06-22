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
  whatsapp: "https://chat.whatsapp.com/B8gnqaNtpdiD5M69XW02Mj",
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
    id: "night-market-reg",
    text: {
      en: "Indonesian Night Market registration closes 15 Aug — sign up now!",
      id: "Pendaftaran Indonesian Night Market ditutup 15 Agu — daftar sekarang!",
    },
    link: "/events/indonesian-night-market-2026",
  },
  {
    id: "ppi-talks",
    text: {
      en: "PPI Talks: Mental Health & Belonging — 5 Aug, registration opening soon.",
      id: "PPI Talks: Kesehatan Mental & Rasa Memiliki — 5 Agu, pendaftaran segera dibuka.",
    },
    link: "/events/ppi-talks-mental-health-2026",
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
