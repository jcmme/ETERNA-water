import { Droplet, Package, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Droplet,
    title: "Generación Atmosférica",
    text: "Capta humedad del aire y la transforma en agua potable. Sin garrafones, sin dependencia externa. 10 a 12 litros diarios.",
  },
  {
    icon: Package,
    title: "Cero Plástico",
    text: "Depósito interno en vidrio grado alimenticio certificado. Sistema sellado hermético. El agua nunca toca plástico.",
  },
  {
    icon: ShieldCheck,
    title: "Filtración UV Multicapa",
    text: "Esterilización por luz UV, control bacteriológico activo, mineralización adaptable. Filtros intercambiables.",
  },
];

export function TechSection() {
  return (
    <section id="tecnologia" className="dot-grid border-t border-ink/5">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
          Tecnología
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
          Construida sin concesiones.
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-ink/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
