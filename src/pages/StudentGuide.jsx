// ============================================================================
// StudentGuide page — searchable, category-filterable guide listing at /guide
// ============================================================================
import { useState, useMemo } from "react";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { GuideCard } from "../components/GuideCard";
import { STUDENT_GUIDES } from "../config/siteConfig";
import { matchesSearch } from "../utils/studentGuide";
import { useLang } from "../i18n/LanguageContext";

export default function StudentGuide() {
  const { t, tcat } = useLang();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Auto-generate filter categories from the guide data
  const categories = useMemo(() => {
    const cats = [...new Set(STUDENT_GUIDES.map((g) => g.category))];
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    const byCategory =
      filter === "All" ? STUDENT_GUIDES : STUDENT_GUIDES.filter((g) => g.category === filter);
    return byCategory.filter((g) => matchesSearch(g, search));
  }, [filter, search]);

  return (
    <section className="section" id="guide">
      <Seo
        title="Student Guide"
        description="Practical survival guides for Indonesian students at Monash University Malaysia — written by students, for students. Banking, housing, visas, and more."
        path="/guide"
      />
      <FadeIn>
        <div className="section-label">{t("guide.label")}</div>
        <h2 className="section-title">{t("guide.title")}</h2>
        <p className="section-subtitle">{t("guide.subtitle")}</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("guide.searchPlaceholder")}
            aria-label={t("guide.searchPlaceholder")}
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
        <div className="empty-state">{t("guide.empty")}</div>
      ) : (
        <div className="guides-grid">
          {filtered.map((g, i) => (
            <FadeIn key={g.id} delay={i * 0.05}>
              <GuideCard guide={g} />
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}
