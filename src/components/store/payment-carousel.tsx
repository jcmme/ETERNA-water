"use client";

import {
  Banknote,
  Building2,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Landmark,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

const methods = [
  { key: "card", icon: CreditCard },
  { key: "mercadoPago", icon: Wallet },
  { key: "paypal", icon: Landmark },
  { key: "transfer", icon: Building2 },
  { key: "installments", icon: CalendarClock },
  { key: "financing", icon: Banknote },
] as const;

const AUTOPLAY_MS = 4000;

export function PaymentCarousel() {
  const t = useTranslations("store.paymentMethods");
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const card = cardRefs.current[index];
    card?.scrollIntoView({
      inline: "start",
      block: "nearest",
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best
        );
        if (mostVisible.intersectionRatio > 0.5) {
          const index = cardRefs.current.findIndex(
            (el) => el === mostVisible.target
          );
          if (index !== -1) setActive(index);
        }
      },
      { root: track, threshold: [0.5, 0.75, 1] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % methods.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, scrollToIndex]);

  const step = (direction: 1 | -1) => {
    const next = (active + direction + methods.length) % methods.length;
    setActive(next);
    scrollToIndex(next);
  };

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {methods.map(({ key, icon: Icon }, index) => (
          <div
            key={key}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="flex w-[42%] shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-6 text-center text-sm font-medium text-[var(--color-foreground)] sm:w-[220px]"
          >
            <Icon
              size={22}
              className={
                index === active
                  ? "text-[var(--color-accent-500)]"
                  : "text-[var(--color-muted)]"
              }
            />
            {t(key)}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => step(-1)}
          className="flex size-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface)]"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-1.5">
          {methods.map(({ key }, index) => (
            <button
              key={key}
              type="button"
              aria-label={`Go to ${key}`}
              onClick={() => {
                setActive(index);
                scrollToIndex(index);
              }}
              className="relative flex h-3 w-3 items-center justify-center"
            >
              {index === active ? (
                <motion.span
                  layoutId="payment-carousel-dot"
                  className="size-2.5 rounded-full bg-[var(--color-accent-500)]"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                />
              ) : (
                <span className="size-1.5 rounded-full bg-[var(--color-border)]" />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => step(1)}
          className="flex size-8 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface)]"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
