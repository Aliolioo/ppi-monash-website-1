// ============================================================================
// <Hero> — Landing hero with animated particles and dual CTA
// ============================================================================
import { FadeIn } from "./FadeIn";
import { SITE_INFO, SOCIAL_LINKS } from "../config/siteConfig";

export function Hero() {
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
            Your Indonesian{" "}
            <span className="highlight">Community</span>
            <br />
            at Monash Malaysia
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="hero-desc">{SITE_INFO.description}</p>
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
              Join Our Community
              <span className="btn-arrow">→</span>
            </a>
            <a
              href="#about"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="hero-scroll-hint">
            <div className="scroll-line" />
            <span>Scroll to explore</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
