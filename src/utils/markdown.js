// ============================================================================
// renderMarkdown — minimal parser for article/guide bodies.
// Handles: paragraphs (blank-line separated), "## " subheadings, "- " list
// items (grouped into one <ul>), **bold**/*italic* inline spans, and
// [link text](url) inline links (always open in a new tab).
// Written with React.createElement (not JSX) so this can stay a plain .js
// file without changing Vite's esbuild loader config.
// This is intentionally tiny — swap in a real library (e.g. react-markdown)
// if content ever needs images, nested lists, or code blocks.
// ============================================================================
import { createElement as h } from "react";

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

// Security: only allow safe URL schemes in [text](url) links so migrated /
// external content can't smuggle in javascript:, data:, or vbscript: hrefs
// (a classic XSS vector). Whitespace (incl. tabs/newlines) is stripped first
// to defeat tricks like "java\tscript:". Relative/scheme-less URLs are
// allowed; anything with a disallowed scheme renders as plain text.
const SAFE_SCHEMES = ["http", "https", "mailto", "tel"];
function isSafeUrl(url) {
  const cleaned = String(url).replace(/\s+/g, "").toLowerCase();
  const scheme = cleaned.match(/^([a-z][a-z0-9+.-]*):/);
  if (!scheme) return true; // relative or scheme-less
  return SAFE_SCHEMES.includes(scheme[1]);
}

function renderInline(text, keyPrefix) {
  return text
    .split(INLINE_PATTERN)
    .filter(Boolean)
    .map((part, i) => {
      const linkMatch = part.match(LINK_PATTERN);
      if (linkMatch) {
        if (!isSafeUrl(linkMatch[2])) {
          // Drop the unsafe href; keep the visible label as plain text.
          return linkMatch[1];
        }
        return h(
          "a",
          { key: `${keyPrefix}-${i}`, href: linkMatch[2], target: "_blank", rel: "noopener noreferrer" },
          linkMatch[1]
        );
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return h("strong", { key: `${keyPrefix}-${i}` }, part.slice(2, -2));
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return h("em", { key: `${keyPrefix}-${i}` }, part.slice(1, -1));
      }
      return part;
    });
}

export default function renderMarkdown(text) {
  const lines = text.trim().split("\n");
  const elements = [];
  let listItems = [];

  const flushList = () => {
    if (listItems.length) {
      elements.push(h("ul", { key: `ul-${elements.length}` }, listItems));
      listItems = [];
    }
  };

  lines.forEach((rawLine, i) => {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      return;
    }
    if (line.startsWith("## ")) {
      flushList();
      elements.push(h("h2", { key: `h2-${i}` }, renderInline(line.slice(3), `h2-${i}`)));
    } else if (line.startsWith("- ")) {
      listItems.push(h("li", { key: `li-${i}` }, renderInline(line.slice(2), `li-${i}`)));
    } else {
      flushList();
      elements.push(h("p", { key: `p-${i}` }, renderInline(line, `p-${i}`)));
    }
  });
  flushList();

  return elements;
}
