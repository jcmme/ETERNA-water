import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { storeModels } from "@/lib/store-models";
import { ModelCard } from "@/components/store/model-card";
import { Configurator } from "@/components/store/configurator";
import { PaymentCarousel } from "@/components/store/payment-carousel";

export default async function StorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <StoreContent />;
}

function StoreContent() {
  const t = useTranslations("store");

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

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
          {t("models")}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {storeModels.map((model) => (
            <ModelCard key={model.id} modelId={model.id} />
          ))}
          <ModelCard modelId="future" />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
          {t("configurator")}
        </h2>
        <Configurator />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
          {t("payment")}
        </h2>
        <PaymentCarousel />
      </section>
    </div>
  );
}
