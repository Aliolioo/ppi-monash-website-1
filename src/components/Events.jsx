// ============================================================================
// <Events> — Filterable event cards with auto-generated category buttons
// ============================================================================
import { useState, useMemo } from "react";
import { FadeIn } from "./FadeIn";
import { EVENTS } from "../config/siteConfig";

export function Events() {
  const [filter, setFilter] = useState("All");

  // Auto-generate filter categories from event data — no hardcoding needed
  const categories = useMemo(() => {
    const cats = [...new Set(EVENTS.map((e) => e.category))];
    return ["All", ...cats];
  }, []);

  const filtered =
    filter === "All" ? EVENTS : EVENTS.filter((e) => e.category === filter);

  return (
    <section className="section" id="events">
      <FadeIn>
        <div className="section-label">Events</div>
        <h2 className="section-title">What We've Been Up To</h2>
        <p className="section-subtitle">
          From thrilling welcome events to cultural celebrations — there's
          always something happening.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="event-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="events-grid">
        {filtered.map((ev, i) => (
          <FadeIn key={ev.title + ev.date} delay={i * 0.07}>
            <div className="event-card">
              <div className="event-meta">
                <span className="event-date">📅 {ev.date}</span>
                <span className="event-cat">{ev.category}</span>
              </div>
              <h3>{ev.title}</h3>
              <p>{ev.desc}</p>
              {ev.photos && (
                <a
                  href={ev.photos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-link"
                >
                  View Photos <span className="link-arrow">→</span>
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          No events in this category yet — stay tuned! 🎉
        </div>
      )}
    </section>
  );
}
