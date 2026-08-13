import { ImagePlaceholder } from "./ImagePlaceholder";

export function HeroSection() {
  return (
    <section id="top" className="dot-grid relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
            Agua pura desde el aire
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            No purificamos agua. La creamos.
          </h1>
          <p className="mt-6 text-lg text-ink/60">
            Edición Limitada · 999 unidades · Generación atmosférica inteligente.
          </p>
          <a
            href="#tecnologia"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Descubrir ETERNA
          </a>
        </div>

        <ImagePlaceholder
          label="Foto de producto — Acero Cepillado"
          className="aspect-[4/5] w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
