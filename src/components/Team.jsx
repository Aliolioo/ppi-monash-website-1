// ============================================================================
// <Team> — Department cards + committee member photo grid
// ============================================================================
// Photos load from assets/photos/{folder}/filename.jpg
// Falls back to initials if photo is null or fails to load
//
import { FadeIn } from "./FadeIn";
import { DEPARTMENTS, COMMITTEE, SITE_INFO } from "../config/siteConfig";

function getInitials(name) {
  if (!name || name === "TBD") return "?";
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function MemberAvatar({ name, photo }) {
  const PHOTO_BASE = "./assets/photos/";

  if (!photo) {
    return <div className="member-avatar">{getInitials(name)}</div>;
  }

  return (
    <div className="member-avatar">
      <img
        src={PHOTO_BASE + photo}
        alt={name}
        loading="lazy"
        onError={(e) => {
          // If photo fails to load, replace with initials
          e.target.style.display = "none";
          e.target.parentElement.textContent = getInitials(name);
        }}
      />
    </div>
  );
}

export function Team() {
  return (
    <>
      {/* ── Department Cards ── */}
      <div className="dept-section" id="team">
        <FadeIn>
          <div className="section-label">Our Team</div>
          <h2 className="section-title">Departments</h2>
          <p className="section-subtitle">
            Led by President {COMMITTEE[0]?.members[0]?.name || "TBD"} and Vice
            President {COMMITTEE[0]?.members[1]?.name || "TBD"} for{" "}
            {SITE_INFO.currentYear}, our six departments work together to serve
            the community.
          </p>
        </FadeIn>

        <div className="dept-grid">
          {DEPARTMENTS.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.06}>
              <div className="dept-card">
                <div className="dept-emoji">{d.emoji}</div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── Committee Member Grid ── */}
      <section className="committee-section" id="committee">
        <FadeIn>
          <div className="section-label">Committee {SITE_INFO.currentYear}</div>
          <h2 className="section-title">Meet the People Behind PPI</h2>
          <p className="section-subtitle">
            Our dedicated committee members who make everything happen.
          </p>
        </FadeIn>

        {COMMITTEE.map((dept, di) => {
          const deptInfo = DEPARTMENTS.find((d) => d.name === dept.dept);
          return (
            <FadeIn key={dept.dept} delay={di * 0.05}>
              <div className="committee-dept">
                <div className="committee-dept-title">
                  {deptInfo?.emoji} {dept.dept}
                </div>
                <div className="committee-grid">
                  {dept.members.map((m, mi) => (
                    <FadeIn key={mi} delay={mi * 0.03}>
                      <div className="member-card">
                        <MemberAvatar name={m.name} photo={m.photo} />
                        <div className="member-name">{m.name}</div>
                        <div className="member-role">{m.role}</div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </section>
    </>
  );
}
