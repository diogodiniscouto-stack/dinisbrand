"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toolkitNav } from "./ToolkitSidebar";
import { Check, ArrowRight, Grid } from "@/components/Icons";
import { cn } from "@/lib/utils";

/**
 * Closes every lesson with an action: an optional "before you move on"
 * checklist, a "lesson complete" micro-win, and a continue button to the next
 * lesson (or back to the dashboard on the last one).
 */
export function LessonEnd({
  takeaway,
  action,
}: {
  takeaway: string;
  action?: string[];
}) {
  const pathname = usePathname();
  const lessons = toolkitNav.filter((t) => t.href !== "/toolkit");
  const idx = lessons.findIndex((l) => l.href === pathname);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null;

  const hasAction = !!action && action.length > 0;
  const [checked, setChecked] = useState<boolean[]>(
    () => (hasAction ? action!.map(() => false) : []),
  );
  const allDone = !hasAction || checked.every(Boolean);

  return (
    <div className="print-hide mt-14 flex flex-col gap-4">
      {hasAction && (
        <div className="rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Before you move on
          </h3>
          <ul className="mt-4 flex flex-col gap-1.5">
            {action!.map((item, i) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() =>
                    setChecked((c) => c.map((v, j) => (j === i ? !v : v)))
                  }
                  className="flex w-full items-start gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-neutral-50"
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                      checked[i]
                        ? "border-accent bg-accent text-white"
                        : "border-neutral-300 bg-white text-transparent",
                    )}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span
                    className={cn(
                      "text-[0.95rem] leading-relaxed transition-colors",
                      checked[i] ? "text-neutral-400" : "text-neutral-700",
                    )}
                  >
                    {item}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Micro-win + continue */}
      <div
        className={cn(
          "flex flex-col gap-4 rounded-3xl border p-6 shadow-soft transition-colors sm:flex-row sm:items-center sm:justify-between",
          allDone
            ? "border-emerald-200 bg-emerald-50/50"
            : "border-neutral-200/70 bg-white",
        )}
      >
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
              allDone
                ? "bg-emerald-500 text-white"
                : "bg-neutral-100 text-neutral-400",
            )}
          >
            <Check className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <div>
            <div className="text-sm font-semibold text-neutral-900">
              {allDone
                ? hasAction
                  ? "Great. You're ready."
                  : "Lesson complete"
                : "Almost there"}
            </div>
            <p className="mt-0.5 text-sm text-neutral-500">
              You now know how to {takeaway}.
              {next ? ` Up next: ${next.label}.` : ""}
            </p>
          </div>
        </div>
        <Link
          href={next ? next.href : "/toolkit"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
        >
          {next ? "Continue" : "Back to the Dashboard"}
          {next ? (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          ) : (
            <Grid className="h-4 w-4" />
          )}
        </Link>
      </div>

      {prev && (
        <Link
          href={prev.href}
          className="group inline-flex items-center gap-2 self-start text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-700"
        >
          <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to {prev.label}
        </Link>
      )}
    </div>
  );
}
