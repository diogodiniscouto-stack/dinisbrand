"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { toolkitNav } from "./ToolkitSidebar";
import { useToolkitProgress } from "@/lib/toolkitProgress";
import { Check, ArrowRight, ArrowUpRight } from "@/components/Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const descriptions: Record<string, string> = {
  "Is Ecommerce Right for You?": "Answer the honest questions before you invest a euro.",
  "The Road to First Sale": "The whole path from zero to first sale, on one visual page.",
  "Validate Before You Waste Money": "Score your idea before you spend a cent.",
  "The Best Resources I Use": "The exact tools I use to find products and suppliers.",
  "AI Prompt Library": "The prompts I reach for every day.",
  "Launch Without Regret": "Set your store up like a pro before ads.",
  "12 Mistakes to Avoid": "The errors that kill most brands, and how to dodge them.",
};

const meta = ["7 Lessons", "30–40 minutes", "Beginner Friendly", "Completely Free"];

const outcomes = [
  "A validated business idea",
  "A clear roadmap",
  "Product research skills",
  "Your launch plan",
];

export function Dashboard() {
  const pages = toolkitNav.filter((t) => t.href !== "/toolkit");
  const { percent, started, hydrated, next } = useToolkitProgress();
  const pct = hydrated ? percent : 0;

  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-12"
    >
      {/* Hero */}
      <motion.div variants={fadeUp} className="flex flex-col gap-5">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Free Starter Kit
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tightest text-neutral-900 sm:text-5xl">
          The Profitable Brand Starter Kit
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-neutral-500">
          Everything you need to go from &ldquo;I want to start a brand&rdquo; to
          &ldquo;I know exactly what to do next.&rdquo;
        </p>

        {/* Meta row */}
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {meta.map((m) => (
            <li key={m} className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-neutral-600">{m}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href="/toolkit/reality-check"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
          >
            Start the Starter Kit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#lessons"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 shadow-soft transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50"
          >
            What&apos;s inside?
          </a>
        </div>
      </motion.div>

      {/* Progress */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-4 rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-7"
      >
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              Progress
            </span>
            <span className="text-sm font-semibold text-neutral-900">{pct}%</span>
          </div>
          <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-accent transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        <Link
          href={hydrated && started ? next : "/toolkit/reality-check"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
        >
          {hydrated && started ? "Continue where you left off" : "Start Lesson 1"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      {/* Lessons grid */}
      <div id="lessons" className="scroll-mt-24">
        <motion.ul
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {pages.map((page, i) => (
            <motion.li key={page.href} variants={fadeUp}>
              <Link
                href={page.href}
                className="group flex h-full items-start gap-4 rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-900 shadow-soft transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/[0.06] group-hover:text-accent">
                  <page.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[0.66rem] font-semibold text-neutral-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                      {page.label}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                    {descriptions[page.label]}
                  </p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* After you finish */}
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-neutral-950 p-8 shadow-float sm:p-10"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
            After you finish the Starter Kit
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            You&apos;ll have:
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {outcomes.map((o) => (
              <li key={o} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[0.98rem] font-medium text-white/85">{o}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-white/60">
            But you&apos;ll still need a complete operating system to actually
            build your brand.
          </p>
          <Link
            href="/toolkit/next-steps"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.98rem] font-semibold text-neutral-900 shadow-soft transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98]"
          >
            See your next steps
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
