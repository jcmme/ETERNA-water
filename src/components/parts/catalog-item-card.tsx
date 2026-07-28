import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function CatalogItemCard({
  icon: Icon,
  name,
}: {
  icon: LucideIcon;
  name: string;
}) {
  const t = useTranslations("parts");

  return (
    <div className="flex items-center justify-between gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
          <Icon size={16} />
        </span>
        <span className="text-sm font-medium text-[var(--color-foreground)]">
          {name}
        </span>
      </div>
      <span className="whitespace-nowrap text-xs text-[var(--color-muted)]">
        {t("ctaSoon")}
      </span>
    </div>
  );
}
