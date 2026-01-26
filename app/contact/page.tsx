import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Schedule a conversation",
  description:
    "Talk with Zschool about governance, partnerships, and AI education programs.",
};

const contactOptions = [
  {
    title: "Universities",
    description:
      "Discuss co-branded programs, faculty governance, and partnership models.",
    email: "universities@zschool.com",
  },
  {
    title: "Organizations",
    description:
      "Explore leadership education and activation inside your organization.",
    email: "organizations@zschool.com",
  },
  {
    title: "Executives",
    description:
      "Request private briefings, advisory circles, or governance reviews.",
    email: "executives@zschool.com",
  },
];

const CALENDLY_URL = "https://calendly.com/zschool/intro";

const ASSETS = {
  heroImage:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="Contact"
        title="Schedule a conversation."
        description="We schedule conversations to understand governance expectations, partnership fit, and the outcomes you need."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Review trust details", href: "/trust" }}
        imageLabel="Partner discovery call"
        imageUrl={ASSETS.heroImage}
      />

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:hello@zschool.com"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Email hello@zschool.com
            </Link>
            <Link
              href={CALENDLY_URL}
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Schedule via Calendly
            </Link>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Contact pathways"
        heading="Direct lines for each partner group."
        description="Reach the right team based on your organization and goals."
        features={contactOptions}
      />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-10">
            <h2 className="text-2xl font-semibold text-slate-900">
              What to expect.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We will cover your goals, governance needs, and the best pathway
              for your stakeholders. If there is a fit, we will outline a
              tailored advisory and delivery plan.
            </p>
          </div>
        </div>
      </section>
      <CTASection
        title="Prefer a scheduled call?"
        description="Use our Calendly link for a quick scheduling option, or email us with questions before booking."
        secondaryLabel="Review trust details"
        secondaryHref="/trust"
      />
    </div>
  );
}
