import { setRequestLocale } from "next-intl/server";
import { PagePlaceholder } from "@/components/page-placeholder";

export default async function PartsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PagePlaceholder
      namespace="parts"
      chips={["waterFilters", "airFilters", "spareParts", "kits"]}
    />
  );
}
