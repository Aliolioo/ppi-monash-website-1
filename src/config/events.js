// ============================================================================
// Part of the site content config (split from siteConfig.js).
// Re-exported by siteConfig.js — import from "../config/siteConfig" as usual.
// ============================================================================

// ─── 🎪 Events ──────────────────────────────────────────────────────────────
// Categories available: "Welcome", "Welfare", "Cultural", "Sports", "Academic",
// "Collaboration", "Workshop", "Community" (add new ones by just using them —
// filter buttons auto-generate)
//
// Status values (drive the colored badge + registration block on detail page):
//   "upcoming"  — announced, registration not open yet
//   "open"      — registration currently open (needs registrationLink)
//   "closed"    — registration period over, event hasn't happened yet
//   "completed" — event happened recently
//   "archived"  — event happened a while ago (shows in Past Events > by year)
//
// To add a new event, copy-paste this template:
// {
//   id: "kebab-case-slug-year",          ← unique, used in the /events/:id URL
//   title: "Event Name",
//   date: "YYYY-MM-DD",                  ← ISO format, used for sorting/grouping
//   dateDisplay: "DD Mon YYYY",           ← human-readable, used in the UI
//   time: "10:00 AM",
//   venue: "Venue name",
//   category: "Welcome",
//   status: "upcoming",
//   poster: null,                        ← image path, or null for placeholder
//   description: "Full description for the detail page.",
//   excerpt: "Short one-liner for cards.",
//   registrationLink: null,              ← set when status is "open"/"closed"
//   registrationDeadline: null,          ← "YYYY-MM-DD" or null
//   photos: null,                        ← Drive/album link, or null
//   recapArticle: null,                  ← URL to a recap article, or null
//   sponsors: [],                        ← array of names, or empty
//   organizerDept: "Events",
//   featured: false,                     ← true to highlight on the homepage
// },
//
export const EVENTS = [
  {
    id: "rantau-heist-2026",
    title: "Rantau Heist",
    date: "2026-03-14",
    dateDisplay: "14 Mar 2026",
    time: "10:00 AM",
    venue: "Sunway Lagoon, Bandar Sunway",
    category: "Welcome",
    status: "completed",
    poster: null,
    description: {
      en: "A thrilling welcome event where new intakes embarked on a dangerous mission to retrieve fortune through teamwork, resilience, and a willingness to betray even their closest teammates. Teams raced across themed checkpoints solving puzzles, completing physical challenges, and forming alliances (or rivalries) that carried on long after the heist ended.",
      id: "Acara penyambutan seru tempat mahasiswa baru menjalankan misi berbahaya untuk merebut harta melalui kerja sama tim, ketangguhan, dan kesediaan untuk mengkhianati bahkan rekan terdekat. Tim berlomba melewati pos-pos bertema sambil memecahkan teka-teki, menyelesaikan tantangan fisik, dan membentuk aliansi (atau rivalitas) yang berlanjut lama setelah heist berakhir.",
    },
    excerpt: {
      en: "New intakes embark on a dangerous mission to retrieve fortune through teamwork, resilience, and a willingness to betray even their closest teammates.",
      id: "Mahasiswa baru menjalankan misi berbahaya untuk merebut harta melalui kerja sama tim, ketangguhan, dan kesediaan mengkhianati bahkan rekan terdekat.",
    },
    registrationLink: null,
    registrationDeadline: null,
    photos: "https://drive.google.com/drive/folders/1qN7mzfjQQK42_1FI1HDEgt2S9R0cQd_L",
    recapArticle: null,
    sponsors: [],
    organizerDept: "Events",
    featured: false,
  },
  {
    id: "survival-night-2025",
    title: "Survival Night: Game Over",
    date: "2025-11-01",
    dateDisplay: "1 Nov 2025",
    time: "7:00 PM",
    venue: "Monash University Malaysia, Sunway Campus",
    category: "Welfare",
    status: "archived",
    poster: null,
    description: {
      en: "The ultimate test of courage, strategy, and endurance. In a secret location cloaked in mystery, alliances formed, tensions rose, and only the sharpest outlasted the game. A night of immersive challenges designed to bring the community closer through shared (and slightly stressful) memories.",
      id: "Ujian pamungkas keberanian, strategi, dan ketahanan. Di lokasi rahasia yang penuh misteri, aliansi terbentuk, ketegangan memuncak, dan hanya yang paling jeli yang bertahan sampai akhir. Malam penuh tantangan imersif yang dirancang untuk mendekatkan komunitas melalui kenangan bersama (yang sedikit menegangkan).",
    },
    excerpt: {
      en: "The ultimate test of courage, strategy, and endurance — alliances form, tensions rise, and only the sharpest outlast the game.",
      id: "Ujian pamungkas keberanian, strategi, dan ketahanan — aliansi terbentuk, ketegangan memuncak, dan hanya yang paling jeli yang bertahan.",
    },
    registrationLink: null,
    registrationDeadline: null,
    photos: "https://drive.google.com/drive/folders/1ZN06XnGKbzB72ouGJ42sQMj7jKx6fX9e",
    recapArticle: null,
    sponsors: [],
    organizerDept: "Welfare",
    featured: false,
  },
  {
    id: "independence-day-2025",
    title: "Independence Day 2025",
    date: "2025-08-17",
    dateDisplay: "17 Aug 2025",
    time: "5:00 PM",
    venue: "KDU Penthouse Hall, Sunway",
    category: "Cultural",
    status: "archived",
    poster: null,
    description: {
      en: "Celebrating Indonesia's independence with cultural performances, traditional games, and a community gathering that brought everyone together. The evening featured a flag ceremony, regional dance showcases, and a potluck of Indonesian dishes cooked by members themselves.",
      id: "Merayakan kemerdekaan Indonesia dengan pertunjukan budaya, permainan tradisional, dan kebersamaan yang mempersatukan semua orang. Malam itu menampilkan upacara bendera, tarian daerah, dan potluck hidangan Indonesia yang dimasak sendiri oleh para anggota.",
    },
    excerpt: {
      en: "Celebrating Indonesia's independence with cultural performances, traditional games, and a community gathering.",
      id: "Merayakan kemerdekaan Indonesia dengan pertunjukan budaya, permainan tradisional, dan kebersamaan komunitas.",
    },
    registrationLink: null,
    registrationDeadline: null,
    photos: null,
    recapArticle: null,
    sponsors: [],
    organizerDept: "Events",
    featured: false,
  },
  {
    id: "one-world-2026",
    title: "One World: Indonesia Hand in Hand",
    date: "2026-05-09",
    dateDisplay: "9 May 2026",
    time: "9:00 AM",
    venue: "Monash Sports Centre, Sunway",
    category: "Sports",
    status: "completed",
    poster: null,
    description: {
      en: "MUISS OneWorld brought students together representing their country in four different sports — a wonderful celebration of unity through competition. PPI Monash fielded teams across futsal, badminton, basketball, and tug-of-war, finishing as one of the top three contingents overall.",
      id: "MUISS OneWorld mempertemukan mahasiswa yang mewakili negaranya dalam empat cabang olahraga berbeda — perayaan persatuan yang indah melalui kompetisi. PPI Monash menurunkan tim di futsal, bulu tangkis, basket, dan tarik tambang, dan finis sebagai salah satu dari tiga kontingen terbaik secara keseluruhan.",
    },
    excerpt: {
      en: "MUISS OneWorld brought students together representing their country in four different sports — a wonderful celebration of unity through competition.",
      id: "MUISS OneWorld mempertemukan mahasiswa yang mewakili negaranya dalam empat cabang olahraga — perayaan persatuan yang indah melalui kompetisi.",
    },
    registrationLink: null,
    registrationDeadline: null,
    photos: null,
    recapArticle: "https://ppimonashmalaysia.com/articles/one-world-2026/",
    sponsors: [],
    organizerDept: "External Relations",
    featured: false,
  },
  {
    id: "ppi-talks-mental-health-2026",
    title: "PPI Talks: Mental Health & Belonging",
    date: "2026-08-05",
    dateDisplay: "5 Aug 2026",
    time: "6:30 PM",
    venue: "Block H Lecture Theatre, Monash University Malaysia",
    category: "Workshop",
    status: "upcoming",
    poster: null,
    description: {
      en: "An open conversation on mental wellbeing for Indonesian students living abroad, featuring a licensed counsellor and peer-support testimonials. Registration opens closer to the date — stay tuned on our socials.",
      id: "Obrolan terbuka tentang kesehatan mental bagi mahasiswa Indonesia yang tinggal di luar negeri, menghadirkan konselor berlisensi dan kisah dukungan sebaya. Pendaftaran dibuka mendekati tanggal acara — pantau terus media sosial kami.",
    },
    excerpt: {
      en: "An open conversation on mental wellbeing for Indonesian students living abroad, featuring a licensed counsellor and peer-support testimonials.",
      id: "Obrolan terbuka tentang kesehatan mental bagi mahasiswa Indonesia di luar negeri, menghadirkan konselor berlisensi dan kisah dukungan sebaya.",
    },
    registrationLink: null,
    registrationDeadline: null,
    photos: null,
    recapArticle: null,
    sponsors: [],
    organizerDept: "Welfare",
    featured: false,
  },
  {
    id: "indonesian-night-market-2026",
    title: "Indonesian Night Market",
    date: "2026-08-23",
    dateDisplay: "23 Aug 2026",
    time: "4:00 PM",
    venue: "Monash University Malaysia, Sunway Campus Quadrangle",
    category: "Collaboration",
    status: "open",
    poster: null,
    description: {
      en: "A street-food-style night market bringing Indonesian flavours to campus, run in collaboration with the Malaysian and Indian student associations. Expect food stalls, live acoustic performances, and a batik craft corner.",
      id: "Pasar malam bergaya jajanan kaki lima yang menghadirkan cita rasa Indonesia ke kampus, diselenggarakan bersama himpunan mahasiswa Malaysia dan India. Akan ada gerai makanan, penampilan akustik langsung, dan sudut kerajinan batik.",
    },
    excerpt: {
      en: "A street-food-style night market bringing Indonesian flavours to campus, run in collaboration with the Malaysian and Indian student associations.",
      id: "Pasar malam bergaya jajanan kaki lima yang menghadirkan cita rasa Indonesia ke kampus, bersama himpunan mahasiswa Malaysia dan India.",
    },
    // TODO: swap for the real Google Form link once registration is finalized
    registrationLink: "https://forms.gle/ppi-night-market-2026-placeholder",
    registrationDeadline: "2026-08-15",
    // Optional pre-order / PO link. Point this at a hosted form (Tally / Jotform /
    // Google Form) that shows your payment QR and accepts a proof-of-payment
    // upload — see docs/FORMS.md. Omit or set null if the event has no PO.
    // TODO: swap for the real PO form link.
    orderLink: "https://tally.so/r/ppi-night-market-merch-placeholder",
    photos: null,
    recapArticle: null,
    sponsors: ["Monash Malaysian Students' Society", "Monash Indian Students' Association"],
    organizerDept: "External Relations",
    featured: true,
  },
  {
    id: "futsal-tournament-2026",
    title: "PPI Futsal Tournament",
    date: "2026-07-30",
    dateDisplay: "30 Jul 2026",
    time: "1:00 PM",
    venue: "Sunway Pyramid Ice Arena Sports Hall",
    category: "Sports",
    status: "closed",
    poster: null,
    description: {
      en: "An inter-department futsal tournament to close out the semester with some friendly competition. Team slots filled up within 48 hours — thank you to everyone who signed up!",
      id: "Turnamen futsal antar-departemen untuk menutup semester dengan kompetisi yang bersahabat. Slot tim terisi penuh dalam 48 jam — terima kasih kepada semua yang telah mendaftar!",
    },
    excerpt: {
      en: "An inter-department futsal tournament to close out the semester with some friendly competition.",
      id: "Turnamen futsal antar-departemen untuk menutup semester dengan kompetisi yang bersahabat.",
    },
    registrationLink: "https://forms.gle/ppi-futsal-2026-placeholder",
    registrationDeadline: "2026-06-10",
    photos: null,
    recapArticle: null,
    sponsors: [],
    organizerDept: "Events",
    featured: false,
  },
  {
    id: "leadership-summit-2024",
    title: "PPI Leadership Summit",
    date: "2024-09-20",
    dateDisplay: "20 Sep 2024",
    time: "9:00 AM",
    venue: "Monash University Malaysia, Function Room 2",
    category: "Academic",
    status: "archived",
    poster: null,
    description: {
      en: "A half-day workshop for incoming and outgoing committee members on event planning, budgeting, and community leadership, capped off with a handover ceremony between generations of PPI leadership.",
      id: "Lokakarya setengah hari bagi pengurus baru dan lama tentang perencanaan acara, penganggaran, dan kepemimpinan komunitas, ditutup dengan serah terima antargenerasi kepengurusan PPI.",
    },
    excerpt: {
      en: "A half-day workshop for incoming and outgoing committee members on event planning, budgeting, and community leadership.",
      id: "Lokakarya setengah hari bagi pengurus baru dan lama tentang perencanaan acara, penganggaran, dan kepemimpinan komunitas.",
    },
    registrationLink: null,
    registrationDeadline: null,
    photos: null,
    recapArticle: null,
    sponsors: [],
    organizerDept: "Executive",
    featured: false,
  },
  {
    id: "merdeka-run-2024",
    title: "Merdeka Charity Run",
    date: "2024-08-18",
    dateDisplay: "18 Aug 2024",
    time: "7:00 AM",
    venue: "Sunway Lagoon Boulevard",
    category: "Community",
    status: "archived",
    poster: null,
    description: {
      en: "A 5km community fun run held in conjunction with Indonesian and Malaysian independence celebrations, raising funds for a local orphanage in Subang Jaya. Open to students, alumni, and the wider Sunway community.",
      id: "Lari santai komunitas sejauh 5km yang digelar bertepatan dengan perayaan kemerdekaan Indonesia dan Malaysia, untuk menggalang dana bagi panti asuhan di Subang Jaya. Terbuka untuk mahasiswa, alumni, dan komunitas Sunway yang lebih luas.",
    },
    excerpt: {
      en: "A 5km community fun run raising funds for a local orphanage, held in conjunction with Indonesian and Malaysian independence celebrations.",
      id: "Lari santai komunitas 5km untuk menggalang dana bagi panti asuhan, digelar bertepatan dengan perayaan kemerdekaan Indonesia dan Malaysia.",
    },
    registrationLink: null,
    registrationDeadline: null,
    photos: null,
    recapArticle: null,
    sponsors: ["Sunway Pyramid Mall"],
    organizerDept: "Welfare",
    featured: false,
  },
];
