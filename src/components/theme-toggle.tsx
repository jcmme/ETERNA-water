"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";
import { getTheme, setTheme, subscribeTheme, type Theme } from "@/lib/theme-store";

const themes: { value: Theme; icon: typeof Sun }[] = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
];

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle() {
  const t = useTranslations("settings.theme");
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerSnapshot);

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1 text-sm">
      {themes.map(({ value, icon: Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-current={value === theme}
          aria-label={t(value)}
          className={`flex items-center justify-center rounded-full p-1.5 transition-colors ${
            value === theme
              ? "bg-[var(--color-brand-500)] text-white"
              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
          }`}
        >
          <Icon size={16} strokeWidth={2} />
        </button>
      ))}
    </div>
  );
}
