import { ImagePlaceholder } from "./ImagePlaceholder";

const CHAPTERS = [
  {
    eyebrow: "Captura",
    title: "Captura del aire.",
    text: "Los ventiladores extraen humedad atmosférica y la conducen al sistema de condensación.",
    image: "Vista de rayos-X — Captura",
  },
  {
    eyebrow: "Mineralización",
    title: "Mineralización a tu gusto.",
    text: "Las esferas minerales enriquecen el agua con los minerales exactos que eliges.",
    image: "Vista de rayos-X — Mineralización",
  },
  {
    eyebrow: "Filtración",
    title: "Filtración profunda.",
    text: "El filtro de carbón activado elimina impurezas y contaminantes a nivel molecular.",
    image: "Vista de rayos-X — Filtración",
  },
];

export function AnatomySection() {
  return (
    <section id="diseno">
      {CHAPTERS.map((chapter) => (
        <div key={chapter.eyebrow} className="relative bg-ink text-white">
          <ImagePlaceholder
            label={chapter.image}
            dark
            className="h-[70vh] w-full md:h-screen"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent px-6 pb-16 pt-24 md:px-12">
            <div className="mx-auto max-w-6xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                {chapter.eyebrow}
              </p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {chapter.title}
              </h3>
              <p className="mt-3 max-w-md text-white/60">{chapter.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
