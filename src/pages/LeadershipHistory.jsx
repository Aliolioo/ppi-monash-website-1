// ============================================================================
// LeadershipHistory page — zigzag timeline of PPI Monash cabinets at /about/history
// ============================================================================
import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { LEADERSHIP_HISTORY, SITE_INFO } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";

function getInitials(name) {
  if (!name || name === "TBD") return "?";
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function MemberAvatar({ name }) {
  return <div className="member-avatar">{getInitials(name)}</div>;
}

export default function LeadershipHistory() {
  const { t } = useLang();
  return (
    <div className="section">
      <Seo
        title={t("history.title")}
        description={t("history.subtitle", { year: SITE_INFO.foundedYear })}
        path="/about/history"
      />
      <FadeIn>
        <Link to="/about" className="event-detail-back">
          ← {t("history.backToAbout")}
        </Link>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="section-label">{t("history.label")}</div>
        <h1 className="section-title">{t("history.title")}</h1>
        <p className="section-subtitle" style={{ maxWidth: 560 }}>
          {t("history.subtitle", { year: SITE_INFO.foundedYear })}
        </p>
      </FadeIn>

      <div className="history-timeline">
        {LEADERSHIP_HISTORY.map((entry, i) => (
          <FadeIn key={entry.year} delay={i * 0.05}>
            <div className={`history-entry ${i % 2 === 0 ? "left" : "right"}`}>
              <div className="history-year-dot">
                <span className="history-year-label">{entry.year}</span>
              </div>
              <div className="history-card">
                <div className="history-badges">
                  {entry.isCurrent && (
                    <span className="history-badge history-badge--current">
                      {t("history.current")}
                    </span>
                  )}
                  {entry.isFoundingYear && (
                    <span className="history-badge history-badge--founded">
                      {t("history.founded")}
                    </span>
                  )}
                </div>
                <h3 className="history-cabinet">{entry.cabinet}</h3>
                <div className="history-leaders">
                  <div className="history-leader">
                    <MemberAvatar name={entry.president} />
                    <div className="history-leader-info">
                      <span className="history-leader-name">
                        {entry.president}
                      </span>
                      <span className="history-leader-role">{t("history.president")}</span>
                    </div>
                  </div>
                  <div className="history-leader">
                    <MemberAvatar name={entry.vicePresident} />
                    <div className="history-leader-info">
                      <span className="history-leader-name">
                        {entry.vicePresident}
                      </span>
                      <span className="history-leader-role">
                        {t("history.vicePresident")}
                      </span>
                    </div>
                  </div>
                </div>
                {entry.achievements.length > 0 && (
                  <ul className="history-achievements">
                    {entry.achievements.map((a, ai) => (
                      <li key={ai}>{a}</li>
                    ))}
                  </ul>
                )}
                {entry.notes && (
                  <p className="history-notes">{entry.notes}</p>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="history-cta">
          <p>{t("history.ctaText")}</p>
          <Link to="/team" className="btn-primary">
            {t("history.ctaButton")}
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
