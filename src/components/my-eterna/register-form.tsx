"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { QrCode } from "lucide-react";
import type { DeviceModelId, RegisteredDevice } from "@/lib/device-registration";

const modelIds: DeviceModelId[] = ["m1012", "m20", "m50", "m100"];

export function RegisterForm({
  onRegister,
}: {
  onRegister: (device: RegisteredDevice) => void;
}) {
  const t = useTranslations("myEterna");
  const tStore = useTranslations("store");
  const [modelId, setModelId] = useState<DeviceModelId>("m1012");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!serialNumber || !purchaseDate) return;
    onRegister({ modelId, serialNumber, purchaseDate });
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <div className="mb-4 flex items-center gap-2 text-[var(--color-brand-600)]">
        <QrCode size={18} />
        <p className="text-sm font-medium">{t("registerForm.intro")}</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[var(--color-foreground)]">
            {t("registerForm.model")}
          </span>
          <select
            value={modelId}
            onChange={(event) =>
              setModelId(event.target.value as DeviceModelId)
            }
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
          >
            {modelIds.map((id) => (
              <option key={id} value={id}>
                {tStore(`modelList.${id}.name`)}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[var(--color-foreground)]">
            {t("registerForm.serialNumber")}
          </span>
          <input
            type="text"
            required
            value={serialNumber}
            onChange={(event) => setSerialNumber(event.target.value)}
            placeholder={t("registerForm.serialPlaceholder")}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-[var(--color-foreground)]">
            {t("registerForm.purchaseDate")}
          </span>
          <input
            type="date"
            required
            max={new Date().toISOString().split("T")[0]}
            value={purchaseDate}
            onChange={(event) => setPurchaseDate(event.target.value)}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
          />
        </label>

        <button
          type="submit"
          className="rounded-full bg-[var(--color-brand-500)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:brightness-90 sm:col-span-2"
        >
          {t("registerForm.submit")}
        </button>
      </form>
    </div>
  );
}
