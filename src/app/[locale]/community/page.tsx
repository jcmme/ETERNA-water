import { setRequestLocale } from "next-intl/server";
import { PagePlaceholder } from "@/components/page-placeholder";

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PagePlaceholder namespace="community" chips={["impact", "stories"]} />
  );
}
