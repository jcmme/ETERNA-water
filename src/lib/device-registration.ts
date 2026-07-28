export type DeviceModelId = "m1012" | "m20" | "m50" | "m100";

export type RegisteredDevice = {
  modelId: DeviceModelId;
  serialNumber: string;
  purchaseDate: string; // ISO date (yyyy-mm-dd)
};

const STORAGE_KEY = "eterna:registered-device";
const WARRANTY_MONTHS = 12;

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function subscribeDevice(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function saveDevice(device: RegisteredDevice) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(device));
  notify();
}

let cachedRaw: string | null = null;
let cachedDevice: RegisteredDevice | null = null;

// useSyncExternalStore requires a referentially stable snapshot when the
// underlying value hasn't changed, so we cache the parsed result and only
// re-parse when the raw localStorage string actually differs.
export function getDevice(): RegisteredDevice | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedDevice;

  cachedRaw = raw;
  try {
    cachedDevice = raw ? (JSON.parse(raw) as RegisteredDevice) : null;
  } catch {
    cachedDevice = null;
  }
  return cachedDevice;
}

export function clearDevice() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  notify();
}

function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export function getWarrantyStatus(purchaseDate: string) {
  const purchased = new Date(purchaseDate);
  const expiresAt = addMonths(purchased, WARRANTY_MONTHS);
  const now = new Date();
  const daysRemaining = Math.ceil(
    (expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return {
    expiresAt,
    daysRemaining,
    active: daysRemaining > 0,
  };
}

export type MaintenanceTaskId =
  | "waterFilter"
  | "airFilter"
  | "uv"
  | "preventive";

const maintenanceIntervalMonths: Record<MaintenanceTaskId, number> = {
  waterFilter: 6,
  airFilter: 3,
  uv: 12,
  preventive: 12,
};

export type MaintenanceAlert = {
  taskId: MaintenanceTaskId;
  dueDate: Date;
  status: "upcoming" | "ok";
};

/**
 * Projects each task's next scheduled occurrence from the purchase date.
 * There's no telemetry or completion tracking yet, so this can't claim a
 * task is "overdue" (it may already have been done off-app) — it only
 * ever shows the next upcoming slot in the recommended maintenance cycle.
 */
export function getMaintenanceAlerts(purchaseDate: string): MaintenanceAlert[] {
  const purchased = new Date(purchaseDate);
  const now = new Date();

  const alerts = (
    Object.keys(maintenanceIntervalMonths) as MaintenanceTaskId[]
  ).map((taskId) => {
    const intervalMonths = maintenanceIntervalMonths[taskId];
    let dueDate = addMonths(purchased, intervalMonths);
    while (dueDate.getTime() < now.getTime()) {
      dueDate = addMonths(dueDate, intervalMonths);
    }

    const daysUntilDue = Math.ceil(
      (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    const status: MaintenanceAlert["status"] =
      daysUntilDue <= 30 ? "upcoming" : "ok";

    return { taskId, dueDate, status };
  });

  return alerts.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
}
