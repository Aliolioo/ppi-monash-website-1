// ============================================================================
// LanguageContext — global language state (English / Bahasa Indonesia)
// ============================================================================
// Provides the active `lang`, a setter, and helpers:
//   t(key)       → UI chrome string from UI_STRINGS (see strings.js)
//   tc(value)    → "translate content": resolves an { en, id } siteConfig field
//
// The choice is persisted to localStorage and mirrored onto <html lang> so the
// document language stays correct for accessibility and SEO.
//
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { UI_STRINGS } from "./strings";
import { loc, locArray } from "./loc";
import { translateCategory } from "./categories";

const STORAGE_KEY = "ppi-lang";
const DEFAULT_LANG = "en";
const SUPPORTED = ["en", "id"];

const LanguageContext = createContext(null);

function readInitialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {
    /* localStorage may be unavailable (private mode) */
  }
  const nav = (window.navigator && window.navigator.language) || "";
  if (nav.toLowerCase().startsWith("id")) return "id";
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore persistence failures */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((l) => (l === "en" ? "id" : "en"));
  }, []);

  const value = useMemo(() => {
    const t = (key, vars) => {
      const table = UI_STRINGS[lang] || UI_STRINGS[DEFAULT_LANG];
      let str = table[key] ?? UI_STRINGS[DEFAULT_LANG][key] ?? key;
      if (vars) {
        for (const [name, value] of Object.entries(vars)) {
          str = str.replaceAll(`{${name}}`, value);
        }
      }
      return str;
    };
    const tc = (val) => loc(val, lang);
    const tcArray = (arr) => locArray(arr, lang);
    const tcat = (val) => translateCategory(val, lang);
    return { lang, setLang, toggleLang, t, tc, tcArray, tcat };
  }, [lang, setLang, toggleLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
