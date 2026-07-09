// ============================================================================
// <EventFeedback> — "What events do you want?" preferences form
// ============================================================================
// Submits to a Google Form (responses collect in its linked Google Sheet).
// `value` must match each checkbox option's text in the Google Form EXACTLY.
//
import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { useLang } from "../i18n/LanguageContext";

// Google Form endpoint + field IDs (from the form's "pre-filled link").
// connect-src in index.html must allow https://docs.google.com.
const GFORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdmxE2gzrfYGpQRCIZhyavXvtZGGf06Lj2gZkFPzwFebuLK9Q/formResponse";
const ENTRY_TYPES = "entry.1039784956"; // event-type checkboxes (multi)
const ENTRY_COMMENT = "entry.561303309"; // comment

// `value` is sent to Google (must match the form's option text); `key` is the
// translated label shown on the chip.
const OPTIONS = [
  { id: "cultural", key: "feedback.optCultural", value: "Cultural" },
  { id: "sports", key: "feedback.optSports", value: "Sports" },
  { id: "academic", key: "feedback.optAcademic", value: "Academic" },
  { id: "social", key: "feedback.optSocial", value: "Social" },
  { id: "workshops", key: "feedback.optWorkshops", value: "Workshops" },
  { id: "other", key: "feedback.optOther", value: "Other" },
];

export function EventFeedback() {
  const { t } = useLang();
  const [picked, setPicked] = useState([]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id) => {
    setPicked((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
    if (error) setError("");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (picked.length === 0) {
      setError(t("feedback.errPick"));
      return;
    }
    setSending(true);
    setError("");

    const body = new URLSearchParams();
    picked.forEach((id) => {
      const opt = OPTIONS.find((o) => o.id === id);
      if (opt) body.append(ENTRY_TYPES, opt.value);
    });
    if (comment.trim()) body.append(ENTRY_COMMENT, comment.trim());

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque
      // (we can't read success/failure) — assume success unless the network
      // request itself throws.
      await fetch(GFORM_URL, { method: "POST", mode: "no-cors", body });
      setSubmitted(true);
      setPicked([]);
      setComment("");
    } catch {
      setError(t("feedback.errSubmit"));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="teaser-stripe" id="feedback">
      <div className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <FadeIn>
          <div className="section-label">{t("feedback.label")}</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            {t("feedback.title")}
          </h2>
          <p className="section-subtitle" style={{ marginTop: 12, maxWidth: 560 }}>
            {t("feedback.subtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {submitted ? (
            <div className="form-success">
              <span className="form-success-icon">&#10003;</span>
              <h3>{t("feedback.successTitle")}</h3>
              <p>{t("feedback.successDesc")}</p>
              <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                {t("feedback.sendAnother")}
              </button>
            </div>
          ) : (
            <form className="feedback-form" onSubmit={handleSubmit} noValidate>
              <div className="feedback-options">
                {OPTIONS.map((opt) => {
                  const active = picked.includes(opt.id);
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      className={`feedback-chip ${active ? "active" : ""}`}
                      onClick={() => toggle(opt.id)}
                      aria-pressed={active}
                    >
                      {t(opt.key)}
                    </button>
                  );
                })}
              </div>
              {error && <span className="field-error">{error}</span>}

              <div className="form-group" style={{ marginTop: 20 }}>
                <label htmlFor="fb-comment">{t("feedback.commentLabel")}</label>
                <textarea
                  id="fb-comment"
                  rows={3}
                  maxLength={1000}
                  className="form-control"
                  placeholder={t("feedback.commentPlaceholder")}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="btn-primary" disabled={sending}>
                  {sending ? t("feedback.sending") : t("feedback.submit")}
                  <span className="btn-arrow">&rarr;</span>
                </button>
              </div>
            </form>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
