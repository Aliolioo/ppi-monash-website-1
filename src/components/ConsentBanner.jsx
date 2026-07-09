// ============================================================================
// <ConsentBanner> — cookie consent for Google Analytics
// ============================================================================
// Shows only when GA is configured (VITE_GA_MEASUREMENT_ID set) AND the visitor
// hasn't chosen yet. Accept → GA loads + starts tracking; Decline → nothing
// loads. The choice is remembered so the banner won't reappear.
//
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import {
  isAnalyticsConfigured,
  getConsent,
  grantConsent,
  denyConsent,
} from "../utils/analytics";

export function ConsentBanner() {
  const { t } = useLang();
  const [visible, setVisible] = useState(
    () => isAnalyticsConfigured() && getConsent() === null
  );

  if (!visible) return null;

  const accept = () => {
    grantConsent();
    setVisible(false);
  };
  const decline = () => {
    denyConsent();
    setVisible(false);
  };

  return (
    <div
      className="consent-banner"
      role="dialog"
      aria-label={t("consent.title")}
    >
      <p className="consent-text">
        {t("consent.message")}{" "}
        <Link to="/privacy">{t("consent.learnMore")}</Link>
      </p>
      <div className="consent-actions">
        <button type="button" className="btn-secondary" onClick={decline}>
          {t("consent.decline")}
        </button>
        <button type="button" className="btn-primary" onClick={accept}>
          {t("consent.accept")}
        </button>
      </div>
    </div>
  );
}
