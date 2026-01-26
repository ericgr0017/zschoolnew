type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

type TestimonialGridProps = {
  eyebrow?: string;
  heading: string;
  testimonials: Testimonial[];
};

export default function TestimonialGrid({
  eyebrow = "Voices",
  heading,
  testimonials,
}: TestimonialGridProps) {
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
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.quote}
                className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-brand-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
              >
                <p className="text-sm leading-6 text-slate-600">
                  “{testimonial.quote}”
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
