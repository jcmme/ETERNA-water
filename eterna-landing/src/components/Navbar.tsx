"use client";

import { useState } from "react";

const LINKS = [
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#diseno", label: "Diseño" },
  { href: "#personalizacion", label: "Personalización" },
  { href: "#comprar", label: "Comprar" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-extrabold tracking-[0.15em]">
          ETERNA
        </a>

        <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#comprar"
          className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-block"
        >
          Comprar
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/5 px-6 py-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base text-ink/80 hover:bg-ink/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
