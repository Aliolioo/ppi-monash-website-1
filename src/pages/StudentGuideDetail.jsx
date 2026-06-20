// ============================================================================
// StudentGuideDetail page — full guide body at /guide/:id
// ============================================================================
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { GuideCard } from "../components/GuideCard";
import { STUDENT_GUIDES, FAQS } from "../config/siteConfig";
import { findGuideById, getRelatedGuides, getDomain } from "../utils/studentGuide";
import renderMarkdown from "../utils/markdown";
import { useLang } from "../i18n/LanguageContext";

export default function StudentGuideDetail() {
  const { id } = useParams();
  const guide = findGuideById(STUDENT_GUIDES, id);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const { t, tc, tcat } = useLang();

  if (!guide) {
    return (
      <div className="section not-found-state">
        <FadeIn>
          <div className="section-label">404</div>
          <h2 className="section-title">{t("guide.notFoundTitle")}</h2>
          <p className="section-subtitle" style={{ marginInline: "auto" }}>
            {t("guide.notFoundDesc")}
          </p>
          <Link to="/guide" className="btn-secondary">
            ← {t("guide.backToGuide")}
          </Link>
        </FadeIn>
      </div>
    );
  }

  const related = getRelatedGuides(guide, STUDENT_GUIDES, 3);

  return (
    <div className="section">
      <Seo
        title={guide.title}
        description={guide.excerpt}
        path={`/guide/${guide.id}`}
        type="article"
      />
      <FadeIn>
        <Link to="/guide" className="event-detail-back">
          ← {t("guide.backToGuide")}
        </Link>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="guide-detail-header">
          <span className="guide-detail-icon">{guide.icon}</span>
          <span className="category-badge">{tcat(guide.category)}</span>
          <h1>{tc(guide.title)}</h1>
          <div className="guide-last-updated">{t("guide.lastUpdated")}: {guide.lastUpdated}</div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="article-detail-body">
          {guide.disclaimer && (
            <div className="disclaimer-box">
              <span className="disclaimer-icon">⚠️</span>
              <span>{tc(guide.disclaimer)}</span>
            </div>
          )}
          {renderMarkdown(tc(guide.body))}
        </div>
      </FadeIn>

      {guide.importantLinks.length > 0 && (
        <FadeIn delay={0.15}>
          <div className="event-detail-section">
            <h2>📎 {t("guide.usefulLinks")}</h2>
            <div className="links-block">
              {guide.importantLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-row"
                >
                  <span>
                    <span className="link-row-label">{tc(link.label)}</span>
                    <span className="link-row-domain"> — {getDomain(link.url)}</span>
                  </span>
                  <span className="link-row-icon">↗</span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {guide.relatedFaqIds.length > 0 && (
        <FadeIn delay={0.2}>
          <div className="event-detail-section">
            <h2>{t("guide.relatedQuestions")}</h2>
            <div className="guide-faq-list">
              {guide.relatedFaqIds.map((faqId) => {
                const faq = FAQS.find((f) => f.id === faqId);
                if (!faq) return null;
                const isOpen = openFaqIdx === faqId;
                return (
                  <div className="guide-faq-item" key={faqId}>
                    <button
                      className="guide-faq-question"
                      onClick={() => setOpenFaqIdx(isOpen ? null : faqId)}
                      aria-expanded={isOpen}
                    >
                      <span>{tc(faq.q)}</span>
                      <span className={`guide-faq-chevron ${isOpen ? "open" : ""}`}>▾</span>
                    </button>
                    <div className={`guide-faq-answer ${isOpen ? "open" : ""}`} role="region">
                      <div className="guide-faq-answer-inner">{tc(faq.a)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      )}

      {related.length > 0 && (
        <FadeIn delay={0.25}>
          <div className="event-detail-section">
            <h2>{t("guide.relatedGuides")}</h2>
            <div className="related-grid">
              {related.map((g) => (
                <GuideCard guide={g} key={g.id} />
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
