import {
  Droplets,
  Package,
  Sparkles,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type CatalogCategoryId =
  | "waterFilters"
  | "airFilters"
  | "spareParts"
  | "kits"
  | "accessories";

export type CatalogCategory = {
  id: CatalogCategoryId;
  icon: LucideIcon;
  itemIds: string[];
  openEnded?: boolean;
};

export const catalogCategories: CatalogCategory[] = [
  {
    id: "waterFilters",
    icon: Droplets,
    itemIds: [
      "activatedCarbon",
      "zeolite",
      "remineralizingCartridge",
      "prefilters",
    ],
  },
  {
    id: "airFilters",
    icon: Wind,
    itemIds: ["g4", "merv", "hepa"],
  },
  {
    id: "spareParts",
    icon: Wrench,
    itemIds: ["fans", "sensors", "uv", "pumps", "powerSupplies"],
  },
  {
    id: "kits",
    icon: Package,
    itemIds: ["annual", "biannual", "premium"],
  },
  {
    id: "accessories",
    icon: Sparkles,
    itemIds: ["coffeeAttachment", "sodaDispenser", "brandedBottle"],
    openEnded: true,
  },
];
