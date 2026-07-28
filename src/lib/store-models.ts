export type StoreModelId = "m1012" | "m20" | "m50" | "m100";

export type StoreModel = {
  id: StoreModelId;
  minLitersPerDay: number;
  maxLitersPerDay: number;
};

export const storeModels: StoreModel[] = [
  { id: "m1012", minLitersPerDay: 10, maxLitersPerDay: 12 },
  { id: "m20", minLitersPerDay: 20, maxLitersPerDay: 20 },
  { id: "m50", minLitersPerDay: 50, maxLitersPerDay: 50 },
  { id: "m100", minLitersPerDay: 100, maxLitersPerDay: 100 },
];

export type HumidityLevel = "low" | "mid" | "high";

const humidityFactor: Record<HumidityLevel, number> = {
  low: 1.5,
  mid: 1.2,
  high: 1.0,
};

const DEFAULT_LITERS_PER_PERSON = 3;

export function recommendModel({
  people,
  dailyConsumption,
  humidity,
}: {
  people: number | null;
  dailyConsumption: number | null;
  humidity: HumidityLevel;
}): StoreModelId | null {
  const baseNeed =
    dailyConsumption && dailyConsumption > 0
      ? dailyConsumption
      : (people ?? 0) * DEFAULT_LITERS_PER_PERSON;

  if (baseNeed <= 0) return null;

  const adjustedNeed = baseNeed * humidityFactor[humidity];

  const match = storeModels.find(
    (model) => adjustedNeed <= model.maxLitersPerDay
  );

  return match?.id ?? null;
}
