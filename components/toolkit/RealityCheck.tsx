"use client";

import { motion } from "framer-motion";
import { ToolHeader } from "./ToolHeader";
import { LessonEnd } from "./LessonEnd";
import { DinisNote } from "./DinisNote";
import { realityCheck } from "@/lib/toolkit";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function RealityCheck() {
  return (
    <div>
      <ToolHeader
        index="01 · Reality Check"
        title="Is Ecommerce Right for You?"
        description="Before you invest a single euro, answer these honest questions. The goal is simple: remove the doubt."
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

        <motion.div variants={fadeUp}>
          <DinisNote variant="today">
            I&apos;d rather launch in 30 days than spend six months planning.
            Motion beats perfection, especially at the start.
          </DinisNote>
        </motion.div>
      </motion.div>

      <LessonEnd
        takeaway="decide whether ecommerce is the right path for you"
        action={[
          "I know roughly how much I can invest",
          "I know how many hours a week I can commit",
          "I'm prepared to give this 6 to 12 months",
        ]}
      />
    </div>
  );
}
