import { useTranslations } from "next-intl";

export function PagePlaceholder({
  namespace,
  chips,
}: {
  namespace: "store" | "care" | "parts" | "myEterna" | "support" | "community" | "settings";
  chips?: string[];
}) {
  const t = useTranslations(namespace);
  const tHome = useTranslations("home");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-foreground)]">
          {t("title")}
        </h1>
        <p className="mt-1 max-w-xl text-[var(--color-muted)]">
          {t("description")}
        </p>
      </div>

      {chips && chips.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-sm text-[var(--color-foreground)]"
            >
              {t(chip)}
            </span>
          ))}
        </div>
      )}

      <div className="rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] p-10 text-center text-sm text-[var(--color-muted)]">
        {tHome("placeholderNotice")}
      </div>
    </div>
  );
}
