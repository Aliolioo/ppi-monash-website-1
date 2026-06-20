// ============================================================================
// <StatusBadge> — Small color-coded pill for an event's lifecycle status
// ============================================================================
import { useLang } from "../i18n/LanguageContext";

const STATUS_CONFIG = {
  upcoming: { key: "status.upcoming", bg: "#DBEAFE", color: "#1D4ED8" },
  open: { key: "status.open", bg: "#DCFCE7", color: "#15803D" },
  closed: { key: "status.closed", bg: "#FEF3C7", color: "#B45309" },
  completed: { key: "status.completed", bg: "#F3F4F6", color: "#6B7280" },
  archived: { key: "status.archived", bg: "#E5E7EB", color: "#4B5563" },
};

export function StatusBadge({ status }) {
  const { t } = useLang();
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.completed;

  return (
    <span className="status-badge" style={{ background: config.bg, color: config.color }}>
      {t(config.key)}
    </span>
  );
}
