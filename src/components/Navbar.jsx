// ============================================================================
// <Navbar> — Fixed top navigation with mobile hamburger menu
// ============================================================================
import { useState, useEffect } from "react";
import { NAV_ITEMS, SITE_INFO } from "../config/siteConfig";

export function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="nav-brand" onClick={(e) => scrollTo(e, "home")}>
          <span className="logo-circle">PPI</span>
          <span className="brand-text">{SITE_INFO.name}</span>
        </a>

        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={(e) => scrollTo(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu ${menuOpen ? "show" : ""}`}
        role="dialog"
        aria-modal={menuOpen}
      >
        {NAV_ITEMS.map(({ label, id }, i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollTo(e, id)}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
