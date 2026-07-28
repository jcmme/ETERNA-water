"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navItems } from "@/lib/nav-items";

export function BottomNav() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur md:hidden">
      <ul className="flex snap-x gap-1 overflow-x-auto px-2 py-2">
        {navItems.map(({ href, labelKey, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href} className="snap-start">
              <Link
                href={href}
                className={`flex min-w-16 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[11px] font-medium transition-colors ${
                  active
                    ? "text-[var(--color-brand-600)]"
                    : "text-[var(--color-muted)]"
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                <span className="whitespace-nowrap">{t(labelKey)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
