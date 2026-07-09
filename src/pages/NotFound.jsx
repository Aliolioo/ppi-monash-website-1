// ============================================================================
// NotFound — catch-all "*" route for URLs that match no page
// ============================================================================
import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { useLang } from "../i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="section not-found-state">
      {/* Not a real page — keep it out of search results. */}
      <title>{`${t("notFound.title")} | PPI Monash Malaysia`}</title>
      <meta name="robots" content="noindex" />
      <FadeIn>
        <div className="section-label">404</div>
        <h1 className="section-title">{t("notFound.title")}</h1>
        <p className="section-subtitle" style={{ marginInline: "auto" }}>
          {t("notFound.desc")}
        </p>
        <Link to="/" className="btn-secondary">
          ← {t("notFound.home")}
        </Link>
      </FadeIn>
    </div>
  );
}
