import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";
import Pillars from "@/components/pillars";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How Zschool uses AI to keep education current while human governance ensures quality, legitimacy, and accountability.",
};

const ASSETS = {
  heroPoster:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
  heroVideo:
    "https://cdn.pixabay.com/video/2016/05/12/3132-166335897_large.mp4",
};

const capabilities = [
  {
    title: "AI content updating",
    description:
      "Our system monitors research, regulation, and market signals, then proposes updates. Humans approve every change before it is published.",
  },
  {
    title: "Customization engine",
    description:
      "We adapt each program to industry context, risk posture, and organizational priorities, so learning matches real needs.",
  },
  {
    title: "Version control",
    description:
      "Every update is tracked. Partners can see what changed, why it changed, and when it was approved.",
  },
  {
    title: "Feedback loops",
    description:
      "Advisory boards and learners provide structured feedback that shapes the next revision cycle.",
  },
  {
    title: "Human review checkpoints",
    description:
      "Faculty, advisors, and learning experts review content at defined checkpoints to ensure rigor and integrity.",
  },
];

const reassurance = [
  {
    title: "AI supports, humans decide",
    description:
      "AI accelerates research and synthesis, but does not determine curriculum.",
  },
  {
    title: "Governance is explicit",
    description:
      "Faculty and advisors approve updates and own accountability.",
  },
  {
    title: "Audit-ready transparency",
    description:
      "Changes are documented with clear logs, outcomes, and review cycles.",
  },
];

export default function TechnologyPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="Technology"
        title="AI as augmentation, not replacement."
        description="Zschool uses AI to keep education current and relevant, while human governance ensures accuracy, ethics, and legitimacy."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="AI research workflow"
        imageUrl={ASSETS.heroPoster}
        videoUrl={ASSETS.heroVideo}
      />

      <FeatureGrid
        eyebrow="Capability"
        heading="The technology behind evergreen learning."
        description="AI accelerates research and customization; humans approve every update."
        features={capabilities}
      />

      <Pillars
        eyebrow="Assurance"
        heading="Built for skeptical executives and academics."
        description="Oversight, accountability, and transparency are explicit."
        items={reassurance}
      />

      <CTASection
        title="Want to review the governance workflow?"
        description="We can walk through how updates are proposed, reviewed, approved, and documented in a short conversation."
        secondaryLabel="Review trust details"
        secondaryHref="/trust"
      />
    </div>
  );
}
