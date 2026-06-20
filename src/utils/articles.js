// ============================================================================
// Article helpers — shared by the Articles listing, ArticleDetail page, and
// the Home page article teaser so search/sort/related logic only lives once.
// ============================================================================
import { searchText } from "../i18n/loc";

export const CATEGORY_ICONS = {
  "Student Guide": "🧭",
  "Event Recap": "🎉",
  "Campus Life": "🏫",
  Accommodation: "🏠",
  "Finance & Banking": "💳",
  Transport: "🚌",
  "Food & Culture": "🍜",
  "Academic Tips": "📚",
  "Career & Internship": "💼",
  "Community News": "📰",
  Collaboration: "🤝",
  Announcement: "📢",
};

export const DEFAULT_ARTICLE_ICON = "📝";

// Articles flagged `draft: true` are hidden from listings, the homepage, and
// "related" blocks — but remain viewable via their direct /articles/:id URL so
// you can preview a migrated draft before publishing. Remove the flag (or set
// it false) to publish.
export function getPublishedArticles(articles) {
  return articles.filter((a) => !a.draft);
}

export function sortByDateDesc(articles) {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}

export function findArticleById(articles, id) {
  return articles.find((a) => a.id === id);
}

// If the article curates explicit relatedArticles IDs, use those (in order).
// Otherwise fall back to the most recent other articles in the same category.
export function getRelatedArticles(article, allArticles, count = 3) {
  if (article.relatedArticles.length > 0) {
    return article.relatedArticles
      .map((id) => findArticleById(allArticles, id))
      .filter((a) => a && !a.draft)
      .slice(0, count);
  }
  return sortByDateDesc(
    allArticles.filter(
      (a) => a.id !== article.id && a.category === article.category && !a.draft
    )
  ).slice(0, count);
}

// Case-insensitive substring match against title, excerpt, category, author,
// tags — across both languages (see searchText).
export function matchesSearch(article, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    searchText(article.title),
    searchText(article.excerpt),
    searchText(article.category),
    article.author,
    (article.tags || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}
