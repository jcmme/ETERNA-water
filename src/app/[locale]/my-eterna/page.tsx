import { setRequestLocale } from "next-intl/server";
import { PagePlaceholder } from "@/components/page-placeholder";

export default async function MyEternaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PagePlaceholder
      namespace="myEterna"
      chips={["scanQr", "deviceInfo", "alerts"]}
    />
  );
}
