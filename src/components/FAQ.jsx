// ============================================================================
// <FAQ> — Searchable accordion FAQ on dark background
// ============================================================================
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { FAQS, STUDENT_GUIDES, SOCIAL_LINKS } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";
import { searchText } from "../i18n/loc";

export function FAQ() {
  const { t, tc, tcat } = useLang();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

  const categories = useMemo(() => {
    const cats = [...new Set(FAQS.map((f) => f.category))];
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    let list = FAQS;
    if (activeCategory !== "All") {
      list = list.filter((f) => f.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((f) =>
        `${searchText(f.q)} ${searchText(f.a)}`.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, activeCategory]);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="faq-section" id="faq">
      <FadeIn>
        <div className="section-label">FAQ</div>
        <h2 className="section-title">{t("faq.title")}</h2>
        <p className="section-subtitle">{t("faq.subtitle")}</p>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="faq-controls">
          <div className="faq-search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder={t("faq.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label={t("faq.searchPlaceholder")}
            />
            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <div className="faq-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`faq-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "All" ? t("faq.all") : tcat(cat)}
              </button>
            ))}
          </div>
          <p className="faq-result-count">
            {t("faq.resultCount", { shown: filtered.length, total: FAQS.length })}
          </p>
        </div>
      </FadeIn>

      <div className="faq-list">
        {filtered.length === 0 ? (
          <FadeIn>
            <div className="faq-empty-state">
              {t("faq.noMatchPre")} &ldquo;{search}&rdquo; {t("faq.noMatchPost")}{" "}
              <button
                className="faq-empty-reset"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                {t("common.clearFilters")}
              </button>
              .
            </div>
          </FadeIn>
        ) : (
          filtered.map((faq, i) => {
            const isOpen = openId === faq.id;
            const relatedGuides = faq.relatedGuideIds
              .map((gId) => STUDENT_GUIDES.find((g) => g.id === gId))
              .filter(Boolean);
            return (
              <FadeIn key={faq.id} delay={i * 0.04}>
                <div className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{tc(faq.q)}</span>
                    <span className="faq-item-category">{tcat(faq.category)}</span>
                    <span className={`faq-chevron ${isOpen ? "open" : ""}`}>▾</span>
                  </button>
                  <div
                    className={`faq-answer ${isOpen ? "open" : ""}`}
                    role="region"
                  >
                    <div className="faq-answer-inner">
                      {tc(faq.a)}
                      {(relatedGuides.length > 0 || faq.lastUpdated) && (
                        <div className="faq-answer-footer">
                          {relatedGuides.length > 0 && (
                            <div className="faq-related-guides">
                              <span className="faq-related-label">{t("faq.guidesLabel")}</span>
                              {relatedGuides.map((g) => (
                                <Link
                                  key={g.id}
                                  to={`/guide/${g.id}`}
                                  className="faq-guide-link"
                                >
                                  {g.icon} {tc(g.title)}
                                </Link>
                              ))}
                            </div>
                          )}
                          {faq.lastUpdated && (
                            <span className="faq-last-updated">
                              {t("faq.lastUpdated")} {faq.lastUpdated}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })
        )}
      </div>

      <FadeIn delay={0.15}>
        <div className="faq-cta">
          <p>{t("faq.stillQuestions")}</p>
          <div className="faq-cta-links">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="faq-cta-btn"
            >
              {t("faq.emailUs")}
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="faq-cta-btn faq-cta-btn--whatsapp"
            >
              {t("faq.whatsappGroup")}
            </a>
            <Link to="/contact" className="faq-cta-btn">
              {t("faq.contactPage")}
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
