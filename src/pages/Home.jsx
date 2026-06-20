// ============================================================================
// Home page — Hero + condensed About preview + Events teaser + Articles teaser
// ============================================================================
// Full content lives on /about, /events, /articles respectively.
// This page composes just enough to orient a first-time visitor.
//
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Seo } from "../components/Seo";
import { FadeIn } from "../components/FadeIn";
import { EventCard } from "../components/EventCard";
import { ArticleCard } from "../components/ArticleCard";
import { GuideCard } from "../components/GuideCard";
import { SITE_INFO, STATS, EVENTS, ARTICLES, STUDENT_GUIDES, PARTNERS, PPI_NETWORK, ANNOUNCEMENTS, SOCIAL_LINKS } from "../config/siteConfig";
import { isUpcomingEvent, isPastEvent, sortByDateAsc, sortByDateDesc } from "../utils/events";
import { sortByDateDesc as sortArticlesByDateDesc, getPublishedArticles } from "../utils/articles";
import { findGuideById } from "../utils/studentGuide";
import { getActivePartners, getActiveNetworkMembers } from "../utils/collaboration";
import { useLang } from "../i18n/LanguageContext";

// Prefer the soonest upcoming/open/closed events; if there are none right
// now, fall back to the most recently completed ones so the teaser is never empty.
const upcoming = sortByDateAsc(EVENTS.filter(isUpcomingEvent));
const recentPast = sortByDateDesc(EVENTS.filter(isPastEvent));
const homeEvents = (upcoming.length > 0 ? upcoming : recentPast).slice(0, 2);

// Prefer featured articles; fall back to the 3 most recent if none are featured.
// Drafts are excluded from the homepage teaser.
const _publishedArticles = getPublishedArticles(ARTICLES);
const featuredArticles = _publishedArticles.filter((a) => a.featured);
const homeArticles = (
  featuredArticles.length > 0 ? featuredArticles : sortArticlesByDateDesc(_publishedArticles)
).slice(0, 3);

// Spotlight the 3 guides new students need first.
const homeGuideIds = ["before-arrival-checklist", "survive-first-week", "join-ppi-activities"];
const homeGuides = homeGuideIds.map((id) => findGuideById(STUDENT_GUIDES, id)).filter(Boolean);

// Partner marquee — duplicate array for seamless CSS loop.
const _activePartners = getActivePartners(PARTNERS);
const marqueeItems = [..._activePartners, ..._activePartners];

// Network teaser — first 5 active branches.
const networkTeaser = getActiveNetworkMembers(PPI_NETWORK).slice(0, 5);

