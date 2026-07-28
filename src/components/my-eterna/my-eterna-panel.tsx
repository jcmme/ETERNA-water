"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import {
  clearDevice,
  getDevice,
  saveDevice,
  subscribeDevice,
  type RegisteredDevice,
} from "@/lib/device-registration";
import { RegisterForm } from "./register-form";
import { DeviceCard } from "./device-card";
import { AlertsList } from "./alerts-list";

function getServerSnapshot() {
  return null;
}

export function MyEternaPanel() {
  const t = useTranslations("myEterna");
  const device = useSyncExternalStore<RegisteredDevice | null>(
    subscribeDevice,
    getDevice,
    getServerSnapshot
  );

  function handleRegister(newDevice: RegisteredDevice) {
    saveDevice(newDevice);
  }

  function handleReset() {
    clearDevice();
  }

  if (!device) {
    return <RegisterForm onRegister={handleRegister} />;
  }

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
          {t("deviceInfo")}
        </h2>
        <DeviceCard device={device} onReset={handleReset} />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
          {t("alerts")}
        </h2>
        <AlertsList purchaseDate={device.purchaseDate} />
      </section>
    </div>
  );
}
