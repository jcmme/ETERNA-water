"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navItems } from "@/lib/nav-items";
import { LanguageSwitcher } from "@/components/language-switcher";

export function TopNav() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 hidden border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        <Link href="/" className="text-lg font-semibold text-[var(--color-brand-700)]">
          {t("brand.name")}
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map(({ href, labelKey, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[var(--color-brand-50)] text-[var(--color-brand-700)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                }`}
              >
                <Icon size={16} strokeWidth={2} />
                {t(labelKey)}
              </Link>
            );
          })}
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
