import { setRequestLocale } from "next-intl/server";
import { PagePlaceholder } from "@/components/page-placeholder";

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PagePlaceholder
      namespace="support"
      chips={["chat", "tickets", "videoCall", "library"]}
    />
  );
}
