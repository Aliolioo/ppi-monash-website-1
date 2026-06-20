// ============================================================================
// <Events> — Upcoming / Past Events tabs, with category filters and a
// year-grouped archive for past events
// ============================================================================
import { useState, useMemo } from "react";
import { FadeIn } from "./FadeIn";
import { EventCard } from "./EventCard";
import { EVENTS } from "../config/siteConfig";
import { isUpcomingEvent, isPastEvent, sortByDateAsc, sortByDateDesc, groupByYear } from "../utils/events";
import { useLang } from "../i18n/LanguageContext";

export function Events() {
  const { t, tcat } = useLang();
  const [tab, setTab] = useState("upcoming");
  const [filter, setFilter] = useState("All");

  const upcomingEvents = useMemo(() => sortByDateAsc(EVENTS.filter(isUpcomingEvent)), []);
  const pastEvents = useMemo(() => sortByDateDesc(EVENTS.filter(isPastEvent)), []);

  const activeEvents = tab === "upcoming" ? upcomingEvents : pastEvents;

  // Auto-generate filter categories from whichever tab is active
  const categories = useMemo(() => {
    const cats = [...new Set(activeEvents.map((e) => e.category))];
    return ["All", ...cats];
  }, [activeEvents]);

  const filtered =
    filter === "All" ? activeEvents : activeEvents.filter((e) => e.category === filter);

  const yearGroups = useMemo(() => groupByYear(filtered), [filtered]);

  const switchTab = (next) => {
    setTab(next);
    setFilter("All");
  };

  return (
    <section className="section" id="events">
      <FadeIn>
        <div className="section-label">{t("home.eventsLabel")}</div>
        <h2 className="section-title">{t("home.eventsTitle")}</h2>
        <p className="section-subtitle">{t("events.listSubtitle")}</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="event-tabs">
          <button
            className={`event-tab-btn ${tab === "upcoming" ? "active" : ""}`}
            onClick={() => switchTab("upcoming")}
          >
            {t("events.tabUpcoming")}
          </button>
          <button
            className={`event-tab-btn ${tab === "past" ? "active" : ""}`}
            onClick={() => switchTab("past")}
          >
            {t("events.tabPast")}
          </button>
        </div>
      </FadeIn>

      {activeEvents.length > 0 && (
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
      )}

      {tab === "upcoming" && (
        <>
          {upcomingEvents.length === 0 ? (
            <div className="empty-state">{t("events.emptyUpcoming")}</div>
          ) : filtered.length === 0 ? (
            <div className="empty-state">{t("events.emptyCategory")}</div>
          ) : (
            <div className="events-grid">
              {filtered.map((ev, i) => (
                <FadeIn key={ev.id} delay={i * 0.07}>
                  <EventCard event={ev} />
                </FadeIn>
              ))}
            </div>
          )}
        </>
      )}

      {tab === "past" && (
        <>
          {pastEvents.length === 0 ? (
            <div className="empty-state">{t("events.emptyPast")}</div>
          ) : filtered.length === 0 ? (
            <div className="empty-state">{t("events.emptyPastCategory")}</div>
          ) : (
            yearGroups.map(([year, events]) => (
              <div className="event-year-group" key={year}>
                <h3 className="event-year-heading">{year}</h3>
                <div className="events-grid">
                  {events.map((ev, i) => (
                    <FadeIn key={ev.id} delay={i * 0.05}>
                      <EventCard event={ev} />
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))
          )}
        </>
      )}
    </section>
  );
}
