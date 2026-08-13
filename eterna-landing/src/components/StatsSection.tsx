"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 12, decimals: 0, label: "L / Por día" },
  { value: 8.5, decimals: 1, label: "pH personalizable" },
  { value: 127, decimals: 0, label: "V / Compatible doméstico" },
];

function CounterTile({
  value,
  decimals,
  label,
}: {
  value: number;
  decimals: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let animationFrame: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(value * progress);
          if (progress < 1) animationFrame = requestAnimationFrame(tick);
        };
        animationFrame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <div ref={ref} className="rounded-2xl bg-white/5 px-6 py-10 text-center md:px-8">
      <p className="text-5xl font-extrabold tabular-nums md:text-6xl">
        {display.toFixed(decimals)}
      </p>
      <p className="mt-3 text-sm text-white/50">{label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-16 sm:grid-cols-3">
        {STATS.map((stat) => (
          <CounterTile key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
