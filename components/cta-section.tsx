"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type CTASectionProps = {
  title: string;
  description: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title,
  description,
  secondaryLabel = "How Zschool Works",
  secondaryHref = "/model",
}: CTASectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-[0_30px_90px_rgba(15,23,42,0.08)] md:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.2),transparent_55%)]" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Schedule a conversation
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Schedule a conversation
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
