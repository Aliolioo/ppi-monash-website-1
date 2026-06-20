// ============================================================================
// <Seo> — per-page document metadata
// ============================================================================
// Uses React 19's native metadata hoisting: <title> / <meta> / <link> rendered
// anywhere in the tree are automatically moved into <head>. No provider, no
// extra dependency. Render <Seo ... /> near the top of each page component.
//
// Props:
//   title       — page title (composed as "<title> | PPI Monash Malaysia")
//   description — meta description (falls back to the site description)
//   path        — route path, e.g. "/events" (used for canonical + og:url)
//   image       — absolute or root-relative OG image URL
//   type        — Open Graph type ("website" | "article"); default "website"
//   lang        — content language ("en" | "id"); annotates og:locale
//
import { SITE_INFO, LEGAL_INFO } from "../config/siteConfig";
import { useLang } from "../i18n/LanguageContext";

const SITE_NAME = SITE_INFO.name;
const SITE_URL = LEGAL_INFO.officialWebsite.replace(/\/$/, "");
const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`;

export function Seo({
  title,
  description,
  path = "",
  image,
  type = "website",
}) {
  // Pull the active language so title/description props (which may be either
  // plain strings or { en, id } content fields) resolve to the right language,
  // and so og:locale / fallbacks match what the user is viewing.
  const { lang, tc } = useLang();

  const locTitle = tc(title);
  const fullTitle = locTitle
    ? `${locTitle} | ${SITE_NAME}`
    : `${SITE_NAME} — ${SITE_INFO.tagline}`;
  const desc = (tc(description) || tc(SITE_INFO.description) || "").trim();
  const url = SITE_URL + path;
  const img = image
    ? image.startsWith("http")
      ? image
      : SITE_URL + image
    : DEFAULT_IMAGE;
  const locale = lang === "id" ? "id_ID" : "en_US";

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </>
  );
}
