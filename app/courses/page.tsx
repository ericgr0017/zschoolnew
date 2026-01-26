import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import Pillars from "@/components/pillars";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore Zschool learning domains organized by real-world problems, customized for each partner and continuously updated with human governance.",
};

const ASSETS = {
  heroImage:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
};

const coursePillars = [
  {
    title: "Built with universities",
    description:
      "Academic partners define rigor, outcomes, and assessment standards.",
  },
  {
    title: "Governed by advisors",
    description:
      "Advisory boards align learning to real organizational realities.",
  },
  {
    title: "Continuously updated",
    description:
      "AI research is reviewed by humans and documented in change logs.",
  },
];

const courseDomains = [
  {
    title: "AI Readiness & Risk",
    summary:
      "Build a shared, credible understanding of AI capabilities, limits, and risk governance.",
    problems: [
      "Leaders lack a common AI vocabulary and risk framework.",
      "Teams rely on vendor narratives instead of evidence-based guidance.",
      "AI adoption outpaces governance and decision readiness.",
    ],
    audience: [
      "Executive teams and boards",
      "Strategy, risk, legal, and data leaders",
      "University partners building AI credentials",
    ],
    customization:
      "We align the curriculum to your industry, risk posture, and strategic initiatives, with casework drawn from your context.",
    currency:
      "AI research, regulation, and market signals are monitored continuously, with faculty-approved updates on a defined cadence.",
  },
  {
    title: "Leadership & Change",
    summary:
      "Equip leaders to guide organizational change with clarity, ethics, and accountability.",
    problems: [
      "Change programs move faster than leadership alignment.",
      "Ethical and reputational considerations lack owners.",
      "Middle leadership is left without operational guidance.",
    ],
    audience: [
      "C-suite and senior leaders",
      "People, HR, and transformation teams",
      "Executive education cohorts",
    ],
    customization:
      "We co-design sessions around your transformation roadmap and stakeholder expectations, including governance scenarios.",
    currency:
      "Updates reflect evolving regulatory standards and real-world transformation case studies.",
  },
  {
    title: "AI Strategy & Operating Model",
    summary:
      "Translate AI ambition into a clear operating model, funding plan, and accountability system.",
    problems: [
      "AI strategy is defined but not operationalized.",
      "Ownership across product, data, and risk is unclear.",
      "Investment lacks measurement and prioritization.",
    ],
    audience: [
      "Strategy and operating model leaders",
      "Innovation, product, and data executives",
      "Public sector and regulated industries",
    ],
    customization:
      "We map learning to your current operating model, portfolio, and governance bodies, then build applied workshops.",
    currency:
      "AI capability and regulatory updates are reviewed with advisory boards to keep strategy relevant.",
  },
  {
    title: "Healthcare & Life Sciences",
    summary:
      "Responsible AI education tailored to patient safety, clinical workflows, and regulatory oversight.",
    problems: [
      "Clinical AI adoption outpaces governance readiness.",
      "Privacy and safety requirements are unevenly understood.",
      "Leaders lack a shared view of AI risk and value.",
    ],
    audience: [
      "Healthcare executives and clinical leaders",
      "Compliance, risk, and data governance teams",
      "University-affiliated medical programs",
    ],
    customization:
      "Curriculum is aligned to clinical realities, regulatory expectations, and partner governance standards.",
    currency:
      "We track healthcare regulations and clinical evidence, updating content with faculty review.",
  },
  {
    title: "Responsible AI & Governance",
    summary:
      "Create the policies, oversight, and accountability needed for responsible deployment.",
    problems: [
      "AI policies exist but are not operationalized.",
      "Risk teams lack a shared assessment framework.",
      "Stakeholders demand credible governance documentation.",
    ],
    audience: [
      "Risk, legal, and compliance leaders",
      "Data governance and privacy teams",
      "University governance committees",
    ],
    customization:
      "We align governance education to your risk model, regulatory exposure, and oversight structure.",
    currency:
      "Regulatory and standards updates are monitored continuously and reviewed by academic advisors.",
  },
  {
    title: "Industry & Sector Strategy",
    summary:
      "Sector-specific AI education that reflects competitive dynamics and regulatory realities.",
    problems: [
      "Sector nuance is missing from generic AI curricula.",
      "Leaders need market and policy context, not hype.",
      "Change programs fail without industry relevance.",
    ],
    audience: [
      "Sector executives and strategy teams",
      "Industry associations and consortiums",
      "University partners building sector programs",
    ],
    customization:
      "We tailor content to your sector, including casework, policy trends, and strategic priorities.",
    currency:
      "Industry signals and policy shifts are tracked and integrated through advisory review cycles.",
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="Courses"
        title="Learning domains organized by real-world problems."
        description="Zschool does not publish fixed curricula. We organize learning by problem domain, then customize each experience to the partner’s goals, context, and governance requirements."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="Graduate seminar"
        imageUrl={ASSETS.heroImage}
      />

      <Pillars
        eyebrow="Governance"
        heading="Designed for credibility and relevance."
        description="Each domain is university-led, advisory-governed, and continuously updated."
        items={coursePillars}
      />

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8">
            {courseDomains.map((theme) => (
              <div
                key={theme.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-slate-900">
                        {theme.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {theme.summary}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        What problems it solves
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {theme.problems.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        World-class learning experience
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Programs blend faculty-led instruction, applied cases,
                        and advisory engagement to keep learning rigorous and
                        engaging.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Who it’s for
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {theme.audience.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        How it’s customized
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {theme.customization}
                      </p>
                      <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        How it stays current
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {theme.currency}
                      </p>
                      <p className="mt-3 text-xs leading-5 text-slate-500">
                        No static curricula: content is reviewed and revised on
                        a defined cadence with human sign-off.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Build a course pathway tailored to your organization."
        description="We will map themes to your goals, governance needs, and executive stakeholders, then propose a curriculum plan and advisory model."
        secondaryLabel="Review trust details"
        secondaryHref="/trust"
      />
    </div>
  );
}
