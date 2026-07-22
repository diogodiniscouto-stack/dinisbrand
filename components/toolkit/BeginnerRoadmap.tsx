"use client";

import { motion } from "framer-motion";
import { ToolHeader } from "./ToolHeader";
import { roadmapSteps } from "@/lib/toolkit";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function BeginnerRoadmap() {
  return (
    <div>
      <ToolHeader
        index="02 · Roadmap"
        title="The Beginner Roadmap"
        description="The exact sequence from an idea to your first sales. Follow it in order, each step builds on the last."
      />

      <motion.ol
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-2xl"
      >
        {/* Spine */}
        <span
          aria-hidden
          className="absolute left-[1.35rem] top-3 bottom-3 w-px bg-gradient-to-b from-accent/40 via-neutral-200 to-transparent"
        />

        {roadmapSteps.map((step, i) => (
          <motion.li
            key={step.title}
            variants={fadeUp}
            className="relative mb-3 flex gap-5 last:mb-0"
          >
            <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-900 shadow-soft">
              {i + 1}
            </span>
            <div className="flex-1 rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
                Step {i + 1}
              </div>
              <h2 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900">
                {step.title}
              </h2>
              <p className="mt-1.5 text-[0.97rem] leading-relaxed text-neutral-500">
                {step.text}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
