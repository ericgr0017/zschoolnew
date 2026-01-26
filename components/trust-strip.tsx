import Link from "next/link";

type TrustStripProps = {
  logos?: string[];
  bullets: string[];
};

const defaultLogos = [
  "University Partner",
  "Faculty Consortium",
  "Academic Advisor",
  "Executive Council",
];

export default function TrustStrip({ logos = defaultLogos, bullets }: TrustStripProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/80 to-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Proof
            </p>
            <div className="grid gap-3 rounded-2xl border border-brand-100 bg-white p-4 text-xs text-slate-500 sm:grid-cols-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center rounded-xl border border-dashed border-brand-200 px-4 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 transition hover:border-brand-400 hover:text-brand-800"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <ul className="space-y-3 text-sm text-slate-600">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/trust"
                className="inline-flex items-center rounded-full border border-brand-200 px-5 py-2 text-xs font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-50"
              >
                Read the trust page
              </Link>
              <Link
                href="/model"
                className="inline-flex items-center rounded-full border border-brand-200 px-5 py-2 text-xs font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-50"
              >
                How Zschool Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
