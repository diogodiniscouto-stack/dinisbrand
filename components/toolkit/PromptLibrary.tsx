"use client";

import { useMemo, useState } from "react";
import { ToolHeader } from "./ToolHeader";
import { ToolkitPageNav } from "./ToolkitPageNav";
import { CopyButton } from "./CopyButton";
import { prompts, promptCategories } from "@/lib/toolkit";
import { Search } from "@/components/Icons";
import { cn } from "@/lib/utils";

export function PromptLibrary() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return prompts.filter((p) => {
      const matchesCat = active === "All" || p.category === active;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.prompt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, active]);

  const categories = ["All", ...promptCategories];

  return (
    <div>
      <ToolHeader
        index="05 · Library"
        title="100 AI Prompts I Actually Use"
        description="The prompts I reach for daily, for research, branding, copy, ads and content. Search, filter, and copy in one click."
      />

      <div className="relative mb-4">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search prompts…"
          className="h-12 w-full rounded-full border border-neutral-200 bg-white pl-11 pr-4 text-[0.95rem] text-neutral-900 shadow-soft outline-none transition-all placeholder:text-neutral-400 focus:border-accent/40 focus:ring-4 focus:ring-accent/10"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
              active === cat
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-neutral-200 bg-neutral-50/50 py-16 text-center">
          <p className="text-sm text-neutral-400">No prompts match “{query}”.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-accent/[0.08] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-accent">
                  {p.category}
                </span>
                <CopyButton text={p.prompt} variant="subtle" />
              </div>
              <h3 className="mt-3.5 text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 rounded-2xl bg-neutral-50/70 p-3.5 text-[0.9rem] leading-relaxed text-neutral-600">
                {p.prompt}
              </p>
            </div>
          ))}
        </div>
      )}

      <p className="mt-6 text-center text-sm text-neutral-400">
        {filtered.length} prompt{filtered.length === 1 ? "" : "s"}
      </p>

      <ToolkitPageNav />
    </div>
  );
}
