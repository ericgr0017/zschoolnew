import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Zschool governance explains academic oversight, advisory board decision rights, and how curriculum updates are approved.",
};

const governancePrinciples = [
  {
    title: "Academic oversight",
    description:
      "Faculty reviewers define learning objectives, approve assessments, and validate curriculum integrity.",
  },
  {
    title: "Advisory board decision rights",
    description:
      "Advisory boards guide relevance, activation planning, and risk alignment.",
  },
  {
    title: "Documented review cadence",
    description:
      "Programs follow a scheduled review cycle with documented approval checkpoints.",
  },
  {
    title: "Transparent accountability",
    description:
      "Decision ownership is explicit, with named roles and auditable records.",
  },
];

const artifacts = [
  {
    title: "Governance charter",
    description:
      "Defines decision rights, review cadence, and escalation paths.",
  },
  {
    title: "Curriculum approval checklist",
    description:
      "Faculty sign-off for rigor, accuracy, and ethical alignment.",
  },
  {
    title: "Advisory board mandate",
    description:
      "Scope, responsibilities, and participation expectations.",
  },
  {
    title: "Change log protocol",
    description:
      "Tracks what changed, why it changed, and who approved it.",
  },
];

export default function GovernancePage() {
  const governanceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Zschool Governance",
    url: "https://zschool.com/governance",
    about: "Governance for AI education programs, including academic oversight and advisory board decision rights.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(governanceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero
        variant="split"
        eyebrow="Governance"
        title="Clear decision rights. Documented oversight."
        description="Zschool governance is designed for legitimacy. Academic oversight, advisory board mandates, and human review checkpoints are all visible and reviewable."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Trust & Legitimacy", href: "/trust" }}
        imageLabel="Governance review meeting"
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      />

      <FeatureGrid
        eyebrow="Principles"
        heading="How governance is structured."
        description="Academic rigor and decision accountability are built into every program."
        features={governancePrinciples}
      />

      <FeatureGrid
        eyebrow="Artifacts"
        heading="Documentation partners can review."
        description="These materials explain how decisions are made and approved."
        features={artifacts}
      />

      <CTASection
        title="Want to review the governance materials?"
        description="We can share governance documentation and walk through decision rights and review cadence."
        secondaryLabel="Read the trust page"
        secondaryHref="/trust"
      />
    </div>
  );
}
