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
      { name: "Radhitya Hendra Putra", role: { en: "President", id: "Presiden" }, photo: "executive/radhitya_hendra_putra.jpg" },
      { name: "Nevan Elkana Hulu", role: { en: "Vice President", id: "Wakil Presiden" }, photo: "executive/nevan_elkana_hulu.jpg" },
      { name: "Leona Felicia", role: { en: "Secretary 1", id: "Sekretaris 1" }, photo: "executive/leona_felicia.jpeg" },
      { name: "Gabriella Daniel", role: { en: "Treasurer 1", id: "Bendahara 1" }, photo: "executive/gabriella_daniel.jpg" },
    ],
  },
  {
    dept: "Event",
    members: [
      { name: "Eveline Gozaly", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: "event/eveline_gozaly.jpeg" },
      { name: "Valerie Rachel Hendarmin", role: { en: "Head of Department II", id: "Kepala Divisi II" }, photo: "event/valerie_rachel.jpeg" },
      { name: "Rexton Tandya", role: { en: "Subcommittee", id: "Subkomite" }, photo: "event/rexton_tandya.JPG" },
      { name: "Athayya Einosa Yusuf", role: { en: "Subcommittee", id: "Subkomite" }, photo: "event/athayya_einosa_yusuf.JPG" },
      { name: "Lovely Victoria", role: { en: "Subcommittee", id: "Subkomite" }, photo: "event/lovely_victoria.jpeg" },
      { name: "Natasya Angella Salim", role: { en: "Subcommittee", id: "Subkomite" }, photo: "event/natasya_angella.jpeg" },
    ],
  },
  {
    dept: "Logistics",
    members: [
      { name: "Steven Stanley Yeoh", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: "logistics/steven_stanley.jpg" },
      { name: "Jesslyn Angela Salim", role: { en: "Head of Department II", id: "Kepala Divisi II" }, photo: "logistics/jesslyn_angela.JPG" },
      { name: "Patricia Kosasih Hidayat", role: { en: "Subcommittee", id: "Subkomite" }, photo: "logistics/patricia_kosasih.jpg" },
      { name: "Daffa Daulay", role: { en: "Subcommittee", id: "Subkomite" }, photo: "logistics/daffa_daulay.jpg" },
      { name: "Noval Maleakhi Hulu", role: { en: "Subcommittee", id: "Subkomite" }, photo: "logistics/noval_maleakhi_hulu.jpeg" },
      { name: "Muhamad Bayu Raditya Maga Ghaly", role: { en: "Subcommittee", id: "Subkomite" }, photo: "logistics/muhamad_bayu.jpeg" },
      { name: "Matthew Wijaya", role: { en: "Subcommittee", id: "Subkomite" }, photo: "logistics/matthew_wijaya.JPG" },
      { name: "Elwyn Chieng", role: { en: "Subcommittee", id: "Subkomite" }, photo: "logistics/elwyn_chieng.jpg" },
    ],
  },
  {
    dept: "Public Relations",
    members: [
      { name: "Karina Renata Halim", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: "public-relations/karina_renata_halim.JPG" },
      { name: "Ayesha Adalia Abraham", role: { en: "Head of Department II", id: "Kepala Divisi II" }, photo: "public-relations/ayesha_adalia_abraham.JPG" },
      { name: "Leonardo Sanjaya", role: { en: "Subcommittee", id: "Subkomite" }, photo: "public-relations/leonardo_sanjaya.JPG" },
      { name: "Inviferty Vellarajita", role: { en: "Subcommittee", id: "Subkomite" }, photo: "public-relations/inviferty_vellarajita.JPG" },
      { name: "Christiana Aurellia Hansarlie", role: { en: "Subcommittee", id: "Subkomite" }, photo: "public-relations/christiana_aurellia_hansarlie.JPG" },
      { name: "Danielle Brandy", role: { en: "Subcommittee", id: "Subkomite" }, photo: "public-relations/danielle_brandy.jpeg" },
    ],
  },
  {
    dept: "Publicity (Design)",
    members: [
      { name: "Anabela Fitriani Irsan", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: "publicity-design/anabela-fitriani-irsan.jpg" },
      { name: "Nabila Dealova Elang Mulia", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-design/nabila-dealova-elang-mulia.jpeg" },
    ],
  },
  {
    dept: "Publicity (Documentation)",
    members: [
      { name: "Collin Japit", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: "publicity-documentation/collin-japit.jpg" },
      { name: "Harry Setiawan", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-documentation/harry-setiawan.jpg" },
      { name: "Chellyne Grissela", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-documentation/chellyne-grissela_.jpg" },
      { name: "Annisa Rhiana Syahira", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-documentation/annisa-syahira.jpg" },
      { name: "Clara Graciella Hadiman", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-documentation/clara-graciella.jpg" },
    ],
  },
  {
    dept: "Publicity (Social Media)",
    members: [
      { name: "Adytio Wirdany", role: { en: "Head of Department", id: "Kepala Divisi" }, photo: "publicity-social-media/adytio_wirdany.JPG" },
      { name: "Maheswari Sheila Luthfiyaputri", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-social-media/mahes_sheila.JPG" },
      { name: "Indira Krisha", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-social-media/indira_krisha.JPG" },
      { name: "Patrick Evan", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-social-media/patrick_evan.JPG" },
      { name: "Nicole Felisha Budiawan", role: { en: "Subcommittee", id: "Subkomite" }, photo: "publicity-social-media/nicole_felisha_budiawan.JPG" },
    ],
  },
];
