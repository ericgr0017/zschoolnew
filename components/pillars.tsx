type Pillar = {
  title: string;
  description: string;
};

type PillarsProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: Pillar[];
};

export default function Pillars({
  eyebrow = "Pillars",
  heading,
  description,
  items,
}: PillarsProps) {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">
              {heading}
            </h2>
            {description ? (
              <p className="text-sm leading-6 text-slate-600 md:text-base">
                {description}
              </p>
            ) : null}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
                  +
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
