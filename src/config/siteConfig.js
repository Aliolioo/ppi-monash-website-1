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

// ─── 🧭 Student Guide ────────────────────────────────────────────────────────
// Categories: "Before You Arrive" | "First Week" | "Money & Banking" |
// "Accommodation" | "Transport" | "Health & Safety" | "Academic Life" |
// "Food & Culture" | "Joining PPI" (add new ones by just using them — filter
// buttons auto-generate)
//
// "body" supports the same markdown subset as Articles (see
// src/utils/markdown.js), including [link text](url) inline links.
//
// "relatedFaqIds" are indices into the FAQS array below (FAQ entries don't
// have their own id field yet — using array position keeps this simple).
//
// To add a new guide, copy-paste this template:
// {
//   id: "kebab-case-slug",             ← unique, used in the /guide/:id URL
//   title: "Guide Title",
//   icon: "🏦",                         ← emoji shown on the card and detail header
//   category: "Before You Arrive",
//   excerpt: "Short 1-2 sentence preview for cards.",
//   lastUpdated: "YYYY-MM-DD",
//   disclaimer: null,                  ← string shown in an amber notice box, or null
//   importantLinks: [],                ← [{ label, url }], or []
//   relatedFaqIds: [],                 ← FAQS array indices, or []
//   relatedGuideIds: [],                ← explicit IDs, or [] to auto-pick by category
//   body: `Full body text...`,
// },
//
export const STUDENT_GUIDES = [
  {
    id: "before-arrival-checklist",
    title: { en: "Before Arrival Checklist", id: "Checklist Sebelum Keberangkatan" },
    icon: "🧳",
    category: "Before You Arrive",
    excerpt: { en: "Everything to sort out in the weeks before you fly — documents, money, and the small things people forget.", id: "Semua hal yang perlu diurus beberapa minggu sebelum terbang — dokumen, keuangan, dan hal-hal kecil yang sering terlupa." },
    lastUpdated: "2026-04-10",
    disclaimer: "Visa and immigration requirements change without much notice. Always double-check with the Malaysian embassy or Monash's international office before your departure.",
    importantLinks: [],
    relatedFaqIds: [],
    relatedGuideIds: ["documents-you-need", "what-to-pack"],
    body: `Moving to a new country is exciting, stressful, and a little chaotic all at once. This checklist is the one we wish someone had handed us before our first flight to Malaysia.

## 6-8 Weeks Before You Fly

- Confirm your offer letter and accept it formally through the Monash portal
- Apply for your student visa (eVAL/VAL) — this can take longer than expected
- Book flights once your visa approval letter (VAL) is confirmed, not before

## 2-3 Weeks Before

- Photocopy and scan every important document (passport, offer letter, VAL) — keep digital copies in your email and a cloud drive
- Notify your home bank that you'll be using your card abroad
- Join the PPI Monash WhatsApp group so you have people to ask questions before you even land — see our [Joining PPI guide](https://ppimonashmalaysia.com/guide/join-ppi-activities) for how

## The Week Before

**Pack early, not the night before.** Check the [What to Pack guide](https://ppimonashmalaysia.com/guide/what-to-pack) for what's actually worth bringing versus buying in Malaysia.

A few things people forget until the last minute:

- Travel insurance for the flight itself (separate from your student insurance)
- Enough cash in Ringgit (or USD) for your first few days before you can open a bank account
- A printed copy of your accommodation confirmation, even if you booked online

**You will forget something.** Almost everyone does. The good news is Sunway has almost everything you'd need within a 10-minute walk of campus — so don't panic if a checklist item slips through.`,
  },
  {
    id: "documents-you-need",
    title: { en: "Documents You Need to Bring", id: "Dokumen yang Perlu Kamu Bawa" },
    icon: "📄",
    category: "Before You Arrive",
    excerpt: { en: "The exact paperwork you need physically with you on arrival day, and copies you should have ready before that.", id: "Dokumen apa saja yang wajib kamu bawa secara fisik pada hari kedatangan, dan salinan yang perlu disiapkan sebelumnya." },
    lastUpdated: "2026-04-10",
    disclaimer: null,
    importantLinks: [],
    relatedFaqIds: ["arrival-documents"],
    relatedGuideIds: ["before-arrival-checklist", "open-bank-account"],
    body: `Immigration and campus staff will ask for documents more times than you expect in your first month. Here's what to actually carry with you versus what can stay digital.

## Documents to Carry Physically

- Original passport (with visa sticker once issued)
- Visa Approval Letter (VAL) printout
- Offer letter from Monash
- Proof of accommodation for at least your first few nights

## Documents to Have Ready Digitally and on Paper

- Academic transcripts and certificates (some departments ask for these again locally)
- Passport-sized photographs — bring more than you think you need
- Parent/guardian contact details, in case the university needs an emergency contact on file

## After You Land

Within your first two weeks, you'll typically need to:

- Complete your **Student Pass endorsement** at the immigration counter on campus
- Request a Student Verification Letter from the Monash student portal (you'll need this for banking, see our [bank account guide](https://ppimonashmalaysia.com/guide/open-bank-account))
- Update your local address with the university once you've settled into accommodation

**Keep a single folder — physical or digital — with everything in one place.** You'll be asked for the same three or four documents over and over in your first month, and digging through your email each time gets old fast.`,
  },
  {
    id: "what-to-pack",
    title: { en: "What to Pack (and What Not to)", id: "Apa yang Perlu Dikemas (dan Apa yang Tidak)" },
    icon: "🎒",
    category: "Before You Arrive",
    excerpt: { en: "What's genuinely worth packing from Indonesia, and what you should just buy once you land in Malaysia.", id: "Apa yang benar-benar layak dibawa dari Indonesia, dan apa yang sebaiknya kamu beli saja begitu tiba di Malaysia." },
    lastUpdated: "2026-03-20",
    disclaimer: null,
    importantLinks: [],
    relatedFaqIds: [],
    relatedGuideIds: [],
    body: `Luggage allowances are smaller than your ambitions. Here's what past students say was actually worth the suitcase space.

## Worth Bringing

- A reasonable supply of any prescription medication, plus the prescription itself
- Adapter plugs (Malaysia uses Type G — different from Indonesia's Type C/F)
- Comfortable formal wear for at least one or two PPI or campus events
- *A few* items that genuinely remind you of home — they help more than you'd think in week three

## Not Worth the Suitcase Space

- Heavy bedding — Sunway's climate rarely needs it, and bedding is cheap and easy to find locally
- Large quantities of toiletries — almost everything is available in Sunway Pyramid or nearby pharmacies
- Textbooks "just in case" — check your unit guides first; most are available digitally or in the library

## Climate Reality Check

Malaysia is **hot and humid year-round**, with sudden afternoon downpours. Pack:

- Light, breathable clothing rather than layers
- A compact umbrella you can keep in your bag at all times
- At least one light jacket for air-conditioned lecture halls, which can be surprisingly cold

**When in doubt, buy it there.** Sunway Pyramid and the nearby shops cover almost anything you'd realistically need, often cheaper than shipping it from home.`,
  },
  {
    id: "survive-first-week",
    title: { en: "Survive Your First Week", id: "Bertahan di Minggu Pertamamu" },
    icon: "🌟",
    category: "First Week",
    excerpt: { en: "Orientation week is a blur. Here's what actually matters and what you can safely ignore.", id: "Minggu orientasi terasa membingungkan. Ini hal yang benar-benar penting dan apa yang bisa kamu abaikan dengan aman." },
    lastUpdated: "2026-04-22",
    disclaimer: null,
    importantLinks: [],
    relatedFaqIds: [],
    relatedGuideIds: ["student-id-and-ikad", "join-ppi-activities"],
    body: `Orientation week throws a lot at you at once. Here's a more honest priority list than the official schedule gives you.

## What Actually Matters

- Getting your **student ID and iKad sorted** (see our [dedicated guide](https://ppimonashmalaysia.com/guide/student-id-and-ikad)) — you'll need both almost immediately
- Finding where your actual lecture halls and tutorial rooms are, in person, before your first class
- Joining your faculty's WhatsApp or Discord group

## What You Can Skip (Mostly)

- Every single info booth at the orientation fair — pick the ones relevant to you and move on
- Buying textbooks on day one — wait until your first tutorial confirms what you actually need

## Meeting People

The fastest way to stop feeling like a stranger on campus:

- Say yes to the first PPI welcome event you're invited to
- Sit with the same small group in your first few tutorials
- Don't wait for the "perfect" moment to introduce yourself — everyone is equally new and equally nervous

**It gets easier within two to three weeks.** Almost every senior student says the same thing about their first week: it felt impossible to imagine feeling at home, and then suddenly, you just did.`,
  },
  {
    id: "student-id-and-ikad",
    title: { en: "Student ID and iKad Explained", id: "Mengenal Student ID dan iKad" },
    icon: "🪪",
    category: "First Week",
    excerpt: { en: "What the iKad actually is, why you need both it and your student ID, and where to sort them out.", id: "Apa itu iKad sebenarnya, mengapa kamu butuh iKad sekaligus student ID, dan di mana mengurusnya." },
    lastUpdated: "2026-04-22",
    disclaimer: "Processing locations and queue times change between intakes — check the latest update on the Monash student portal before heading over.",
    importantLinks: [],
    relatedFaqIds: ["extend-student-pass"],
    relatedGuideIds: ["survive-first-week"],
    body: `New students often confuse these two cards — they're related but not the same thing, and you'll need both.

## Student ID Card

Your Monash student ID is used for:

- Campus building access and library borrowing
- Printing credits and student discounts around Sunway
- Verifying enrolment for things like bank accounts and SIM card registration

## iKad (International Student Card)

The iKad is issued by Malaysian immigration and confirms your student pass status. You'll need it for:

- Any interaction with Malaysian immigration
- Some bank and telco registrations that specifically ask for proof of student pass
- **Re-entering Malaysia** if you travel home during semester breaks

## Getting Them Sorted

Steps that worked for most students:

- Complete your Student Pass endorsement first — the iKad process depends on this being done
- Bring your passport, VAL, and passport photos to the relevant campus office
- Processing can take a few weeks, so apply as early as orientation week allows

**Don't lose either card.** Replacing them mid-semester is a slower, more annoying process than getting them the first time.`,
  },
  {
    id: "open-bank-account",
    title: { en: "Open a Bank Account", id: "Membuka Rekening Bank" },
    icon: "🏦",
    category: "Money & Banking",
    excerpt: { en: "What you need to bring and which banks work best for international students.", id: "Apa yang perlu kamu bawa dan bank mana yang paling cocok untuk mahasiswa internasional." },
    lastUpdated: "2026-05-01",
    disclaimer: "Bank policies and requirements may change. Always confirm with the bank before visiting.",
    importantLinks: [
      { label: "Maybank International Student Info", url: "https://www.maybank2u.com.my/student-accounts" },
      { label: "CIMB Student Account", url: "https://www.cimb.com.my/student-account" },
    ],
    relatedFaqIds: ["bank-account-documents", "bank-account-timing"],
    relatedGuideIds: ["cost-of-living", "documents-you-need"],
    body: `One of the first administrative tasks every new student faces is opening a local bank account. It sounds simple, but the process can be confusing if nobody warns you what to expect — so here's what you actually need.

## What Documents You Need

- Original passport
- Bank account opening form (available at the branch)
- Copy of your offer letter
- Copy of your visa approval letter
- Student Verification Letter from Monash (request this from the student portal first)

## Which Bank Should You Choose?

Most Indonesian students at Monash open accounts with **Maybank** or **CIMB** because they have branches in Sunway Pyramid, about five minutes from campus. See the [Useful Links](https://ppimonashmalaysia.com/guide/open-bank-account) below for direct student account pages.

## Steps to Follow

- Request your Student Verification Letter from the Monash portal first
- Go to the branch with all documents in hand
- Open the account *in person* — online opening usually doesn't work for international students
- Ask for a debit card and online banking setup at the same time, so you don't need a second trip

## Timing Matters

Try to open your account within your first two weeks. Some branches accept your VAL as a temporary substitute before your visa sticker is fully processed, but this varies — call ahead if you can.

## Tip From PPI

**Bring a friend who already has an account.** Bank staff sometimes ask for a local reference, and the process is noticeably smoother when someone with you already knows how it works.`,
  },
  {
    id: "cost-of-living",
    title: { en: "Real Cost of Living in Sunway", id: "Biaya Hidup Sebenarnya di Sunway" },
    icon: "💰",
    category: "Money & Banking",
    excerpt: { en: "A realistic monthly budget breakdown for living around Sunway — not the rosy estimate from the brochure.", id: "Rincian anggaran bulanan yang realistis untuk hidup di sekitar Sunway — bukan perkiraan indah dari brosur." },
    lastUpdated: "2026-05-01",
    disclaimer: "Prices shift with inflation and exchange rates — treat these as rough guides, not guarantees.",
    importantLinks: [],
    relatedFaqIds: ["cost-of-living-budget", "monthly-expenses-breakdown"],
    relatedGuideIds: ["open-bank-account", "where-to-eat"],
    body: `Brochures love round numbers. Real student budgets are messier — here's what students actually spend in a typical month around Sunway.

## A Realistic Monthly Breakdown

- Accommodation: roughly RM 900–1,300 depending on type and area
- Food: roughly RM 600–900 if you mix cooking and eating out
- Transport: roughly RM 100–200 depending on how often you leave Sunway
- Phone and data: roughly RM 30–60 for a decent prepaid plan
- Miscellaneous (laundry, toiletries, socialising): roughly RM 150–300

**Total estimate:** somewhere around RM 1,800–2,800 per month, though this varies a lot person to person.

## Where Costs Sneak Up

- Food delivery apps add up fast — they're convenient but cost noticeably more than cooking or eating at campus cafeterias
- Grab rides between Sunway and KL can drain a budget quickly if used often instead of the BRT or KTM
- Subscription services (streaming, gym memberships) are easy to forget about until the bank statement arrives

## Ways Students Cut Costs

- Cooking in batches with flatmates and splitting groceries
- Using student discounts — always ask, many shops near campus offer them even if it's not advertised
- Buying secondhand textbooks or borrowing from seniors instead of buying new

**Budgeting apps help more than spreadsheets you forget to update.** A few minutes logging expenses each week beats trying to reconstruct a month of spending from memory.`,
  },
  {
    id: "find-accommodation",
    title: { en: "Find Accommodation Near Monash", id: "Mencari Tempat Tinggal Dekat Monash" },
    icon: "🏠",
    category: "Accommodation",
    excerpt: { en: "How to actually find a place near campus — types of accommodation, areas to consider, and contract red flags.", id: "Cara benar-benar menemukan tempat tinggal dekat kampus — jenis akomodasi, area yang patut dipertimbangkan, dan tanda bahaya dalam kontrak." },
    lastUpdated: "2026-04-15",
    disclaimer: "Rental prices and availability change quickly between intakes — always verify current listings directly with the agent or landlord.",
    importantLinks: [
      { label: "Nadayu28 Residences", url: "https://www.nadayu28.com.my" },
      { label: "PropertyGuru Sunway Listings", url: "https://www.propertyguru.com.my/sunway" },
    ],
    relatedFaqIds: ["accommodation-options", "on-campus-accommodation"],
    relatedGuideIds: ["transport-around-sunway", "cost-of-living"],
    body: `Finding accommodation before you've even seen Sunway in person is daunting. Here's how most students actually approach it.

## Types of Accommodation Near Campus

- **On-campus residences** — convenient but limited availability and pricier
- **Condo residences** (Nadayu28, Sunway Geo, Sunway Waterfront) — popular with international students, walkable to campus
- **Shared houses or apartments** — cheaper, but requires more coordination with flatmates

## Areas Worth Considering

- Directly around campus — shortest commute, highest price
- Bandar Sunway slightly further out — a short Grab or shuttle ride, noticeably cheaper
- USJ or Subang Jaya — further still, but well-connected if you don't mind a longer commute

## Before You Sign Anything

- Always ask for a **physical or video viewing** before transferring any deposit
- Read the contract for deposit return conditions — some agents make this deliberately vague
- Confirm what's included (utilities, wifi, furnishing) *before* signing, not after

## Red Flags to Watch For

- Landlords asking for full payment before any viewing
- Listings significantly cheaper than everything else in the same building
- Pressure to "decide today or lose the unit" — legitimate landlords rarely need to rush you

**Ask seniors before signing.** Almost every PPI member has a story about a contract clause they wish they'd asked about first — and you can usually find someone who's already rented in the building you're considering.`,
  },
  {
    id: "transport-around-sunway",
    title: { en: "Transport Around Sunway and KL", id: "Transportasi di Sekitar Sunway dan KL" },
    icon: "🚌",
    category: "Transport",
    excerpt: { en: "How to actually get around Sunway and into KL without overspending on Grab.", id: "Cara berkeliling Sunway dan menuju KL tanpa boros di Grab." },
    lastUpdated: "2026-03-28",
    disclaimer: "Bus schedules and fare prices change periodically — check official BRT/RapidKL channels for the latest timing.",
    importantLinks: [
      { label: "RapidKL BRT Sunway Line", url: "https://www.rapidkl.com.my/brt-sunway" },
    ],
    relatedFaqIds: ["airport-to-sunway", "brt-sunway-line"],
    relatedGuideIds: ["find-accommodation"],
    body: `You don't need a car in Sunway, but you do need to know which option to use when.

## Getting Around Sunway Itself

- The **BRT Sunway Line** connects most of Bandar Sunway, including the mall and nearby residences, to the USJ7 KTM station
- Walking is genuinely practical for most errands — Sunway Pyramid, the campus, and most condos are within 15-20 minutes of each other
- Grab is convenient late at night or when carrying heavy shopping, but adds up quickly if used daily

## Getting Into Kuala Lumpur

- Take the BRT to USJ7, then connect to the **KTM Komuter** line into KL Sentral
- Total travel time is usually 45–60 minutes depending on connections
- Grab into KL is faster but considerably more expensive, especially during peak hours or rain

## Money-Saving Habits

- Top up your transport card in larger amounts to avoid frequent small top-up trips
- Travel with friends and split a Grab when the BRT schedule doesn't line up
- Avoid peak hour Grab pricing if your schedule allows flexibility

**Budget more travel time than Google Maps suggests**, especially around exam season or rainy afternoons when both buses and roads get unpredictable.`,
  },
  {
    id: "health-insurance",
    title: { en: "Health Insurance and Hospitals", id: "Asuransi Kesehatan dan Rumah Sakit" },
    icon: "🏥",
    category: "Health & Safety",
    excerpt: { en: "What your student insurance actually covers, where to go when you're unwell, and who to call in an emergency.", id: "Apa yang sebenarnya ditanggung asuransi mahasiswamu, ke mana saat sakit, dan siapa yang dihubungi saat darurat." },
    lastUpdated: "2026-04-05",
    disclaimer: "Insurance coverage details can change between intakes. Always check your specific policy document through the Micare Portal.",
    importantLinks: [
      { label: "Micare Student Insurance Portal", url: "https://www.micare.com.my/portal" },
    ],
    relatedFaqIds: ["student-insurance-coverage", "emergency-contacts"],
    relatedGuideIds: ["before-arrival-checklist", "open-bank-account"],
    body: `Getting sick far from home is stressful enough without also being confused about insurance. Here's the short version.

## What's Usually Covered

- Outpatient visits at panel clinics
- Hospitalisation at panel hospitals
- Some coverage for pre-existing conditions, though usually with limits — check your specific policy

## Where to Go When You're Unwell

- For minor issues, visit a **panel clinic** first — check the Micare portal for the nearest one to Sunway
- For anything serious or after-hours, go to the nearest hospital with an emergency department
- Always bring your iKad and insurance details with you, even for a routine clinic visit

## Emergency Contacts to Save Now

- Malaysia's general emergency number: **999**
- Your residence or campus security desk number
- A PPI committee member's number, in case you need someone who speaks Indonesian during a stressful moment

## Common Mistakes to Avoid

- Paying out of pocket and forgetting to claim afterward — keep every receipt
- Assuming all clinics are covered — only panel clinics guarantee direct billing
- Waiting too long to see a doctor because of unfamiliarity with the system — it's usually less complicated than it seems

**Register with a regular panel clinic early**, even before you're sick. Having a default place to go removes one stressful decision from an already stressful moment.`,
  },
  {
    id: "where-to-eat",
    title: { en: "Where to Eat (Halal & Indonesian Spots)", id: "Tempat Makan (Halal & Khas Indonesia)" },
    icon: "🍜",
    category: "Food & Culture",
    excerpt: { en: "Halal-friendly and Indonesian-leaning food spots around Sunway that past students actually recommend.", id: "Tempat makan ramah halal dan bernuansa Indonesia di sekitar Sunway yang benar-benar direkomendasikan mahasiswa terdahulu." },
    lastUpdated: "2026-03-15",
    disclaimer: null,
    importantLinks: [],
    relatedFaqIds: [],
    relatedGuideIds: ["join-ppi-activities"],
    body: `Homesickness hits hardest through your stomach. Here's where students go when they need something familiar — or just something good.

## Indonesian and Familiar Flavours

- Several warung-style stalls around Sunway serve nasi padang and similar dishes — ask seniors for the current favourites, as these rotate
- Indomie and other Indonesian instant staples are easy to find in most nearby supermarkets
- PPI's weekly gatherings during Ramadhan and other events often feature home-cooked dishes from members

## Halal-Friendly Spots Near Campus

- Sunway Pyramid's food court has a wide halal selection across multiple cuisines
- Several Malay and Mamak restaurants around Bandar Sunway stay open late, useful for post-study-session meals
- Always check for halal certification signage if it matters to you — most places near campus display it clearly

## Budget Eating Tips

- Campus cafeterias are usually the cheapest option for a quick meal between classes
- Cooking in batches with flatmates stretches your budget further than eating out every day
- Mamak restaurants are reliably cheap and open almost around the clock

**Ask in the PPI group chat before trying somewhere new.** Someone has almost always already been there and can tell you if it's worth it.`,
  },
  {
    id: "join-ppi-activities",
    title: { en: "How to Join PPI Monash Activities", id: "Cara Ikut Kegiatan PPI Monash" },
    icon: "🤝",
    category: "Joining PPI",
    excerpt: { en: "How to actually get involved with PPI Monash beyond just following the Instagram — events, departments, and contacts.", id: "Cara benar-benar terlibat dengan PPI Monash lebih dari sekadar follow Instagram — acara, departemen, dan kontak." },
    lastUpdated: "2026-04-28",
    disclaimer: null,
    importantLinks: [],
    relatedFaqIds: ["join-whatsapp-group"],
    relatedGuideIds: ["survive-first-week", "where-to-eat"],
    body: `Following our Instagram is a good start, but it's not the same as actually being part of PPI. Here's how to get more involved.

## The Easiest First Steps

- Join the official PPI Monash WhatsApp group — links are shared at orientation and on our Instagram
- Show up to the next open event, even if you don't know anyone yet — most members started exactly that way
- Follow our [Events page](https://ppimonashmalaysia.com/events) so you never miss a sign-up deadline

## Getting Involved Beyond Events

PPI runs six departments, each looking for members at different points in the year:

- **Executive** — leadership and overall coordination
- **Documentation** — photography and videography at events
- **Media & Creative** — design and social media content
- **Welfare** — student wellbeing and support initiatives
- **Events** — planning and running PPI's events calendar
- **External Relations** — partnerships with other student societies

## How Recruitment Usually Works

- Most departments open applications once or twice a year, usually announced through the WhatsApp group and Instagram
- You don't need prior experience — willingness to show up consistently matters more
- Volunteering informally at one or two events first is a great way to figure out which department suits you

**The community is genuinely as good as it sounds.** Almost every senior member says the same thing: showing up to that first event was the best five minutes of awkwardness they ever pushed through.`,
  },
];

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

