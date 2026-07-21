"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { toolkitNav } from "./ToolkitSidebar";
import {
  ArrowRight,
  ArrowUpRight,
  Linkedin,
  Map,
  Calendar,
  MessageSquare,
  Store,
  Compass,
  Box,
  TrendingUp,
  Layers,
} from "@/components/Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const LINKEDIN = "https://www.linkedin.com/in/diogo-dinis-a16bb1188/";

const descriptions: Record<string, string> = {
  "Product Validation": "Score any idea across 6 factors before you commit.",
  "Brand Canvas": "Define your positioning on one editable page.",
  "Supplier Templates": "Copy-paste outreach emails that get replies.",
  "Shopify Checklist": "Every box to tick before you launch.",
  "AI Prompts": "A searchable library of ecommerce prompts.",
  "Profit Calculator": "Know your margins and break-even ROAS.",
  "Resource Library": "The tools every founder should bookmark.",
};

const ztbStats = [
  { value: "15", label: "Modules" },
  { value: "72", label: "Frameworks" },
  { value: "40", label: "Templates" },
];

const mentorship = [
  { icon: Map, label: "Personal roadmap" },
  { icon: Calendar, label: "Weekly calls" },
  { icon: MessageSquare, label: "Unlimited feedback" },
  { icon: Store, label: "Store reviews" },
  { icon: Compass, label: "Brand strategy" },
  { icon: Box, label: "Supplier sourcing" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Layers, label: "Scaling" },
];

export function Dashboard() {
  const tools = toolkitNav.filter((t) => t.href !== "/toolkit");

  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-16"
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
          Free frameworks, real-world systems and 1:1 guidance to help you
          launch a profitable ecommerce brand.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#tools"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
          >
            Explore the free tools
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-800 shadow-soft transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.98]"
          >
            <Linkedin className="h-4 w-4 text-accent" />
            Work with me 1:1
          </a>
        </div>
      </motion.div>

      {/* Tools grid */}
      <div id="tools" className="scroll-mt-24">
        <motion.div variants={fadeUp} className="mb-5 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Free forever
            </span>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-neutral-900">
              Your free tools
            </h2>
          </div>
        </motion.div>
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
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-neutral-500 transition-colors group-hover:text-accent">
                  Open
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Learn from someone doing it */}
      <motion.section
        variants={fadeUp}
        className="rounded-[2rem] border border-neutral-200/70 bg-white p-8 shadow-soft sm:p-10"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Identity */}
          <div className="flex shrink-0 items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-900 text-2xl font-semibold text-white shadow-soft">
              D
            </span>
            <div>
              <div className="text-base font-semibold tracking-tight text-neutral-900">
                Diogo Dinis
              </div>
              <div className="text-sm text-neutral-500">Founder, DinisBrands</div>
            </div>
          </div>

          {/* Statement */}
          <div className="flex-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Learn from someone doing it
            </span>
            <p className="mt-3 text-2xl font-semibold leading-[1.15] tracking-tight text-neutral-900 sm:text-[1.7rem]">
              I don&apos;t teach ecommerce. I build brands.
            </p>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-neutral-500">
              Every framework inside Zero to Brand™ comes from real projects,
              real launches and real mistakes. When you&apos;re ready, you can
              work directly with me through 1:1 mentorship.
            </p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
            >
              <Linkedin className="h-4 w-4" />
              Learn More
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Zero to Brand as the method */}
      <motion.section
        variants={fadeUp}
        className="relative overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-neutral-950 p-8 shadow-float sm:p-10"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            The system I use with founders
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
            Zero to Brand™
          </h2>
          <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-white/60">
            The exact roadmap I use inside my mentorship. Not a course, a method.
          </p>

          <div className="mt-8 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03] py-6">
            {ztbStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work With Me */}
      <motion.section variants={fadeUp} className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Work With Me
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tighter text-neutral-900 sm:text-4xl">
            Apply for 1:1 Mentorship
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-neutral-500">
            Work directly with me to build and scale your brand, using the exact
            system, not another course. Limited spots, selective by application.
          </p>
        </div>

        <motion.ul
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {mentorship.map((m) => (
            <motion.li
              key={m.label}
              variants={fadeUp}
              className="group flex flex-col gap-3 rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 text-neutral-900 transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/[0.06] group-hover:text-accent">
                <m.icon className="h-[1.15rem] w-[1.15rem]" />
              </span>
              <span className="text-[0.92rem] font-semibold tracking-tight text-neutral-900">
                {m.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-gradient-to-br from-accent to-[#2E48E6] p-8 shadow-card sm:p-10">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] opacity-50" />
          <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Ready to build with me?
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/75">
                Send me a message on LinkedIn and tell me about your brand. If
                it&apos;s a fit, we start.
              </p>
            </div>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-accent shadow-soft transition-all duration-300 hover:bg-neutral-50 active:scale-[0.98]"
            >
              <Linkedin className="h-4 w-4" />
              Apply for 1:1 Mentorship
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
