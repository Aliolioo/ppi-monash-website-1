// ============================================================================
// <Hero> — Landing hero with animated particles and dual CTA
// ============================================================================
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { SITE_INFO, SOCIAL_LINKS } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";

export function Hero() {
  const { t, tc } = useLang();
  return (
    <section className="hero" id="home">
      <div className="hero-bg-pattern" />

      {/* Floating decorative elements */}
      <div className="hero-float hero-float-1" />
      <div className="hero-float hero-float-2" />
      <div className="hero-float hero-float-3" />

      <div className="hero-content">
        <FadeIn>
          <div className="hero-badge">
            <span className="dot" />
            {SITE_INFO.tagline} · Est. {SITE_INFO.foundedYear}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1>
            {t("hero.titlePre")}
            <span className="highlight">{t("hero.titleHighlight")}</span>
            <br />
            {t("hero.titlePost")}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="hero-desc">{tc(SITE_INFO.description)}</p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="hero-buttons">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span className="btn-icon">💬</span>
              {t("hero.joinCommunity")}
              <span className="btn-arrow">→</span>
            </a>
            <Link to="/about" className="btn-secondary">
              {t("common.learnMore")}
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="hero-scroll-hint">
            <div className="scroll-line" />
            <span>{t("hero.scrollHint")}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
