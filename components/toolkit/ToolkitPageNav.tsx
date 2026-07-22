"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toolkitNav } from "./ToolkitSidebar";
import { ArrowRight, Grid } from "@/components/Icons";

/** Prev / next navigation shown at the bottom of each Starter Kit lesson. */
export function ToolkitPageNav() {
  const pathname = usePathname();
  const lessons = toolkitNav.filter((t) => t.href !== "/toolkit");
  const idx = lessons.findIndex((l) => l.href === pathname);
  if (idx === -1) return null;

  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  return (
    <nav className="print-hide mt-14 flex flex-col gap-3 border-t border-neutral-100 pt-8 sm:flex-row sm:items-stretch sm:justify-between">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-1 items-center gap-3 rounded-2xl border border-neutral-200/70 bg-white px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
        >
          <ArrowRight className="h-4 w-4 rotate-180 text-neutral-400 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <div className="min-w-0 text-left">
            <div className="text-xs text-neutral-400">Previous</div>
            <div className="truncate text-sm font-semibold tracking-tight text-neutral-900">
              {prev.label}
            </div>
          </div>
        </Link>
      ) : (
        <span className="hidden flex-1 sm:block" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-1 items-center justify-end gap-3 rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-4 text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
        >
          <div className="min-w-0 text-right">
            <div className="text-xs text-white/50">Next lesson</div>
            <div className="truncate text-sm font-semibold tracking-tight">
              {next.label}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <Link
          href="/toolkit"
          className="group flex flex-1 items-center justify-end gap-3 rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-4 text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
        >
          <div className="text-right">
            <div className="text-xs text-white/50">You&apos;ve reached the end</div>
            <div className="text-sm font-semibold tracking-tight">
              Back to the Dashboard
            </div>
          </div>
          <Grid className="h-4 w-4 shrink-0" />
        </Link>
      )}
    </nav>
  );
}
