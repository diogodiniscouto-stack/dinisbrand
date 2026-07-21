"use client";

import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import {
  Play,
  FileText,
  Target,
  Compass,
  Store,
  Lock,
  Check,
  ArrowRight,
  ArrowUpRight,
  Calendar,
} from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

type FreeModule = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tag: string;
  title: string;
  desc: string;
  cta: string;
  highlight?: boolean;
};

/** The 5 free modules the visitor unlocks by joining. */
const freeModules: FreeModule[] = [
  {
    icon: Play,
    tag: "Start here",
    title: "Lesson 1",
    desc: "The founder mindset and how the Zero to Brand™ system works, end to end.",
    cta: "Start lesson",
    highlight: true,
  },
  {
    icon: FileText,
    tag: "Toolkit",
    title: "Free Templates",
    desc: "Plug-and-play templates so you never start from a blank page.",
    cta: "Open templates",
  },
  {
    icon: Target,
    tag: "Validate",
    title: "Niche Validation",
    desc: "Pressure-test demand before you spend a cent on product or ads.",
    cta: "Open module",
  },
  {
    icon: Compass,
    tag: "Positioning",
    title: "Brand Positioning",
    desc: "Find the angle that makes your brand the obvious choice.",
    cta: "Open module",
  },
  {
    icon: Store,
    tag: "Launch",
    title: "Shopify Checklist",
    desc: "A launch-ready store checklist you can follow step by step.",
    cta: "Open checklist",
  },
];

/** The complete 15-module roadmap — locked until unlocked. */
const roadmap = [
  "Entrepreneur Foundation",
  "Find Your Niche",
  "Product Research",
  "Suppliers",
  "Branding",
  "Shopify Store",
  "Content",
  "Customer Acquisition",
  "Retention",
  "Analytics",
  "Operations",
  "AI",
  "Finance",
  "CEO Dashboard",
  "Build With Me",
];

