// ============================================================================
// <About> — History, mission, and community stats
// ============================================================================
import { FadeIn } from "./FadeIn";
import { SITE_INFO, STATS } from "../config/siteConfig";

export function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        {/* Left: Text content */}
        <div>
          <FadeIn>
            <div className="section-label">About Us</div>
            <h2 className="section-title">
              A Home Away From Home Since {SITE_INFO.foundedYear}
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 20 }}>
              Established in August {SITE_INFO.foundedYear}, PPI Monash Malaysia
              — {SITE_INFO.tagline} is a non-profit student association and a
              branch of Perhimpunan Pelajar Indonesia se-Malaysia (PPIM).
            </p>
            <p className="about-body">
              We collaborate closely with the Embassy of the Republic of
              Indonesia in Kuala Lumpur, as well as various ministries and state
              institutions. Our mission is to promote inclusivity, provide
              platforms for fun-filled experiences, and support social growth for
              Indonesian students at Monash.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="about-stats">
              {STATS.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: Visual grid */}
        <FadeIn delay={0.2}>
          <div className="about-visual">
            <div className="about-image-grid">
              {[
                { bg: "linear-gradient(135deg, #B22234, #DC3545)", color: "#fff", icon: "🇮🇩", word: "Unity" },
                { bg: "linear-gradient(135deg, #D4A843, #F0D78C)", color: "#1A1A1A", icon: "🎓", word: "Growth" },
                { bg: "linear-gradient(135deg, #F5EDE0, #FFF8F0)", color: "#1A1A1A", icon: "🤝", word: "Friendship" },
                { bg: "linear-gradient(135deg, #1A1A1A, #4A4A4A)", color: "#fff", icon: "✨", word: "Eunoia" },
              ].map((card, i) => (
                <div
                  className={`about-img-card ${i === 1 ? "offset" : ""}`}
                  key={i}
                  style={{ background: card.bg, color: card.color }}
                >
                  <span className="card-icon">{card.icon}</span>
                  <span className="card-word">{card.word}</span>
                </div>
              ))}
            </div>

            {/* Vision quote overlay */}
            <div className="vision-quote">
              <span className="quote-mark">"</span>
              {SITE_INFO.vision}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
