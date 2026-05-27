// ============================================================================
// useActiveSection — Tracks which page section is currently in view
// ============================================================================
// Watches scroll position and returns the id of the section currently
// closest to the top of the viewport. Powers the navbar active state.
//
import { useState, useEffect } from "react";

export function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState(sectionIds[0] || "");

  useEffect(() => {
    const onScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActive(sectionIds[i]);
          return;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return active;
}
