// ============================================================================
// Organization Information page — /organization
// Imprint-style institutional details for PPI Monash Malaysia.
// Page-specific prose lives in the bilingual CONTENT object below; structural
// values (names, URLs, years) come from LEGAL_INFO / SOCIAL_LINKS / SITE_INFO.
// ============================================================================
import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { LEGAL_INFO, SOCIAL_LINKS, SITE_INFO } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";

const CONTENT = {
  en: {
    label: "Institutional",
    title: "Organization Information",
    subtitle: `Official details about ${LEGAL_INFO.shortName} — who we are, who we're affiliated with, and how to reach us.`,
    lastUpdated: "Last updated",
    aboutH: "About This Organization",
    aboutP1: `${LEGAL_INFO.organizationName} is a student-led, non-profit community for Indonesian students studying at ${LEGAL_INFO.affiliatedCampus}. Founded in ${SITE_INFO.foundedYear}, we provide academic support, cultural events, and a social network to help Indonesian students thrive during their time in Malaysia.`,
    aboutP2: `We operate under the banner of the ${LEGAL_INFO.parentOrganization} and maintain ties with the ${LEGAL_INFO.affiliatedEmbassy}.`,
    detailsH: "Organization Details",
    dl: {
      fullName: "Full name",
      commonName: "Common name",
      tagline: "Tagline",
      type: "Type",
      typeValue: "Volunteer-run, non-profit student association",
      founded: "Founded",
      campus: "Affiliated campus",
      parent: "Parent organization",
      embassy: "Embassy affiliation",
      website: "Official website",
    },
    committeeH: "Current Committee",
    cabinetName: "Cabinet name",
    activePeriod: "Active period",
    fullTeam: "Full team",
    fullTeamLink: "View all committee members",
    leadershipHistory: "Leadership history",
    leadershipLink: `View all cabinets since ${SITE_INFO.foundedYear}`,
    contactH: "Official Contact",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp community",
    joinGroup: "Join group",
    contactNote: {
      pre: "For general inquiries, visit the",
      contactLink: "Contact page",
      mid: ". For collaboration or partnership proposals, use the",
      inquiryLink: "inquiry form",
    },
    disclaimerH: "Disclaimer",
    disclaimerP1: `PPI Monash Malaysia is an independent student organisation. We are not an official representative body of the Indonesian government, ${LEGAL_INFO.affiliatedCampus}, or any commercial entity.`,
    disclaimerP2:
      "Content published on this website — including articles, event descriptions, and student guides — reflects the views of the individual contributors and does not constitute official advice (legal, financial, medical, or otherwise). Always consult qualified professionals for matters requiring expert guidance.",
    disclaimerP3:
      "We make reasonable efforts to keep information accurate and up-to-date, but we cannot guarantee completeness or timeliness. Use of this website is at your own discretion.",
    externalH: "External Links",
    externalP:
      "This website may link to external websites operated by third parties — including partner organisations, government bodies, and social media platforms. We have no control over the content, accuracy, or privacy practices of those sites. Links are provided for convenience only and do not constitute an endorsement.",
    copyrightH: "Copyright",
    allRightsReserved: "All rights reserved.",
    copyrightP2: {
      pre: "Original written content, photographs, and graphic assets published on this website are the property of PPI Monash Malaysia or their respective creators. Reproduction or redistribution for non-personal use requires written permission. For media or educational inquiries, contact",
      post: ".",
    },
    relatedPages: "Related pages",
    aboutLink: "About PPI Monash",
    committeeLink: "Committee",
    historyLink: "Leadership History",
    privacyLink: "Privacy Policy",
  },
  id: {
    label: "Institusional",
    title: "Informasi Organisasi",
    subtitle: `Rincian resmi tentang ${LEGAL_INFO.shortName} — siapa kami, dengan siapa kami berafiliasi, dan cara menghubungi kami.`,
    lastUpdated: "Terakhir diperbarui",
    aboutH: "Tentang Organisasi Ini",
    aboutP1: `${LEGAL_INFO.organizationName} adalah komunitas nirlaba yang dipimpin mahasiswa untuk mahasiswa Indonesia yang berkuliah di ${LEGAL_INFO.affiliatedCampus}. Didirikan pada ${SITE_INFO.foundedYear}, kami menyediakan dukungan akademik, acara budaya, dan jaringan sosial untuk membantu mahasiswa Indonesia berkembang selama berada di Malaysia.`,
    aboutP2: `Kami beroperasi di bawah naungan ${LEGAL_INFO.parentOrganization} dan menjalin hubungan dengan ${LEGAL_INFO.affiliatedEmbassy}.`,
    detailsH: "Detail Organisasi",
    dl: {
      fullName: "Nama lengkap",
      commonName: "Nama umum",
      tagline: "Tagline",
      type: "Jenis",
      typeValue: "Organisasi mahasiswa nirlaba yang dijalankan relawan",
      founded: "Berdiri",
      campus: "Kampus afiliasi",
      parent: "Organisasi induk",
      embassy: "Afiliasi kedutaan",
      website: "Situs web resmi",
    },
    committeeH: "Kepengurusan Saat Ini",
    cabinetName: "Nama kabinet",
    activePeriod: "Periode aktif",
    fullTeam: "Tim lengkap",
    fullTeamLink: "Lihat semua pengurus",
    leadershipHistory: "Sejarah kepemimpinan",
    leadershipLink: `Lihat semua kabinet sejak ${SITE_INFO.foundedYear}`,
    contactH: "Kontak Resmi",
    emailLabel: "Email",
    whatsappLabel: "Komunitas WhatsApp",
    joinGroup: "Gabung grup",
    contactNote: {
      pre: "Untuk pertanyaan umum, kunjungi",
      contactLink: "halaman Kontak",
      mid: ". Untuk proposal kolaborasi atau kemitraan, gunakan",
      inquiryLink: "formulir pertanyaan",
    },
    disclaimerH: "Penafian",
    disclaimerP1: `PPI Monash Malaysia adalah organisasi mahasiswa independen. Kami bukan badan perwakilan resmi pemerintah Indonesia, ${LEGAL_INFO.affiliatedCampus}, atau entitas komersial mana pun.`,
    disclaimerP2:
      "Konten yang dipublikasikan di situs ini — termasuk artikel, deskripsi acara, dan panduan mahasiswa — mencerminkan pandangan masing-masing kontributor dan bukan merupakan nasihat resmi (hukum, keuangan, medis, atau lainnya). Selalu konsultasikan dengan profesional yang berkualifikasi untuk hal yang memerlukan keahlian.",
    disclaimerP3:
      "Kami berupaya sewajarnya menjaga informasi tetap akurat dan terkini, tetapi kami tidak dapat menjamin kelengkapan atau ketepatan waktunya. Penggunaan situs ini sepenuhnya atas kebijakanmu sendiri.",
    externalH: "Tautan Eksternal",
    externalP:
      "Situs ini mungkin menautkan ke situs eksternal yang dikelola pihak ketiga — termasuk organisasi mitra, lembaga pemerintah, dan platform media sosial. Kami tidak memiliki kendali atas konten, keakuratan, atau praktik privasi situs tersebut. Tautan disediakan hanya untuk kemudahan dan bukan merupakan dukungan.",
    copyrightH: "Hak Cipta",
    allRightsReserved: "Hak cipta dilindungi.",
    copyrightP2: {
      pre: "Konten tulisan asli, foto, dan aset grafis yang dipublikasikan di situs ini adalah milik PPI Monash Malaysia atau pembuatnya masing-masing. Reproduksi atau pendistribusian ulang untuk penggunaan non-pribadi memerlukan izin tertulis. Untuk pertanyaan media atau edukasi, hubungi",
      post: ".",
    },
    relatedPages: "Halaman terkait",
    aboutLink: "Tentang PPI Monash",
    committeeLink: "Pengurus",
    historyLink: "Sejarah Kepemimpinan",
    privacyLink: "Kebijakan Privasi",
  },
};

