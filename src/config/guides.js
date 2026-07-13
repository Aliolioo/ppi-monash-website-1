// ============================================================================
// Part of the site content config (split from siteConfig.js).
// Re-exported by siteConfig.js — import from "../config/siteConfig" as usual.
// ============================================================================

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

**The iKad does not replace your passport.** When you re-enter Malaysia you still need to bring your passport with the valid student pass endorsement in it — the iKad is only a supporting card, and immigration will not let you through on the iKad alone.

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

- The **BRT Sunway Line** connects most of Bandar Sunway, including the mall and nearby residences, to the USJ7 LRT station
- Walking is genuinely practical for most errands — Sunway Pyramid, the campus, and most condos are within 15-20 minutes of each other
- Grab is convenient late at night or when carrying heavy shopping, but adds up quickly if used daily

## Getting Into Kuala Lumpur

- Take the BRT to USJ7, then connect to the **LRT (Kelana Jaya Line)** into KL Sentral
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

- **Rock Cafe** and the **SS15** food area in Subang Jaya are student favourites for Indonesian and familiar flavours — an easy outing when you want a taste of home
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

PPI runs seven departments, each looking for members at different points in the year:

- **Executive** — leadership and overall coordination
- **Events** — planning and running PPI's events calendar
- **Logistics** — operations, venues, and equipment for events
- **Public Relations** — partnerships and outreach with other communities
- **Design** — graphic design and event branding
- **Documentation** — photography and videography at events
- **Social Media** — content and the community's social media presence

## How Recruitment Usually Works

- Most departments open applications once or twice a year, usually announced through the WhatsApp group and Instagram
- You don't need prior experience — willingness to show up consistently matters more
- Volunteering informally at one or two events first is a great way to figure out which department suits you

**The community is genuinely as good as it sounds.** Almost every senior member says the same thing: showing up to that first event was the best five minutes of awkwardness they ever pushed through.`,
  },
];
