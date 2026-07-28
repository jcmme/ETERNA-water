import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ImpactPanel } from "@/components/community/impact-panel";
import { StoriesSection } from "@/components/community/stories-section";

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CommunityContent />;
}

function CommunityContent() {
  const t = useTranslations("community");

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
          {t("impact")}
        </h2>
        <ImpactPanel />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
          {t("stories")}
        </h2>
        <StoriesSection />
      </section>
    </div>
  );
}