export default function Organization() {
  const { lang } = useLang();
  const c = CONTENT[lang] || CONTENT.en;

  return (
    <div className="section">
      <div className="legal-page">
        <Seo title={c.title} description={c.subtitle} path="/organization" />

        <FadeIn>
          <div className="section-label">{c.label}</div>
          <h1 className="section-title">{c.title}</h1>
          <p className="section-subtitle" style={{ maxWidth: 560 }}>
            {c.subtitle}
          </p>
          <p className="legal-last-updated">
            {c.lastUpdated}: {LEGAL_INFO.imprintLastUpdated}
          </p>
        </FadeIn>

        {/* About */}
        <FadeIn delay={0.05}>
          <div className="legal-section">
            <h2>{c.aboutH}</h2>
            <p>{c.aboutP1}</p>
            <p>{c.aboutP2}</p>
          </div>
        </FadeIn>

        {/* Organization details */}
        <FadeIn delay={0.07}>
          <div className="legal-section">
            <h2>{c.detailsH}</h2>
            <dl className="legal-dl">
              <div><dt>{c.dl.fullName}</dt><dd>{LEGAL_INFO.organizationName}</dd></div>
              <div><dt>{c.dl.commonName}</dt><dd>{LEGAL_INFO.shortName}</dd></div>
              <div><dt>{c.dl.tagline}</dt><dd>{LEGAL_INFO.tagline}</dd></div>
              <div><dt>{c.dl.type}</dt><dd>{c.dl.typeValue}</dd></div>
              <div><dt>{c.dl.founded}</dt><dd>{SITE_INFO.foundedYear}</dd></div>
              <div><dt>{c.dl.campus}</dt><dd>{LEGAL_INFO.affiliatedCampus}</dd></div>
              <div><dt>{c.dl.parent}</dt><dd>{LEGAL_INFO.parentOrganization}</dd></div>
              <div><dt>{c.dl.embassy}</dt><dd>{LEGAL_INFO.affiliatedEmbassy}</dd></div>
              <div>
                <dt>{c.dl.website}</dt>
                <dd>
                  <a href={LEGAL_INFO.officialWebsite} target="_blank" rel="noopener noreferrer">
                    {LEGAL_INFO.officialWebsite}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        {/* Current committee */}
        <FadeIn delay={0.09}>
          <div className="legal-section">
            <h2>{c.committeeH}</h2>
            <dl className="legal-dl">
              <div><dt>{c.cabinetName}</dt><dd>{LEGAL_INFO.committeeName}</dd></div>
              <div><dt>{c.activePeriod}</dt><dd>{LEGAL_INFO.committeePeriod}</dd></div>
              <div>
                <dt>{c.fullTeam}</dt>
                <dd><Link to="/team">{c.fullTeamLink} &rarr;</Link></dd>
              </div>
              <div>
                <dt>{c.leadershipHistory}</dt>
                <dd><Link to="/about/history">{c.leadershipLink} &rarr;</Link></dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        {/* Official contact */}
        <FadeIn delay={0.11}>
          <div className="legal-section">
            <h2>{c.contactH}</h2>
            <dl className="legal-dl">
              <div>
                <dt>{c.emailLabel}</dt>
                <dd><a href={`mailto:${LEGAL_INFO.officialEmail}`}>{LEGAL_INFO.officialEmail}</a></dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd><a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">{SOCIAL_LINKS.instagram}</a></dd>
              </div>
              <div>
                <dt>TikTok</dt>
                <dd><a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer">{SOCIAL_LINKS.tiktok}</a></dd>
              </div>
              <div>
                <dt>YouTube</dt>
                <dd><a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">{SOCIAL_LINKS.youtube}</a></dd>
              </div>
              <div>
                <dt>Spotify</dt>
                <dd><a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer">{SOCIAL_LINKS.spotify}</a></dd>
              </div>
              <div>
                <dt>{c.whatsappLabel}</dt>
                <dd><a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">{c.joinGroup} &rarr;</a></dd>
              </div>
            </dl>
            <p style={{ marginTop: 16 }}>
              {c.contactNote.pre} <Link to="/contact">{c.contactNote.contactLink}</Link>
              {c.contactNote.mid}{" "}
              <Link to="/collaboration#inquiry">{c.contactNote.inquiryLink}</Link>.
            </p>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <FadeIn delay={0.13}>
          <div className="legal-section">
            <h2>{c.disclaimerH}</h2>
            <div className="legal-note">
              <p>{c.disclaimerP1}</p>
              <p>{c.disclaimerP2}</p>
              <p>{c.disclaimerP3}</p>
            </div>
          </div>
        </FadeIn>

        {/* External links */}
        <FadeIn delay={0.14}>
          <div className="legal-section">
            <h2>{c.externalH}</h2>
            <p>{c.externalP}</p>
          </div>
        </FadeIn>

        {/* Copyright */}
        <FadeIn delay={0.15}>
          <div className="legal-section">
            <h2>{c.copyrightH}</h2>
            <p>
              &copy; {SITE_INFO.foundedYear}&ndash;{SITE_INFO.currentYear}{" "}
              {LEGAL_INFO.organizationName}. {c.allRightsReserved}
            </p>
            <p>
              {c.copyrightP2.pre}{" "}
              <a href={`mailto:${LEGAL_INFO.officialEmail}`}>{LEGAL_INFO.officialEmail}</a>
              {c.copyrightP2.post}
            </p>
          </div>
        </FadeIn>

        {/* Helpful links */}
        <FadeIn delay={0.16}>
          <div className="legal-helplinks">
            <p>{c.relatedPages}</p>
            <div className="legal-helplinks-row">
              <Link to="/about" className="btn-secondary">{c.aboutLink}</Link>
              <Link to="/team" className="btn-secondary">{c.committeeLink}</Link>
              <Link to="/about/history" className="btn-secondary">{c.historyLink}</Link>
              <Link to="/privacy" className="btn-secondary">{c.privacyLink}</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