// ─── 🏛️ Leadership History ───────────────────────────────────────────────────
// Shown on /about/history — one entry per cabinet year, newest first.
// president/vicePresident: "TBD" if not confirmed (shows "?" initials avatar)
// isFoundingYear: true only for 2017
// isCurrent: true for the active cabinet year
//
export const LEADERSHIP_HISTORY = [
  {
    year: 2026,
    cabinet: "Eunoia",
    president: "Radhitya Hendra Putra",
    vicePresident: "Nevan Elkana Hulu",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: true,
    isFoundingYear: false,
    achievements: [
      "Launched the new PPI Monash Malaysia website",
      "Organized Rantau Heist welcome event for new intakes",
      "Hosted One World: Indonesia Hand in Hand sports competition",
      "Opened Indonesian Night Market in collaboration with other student societies",
    ],
    notes: "Cabinet Eunoia focuses on building a warm, close-knit community — welfare, collaboration, and meaningful experiences at the heart of everything.",
  },
  {
    year: 2025,
    cabinet: "TBD",
    president: "Victor Christopher Wahjudi Widjaja",
    vicePresident: "Mildred Shakira",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: false,
    achievements: [
      "Organized Survival Night: Game Over",
      "Held Indonesian Independence Day celebration at KDU Penthouse Hall",
      "Hosted Merdeka Spirit cultural showcase on campus",
    ],
    notes: null,
  },
  {
    year: 2024,
    cabinet: "TBD",
    president: "Aidan Pramudya",
    vicePresident: "Justin Nicholas",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: false,
    achievements: [
      "Hosted PPI Leadership Summit — committee handover and training",
      "Organized Merdeka Charity Run, raising funds for a local orphanage",
    ],
    notes: null,
  },
  {
    year: 2023,
    cabinet: "TBD",
    president: "Melvin Loa",
    vicePresident: "Ervina Kurnia Wijaya",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: false,
    achievements: [
      "Annual welcome program for new intakes",
      "Community welfare initiatives and cultural programs",
    ],
    notes: null,
  },
  {
    year: 2022,
    cabinet: "TBD",
    president: "Alfredo Waldemar Sinaga",
    vicePresident: "Enzo Brooklyn",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: false,
    achievements: [
      "Resumed in-person events following COVID-19 restrictions",
      "Strengthened collaboration with other student societies on campus",
    ],
    notes: null,
  },
  {
    year: 2021,
    cabinet: "TBD",
    president: "Kenanga Pramitha",
    vicePresident: "Tuanku Muhammad Rabbany Syahidullah Narukaya",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: false,
    achievements: [
      "Adapted activities to hybrid and online formats",
      "Maintained community connection through virtual events and welfare check-ins",
    ],
    notes: null,
  },
  {
    year: 2020,
    cabinet: "TBD",
    president: "Amanda Silmy",
    vicePresident: "Muarif Surya Laksono",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: false,
    achievements: [
      "Navigated the challenges of the COVID-19 pandemic",
      "Pivoted to online community support for students stranded abroad",
    ],
    notes: null,
  },
  {
    year: 2019,
    cabinet: "TBD",
    president: "Reza Auditya Wijaya",
    vicePresident: "Jessie Mettaurine",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: false,
    achievements: [
      "Expanded event calendar with sports and cultural programs",
      "Grew external partnerships with other Indonesian student bodies in Malaysia",
    ],
    notes: null,
  },
  {
    year: 2018,
    cabinet: "TBD",
    president: "Satria Wardhana Sarosa",
    vicePresident: "Richard Liking",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: false,
    achievements: [
      "Formalized departmental structure across six departments",
      "Grew membership significantly in the second year of operation",
    ],
    notes: null,
  },
  {
    year: 2017,
    cabinet: "Founding Committee",
    president: "Satria Wardhana Sarosa",
    vicePresident: "Richard Liking",
    presidentPhoto: null,
    vpPhoto: null,
    isCurrent: false,
    isFoundingYear: true,
    achievements: [
      "Founded PPI Monash Malaysia in August 2017",
      "Established six founding departments",
      "Held the first welcome event for Indonesian students at Monash",
    ],
    notes: "PPI Monash Malaysia was officially established as a branch of PPIM (Perhimpunan Pelajar Indonesia se-Malaysia), with the mission of supporting Indonesian students at Monash University Malaysia.",
  },
];

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
    id: "ppi-jerman",
    name: "PPI Jerman",
    logo: null,
    category: "Student Organization",
    website: "https://www.ppijerman.org/",
    socialUrl: "https://instagram.com/ppijerman",
    description: "Perhimpunan Pelajar Indonesia di Jerman — a fellow PPI branch representing Indonesian students across Germany. Our international collaboration partner for webinars and cross-country exchange programs.",
    active: true,
    displayOrder: 4,
    partnershipSince: "2026",
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
  {
    id: "monash-mss",
    name: "Monash Malaysian Students' Society",
    logo: null,
    category: "Student Organization",
    website: null,
    socialUrl: null,
    description: "A frequent on-campus collaborator for joint cultural and community events, including the Indonesian Night Market.",
    active: true,
    displayOrder: 6,
    partnershipSince: "2024",
    relatedEventIds: ["indonesian-night-market-2026"],
  },
  {
    id: "monash-india",
    name: "Monash Indian Students' Association",
    logo: null,
    category: "Student Organization",
    website: null,
    socialUrl: null,
    description: "A collaborating campus student society for joint cultural programs and campus events.",
    active: true,
    displayOrder: 7,
    partnershipSince: "2025",
    relatedEventIds: ["indonesian-night-market-2026"],
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
  {
    id: "tba-corporate-sponsor",
    name: "TBA — Corporate Sponsor",
    logo: null,
    category: "Corporate Sponsor",
    website: null,
    socialUrl: null,
    description: "Placeholder — replace with the actual corporate sponsor name. Contact External Relations to discuss sponsorship opportunities.",
    active: false,
    displayOrder: 11,
    partnershipSince: null,
    relatedEventIds: [],
  },
  {
    id: "tba-media-partner",
    name: "TBA — Media Partner",
    logo: null,
    category: "Media Partner",
    website: null,
    socialUrl: null,
    description: "Placeholder — replace with the actual media partner. Contact External Relations if you have a media collaboration to propose.",
    active: false,
    displayOrder: 12,
    partnershipSince: null,
    relatedEventIds: [],
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
    id: "ppi-jerman-webinar-2026",
    title: "Studying Abroad: PPI Monash x PPI Jerman Webinar",
    partnerId: "ppi-jerman",
    type: "International Collaboration",
    date: "2026-04-20",
    dateDisplay: "20 Apr 2026",
    description: "A joint online webinar where Indonesian students in Malaysia and Germany shared their study-abroad experiences, scholarship tips, and cultural adjustment stories.",
    relatedEventId: null,
    relatedArticleId: null,
    mediaUrl: null,
    photos: null,
    status: "completed",
    featured: true,
  },
  {
    id: "ppim-independence-day-2025",
    title: "PPIM Independence Day Program 2025",
    partnerId: "ppim",
    type: "PPI Malaysia Joint Event",
    date: "2025-08-17",
    dateDisplay: "17 Aug 2025",
    description: "A nationally coordinated Independence Day program across all PPI Malaysia branches. PPI Monash hosted the Sunway leg, contributing cultural performances and a flag ceremony.",
    relatedEventId: "independence-day-2025",
    relatedArticleId: "merdeka-spirit-on-campus-2025",
    mediaUrl: null,
    photos: null,
    status: "completed",
    featured: false,
  },
  {
    id: "kbri-cultural-program-2026",
    title: "KBRI Indonesian Cultural Outreach Program",
    partnerId: "kbri-kuala-lumpur",
    type: "Institutional Program",
    date: "2026-07-01",
    dateDisplay: "Jul 2026",
    description: "An ongoing cultural outreach program co-facilitated with KBRI Kuala Lumpur, providing Indonesian students with consular services, cultural guidance, and community touchpoints throughout the academic year.",
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
    id: "night-market-collab-2026",
    title: "Indonesian Night Market",
    partnerId: "monash-mss",
    type: "PPI Malaysia Joint Event",
    date: "2026-08-23",
    dateDisplay: "23 Aug 2026",
    description: "A street-food-style night market on campus, co-organized with Monash Malaysian Students' Society and Monash Indian Students' Association. Indonesian, Malaysian, and Indian stalls alongside live acoustic performances.",
    relatedEventId: "indonesian-night-market-2026",
    relatedArticleId: null,
    mediaUrl: null,
    photos: null,
    status: "upcoming",
    featured: true,
  },
  {
    id: "ppi-jerman-article-exchange-2027",
    title: "PPI Monash x PPI Jerman Article Exchange",
    partnerId: "ppi-jerman",
    type: "Article Exchange",
    date: "2027-01-01",
    dateDisplay: "Early 2027",
    description: "A planned cross-platform article exchange where PPI Monash and PPI Jerman contributors share student experience stories across each other's platforms.",
    relatedEventId: null,
    relatedArticleId: null,
    mediaUrl: null,
    photos: null,
    status: "upcoming",
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
    id: "ppi-upm",
    name: "PPI UPM",
    city: "Serdang",
    university: "Universiti Putra Malaysia",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_upm",
    collaborationStatus: "active",
    description: "One of the largest PPI branches in Malaysia, based at Universiti Putra Malaysia in Serdang.",
  },
  {
    id: "ppi-um",
    name: "PPI UM",
    city: "Kuala Lumpur",
    university: "Universiti Malaya",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_um",
    collaborationStatus: "active",
    description: "PPI branch at Universiti Malaya — the oldest and one of the most prominent universities in Malaysia.",
  },
  {
    id: "ppi-nottingham",
    name: "PPI Nottingham Malaysia",
    city: "Semenyih",
    university: "University of Nottingham Malaysia",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_nottingham_malaysia",
    collaborationStatus: "active",
    description: "Indonesian student association at the University of Nottingham Malaysia Campus in Semenyih.",
  },
  {
    id: "ppi-ucsi",
    name: "PPI UCSI University",
    city: "Kuala Lumpur",
    university: "UCSI University",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_ucsi",
    collaborationStatus: "occasional",
    description: "Indonesian student association at UCSI University, Kuala Lumpur.",
  },
  {
    id: "ppi-help",
    name: "PPI HELP University",
    city: "Kuala Lumpur",
    university: "HELP University",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_help",
    collaborationStatus: "occasional",
    description: "Indonesian student community at HELP University, Kuala Lumpur.",
  },
  {
    id: "ppi-mmu",
    name: "PPI MMU",
    city: "Cyberjaya",
    university: "Multimedia University",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_mmu",
    collaborationStatus: "occasional",
    description: "Indonesian student community at Multimedia University (MMU), Cyberjaya.",
  },
  {
    id: "ppi-inti",
    name: "PPI INTI",
    city: "Nilai",
    university: "INTI International University",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_inti",
    collaborationStatus: "occasional",
    description: "Indonesian student association at INTI International University, Nilai.",
  },
  {
    id: "ppi-apu",
    name: "PPI APU",
    city: "Kuala Lumpur",
    university: "Asia Pacific University",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_apu",
    collaborationStatus: "occasional",
    description: "Indonesian student community at Asia Pacific University (APU), Bukit Jalil.",
  },
  {
    id: "ppi-utp",
    name: "PPI UTP",
    city: "Tronoh, Perak",
    university: "Universiti Teknologi PETRONAS",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_utp",
    collaborationStatus: "occasional",
    description: "Indonesian student community at UTP (Universiti Teknologi PETRONAS) in Perak.",
  },
  {
    id: "ppi-curtin",
    name: "PPI Curtin Malaysia",
    city: "Miri, Sarawak",
    university: "Curtin University Malaysia",
    logo: null,
    website: null,
    socialUrl: "https://instagram.com/ppi_curtinmalaysia",
    collaborationStatus: "occasional",
    description: "PPI branch at Curtin University Malaysia in Miri, Sarawak.",
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
