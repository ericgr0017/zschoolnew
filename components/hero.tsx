"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type CTA = {
  label: string;
  href: string;
};

type HeroProps = {
  variant?: "split" | "centered";
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  imageLabel?: string;
  imageUrl?: string;
  videoUrl?: string;
  highlights?: string[];
};

export default function Hero({
  variant = "split",
  eyebrow = "Zschool",
  title,
  description,
  primaryCta,
  secondaryCta,
  imageLabel = "Photography placeholder",
  imageUrl,
  videoUrl,
  highlights,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  if (variant === "centered") {
    return (
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/70 via-white to-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <motion.div
            initial={shouldReduceMotion ? false : fadeUp.initial}
            animate={shouldReduceMotion ? undefined : fadeUp.animate}
            transition={fadeUp.transition}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {title}
            </h1>
            <p className="text-base leading-7 text-slate-600 md:text-lg">
              {description}
            </p>
            {highlights?.length ? (
              <div className="flex flex-wrap justify-center gap-2 text-xs text-brand-700">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/70 via-white to-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={shouldReduceMotion ? false : fadeUp.initial}
          animate={shouldReduceMotion ? undefined : fadeUp.animate}
          transition={fadeUp.transition}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {title}
          </h1>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
          {highlights?.length ? (
            <div className="flex flex-wrap gap-2 text-xs text-brand-700">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-72 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-brand-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
        >
          {videoUrl ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster={imageUrl}
              aria-label={imageLabel}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt={imageLabel}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.18),transparent_60%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          <div className="relative flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.3em] text-white">
            {imageUrl || videoUrl ? "" : imageLabel}
          </div>
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white">
              ▶
            </span>
            {videoUrl ? "Preview reel" : "Image preview"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
