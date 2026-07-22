"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { toolkitNav } from "./ToolkitSidebar";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const descriptions: Record<string, string> = {
  "Ecommerce Reality Check": "Should you even start? An honest look before you invest.",
  "Beginner Roadmap": "The exact sequence from idea to first sales.",
  "Product Validation Framework": "Score any product before you commit.",
  "Product Research Resources": "The tools I use to find products and suppliers.",
  "AI Prompt Library": "The prompts I reach for every day.",
  "Shopify Launch Checklist": "Set your store up like a pro before ads.",
  "Beginner Mistakes": "The 12 errors that kill most brands.",
};

export function Dashboard() {
  const pages = toolkitNav.filter((t) => t.href !== "/toolkit");

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
          A premium onboarding for future founders. This kit won&apos;t teach you
          everything, its job is to take you from &ldquo;I have no idea where to
          start&rdquo; to &ldquo;I understand the journey and know my next
          steps.&rdquo; Work through it in order.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/toolkit/reality-check"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
          >
            Start with the Reality Check
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/toolkit/next-steps"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 shadow-soft transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50"
          >
            See what comes next
          </Link>
        </div>
      </motion.div>

      {/* Pages grid */}
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

      {/* Bottom bridge */}
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-neutral-950 p-8 shadow-card sm:p-10"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              Finished the kit?
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
              Continue with the complete roadmap or work with me directly.
            </p>
          </div>
          <Link
            href="/toolkit/next-steps"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-soft transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98]"
          >
            See your next steps
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
