// ============================================================================
// App.jsx — Main application entry point
// ============================================================================
// This file simply composes all section components together.
// To rearrange sections, move the components below.
// To add a new section, create a component in /components and add it here.
//
import { NAV_ITEMS } from "./config/siteConfig";
import { useActiveSection } from "./hooks/useActiveSection";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Events } from "./components/Events";
import { Articles } from "./components/Articles";
import { FAQ } from "./components/FAQ";
import { Contact, Footer } from "./components/Contact";
import "./styles/global.css";

export default function App() {
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Team />
      <Events />
      <Articles />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
