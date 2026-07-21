"use client";

import { ToolHeader } from "./ToolHeader";
import { validationRows, validationBands } from "@/lib/toolkit";
import { useLocalState } from "@/lib/useLocalState";
import { cn } from "@/lib/utils";

type State = { scores: number[]; notes: string[] };

const initial: State = {
  scores: validationRows.map(() => 5),
  notes: validationRows.map(() => ""),
};

const toneStyles: Record<string, { bar: string; chip: string; ring: string }> = {
  red: { bar: "bg-red-400", chip: "bg-red-50 text-red-600 border-red-200", ring: "text-red-500" },
  amber: { bar: "bg-amber-400", chip: "bg-amber-50 text-amber-600 border-amber-200", ring: "text-amber-500" },
  blue: { bar: "bg-accent", chip: "bg-accent/10 text-accent border-accent/20", ring: "text-accent" },
  green: { bar: "bg-emerald-500", chip: "bg-emerald-50 text-emerald-600 border-emerald-200", ring: "text-emerald-500" },
};

export function ProductValidation() {
  const [state, setState] = useLocalState<State>("toolkit:validation", initial);

  const total = state.scores.reduce((a, b) => a + b, 0);
  const band =
    validationBands.find((b) => total >= b.min && total <= b.max) ??
    validationBands[0];
  const tone = toneStyles[band.tone];

  function setScore(i: number, value: number) {
    setState((prev) => {
      const scores = [...prev.scores];
      scores[i] = value;
      return { ...prev, scores };
    });
  }
  function setNote(i: number, value: string) {
    setState((prev) => {
      const notes = [...prev.notes];
      notes[i] = value;
      return { ...prev, notes };
    });
  }

  return (
    <div className="print-full">
      <ToolHeader
        index="01 · Framework"
        title="Product Validation Scorecard"
        description="Score any product idea across six make-or-break factors, then read the verdict. Rate each 1–10 and add your notes, everything saves automatically."
        printable
        onReset={() => setState(initial)}
      />

      {/* Table header (desktop) */}
      <div className="hidden grid-cols-[1.1fr_2fr_1.4fr_1.6fr] gap-4 border-b border-neutral-200 px-2 pb-3 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400 sm:grid">
        <span>Category</span>
        <span>What to evaluate</span>
        <span>Score (1–10)</span>
        <span>Notes</span>
      </div>

      {/* Rows */}
      <div className="flex flex-col divide-y divide-neutral-100">
        {validationRows.map((row, i) => (
          <div
            key={row.category}
            className="print-break grid grid-cols-1 gap-3 py-5 sm:grid-cols-[1.1fr_2fr_1.4fr_1.6fr] sm:items-center sm:gap-4 sm:px-2"
          >
            <div className="text-[0.98rem] font-semibold tracking-tight text-neutral-900">
              {row.category}
            </div>
            <div className="text-sm leading-relaxed text-neutral-500">
              {row.evaluate}
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={1}
                max={10}
                value={state.scores[i]}
                onChange={(e) => setScore(i, Number(e.target.value))}
                className="accent-accent print-hide h-1.5 flex-1 cursor-pointer"
                aria-label={`${row.category} score`}
              />
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-900">
                {state.scores[i]}
              </span>
            </div>
            <input
              type="text"
              value={state.notes[i]}
              onChange={(e) => setNote(i, e.target.value)}
              placeholder="Add a note…"
              className="h-9 w-full rounded-lg border border-neutral-200 bg-white px-3 text-sm text-neutral-800 outline-none transition-colors placeholder:text-neutral-300 focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
            />
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="print-break mt-8 grid gap-4 sm:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col items-center justify-center rounded-3xl border border-neutral-200/70 bg-white p-8 text-center shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Total Score
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-5xl font-semibold tracking-tighter text-neutral-900">
              {total}
            </span>
            <span className="text-lg font-medium text-neutral-300">/ 60</span>
          </div>
          <span
            className={cn(
              "mt-4 inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-semibold",
              tone.chip,
            )}
          >
            {band.label}
          </span>
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-neutral-200/70 bg-neutral-50/60 p-6 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Interpretation
          </div>
          <p className="mt-2 text-[1.02rem] font-medium text-neutral-900">
            {band.note}
          </p>
          <ul className="mt-4 flex flex-col gap-1.5 text-sm text-neutral-500">
            {validationBands.map((b) => (
              <li
                key={b.label}
                className={cn(
                  "flex items-center justify-between rounded-lg px-2 py-1",
                  b.label === band.label && "bg-white font-medium text-neutral-900 shadow-soft",
                )}
              >
                <span>{b.label}</span>
                <span className="tabular-nums text-neutral-400">
                  {b.min}–{b.max}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
