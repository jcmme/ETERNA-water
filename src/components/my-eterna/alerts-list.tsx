import { Bell } from "lucide-react";
import { useTranslations } from "next-intl";
import { getMaintenanceAlerts } from "@/lib/device-registration";

export function AlertsList({ purchaseDate }: { purchaseDate: string }) {
  const t = useTranslations("myEterna");
  const alerts = getMaintenanceAlerts(purchaseDate);

  return (
    <div className="flex flex-col gap-2">
      {alerts.map((alert) => (
        <div
          key={alert.taskId}
          className="flex items-center justify-between gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
        >
          <div className="flex items-center gap-2.5">
            <Bell
              size={16}
              className={
                alert.status === "upcoming"
                  ? "text-[var(--color-accent-500)]"
                  : "text-[var(--color-muted)]"
              }
            />
            <span className="text-sm text-[var(--color-foreground)]">
              {t(`alertTasks.${alert.taskId}`)}
            </span>
          </div>
          <span className="text-xs text-[var(--color-muted)]">
            {alert.dueDate.toLocaleDateString()}
          </span>
        </div>
      ))}
      <p className="mt-1 text-xs text-[var(--color-muted)]">
        {t("alertsDisclaimer")}
      </p>
    </div>
  );
}
