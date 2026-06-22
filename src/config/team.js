// ============================================================================
// Part of the site content config (split from siteConfig.js).
// Re-exported by siteConfig.js — import from "../config/siteConfig" as usual.
// ============================================================================

// ─── 🏢 Departments ─────────────────────────────────────────────────────────
// NOTE: name.en doubles as the stable key that COMMITTEE entries reference via
// their `dept` field — keep the English value in sync if you rename a department.
export const DEPARTMENTS = [
  { name: { en: "Executive", id: "Eksekutif" }, emoji: "👔", desc: { en: "Leadership & coordination", id: "Kepemimpinan & koordinasi" }, folder: "executive" },
  { name: { en: "Event", id: "Acara" }, emoji: "🎉", desc: { en: "Planning & running events", id: "Perencanaan & pelaksanaan acara" }, folder: "event" },
  { name: { en: "Logistics", id: "Logistik" }, emoji: "📦", desc: { en: "Operations, venues & equipment", id: "Operasional, tempat & perlengkapan" }, folder: "logistics" },
  { name: { en: "Public Relations", id: "Hubungan Masyarakat" }, emoji: "🤝", desc: { en: "Partnerships & outreach", id: "Kemitraan & penjangkauan" }, folder: "public-relations" },
  { name: { en: "Publicity (Design)", id: "Publikasi (Desain)" }, emoji: "🎨", desc: { en: "Graphic design & branding", id: "Desain grafis & branding" }, folder: "publicity-design" },
  { name: { en: "Publicity (Documentation)", id: "Publikasi (Dokumentasi)" }, emoji: "📸", desc: { en: "Photography & videography", id: "Fotografi & videografi" }, folder: "publicity-documentation" },
  { name: { en: "Publicity (Social Media)", id: "Publikasi (Media Sosial)" }, emoji: "📱", desc: { en: "Social media & content", id: "Media sosial & konten" }, folder: "publicity-social-media" },
];

// ─── 👥 Committee Members ────────────────────────────────────────────────────
// PHOTO CONVENTION: "folder/firstname-lastname.jpg"
// Set photo to null for placeholder initials avatar
//
// To add a new member:  { name: "Full Name", role: "Role Title", photo: "folder/filename.jpg" }
// To use placeholder:   { name: "Full Name", role: "Role Title", photo: null }
//
// `dept` matches DEPARTMENTS name.en (the stable key). `role` is localized.
export const COMMITTEE = [
  {
    dept: "Executive",
    members: [
      { name: "Radhitya Hendra Putra", role: { en: "President", id: "Presiden" }, photo: null },
      { name: "Nevan Elkana Hulu", role: { en: "Vice President", id: "Wakil Presiden" }, photo: null },
      { name: "Leona Felicia", role: { en: "Secretary 1", id: "Sekretaris 1" }, photo: null },
      { name: "Gabriella Daniel", role: { en: "Treasurer 1", id: "Bendahara 1" }, photo: null },
    ],
  },
  {
    dept: "Event",
    members: [
      { name: "Eveline Gozaly", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: null },
      { name: "Valerie Rachel Hendarmin", role: { en: "Head of Department II", id: "Kepala Divisi II" }, photo: null },
      { name: "Rexton Tandya", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Athayya Einosa Yusuf", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Lovely Victoria", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Natasya Angella Salim", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
    ],
  },
  {
    dept: "Logistics",
    members: [
      { name: "Steven Stanley Yeoh", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: null },
      { name: "Jesslyn Angela Salim", role: { en: "Head of Department II", id: "Kepala Divisi II" }, photo: null },
      { name: "Patricia Kosasih Hidayat", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Daffa Daulay", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Noval Maleakhi Hulu", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Muhamad Bayu Raditya Maga Ghaly", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Matthew Wijaya", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Elwyn Chieng", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
    ],
  },
  {
    dept: "Public Relations",
    members: [
      { name: "Karina Renata Halim", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: null },
      { name: "Ayesha Adalia Abraham", role: { en: "Head of Department II", id: "Kepala Divisi II" }, photo: null },
      { name: "Leonardo Sanjaya", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Inviferty Vellarajita", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Christiana Aurellia Hansarlie", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Danielle Brandy", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
    ],
  },
  {
    dept: "Publicity (Design)",
    members: [
      { name: "Anabela Fitriani Irsan", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: null },
      { name: "Nabila Dealova Elang Mulia", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
    ],
  },
  {
    dept: "Publicity (Documentation)",
    members: [
      { name: "Collin Japit", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: null },
      { name: "Harry Setiawan", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Chellyne Grissela", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Annisa Rhiana Syahira", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Clara Graciella Hadiman", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
    ],
  },
  {
    dept: "Publicity (Social Media)",
    members: [
      { name: "Adytio Wirdany", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: null },
      { name: "Maheswari Sheila Luthfiyaputri", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Indira Krisha", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Patrick Evan", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
      { name: "Nicole Felisha Budiawan", role: { en: "Subcommittee", id: "Subkomite" }, photo: null },
    ],
  },
];
