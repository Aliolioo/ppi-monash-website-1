// ============================================================================
// <Contact> — Community join CTA + social links
// <Footer> — Simple copyright footer
// ============================================================================
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { SOCIAL_LINKS, SITE_INFO } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";

const SOCIALS = [
  { name: "Instagram", url: SOCIAL_LINKS.instagram, icon: "📷" },
  { name: "TikTok", url: SOCIAL_LINKS.tiktok, icon: "🎵" },
  { name: "YouTube", url: SOCIAL_LINKS.youtube, icon: "▶️" },
  { name: "Spotify", url: SOCIAL_LINKS.spotify, icon: "🎧" },
  { name: "WhatsApp", url: SOCIAL_LINKS.whatsapp, icon: "💬" },
];

export function Contact() {
  const { t } = useLang();
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg" />
      <div className="cta-content">
        <FadeIn>
          <div className="section-label" style={{ justifyContent: "center" }}>
            {t("contact.joinUs")}
          </div>
          <h2 className="cta-title">{t("contact.ctaTitle")}</h2>
          <p className="cta-desc">{t("contact.ctaDesc")}</p>

          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-large"
          >
            <span className="btn-icon">💬</span>
            {t("contact.joinWhatsApp")}
            <span className="btn-arrow">→</span>
          </a>

          <div className="social-links">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>{s.icon}</span> {s.name}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/collaboration">{t("footer.collaboration")}</Link>
        <Link to="/collaboration#partners">{t("footer.partners")}</Link>
        <Link to="/network">{t("footer.network")}</Link>
        <Link to="/collaboration#inquiry">{t("footer.inquiries")}</Link>
      </div>
      <p>
        &copy; {SITE_INFO.currentYear} {SITE_INFO.name} &middot;{" "}
        {SITE_INFO.tagline} &mdash; {t("footer.branchOf")}{" "}
        <a
          href={SOCIAL_LINKS.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          PPIM
        </a>
      </p>
      <div className="footer-legal-links">
        <Link to="/privacy">{t("footer.privacy")}</Link>
        <span aria-hidden="true">&middot;</span>
        <Link to="/organization">{t("footer.organization")}</Link>
      </div>
    </footer>
  );
}
