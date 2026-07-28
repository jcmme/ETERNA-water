import {
  Banknote,
  Building2,
  CalendarClock,
  CreditCard,
  Landmark,
  Wallet,
} from "lucide-react";
import { useTranslations } from "next-intl";

const methods = [
  { key: "card", icon: CreditCard },
  { key: "mercadoPago", icon: Wallet },
  { key: "paypal", icon: Landmark },
  { key: "transfer", icon: Building2 },
  { key: "installments", icon: CalendarClock },
  { key: "financing", icon: Banknote },
] as const;

export function PaymentMethods() {
  const t = useTranslations("store.paymentMethods");

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {methods.map(({ key, icon: Icon }) => (
        <div
          key={key}
          className="flex items-center gap-2 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-3 text-sm text-[var(--color-foreground)]"
        >
          <Icon size={18} className="text-[var(--color-brand-600)]" />
          {t(key)}
        </div>
      ))}
    </div>
  );
}
