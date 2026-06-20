// ============================================================================
// Cookieless analytics — Plausible / GoatCounter compatible
// ============================================================================
// Privacy-first: no cookies, no cross-site tracking, no consent banner needed.
// This keeps the Privacy Policy ("we do not deploy tracking cookies") accurate.
//
// Activation is opt-in via environment variables — when none are set (e.g. local
// dev), every function here is a no-op, so nothing loads and no requests fire.
//
// Configure in a .env file (see .env.example):
//   VITE_PLAUSIBLE_DOMAIN  — the site domain registered in your analytics
//                            dashboard, e.g. "ppimonashmalaysia.com"
//   VITE_PLAUSIBLE_SRC     — (optional) script URL; defaults to Plausible's
//                            manual-pageview script so SPA navigations are
//                            counted explicitly on each route change.
//
// To self-host or use GoatCounter/Umami instead, point VITE_PLAUSIBLE_SRC at
// that provider's script — the manual pageview call below uses the global
// `window.plausible()` queue, which the Plausible-compatible endpoints expose.
//
const DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const SRC =
  import.meta.env.VITE_PLAUSIBLE_SRC ||
  "https://plausible.io/js/script.manual.js";

let initialized = false;

export function isAnalyticsEnabled() {
  return Boolean(DOMAIN);
}

// Injects the analytics script once. Safe to call repeatedly. No-op when no
// domain is configured or when running outside the browser.
export function initAnalytics() {
  if (initialized || !isAnalyticsEnabled() || typeof document === "undefined") {
    return;
  }
  initialized = true;

  // Stub + queue so pageview calls fired before the script finishes loading
  // are replayed once it's ready.
  window.plausible =
    window.plausible ||
    function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = DOMAIN;
  script.src = SRC;
  document.head.appendChild(script);
}

// Records a single pageview. With the manual script, Plausible reads the
// current document URL automatically, so route changes just need this called
// after the URL has updated. No-op when analytics is disabled.
export function trackPageview() {
  if (!isAnalyticsEnabled() || typeof window === "undefined") return;
  if (typeof window.plausible !== "function") return;
  window.plausible("pageview");
}
