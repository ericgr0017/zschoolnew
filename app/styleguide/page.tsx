import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pillars from "@/components/pillars";
import TestimonialGrid from "@/components/testimonial-grid";
import TrustStrip from "@/components/trust-strip";

export const metadata: Metadata = {
  title: "Style Guide",
  description: "Zschool premium design system and component library.",
};

const typographyScale = [
  { label: "Display XL", className: "text-5xl font-semibold" },
  { label: "Display L", className: "text-4xl font-semibold" },
  { label: "Display M", className: "text-3xl font-semibold" },
  { label: "Headline", className: "text-2xl font-semibold" },
  { label: "Body L", className: "text-lg text-slate-600" },
  { label: "Body M", className: "text-base text-slate-600" },
  { label: "Body S", className: "text-sm text-slate-600" },
  { label: "Label", className: "text-xs uppercase tracking-[0.3em] text-brand-600" },
];

const spacingScale = ["4", "6", "8", "10", "12", "16", "20", "24"];

const pillars = [
  {
    title: "Human governance",
    description:
      "Faculty and advisors approve curriculum changes and standards.",
  },
  {
    title: "Evergreen updates",
    description:
      "AI research surfaces new evidence; humans validate every update.",
  },
  {
    title: "Activation boards",
    description:
      "Advisory boards align learning to real organizational outcomes.",
  },
];

const features = [
  {
    title: "Governance-first delivery",
    description:
      "Academic oversight is built into every program from day one.",
  },
  {
    title: "Continuous relevance",
    description:
      "Curriculum is revised on a documented cadence, not ad hoc.",
  },
  {
    title: "Partner customization",
    description:
      "Every engagement reflects industry, risk, and organizational goals.",
  },
  {
    title: "Transparent change logs",
    description:
      "Stakeholders can review what changed and why it was approved.",
  },
  {
    title: "Applied activation",
    description:
      "Learning is tied to live initiatives, not static content.",
  },
  {
    title: "Ethical stewardship",
    description:
      "AI is used for research acceleration, not decision replacement.",
  },
];

const testimonials = [
  {
    quote:
      "Zschool’s governance model made it easy to align our faculty and stakeholders.",
    name: "Dean of Executive Education",
    title: "University Partner",
  },
  {
    quote:
      "The advisory board structure ensured the program stayed grounded in real operational needs.",
    name: "Chief Transformation Officer",
    title: "Enterprise Partner",
  },
  {
    quote:
      "Updates are transparent and documented, which is critical for our risk teams.",
    name: "VP of Risk & Compliance",
    title: "Healthcare System",
  },
];

export default function StyleGuidePage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Design System
            </p>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">
              Zschool Premium UI Kit
            </h1>
            <p className="text-base leading-7 text-slate-600 md:text-lg">
              Typography, spacing, and component patterns for a modern,
              editorial, conversion-focused experience.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                Typography scale
              </h2>
              <div className="space-y-3">
                {typographyScale.map((item) => (
                  <div key={item.label} className="flex items-baseline gap-4">
                    <span className="w-32 text-xs text-slate-500">
                      {item.label}
                    </span>
                    <span className={item.className}>Sample text</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                Spacing + layout
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                Layout uses a 12-column grid with a max width of 6xl. Vertical
                rhythm is built from 4–24 spacing units for generous whitespace.
              </p>
              <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                {spacingScale.map((space) => (
                  <div key={space} className="flex items-center gap-3 text-xs">
                    <span className="w-12 text-slate-500">Space {space}</span>
                    <div
                      className="h-2 rounded-full bg-slate-300"
                      style={{ width: `${Number(space) * 6}px` }}
                    />
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Buttons</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white">
                    Primary
                  </button>
                  <button className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-800">
                    Secondary
                  </button>
                  <button className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-600">
                    Quiet
                  </button>
                </div>
                <p className="mt-4 font-semibold text-slate-900">Cards</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    Default card
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    Soft card
                  </div>
                </div>
                <p className="mt-4 font-semibold text-slate-900">Icon style</p>
                <p className="mt-2 text-sm text-slate-600">
                  Minimal line icons, small circles, and subtle plus glyphs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Header component
          </h2>
        </div>
        <Header />
      </section>

      <Hero
        variant="split"
        eyebrow="Hero / Split"
        title="Human-governed AI education for real organizations."
        description="Zschool partners with universities and advisory boards to deliver credible, evergreen AI learning."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="Editorial image block"
      />

      <Hero
        variant="centered"
        eyebrow="Hero / Centered"
        title="Governance-led education that stays current."
        description="AI accelerates research, humans approve updates, and advisory boards activate learning in practice."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Trust & Legitimacy", href: "/trust" }}
      />

      <TrustStrip
        bullets={[
          "Human-governed updates with faculty and SME review.",
          "Advisory boards align learning to real-world activation.",
          "Documented governance model with visible accountability.",
        ]}
      />

      <Pillars
        eyebrow="Pillars"
        heading="What makes Zschool credible."
        description="A governance model designed for reputation-first partners."
        items={pillars}
      />

      <FeatureGrid
        eyebrow="Feature grid"
        heading="Operational clarity for every partner."
        description="Six high-trust features designed to keep programs current and rigorous."
        features={features}
      />

      <TestimonialGrid
        eyebrow="Testimonial grid"
        heading="What partners value most."
        testimonials={testimonials}
      />

      <CTASection
        title="Ready to design a governed partnership?"
        description="We align on rigor, oversight, and activation before any program is delivered."
        secondaryLabel="Read the trust page"
        secondaryHref="/trust"
      />

      <Footer />
    </div>
  );
}
