"use client";

import { ToolHeader } from "./ToolHeader";
import { resources } from "@/lib/toolkit";
import { ArrowUpRight } from "@/components/Icons";

// Deterministic soft tint per logo monogram.
const tints = [
  "bg-blue-50 text-blue-600",
  "bg-amber-50 text-amber-600",
  "bg-emerald-50 text-emerald-600",
  "bg-violet-50 text-violet-600",
  "bg-rose-50 text-rose-600",
  "bg-sky-50 text-sky-600",
];

export function ResourceLibrary() {
  return (
    <div>
      <ToolHeader
        index="07 · Directory"
        title="Resource Library"
        description="The tools every ecommerce founder should have bookmarked, sourcing, design, AI, marketing and research, all in one place."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r, i) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold ${tints[i % tints.length]}`}
              >
                {r.name.charAt(0)}
              </span>
              <ArrowUpRight className="h-4 w-4 text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <h3 className="text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                {r.name}
              </h3>
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[0.62rem] font-medium uppercase tracking-wide text-neutral-500">
                {r.category}
              </span>
            </div>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-neutral-500">
              {r.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
