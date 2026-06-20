// ============================================================================
// Student Guide helpers — shared by the StudentGuide listing, the detail
// page, and the Home page guide teaser.
// ============================================================================
import { searchText } from "../i18n/loc";

export function findGuideById(guides, id) {
  return guides.find((g) => g.id === id);
}

// If the guide curates explicit relatedGuideIds, use those (in order).
// Otherwise fall back to other guides in the same category.
export function getRelatedGuides(guide, allGuides, count = 3) {
  if (guide.relatedGuideIds.length > 0) {
    return guide.relatedGuideIds
      .map((id) => findGuideById(allGuides, id))
      .filter(Boolean)
      .slice(0, count);
  }
  return allGuides
    .filter((g) => g.id !== guide.id && g.category === guide.category)
    .slice(0, count);
}

// Case-insensitive substring match against title, excerpt, and category,
// across both languages (see searchText).
export function matchesSearch(guide, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    searchText(guide.title),
    searchText(guide.excerpt),
    searchText(guide.category),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
