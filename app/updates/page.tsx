import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Zschool change log and update cadence for AI education programs with human-governed review.",
};

const cadence = [
  {
    title: "Monthly evidence scan",
    description:
      "AI monitors research, regulation, and market signals for change candidates.",
  },
  {
    title: "Quarterly governance review",
    description:
      "Faculty and advisors approve updates and validate evidence quality.",
  },
  {
    title: "Partner activation reviews",
    description:
      "Advisory boards validate relevance to real organizational initiatives.",
  },
  {
    title: "Audit-ready change logs",
    description:
      "Updates are documented with rationale, approvers, and timestamps.",
  },
];

const updateLog = [
  {
    date: "June 2026",
    title: "Regulatory update review",
    detail:
      "Aligned content to new AI compliance guidance and updated governance checklists.",
  },
  {
    date: "May 2026",
    title: "Curriculum validation cycle",
    detail:
      "Faculty reviewers approved updated case studies and assessment criteria.",
  },
  {
    date: "April 2026",
    title: "Advisory activation feedback",
    detail:
      "Incorporated advisory board input from enterprise deployment workshops.",
  },
  {
    date: "March 2026",
    title: "AI research synthesis",
    detail:
      "Updated market landscape modules with verified research citations.",
  },
];

export default function UpdatesPage() {
  const updatesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Zschool Updates",
    url: "https://zschool.com/updates",
    about:
      "Update cadence and change logs for AI education programs with human-governed review.",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zschool",
    url: "https://zschool.com",
    email: "hello@zschool.com",
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(updatesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero
        variant="split"
        eyebrow="Updates"
        title="A transparent, human-governed change log."
        description="Zschool keeps programs current through AI-assisted research and human review. Updates are documented so partners can verify what changed and why."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="Research review workflow"
        imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
      />

      <FeatureGrid
        eyebrow="Cadence"
        heading="How updates are governed."
        description="A predictable cycle for evidence review and approval."
        features={cadence}
      />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                Update log
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Sample recent updates.
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                Illustrative entries showing how updates are reviewed and approved.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {updateLog.map((entry) => (
                <div
                  key={entry.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {entry.date}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {entry.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want the full change log?"
        description="We can share detailed update logs and review cadence during a short call."
        secondaryLabel="Read the trust page"
        secondaryHref="/trust"
      />
    </div>
  );
}
