"use client";

import { useState } from "react";
import { FINISHES, formatMXN, type FinishId } from "@/lib/models";

export function CheckoutSection() {
  const [selected, setSelected] = useState<FinishId>("negro");
  const [email, setEmail] = useState("");

  const finish = FINISHES.find((f) => f.id === selected)!;

  return (
    <section id="comprar" className="dot-grid border-t border-ink/5">
      <div className="mx-auto max-w-2xl px-6 py-28 text-center md:py-36">
        <span className="mx-auto block h-2 w-2 rounded-full bg-accent" />

        <h2 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Adquiere tu ETERNA
        </h2>
        <p className="mt-3 text-ink/60">Unidad #1 de 999 — Edición Limitada</p>

        <p className="mt-8 text-4xl font-extrabold md:text-5xl">
          {formatMXN(finish.webPrice)}{" "}
          <span className="text-lg font-normal text-ink/50">
            MXN (IVA incluido)
          </span>
        </p>

        <div className="mt-10 text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
            Modelo
          </p>
          <div className="mt-3 grid grid-cols-3 overflow-hidden rounded-xl border border-ink/10">
            {FINISHES.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelected(f.id)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  f.id === selected
                    ? "bg-accent/10 text-accent"
                    : "text-ink/70 hover:bg-ink/5"
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          className="mt-4 w-full rounded-xl border border-ink/10 bg-white px-4 py-3.5 text-sm placeholder:text-ink/40 focus:border-accent focus:outline-none"
        />

        <button
          type="button"
          disabled={!email}
          className="mt-6 w-full rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          Comprar ahora
        </button>
      </div>
    </section>
  );
}
