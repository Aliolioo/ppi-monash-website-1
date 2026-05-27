// ============================================================================
// <Articles> — Article cards grid with tags and external links
// ============================================================================
import { FadeIn } from "./FadeIn";
import { ARTICLES } from "../config/siteConfig";

const TAG_ICONS = {
  Sports: "⚽",
  Academic: "📚",
  Culture: "🌙",
  Lifestyle: "🌴",
};

export function Articles() {
  return (
    <section className="section" id="articles">
      <FadeIn>
        <div className="section-label">Articles</div>
        <h2 className="section-title">Stories & Insights</h2>
        <p className="section-subtitle">
          Read about life as an Indonesian student at Monash Malaysia.
        </p>
      </FadeIn>

      <div className="articles-grid">
        {ARTICLES.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.08}>
            <a
              href={a.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card"
            >
              <div className="article-thumb">
                <div className="thumb-pattern" />
                <span className="thumb-icon">
                  {TAG_ICONS[a.tag] || "📝"}
                </span>
              </div>
              <div className="article-body">
                <span className="article-tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="read-more">
                  Read article <span className="link-arrow">→</span>
                </span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
