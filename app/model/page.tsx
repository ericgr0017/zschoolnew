import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";
import Pillars from "@/components/pillars";

export const metadata: Metadata = {
  title: "How Zschool works",
  description:
    "How Zschool keeps AI education credible and current through AI-accelerated research, human academic review, and advisory board activation.",
};

const ASSETS = {
  heroImage:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
};

const modelPillars = [
  {
    title: "Human governance",
    description:
      "Faculty and advisors set standards, approve curriculum, and own accountability.",
  },
  {
    title: "Evergreen updates",
    description:
      "AI surfaces evidence; human reviewers decide what is published.",
  },
  {
    title: "Advisory activation",
    description:
      "Boards align learning to real initiatives and measurable outcomes.",
  },
];

const modelFeatures = [
  {
    title: "Why static education fails",
    description:
      "When content is updated once a year, it drifts away from practice and loses credibility.",
  },
  {
    title: "AI keeps courses evergreen",
    description:
      "We monitor research, regulation, and market signals to identify needed updates.",
  },
  {
    title: "Human review checkpoints",
    description:
      "Faculty and learning experts validate changes before release.",
  },
  {
    title: "Documented version control",
    description:
      "Every update is logged with rationale, dates, and approval records.",
  },
  {
    title: "Advisory boards activate learning",
    description:
      "Boards connect curriculum to real organizational priorities and risk.",
  },
  {
    title: "Continuous improvement loop",
    description:
      "Outcomes inform the next cycle of research, review, and program delivery.",
  },
];

export default function ModelPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="How Zschool Works"
        title="The trust-first system behind Zschool."
        description="Zschool is a human-governed education partner. We use AI to keep learning current, but faculty and advisors decide what changes and how programs are activated inside organizations."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Read the trust page", href: "/trust" }}
        imageLabel="AI governance visualization"
        imageUrl={ASSETS.heroImage}
      />

      <Pillars
        eyebrow="Model pillars"
        heading="Built for credibility and longevity."
        description="Human governance, evergreen updates, and activation inside real organizations."
        items={modelPillars}
      />

      <FeatureGrid
        eyebrow="How it works"
        heading="A clear system of research, review, and activation."
        description="Every change is visible, approved, and tied to real outcomes."
        features={modelFeatures}
      />

      <CTASection
        title="Ready to discuss governance and fit?"
        description="We share documentation, review your governance needs, and align on how Zschool would activate learning inside your organization."
        secondaryLabel="Review trust details"
        secondaryHref="/trust"
      />
    </div>
  );
}
