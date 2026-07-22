"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Map, Calendar } from "@/components/Icons";
import { CheckoutButton } from "./CheckoutButton";
import { fadeUp, staggerContainer } from "@/lib/motion";

const MENTORSHIP_URL = "https://www.linkedin.com/in/diogo-dinis-a16bb1188/";

const roadmapIncludes = [
  "15 Modules",
  "70+ Frameworks",
  "40+ Templates",
  "Lifetime updates",
  "Community access",
];

const mentorshipIncludes = [
  "Weekly strategy calls",
  "Unlimited feedback",
  "Personal roadmap",
  "Store reviews",
  "Launch support",
  "Direct access",
];

export function NextSteps() {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="h-2.5 w-2.5" strokeWidth={3} />
          </span>
          Starter Kit complete
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tightest text-neutral-900 sm:text-5xl">
          Ready to Build Your Brand?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-neutral-500">
          You&apos;ve just completed the Profitable Brand Starter Kit. Now choose
          how you want to continue.
        </p>
      </motion.div>

      {/* Pricing cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Card 1 */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col rounded-[2rem] border border-neutral-200/70 bg-white p-8 shadow-card"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Map className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
                The Profitable Brand Roadmap
              </h2>
              <p className="text-sm text-neutral-500">
                Build your brand at your own pace.
              </p>
            </div>
          </div>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-neutral-600">
            The complete operating roadmap I use with founders, from idea to
            profitable ecommerce brand.
          </p>
          <ul className="mt-6 flex flex-1 flex-col gap-2.5">
            {roadmapIncludes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[0.95rem] font-medium text-neutral-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CheckoutButton />
            <p className="mt-3 text-center text-xs text-neutral-400">
              One-time payment · Lifetime access · Secure checkout by Stripe
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeUp}
          className="relative flex flex-col overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-neutral-950 p-8 shadow-float"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-[90px]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          </div>
          <div className="relative flex flex-1 flex-col">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent-300">
                <Calendar className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-white">
                  1:1 Mentorship
                </h2>
                <p className="text-sm text-white/50">Build your brand with me.</p>
              </div>
            </div>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-white/70">
              Work directly with me to build, launch and scale your ecommerce
              brand with personalised guidance and accountability.
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-2.5">
              {mentorshipIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-300">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] font-medium text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={MENTORSHIP_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.98rem] font-semibold text-neutral-900 shadow-soft transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98]"
            >
              Apply for Mentorship
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
