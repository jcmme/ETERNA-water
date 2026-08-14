export type Theme = "light" | "dark";

const STORAGE_KEY = "eterna:theme";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}

let cachedTheme: Theme | null = null;

export function getTheme(): Theme {
  if (typeof window === "undefined") return "light";
  if (cachedTheme) return cachedTheme;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  cachedTheme = stored === "light" || stored === "dark" ? stored : systemTheme();
  return cachedTheme;
}

export function setTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, theme);
  cachedTheme = theme;
  applyTheme(theme);
  notify();
}
