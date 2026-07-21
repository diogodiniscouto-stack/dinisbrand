"use client";

import { Printer, RotateCcw } from "@/components/Icons";

/**
 * Shared header for every tool page — number, title, description, and
 * optional print / reset actions (hidden when printing).
 */
export function ToolHeader({
  index,
  title,
  description,
  onReset,
  printable = false,
}: {
  index: string;
  title: string;
  description: string;
  onReset?: () => void;
  printable?: boolean;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {index}
        </span>
        <h1 className="mt-2 text-3xl font-semibold leading-[1.1] tracking-tighter text-neutral-900 sm:text-[2.4rem]">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-neutral-500">
          {description}
        </p>
      </div>

      {(printable || onReset) && (
        <div className="print-hide flex shrink-0 items-center gap-2">
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-sm font-medium text-neutral-600 shadow-soft transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          )}
          {printable && (
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-2 text-sm font-medium text-white shadow-soft transition-colors hover:bg-neutral-800"
            >
              <Printer className="h-4 w-4" />
              Print / PDF
            </button>
          )}
        </div>
      )}
    </div>
  );
}
