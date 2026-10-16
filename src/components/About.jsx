// ============================================================================
// <About> — History, mission, and community stats
// ============================================================================
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { SITE_INFO, STATS } from "../config/siteConfig";
import { getAssetUrl } from "../utils/assets";
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
                {
                  image: "unity-cover.JPG",
                  alt: "PPI Monash members gathered together at an event",
                  icon: "🇮🇩",
                  word: t("about.wordUnity"),
                },
                {
                  image: "growth-cover.JPG",
                  alt: "A PPI Monash member speaking at an event",
                  icon: "🎓",
                  word: t("about.wordGrowth"),
                },
                {
                  image: "friendship-cover.JPG",
                  alt: "PPI Monash members collaborating at a student event",
                  icon: "🤝",
                  word: t("about.wordFriendship"),
                },
                {
                  image: "eunoia-cover.JPG",
                  alt: "PPI Monash members gathered on campus",
                  icon: "✨",
                  word: "Eunoia",
                },
              ].map((card, i) => (
                <div
                  className={`about-img-card ${i === 1 ? "offset" : ""}`}
                  key={i}
                >
                  <img
                    src={getAssetUrl(`/assets/photos/about/${card.image}`)}
                    alt={card.alt}
                    className="about-img-photo"
                  />
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
