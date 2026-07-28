import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { catalogCategories } from "@/lib/parts-catalog";
import { CatalogSection } from "@/components/parts/catalog-section";

export default async function PartsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PartsContent />;
}

function PartsContent() {
  const t = useTranslations("parts");

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-foreground)]">
          {t("title")}
        </h1>
        <p className="mt-1 max-w-xl text-[var(--color-muted)]">
          {t("description")}
        </p>
      </div>

      {catalogCategories.map((category) => (
        <CatalogSection key={category.id} category={category} />
      ))}
    </div>
  );
}
