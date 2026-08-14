import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SettingsContent />;
}

function SettingsContent() {
  const t = useTranslations("settings");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-[var(--color-foreground)]">
        {t("title")}
      </h1>

      <div className="flex flex-col divide-y divide-[var(--color-border)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="flex items-center justify-between gap-4 p-4">
          <span className="text-sm font-medium text-[var(--color-foreground)]">
            {t("language")}
          </span>
          <LanguageSwitcher />
        </div>
        <div className="flex items-center justify-between gap-4 p-4">
          <span className="text-sm font-medium text-[var(--color-foreground)]">
            {t("appearance")}
          </span>
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-between gap-4 p-4">
          <span className="text-sm font-medium text-[var(--color-foreground)]">
            {t("notifications")}
          </span>
          <span className="text-sm text-[var(--color-muted)]">—</span>
        </div>
        <div className="flex items-center justify-between gap-4 p-4">
          <span className="text-sm font-medium text-[var(--color-foreground)]">
            {t("account")}
          </span>
          <span className="text-sm text-[var(--color-muted)]">—</span>
        </div>
      </div>
    </div>
  );
}
