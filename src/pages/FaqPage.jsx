import { FAQ } from "../components/FAQ";
import { Seo } from "../components/Seo";

// Small top margin so the faq-section card sits below the fixed navbar
// with comfortable breathing room (faq-section itself has 80px inner padding).
export default function FaqPage() {
  return (
    <div style={{ paddingTop: 24 }}>
      <Seo
        title="FAQ"
        description="Frequently asked questions about studying at Monash University Malaysia — banking, accommodation, cost of living, documents, and student life."
        path="/faq"
      />
      <FAQ />
    </div>
  );
}
