import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "About Zschool",
  description:
    "Zschool is a human-governed, AI-powered education partner for universities, organizations, and executives.",
};

const ASSETS = {
  heroImage:
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
};

const values = [
  {
    title: "Credibility",
    description:
      "Every program is built to withstand scrutiny from stakeholders and the public.",
  },
  {
    title: "Human-centered governance",
    description:
      "AI supports research, but human advisors make final decisions.",
  },
  {
    title: "Applied impact",
    description:
      "Learning is designed to change how real organizations work.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="About"
        title="Education governed by humans, powered by AI."
        description="Zschool partners with universities, corporations, and executives to deliver continuously updated AI education. We answer the credibility question with transparency, governance, and measurable activation."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="Academic library"
        imageUrl={ASSETS.heroImage}
      />

      <FeatureGrid
        eyebrow="Values"
        heading="Principles that guide every partnership."
        description="Credibility, human governance, and applied impact."
        features={values}
      />

      <CTASection
        title="Learn more about our governance model."
        description="We can share how advisory boards, faculty oversight, and AI research work together to keep programs credible."
        secondaryLabel="Review trust details"
        secondaryHref="/trust"
      />
    </div>
  );
}
