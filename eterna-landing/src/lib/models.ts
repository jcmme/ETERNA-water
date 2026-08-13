export const APP_DISCOUNT = 0.13;

export type FinishId = "negro" | "blanco" | "acero";

export interface Finish {
  id: FinishId;
  name: string;
  webPrice: number;
  limitedEdition: boolean;
}

export const FINISHES: Finish[] = [
  { id: "negro", name: "Negro Mate", webPrice: 79900, limitedEdition: false },
  { id: "blanco", name: "Blanco Perla", webPrice: 86000, limitedEdition: true },
  { id: "acero", name: "Acero Cepillado", webPrice: 86000, limitedEdition: true },
];

export function appPrice(webPrice: number): number {
  return Math.round(webPrice * (1 - APP_DISCOUNT));
}

export function formatMXN(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}
