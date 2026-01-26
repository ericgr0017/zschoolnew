import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";
import Pillars from "@/components/pillars";
import TestimonialGrid from "@/components/testimonial-grid";
import TrustStrip from "@/components/trust-strip";

export const metadata: Metadata = {
  title: "Human-governed AI education",
  description:
    "Zschool is a human-governed education partner that keeps AI courses evergreen with faculty oversight, advisory boards, and documented governance.",
};

const ASSETS = {
  heroPoster:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  heroVideo:
    "https://cdn.pixabay.com/video/2015/10/16/1035-142621331_large.mp4",
};

const pillars = [
  {
    title: "Evergreen course updates",
    description:
      "AI monitors research and regulation, while humans decide what updates go live.",
  },
  {
    title: "AI + human governance",
    description:
      "Faculty and advisors approve curriculum changes and document the rationale.",
  },
  {
    title: "Advisory boards as activation engines",
    description:
      "Boards align learning with real initiatives and accountable outcomes.",
  },
];

const features = [
  {
    title: "University partner rigor",
    description:
      "Academic oversight defines objectives, assessment standards, and quality.",
  },
  {
    title: "Documented update cadence",
    description:
      "Every update is reviewed and logged on a predictable schedule.",
  },
  {
    title: "Governance transparency",
    description:
      "Decision rights, review checkpoints, and accountability are visible.",
  },
  {
    title: "Activation inside organizations",
    description:
      "Advisory boards align learning with real initiatives and outcomes.",
  },
  {
    title: "Executive-ready delivery",
    description:
      "Programs are concise, credible, and tuned for leadership audiences.",
  },
  {
    title: "Ethical AI use",
    description:
      "AI accelerates research, but human reviewers retain final authority.",
  },
];

const testimonials = [
  {
    quote:
      "The governance model made it easy to align faculty standards with executive needs.",
    name: "Dean of Executive Education",
    title: "University Partner",
  },
  {
    quote:
      "Advisory boards kept the program grounded in real operational priorities.",
    name: "Chief Transformation Officer",
    title: "Enterprise Partner",
  },
  {
    quote:
      "We could verify how updates were approved, which built immediate trust.",
    name: "VP of Risk & Compliance",
    title: "Healthcare System",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        title="Zschool builds and runs evergreen AI education with university partners."
        description="Zschool is a human-governed education partner. We design and run AI courses for organizations and executives, and we keep them current through AI-assisted research and faculty review."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="Leadership council meeting"
        imageUrl={ASSETS.heroPoster}
        videoUrl={ASSETS.heroVideo}
        highlights={[
          "Human-governed updates",
          "Advisory board activation",
          "Documented governance model",
        ]}
      />

      <TrustStrip
        bullets={[
          "Human-governed updates with faculty and subject-matter review.",
          "Advisory boards drive activation and ensure real-world relevance.",
          "Documented governance model with clear accountability.",
        ]}
      />

      <Pillars
        eyebrow="Pillars"
        heading="Governance that keeps education credible."
        description="Every program is reviewed, documented, and activated in practice."
        items={pillars}
      />

      <FeatureGrid
        eyebrow="What partners get"
        heading="A trusted system, not a static curriculum."
        description="Zschool is designed for organizations that need credibility and measurable outcomes."
        features={features}
      />

      <TestimonialGrid
        eyebrow="Partner voices"
        heading="Why institutions choose Zschool."
        testimonials={testimonials}
      />

      <CTASection
        title="Ready for a conversation?"
        description="We schedule a small number of conversations each week to ensure fit, governance alignment, and clear outcomes."
        secondaryLabel="Read the trust page"
        secondaryHref="/trust"
      />
    </div>
  );
}
