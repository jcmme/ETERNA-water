import { BadgeCheck, Calendar, Hash, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  getWarrantyStatus,
  type RegisteredDevice,
} from "@/lib/device-registration";

export function DeviceCard({
  device,
  onReset,
}: {
  device: RegisteredDevice;
  onReset: () => void;
}) {
  const t = useTranslations("myEterna");
  const tStore = useTranslations("store");
  const warranty = getWarrantyStatus(device.purchaseDate);

  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-[var(--color-foreground)]">
            {tStore(`modelList.${device.modelId}.name`)}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-muted)]">
            <Hash size={14} />
            {device.serialNumber}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-muted)]">
            <Calendar size={14} />
            {new Date(device.purchaseDate).toLocaleDateString()}
          </p>
        </div>
        <span
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
            warranty.active
              ? "bg-[var(--color-brand-50)] text-[var(--color-brand-700)]"
              : "bg-[var(--color-border)] text-[var(--color-muted)]"
          }`}
        >
          {warranty.active ? <ShieldCheck size={14} /> : <BadgeCheck size={14} />}
          {warranty.active
            ? t("warranty.active", { days: warranty.daysRemaining })
            : t("warranty.expired")}
        </span>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm text-[var(--color-muted)] underline underline-offset-2 hover:text-[var(--color-foreground)]"
      >
        {t("registerForm.reset")}
      </button>
    </div>
  );
}
