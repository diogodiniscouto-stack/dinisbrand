import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "tip" | "mistake" | "today";

const variants: Record<Variant, { emoji: string; label: string; cls: string }> = {
  tip: {
    emoji: "💡",
    label: "Dinis Note",
    cls: "border-accent/20 bg-accent/[0.04]",
  },
  mistake: {
    emoji: "⚠️",
    label: "Common Mistake",
    cls: "border-amber-200 bg-amber-50/60",
  },
  today: {
    emoji: "🎯",
    label: "What I'd do today",
    cls: "border-emerald-200 bg-emerald-50/60",
  },
};

/** A personal aside from Diogo, rendered as a distinct callout box. */
export function DinisNote({
  variant = "tip",
  children,
}: {
  variant?: Variant;
  children: ReactNode;
}) {
  const v = variants[variant];
  return (
    <div
      className={cn(
        "print-break flex gap-3.5 rounded-3xl border p-5 shadow-soft",
        v.cls,
      )}
    >
      <span className="text-xl leading-none" aria-hidden>
        {v.emoji}
      </span>
      <div>
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-neutral-500">
          {v.label}
        </div>
        <p className="mt-1.5 text-[0.97rem] leading-relaxed text-neutral-700">
          {children}
        </p>
      </div>
    </div>
  );
}
