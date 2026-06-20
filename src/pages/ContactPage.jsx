import { Contact } from "../components/Contact";
import { Seo } from "../components/Seo";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with PPI Monash Malaysia — join our WhatsApp community, follow us on social media, or reach out by email."
        path="/contact"
      />
      <Contact />
    </>
  );
}
