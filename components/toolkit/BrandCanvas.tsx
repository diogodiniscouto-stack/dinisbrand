"use client";

import { ToolHeader } from "./ToolHeader";
import { canvasBlocks } from "@/lib/toolkit";
import { useLocalState } from "@/lib/useLocalState";
import { cn } from "@/lib/utils";

type CanvasState = Record<string, string>;

const initial: CanvasState = Object.fromEntries(
  canvasBlocks.map((b) => [b.key, ""]),
);

export function BrandCanvas() {
  const [state, setState] = useLocalState<CanvasState>(
    "toolkit:canvas",
    initial,
  );

  function update(key: string, value: string) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="print-full">
      <ToolHeader
        index="02 · Framework"
        title="Brand Positioning Canvas"
        description="Define the twelve building blocks of your brand on one editable page. Fill each block, print it to A4, and keep it where the whole team can see it."
        printable
        onReset={() => setState(initial)}
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {canvasBlocks.map((block) => (
          <div
            key={block.key}
            className={cn(
              "print-break flex flex-col rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-colors focus-within:border-accent/40",
              block.span === 2 && "sm:col-span-2",
            )}
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-[0.98rem] font-semibold tracking-tight text-neutral-900">
                {block.title}
              </h3>
              <span className="text-[0.72rem] text-neutral-400">
                {block.hint}
              </span>
            </div>
            <textarea
              value={state[block.key] ?? ""}
              onChange={(e) => update(block.key, e.target.value)}
              placeholder={block.placeholder}
              rows={block.span === 2 ? 3 : 4}
              className="mt-3 w-full flex-1 resize-none bg-transparent text-[0.95rem] leading-relaxed text-neutral-800 outline-none placeholder:text-neutral-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
