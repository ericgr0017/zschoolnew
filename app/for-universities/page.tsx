import type { Metadata } from "next";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "For universities",
  description:
    "Academic rigor, faculty oversight, brand protection, and governance for university-led AI education partnerships.",
};

const ASSETS = {
  heroImage:
    "https://images.unsplash.com/photo-1504494645474-cc4e25299579?auto=format&fit=crop&w=1600&q=80",
};

const benefits = [
  {
    title: "Academic rigor",
    description:
      "Programs are built to university standards with clear learning objectives, assessment criteria, and academic integrity.",
  },
  {
    title: "Faculty oversight",
    description:
      "Faculty and academic advisors approve curriculum updates, ensuring rigor and alignment with institutional standards.",
  },
  {
    title: "Brand protection",
    description:
      "Governance documentation and review checkpoints protect reputation and signal legitimacy to stakeholders.",
  },
  {
    title: "Revenue clarity",
    description:
      "Partnership models are structured around transparent revenue sharing and delivery responsibilities.",
  },
  {
    title: "Governance built in",
    description:
      "Advisory boards and academic review are embedded from day one, not added after launch.",
  },
];

const engagementOptions = [
  {
    title: "Co-branded executive education",
    description: "Faculty-led governance with clear academic standards.",
  },
  {
    title: "Advisory-backed certificates",
    description: "Documented standards with reviewable assessment criteria.",
  },
  {
    title: "Cohort programs",
    description: "Activation tied to organizational initiatives and outcomes.",
  },
  {
    title: "Research briefings",
    description: "Applied projects reviewed by faculty and advisors.",
  },
];

export default function UniversitiesPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="For Universities"
        title="University partnerships designed for rigor and reputation."
        description="Zschool helps universities deliver AI education that meets academic standards, protects institutional brand, and generates transparent revenue. Faculty oversight and governance are built into every partnership."
        primaryCta={{ label: "Explore a University Partnership", href: "/contact" }}
        secondaryCta={{ label: "How Zschool Works", href: "/model" }}
        imageLabel="University campus"
        imageUrl={ASSETS.heroImage}
      />

      <FeatureGrid
        eyebrow="Partnership benefits"
        heading="Academic rigor with governance built in."
        description="Faculty oversight, brand protection, and transparent revenue alignment."
        features={benefits}
      />

      <FeatureGrid
        eyebrow="Formats"
        heading="Partnership formats."
        description="We co-design programs with clear governance and faculty leadership."
        features={engagementOptions}
      />

      <CTASection
        title="Explore a University Partnership"
        description="We will align on academic rigor, faculty oversight, governance, brand protection, and revenue structure before launch."
        secondaryLabel="How Zschool Works"
        secondaryHref="/model"
      />
    </div>
  );
}
