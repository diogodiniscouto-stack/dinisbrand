"use client";

import { motion } from "framer-motion";
import { ToolHeader } from "./ToolHeader";
import { realityCheck } from "@/lib/toolkit";
import { Sparkle } from "@/components/Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function RealityCheck() {
  return (
    <div>
      <ToolHeader
        index="01 · Reality Check"
        title="The Ecommerce Reality Check"
        description="Should you even start an ecommerce brand? An honest look before you invest your time and money."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-5"
      >
        {realityCheck.map((item, i) => (
          <motion.article
            key={item.q}
            variants={fadeUp}
            className="rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft sm:p-7"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
                  {item.q}
                </h2>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-neutral-600">
                  {item.a}
                </p>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Callout */}
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent to-[#2E48E6] p-8 text-center shadow-card sm:p-10"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] opacity-50" />
          <div className="relative">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Sparkle className="h-5 w-5" />
            </span>
            <p className="mx-auto mt-4 max-w-lg text-balance text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
              If you&apos;re still excited after reading this... keep going.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
