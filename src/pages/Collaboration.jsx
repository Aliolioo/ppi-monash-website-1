// ============================================================================
// Collaboration Hub page — /collaboration
// Sections: Hero, Category cards, Partners grid, PPI Malaysia preview,
//           International collaboration, Past programs archive, Inquiry form
// ============================================================================
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { Seo } from "../components/Seo";
import { useLang } from "../i18n/LanguageContext";
import {
  PARTNERS,
  COLLABORATIONS,
  PPI_NETWORK,
  SOCIAL_LINKS,
} from "../config/siteConfig";
import {
  getActivePartners,
  getInactivePartners,
  getPartnerById,
  getPartnerCategories,
  getRecentCollaborations,
  getCollabTypes,
  getActiveNetworkMembers,
} from "../utils/collaboration";

// ── Small inline components ───────────────────────────────────────────────────

function CollabTypeBadge({ type }) {
  const { tcat } = useLang();
  return <span className="collab-type-badge">{tcat(type)}</span>;
}

// ── Inquiry form → posts to a Google Form (responses in its linked Sheet) ──
// connect-src in index.html must allow https://docs.google.com.

const GFORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdjZs7ghYe6IYNgteJbjIHHPQmYlgKI7Nuw8Ph_yGXFbbgnMg/formResponse";
const ENTRY = {
  name:    "entry.63024457",
  org:     "entry.1933749655",
  email:   "entry.160829602",
  type:    "entry.1537627243",
  message: "entry.1510937448",
};

// If "Inquiry Type" is a multiple-choice question in the Google Form, these
// values must match its options EXACTLY (a free-text question accepts anything).
const INQUIRY_TYPES = [
  "Sponsorship",
  "Joint Event",
  "Media Partnership",
  "Article Exchange",
  "Other",
];

const EMPTY_FORM = { name: "", org: "", email: "", type: "", message: "" };

