// ============================================================================
// <GuideCard> — Colorful, inviting card for a Student Guide entry. Used by
// the Student Guide listing, the Home page teaser, and the "Related Guides"
// block on the guide detail page. The whole card links to /guide/:id.
// ============================================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

export function GuideCard({ guide }) {
  const { t, tc } = useLang();
  return (
    <Link to={`/guide/${guide.id}`} className="guide-card">
      <div className="guide-icon">{guide.icon}</div>
      <span className="category-badge">{tc(guide.category)}</span>
      <h3>{tc(guide.title)}</h3>
      <p>{tc(guide.excerpt)}</p>
      <span className="read-more">
        {t("common.readMore")} <span className="link-arrow">→</span>
      </span>
    </Link>
  );
}
