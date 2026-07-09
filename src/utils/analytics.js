// ============================================================================
// Google Analytics 4 (GA4) with cookie consent
// ============================================================================
// GA4 uses cookies, so it only loads and tracks AFTER the visitor accepts via
// the consent banner. It is off entirely unless VITE_GA_MEASUREMENT_ID is set,
// so local dev and un-configured builds send nothing.
//
// Configure in .env:  VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
//
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const CONSENT_KEY = "ppi-analytics-consent"; // "granted" | "denied"

let loaded = false;

// Is GA configured at all (a Measurement ID is present)?
export function isAnalyticsConfigured() {
  return Boolean(GA_ID);
}

// Stored consent: "granted", "denied", or null (undecided).
export function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function persistConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore private-mode failures */
  }
}

// Injects gtag.js once. Only called after consent is granted.
function loadGA() {
  if (loaded || !GA_ID || typeof document === "undefined") return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // We fire page_view manually on each route change, so turn off the automatic
  // one to avoid double-counting SPA navigations.
  window.gtag("config", GA_ID, { send_page_view: false });
}

// On app mount: if the visitor already granted consent in a past visit, load
// GA right away.
export function initAnalytics() {
  if (GA_ID && getConsent() === "granted") loadGA();
}

// Visitor accepted the consent banner.
export function grantConsent() {
  persistConsent("granted");
  loadGA();
  trackPageview(); // count the page they were on when they accepted
}

// Visitor declined.
export function denyConsent() {
  persistConsent("denied");
}

// Records a pageview. No-op unless GA is configured AND consented AND loaded.
export function trackPageview() {
  if (!GA_ID || getConsent() !== "granted") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: window.location.pathname + window.location.search,
    page_location: window.location.href,
    page_title: document.title,
  });
}
