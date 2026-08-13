import { FINISHES } from "@/lib/models";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function ModelsSection() {
  return (
    <section className="dot-grid border-t border-ink/5">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
          Acabados
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
          Tres acabados. Una sola filosofía.
        </h2>
        <p className="mt-4 text-ink/60">999 unidades.</p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FINISHES.map((finish) => (
            <div key={finish.id} className="relative">
              {finish.limitedEdition && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                  Edición Limitada
                </span>
              )}
              <ImagePlaceholder
                label={`Foto de producto — ${finish.name}`}
                className="aspect-[4/5] w-full rounded-2xl"
              />
              <p className="mt-4 text-center font-medium">{finish.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
