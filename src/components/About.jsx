// ============================================================================
// <About> — History, mission, and community stats
// ============================================================================
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { SITE_INFO, STATS } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";

export function About() {
  const { t, tc } = useLang();
  return (
    <section className="section" id="about">
      <div className="about-grid">
        {/* Left: Text content */}
        <div>
          <FadeIn>
            <div className="section-label">{t("about.label")}</div>
            <h2 className="section-title">
              {t("about.title", { year: SITE_INFO.foundedYear })}
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 20 }}>
              {t("about.intro", {
                year: SITE_INFO.foundedYear,
                tagline: SITE_INFO.tagline,
              })}
            </p>
            <p className="about-body">{t("about.body")}</p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="about-stats">
              {STATS.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{tc(s.label)}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: Visual grid */}
        <FadeIn delay={0.2}>
          <div className="about-visual">
            <div className="about-image-grid">
              {[
                { bg: "linear-gradient(135deg, #B22234, #DC3545)", color: "#fff", icon: "🇮🇩", word: t("about.wordUnity") },
                { bg: "linear-gradient(135deg, #D4A843, #F0D78C)", color: "#1A1A1A", icon: "🎓", word: t("about.wordGrowth") },
                { bg: "linear-gradient(135deg, #F5EDE0, #FFF8F0)", color: "#1A1A1A", icon: "🤝", word: t("about.wordFriendship") },
                { bg: "linear-gradient(135deg, #1A1A1A, #4A4A4A)", color: "#fff", icon: "✨", word: "Eunoia" },
              ].map((card, i) => (
                <div
                  className={`about-img-card ${i === 1 ? "offset" : ""}`}
                  key={i}
                  style={{ background: card.bg, color: card.color }}
                >
                  <span className="card-icon">{card.icon}</span>
                  <span className="card-word">{card.word}</span>
                </div>
              ))}
            </div>

            {/* Vision quote overlay */}
            <div className="vision-quote">
              <span className="quote-mark">"</span>
              {tc(SITE_INFO.vision)}
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.3}>
        <div className="about-history-strip">
          <div>
            <div className="section-label" style={{ marginBottom: 8 }}>
              {t("about.historyLabel")}
            </div>
            <h3>{t("about.historyTitle", { year: SITE_INFO.foundedYear })}</h3>
            <p>{t("about.historyDesc")}</p>
          </div>
          <Link to="/about/history" className="btn-secondary">
            {t("about.viewHistory")} <span className="link-arrow">&rarr;</span>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
