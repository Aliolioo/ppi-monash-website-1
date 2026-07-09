// ============================================================================
// Privacy Policy page — /privacy
// ============================================================================
// Page-specific legal prose is co-located here as a bilingual content object
// (EN/ID) rather than in the global UI_STRINGS dictionary, since it isn't
// reused anywhere else. Sections render generically; list items may carry an
// optional bold lead-in label.
//
import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { LEGAL_INFO } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";

const CONTENT = {
  en: {
    label: "Legal",
    title: "Privacy Policy",
    subtitle:
      "How PPI Monash Malaysia collects, uses, and protects your information.",
    lastUpdated: "Last updated",
    sections: [
      {
        h: "Introduction",
        paras: [
          `${LEGAL_INFO.organizationName} (“PPI Monash Malaysia”, “we”, “our”) is a volunteer-run, non-profit Indonesian student association based at ${LEGAL_INFO.affiliatedCampus}. We respect the privacy of everyone who visits this website, submits an inquiry, or participates in our activities.`,
          "This policy explains what personal information we collect, how we use it, and your rights regarding that data. By using this website you acknowledge this policy.",
        ],
      },
      {
        h: "Information We Collect",
        paras: ["We collect only what is needed to operate our community and respond to your requests:"],
        list: [
          { label: "Inquiry & contact submissions", text: "name, email address, organisation name (if provided), inquiry type, and message content submitted through this website's forms." },
          { label: "Event registrations", text: "we use external platforms (typically Google Forms) to manage sign-ups. These collect the information you provide directly and are governed by those platforms' own privacy practices." },
          { label: "Anonymous usage data", text: "we may collect aggregate, non-identifying information about page visits and device types to improve the website." },
        ],
        parasAfter: ["We do not collect payment information, account credentials, or member login data."],
      },
      {
        h: "How We Use Your Information",
        paras: ["We use the information we collect to:"],
        list: [
          { text: "Respond to inquiries submitted through our contact and collaboration forms." },
          { text: "Send event invitations or community updates, only if you have opted in or signed up for them." },
          { text: "Improve the website through anonymous, aggregate usage patterns." },
        ],
        parasAfter: ["We do not sell, rent, or share your personal data with third parties for commercial purposes, nor do we use it for advertising or marketing campaigns unrelated to PPI Monash Malaysia's own activities."],
      },
      {
        h: "Third-Party Services",
        paras: ["We use third-party platforms as part of our community operations. Each platform has its own privacy policy that applies when you interact with it:"],
        list: [
          { label: "Google Forms & Google Drive", text: "used for event registrations, inquiries, surveys, and shared materials." },
          { label: "Google Analytics", text: "used to understand aggregate site usage. It only loads and sets cookies after you accept the cookie banner; you can decline. See the Cookies section below." },
          { label: "WhatsApp", text: "community groups are voluntary; WhatsApp's privacy policy applies once you join." },
          { label: "Instagram, TikTok, YouTube", text: "our social media presence; those platforms' policies apply when you interact with our content there." },
        ],
        parasAfter: ["Clicking an external link takes you away from this site. We are not responsible for the privacy practices of external services."],
      },
      {
        h: "Data Retention",
        paras: [
          "Inquiry and contact-form submissions are kept only as long as needed to respond and follow up meaningfully — typically no longer than one committee year (roughly twelve months).",
          "Event photos and community archives are retained indefinitely as part of PPI Monash Malaysia's historical record. If you appear in a published photo and would like it removed, please contact us at the email below.",
        ],
      },
      {
        h: "Your Rights",
        paras: ["You may at any time:"],
        list: [
          { text: "Request a copy of any personal data we hold about you." },
          { text: "Request correction or deletion of your personal data." },
          { text: "Withdraw from event registrations or community communication channels." },
          { text: "Request removal from specific published event photos." },
        ],
        contactPara: { pre: "To exercise any of these rights, contact us at", post: ". We aim to respond within 14 days." },
      },
      {
        h: "Cookies",
        paras: ["This website may set essential cookies required for navigation and user preferences. With your consent, we also use Google Analytics cookies to measure aggregate site usage — these load only after you click “Accept” on the cookie banner, and you can decline (or clear your choice via your browser). We do not use advertising cookies. If our cookie use changes, this section and the “Last updated” date will be revised accordingly."],
      },
      {
        h: "Children's Privacy",
        paras: ["This website is aimed at university students (typically aged 18 and above). We do not knowingly collect personal data from minors. If you believe a minor has submitted personal data to us, please contact us so we can remove it."],
      },
      {
        h: "Updates to This Policy",
        paras: ["We may update this policy as the website or our community activities evolve. The “Last updated” date at the top of this page reflects the most recent revision. Continued use of the website after an update constitutes acceptance of the revised policy."],
      },
    ],
    contactH: "Contact",
    contactP1: { pre: "For privacy-related questions or data requests, email us at", post: "." },
    contactP2: { pre: "For general inquiries, visit our", contactLink: "Contact page", mid: "or use the", inquiryLink: "collaboration inquiry form" },
    relatedPages: "Related pages",
    orgLink: "Organization Information",
    contactLink: "Contact Us",
  },
  id: {
    label: "Legal",
    title: "Kebijakan Privasi",
    subtitle:
      "Bagaimana PPI Monash Malaysia mengumpulkan, menggunakan, dan melindungi informasimu.",
    lastUpdated: "Terakhir diperbarui",
    sections: [
      {
        h: "Pendahuluan",
        paras: [
          `${LEGAL_INFO.organizationName} (“PPI Monash Malaysia”, “kami”) adalah organisasi mahasiswa Indonesia nirlaba yang dijalankan oleh relawan dan berbasis di ${LEGAL_INFO.affiliatedCampus}. Kami menghormati privasi setiap orang yang mengunjungi situs ini, mengirim pertanyaan, atau ikut serta dalam kegiatan kami.`,
          "Kebijakan ini menjelaskan informasi pribadi apa yang kami kumpulkan, bagaimana kami menggunakannya, dan hak-hakmu atas data tersebut. Dengan menggunakan situs ini, kamu menyetujui kebijakan ini.",
        ],
      },
      {
        h: "Informasi yang Kami Kumpulkan",
        paras: ["Kami hanya mengumpulkan apa yang diperlukan untuk menjalankan komunitas dan menanggapi permintaanmu:"],
        list: [
          { label: "Pertanyaan & pesan kontak", text: "nama, alamat email, nama organisasi (jika diberikan), jenis pertanyaan, dan isi pesan yang dikirim melalui formulir di situs ini." },
          { label: "Pendaftaran acara", text: "kami menggunakan platform eksternal (biasanya Google Forms) untuk mengelola pendaftaran. Platform ini mengumpulkan informasi yang kamu berikan langsung dan tunduk pada kebijakan privasi masing-masing." },
          { label: "Data penggunaan anonim", text: "kami mungkin mengumpulkan informasi agregat dan non-identitas tentang kunjungan halaman serta jenis perangkat untuk menyempurnakan situs." },
        ],
        parasAfter: ["Kami tidak mengumpulkan informasi pembayaran, kredensial akun, atau data login anggota."],
      },
      {
        h: "Bagaimana Kami Menggunakan Informasimu",
        paras: ["Kami menggunakan informasi yang dikumpulkan untuk:"],
        list: [
          { text: "Menanggapi pertanyaan yang dikirim melalui formulir kontak dan kolaborasi kami." },
          { text: "Mengirim undangan acara atau kabar komunitas, hanya jika kamu telah menyetujui atau mendaftar." },
          { text: "Menyempurnakan situs melalui pola penggunaan agregat yang anonim." },
        ],
        parasAfter: ["Kami tidak menjual, menyewakan, atau membagikan data pribadimu kepada pihak ketiga untuk tujuan komersial, dan tidak menggunakannya untuk iklan atau kampanye pemasaran yang tidak terkait dengan kegiatan PPI Monash Malaysia sendiri."],
      },
      {
        h: "Layanan Pihak Ketiga",
        paras: ["Kami menggunakan platform pihak ketiga sebagai bagian dari operasional komunitas. Setiap platform memiliki kebijakan privasinya sendiri yang berlaku saat kamu berinteraksi dengannya:"],
        list: [
          { label: "Google Forms & Google Drive", text: "digunakan untuk pendaftaran acara, pertanyaan, survei, dan berbagi materi." },
          { label: "Google Analytics", text: "digunakan untuk memahami penggunaan situs secara agregat. Hanya dimuat dan menyetel cookie setelah kamu menerima banner cookie; kamu bisa menolak. Lihat bagian Cookie di bawah." },
          { label: "WhatsApp", text: "grup komunitas bersifat sukarela; kebijakan privasi WhatsApp berlaku setelah kamu bergabung." },
          { label: "Instagram, TikTok, YouTube", text: "kehadiran media sosial kami; kebijakan platform tersebut berlaku saat kamu berinteraksi dengan konten kami di sana." },
        ],
        parasAfter: ["Mengeklik tautan eksternal akan membawamu keluar dari situs ini. Kami tidak bertanggung jawab atas praktik privasi layanan eksternal."],
      },
      {
        h: "Penyimpanan Data",
        paras: [
          "Pertanyaan dan pesan dari formulir kontak hanya disimpan selama diperlukan untuk menanggapi dan menindaklanjuti secara berarti — biasanya tidak lebih dari satu tahun kepengurusan (sekitar dua belas bulan).",
          "Foto acara dan arsip komunitas disimpan tanpa batas waktu sebagai bagian dari rekam jejak sejarah PPI Monash Malaysia. Jika kamu muncul dalam foto yang dipublikasikan dan ingin dihapus, silakan hubungi kami melalui email di bawah.",
        ],
      },
      {
        h: "Hak-Hakmu",
        paras: ["Kamu dapat sewaktu-waktu:"],
        list: [
          { text: "Meminta salinan data pribadi apa pun yang kami simpan tentangmu." },
          { text: "Meminta koreksi atau penghapusan data pribadimu." },
          { text: "Mengundurkan diri dari pendaftaran acara atau saluran komunikasi komunitas." },
          { text: "Meminta penghapusan dari foto acara tertentu yang dipublikasikan." },
        ],
        contactPara: { pre: "Untuk menggunakan hak-hak ini, hubungi kami di", post: ". Kami berupaya menanggapi dalam 14 hari." },
      },
      {
        h: "Cookie",
        paras: ["Situs ini mungkin menyetel cookie esensial yang diperlukan untuk navigasi dan preferensi pengguna. Dengan persetujuanmu, kami juga menggunakan cookie Google Analytics untuk mengukur penggunaan situs secara agregat — cookie ini hanya dimuat setelah kamu mengeklik “Terima” pada banner cookie, dan kamu bisa menolak (atau menghapus pilihanmu melalui browser). Kami tidak menggunakan cookie iklan. Jika penggunaan cookie kami berubah, bagian ini dan tanggal “Terakhir diperbarui” akan direvisi."],
      },
      {
        h: "Privasi Anak",
        paras: ["Situs ini ditujukan untuk mahasiswa (umumnya berusia 18 tahun ke atas). Kami tidak dengan sengaja mengumpulkan data pribadi dari anak di bawah umur. Jika kamu yakin seorang anak di bawah umur telah mengirimkan data pribadi kepada kami, silakan hubungi kami agar dapat kami hapus."],
      },
      {
        h: "Pembaruan Kebijakan Ini",
        paras: ["Kami dapat memperbarui kebijakan ini seiring berkembangnya situs atau kegiatan komunitas kami. Tanggal “Terakhir diperbarui” di bagian atas halaman ini mencerminkan revisi terbaru. Penggunaan situs yang berlanjut setelah pembaruan berarti menyetujui kebijakan yang telah direvisi."],
      },
    ],
    contactH: "Kontak",
    contactP1: { pre: "Untuk pertanyaan terkait privasi atau permintaan data, email kami di", post: "." },
    contactP2: { pre: "Untuk pertanyaan umum, kunjungi", contactLink: "halaman Kontak", mid: "atau gunakan", inquiryLink: "formulir pertanyaan kolaborasi" },
    relatedPages: "Halaman terkait",
    orgLink: "Informasi Organisasi",
    contactLink: "Hubungi Kami",
  },
};

