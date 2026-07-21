"use client";

import { motion } from "framer-motion";
import { Check, Layers, Map, TrendingUp } from "./Icons";

type RoadmapStep = { label: string; done?: boolean; active?: boolean };

const roadmap: RoadmapStep[] = [
  { label: "Entrepreneur Foundation", done: true },
  { label: "Find Your Niche", done: true },
  { label: "Product Research", done: true },
  { label: "Supplier Outreach", active: true },
  { label: "Brand Positioning", done: false },
  { label: "Shopify Launch", done: false },
];

const templates = [
  "Validation Framework",
  "Outreach Templates",
  "Positioning Canvas",
  "Launch Checklist",
];

/** The hero's browser-framed product mockup with floating accent cards. */
export function HeroMockup() {
  return (
    <div className="relative">
      {/* Glow behind the window */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-2xl"
      />

      {/* Browser window */}
      <motion.div
        initial={{ opacity: 0, y: 28, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-float"
      >
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50/80 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-neutral-200" />
            <span className="h-3 w-3 rounded-full bg-neutral-200" />
            <span className="h-3 w-3 rounded-full bg-neutral-200" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white px-3 py-1 text-[0.7rem] font-medium text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            app.dinisbrands.com / roadmap
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-5 sm:p-6">
          {/* Roadmap column */}
          <div className="sm:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Map className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold tracking-tight text-neutral-900">
                  Roadmap
                </span>
              </div>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[0.7rem] font-medium text-neutral-500">
                3 / 15 steps
              </span>
            </div>

            <ul className="space-y-2">
              {roadmap.map((step, i) => (
                <motion.li
                  key={step.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                    step.active
                      ? "border-primary/30 bg-primary/[0.04]"
                      : "border-neutral-100 bg-white"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      step.done
                        ? "bg-primary text-white"
                        : step.active
                          ? "border-2 border-primary bg-white"
                          : "border border-neutral-200 bg-neutral-50"
                    }`}
                  >
                    {step.done && <Check className="h-3 w-3" strokeWidth={2.5} />}
                    {step.active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </span>
                  <span
                    className={`text-[0.82rem] font-medium ${
                      step.done
                        ? "text-neutral-400 line-through decoration-neutral-200"
                        : "text-neutral-700"
                    }`}
                  >
                    {step.label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Side column: progress + templates */}
          <div className="flex flex-col gap-4 sm:col-span-2">
            {/* Progress ring */}
            <div className="rounded-2xl border border-neutral-100 bg-gradient-to-b from-neutral-50/60 to-white p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-900">
                <TrendingUp className="h-4 w-4 text-primary" />
                Progress
              </div>
              <div className="flex items-center gap-3">
                <ProgressRing value={72} />
                <div>
                  <div className="text-xl font-semibold tracking-tight text-neutral-900">
                    72%
                  </div>
                  <div className="text-[0.72rem] text-neutral-400">
                    Launch ready
                  </div>
                </div>
              </div>
            </div>

            {/* Templates */}
            <div className="rounded-2xl border border-neutral-100 bg-white p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-900">
                <Layers className="h-4 w-4 text-primary" />
                Templates
              </div>
              <div className="flex flex-wrap gap-1.5">
                {templates.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-neutral-100/80 px-2 py-1 text-[0.68rem] font-medium text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating card — top right */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-3 -top-5 hidden animate-float rounded-2xl border border-neutral-200/70 bg-white/90 px-3.5 py-2.5 shadow-card backdrop-blur-md sm:-right-6 md:block"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
            <Check className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <div>
            <div className="text-[0.78rem] font-semibold text-neutral-900">
              Checklist complete
            </div>
            <div className="text-[0.68rem] text-neutral-400">
              Product research · 24 items
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating card — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ animationDelay: "1.5s" }}
        className="absolute -bottom-6 -left-3 hidden animate-float rounded-2xl border border-neutral-200/70 bg-white/90 px-3.5 py-2.5 shadow-card backdrop-blur-md sm:-left-6 md:block"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <TrendingUp className="h-4 w-4" />
          </span>
          <div>
            <div className="text-[0.78rem] font-semibold text-neutral-900">
              First sale
            </div>
            <div className="text-[0.68rem] text-neutral-400">
              Store live in 21 days
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProgressRing({ value }: { value: number }) {
  const r = 20;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" className="-rotate-90">
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="#EFF1F4"
        strokeWidth="5"
      />
      <motion.circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: offset }}
        transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
