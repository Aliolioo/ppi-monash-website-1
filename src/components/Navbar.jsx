// ============================================================================
// <Navbar> — Fixed top navigation with mobile hamburger menu + language switch
// ============================================================================
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_ITEMS, SITE_INFO } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";

function LangSwitcher({ className = "" }) {
  const { lang, setLang, t } = useLang();
  return (
    <div
      className={`lang-switcher ${className}`}
      role="group"
      aria-label={t("lang.label")}
    >
      <button
        type="button"
        className={`lang-option ${lang === "en" ? "active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        title={t("lang.enFull")}
      >
        {t("lang.en")}
      </button>
      <button
        type="button"
        className={`lang-option ${lang === "id" ? "active" : ""}`}
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
        title={t("lang.idFull")}
      >
        {t("lang.id")}
      </button>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { tc } = useLang();

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

  const closeMenu = () => setMenuOpen(false);
  // TODO: when /about/history traffic grows, add an About dropdown here
  //       with sub-links to /about and /about/history
  const navClass = ({ isActive }) => isActive ? "active" : "";

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <span className="logo-circle">PPI</span>
          <span className="brand-text">{SITE_INFO.name}</span>
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={path}>
              <NavLink to={path} end={path === "/"} className={navClass}>
                {tc(label)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <LangSwitcher className="lang-switcher--desktop" />
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu ${menuOpen ? "show" : ""}`}
        role="dialog"
        aria-modal={menuOpen}
      >
        {NAV_ITEMS.map(({ label, path }, i) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={navClass}
            onClick={closeMenu}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {tc(label)}
          </NavLink>
        ))}
        <LangSwitcher className="lang-switcher--mobile" />
      </div>
    </>
  );
}
