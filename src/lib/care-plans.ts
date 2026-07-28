export type CarePlanId = "basic" | "premium" | "business";

export type CarePlan = {
  id: CarePlanId;
  featureKeys: string[];
  highlighted?: boolean;
};

export const carePlans: CarePlan[] = [
  {
    id: "basic",
    featureKeys: ["filterReminder", "digitalWarranty", "prioritySupport"],
  },
  {
    id: "premium",
    highlighted: true,
    featureKeys: [
      "autoFilterShipping",
      "partsDiscount",
      "warrantyExtension",
      "remoteDiagnostics",
    ],
  },
  {
    id: "business",
    featureKeys: ["scheduledMaintenance", "filterInventory", "support247"],
  },
];