function InquiryForm() {
  const { t } = useLang();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = t("form.errName");
    if (!form.org.trim())     errs.org     = t("form.errOrg");
    if (!form.email.trim())   errs.email   = t("form.errEmail");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              errs.email   = t("form.errEmailValid");
    if (!form.type)           errs.type    = t("form.errType");
    if (!form.message.trim()) errs.message = t("form.errMessage");
    return errs;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    setErrors({});

    const body = new URLSearchParams();
    body.append(ENTRY.name, form.name);
    body.append(ENTRY.org, form.org);
    body.append(ENTRY.email, form.email);
    body.append(ENTRY.type, form.type);
    body.append(ENTRY.message, form.message);

    try {
      // no-cors: Google's response is opaque, so we can't read success — the
      // catch only fires on a true network failure.
      await fetch(GFORM_URL, { method: "POST", mode: "no-cors", body });
      setSubmitted(true);
      setForm(EMPTY_FORM);
    } catch {
      setErrors({ submit: t("form.errSubmit") });
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <span className="form-success-icon">&#10003;</span>
        <h3>{t("form.successTitle")}</h3>
        <p>{t("form.successDesc")}</p>
        <button className="btn-secondary" onClick={() => setSubmitted(false)}>
          {t("form.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="inq-name">{t("form.yourName")}</label>
          <input
            id="inq-name" name="name" type="text" maxLength={100}
            className={`form-control${errors.name ? " form-control-error" : ""}`}
            placeholder={t("form.namePlaceholder")}
            value={form.name} onChange={handleChange}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="inq-org">{t("form.organisation")}</label>
          <input
            id="inq-org" name="org" type="text" maxLength={120}
            className={`form-control${errors.org ? " form-control-error" : ""}`}
            placeholder={t("form.orgPlaceholder")}
            value={form.org} onChange={handleChange}
          />
          {errors.org && <span className="field-error">{errors.org}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="inq-email">{t("form.email")}</label>
          <input
            id="inq-email" name="email" type="email" maxLength={120}
            className={`form-control${errors.email ? " form-control-error" : ""}`}
            placeholder="you@example.com"
            value={form.email} onChange={handleChange}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="inq-type">{t("form.inquiryType")}</label>
          <select
            id="inq-type" name="type"
            className={`form-control${errors.type ? " form-control-error" : ""}`}
            value={form.type} onChange={handleChange}
          >
            <option value="">{t("form.selectType")}</option>
            {INQUIRY_TYPES.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.type && <span className="field-error">{errors.type}</span>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inq-message">{t("form.message")}</label>
        <textarea
          id="inq-message" name="message" rows={5} maxLength={2000}
          className={`form-control${errors.message ? " form-control-error" : ""}`}
          placeholder={t("form.messagePlaceholder")}
          value={form.message} onChange={handleChange}
        />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>
      <div className="form-footer">
        <button type="submit" className="btn-primary" disabled={sending}>
          {sending ? t("form.sending") : t("form.send")}
          <span className="btn-arrow">&rarr;</span>
        </button>
        {errors.submit && <span className="field-error">{errors.submit}</span>}
        <p className="form-privacy">
          {t("form.privacyNote")}{" "}
          <Link to="/privacy">{t("form.privacyPolicy")}</Link>.
        </p>
      </div>
    </form>
  );
}

// ── Main page component ───────────────────────────────────────────────────────

export default function Collaboration() {
  const { t, tc, tcat } = useLang();
  const [partnerCat, setPartnerCat]         = useState("All");
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showArchive, setShowArchive]        = useState(false);
  const [collabType, setCollabType]          = useState("All");

  // International partners are spotlighted in their own section, not the local grid.
  const activePartners   = useMemo(
    () => getActivePartners(PARTNERS).filter((p) => !p.international),
    []
  );
  const inactivePartners = useMemo(() => getInactivePartners(PARTNERS), []);
  const partnerCategories = useMemo(() => getPartnerCategories(PARTNERS), []);

  const filteredPartners = useMemo(
    () =>
      partnerCat === "All"
        ? activePartners
        : activePartners.filter((p) => p.category === partnerCat),
    [partnerCat, activePartners]
  );

  const collabTypes     = useMemo(() => getCollabTypes(COLLABORATIONS), []);
  const recentCollabs   = useMemo(() => getRecentCollaborations(COLLABORATIONS, 6), []);
  const filteredCollabs = useMemo(() => {
    const base = recentCollabs;
    return collabType === "All"
      ? base
      : base.filter((c) => c.type === collabType);
  }, [collabType, recentCollabs]);

  const networkPreview = useMemo(
    () => getActiveNetworkMembers(PPI_NETWORK).slice(0, 6),
    []
  );
  const intlCollabs = useMemo(
    () => COLLABORATIONS.filter((c) => c.type === "International Collaboration"),
    []
  );
  const ppiHongKong = useMemo(() => getPartnerById(PARTNERS, "ppi-hong-kong"), []);

  return (
    <>
      <Seo
        title={t("collab.label")}
        description={t("collab.heroSubtitle")}
        path="/collaboration"
      />
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <div className="section">
        <FadeIn>
          <div className="section-label">{t("collab.label")}</div>
          <h1 className="section-title" style={{ maxWidth: 640 }}>
            {t("collab.heroTitle")}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: 640 }}>
            {t("collab.heroSubtitle")}
          </p>
        </FadeIn>

        {/* ── 2. Category shortcut cards ─────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="collab-cat-grid">
            <a href="#partners" className="collab-cat-card">
              <span className="collab-cat-icon">&#127963;</span>
              <h3>{t("collab.catPartnersTitle")}</h3>
              <p>{t("collab.catPartnersDesc")}</p>
              <span className="read-more">{t("collab.explore")} <span className="link-arrow">&rarr;</span></span>
            </a>
            <Link to="/network" className="collab-cat-card">
              <span className="collab-cat-icon">&#127474;&#127486;</span>
              <h3>{t("collab.catNetworkTitle")}</h3>
              <p>{t("collab.catNetworkDesc")}</p>
              <span className="read-more">{t("collab.explore")} <span className="link-arrow">&rarr;</span></span>
            </Link>
            <a href="#international" className="collab-cat-card">
              <span className="collab-cat-icon">&#127758;</span>
              <h3>{t("collab.catIntlTitle")}</h3>
              <p>{t("collab.catIntlDesc")}</p>
              <span className="read-more">{t("collab.explore")} <span className="link-arrow">&rarr;</span></span>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* ── 3. Partners & Sponsors ──────────────────────────────────────── */}
      <div className="teaser-stripe" id="partners">
        <div className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <FadeIn>
            <div className="section-label">{t("collab.catPartnersTitle")}</div>
            <h2 className="section-title">{t("collab.partnersTitle")}</h2>
          </FadeIn>

          {/* Category filter tabs */}
          <FadeIn delay={0.08}>
            <div className="event-filters" style={{ marginBottom: 32 }}>
              {["All", ...partnerCategories].map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${partnerCat === cat ? "active" : ""}`}
                  onClick={() => setPartnerCat(cat)}
                >
                  {cat === "All" ? t("faq.all") : tcat(cat)}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Partner logo/name grid */}
          <div className="partner-grid">
            {filteredPartners.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.04}>
                <button
                  className="partner-tile"
                  onClick={() => setSelectedPartner(p)}
                  title={`${p.name} — ${p.category}`}
                >
                  <span className="partner-tile-name">{p.name}</span>
                  <span className="partner-tile-category">{tcat(p.category)}</span>
                  {p.partnershipSince && (
                    <span className="partner-tile-since">{t("collab.partnerSince")} {p.partnershipSince}</span>
                  )}
                </button>
              </FadeIn>
            ))}
          </div>

          {/* Past / inactive archive */}
          {inactivePartners.length > 0 && (
            <FadeIn delay={0.1}>
              <div style={{ marginTop: 32 }}>
                <button
                  className="partner-archive-toggle"
                  onClick={() => setShowArchive((v) => !v)}
                >
                  {showArchive ? t("collab.hideArchive") : t("collab.showArchive")}
                  <span style={{ marginLeft: 6 }}>{showArchive ? "▲" : "▼"}</span>
                </button>
                {showArchive && (
                  <div className="partner-archive">
                    {inactivePartners.map((p) => (
                      <button
                        key={p.id}
                        className="partner-tile partner-tile--inactive"
                        onClick={() => setSelectedPartner(p)}
                      >
                        <span className="partner-tile-name">{p.name}</span>
                        <span className="partner-tile-category">{tcat(p.category)}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      {/* ── Partner detail modal ────────────────────────────────────────── */}
      {/* TODO: Consider replacing this modal with a /partners/:id detail page */}
      {selectedPartner && (
        <div
          className="partner-modal-overlay"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="partner-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedPartner.name}
          >
            <button
              className="partner-modal-close"
              onClick={() => setSelectedPartner(null)}
              aria-label="Close"
            >
              &#10005;
            </button>
            <div className="partner-modal-category">{tcat(selectedPartner.category)}</div>
            <h2 className="partner-modal-name">{selectedPartner.name}</h2>
            {selectedPartner.partnershipSince && (
              <p className="partner-modal-since">
                {t("collab.partnerSince")} {selectedPartner.partnershipSince}
              </p>
            )}
            <p className="partner-modal-desc">{tc(selectedPartner.description)}</p>
            <div className="partner-modal-links">
              {selectedPartner.website && (
                <a
                  href={selectedPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {t("collab.visitWebsite")} &#8599;
                </a>
              )}
              {selectedPartner.socialUrl && (
                <a
                  href={selectedPartner.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {t("collab.instagram")} &#8599;
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── 4. PPI Malaysia Network preview ────────────────────────────── */}
      <div className="section" id="ppi-malaysia">
        <FadeIn>
          <div className="section-label">{t("network.label")}</div>
          <h2 className="section-title">{t("network.title")}</h2>
          <p className="section-subtitle" style={{ maxWidth: 580 }}>
            {t("collab.networkSubtitle")}
          </p>
        </FadeIn>
        <div className="network-preview-grid">
          {networkPreview.map((n, i) => (
            <FadeIn key={n.id} delay={i * 0.05}>
              <div className="network-preview-card">
                <div className="network-preview-logo">
                  {n.name.replace("PPI ", "").slice(0, 3)}
                </div>
                <div className="network-preview-info">
                  <span className="network-preview-name">{n.name}</span>
                  <span className="network-preview-city">{n.city}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.15}>
          <div style={{ marginTop: 32 }}>
            <Link to="/network" className="btn-secondary">
              {t("collab.viewFullNetwork")} &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* ── 5. International Collaboration ─────────────────────────────── */}
      <div className="teaser-stripe" id="international">
        <div className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <FadeIn>
            <div className="section-label">{t("collab.intlLabel")}</div>
            <h2 className="section-title">{t("collab.intlTitle")}</h2>
            <p className="section-subtitle" style={{ maxWidth: 560 }}>
              {t("collab.intlSubtitle")}
            </p>
          </FadeIn>

          {/* Featured: PPI Hong Kong */}
          {ppiHongKong && (
            <FadeIn delay={0.08}>
              <div className="featured-partner-card">
                <div className="featured-partner-badge">{t("collab.featuredPartner")}</div>
                <h3 className="featured-partner-name">{ppiHongKong.name}</h3>
                <p className="featured-partner-desc">{tc(ppiHongKong.description)}</p>
                <div className="featured-partner-links">
                  {ppiHongKong.website && (
                    <a href={ppiHongKong.website} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      {t("collab.visitWebsite")} &#8599;
                    </a>
                  )}
                  {ppiHongKong.socialUrl && (
                    <a href={ppiHongKong.socialUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      {t("collab.instagram")} &#8599;
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          )}

          {/* International collaboration list */}
          {intlCollabs.length > 0 && (
            <FadeIn delay={0.12}>
              <h3 className="subsection-title">{t("collab.recentIntl")}</h3>
              <div className="collab-list">
                {intlCollabs.map((c) => {
                  const partner = getPartnerById(PARTNERS, c.partnerId);
                  return (
                    <div key={c.id} className="collab-item">
                      <div className="collab-item-meta">
                        <span className="collab-item-date">{c.dateDisplay}</span>
                        <CollabTypeBadge type={c.type} />
                      </div>
                      <h4 className="collab-item-title">{tc(c.title)}</h4>
                      {partner && (
                        <span className="collab-item-partner">
                          {t("collab.with")} {partner.name}
                        </span>
                      )}
                      <p className="collab-item-desc">{tc(c.description)}</p>
                      <div className="collab-item-links">
                        {c.relatedEventId && (
                          <Link to={`/events/${c.relatedEventId}`} className="collab-link">
                            {t("collab.viewEvent")} &rarr;
                          </Link>
                        )}
                        {c.relatedArticleId && (
                          <Link to={`/articles/${c.relatedArticleId}`} className="collab-link">
                            {t("collab.readRecap")} &rarr;
                          </Link>
                        )}
                        {c.mediaUrl && (
                          <a href={c.mediaUrl} target="_blank" rel="noopener noreferrer" className="collab-link">
                            {t("collab.watchRecording")} &#8599;
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      {/* ── 6. Past Collaborations archive ─────────────────────────────── */}
      <div className="section" id="past">
        <FadeIn>
          <div className="section-label">{t("collab.programsLabel")}</div>
          <h2 className="section-title">{t("collab.programsTitle")}</h2>
        </FadeIn>

        {/* Type filter pills */}
        <FadeIn delay={0.06}>
          <div className="event-filters" style={{ marginBottom: 32 }}>
            {["All", ...collabTypes].map((ct) => (
              <button
                key={ct}
                className={`filter-btn ${collabType === ct ? "active" : ""}`}
                onClick={() => setCollabType(ct)}
              >
                {ct === "All" ? t("faq.all") : tcat(ct)}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="collab-list">
          {filteredCollabs.length === 0 ? (
            <div className="empty-state">{t("collab.noPrograms")}</div>
          ) : (
            filteredCollabs.map((c, i) => {
              const partner = getPartnerById(PARTNERS, c.partnerId);
              return (
                <FadeIn key={c.id} delay={i * 0.05}>
                  <div className="collab-item">
                    <div className="collab-item-meta">
                      <span className="collab-item-date">{c.dateDisplay}</span>
                      <CollabTypeBadge type={c.type} />
                    </div>
                    <h4 className="collab-item-title">{tc(c.title)}</h4>
                    {partner && (
                      <span className="collab-item-partner">
                        {t("collab.with")} {partner.name}
                      </span>
                    )}
                    <p className="collab-item-desc">{tc(c.description)}</p>
                    <div className="collab-item-links">
                      {c.relatedEventId && (
                        <Link to={`/events/${c.relatedEventId}`} className="collab-link">
                          {t("collab.viewEvent")} &rarr;
                        </Link>
                      )}
                      {c.relatedArticleId && (
                        <Link to={`/articles/${c.relatedArticleId}`} className="collab-link">
                          {t("collab.readRecap")} &rarr;
                        </Link>
                      )}
                      {c.mediaUrl && (
                        <a href={c.mediaUrl} target="_blank" rel="noopener noreferrer" className="collab-link">
                          {t("collab.watchRecording")} &#8599;
                        </a>
                      )}
                      {c.photos && (
                        <a href={c.photos} target="_blank" rel="noopener noreferrer" className="collab-link">
                          {t("collab.photos")} &#8599;
                        </a>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })
          )}
        </div>

        <FadeIn delay={0.1}>
          <p className="collab-archive-note">
            {t("collab.archiveNotePre")}{" "}
            <a href="#inquiry">{t("collab.inquiryFormBelow")}</a>.
          </p>
        </FadeIn>
      </div>

      {/* ── 7. Collaboration inquiry CTA + form ────────────────────────── */}
      <div className="teaser-stripe" id="inquiry">
        <div className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <FadeIn>
            <div className="section-label">{t("collab.getInvolved")}</div>
            <h2 className="section-title">{t("collab.inquiryTitle")}</h2>
            <p className="section-subtitle" style={{ maxWidth: 560 }}>
              {t("collab.inquirySubtitle")}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <InquiryForm />
          </FadeIn>
          <FadeIn delay={0.12}>
            <p style={{ marginTop: 24, fontSize: "0.88rem", color: "var(--slate)" }}>
              {t("collab.preferEmail")}{" "}
              <a href={`mailto:${SOCIAL_LINKS.email}`} style={{ color: "var(--red-deep)", fontWeight: 600 }}>
                {SOCIAL_LINKS.email}
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
