import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle, Video } from "lucide-react";
import { ComingSoonCard } from "@/components/support/coming-soon-card";
import { TicketForm } from "@/components/support/ticket-form";
import { VideoLibrary } from "@/components/support/video-library";

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SupportContent />;
}

function SupportContent() {
  const t = useTranslations("support");

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

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ComingSoonCard
          icon={MessageCircle}
          title={t("chat")}
          description={t("chatDescription")}
        />
        <ComingSoonCard
          icon={Video}
          title={t("videoCall")}
          description={t("videoCallDescription")}
        />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
          {t("tickets")}
        </h2>
        <TicketForm />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
          {t("library")}
        </h2>
        <VideoLibrary />
      </section>
    </div>
  );
}
