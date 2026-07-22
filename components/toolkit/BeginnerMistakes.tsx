"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToolHeader } from "./ToolHeader";
import { mistakes } from "@/lib/toolkit";
import { AlertTriangle, Check } from "@/components/Icons";
import { cn } from "@/lib/utils";

export function BeginnerMistakes() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <ToolHeader
        index="07 · Mistakes"
        title="12 Mistakes That Kill Ecommerce Brands"
        description="The costly errors almost every beginner makes. Avoid these and you're already ahead of most. Tap a card to expand."
      />

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
    </div>
  );
}
