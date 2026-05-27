// ============================================================================
// <FAQ> — Accordion FAQ on dark background
// ============================================================================
import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { FAQS } from "../config/siteConfig";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div className="faq-section" id="faq">
      <FadeIn>
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about studying at Monash Malaysia as an
          Indonesian student.
        </p>
      </FadeIn>

      <div className="faq-list">
        {FAQS.map((faq, i) => (
          <FadeIn key={i} delay={i * 0.04}>
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
              >
                <span className="faq-q-text">{faq.q}</span>
                <span className={`faq-chevron ${openIdx === i ? "open" : ""}`}>
                  ▾
                </span>
              </button>
              <div
                className={`faq-answer ${openIdx === i ? "open" : ""}`}
                role="region"
              >
                <div className="faq-answer-inner">{faq.a}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
