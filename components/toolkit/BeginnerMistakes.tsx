"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToolHeader } from "./ToolHeader";
import { LessonEnd } from "./LessonEnd";
import { DinisNote } from "./DinisNote";
import { mistakes } from "@/lib/toolkit";
import { AlertTriangle, Check, ArrowRight, ArrowUpRight } from "@/components/Icons";
import { cn } from "@/lib/utils";

const LINKEDIN = "https://www.linkedin.com/in/diogo-dinis-a16bb1188/";

const knows = [
  "if ecommerce is right for you",
  "what to build",
  "how to validate it",
  "where to find suppliers",
  "what to do before launching",
];

export function BeginnerMistakes() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <ToolHeader
        index="07 · Mistakes"
        title="12 Mistakes I Wish Someone Had Told Me"
        description="The costly errors I learned the hard way. Finish here, and you'll avoid what kills most brands. Tap a card to expand."
      />

      <div className="mb-5">
        <DinisNote variant="mistake">
          Beginners spend more time choosing a logo than choosing a market. Pick
          the market first, everything else is downstream of that.
        </DinisNote>
      </div>

      <div className="flex flex-col gap-2.5">
        {mistakes.map((m, i) => {
          const isOpen = open === i;
          return (
            <div
              key={m.title}
              className={cn(
                "overflow-hidden rounded-3xl border bg-white shadow-soft transition-colors",
                isOpen ? "border-accent/30" : "border-neutral-200/70",
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-4 p-5 text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-sm font-semibold text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                  {m.title}
                </span>
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-transform duration-300",
                    isOpen && "rotate-45 border-accent/30 text-accent",
                  )}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="grid gap-3 px-5 pb-5 sm:grid-cols-2">
                      <div className="rounded-2xl border border-red-100 bg-red-50/50 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                          <AlertTriangle className="h-4 w-4" />
                          Why it&apos;s dangerous
                        </div>
                        <p className="mt-2 text-[0.92rem] leading-relaxed text-neutral-600">
                          {m.why}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                          <Check className="h-4 w-4" strokeWidth={2.5} />
                          How to avoid it
                        </div>
                        <p className="mt-2 text-[0.92rem] leading-relaxed text-neutral-600">
                          {m.fix}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Closing — the conversion moment */}
      <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-neutral-950 p-8 shadow-float sm:p-12">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/25 blur-[100px]" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            You&apos;re ready
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
            You now know:
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {knows.map((k) => (
              <li key={k} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[0.98rem] font-medium text-white/85">{k}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
            But knowing the steps isn&apos;t the same as building a successful
            brand. The only question left: do you want to figure it out alone, or
            build it with me?
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.98rem] font-semibold text-neutral-900 shadow-soft transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98]"
            >
              Apply for 1:1 Mentorship
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/toolkit/next-steps"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-[0.98rem] font-semibold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
            >
              Explore The Profitable Brand Roadmap
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      <LessonEnd takeaway="avoid the 12 mistakes that kill most brands" />
    </div>
  );
}
