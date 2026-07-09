// ============================================================================
// UI_STRINGS — interface chrome translations (English + Bahasa Indonesia)
// ============================================================================
// These are the strings that live in component JSX rather than in siteConfig
// data: buttons, section labels, form fields, status labels, empty states, etc.
// Access them via the t() helper from useLang(): t("common.readMore").
//
// Content DATA (events, articles, guides, FAQs, …) is NOT here — that lives in
// siteConfig.js as { en, id } fields, resolved with loc().
//
export const UI_STRINGS = {
  en: {
    // Language switcher
    "lang.label": "Language",
    "lang.en": "EN",
    "lang.id": "ID",
    "lang.enFull": "English",
    "lang.idFull": "Bahasa Indonesia",

    // Common actions
    "common.readMore": "Read more",
    "common.viewAll": "View all",
    "common.learnMore": "Learn more",
    "common.explore": "Explore",
    "common.search": "Search",
    "common.clearSearch": "Clear search",
    "common.clearFilters": "Clear filters",
    "common.backToTop": "Back to top",
    "common.loading": "Loading…",
    "common.results": "results",
    "common.result": "result",

    // Navbar
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    // Home
    "home.whoWeAre": "Who We Are",
    "home.aboutTitle": "A Home Away From Home",
    "home.ourStory": "Our Story",
    "home.guideLabel": "Student Guide",
    "home.guideTitle": "Your Survival Kit at Monash",
    "home.viewAllGuides": "View all guides",
    "home.eventsLabel": "Events",
    "home.eventsTitle": "What We've Been Up To",
    "home.allEvents": "All events",
    "home.articlesLabel": "Articles",
    "home.articlesTitle": "Stories & Insights",
    "home.allArticles": "All articles",
    "home.trustedBy": "Trusted by",
    "home.partnersTitle": "Our Partners & Collaborators",
    "home.becomePartner": "Become a partner",
    "home.widerCommunity": "Wider Community",
    "home.networkTitle": "Part of the PPI Malaysia Network",
    "home.networkDesc":
      "PPI Monash is one of over a dozen Indonesian student communities across Malaysia. We collaborate, share events, and support each other as part of the wider PPIM network.",
    "home.exploreNetwork": "Explore the full network",

    // Hero
    "hero.titlePre": "Your Indonesian ",
    "hero.titleHighlight": "Community",
    "hero.titlePost": "at Monash Malaysia",
    "hero.joinCommunity": "Join Our Community",
    "hero.scrollHint": "Scroll to explore",

    // About
    "about.label": "About Us",
    "about.title": "A Home Away From Home Since {year}",
    "about.intro":
      "Established in August {year}, PPI Monash Malaysia — {tagline} is a non-profit student association and a branch of Perhimpunan Pelajar Indonesia se-Malaysia (PPIM).",
    "about.body":
      "We collaborate closely with the Embassy of the Republic of Indonesia in Kuala Lumpur, as well as various ministries and state institutions. Our mission is to promote inclusivity, provide platforms for fun-filled experiences, and support social growth for Indonesian students at Monash.",
    "about.wordUnity": "Unity",
    "about.wordGrowth": "Growth",
    "about.wordFriendship": "Friendship",
    "about.historyLabel": "History",
    "about.historyTitle": "From {year} to Today",
    "about.historyDesc":
      "Nine years of cabinets, presidents, and community — documented.",
    "about.viewHistory": "View Leadership History",

    // Team
    "team.label": "Our Team",
    "team.title": "Meet the People Behind PPI",
    "team.deptTitle": "Departments",
    "team.deptSubtitle":
      "Led by President {president} and Vice President {vp} for {year}, our seven departments work together to serve the community.",
    "team.committeeLabel": "Committee · {term}",
    "team.committeeSubtitle":
      "Our dedicated committee members who make everything happen.",
    "team.tbd": "TBD",

    // Student Guide
    "guide.label": "Student Guide",
    "guide.title": "Your Survival Kit at Monash Malaysia",
    "guide.subtitle":
      "Practical guides written by Indonesian students for Indonesian students. Updated each intake.",
    "guide.searchPlaceholder": "Search guides…",
    "guide.empty": "No guides match your search. Try a different keyword or category.",
    "guide.backToGuide": "Back to Student Guide",
    "guide.lastUpdated": "Last updated",
    "guide.usefulLinks": "Useful Links",
    "guide.relatedQuestions": "Related Questions",
    "guide.relatedGuides": "Related Guides",
    "guide.notFoundTitle": "Guide Not Found",
    "guide.notFoundDesc":
      "We couldn't find a guide with that link. It may have been moved or removed.",

    // Events
    "events.backToEvents": "Back to Events",
    "events.notFoundTitle": "Event Not Found",
    "events.notFoundDesc":
      "We couldn't find an event with that link. It may have been moved or removed.",
    "events.about": "About This Event",
    "events.registration": "Registration",
    "events.registerNow": "Register Now",
    "events.registrationClosed": "Registration is closed for this event.",
    "events.registrationNotOpen":
      "Registration hasn't opened yet — stay tuned on our socials.",
    "events.registerBy": "Register by",
    "events.order": "Pre-Order / Buy",
    "events.orderHeading": "Pre-Order",
    "events.orderNote":
      "Payment (QR) and proof-of-payment upload are handled securely in the order form.",
    "events.sponsors": "Sponsors & Partners",
    "events.photos": "Event Photos",
    "events.viewPhotos": "View Photos",
    "events.photosSoon": "Photos coming soon.",
    "events.recap": "Event Recap",
    "events.readRecap": "Read Recap",
    "events.related": "Related Events",
    "events.date": "Date",
    "events.venue": "Venue",
    "events.category": "Category",
    "events.organizedBy": "Organized by",
    "events.department": "Department",
    "events.listSubtitle":
      "From thrilling welcome events to cultural celebrations — there's always something happening.",
    "events.tabUpcoming": "Upcoming",
    "events.tabPast": "Past Events",
    "events.emptyUpcoming": "No upcoming events yet. Something chaotic is being planned. 👀",
    "events.emptyCategory": "No events in this category yet — stay tuned! 🎉",
    "events.emptyPast": "No past events recorded yet.",
    "events.emptyPastCategory": "No events in this category yet — try a different filter.",
    "events.viewDetails": "View Details",

    // Event status labels
    "status.upcoming": "Upcoming",
    "status.open": "Registration Open",
    "status.closed": "Registration Closed",
    "status.completed": "Completed",
    "status.archived": "Archived",

    // Articles
    "articles.backToArticles": "Back to Articles",
    "articles.notFoundTitle": "Article Not Found",
    "articles.notFoundDesc":
      "We couldn't find an article with that link. It may have been moved or removed.",
    "articles.by": "By",
    "articles.related": "Related Articles",
    "articles.originallyOn": "This article was originally published on",
    "articles.readOriginal": "Read the original",
    "articles.searchPlaceholder": "Search articles…",
    "articles.empty": "No articles match your search.",
    "articles.listSubtitle": "Read about life as an Indonesian student at Monash Malaysia.",
    "articles.readArticle": "Read article",

    // FAQ
    "faq.searchPlaceholder": "Search questions…",
    "faq.all": "All",
    "faq.empty": "No questions match your search.",
    "faq.stillNeedHelp": "Still need help?",
    "faq.ctaDesc":
      "Can't find what you're looking for? Reach out to us directly — we're happy to help.",
    "faq.askWhatsApp": "Ask on WhatsApp",
    "faq.emailUs": "Email us",
    "faq.relatedGuides": "Related guides",
    "faq.lastUpdated": "Updated",
    "faq.seePrivacy": "See our Privacy Policy",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle":
      "Everything you need to know about studying at Monash Malaysia as an Indonesian student.",
    "faq.resultCount": "Showing {shown} of {total} questions",
    "faq.noMatchPre": "No questions match",
    "faq.noMatchPost": "— try a different keyword or",
    "faq.guidesLabel": "Guides:",
    "faq.stillQuestions": "Still have questions?",
    "faq.whatsappGroup": "WhatsApp Group",
    "faq.contactPage": "Contact Page",

    // Inquiry form
    "form.yourName": "Your Name",
    "form.namePlaceholder": "Full name",
    "form.organisation": "Organisation",
    "form.orgPlaceholder": "Your institution or company",
    "form.email": "Email",
    "form.inquiryType": "Inquiry Type",
    "form.selectType": "Select a type…",
    "form.message": "Message",
    "form.messagePlaceholder": "Tell us about your collaboration idea…",
    "form.send": "Send Inquiry",
    "form.sending": "Sending…",
    "form.errSubmit": "Couldn't send — please try again.",
    "form.privacyNote": "By submitting, you agree to our",
    "form.privacyPolicy": "Privacy Policy",
    "form.successTitle": "Inquiry Received",
    "form.successDesc":
      "Thanks for reaching out! Your inquiry has been recorded. Our External Relations team will get back to you within 5–7 days.",
    "form.sendAnother": "Send Another Inquiry",
    "form.preferEmail": "Prefer email?",
    "form.errRequired": "This field is required.",
    "form.errName": "Name is required.",
    "form.errOrg": "Organisation is required.",
    "form.errEmail": "Email is required.",
    "form.errEmailValid": "Please enter a valid email address.",
    "form.errType": "Please select an inquiry type.",
    "form.errMessage": "Message is required.",

    // Collaboration
    "collab.label": "Collaboration",
    "collab.heroTitle": "Building Bridges, Together",
    "collab.heroSubtitle":
      "From KBRI Kuala Lumpur to PPI Jerman, from Monash clubs to fellow PPI branches across Malaysia — these are the partnerships that make our community stronger.",
    "collab.catPartnersTitle": "Partners & Sponsors",
    "collab.catPartnersDesc":
      "Institutions, sponsors, and campus organizations who make our work possible.",
    "collab.catNetworkTitle": "PPI Malaysia Network",
    "collab.catNetworkDesc":
      "Twelve Indonesian student communities across Malaysia, united by shared roots.",
    "collab.catIntlTitle": "International Collaboration",
    "collab.catIntlDesc":
      "Beyond Malaysia — joint programs, webinars, and exchanges with PPI branches worldwide.",
    "collab.explore": "Explore",
    "collab.partnersTitle": "Our Partners & Sponsors",
    "collab.showArchive": "View archive of past partners",
    "collab.hideArchive": "Hide archive of past partners",
    "collab.partnerSince": "Partner since",
    "collab.visitWebsite": "Visit Website",
    "collab.instagram": "Instagram",
    "collab.networkSubtitle":
      "PPI Monash is one of many Indonesian student communities across Malaysia. Together, we form a connected network under PPIM — sharing events, knowledge, and the experience of studying far from home.",
    "collab.viewFullNetwork": "View full network",
    "collab.intlLabel": "International",
    "collab.intlTitle": "Beyond Malaysia",
    "collab.intlSubtitle":
      "Our collaboration doesn't stop at the Malaysian border. PPI branches around the world share the same mission — and occasionally, the same events.",
    "collab.featuredPartner": "Featured Partner",
    "collab.recentIntl": "Recent International Programs",
    "collab.with": "with",
    "collab.viewEvent": "View event",
    "collab.readRecap": "Read recap",
    "collab.watchRecording": "Watch recording",
    "collab.programsLabel": "Programs",
    "collab.programsTitle": "Recent Joint Programs",
    "collab.noPrograms": "No programs of this type yet.",
    "collab.photos": "Photos",
    "collab.archiveNotePre": "Want to see more? Get in touch about a specific collaboration via the",
    "collab.inquiryFormBelow": "inquiry form below",
    "collab.getInvolved": "Get Involved",
    "collab.inquiryTitle": "Have a Collaboration in Mind?",
    "collab.inquirySubtitle":
      "Whether you're a sponsor, a fellow PPI branch, a university club, or an institutional partner — we'd love to hear from you.",
    "collab.preferEmail": "Prefer email?",

    // Announcements ("What's Up Next?")
    "announce.heading": "What's Up Next?",

    // Event-preferences feedback
    "feedback.label": "Help Us Plan",
    "feedback.title": "What Events Do You Want?",
    "feedback.subtitle":
      "Tell us what kinds of events you'd like to see more of — your input shapes our calendar.",
    "feedback.optCultural": "Cultural",
    "feedback.optSports": "Sports",
    "feedback.optAcademic": "Academic",
    "feedback.optSocial": "Social",
    "feedback.optWorkshops": "Workshops",
    "feedback.optOther": "Other",
    "feedback.commentLabel": "Anything else? (optional)",
    "feedback.commentPlaceholder": "Suggest a specific event or idea…",
    "feedback.submit": "Send Feedback",
    "feedback.sending": "Sending…",
    "feedback.errSubmit": "Couldn't send — please try again.",
    "feedback.errPick": "Please select at least one event type.",
    "feedback.successTitle": "Thanks for your feedback!",
    "feedback.successDesc":
      "Your input helps us plan events the community actually wants.",
    "feedback.sendAnother": "Send More Feedback",

    // YouTube + Spotify CTAs
    "youtube.cta": "Subscribe on YouTube",
    "youtube.spotifyCta": "Listen on Spotify",

    // Contact / CTA
    "contact.joinUs": "Join Us",
    "contact.ctaTitle": "Ready to Be Part of the Community?",
    "contact.ctaDesc":
      "Whether you're a new student, current member, or just curious — we'd love to connect with you.",
    "contact.joinWhatsApp": "Join WhatsApp Group",

    // Footer
    "footer.collaboration": "Collaboration",
    "footer.partners": "Partners",
    "footer.network": "PPI Network",
    "footer.inquiries": "Inquiries",
    "footer.privacy": "Privacy Policy",
    "footer.organization": "Organization Information",
    "footer.branchOf": "A branch of",

    // Network
    "network.backToCollab": "Back to Collaboration",
    "network.all": "All",
    "network.active": "Active",
    "network.occasional": "Occasional",
    "network.noCollab": "No collab",
    "network.recentJoint": "Recent Joint Events",
    "network.missing": "Is your PPI community missing from this list?",
    "network.letUsKnow": "Let us know via the collaboration inquiry form",
    "network.label": "Network",
    "network.title": "PPI Malaysia Network",
    "network.subtitle":
      "Indonesian student associations across Malaysia, united by shared culture and student spirit. Click any community to get in touch or learn more.",
    "network.instagram": "Instagram",
    "network.website": "Website",
    "network.viewEvent": "View event",
    "network.readRecap": "Read recap",
    "network.with": "with",

    // Leadership History
    "history.label": "Leadership",
    "history.title": "Leadership History",
    "history.subtitle":
      "From our founding in {year} to today — the cabinets and presidents who shaped PPI Monash Malaysia.",
    "history.current": "Current",
    "history.founded": "Founded",
    "history.president": "President",
    "history.vicePresident": "Vice President",
    "history.backToAbout": "Back to About",
    "history.ctaText": "Want to be part of the next chapter?",
    "history.ctaButton": "Meet the Current Team",

    // 404 / generic
    "notFound.back": "Back",
    "notFound.title": "Page Not Found",
    "notFound.desc":
      "The page you're looking for doesn't exist or may have moved.",
    "notFound.home": "Back to Home",
  },

  id: {
    // Language switcher
    "lang.label": "Bahasa",
    "lang.en": "EN",
    "lang.id": "ID",
    "lang.enFull": "English",
    "lang.idFull": "Bahasa Indonesia",

    // Common actions
    "common.readMore": "Selengkapnya",
    "common.viewAll": "Lihat semua",
    "common.learnMore": "Pelajari lebih lanjut",
    "common.explore": "Jelajahi",
    "common.search": "Cari",
    "common.clearSearch": "Hapus pencarian",
    "common.clearFilters": "Hapus filter",
    "common.backToTop": "Kembali ke atas",
    "common.loading": "Memuat…",
    "common.results": "hasil",
    "common.result": "hasil",

    // Navbar
    "nav.openMenu": "Buka menu",
    "nav.closeMenu": "Tutup menu",

    // Home
    "home.whoWeAre": "Tentang Kami",
    "home.aboutTitle": "Rumah Kedua",
    "home.ourStory": "Kisah Kami",
    "home.guideLabel": "Panduan Mahasiswa",
    "home.guideTitle": "Bekal Bertahanmu di Monash",
    "home.viewAllGuides": "Lihat semua panduan",
    "home.eventsLabel": "Acara",
    "home.eventsTitle": "Apa yang Telah Kami Lakukan",
    "home.allEvents": "Semua acara",
    "home.articlesLabel": "Artikel",
    "home.articlesTitle": "Cerita & Wawasan",
    "home.allArticles": "Semua artikel",
    "home.trustedBy": "Dipercaya oleh",
    "home.partnersTitle": "Mitra & Kolaborator Kami",
    "home.becomePartner": "Jadi mitra",
    "home.widerCommunity": "Komunitas Lebih Luas",
    "home.networkTitle": "Bagian dari Jaringan PPI Malaysia",
    "home.networkDesc":
      "PPI Monash adalah satu dari belasan komunitas pelajar Indonesia di Malaysia. Kami berkolaborasi, berbagi acara, dan saling mendukung sebagai bagian dari jaringan PPIM yang lebih luas.",
    "home.exploreNetwork": "Jelajahi seluruh jaringan",

    // Hero
    "hero.titlePre": "",
    "hero.titleHighlight": "Komunitasmu",
    "hero.titlePost": "Sesama Indonesia di Monash Malaysia",
    "hero.joinCommunity": "Gabung Komunitas Kami",
    "hero.scrollHint": "Gulir untuk menjelajah",

    // About
    "about.label": "Tentang Kami",
    "about.title": "Rumah Kedua Sejak {year}",
    "about.intro":
      "Didirikan pada Agustus {year}, PPI Monash Malaysia — {tagline} adalah organisasi mahasiswa nirlaba dan cabang dari Perhimpunan Pelajar Indonesia se-Malaysia (PPIM).",
    "about.body":
      "Kami bekerja sama erat dengan Kedutaan Besar Republik Indonesia di Kuala Lumpur, serta berbagai kementerian dan lembaga negara. Misi kami adalah mendorong inklusivitas, menyediakan wadah untuk pengalaman yang menyenangkan, dan mendukung pertumbuhan sosial mahasiswa Indonesia di Monash.",
    "about.wordUnity": "Persatuan",
    "about.wordGrowth": "Pertumbuhan",
    "about.wordFriendship": "Persahabatan",
    "about.historyLabel": "Sejarah",
    "about.historyTitle": "Dari {year} hingga Kini",
    "about.historyDesc":
      "Sembilan tahun kepengurusan, ketua, dan komunitas — terdokumentasi.",
    "about.viewHistory": "Lihat Sejarah Kepemimpinan",

    // Team
    "team.label": "Tim Kami",
    "team.title": "Kenali Orang-Orang di Balik PPI",
    "team.deptTitle": "Departemen",
    "team.deptSubtitle":
      "Dipimpin oleh Presiden {president} dan Wakil Presiden {vp} untuk periode {year}, tujuh departemen kami bekerja sama melayani komunitas.",
    "team.committeeLabel": "Kepengurusan · {term}",
    "team.committeeSubtitle":
      "Para pengurus kami yang berdedikasi mewujudkan segalanya.",
    "team.tbd": "TBD",

    // Student Guide
    "guide.label": "Panduan Mahasiswa",
    "guide.title": "Bekal Bertahanmu di Monash Malaysia",
    "guide.subtitle":
      "Panduan praktis yang ditulis oleh mahasiswa Indonesia untuk mahasiswa Indonesia. Diperbarui setiap intake.",
    "guide.searchPlaceholder": "Cari panduan…",
    "guide.empty":
      "Tidak ada panduan yang cocok dengan pencarianmu. Coba kata kunci atau kategori lain.",
    "guide.backToGuide": "Kembali ke Panduan Mahasiswa",
    "guide.lastUpdated": "Terakhir diperbarui",
    "guide.usefulLinks": "Tautan Berguna",
    "guide.relatedQuestions": "Pertanyaan Terkait",
    "guide.relatedGuides": "Panduan Terkait",
    "guide.notFoundTitle": "Panduan Tidak Ditemukan",
    "guide.notFoundDesc":
      "Kami tidak dapat menemukan panduan dengan tautan tersebut. Mungkin telah dipindahkan atau dihapus.",

    // Events
    "events.backToEvents": "Kembali ke Acara",
    "events.notFoundTitle": "Acara Tidak Ditemukan",
    "events.notFoundDesc":
      "Kami tidak dapat menemukan acara dengan tautan tersebut. Mungkin telah dipindahkan atau dihapus.",
    "events.about": "Tentang Acara Ini",
    "events.registration": "Pendaftaran",
    "events.registerNow": "Daftar Sekarang",
    "events.registrationClosed": "Pendaftaran untuk acara ini telah ditutup.",
    "events.registrationNotOpen":
      "Pendaftaran belum dibuka — pantau terus media sosial kami.",
    "events.registerBy": "Daftar sebelum",
    "events.order": "Pra-Pesan / Beli",
    "events.orderHeading": "Pra-Pesan",
    "events.orderNote":
      "Pembayaran (QR) dan unggah bukti pembayaran ditangani dengan aman di dalam formulir pemesanan.",
    "events.sponsors": "Sponsor & Mitra",
    "events.photos": "Foto Acara",
    "events.viewPhotos": "Lihat Foto",
    "events.photosSoon": "Foto akan segera hadir.",
    "events.recap": "Rangkuman Acara",
    "events.readRecap": "Baca Rangkuman",
    "events.related": "Acara Terkait",
    "events.date": "Tanggal",
    "events.venue": "Tempat",
    "events.category": "Kategori",
    "events.organizedBy": "Diselenggarakan oleh",
    "events.department": "Departemen",
    "events.listSubtitle":
      "Dari acara penyambutan yang seru hingga perayaan budaya — selalu ada yang terjadi.",
    "events.tabUpcoming": "Akan Datang",
    "events.tabPast": "Acara Lampau",
    "events.emptyUpcoming": "Belum ada acara mendatang. Sesuatu yang seru sedang disiapkan. 👀",
    "events.emptyCategory": "Belum ada acara di kategori ini — pantau terus! 🎉",
    "events.emptyPast": "Belum ada catatan acara lampau.",
    "events.emptyPastCategory": "Belum ada acara di kategori ini — coba filter lain.",
    "events.viewDetails": "Lihat Detail",

    // Event status labels
    "status.upcoming": "Akan Datang",
    "status.open": "Pendaftaran Dibuka",
    "status.closed": "Pendaftaran Ditutup",
    "status.completed": "Selesai",
    "status.archived": "Arsip",

    // Articles
    "articles.backToArticles": "Kembali ke Artikel",
    "articles.notFoundTitle": "Artikel Tidak Ditemukan",
    "articles.notFoundDesc":
      "Kami tidak dapat menemukan artikel dengan tautan tersebut. Mungkin telah dipindahkan atau dihapus.",
    "articles.by": "Oleh",
    "articles.related": "Artikel Terkait",
    "articles.originallyOn": "Artikel ini awalnya diterbitkan di",
    "articles.readOriginal": "Baca versi asli",
    "articles.searchPlaceholder": "Cari artikel…",
    "articles.empty": "Tidak ada artikel yang cocok dengan pencarianmu.",
    "articles.listSubtitle":
      "Baca tentang kehidupan sebagai mahasiswa Indonesia di Monash Malaysia.",
    "articles.readArticle": "Baca artikel",

    // FAQ
    "faq.searchPlaceholder": "Cari pertanyaan…",
    "faq.all": "Semua",
    "faq.empty": "Tidak ada pertanyaan yang cocok dengan pencarianmu.",
    "faq.stillNeedHelp": "Masih butuh bantuan?",
    "faq.ctaDesc":
      "Tidak menemukan yang kamu cari? Hubungi kami langsung — dengan senang hati kami bantu.",
    "faq.askWhatsApp": "Tanya via WhatsApp",
    "faq.emailUs": "Email kami",
    "faq.relatedGuides": "Panduan terkait",
    "faq.lastUpdated": "Diperbarui",
    "faq.seePrivacy": "Lihat Kebijakan Privasi kami",
    "faq.title": "Pertanyaan yang Sering Diajukan",
    "faq.subtitle":
      "Semua yang perlu kamu ketahui tentang berkuliah di Monash Malaysia sebagai mahasiswa Indonesia.",
    "faq.resultCount": "Menampilkan {shown} dari {total} pertanyaan",
    "faq.noMatchPre": "Tidak ada pertanyaan yang cocok dengan",
    "faq.noMatchPost": "— coba kata kunci lain atau",
    "faq.guidesLabel": "Panduan:",
    "faq.stillQuestions": "Masih ada pertanyaan?",
    "faq.whatsappGroup": "Grup WhatsApp",
    "faq.contactPage": "Halaman Kontak",

    // Inquiry form
    "form.yourName": "Nama Kamu",
    "form.namePlaceholder": "Nama lengkap",
    "form.organisation": "Organisasi",
    "form.orgPlaceholder": "Institusi atau perusahaanmu",
    "form.email": "Email",
    "form.inquiryType": "Jenis Pertanyaan",
    "form.selectType": "Pilih jenis…",
    "form.message": "Pesan",
    "form.messagePlaceholder": "Ceritakan ide kolaborasimu…",
    "form.send": "Kirim Pertanyaan",
    "form.sending": "Mengirim…",
    "form.errSubmit": "Gagal mengirim — coba lagi.",
    "form.privacyNote": "Dengan mengirim, kamu menyetujui",
    "form.privacyPolicy": "Kebijakan Privasi",
    "form.successTitle": "Pertanyaan Diterima",
    "form.successDesc":
      "Terima kasih telah menghubungi kami! Pertanyaanmu telah tercatat. Tim Hubungan Eksternal kami akan membalas dalam 5–7 hari.",
    "form.sendAnother": "Kirim Pertanyaan Lain",
    "form.preferEmail": "Lebih suka email?",
    "form.errRequired": "Kolom ini wajib diisi.",
    "form.errName": "Nama wajib diisi.",
    "form.errOrg": "Organisasi wajib diisi.",
    "form.errEmail": "Email wajib diisi.",
    "form.errEmailValid": "Masukkan alamat email yang valid.",
    "form.errType": "Pilih jenis pertanyaan.",
    "form.errMessage": "Pesan wajib diisi.",

    // Collaboration
    "collab.label": "Kolaborasi",
    "collab.heroTitle": "Membangun Jembatan, Bersama",
    "collab.heroSubtitle":
      "Dari KBRI Kuala Lumpur hingga PPI Jerman, dari klub-klub Monash hingga sesama cabang PPI di seluruh Malaysia — inilah kemitraan yang membuat komunitas kami semakin kuat.",
    "collab.catPartnersTitle": "Mitra & Sponsor",
    "collab.catPartnersDesc":
      "Institusi, sponsor, dan organisasi kampus yang memungkinkan kerja kami terwujud.",
    "collab.catNetworkTitle": "Jaringan PPI Malaysia",
    "collab.catNetworkDesc":
      "Dua belas komunitas pelajar Indonesia di seluruh Malaysia, dipersatukan oleh akar yang sama.",
    "collab.catIntlTitle": "Kolaborasi Internasional",
    "collab.catIntlDesc":
      "Melampaui Malaysia — program bersama, webinar, dan pertukaran dengan cabang PPI di seluruh dunia.",
    "collab.explore": "Jelajahi",
    "collab.partnersTitle": "Mitra & Sponsor Kami",
    "collab.showArchive": "Lihat arsip mitra terdahulu",
    "collab.hideArchive": "Sembunyikan arsip mitra terdahulu",
    "collab.partnerSince": "Mitra sejak",
    "collab.visitWebsite": "Kunjungi Situs Web",
    "collab.instagram": "Instagram",
    "collab.networkSubtitle":
      "PPI Monash adalah satu dari banyak komunitas pelajar Indonesia di Malaysia. Bersama, kami membentuk jaringan yang terhubung di bawah PPIM — berbagi acara, ilmu, dan pengalaman menuntut ilmu jauh dari rumah.",
    "collab.viewFullNetwork": "Lihat seluruh jaringan",
    "collab.intlLabel": "Internasional",
    "collab.intlTitle": "Melampaui Malaysia",
    "collab.intlSubtitle":
      "Kolaborasi kami tidak berhenti di perbatasan Malaysia. Cabang PPI di seluruh dunia berbagi misi yang sama — dan terkadang, acara yang sama.",
    "collab.featuredPartner": "Mitra Unggulan",
    "collab.recentIntl": "Program Internasional Terkini",
    "collab.with": "bersama",
    "collab.viewEvent": "Lihat acara",
    "collab.readRecap": "Baca rangkuman",
    "collab.watchRecording": "Tonton rekaman",
    "collab.programsLabel": "Program",
    "collab.programsTitle": "Program Bersama Terkini",
    "collab.noPrograms": "Belum ada program jenis ini.",
    "collab.photos": "Foto",
    "collab.archiveNotePre": "Ingin lihat lebih banyak? Hubungi kami tentang kolaborasi tertentu melalui",
    "collab.inquiryFormBelow": "formulir pertanyaan di bawah",
    "collab.getInvolved": "Terlibat",
    "collab.inquiryTitle": "Punya Ide Kolaborasi?",
    "collab.inquirySubtitle":
      "Baik kamu sponsor, sesama cabang PPI, klub universitas, atau mitra institusional — kami senang mendengar dari kamu.",
    "collab.preferEmail": "Lebih suka email?",

    // Announcements ("What's Up Next?")
    "announce.heading": "Apa yang Akan Datang?",

    // Event-preferences feedback
    "feedback.label": "Bantu Kami Merencanakan",
    "feedback.title": "Acara Apa yang Kamu Inginkan?",
    "feedback.subtitle":
      "Beri tahu kami jenis acara yang ingin kamu lihat lebih banyak — masukanmu menentukan kalender kami.",
    "feedback.optCultural": "Budaya",
    "feedback.optSports": "Olahraga",
    "feedback.optAcademic": "Akademik",
    "feedback.optSocial": "Sosial",
    "feedback.optWorkshops": "Lokakarya",
    "feedback.optOther": "Lainnya",
    "feedback.commentLabel": "Ada lagi? (opsional)",
    "feedback.commentPlaceholder": "Usulkan acara atau ide tertentu…",
    "feedback.submit": "Kirim Masukan",
    "feedback.sending": "Mengirim…",
    "feedback.errSubmit": "Gagal mengirim — coba lagi.",
    "feedback.errPick": "Pilih setidaknya satu jenis acara.",
    "feedback.successTitle": "Terima kasih atas masukanmu!",
    "feedback.successDesc":
      "Masukanmu membantu kami merencanakan acara yang benar-benar diinginkan komunitas.",
    "feedback.sendAnother": "Kirim Masukan Lagi",

    // YouTube + Spotify CTAs
    "youtube.cta": "Berlangganan di YouTube",
    "youtube.spotifyCta": "Dengarkan di Spotify",

    // Contact / CTA
    "contact.joinUs": "Gabung",
    "contact.ctaTitle": "Siap Menjadi Bagian dari Komunitas?",
    "contact.ctaDesc":
      "Baik kamu mahasiswa baru, anggota lama, atau sekadar penasaran — kami senang terhubung denganmu.",
    "contact.joinWhatsApp": "Gabung Grup WhatsApp",

    // Footer
    "footer.collaboration": "Kolaborasi",
    "footer.partners": "Mitra",
    "footer.network": "Jaringan PPI",
    "footer.inquiries": "Pertanyaan",
    "footer.privacy": "Kebijakan Privasi",
    "footer.organization": "Informasi Organisasi",
    "footer.branchOf": "Cabang dari",

    // Network
    "network.backToCollab": "Kembali ke Kolaborasi",
    "network.all": "Semua",
    "network.active": "Aktif",
    "network.occasional": "Sesekali",
    "network.noCollab": "Belum ada",
    "network.recentJoint": "Acara Bersama Terkini",
    "network.missing": "Komunitas PPI-mu belum ada di daftar ini?",
    "network.letUsKnow": "Beri tahu kami melalui formulir pertanyaan kolaborasi",
    "network.label": "Jaringan",
    "network.title": "Jaringan PPI Malaysia",
    "network.subtitle":
      "Himpunan pelajar Indonesia di seluruh Malaysia, dipersatukan oleh budaya dan semangat kemahasiswaan yang sama. Klik komunitas mana pun untuk menghubungi atau mengenal lebih jauh.",
    "network.instagram": "Instagram",
    "network.website": "Situs Web",
    "network.viewEvent": "Lihat acara",
    "network.readRecap": "Baca rangkuman",
    "network.with": "bersama",

    // Leadership History
    "history.label": "Kepemimpinan",
    "history.title": "Sejarah Kepemimpinan",
    "history.subtitle":
      "Dari berdirinya pada {year} hingga kini — kepengurusan dan ketua yang membentuk PPI Monash Malaysia.",
    "history.current": "Saat Ini",
    "history.founded": "Berdiri",
    "history.president": "Ketua",
    "history.vicePresident": "Wakil Ketua",
    "history.backToAbout": "Kembali ke Tentang",
    "history.ctaText": "Ingin menjadi bagian dari babak berikutnya?",
    "history.ctaButton": "Temui Tim Saat Ini",

    // 404 / generic
    "notFound.back": "Kembali",
    "notFound.title": "Halaman Tidak Ditemukan",
    "notFound.desc":
      "Halaman yang kamu cari tidak ada atau mungkin telah dipindahkan.",
    "notFound.home": "Kembali ke Beranda",
  },
};
