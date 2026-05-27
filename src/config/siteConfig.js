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
  description:
    "Perhimpunan Pelajar Indonesia (PPI) Monash Malaysia — building a close-knit community where long-lasting friendships are forged through fun and valuable experiences.",
  vision:
    "To increase the welfare and develop the potential of Indonesian community in Monash University Malaysia",
};

// ─── 🔗 Social Links & Contact ──────────────────────────────────────────────
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ppimonash_my/",
  tiktok: "https://www.tiktok.com/@ppi.eunoia/",
  youtube: "https://www.youtube.com/@ppimonashmalaysia9894",
  whatsapp: "https://chat.whatsapp.com/B8gnqaNtpdiD5M69XW02Mj",
  email: "ppimonashmalaysia@gmail.com",
  website: "https://ppimonashmalaysia.com/",
};

// ─── 🧭 Navigation ──────────────────────────────────────────────────────────
// To add/remove pages, just add/remove items here.
// The "id" must match the section's HTML id in the page.
export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Team", id: "team" },
  { label: "Events", id: "events" },
  { label: "Articles", id: "articles" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

// ─── 📊 Stats (shown in About section) ──────────────────────────────────────
// Update these numbers each year!
export const STATS = [
  { number: "9+", label: "Years of Community" },
  { number: "6", label: "Departments" },
  { number: "50+", label: "Events Organized" },
  { number: "300+", label: "Members Connected" },
];

// ─── 🏢 Departments ─────────────────────────────────────────────────────────
export const DEPARTMENTS = [
  { name: "Executive", emoji: "👔", desc: "Leadership & coordination", folder: "executive" },
  { name: "Documentation", emoji: "📸", desc: "Photography & videography", folder: "documentation" },
  { name: "Media & Creative", emoji: "🎨", desc: "Design & social media", folder: "media-creative" },
  { name: "Welfare", emoji: "💛", desc: "Student wellbeing & support", folder: "welfare" },
  { name: "Events", emoji: "🎉", desc: "Planning & execution", folder: "events" },
  { name: "External Relations", emoji: "🤝", desc: "Partnerships & outreach", folder: "external-relations" },
];

// ─── 👥 Committee Members ────────────────────────────────────────────────────
// PHOTO CONVENTION: "folder/firstname-lastname.jpg"
// Set photo to null for placeholder initials avatar
//
// To add a new member:  { name: "Full Name", role: "Role Title", photo: "folder/filename.jpg" }
// To use placeholder:   { name: "Full Name", role: "Role Title", photo: null }
//
export const COMMITTEE = [
  {
    dept: "Executive",
    members: [
      { name: "Radhitya Hendra Putra", role: "President", photo: null },
      { name: "Nevan Elkana Hulu", role: "Vice President", photo: null },
      { name: "TBD", role: "Secretary", photo: null },
      { name: "TBD", role: "Treasurer", photo: null },
    ],
  },
  {
    dept: "Documentation",
    members: [
      { name: "TBD", role: "Head of Documentation", photo: null },
      { name: "TBD", role: "Member", photo: null },
    ],
  },
  {
    dept: "Media & Creative",
    members: [
      { name: "TBD", role: "Head of Media & Creative", photo: null },
      { name: "TBD", role: "Member", photo: null },
    ],
  },
  {
    dept: "Welfare",
    members: [
      { name: "TBD", role: "Head of Welfare", photo: null },
      { name: "TBD", role: "Member", photo: null },
    ],
  },
  {
    dept: "Events",
    members: [
      { name: "TBD", role: "Head of Events", photo: null },
      { name: "TBD", role: "Member", photo: null },
    ],
  },
  {
    dept: "External Relations",
    members: [
      { name: "TBD", role: "Head of External Relations", photo: null },
      { name: "TBD", role: "Member", photo: null },
    ],
  },
];

// ─── 🎪 Events ──────────────────────────────────────────────────────────────
// Categories available: "Welcome", "Welfare", "Cultural", "Sports", "Academic"
// (Add new categories by just using them — filter buttons auto-generate)
//
// To add a new event, copy-paste this template:
// {
//   title: "Event Name",
//   date: "DD Mon YYYY",
//   category: "Welcome",
//   desc: "Short description of the event.",
//   photos: "https://drive.google.com/...",  ← optional, remove if none
// },
//
export const EVENTS = [
  {
    title: "Rantau Heist",
    date: "14 Mar 2026",
    category: "Welcome",
    desc: "A thrilling welcome event where new intakes embark on a dangerous mission to retrieve fortune through teamwork, resilience, and a willingness to betray even their closest teammates.",
    photos: "https://drive.google.com/drive/folders/1qN7mzfjQQK42_1FI1HDEgt2S9R0cQd_L",
  },
  {
    title: "Survival Night: Game Over",
    date: "1 Nov 2025",
    category: "Welfare",
    desc: "The ultimate test of courage, strategy, and endurance. In a secret location cloaked in mystery, alliances form, tensions rise, and only the sharpest outlast the game.",
    photos: "https://drive.google.com/drive/folders/1ZN06XnGKbzB72ouGJ42sQMj7jKx6fX9e",
  },
  {
    title: "Independence Day 2025",
    date: "Aug 2025",
    category: "Cultural",
    desc: "Celebrating Indonesia's independence with cultural performances, traditional games, and a community gathering that brings everyone together.",
  },
  {
    title: "One World: Indonesia Hand in Hand",
    date: "May 2026",
    category: "Sports",
    desc: "MUISS OneWorld brought students together representing their country in four different sports — a wonderful celebration of unity through competition.",
  },
];

// ─── 📰 Articles ─────────────────────────────────────────────────────────────
// Tags: "Sports", "Academic", "Culture", "Lifestyle" (or any custom tag)
export const ARTICLES = [
  {
    title: "One World: Indonesia Hand in Hand",
    excerpt: "MUISS OneWorld has once again delivered a wonderful event with students representing their country in four different sports!",
    tag: "Sports",
    url: "https://ppimonashmalaysia.com/articles/one-world-2026/",
  },
  {
    title: "Study Tips from PPI",
    excerpt: "PPI is here to help by sharing five tips on how to balance your academics and social life as an international student.",
    tag: "Academic",
    url: "https://ppimonashmalaysia.com/articles/study-tips-2026/",
  },
  {
    title: "Ramadhan Away From Home",
    excerpt: "Navigating the holy month as an Indonesian student abroad — finding community, iftar gatherings, and keeping traditions alive.",
    tag: "Culture",
    url: "https://ppimonashmalaysia.com/articles/",
  },
];

// ─── ❓ FAQ ──────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "What documents do I need to open a bank account?",
    a: "You'll need your original passport, a bank account opening form, a copy of your offer letter, a copy of your visa approval letter, and a Student Verification Letter (request from Monash student portal).",
  },
  {
    q: "What are recommended accommodations around Monash?",
    a: "Popular options include Nadayu28 Residences, Sunway Geo Residence, and Sunway Waterfront Residence. You can also check PropertyGuru, iProperty, or UrbanRoomy for more listings.",
  },
  {
    q: "How much does it cost to live in Malaysia?",
    a: "Approximate monthly costs: Accommodation ~RM 1,100, Living expenses ~RM 1,000, Transportation ~RM 150. Total around RM 2,350/month, though this varies per person.",
  },
  {
    q: "Can I do an internship while studying at Monash?",
    a: "Yes! You can take an internship within the duration of your course.",
  },
  {
    q: "What should I do if I want to work in Malaysia after graduating?",
    a: "Find an employer willing to sponsor your work visa permit so you can work legally in the country.",
  },
  {
    q: "Does student insurance cover hospitalization?",
    a: "Yes, international student insurance should cover medical expenses. Check your policy details through the Micare Portal for specifics.",
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
