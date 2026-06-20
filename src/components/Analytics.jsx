// ============================================================================
// <Analytics> — cookieless pageview tracking for SPA navigation
// ============================================================================
// Renders nothing. Loads the analytics script once on mount, then records a
// pageview on every react-router navigation (including the first paint).
// No-op when no analytics domain is configured (see utils/analytics.js).
//
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageview } from "../utils/analytics";

export function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageview();
  }, [pathname, search]);

  return null;
}
