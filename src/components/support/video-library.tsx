import { PlayCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const topics = [
  "filterChange",
  "cleaning",
  "maintenance",
  "troubleshooting",
] as const;

export function VideoLibrary() {
  const t = useTranslations("support");

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {topics.map((topic) => (
        <div
          key={topic}
          className="flex flex-col items-start gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] p-4"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
            <PlayCircle size={18} />
          </span>
          <span className="text-sm font-medium text-[var(--color-foreground)]">
            {t(`videoTopics.${topic}`)}
          </span>
          <span className="text-xs text-[var(--color-muted)]">
            {t("ctaSoon")}
          </span>
        </div>
      ))}
    </div>
  );
}
