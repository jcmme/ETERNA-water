import { storeModels } from "./store-models";
import type { RegisteredDevice } from "./device-registration";

const GARRAFON_LITERS = 20;
const BOTTLE_LITERS = 1;
// Approximate footprint of producing + transporting one 20L garrafón of
// bottled water; a placeholder estimate until we have a sourced figure.
const CO2_KG_PER_GARRAFON = 4;

export type EnvironmentalImpact = {
  litersProduced: number;
  garrafonesAvoided: number;
  bottlesAvoided: number;
  co2AvoidedKg: number;
};

export function getEnvironmentalImpact(
  device: RegisteredDevice
): EnvironmentalImpact {
  const model = storeModels.find((m) => m.id === device.modelId);
  const avgLitersPerDay = model
    ? (model.minLitersPerDay + model.maxLitersPerDay) / 2
    : 0;

  const purchased = new Date(device.purchaseDate);
  const now = new Date();
  const daysSincePurchase = Math.max(
    0,
    Math.floor((now.getTime() - purchased.getTime()) / (1000 * 60 * 60 * 24))
  );

  const litersProduced = Math.round(avgLitersPerDay * daysSincePurchase);
  const garrafonesAvoided = Math.round(litersProduced / GARRAFON_LITERS);
  const bottlesAvoided = Math.round(litersProduced / BOTTLE_LITERS);
  const co2AvoidedKg = Math.round(garrafonesAvoided * CO2_KG_PER_GARRAFON);

  return { litersProduced, garrafonesAvoided, bottlesAvoided, co2AvoidedKg };
}
