"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Target,
  Compass,
  Box,
  Bolt,
  Store,
  Calculator,
  Folder,
  Check,
} from "./Icons";

const tools = [
  { icon: Target, label: "Product Validation" },
  { icon: Compass, label: "Brand Canvas" },
  { icon: Box, label: "Supplier Templates" },
  { icon: Bolt, label: "AI Prompt Library" },
  { icon: Store, label: "Shopify Checklist" },
  { icon: Calculator, label: "Profit Calculator" },
  { icon: Folder, label: "Resource Directory" },
];

const inside = [
  "Practical frameworks",
  "Proven templates",
  "Actionable prompts",
  "Built for founders",
];

/** Interactive Founder Toolkit mockup, tilts toward the pointer, with a
 *  highlight that travels down the tool list and floating accent cards. */
export function HeroMockup() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [9, -9]), {
    stiffness: 140,
    damping: 16,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [-7, 7]), {
    stiffness: 140,
    damping: 16,
  });

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % tools.length),
      1700,
    );
    return () => window.clearInterval(id);
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative [perspective:1300px]"
    >
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-accent/12 via-accent/5 to-transparent blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Window (clips its own rounded corners) */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-float">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50/80 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-300/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-full border border-neutral-200/70 bg-white px-3 py-1 text-[0.7rem] font-medium text-neutral-400">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 018 0v4" />
            </svg>
            app.dinisbrands.com
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-5 sm:p-5">
          {/* Tools */}
          <div className="sm:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-tight text-neutral-900">
                Toolkit
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[0.68rem] font-medium text-neutral-500">
                7 Resources
              </span>
            </div>
            <ul className="space-y-1.5">
              {tools.map((tool, i) => {
                const isActive = i === active;
                return (
                  <motion.li
                    key={tool.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.06, duration: 0.5 }}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors duration-500 ${
                      isActive
                        ? "border-accent/30 bg-accent/[0.05]"
                        : "border-neutral-100 bg-white"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-500 ${
                        isActive
                          ? "bg-accent text-white"
                          : "bg-accent/[0.08] text-accent"
                      }`}
                    >
                      <tool.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[0.82rem] font-medium text-neutral-700">
                      {tool.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="mockup-dot"
                        className="ml-auto h-1.5 w-1.5 rounded-full bg-accent"
                      />
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Side */}
          <div className="flex flex-col gap-4 sm:col-span-2">
            <div className="rounded-2xl border border-neutral-100 bg-gradient-to-b from-neutral-50/60 to-white p-4">
              <div className="mb-2 text-sm font-semibold tracking-tight text-neutral-900">
                Your Progress
              </div>
              <div className="flex items-center gap-3">
                <ProgressRing value={43} />
                <div>
                  <div className="text-lg font-semibold tracking-tight text-neutral-900">
                    43%
                  </div>
                  <div className="text-[0.7rem] leading-tight text-neutral-400">
                    3 of 7
                    <br />
                    completed
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-100 bg-white p-4">
              <div className="mb-2.5 text-sm font-semibold tracking-tight text-neutral-900">
                What&apos;s Inside
              </div>
              <ul className="space-y-2">
                {inside.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    <span className="text-[0.76rem] font-medium text-neutral-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>

        {/* Floating cards (parallax with tilt) */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
          className="absolute -right-4 top-16 hidden animate-float rounded-2xl border border-neutral-200/70 bg-white/90 px-3 py-2 shadow-card backdrop-blur md:block"
        >
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-[0.72rem] font-semibold text-neutral-800">
              Template copied
            </span>
          </div>
        </motion.div>
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
      <circle cx="26" cy="26" r={r} fill="none" stroke="#EEF1FF" strokeWidth="5" />
      <motion.circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="#3B5BFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: offset }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
