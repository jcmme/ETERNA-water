import { Check, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import type { CarePlan } from "@/lib/care-plans";
import { WaterButton } from "@/components/ui/water-button";

export function PlanCard({ plan }: { plan: CarePlan }) {
  const t = useTranslations("care");

  return (
    <div
      className={`flex flex-col gap-4 rounded-[var(--radius-card)] border p-5 ${
        plan.highlighted
          ? "border-[var(--color-brand-400)] bg-[var(--color-brand-50)]"
          : "border-[var(--color-border)] bg-[var(--color-background)]"
      }`}
    >
      {plan.highlighted && (
        <span className="flex w-fit items-center gap-1 rounded-full bg-[var(--color-brand-500)] px-2.5 py-1 text-xs font-medium text-white">
          <Sparkles size={12} />
          {t("recommendedBadge")}
        </span>
      )}

      <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
        {t(plan.id)}
      </h3>

      <ul className="flex flex-col gap-2">
        {plan.featureKeys.map((key) => (
          <li
            key={key}
            className="flex items-start gap-2 text-sm text-[var(--color-foreground)]"
          >
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-[var(--color-brand-600)]"
            />
            {t(`features.${key}`)}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-sm text-[var(--color-muted)]">
          {t("priceTbd")}
        </span>
        <WaterButton
          label={t("ctaSoon")}
          paddingX={16}
          paddingY={8}
          rounded={999}
        />
      </div>
    </div>
  );
}