export default function Home() {
  const { t, tc } = useLang();
  return (
    <>
      <Seo path="/" />
      <Hero />

      {/* ── About preview ────────────────────────────────────────────────── */}
      <section className="section">
        <FadeIn>
          <div className="section-label">{t("home.whoWeAre")}</div>
          <h2 className="section-title">{t("home.aboutTitle")}</h2>
          <p className="section-subtitle">{tc(SITE_INFO.description)}</p>
          <Link to="/about" className="btn-secondary" style={{ display: "inline-flex" }}>
            {t("home.ourStory")}
          </Link>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="about-stats" style={{ marginTop: 40 }}>
            {STATS.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{tc(s.label)}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── What's Up Next? announcements ────────────────────────────────── */}
      {ANNOUNCEMENTS.length > 0 && (
        <section className="section announce-section">
          <FadeIn>
            <div className="announce-strip">
              <span className="announce-heading">{t("announce.heading")}</span>
              <ul className="announce-list">
                {ANNOUNCEMENTS.map((a) => (
                  <li key={a.id}>
                    {a.link ? (
                      <Link to={a.link}>{tc(a.text)}</Link>
                    ) : (
                      tc(a.text)
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </section>
      )}

      {/* ── Student Guide teaser ─────────────────────────────────────────── */}
      <div className="teaser-stripe">
        <div className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <FadeIn>
            <div className="teaser-header">
              <div>
                <div className="section-label">{t("home.guideLabel")}</div>
                <h2 className="section-title" style={{ marginBottom: 0 }}>
                  {t("home.guideTitle")}
                </h2>
              </div>
              <Link to="/guide" className="event-link">
                {t("home.viewAllGuides")} <span className="link-arrow">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
          <div className="guides-grid" style={{ marginTop: 40 }}>
            {homeGuides.map((g, i) => (
              <FadeIn key={g.id} delay={i * 0.07}>
                <GuideCard guide={g} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── Events teaser ────────────────────────────────────────────────── */}
      <section className="section">
        <FadeIn>
          <div className="teaser-header">
            <div>
              <div className="section-label">{t("home.eventsLabel")}</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                {t("home.eventsTitle")}
              </h2>
            </div>
            <Link to="/events" className="event-link">
              {t("home.allEvents")} <span className="link-arrow">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
        <div className="events-grid" style={{ marginTop: 40 }}>
          {homeEvents.map((ev, i) => (
            <FadeIn key={ev.id} delay={i * 0.07}>
              <EventCard event={ev} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Articles teaser ──────────────────────────────────────────────── */}
      <section className="section">
        <FadeIn>
          <div className="teaser-header">
            <div>
              <div className="section-label">{t("home.articlesLabel")}</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                {t("home.articlesTitle")}
              </h2>
            </div>
            <Link to="/articles" className="event-link">
              {t("home.allArticles")} <span className="link-arrow">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
        <div className="articles-grid" style={{ marginTop: 40 }}>
          {homeArticles.map((a, i) => (
            <FadeIn key={a.id} delay={i * 0.08}>
              <ArticleCard article={a} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Partner marquee strip ─────────────────────────────────────────── */}
      <div className="teaser-stripe">
        <div className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <FadeIn>
            <div className="teaser-header" style={{ marginBottom: 32 }}>
              <div>
                <div className="section-label">{t("home.trustedBy")}</div>
                <h2 className="section-title" style={{ marginBottom: 0 }}>
                  {t("home.partnersTitle")}
                </h2>
              </div>
              <Link to="/collaboration" className="event-link">
                {t("common.viewAll")} <span className="link-arrow">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="marquee-wrapper" aria-hidden="true">
              <div className="marquee-track">
                {marqueeItems.map((p, i) => (
                  <div key={`${p.id}-${i}`} className="marquee-item">
                    <span className="marquee-item-name">{p.name}</span>
                    <span className="marquee-item-cat">{tc(p.category)}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div style={{ marginTop: 28 }}>
              <Link to="/collaboration#inquiry" className="btn-secondary">
                {t("home.becomePartner")} &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── PPI Network teaser ────────────────────────────────────────────── */}
      <section className="section">
        <FadeIn>
          <div className="section-label">{t("home.widerCommunity")}</div>
          <h2 className="section-title">{t("home.networkTitle")}</h2>
          <p className="section-subtitle" style={{ maxWidth: 540 }}>
            {t("home.networkDesc")}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="network-teaser-row">
            {networkTeaser.map((n) => (
              <div key={n.id} className="network-teaser-item">
                <span className="network-teaser-abbr">
                  {n.name.replace("PPI ", "").slice(0, 3).toUpperCase()}
                </span>
                <span className="network-teaser-name">{n.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.14}>
          <div style={{ marginTop: 28 }}>
            <Link to="/network" className="btn-secondary">
              {t("home.exploreNetwork")} &rarr;
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── YouTube + Spotify CTAs ───────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <FadeIn>
          <div className="media-cta-row">
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-cta"
            >
              <span className="youtube-cta-icon">▶</span>
              {t("youtube.cta")}
            </a>
            <a
              href={SOCIAL_LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-cta"
            >
              <span className="spotify-cta-icon">&#9834;</span>
              {t("youtube.spotifyCta")}
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
