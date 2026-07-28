"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Droplets, Leaf, PackageCheck, Recycle } from "lucide-react";
import {
  getDevice,
  subscribeDevice,
  type RegisteredDevice,
} from "@/lib/device-registration";
import { getEnvironmentalImpact } from "@/lib/environmental-impact";
import { Link } from "@/i18n/navigation";

function getServerSnapshot() {
  return null;
}

export function ImpactPanel() {
  const t = useTranslations("community");
  const device = useSyncExternalStore<RegisteredDevice | null>(
    subscribeDevice,
    getDevice,
    getServerSnapshot
  );

  if (!device) {
    return (
      <div className="rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] p-8 text-center">
        <p className="text-sm text-[var(--color-muted)]">
          {t("impactEmptyState")}
        </p>
        <Link
          href="/my-eterna"
          className="mt-3 inline-block rounded-full bg-[var(--color-brand-500)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-brand-600)]"
        >
          {t("impactEmptyCta")}
        </Link>
      </div>
    );
  }

  const impact = getEnvironmentalImpact(device);

  const stats = [
    {
      key: "litersProduced",
      value: impact.litersProduced,
      icon: Droplets,
    },
    {
      key: "garrafonesAvoided",
      value: impact.garrafonesAvoided,
      icon: PackageCheck,
    },
    {
      key: "bottlesAvoided",
      value: impact.bottlesAvoided,
      icon: Recycle,
    },
    {
      key: "co2Avoided",
      value: impact.co2AvoidedKg,
      icon: Leaf,
    },
  ] as const;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map(({ key, value, icon: Icon }) => (
          <div
            key={key}
            className="flex flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] p-4"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
              <Icon size={18} />
            </span>
            <span className="text-xl font-semibold text-[var(--color-foreground)]">
              {value.toLocaleString()}
            </span>
            <span className="text-xs text-[var(--color-muted)]">
              {t(`stats.${key}`)}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-[var(--color-muted)]">
        {t("impactDisclaimer")}
      </p>
    </div>
  );
}
