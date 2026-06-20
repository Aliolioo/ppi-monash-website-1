// ============================================================================
// Category / type label translations
// ============================================================================
// Category and type fields in siteConfig stay as English strings because they
// double as stable filter keys (Set membership, === comparison). This map
// translates them for DISPLAY only. Unknown values fall back to the original
// string, so adding a new category never breaks — it just shows in English
// until a translation is added here.
//
const CATEGORY_ID = {
  // Content categories (events, articles, guides, FAQs)
  "Academic": "Akademik",
  "Academic Life": "Kehidupan Akademik",
  "Academic Tips": "Tips Akademik",
  "Accommodation": "Akomodasi",
  "Banking": "Perbankan",
  "Before You Arrive": "Sebelum Kedatangan",
  "Collaboration": "Kolaborasi",
  "Community": "Komunitas",
  "Corporate Sponsor": "Sponsor Korporat",
  "Cost of Living": "Biaya Hidup",
  "Cultural": "Budaya",
  "Documents": "Dokumen",
  "Embassy / Government": "Kedutaan / Pemerintah",
  "Event Recap": "Rangkuman Acara",
  "Event Sponsor": "Sponsor Acara",
  "Finance & Banking": "Keuangan & Perbankan",
  "First Week": "Minggu Pertama",
  "Food & Culture": "Makanan & Budaya",
  "Health & Insurance": "Kesehatan & Asuransi",
  "Health & Safety": "Kesehatan & Keselamatan",
  "Institutional Partner": "Mitra Institusional",
  "Internship": "Magang",
  "Joining PPI": "Bergabung dengan PPI",
  "Media Partner": "Mitra Media",
  "Money & Banking": "Uang & Perbankan",
  "Sports": "Olahraga",
  "Student Guide": "Panduan Mahasiswa",
  "Student Organization": "Organisasi Mahasiswa",
  "Transport": "Transportasi",
  "University Partner": "Mitra Universitas",
  "Welcome": "Penyambutan",
  "Welfare": "Kesejahteraan",
  "Workshop": "Lokakarya",

  // Partner categories
  "Media & Creative": "Media & Kreatif",
  "Media Collaboration": "Kolaborasi Media",
  "Sponsorship Partnership": "Kemitraan Sponsor",

  // Collaboration types
  "Article Exchange": "Pertukaran Artikel",
  "Cultural Exchange": "Pertukaran Budaya",
  "Institutional Program": "Program Institusional",
  "International Collaboration": "Kolaborasi Internasional",
  "PPI Malaysia Joint Event": "Acara Bersama PPI Malaysia",
};

export function translateCategory(value, lang) {
  if (lang === "id" && CATEGORY_ID[value]) return CATEGORY_ID[value];
  return value;
}
