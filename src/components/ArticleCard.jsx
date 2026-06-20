// ============================================================================
// <ArticleCard> — Compact article card, used by the Articles listing, the
// Home page teaser, and the "Related Articles" block on the detail page.
// The whole card links to /articles/:id, even when externalUrl is set.
// ============================================================================
import { Link } from "react-router-dom";
import { CATEGORY_ICONS, DEFAULT_ARTICLE_ICON } from "../utils/articles";
import { useLang } from "../i18n/LanguageContext";

export function ArticleCard({ article }) {
  const { t, tc, tcat } = useLang();
  return (
    <Link to={`/articles/${article.id}`} className="article-card">
      <div className="article-thumb">
        <div className="thumb-pattern" />
        {article.coverImage ? (
          <img src={article.coverImage} alt={tc(article.title)} className="thumb-image" />
        ) : (
          <span className="thumb-icon">
            {CATEGORY_ICONS[article.category] || DEFAULT_ARTICLE_ICON}
          </span>
        )}
      </div>
      <div className="article-body">
        <span className="article-tag">{tcat(article.category)}</span>
        <h3>{tc(article.title)}</h3>
        <p>{tc(article.excerpt)}</p>
        <span className="read-more">
          {t("articles.readArticle")} <span className="link-arrow">→</span>
        </span>
      </div>
    </Link>
  );
}
