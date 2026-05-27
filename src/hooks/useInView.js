// ============================================================================
// useInView — Scroll-triggered visibility hook
// ============================================================================
// Returns [ref, isVisible]. Attach ref to any element, and isVisible flips
// to true once when the element enters the viewport. Used by <FadeIn>.
//
import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
