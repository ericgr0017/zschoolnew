type Feature = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  features: Feature[];
};

export default function FeatureGrid({
  eyebrow = "Features",
  heading,
  description,
  features,
}: FeatureGridProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-white to-brand-50/60">
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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
                  +
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
