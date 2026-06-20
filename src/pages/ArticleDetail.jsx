// ============================================================================
// ArticleDetail page — full article body at /articles/:id
// ============================================================================
import { useParams, Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { ArticleCard } from "../components/ArticleCard";
import { ARTICLES } from "../config/siteConfig";
import { findArticleById, getRelatedArticles, CATEGORY_ICONS, DEFAULT_ARTICLE_ICON } from "../utils/articles";
import renderMarkdown from "../utils/markdown";
import { useLang } from "../i18n/LanguageContext";

function getExternalDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ArticleDetail() {
  const { id } = useParams();
  const article = findArticleById(ARTICLES, id);
  const { t, tc, tcat } = useLang();

  if (!article) {
    return (
      <div className="section not-found-state">
        <FadeIn>
          <div className="section-label">404</div>
          <h2 className="section-title">{t("articles.notFoundTitle")}</h2>
          <p className="section-subtitle" style={{ marginInline: "auto" }}>
            {t("articles.notFoundDesc")}
          </p>
          <Link to="/articles" className="btn-secondary">
            ← {t("articles.backToArticles")}
          </Link>
        </FadeIn>
      </div>
    );
  }

  const related = getRelatedArticles(article, ARTICLES, 3);

  return (
    <div className="section">
      <Seo
        title={article.title}
        description={article.excerpt}
        path={`/articles/${article.id}`}
        image={article.coverImage}
        type="article"
      />
      <FadeIn>
        <Link to="/articles" className="event-detail-back">
          ← {t("articles.backToArticles")}
        </Link>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="article-detail-header">
          <span className="category-badge">{tcat(article.category)}</span>
          <h1>{tc(article.title)}</h1>
          <div className="article-byline">
            {t("articles.by")} {article.author} · {article.dateDisplay}
          </div>
          {article.tags.length > 0 && (
            <div className="tags-row">
              {article.tags.map((tag) => (
                <span className="tag-chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="article-detail-cover">
          {article.coverImage ? (
            <img src={article.coverImage} alt={tc(article.title)} />
          ) : (
            <span className="cover-icon">
              {CATEGORY_ICONS[article.category] || DEFAULT_ARTICLE_ICON}
            </span>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="article-detail-body">
          {article.externalUrl && (
            <div className="external-notice">
              {t("articles.originallyOn")}{" "}
              <strong>{getExternalDomain(article.externalUrl)}</strong>.{" "}
              <a href={article.externalUrl} target="_blank" rel="noopener noreferrer">
                {t("articles.readOriginal")} →
              </a>
            </div>
          )}
          {renderMarkdown(tc(article.body))}
        </div>
      </FadeIn>

      {related.length > 0 && (
        <FadeIn delay={0.2}>
          <div className="event-detail-section">
            <h2>{t("articles.related")}</h2>
            <div className="related-grid">
              {related.map((a) => (
                <ArticleCard article={a} key={a.id} />
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
