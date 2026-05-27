// ============================================================================
// <Contact> — Community join CTA + social links
// <Footer> — Simple copyright footer
// ============================================================================
import { FadeIn } from "./FadeIn";
import { SOCIAL_LINKS, SITE_INFO } from "../config/siteConfig";

const SOCIALS = [
  { name: "Instagram", url: SOCIAL_LINKS.instagram, icon: "📷" },
  { name: "TikTok", url: SOCIAL_LINKS.tiktok, icon: "🎵" },
  { name: "YouTube", url: SOCIAL_LINKS.youtube, icon: "▶️" },
  { name: "WhatsApp", url: SOCIAL_LINKS.whatsapp, icon: "💬" },
];

export function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg" />
      <div className="cta-content">
        <FadeIn>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Join Us
          </div>
          <h2 className="cta-title">
            Ready to Be Part of
            <br />
            the Community?
          </h2>
          <p className="cta-desc">
            Whether you're a new student, current member, or just curious — we'd
            love to connect with you.
          </p>

          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-large"
          >
            <span className="btn-icon">💬</span>
            Join WhatsApp Group
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
  return (
    <footer className="footer">
      <p>
        © {SITE_INFO.currentYear} {SITE_INFO.name} · {SITE_INFO.tagline} — A
        branch of{" "}
        <a
          href={SOCIAL_LINKS.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          PPIM
        </a>
      </p>
    </footer>
  );
}
