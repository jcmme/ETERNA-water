import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Filter,
  Globe2,
  Home,
  LifeBuoy,
  QrCode,
  Settings,
  Sparkles,
} from "lucide-react";

export type NavItem = {
  href: string;
  labelKey:
    | "nav.home"
    | "nav.store"
    | "nav.care"
    | "nav.parts"
    | "nav.myEterna"
    | "nav.support"
    | "nav.community"
    | "nav.settings";
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: "/", labelKey: "nav.home", icon: Home },
  { href: "/store", labelKey: "nav.store", icon: Droplets },
  { href: "/care", labelKey: "nav.care", icon: Sparkles },
  { href: "/parts", labelKey: "nav.parts", icon: Filter },
  { href: "/my-eterna", labelKey: "nav.myEterna", icon: QrCode },
  { href: "/support", labelKey: "nav.support", icon: LifeBuoy },
  { href: "/community", labelKey: "nav.community", icon: Globe2 },
  { href: "/settings", labelKey: "nav.settings", icon: Settings },
];
