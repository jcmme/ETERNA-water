import { useTranslations } from "next-intl";
import type { CatalogCategory } from "@/lib/parts-catalog";
import { CatalogItemCard } from "./catalog-item-card";

export function CatalogSection({ category }: { category: CatalogCategory }) {
  const t = useTranslations("parts");

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
        {t(`categories.${category.id}`)}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {category.itemIds.map((itemId) => (
          <CatalogItemCard
            key={itemId}
            icon={category.icon}
            name={t(`items.${itemId}`)}
          />
        ))}
        {category.openEnded && (
          <div className="flex items-center rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-muted)]">
            {t("moreComingSoon")}
          </div>
        )}
      </div>
    </section>
  );
}
