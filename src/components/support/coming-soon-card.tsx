import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function ComingSoonCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  const t = useTranslations("support");

  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] p-5">
      <div className="flex items-center justify-between">
        <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
          <Icon size={18} />
        </span>
        <span className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]">
          {t("ctaSoon")}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-[var(--color-foreground)]">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          {description}
        </p>
      </div>
    </div>
  );
}
