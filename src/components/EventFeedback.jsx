// ============================================================================
// <EventFeedback> — "What events do you want?" preferences form
// ============================================================================
// Client-side only: validates that at least one event type is picked, then
// shows a thank-you state. Nothing is persisted.
// TODO: wire submissions to a Google Form / backend / email service.
//
import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { useLang } from "../i18n/LanguageContext";

const OPTIONS = [
  { id: "cultural", key: "feedback.optCultural" },
  { id: "sports", key: "feedback.optSports" },
  { id: "academic", key: "feedback.optAcademic" },
  { id: "social", key: "feedback.optSocial" },
  { id: "workshops", key: "feedback.optWorkshops" },
  { id: "other", key: "feedback.optOther" },
];

export function EventFeedback() {
  const { t } = useLang();
  const [picked, setPicked] = useState([]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id) => {
    setPicked((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
    if (error) setError("");
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (picked.length === 0) {
      setError(t("feedback.errPick"));
      return;
    }
    // TODO: send { picked, comment } to a Google Form / backend.
    setSubmitted(true);
    setPicked([]);
    setComment("");
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
                <button type="submit" className="btn-primary">
                  {t("feedback.submit")}
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
