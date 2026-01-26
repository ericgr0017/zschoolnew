import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "For organizations",
  description:
    "Equip leaders and teams with credible, governed AI education aligned to strategy and risk.",
};

const ASSETS = {
  heroImage:
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80",
};

const focusAreas = [
  {
    title: "Leadership readiness",
    description:
      "Give executives the context and governance they need to lead AI transformation responsibly.",
  },
  {
    title: "Operational activation",
    description:
      "Tie learning to live initiatives with advisory boards that align outcomes and risk.",
  },
  {
    title: "Regulatory awareness",
    description:
      "Stay current on policy, compliance, and responsible AI practices without chasing headlines.",
  },
  {
    title: "Reputation protection",
    description:
      "Provide a credible learning partner your stakeholders can trust.",
  },
];

const delivery = [
  {
    title: "Leadership cohorts",
    description: "Advisory board participation and governance alignment.",
  },
  {
    title: "Functional pathways",
    description: "Tailored learning for product, legal, risk, and data teams.",
  },
  {
    title: "Strategy briefings",
    description: "Decision support for executives and board stakeholders.",
  },
  {
    title: "Outcome measurement",
    description: "Frameworks tied to organizational outcomes and adoption.",
  },
];

export default function OrganizationsPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="For Organizations"
        title="Credible AI education for real organizational change."
        description="Zschool helps organizations build AI capability with governance, advisory input, and learning tied directly to strategic outcomes."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Review trust details", href: "/trust" }}
        imageLabel="Executive working session"
        imageUrl={ASSETS.heroImage}
      />

      <FeatureGrid
        eyebrow="Focus areas"
        heading="Governance-backed capability building."
        description="Leadership alignment, operational activation, and reputational protection."
        features={focusAreas}
      />

      <FeatureGrid
        eyebrow="Delivery"
        heading="How we deliver inside organizations."
        description="Every engagement is structured to drive adoption, capability, and clarity."
        features={delivery}
      />

      <CTASection
        title="Align education with your AI roadmap."
        description="We will co-design a governance-backed program that supports your strategy, risk posture, and leadership priorities."
        secondaryLabel="Review trust details"
        secondaryHref="/trust"
      />
    </div>
  );
}
