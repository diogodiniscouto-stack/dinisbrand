"use client";

import { ToolHeader } from "./ToolHeader";
import { ToolkitPageNav } from "./ToolkitPageNav";
import { shopifySections } from "@/lib/toolkit";
import { useLocalState } from "@/lib/useLocalState";
import { Check } from "@/components/Icons";
import { cn } from "@/lib/utils";

type Checked = Record<string, boolean>;

const allKeys = shopifySections.flatMap((s, si) =>
  s.items.map((_, ii) => `${si}:${ii}`),
);

export function ShopifyChecklist() {
  const [checked, setChecked] = useLocalState<Checked>(
    "toolkit:shopify-checklist",
    {},
  );

  const doneCount = allKeys.filter((k) => checked[k]).length;
  const percent = Math.round((doneCount / allKeys.length) * 100);

  function toggle(key: string) {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="print-full">
      <ToolHeader
        index="06 · Checklist"
        title="Launch Without Regret"
        description="Set your store up like a pro before you spend a cent on ads. Tick items off as you go, your progress saves automatically."
        printable
        onReset={() => setChecked({})}
      />

      {/* Progress bar */}
      <div className="print-break sticky top-0 z-10 mb-8 rounded-2xl border border-neutral-200/70 bg-white/90 p-4 shadow-soft backdrop-blur">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-neutral-700">Launch readiness</span>
          <span className="font-semibold text-neutral-900">
            {doneCount}
            <span className="text-neutral-400"> / {allKeys.length}</span>
            <span className="ml-2 text-accent">{percent}%</span>
          </span>
        </div>
        <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {shopifySections.map((section, si) => {
          const sectionKeys = section.items.map((_, ii) => `${si}:${ii}`);
          const sectionDone = sectionKeys.filter((k) => checked[k]).length;
          const complete = sectionDone === section.items.length;
          return (
            <div
              key={section.title}
              className="print-break flex flex-col rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                  {section.title}
                </h3>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold",
                    complete
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-neutral-100 text-neutral-500",
                  )}
                >
                  {sectionDone}/{section.items.length}
                </span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {section.items.map((item, ii) => {
                  const key = `${si}:${ii}`;
                  const isChecked = !!checked[key];
                  return (
                    <li key={key}>
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        className="flex w-full items-start gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-neutral-50"
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                            isChecked
                              ? "border-accent bg-accent text-white"
                              : "border-neutral-300 bg-white text-transparent",
                          )}
                        >
                          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </span>
                        <span
                          className={cn(
                            "text-[0.92rem] leading-relaxed transition-colors",
                            isChecked
                              ? "text-neutral-400 line-through decoration-neutral-200"
                              : "text-neutral-700",
                          )}
                        >
                          {item}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <ToolkitPageNav />
    </div>
  );
}
