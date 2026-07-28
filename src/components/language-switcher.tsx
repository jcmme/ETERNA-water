"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const localeLabels: Record<string, string> = {
  es: "ES",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1 text-sm">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale}
          className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
            loc === locale
              ? "bg-[var(--color-brand-500)] text-white"
              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
          }`}
        >
          {localeLabels[loc] ?? loc}
        </button>
      ))}
    </div>
  );
}
