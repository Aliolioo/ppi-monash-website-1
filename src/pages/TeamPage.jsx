import { Team } from "../components/Team";
import { Seo } from "../components/Seo";

// Small top margin so the dept-section card sits below the fixed navbar
// with comfortable breathing room (dept-section itself has 80px inner padding).
export default function TeamPage() {
  return (
    <div style={{ paddingTop: 24 }}>
      <Seo
        title="Team"
        description="Meet the committee behind PPI Monash Malaysia — the students leading our departments and programs this year."
        path="/team"
      />
      <Team />
    </div>
  );
}
