"use client";

import { ToolHeader } from "./ToolHeader";
import { ToolkitPageNav } from "./ToolkitPageNav";
import { validationBlocks } from "@/lib/toolkit";
import { useLocalState } from "@/lib/useLocalState";
import { cn } from "@/lib/utils";

type State = {
  product: string;
  scores: number[];
  notes: string[];
};

const initial: State = {
  product: "",
  scores: validationBlocks.map(() => 5),
  notes: validationBlocks.map(() => ""),
};

function verdict(total: number) {
  if (total >= 34) return { label: "Excellent", cls: "bg-emerald-50 text-emerald-600 border-emerald-200", note: "Rare opportunity. Build with conviction." };
  if (total >= 27) return { label: "Good", cls: "bg-accent/10 text-accent border-accent/20", note: "Strong candidate. Move to sourcing." };
  if (total >= 20) return { label: "Average", cls: "bg-amber-50 text-amber-600 border-amber-200", note: "Workable, but fix the weak dimensions first." };
  return { label: "Weak", cls: "bg-red-50 text-red-600 border-red-200", note: "Reconsider, the fundamentals aren't there yet." };
}

export function ValidationFramework() {
  const [state, setState] = useLocalState<State>("toolkit:validation-fw", initial);
  const total = state.scores.reduce((a, b) => a + b, 0);
  const v = verdict(total);

  function setScore(i: number, val: number) {
    setState((p) => {
      const scores = [...p.scores];
      scores[i] = val;
      return { ...p, scores };
    });
  }
  function setNote(i: number, val: string) {
    setState((p) => {
      const notes = [...p.notes];
      notes[i] = val;
      return { ...p, notes };
    });
  }

  return (
    <div className="print-full">
      <ToolHeader
        index="03 · Framework"
        title="Validate Before You Waste Money"
        description="Don't guess, score. Rate your idea across the factors that decide whether a brand is worth building, before you spend a cent. Everything saves automatically."
        printable
        onReset={() => setState(initial)}
      />

      {/* Product input */}
      <div className="print-break mb-4 rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft">
        <label className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Product
        </label>
        <input
          type="text"
          value={state.product}
          onChange={(e) => setState((p) => ({ ...p, product: e.target.value }))}
          placeholder="What product are you validating?"
          className="mt-2 h-11 w-full rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 text-[1rem] font-medium text-neutral-900 outline-none transition-colors placeholder:text-neutral-300 focus:border-accent/40 focus:bg-white focus:ring-2 focus:ring-accent/10"
        />
      </div>

      {/* Flow of scored blocks */}
      <div className="flex flex-col gap-3">
        {validationBlocks.map((block, i) => (
          <div key={block.key}>
            <div className="print-break rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                    {block.title}
                  </h2>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-neutral-500">
                    {block.hint}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-lg font-semibold text-neutral-900">
                  {state.scores[i]}
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={state.scores[i]}
                  onChange={(e) => setScore(i, Number(e.target.value))}
                  aria-label={`${block.title} score`}
                  className="accent-accent print-hide h-1.5 flex-1 cursor-pointer"
                />
                <input
                  type="text"
                  value={state.notes[i]}
                  onChange={(e) => setNote(i, e.target.value)}
                  placeholder="Notes…"
                  className="h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-sm text-neutral-800 outline-none transition-colors placeholder:text-neutral-300 focus:border-accent/40 focus:ring-2 focus:ring-accent/10 sm:w-56"
                />
              </div>
            </div>
            {i < validationBlocks.length - 1 && (
              <div aria-hidden className="flex justify-center py-1 text-neutral-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Final score */}
      <div className="print-break mt-5 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-neutral-200/70 bg-neutral-950 p-8 text-center shadow-float sm:flex-row sm:text-left">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
            Final Score
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-5xl font-semibold tracking-tighter text-white">
              {total}
            </span>
            <span className="text-lg font-medium text-white/40">/ 40</span>
          </div>
        </div>
        <div className="sm:text-right">
          <span className={cn("inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold", v.cls)}>
            {v.label}
          </span>
          <p className="mt-2 max-w-xs text-sm text-white/60">{v.note}</p>
        </div>
      </div>

      <ToolkitPageNav />
    </div>
  );
}
