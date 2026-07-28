import { Droplets } from "lucide-react";
import { useTranslations } from "next-intl";
import type { StoreModelId } from "@/lib/store-models";

export function ModelCard({
  modelId,
  highlighted,
}: {
  modelId: StoreModelId | "future";
  highlighted?: boolean;
}) {
  const t = useTranslations("store");

  return (
    <div
      className={`flex flex-col gap-3 rounded-[var(--radius-card)] border p-5 ${
        highlighted
          ? "border-[var(--color-brand-400)] bg-[var(--color-brand-50)]"
          : "border-[var(--color-border)] bg-[var(--color-background)]"
      }`}
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
        <Droplets size={18} />
      </span>
      <div>
        <h3 className="font-semibold text-[var(--color-foreground)]">
          {t(`modelList.${modelId}.name`)}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          {t(`modelList.${modelId}.idealFor`)}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-sm text-[var(--color-muted)]">
          {t("priceTbd")}
        </span>
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm font-medium text-[var(--color-muted)]"
        >
          {t("ctaSoon")}
        </button>
      </div>
    </div>
  );
}
