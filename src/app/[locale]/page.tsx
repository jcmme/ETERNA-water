import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/lib/nav-items";
import { WaterButton } from "@/components/ui/water-button";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
        <h1 className="text-2xl font-semibold text-[var(--color-foreground)] md:text-3xl">
          {t("home.title")}
        </h1>
        <p className="mt-2 max-w-xl text-[var(--color-muted)]">
          {t("home.subtitle")}
        </p>
        <Link href="/store" className="mt-5 inline-block">
          <WaterButton label={t("home.cta")} />
        </Link>
      </section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {navItems
          .filter((item) => item.href !== "/")
          .map(({ href, labelKey, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-start gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] p-4 transition-colors hover:border-[var(--color-brand-300)] hover:bg-[var(--color-brand-50)]"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)]">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium text-[var(--color-foreground)]">
                {t(labelKey)}
              </span>
            </Link>
          ))}
      </section>
    </div>
  );
}
