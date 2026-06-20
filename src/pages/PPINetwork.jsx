// ============================================================================
// PPI Malaysia Network page — /network
// Full directory of PPI branches across Malaysian universities
// ============================================================================
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { COLLABORATIONS, PPI_NETWORK, PARTNERS } from "../config/siteConfig";
import { getNetworkByStatus, getPartnerById } from "../utils/collaboration";
import { useLang } from "../i18n/LanguageContext";

const STATUS_FILTERS = ["all", "active", "occasional"];

function NetworkStatusBadge({ status }) {
  const { t } = useLang();
  const map = {
    active:     { key: "network.active",   bg: "#DCFCE7", color: "#15803D" },
    occasional: { key: "network.occasional", bg: "#FEF3C7", color: "#B45309" },
    none:       { key: "network.noCollab", bg: "#F3F4F6", color: "#6B7280" },
  };
  const cfg = map[status] || map.none;
  return (
    <span
      className="network-status-badge"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {t(cfg.key)}
    </span>
  );
}

// Generates a deterministic background colour from a string so each card's
// logo placeholder has a distinct but consistent color.
const PALETTE = [
  "#B22234", "#DC3545", "#D4A843", "#1D4ED8",
  "#15803D", "#7C3AED", "#0891B2", "#BE185D",
];
function logoColor(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) & 0xffffffff;
  return PALETTE[Math.abs(h) % PALETTE.length];
}

export default function PPINetwork() {
  const { t, tc, tcat } = useLang();
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = useMemo(
    () => getNetworkByStatus(PPI_NETWORK, statusFilter),
    [statusFilter]
  );

  const jointEventCollabs = useMemo(
    () => COLLABORATIONS.filter((c) => c.type === "PPI Malaysia Joint Event"),
    []
  );

  return (
    <div className="section">
      <Seo
        title={t("network.title")}
        description={t("network.subtitle")}
        path="/network"
      />
      {/* Back link */}
      <FadeIn>
        <Link to="/collaboration" className="event-detail-back">
          &#8592; {t("network.backToCollab")}
        </Link>
      </FadeIn>

      {/* Header */}
      <FadeIn delay={0.05}>
        <div className="section-label">{t("network.label")}</div>
        <h1 className="section-title">{t("network.title")}</h1>
        <p className="section-subtitle" style={{ maxWidth: 580 }}>
          {t("network.subtitle")}
        </p>
      </FadeIn>

      {/* Status filter pills */}
      <FadeIn delay={0.08}>
        <div className="event-filters" style={{ marginBottom: 40 }}>
          {STATUS_FILTERS.map((s) => (
            <button
              key={s}
              className={`filter-btn ${statusFilter === s ? "active" : ""}`}
              onClick={() => setStatusFilter(s)}
            >
              {t(`network.${s === "all" ? "all" : s}`)}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Network grid */}
      <div className="network-grid">
        {filtered.map((n, i) => (
          <FadeIn key={n.id} delay={i * 0.04}>
            <div className="network-card">
              <div
                className="network-card-logo"
                style={{ background: logoColor(n.id) }}
              >
                {n.name.replace("PPI ", "").slice(0, 3).toUpperCase()}
              </div>
              <div className="network-card-body">
                <div className="network-card-top">
                  <span className="network-card-name">{n.name}</span>
                  <NetworkStatusBadge status={n.collaborationStatus} />
                </div>
                <span className="network-card-university">{n.university}</span>
                <span className="network-card-city">{n.city}</span>
                <p className="network-card-desc">{tc(n.description)}</p>
                <div className="network-card-links">
                  {n.socialUrl && (
                    <a
                      href={n.socialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="collab-link"
                    >
                      {t("network.instagram")} &#8599;
                    </a>
                  )}
                  {n.website && (
                    <a
                      href={n.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="collab-link"
                    >
                      {t("network.website")} &#8599;
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Joint event history */}
      {jointEventCollabs.length > 0 && (
        <FadeIn delay={0.1}>
          <div className="event-detail-section" style={{ marginTop: 64 }}>
            <h2 className="section-title" style={{ fontSize: "1.6rem" }}>
              {t("network.recentJoint")}
            </h2>
            <div className="collab-list">
              {jointEventCollabs.map((c) => {
                const partner = getPartnerById(PARTNERS, c.partnerId);
                return (
                  <div key={c.id} className="collab-item">
                    <div className="collab-item-meta">
                      <span className="collab-item-date">{c.dateDisplay}</span>
                      <span className="collab-type-badge">{tcat(c.type)}</span>
                    </div>
                    <h4 className="collab-item-title">{tc(c.title)}</h4>
                    {partner && (
                      <span className="collab-item-partner">
                        {t("network.with")} {partner.name}
                      </span>
                    )}
                    <p className="collab-item-desc">{tc(c.description)}</p>
                    <div className="collab-item-links">
                      {c.relatedEventId && (
                        <Link
                          to={`/events/${c.relatedEventId}`}
                          className="collab-link"
                        >
                          {t("network.viewEvent")} &rarr;
                        </Link>
                      )}
                      {c.relatedArticleId && (
                        <Link
                          to={`/articles/${c.relatedArticleId}`}
                          className="collab-link"
                        >
                          {t("network.readRecap")} &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      )}

      {/* Note block */}
      <FadeIn delay={0.12}>
        <div className="network-missing-note">
          <p>
            {t("network.missing")}{" "}
            <Link to="/collaboration#inquiry">
              {t("network.letUsKnow")}
            </Link>
            .
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