function LegalSection({ section, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="legal-section">
        <h2>{section.h}</h2>
        {(section.paras || []).map((p, i) => (
          <p key={`p${i}`}>{p}</p>
        ))}
        {section.list && (
          <ul>
            {section.list.map((li, i) => (
              <li key={`li${i}`}>
                {li.label ? (
                  <>
                    <strong>{li.label}</strong> &mdash; {li.text}
                  </>
                ) : (
                  li.text
                )}
              </li>
            ))}
          </ul>
        )}
        {(section.parasAfter || []).map((p, i) => (
          <p key={`pa${i}`}>{p}</p>
        ))}
        {section.contactPara && (
          <p>
            {section.contactPara.pre}{" "}
            <a href={`mailto:${LEGAL_INFO.privacyContactEmail}`}>
              {LEGAL_INFO.privacyContactEmail}
            </a>
            {section.contactPara.post}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

export default function Privacy() {
  const { lang } = useLang();
  const c = CONTENT[lang] || CONTENT.en;

  return (
    <div className="section">
      <div className="legal-page">
        <Seo title={c.title} description={c.subtitle} path="/privacy" />

        <FadeIn>
          <div className="section-label">{c.label}</div>
          <h1 className="section-title">{c.title}</h1>
          <p className="section-subtitle" style={{ maxWidth: 560 }}>
            {c.subtitle}
          </p>
          <p className="legal-last-updated">
            {c.lastUpdated}: {LEGAL_INFO.privacyLastUpdated}
          </p>
        </FadeIn>

        {c.sections.map((section, i) => (
          <LegalSection key={section.h} section={section} delay={0.05 + i * 0.02} />
        ))}

        {/* Contact (with links) */}
        <FadeIn delay={0.3}>
          <div className="legal-section">
            <h2>{c.contactH}</h2>
            <div className="legal-note">
              <p>
                {c.contactP1.pre}{" "}
                <a href={`mailto:${LEGAL_INFO.privacyContactEmail}`}>
                  {LEGAL_INFO.privacyContactEmail}
                </a>
                {c.contactP1.post}
              </p>
              <p>
                {c.contactP2.pre} <Link to="/contact">{c.contactP2.contactLink}</Link>{" "}
                {c.contactP2.mid}{" "}
                <Link to="/collaboration#inquiry">{c.contactP2.inquiryLink}</Link>.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Helpful links */}
        <FadeIn delay={0.34}>
          <div className="legal-helplinks">
            <p>{c.relatedPages}</p>
            <div className="legal-helplinks-row">
              <Link to="/organization" className="btn-secondary">
                {c.orgLink}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {c.contactLink}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
