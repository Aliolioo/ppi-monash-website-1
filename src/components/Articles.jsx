// ============================================================================
// <Articles> — Searchable, category-filterable article listing
// ============================================================================
import { useState, useMemo } from "react";
import { FadeIn } from "./FadeIn";
import { ArticleCard } from "./ArticleCard";
import { ARTICLES } from "../config/siteConfig";
import { sortByDateDesc, matchesSearch, getPublishedArticles } from "../utils/articles";
import { useLang } from "../i18n/LanguageContext";

export function Articles() {
  const { t, tcat } = useLang();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Only published articles (drafts are hidden until their flag is removed)
  const published = useMemo(() => getPublishedArticles(ARTICLES), []);

  // Auto-generate filter categories from the article data
  const categories = useMemo(() => {
    const cats = [...new Set(published.map((a) => a.category))];
    return ["All", ...cats];
  }, [published]);

  const filtered = useMemo(() => {
    const byCategory = filter === "All" ? published : published.filter((a) => a.category === filter);
    return sortByDateDesc(byCategory.filter((a) => matchesSearch(a, search)));
  }, [filter, search, published]);

  return (
    <section className="section" id="articles">
      <FadeIn>
        <div className="section-label">{t("home.articlesLabel")}</div>
        <h2 className="section-title">{t("home.articlesTitle")}</h2>
        <p className="section-subtitle">{t("articles.listSubtitle")}</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("articles.searchPlaceholder")}
            aria-label={t("articles.searchPlaceholder")}
          />
          {search && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="event-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat === "All" ? t("faq.all") : tcat(cat)}
            </button>
          ))}
        </div>
      </FadeIn>

      {filtered.length === 0 ? (
        <div className="empty-state">{t("articles.empty")}</div>
      ) : (
        <div className="articles-grid">
          {filtered.map((a, i) => (
            <FadeIn key={a.id} delay={i * 0.06}>
              <ArticleCard article={a} />
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}
