import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import FeatureGrid from "@/components/feature-grid";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Is ZAI Institute legit?",
  description:
    "Transparent governance, advisory oversight, and human review explain how ZAI builds trustworthy AI education.",
};
const ASSETS = {
  heroImage: "https://zschoolnew-i69a.vercel.app/hero-trust.png",
};

const trustPillars = [
  {
    title: "Academic rigor",
    description:
      "Faculty and academic advisors set standards, approve curriculum, and review assessments.",
  },
  {
    title: "Advisory board governance",
    description:
      "Advisory boards exist to align learning with real organizational needs and accountable outcomes.",
  },
  {
    title: "Human-reviewed AI updates",
    description:
      "AI proposes updates, but human reviewers validate evidence and approve every change.",
  },
  {
    title: "Transparent business model",
    description:
      "We do not sell credentials or access. Partnerships are governed with clear deliverables and oversight.",
  },
];

const verificationSteps = [
  "Review governance documentation and faculty oversight roles.",
  "Ask for advisory board composition and decision rights.",
  "Request change logs that show how updates were reviewed.",
  "Confirm how programs are activated inside organizations.",
];

const rigorPoints = [
  "Academic objectives and assessment criteria are defined before launch.",
  "Faculty reviewers approve curriculum changes on a documented cadence.",
  "Program integrity is evaluated against institutional standards.",
];

const advisoryBoardDetails = [
  "Boards include faculty, industry leaders, and learning experts.",
  "They are chartered with clear scope, responsibilities, and review cycles.",
  "Their mandate is activation: aligning learning to real initiatives.",
];

const aiReviewSteps = [
  "AI monitors research, regulation, and market signals.",
  "Draft updates are created with evidence citations.",
  "Human reviewers validate sources, relevance, and accuracy.",
  "Approved changes are documented in a change log.",
];

const integrityStatements = [
  "ZAI does not sell credentials or placement.",
  "We do not operate a pay-to-play marketplace.",
  "Partnerships are governed by documented standards and outcomes.",
];

const governanceArtifacts = [
  "Governance charter outlining decision rights and review cadence.",
  "Curriculum approval checklist signed by faculty reviewers.",
  "Advisory board mandate with scope, membership, and responsibilities.",
  "AI update validation protocol with evidence standards.",
];

const updateLog = [
  {
    date: "June 2026",
    title: "Regulatory update review",
    detail: "Aligned course content with new AI compliance guidance.",
  },
  {
    date: "May 2026",
    title: "Human review cycle completed",
    detail: "Faculty reviewers approved syllabus updates across core modules.",
  },
  {
    date: "April 2026",
    title: "Advisory activation feedback",
    detail: "Incorporated board input on real-world deployment case studies.",
  },
];

const lastGovernanceReview = "June 2026";

const outreachVerification = [
  {
    title: "Official email domains",
    description:
      "Legitimate outreach comes from @zaiinstitute.com addresses (for example: hello@zaiinstitute.com).",
  },
  {
    title: "What we never ask for",
    description:
      "We will never request passwords, payment details, or upfront fees to “secure” a partnership.",
  },
  {
    title: "How to confirm an invite",
    description:
      "Forward the message to hello@zaiinstitute.com and we will confirm the sender and context.",
  },
];

const trustTestimonials = [
  {
    quote:
      "A lot of the concepts are so relevant to my role and I can work on applying them. This ability to apply what I was learning throughout the course has been great. It has been an eye opening experience. My brain is buzzing with ideas.",
    name: "Vikram Ekambaram",
    title: "Director, Global Customer Advocacy",
    institution: "Tableau/Salesforce",
    imageUrl: "/testimonials/placeholder-1.jpg",
  },
  {
    quote:
      "It has really helped me think about many issues in a new way, and I've been exposed to important trends that are relevant to my organization and what I need to know to lead it",
    name: "Dean Ridings",
    title: "CEO",
    institution: "America's Newspapers",
    imageUrl: "/testimonials/placeholder-2.jpg",
  },
  {
    quote:
      "I continue to marvel at the use of different media in this course. Movies, podcasts, articles, videos, and books. All with relevant and interesting content. I like that module after module has recurring themes which help to reinforce the learning.",
    name: "Trisha Yamato",
    title: "Senior Manager, Human Resources",
    institution: "Los Angeles LGBT Center",
    imageUrl: "/testimonials/placeholder-3.jpg",
  },
];

