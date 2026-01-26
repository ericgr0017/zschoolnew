import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "For executives",
  description:
    "Curated AI education for leaders who need clear guidance, credible governance, and applied insight.",
};

const ASSETS = {
  heroImage:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
};

const offerings = [
  {
    title: "Executive briefings",
    description:
      "Short, high-trust sessions that translate AI developments into strategic decisions.",
  },
  {
    title: "Advisory circles",
    description:
      "Small-group discussions with faculty and industry advisors focused on real scenarios.",
  },
  {
    title: "Applied learning",
    description:
      "Workshops tied to your organization’s initiatives with follow-up guidance.",
  },
  {
    title: "Private governance review",
    description:
      "Walk through risk, ethics, and oversight with experienced advisors.",
  },
];

const executives = [
  {
    title: "C-suite and boards",
    description: "Leaders seeking AI clarity, governance, and accountability.",
  },
  {
    title: "Public sector leaders",
    description: "Innovation balanced with policy and governance expectations.",
  },
  {
    title: "Founders and CEOs",
    description: "Scaling AI responsibly inside growing organizations.",
  },
  {
    title: "Cross-functional leaders",
    description: "Senior leaders with enterprise AI mandates.",
  },
];

export default function ExecutivesPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="For Executives"
        title="High-trust AI education for leaders."
        description="Zschool supports executives with credible, human-governed learning that keeps pace with AI without the noise or hype."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="Executive advisory session"
        imageUrl={ASSETS.heroImage}
      />

      <FeatureGrid
        eyebrow="Executive offerings"
        heading="Designed for clarity and accountability."
        description="Short, high-trust engagements grounded in real decision-making."
        features={offerings}
      />

      <FeatureGrid
        eyebrow="Who it serves"
        heading="For leaders who own AI outcomes."
        description="Executive programs tailored to governance, risk, and strategic decisions."
        features={executives}
      />

      <CTASection
        title="Schedule a private conversation."
        description="We offer a limited number of executive discussions each week to ensure depth and preparation."
        secondaryLabel="How Zschool Works"
        secondaryHref="/model"
      />
    </div>
  );
}
