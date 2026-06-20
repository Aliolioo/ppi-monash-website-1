import { About } from "../components/About";
import { Seo } from "../components/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Who we are: PPI Monash Malaysia is the Indonesian student community at Monash University Malaysia — our story, vision, and the people behind it."
        path="/about"
      />
      <About />
    </>
  );
}
