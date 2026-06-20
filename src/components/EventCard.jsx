// ============================================================================
// <EventCard> — Compact event card, used by the Events listing, the Past
// Events archive, the Home page teaser, and the "Related Events" block on
// the event detail page. The whole card links to /events/:id.
// ============================================================================
import { Link } from "react-router-dom";
import { StatusBadge } from "./StatusBadge";
import { useLang } from "../i18n/LanguageContext";

export function EventCard({ event }) {
  const { t, tc, tcat } = useLang();
  return (
    <Link to={`/events/${event.id}`} className="event-card">
      <div className="event-card-header">
        <div className="event-meta">
          <span className="event-date">{event.dateDisplay}</span>
          <span className="event-cat">{tcat(event.category)}</span>
        </div>
        <StatusBadge status={event.status} />
      </div>
      <h3>{tc(event.title)}</h3>
      <p>{tc(event.excerpt)}</p>
      <span className="event-link">
        {t("events.viewDetails")} <span className="link-arrow">→</span>
      </span>
    </Link>
  );
}
