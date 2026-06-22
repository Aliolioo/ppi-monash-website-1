// ============================================================================
// Part of the site content config (split from siteConfig.js).
// Re-exported by siteConfig.js — import from "../config/siteConfig" as usual.
// ============================================================================

// ─── ❓ FAQ ──────────────────────────────────────────────────────────────────
// Schema: { id, q, a, category, lastUpdated, relatedGuideIds[] }
// "relatedGuideIds" are STUDENT_GUIDES ids — shown as quick links inside the
// expanded answer so users can jump to the full guide.
//
// Categories in use (add new ones freely — filter pills auto-generate):
// "Banking" | "Accommodation" | "Cost of Living" | "Documents" |
// "Internship" | "Health & Insurance" | "Transport" | "Academic Life" |
// "Community"
//
export const FAQS = [
  // ── Banking ────────────────────────────────────────────────────────────────
  {
    id: "bank-account-documents",
    q: {
      en: "What documents do I need to open a bank account?",
      id: "Dokumen apa saja yang dibutuhkan untuk membuka rekening bank?",
    },
    a: {
      en: "You'll need your original passport, a bank account opening form, a copy of your offer letter, a copy of your visa approval letter, and a Student Verification Letter from the Monash student portal. Some banks accept your VAL as a temporary substitute before your visa sticker is processed.",
      id: "Kamu memerlukan paspor asli, formulir pembukaan rekening, salinan offer letter, salinan visa approval letter, dan Student Verification Letter dari portal mahasiswa Monash. Beberapa bank menerima VAL sebagai pengganti sementara sebelum stiker visamu selesai diproses.",
    },
    category: "Banking",
    lastUpdated: "2026-05-01",
    relatedGuideIds: ["open-bank-account"],
  },
  {
    id: "bank-account-timing",
    q: {
      en: "When is the best time to open a bank account after arriving?",
      id: "Kapan waktu terbaik membuka rekening bank setelah tiba?",
    },
    a: {
      en: "As early as possible — ideally within your first two weeks. Getting your Student Verification Letter from the Monash portal first is the critical step. Maybank and CIMB in Sunway Pyramid are the most convenient options for students near campus.",
      id: "Sesegera mungkin — idealnya dalam dua minggu pertama. Mengurus Student Verification Letter dari portal Monash terlebih dahulu adalah langkah paling penting. Maybank dan CIMB di Sunway Pyramid adalah pilihan paling praktis bagi mahasiswa di sekitar kampus.",
    },
    category: "Banking",
    lastUpdated: "2026-05-01",
    relatedGuideIds: ["open-bank-account"],
  },
  // ── Accommodation ──────────────────────────────────────────────────────────
  {
    id: "accommodation-options",
    q: {
      en: "What are recommended accommodations around Monash?",
      id: "Apa saja akomodasi yang direkomendasikan di sekitar Monash?",
    },
    a: {
      en: "Popular options include Nadayu28 Residences, Sunway Geo Residence, and Sunway Waterfront Residence. You can also check PropertyGuru, iProperty, or UrbanRoomy for current listings. Most Indonesian students prefer condos within walking distance of campus.",
      id: "Pilihan populer antara lain Nadayu28 Residences, Sunway Geo Residence, dan Sunway Waterfront Residence. Kamu juga bisa mengecek PropertyGuru, iProperty, atau UrbanRoomy untuk daftar terbaru. Sebagian besar mahasiswa Indonesia memilih kondo yang bisa dijangkau dengan berjalan kaki ke kampus.",
    },
    category: "Accommodation",
    lastUpdated: "2026-04-15",
    relatedGuideIds: ["find-accommodation"],
  },
  {
    id: "on-campus-accommodation",
    q: {
      en: "Can I live on campus at Monash Malaysia?",
      id: "Apakah saya bisa tinggal di asrama kampus Monash Malaysia?",
    },
    a: {
      en: "Yes, Monash Malaysia has on-campus residential options, but availability is limited and they fill up quickly. Apply as early as possible through the Monash student portal. Most students end up in the surrounding Bandar Sunway area, which is still very close to campus.",
      id: "Ya, Monash Malaysia memiliki pilihan asrama di kampus, tetapi ketersediaannya terbatas dan cepat penuh. Daftarlah sedini mungkin melalui portal mahasiswa Monash. Sebagian besar mahasiswa akhirnya tinggal di kawasan Bandar Sunway sekitarnya, yang tetap sangat dekat dengan kampus.",
    },
    category: "Accommodation",
    lastUpdated: "2026-04-15",
    relatedGuideIds: ["find-accommodation"],
  },
  // ── Cost of Living ─────────────────────────────────────────────────────────
  {
    id: "cost-of-living-budget",
    q: {
      en: "How much does it cost to live in Malaysia as a student?",
      id: "Berapa biaya hidup di Malaysia sebagai mahasiswa?",
    },
    a: {
      en: "Approximate monthly costs: accommodation ~RM 1,100, food ~RM 700–900, transportation ~RM 150, phone and miscellaneous ~RM 200–300. Total estimate is roughly RM 2,150–2,500/month, though this varies considerably depending on lifestyle.",
      id: "Perkiraan biaya bulanan: akomodasi ~RM 1.100, makan ~RM 700–900, transportasi ~RM 150, pulsa dan lain-lain ~RM 200–300. Total perkiraan sekitar RM 2.150–2.500/bulan, meskipun sangat bervariasi tergantung gaya hidup.",
    },
    category: "Cost of Living",
    lastUpdated: "2026-05-01",
    relatedGuideIds: ["cost-of-living"],
  },
  {
    id: "monthly-expenses-breakdown",
    q: {
      en: "What are the biggest expenses to budget for each month?",
      id: "Pengeluaran terbesar apa yang perlu dianggarkan setiap bulan?",
    },
    a: {
      en: "Rent is usually the largest single expense. After that, food (especially if you rely on delivery apps) and transport into KL can add up quickly. Cooking with flatmates and using the BRT instead of Grab regularly are the two most effective ways to cut costs.",
      id: "Sewa biasanya adalah pengeluaran tunggal terbesar. Setelah itu, makan (terutama jika sering pakai aplikasi pesan-antar) dan transportasi ke KL bisa cepat membengkak. Memasak bersama teman sekamar dan naik BRT alih-alih Grab secara rutin adalah dua cara paling efektif untuk menekan biaya.",
    },
    category: "Cost of Living",
    lastUpdated: "2026-05-01",
    relatedGuideIds: ["cost-of-living"],
  },
  // ── Documents ──────────────────────────────────────────────────────────────
  {
    id: "arrival-documents",
    q: {
      en: "What documents do I need to carry on my arrival day?",
      id: "Dokumen apa yang harus dibawa pada hari kedatangan?",
    },
    a: {
      en: "Carry your original passport (with visa sticker if already issued), your Visa Approval Letter (VAL) printout, your Monash offer letter, and proof of accommodation for your first few nights. Keep digital backups in your email and cloud storage in case originals are misplaced.",
      id: "Bawalah paspor asli (dengan stiker visa jika sudah terbit), cetakan Visa Approval Letter (VAL), offer letter Monash, dan bukti akomodasi untuk beberapa malam pertama. Simpan cadangan digital di email dan penyimpanan awan untuk berjaga-jaga jika dokumen asli tercecer.",
    },
    category: "Documents",
    lastUpdated: "2026-04-10",
    relatedGuideIds: ["documents-you-need", "before-arrival-checklist"],
  },
  {
    id: "extend-student-pass",
    q: {
      en: "How do I renew my student pass before it expires?",
      id: "Bagaimana cara memperpanjang student pass sebelum kedaluwarsa?",
    },
    a: {
      en: "Visit the Monash International Student Services office well in advance — at least a month before expiry. Bring your passport, current iKad, and a current offer of enrolment letter. Do not wait until the expiry date; overstaying has serious consequences.",
      id: "Kunjungi kantor Monash International Student Services jauh-jauh hari — setidaknya sebulan sebelum kedaluwarsa. Bawa paspor, iKad terbaru, dan surat penerimaan pendaftaran (offer of enrolment) terbaru. Jangan menunggu sampai tanggal kedaluwarsa; overstay memiliki konsekuensi serius.",
    },
    category: "Documents",
    lastUpdated: "2026-04-22",
    relatedGuideIds: ["student-id-and-ikad"],
  },
  // ── Internship ─────────────────────────────────────────────────────────────
  {
    id: "internship-eligibility",
    q: {
      en: "Can I do an internship while studying at Monash?",
      id: "Apakah saya boleh magang sambil kuliah di Monash?",
    },
    a: {
      en: "Yes, you can take an internship within the duration of your course. Many programs have an internship unit built in; check with your faculty. Ensure any placement is within your authorised course period as it may affect your student pass status.",
      id: "Ya, kamu boleh mengambil magang selama masa studimu. Banyak program memiliki unit magang yang sudah terintegrasi; tanyakan ke fakultasmu. Pastikan penempatan magang berada dalam periode studi yang diizinkan karena dapat memengaruhi status student pass-mu.",
    },
    category: "Internship",
    lastUpdated: "2026-04-01",
    relatedGuideIds: [],
  },
  {
    id: "work-after-graduation",
    q: {
      en: "What should I do if I want to work in Malaysia after graduating?",
      id: "Apa yang harus dilakukan jika ingin bekerja di Malaysia setelah lulus?",
    },
    a: {
      en: "You'll need an employer willing to sponsor your Employment Pass (work visa). Start the conversation early — ideally before your final semester. Your student pass expires when your studies end, so plan the transition carefully to avoid a gap in status.",
      id: "Kamu memerlukan pemberi kerja yang bersedia mensponsori Employment Pass (visa kerja). Mulailah pembicaraan sejak dini — idealnya sebelum semester terakhir. Student pass-mu berakhir saat studimu selesai, jadi rencanakan transisi dengan cermat agar tidak ada jeda status.",
    },
    category: "Internship",
    lastUpdated: "2026-04-01",
    relatedGuideIds: [],
  },
  // ── Health & Insurance ─────────────────────────────────────────────────────
  {
    id: "student-insurance-coverage",
    q: {
      en: "Does my student insurance cover hospitalisation?",
      id: "Apakah asuransi mahasiswa saya menanggung rawat inap?",
    },
    a: {
      en: "Yes, international student insurance at Monash should cover hospitalisation at panel hospitals and outpatient visits at panel clinics. Check your specific policy through the Micare Portal — coverage limits for pre-existing conditions vary. Always carry your iKad and insurance details to every clinic visit.",
      id: "Ya, asuransi mahasiswa internasional di Monash umumnya menanggung rawat inap di rumah sakit panel dan rawat jalan di klinik panel. Periksa polismu secara spesifik melalui Micare Portal — batas pertanggungan untuk kondisi bawaan bervariasi. Selalu bawa iKad dan detail asuransimu setiap kali ke klinik.",
    },
    category: "Health & Insurance",
    lastUpdated: "2026-04-05",
    relatedGuideIds: ["health-insurance"],
  },
  {
    id: "emergency-contacts",
    q: {
      en: "What numbers should I save in case of an emergency?",
      id: "Nomor apa saja yang sebaiknya disimpan untuk keadaan darurat?",
    },
    a: {
      en: "Save these before you need them: Malaysia general emergency — 999; Monash campus security — check the university website for the current number; Sunway Medical Centre emergency (closest hospital). Also save a PPI committee member's number for non-emergency situations where a familiar voice helps.",
      id: "Simpan nomor-nomor ini sebelum kamu membutuhkannya: darurat umum Malaysia — 999; keamanan kampus Monash — cek situs universitas untuk nomor terbaru; gawat darurat Sunway Medical Centre (rumah sakit terdekat). Simpan juga nomor pengurus PPI untuk situasi non-darurat saat suara yang familier dapat membantu.",
    },
    category: "Health & Insurance",
    lastUpdated: "2026-04-05",
    relatedGuideIds: ["health-insurance"],
  },
  // ── Transport ──────────────────────────────────────────────────────────────
  {
    id: "airport-to-sunway",
    q: {
      en: "How do I get from KLIA to Sunway on my first day?",
      id: "Bagaimana cara dari KLIA ke Sunway pada hari pertama?",
    },
    a: {
      en: "The most common route is KLIA Ekspres to KL Sentral, then KTM Komuter to Subang Jaya or Setia Jaya, then a Grab to your accommodation. Total cost is roughly RM 55–80 depending on Grab pricing. Airport coaches (e.g., Aerobus) also serve Sunway directly — check current schedules before you land.",
      id: "Rute yang paling umum adalah KLIA Ekspres ke KL Sentral, lalu KTM Komuter ke Subang Jaya atau Setia Jaya, kemudian Grab ke akomodasimu. Total biaya sekitar RM 55–80 tergantung tarif Grab. Bus bandara (mis. Aerobus) juga melayani Sunway secara langsung — cek jadwal terbaru sebelum kamu mendarat.",
    },
    category: "Transport",
    lastUpdated: "2026-03-28",
    relatedGuideIds: ["transport-around-sunway"],
  },
  {
    id: "brt-sunway-line",
    q: {
      en: "How does the BRT Sunway Line work, and is it free?",
      id: "Bagaimana cara kerja BRT Sunway Line, dan apakah gratis?",
    },
    a: {
      en: "The BRT Sunway Line connects Sunway Pyramid and nearby stops (including close to campus) to USJ7 KTM station. It is not free but fares are low (around RM 1–2 per trip). From USJ7 you can connect to KL via KTM Komuter. It's the most cost-effective way to travel into KL regularly.",
      id: "BRT Sunway Line menghubungkan Sunway Pyramid dan halte di sekitarnya (termasuk dekat kampus) ke stasiun KTM USJ7. Tidak gratis, tetapi tarifnya murah (sekitar RM 1–2 per perjalanan). Dari USJ7 kamu bisa melanjutkan ke KL via KTM Komuter. Ini cara paling hemat untuk bepergian ke KL secara rutin.",
    },
    category: "Transport",
    lastUpdated: "2026-03-28",
    relatedGuideIds: ["transport-around-sunway"],
  },
  // ── Academic Life ──────────────────────────────────────────────────────────
  {
    id: "grading-system",
    q: {
      en: "How does the Monash grading system work?",
      id: "Bagaimana sistem penilaian di Monash bekerja?",
    },
    a: {
      en: "Monash uses a percentage-based grade system: 50–59% is a Pass (P), 60–69% is a Credit (C), 70–79% is a Distinction (D), and 80%+ is a High Distinction (HD). The WAM (Weighted Average Mark) is your overall academic average, weighted by credit points. Higher-credit and final-year units count more.",
      id: "Monash menggunakan sistem nilai berbasis persentase: 50–59% adalah Pass (P), 60–69% Credit (C), 70–79% Distinction (D), dan 80%+ High Distinction (HD). WAM (Weighted Average Mark) adalah rata-rata akademik keseluruhanmu, ditimbang berdasarkan poin kredit. Unit berkredit lebih tinggi dan unit tahun akhir lebih besar bobotnya.",
    },
    category: "Academic Life",
    lastUpdated: "2026-03-01",
    relatedGuideIds: [],
  },
  // ── Community ──────────────────────────────────────────────────────────────
  {
    id: "join-whatsapp-group",
    q: {
      en: "How do I join the PPI Monash WhatsApp group?",
      id: "Bagaimana cara bergabung dengan grup WhatsApp PPI Monash?",
    },
    a: {
      en: "The official PPI Monash WhatsApp group link is shared at orientation events and on our Instagram page. You can also reach out to any current committee member or send a message through the Contact page and we'll add you. It's the fastest way to hear about upcoming events and get quick answers.",
      id: "Tautan resmi grup WhatsApp PPI Monash dibagikan saat acara orientasi dan di halaman Instagram kami. Kamu juga bisa menghubungi pengurus mana pun atau mengirim pesan melalui halaman Kontak, dan kami akan menambahkanmu. Ini cara tercepat untuk mengetahui acara mendatang dan mendapat jawaban cepat.",
    },
    category: "Community",
    lastUpdated: "2026-04-28",
    relatedGuideIds: ["join-ppi-activities"],
  },
];