const faqs = [
  {
    question: "How is ZAI Institute different from a typical online course provider?",
    answer:
      "ZAI is governed by humans and activated inside organizations. We combine academic oversight, advisory input, and AI-driven updates, then tie learning to real initiatives rather than self-serve consumption.",
  },
  {
    question: "Who decides what content is included?",
    answer:
      "Faculty advisors and learning experts approve curriculum, with advisory boards shaping relevance. AI supports research, but humans make final decisions.",
  },
  {
    question: "How often is content updated?",
    answer:
      "Programs follow a documented review cadence. Updates are prioritized based on research, regulation, and partner feedback, then reviewed by human governance.",
  },
  {
    question: "How do you validate AI-generated updates?",
    answer:
      "AI never publishes changes directly. Updates are reviewed by faculty and learning experts, validated against evidence, and logged before release.",
  },
  {
    question: "Can stakeholders verify program integrity?",
    answer:
      "Yes. We provide governance documentation, advisory board structures, and change logs during partnership discussions.",
  },
  {
    question: "Is ZAI Institute a pay-to-play model?",
    answer:
      "No. We do not sell credentials or placement. Programs are governed by academic standards and structured partnership agreements.",
  },
  {
    question: "Do you sell or monetize learner data?",
    answer:
      "No. We limit data collection to what is required for learning operations and do not sell participant data.",
  },
];

export default function TrustPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-white">
      <Hero
        variant="split"
        eyebrow="Trust & Legitimacy"
        title="Is ZAI Institute legit?"
        description="ZAI is built for credibility. Academic rigor, human governance, and advisory boards are explicit and reviewable. AI keeps content current, but humans validate every change."
        primaryCta={{ label: "Schedule a Conversation", href: "/contact" }}
        secondaryCta={{ label: "See the governance model", href: "/model" }}
        imageLabel="Faculty review session"
        imageUrl={ASSETS.heroImage}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <FeatureGrid
        eyebrow="Trust pillars"
        heading="Clear governance, not assumptions."
        description="Our trust model is visible, documented, and reviewable."
        features={trustPillars}
      />

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                Evidence
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Governance artifacts you can review.
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                We maintain documented governance materials that explain who
                approves updates, how decisions are made, and how accountability
                is enforced.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                {governanceArtifacts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Last governance review: {lastGovernanceReview}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <h3 className="text-lg font-semibold text-slate-900">
                Sample update log
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Illustrative entries from recent review cycles.
              </p>
              <div className="mt-5 space-y-4">
                {updateLog.map((entry) => (
                  <div key={entry.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {entry.date}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      {entry.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {entry.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">
                How to verify ZAI Institute.
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                We encourage partners to review governance and documentation
                before committing to a program.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              {verificationSteps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-900">
                Academic rigor and human review.
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                ZAI Institute treats academic rigor as a governance requirement, not a
                marketing claim. Faculty reviewers approve curriculum standards,
                assessment criteria, and update decisions.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                {rigorPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  AI review and validation
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  AI helps surface new research, but every update is validated
                  by human reviewers before release.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {aiReviewSteps.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Not pay-to-play
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  ZAI Institute is not a pay-to-play model. We do not sell
                  credentials, access, or placement. Partnerships are governed
                  by documented standards and outcomes.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {integrityStatements.map((statement) => (
                    <li key={statement} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      <span>{statement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Advisory board governance
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Advisory boards are designed to bridge education and real-world
                practice. They exist to ensure programs are activated in
                organizations with clear accountability.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {advisoryBoardDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/advisory-board"
                className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900"
              >
                Learn about advisory boards →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Verification"
        heading="How to verify outreach."
        description="We keep outreach simple and transparent."
        features={outreachVerification}
      />

      <section className="border-t border-slate-200 bg-slate-50">
  <div className="mx-auto max-w-6xl px-6 py-16">
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
        Testimonials
      </p>
      <h2 className="text-3xl font-semibold text-slate-900">
        What our partners say
      </h2>
      <p className="text-sm leading-6 text-slate-600">
        These are examples of the kinds of trust signals institutional stakeholders
        typically want before moving forward.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {trustTestimonials.map((t) => (
        <figure
          key={`${t.name}-${t.institution}`}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
        >
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              <img
                src={t.imageUrl}
                alt={`${t.name}, ${t.title}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name + title */}
            <div className="min-w-0 flex-1">
              <figcaption className="text-sm font-semibold text-slate-900 leading-tight break-words">
                {t.name}
              </figcaption>
              <p className="mt-0.5 text-xs text-slate-600 leading-snug break-words whitespace-normal">
                {t.title} • {t.institution}
              </p>
            </div>
          </div>

          <blockquote className="mt-5 text-sm leading-6 text-slate-700">
            “{t.quote}”
          </blockquote>
        </figure>
      ))}
    </div>
  </div>
</section>
      
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">FAQ</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Common questions from universities, organizations, and
                executives evaluating ZAI Institute.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Want to review documentation?"
        description="We can share governance documentation and references during a short call."
        secondaryLabel="How ZAI Institute Works"
        secondaryHref="/model"
      />
    </div>
  );
}
