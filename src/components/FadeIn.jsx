// ============================================================================
// <FadeIn> — Scroll-triggered fade + slide-up animation wrapper
// ============================================================================
// Usage: <FadeIn delay={0.1}><YourContent /></FadeIn>
// - delay: seconds before animation starts (for staggering siblings)
// - className: optional extra CSS class
//
import { useInView } from "../hooks/useInView";

export function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
