// ============================================================================
// siteConfig.js — barrel re-export.
// Content is split into per-section files so the team can edit different
// sections without merge conflicts. Import from here as before:
//   import { EVENTS, FAQS } from "../config/siteConfig";
// Edit content in the matching file listed beside each line.
// ============================================================================
export * from "./site";           // SITE_INFO, SOCIAL_LINKS, NAV_ITEMS, STATS, ANNOUNCEMENTS, THEME, LEGAL_INFO
export * from "./team";           // DEPARTMENTS, COMMITTEE
export * from "./guides";         // STUDENT_GUIDES
export * from "./events";         // EVENTS
export * from "./articles";       // ARTICLES
export * from "./faqs";           // FAQS
export * from "./leadership";     // LEADERSHIP_HISTORY
export * from "./partners";       // PARTNERS, COLLABORATIONS, PPI_NETWORK