export function WelcomeContent() {
  return (
    <>
      {/* Unlock banner */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-neutral-900/5 bg-neutral-950 text-white">
        <Container className="flex items-center justify-center gap-x-4 gap-y-1 px-6 py-2.5 text-center">
          <p className="text-sm font-medium tracking-tight">
            <span className="text-white/60">Want the complete roadmap?</span>{" "}
            <Link
              href="#unlock"
              className="group inline-flex items-center gap-1 font-semibold text-white underline-offset-4 hover:underline"
            >
              Unlock all 15 modules
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </p>
        </Container>
      </div>

      {/* Minimal header */}
      <header className="fixed inset-x-0 top-[2.7rem] z-40">
        <Container className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white shadow-soft">
              D
            </span>
            <span className="text-[0.95rem] font-semibold tracking-tight text-neutral-900">
              Diogo Dinis
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full px-3.5 py-2 text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            ← Back to home
          </Link>
        </Container>
      </header>

      <main className="pt-32 sm:pt-36">
        {/* Welcome hero */}
        <section className="relative overflow-hidden pb-8">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-dotgrid mask-fade-b opacity-60" />
            <div className="absolute left-1/2 top-[-15%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />
          </div>
          <Container>
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
              className="mx-auto flex max-w-2xl flex-col items-center text-center"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium tracking-tight text-emerald-700"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                You&apos;re in — free access unlocked
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tightest text-neutral-900 sm:text-5xl"
              >
                Welcome to Zero to Brand™
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-neutral-500"
              >
                Start with Lesson 1 and work through your free starter path —
                everything you need to validate an idea and lay the foundation of
                a real, profitable brand.
              </motion.p>

              {/* Progress */}
              <motion.div
                variants={fadeUp}
                className="mt-8 w-full max-w-sm rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-soft"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-neutral-700">
                    Your access
                  </span>
                  <span className="font-semibold text-neutral-900">
                    5 <span className="text-neutral-400">/ 15 modules</span>
                  </span>
                </div>
                <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "33.33%" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Free starter path */}
        <section className="py-16 sm:py-20">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 flex items-end justify-between gap-4"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Free starter path
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                  Your free modules
                </h2>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.08, 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {freeModules.map((m) => (
                <motion.div
                  key={m.title}
                  variants={fadeUp}
                  className={`group flex flex-col rounded-3xl border p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                    m.highlight
                      ? "border-primary/30 bg-primary/[0.03] sm:col-span-2 lg:col-span-1"
                      : "border-neutral-200/70 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-soft ${
                        m.highlight
                          ? "border-primary/20 bg-primary/10 text-primary"
                          : "border-neutral-100 bg-neutral-50 text-neutral-900"
                      }`}
                    >
                      <m.icon className="h-[1.35rem] w-[1.35rem]" />
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-emerald-600">
                      Free
                    </span>
                  </div>
                  <span className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
                    {m.tag}
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-neutral-900">
                    {m.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-neutral-500">
                    {m.desc}
                  </p>
                  <button
                    type="button"
                    className={`mt-5 inline-flex items-center gap-1.5 self-start rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${
                      m.highlight
                        ? "bg-neutral-900 text-white hover:bg-neutral-800"
                        : "border border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50"
                    }`}
                  >
                    {m.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Unlock the complete roadmap */}
        <section id="unlock" className="scroll-mt-32 py-16 sm:py-24">
          <Container>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200/70 bg-neutral-950 px-6 py-14 shadow-float sm:px-12 sm:py-16 lg:px-16">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-[100px]" />
                <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:26px_26px] opacity-40" />
              </div>

              <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
                {/* Copy */}
                <motion.div
                  variants={staggerContainer(0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <motion.span
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-tight text-white/70"
                  >
                    <Lock className="h-3.5 w-3.5 text-primary-300" /> 10 modules
                    locked
                  </motion.span>
                  <motion.h2
                    variants={fadeUp}
                    className="mt-6 text-balance text-3xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-4xl"
                  >
                    Want the complete roadmap?
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/60 sm:text-lg"
                  >
                    Your free path lays the foundation. Unlock all 15 modules to
                    get the complete, structured system — from suppliers and
                    content to retention, finance and running your brand like a
                    real company.
                  </motion.p>
                  <motion.div
                    variants={fadeUp}
                    className="mt-8 flex flex-col gap-3 sm:flex-row"
                  >
                    {/* TODO: point at your real checkout / roadmap purchase URL */}
                    <Button
                      href="/#zero-to-brand"
                      size="lg"
                      className="group bg-white text-neutral-900 hover:bg-neutral-100"
                    >
                      Unlock all 15 modules
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                    <Button
                      href="/#mentorship"
                      size="lg"
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      Explore 1:1 mentorship
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Module list */}
                <motion.ul
                  variants={staggerContainer(0.04, 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid grid-cols-1 gap-2 sm:grid-cols-2"
                >
                  {roadmap.map((mod, i) => {
                    const unlocked = i < 5;
                    return (
                      <motion.li
                        key={mod}
                        variants={fadeUp}
                        className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 ${
                          unlocked
                            ? "border-white/[0.08] bg-white/[0.04]"
                            : "border-white/[0.05] bg-white/[0.015]"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-semibold ${
                            unlocked
                              ? "bg-primary text-white"
                              : "bg-white/10 text-white/40"
                          }`}
                        >
                          {unlocked ? (
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          ) : (
                            <Lock className="h-3 w-3" />
                          )}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            unlocked ? "text-white/85" : "text-white/45"
                          }`}
                        >
                          {mod}
                        </span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Mentorship teaser */}
        <section className="pb-24 sm:pb-32">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-soft sm:flex-row sm:p-10"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-900">
                  <Calendar className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                    Prefer to build with me directly?
                  </h3>
                  <p className="mt-1 max-w-md text-[0.95rem] leading-relaxed text-neutral-500">
                    1:1 mentorship includes the full roadmap, weekly calls and
                    line-by-line reviews of your store.
                  </p>
                </div>
              </div>
              <Button href="/#mentorship" size="lg" className="group shrink-0">
                Apply for mentorship
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </motion.div>
          </Container>
        </section>
      </main>
    </>
  );
}
