"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";
import {
  recommendModel,
  type HumidityLevel,
  type StoreModelId,
} from "@/lib/store-models";

export function Configurator() {
  const t = useTranslations("store");
  const [people, setPeople] = useState("");
  const [city, setCity] = useState("");
  const [humidity, setHumidity] = useState<HumidityLevel>("mid");
  const [dailyConsumption, setDailyConsumption] = useState("");
  const [result, setResult] = useState<StoreModelId | "none" | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const recommended = recommendModel({
      people: people ? Number(people) : null,
      dailyConsumption: dailyConsumption ? Number(dailyConsumption) : null,
      humidity,
    });
    setResult(recommended ?? "none");
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[var(--color-foreground)]">
            {t("configuratorForm.people")}
          </span>
          <input
            type="number"
            min={1}
            value={people}
            onChange={(event) => setPeople(event.target.value)}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[var(--color-foreground)]">
            {t("configuratorForm.city")}
          </span>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder={t("configuratorForm.cityPlaceholder")}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[var(--color-foreground)]">
            {t("configuratorForm.humidity")}
          </span>
          <select
            value={humidity}
            onChange={(event) =>
              setHumidity(event.target.value as HumidityLevel)
            }
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
          >
            <option value="low">{t("configuratorForm.humidityLow")}</option>
            <option value="mid">{t("configuratorForm.humidityMid")}</option>
            <option value="high">{t("configuratorForm.humidityHigh")}</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[var(--color-foreground)]">
            {t("configuratorForm.dailyConsumption")}
          </span>
          <input
            type="number"
            min={0}
            value={dailyConsumption}
            onChange={(event) => setDailyConsumption(event.target.value)}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
          />
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-500)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-brand-600)] sm:col-span-2"
        >
          <Sparkles size={16} />
          {t("configuratorForm.submit")}
        </button>
      </form>

      {result && (
        <div className="mt-4 rounded-[var(--radius-card)] border border-[var(--color-brand-300)] bg-[var(--color-brand-50)] p-4">
          {result === "none" ? (
            <p className="text-sm font-medium text-[var(--color-brand-700)]">
              {t("configuratorForm.resultOverCapacity")}
            </p>
          ) : (
            <>
              <p className="text-sm font-medium text-[var(--color-brand-700)]">
                {t("configuratorForm.resultTitle")}{" "}
                {t(`modelList.${result}.name`)}
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                {t("configuratorForm.resultDisclaimer")}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
