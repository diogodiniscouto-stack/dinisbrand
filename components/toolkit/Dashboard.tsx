"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { toolkitNav } from "./ToolkitSidebar";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const descriptions: Record<string, string> = {
  "Product Validation": "Score any idea across 6 factors before you commit.",
  "Brand Canvas": "Define your positioning on one editable page.",
  "Supplier Templates": "Copy-paste outreach emails that get replies.",
  "Shopify Checklist": "Every box to tick before you launch.",
  "AI Prompts": "A searchable library of ecommerce prompts.",
  "Profit Calculator": "Know your margins and break-even ROAS.",
  "Resource Library": "The tools every founder should bookmark.",
};

export function Dashboard() {
  const tools = toolkitNav.filter((t) => t.href !== "/toolkit");

  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10"
    >
      {/* Hero */}
      <motion.div variants={fadeUp} className="flex flex-col gap-5">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Founder Toolkit
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tightest text-neutral-900 sm:text-5xl">
          Welcome to the Founder Toolkit.
        </h1>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-neutral-500">
          Everything you need to start building your ecommerce brand — for free.
          Editable frameworks, interactive tools and copy-paste resources, all
          in one place.
        </p>
        <div>
          <Link
            href="/#zero-to-brand"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-800 shadow-soft transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.98]"
          >
            Unlock the Complete Zero to Brand™ Roadmap
            <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>

      {/* Tools grid */}
      <motion.ul
        variants={staggerContainer(0.06)}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {tools.map((tool, i) => (
          <motion.li key={tool.href} variants={fadeUp}>
            <Link
              href={tool.href}
              className="group flex h-full flex-col rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-900 shadow-soft transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/[0.06] group-hover:text-accent">
                  <tool.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-neutral-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                {tool.label}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-neutral-500">
                {descriptions[tool.label]}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-neutral-500 transition-colors group-hover:text-neutral-900">
                Open
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Bottom CTA */}
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
              Ready to go from zero to brand?
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
              This toolkit is the foundation. The complete roadmap takes you all
              the way — 15 modules from idea to a brand that runs like a company.
            </p>
          </div>
          <Link
            href="/#zero-to-brand"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-soft transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98]"
          >
            Explore the roadmap
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
