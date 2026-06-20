// ============================================================================
// EventDetail page — full event info at /events/:id
// ============================================================================
import { useParams, Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { StatusBadge } from "../components/StatusBadge";
import { EventCard } from "../components/EventCard";
import { EVENTS } from "../config/siteConfig";
import { findEventById, getRelatedEvents } from "../utils/events";
import { useLang } from "../i18n/LanguageContext";

export default function EventDetail() {
  const { id } = useParams();
  const event = findEventById(EVENTS, id);
  const { t, tc, tcat } = useLang();

  if (!event) {
    return (
      <div className="section not-found-state">
        <FadeIn>
          <div className="section-label">404</div>
          <h2 className="section-title">{t("events.notFoundTitle")}</h2>
          <p className="section-subtitle" style={{ marginInline: "auto" }}>
            {t("events.notFoundDesc")}
          </p>
          <Link to="/events" className="btn-secondary">
            ← {t("events.backToEvents")}
          </Link>
        </FadeIn>
      </div>
    );
  }

  const related = getRelatedEvents(event, EVENTS, 3);
  const registrationOpenStatuses = ["upcoming", "open", "closed"];

  return (
    <div className="section">
      <Seo
        title={event.title}
        description={event.description}
        path={`/events/${event.id}`}
        image={event.poster}
        type="article"
      />
      <FadeIn>
        <Link to="/events" className="event-detail-back">
          ← {t("events.backToEvents")}
        </Link>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="event-detail-header">
          <div className="event-poster">
            {event.poster ? <img src={event.poster} alt={tc(event.title)} /> : <span>🎉</span>}
          </div>
          <div className="event-detail-info">
            <StatusBadge status={event.status} />
            <h1>{tc(event.title)}</h1>
            <div className="event-detail-meta-list">
              <div className="event-detail-meta-row">
                <strong>{t("events.date")}:</strong> {event.dateDisplay}
                {event.time && ` · ${event.time}`}
              </div>
              <div className="event-detail-meta-row">
                <strong>{t("events.venue")}:</strong> {event.venue}
              </div>
              <div className="event-detail-meta-row">
                <strong>{t("events.category")}:</strong> {tcat(event.category)}
              </div>
              <div className="event-detail-meta-row">
                <strong>{t("events.organizedBy")}:</strong> {event.organizerDept} {t("events.department")}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="event-detail-section">
          <h2>{t("events.about")}</h2>
          <p className="event-detail-body">{tc(event.description)}</p>
        </div>
      </FadeIn>

      {registrationOpenStatuses.includes(event.status) && (
        <FadeIn delay={0.15}>
          <div className="event-detail-section">
            <h2>{t("events.registration")}</h2>
            {event.status === "closed" ? (
              <div className="registration-closed-msg">
                {t("events.registrationClosed")}
              </div>
            ) : (
              <div className="registration-block">
                {event.registrationLink ? (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {t("events.registerNow")} <span className="btn-arrow">→</span>
                  </a>
                ) : (
                  <p className="section-subtitle" style={{ marginBottom: 0 }}>
                    {t("events.registrationNotOpen")}
                  </p>
                )}
                {event.registrationDeadline && (
                  <p className="registration-deadline">
                    {t("events.registerBy")} {event.registrationDeadline}
                  </p>
                )}
              </div>
            )}
          </div>
        </FadeIn>
      )}

      {event.orderLink && (
        <FadeIn delay={0.18}>
          <div className="event-detail-section">
            <h2>{t("events.orderHeading")}</h2>
            <div className="registration-block">
              <a
                href={event.orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t("events.order")} <span className="btn-arrow">→</span>
              </a>
              <p className="registration-deadline">{t("events.orderNote")}</p>
            </div>
          </div>
        </FadeIn>
      )}

      {event.sponsors.length > 0 && (
        <FadeIn delay={0.2}>
          <div className="event-detail-section">
            <h2>{t("events.sponsors")}</h2>
            <div className="sponsors-list">
              {event.sponsors.map((s) => (
                <span className="sponsor-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.25}>
        <div className="event-detail-section">
          <h2>{t("events.photos")}</h2>
          {event.photos ? (
            <a href={event.photos} target="_blank" rel="noopener noreferrer" className="event-link">
              {t("events.viewPhotos")} <span className="link-arrow">→</span>
            </a>
          ) : (
            <div className="photos-placeholder">{t("events.photosSoon")}</div>
          )}
        </div>
      </FadeIn>

      {event.recapArticle && (
        <FadeIn delay={0.3}>
          <div className="event-detail-section">
            <h2>{t("events.recap")}</h2>
            <a
              href={event.recapArticle}
              target="_blank"
              rel="noopener noreferrer"
              className="event-link"
            >
              {t("events.readRecap")} <span className="link-arrow">→</span>
            </a>
          </div>
        </FadeIn>
      )}

      {related.length > 0 && (
        <FadeIn delay={0.35}>
          <div className="event-detail-section">
            <h2>{t("events.related")}</h2>
            <div className="related-grid">
              {related.map((ev) => (
                <EventCard event={ev} key={ev.id} />
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
