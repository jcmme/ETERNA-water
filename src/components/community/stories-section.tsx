import { Megaphone, Newspaper, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const topics = ["userStories", "successCases", "news"] as const;
const icons = { userStories: Users, successCases: Megaphone, news: Newspaper };

export function StoriesSection() {
  const t = useTranslations("community");

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {topics.map((topic) => {
        const Icon = icons[topic];
        return (
          <div
            key={topic}
            className="flex flex-col items-start gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] p-4"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
              <Icon size={18} />
            </span>
            <span className="text-sm font-medium text-[var(--color-foreground)]">
              {t(`storyTopics.${topic}`)}
            </span>
            <span className="text-xs text-[var(--color-muted)]">
              {t("ctaSoon")}
            </span>
          </div>
        );
      })}
    </div>
  );
}
