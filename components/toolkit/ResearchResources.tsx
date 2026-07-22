"use client";

import { motion } from "framer-motion";
import { ToolHeader } from "./ToolHeader";
import { LessonEnd } from "./LessonEnd";
import { researchGroups } from "@/lib/toolkit";
import { ArrowUpRight } from "@/components/Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const tints = [
  "bg-blue-50 text-blue-600",
  "bg-amber-50 text-amber-600",
  "bg-emerald-50 text-emerald-600",
  "bg-violet-50 text-violet-600",
];

export function ResearchResources() {
  return (
    <div>
      <ToolHeader
        index="04 · Resources"
        title="The Best Resources I Use"
        description="Now that you know what to look for, here are the exact tools I use to find products, vet suppliers, and study competitors."
      />

      <div className="flex flex-col gap-10">
        {researchGroups.map((group, gi) => (
          <div key={group.title}>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-400">
              {group.title}
            </h2>
            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {group.items.map((r, i) => (
                <motion.a
                  key={r.name}
                  variants={fadeUp}
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-semibold ${tints[(gi + i) % tints.length]}`}>
                    {r.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                      {r.name}
                    </h3>
                    <p className="mt-0.5 truncate text-sm text-neutral-500">
                      {r.desc}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400 transition-colors group-hover:border-accent/30 group-hover:text-accent">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <LessonEnd
        takeaway="find products, suppliers and competitors with the right tools"
        action={["I've bookmarked the tools I'll actually use"]}
      />
    </div>
  );
}
