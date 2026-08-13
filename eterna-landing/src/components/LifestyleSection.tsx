import { ImagePlaceholder } from "./ImagePlaceholder";

export function LifestyleSection() {
  return (
    <section>
      <div className="relative bg-ink text-white">
        <ImagePlaceholder
          label="Foto lifestyle — Cocina"
          dark
          className="h-[70vh] w-full md:h-screen"
        />
        <div className="absolute inset-0 flex items-center bg-ink/20 px-6 md:px-12">
          <p className="mx-auto max-w-6xl w-full text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Más que hidratación.
            <br />
            Autonomía.
          </p>
        </div>
      </div>

      <div className="relative bg-ink text-white">
        <ImagePlaceholder
          label="Foto — Botella llenándose de agua"
          dark
          className="h-[70vh] w-full md:h-screen"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent px-6 pb-16 pt-24 md:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              El resultado
            </p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Agua pura. Siempre lista.
            </h3>
            <p className="mt-3 max-w-md text-white/60">
              Fría o caliente. pH entre 7.0 y 8.5. Sin garrafones, sin
              dependencias. Solo pureza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
