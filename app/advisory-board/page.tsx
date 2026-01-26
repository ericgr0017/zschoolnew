import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Advisory board governance",
  description:
    "Learn how Zschool advisory boards guide curriculum, ensure relevance, and activate learning inside organizations.",
};

const ASSETS = {
  heroImage:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
};

const responsibilities = [
  {
    title: "Curriculum alignment",
    description:
      "Ensure programs map to real-world initiatives, not generic content libraries.",
  },
  {
    title: "Risk and ethics review",
    description:
      "Surface regulatory, ethical, and reputational considerations before delivery.",
  },
  {
    title: "Program activation",
    description:
      "Support the deployment plan so learning translates into action.",
  },
  {
    title: "Feedback loops",
    description:
      "Provide ongoing input to keep content current and practical.",
  },
];

const composition = [
  {
    title: "Faculty advisors",
    description: "Academic oversight for rigor, standards, and integrity.",
  },
  {
    title: "Industry experts",
    description: "Domain credibility and real-world relevance.",
  },
  {
    title: "Learning leaders",
    description: "Delivery expertise and applied program design.",
  },
  {
    title: "Partner stakeholders",
    description: "Accountable owners of outcomes and activation.",
  },
];

export default function AdvisoryBoardPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="Advisory Board"
        title="Advisory boards keep education grounded in reality."
        description="Zschool advisory boards connect faculty guidance with real-world organizational needs. They are a core part of our governance model, ensuring learning remains credible and applied."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="Advisory roundtable"
        imageUrl={ASSETS.heroImage}
      />

      <FeatureGrid
        eyebrow="Responsibilities"
        heading="Why advisory boards exist."
        description="Boards align curriculum to real outcomes and ensure accountable delivery."
        features={responsibilities}
      />

      <FeatureGrid
        eyebrow="Composition"
        heading="Typical board composition."
        description="Curated for each partnership based on domain, risk, and delivery needs."
        features={composition}
      />

      <CTASection
        title="Establish advisory governance with us."
        description="We will align on the right advisory structure for your university or organization."
        secondaryLabel="How Zschool Works"
        secondaryHref="/model"
      />
    </div>
  );
}
