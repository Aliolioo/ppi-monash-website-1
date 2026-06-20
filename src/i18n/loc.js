// ============================================================================
// loc() — resolve a possibly-localized value
// ============================================================================
// Content in siteConfig.js can be either:
//   • a plain value  ("Hello", 42, null, ["a", "b"])              → returned as-is
//   • a localized obj ({ en: "Hello", id: "Halo" })              → picks language
//
// Because plain values pass straight through, components can call loc() on every
// field unconditionally, and untranslated fields simply keep showing English.
// This lets us migrate the config to bilingual one field at a time without ever
// breaking the build.
//
const SUPPORTED = ["en", "id"];

function isLocalized(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    SUPPORTED.some((k) => k in value)
  );
}

export function loc(value, lang = "en") {
  if (isLocalized(value)) {
    return value[lang] ?? value.en ?? "";
  }
  return value;
}

// Convenience for arrays whose individual elements are localized objects,
// e.g. achievements: [{ en, id }, { en, id }]. Plain-string arrays pass through.
export function locArray(arr, lang = "en") {
  if (!Array.isArray(arr)) return loc(arr, lang);
  return arr.map((item) => loc(item, lang));
}

// Flattens any value (plain string, { en, id } object, or array of either) into
// one searchable string containing ALL language variants, so client-side search
// matches whether the user typed an English or Indonesian term.
export function searchText(value) {
  if (value == null) return "";
  if (Array.isArray(value)) return value.map(searchText).join(" ");
  if (typeof value === "object") return Object.values(value).map(searchText).join(" ");
  return String(value);
}
