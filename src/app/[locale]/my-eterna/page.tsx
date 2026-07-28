import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { MyEternaPanel } from "@/components/my-eterna/my-eterna-panel";

export default async function MyEternaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MyEternaContent />;
}

function MyEternaContent() {
  const t = useTranslations("myEterna");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-foreground)]">
          {t("title")}
        </h1>
        <p className="mt-1 max-w-xl text-[var(--color-muted)]">
          {t("description")}
        </p>
      </div>

      <MyEternaPanel />
    </div>
  );
}
