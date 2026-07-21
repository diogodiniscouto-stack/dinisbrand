"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ToolkitSidebar } from "./ToolkitSidebar";

export function ToolkitShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50/40">
      {/* Desktop sidebar */}
      <aside className="print-hide fixed inset-y-0 left-0 z-30 hidden w-[280px] border-r border-neutral-200/70 bg-white lg:block">
        <ToolkitSidebar />
      </aside>

      {/* Mobile top bar */}
      <div className="print-hide sticky top-0 z-40 flex items-center justify-between border-b border-neutral-200/70 bg-white/85 px-4 py-3 backdrop-blur-xl lg:hidden">
        <Link href="/toolkit" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
            D
          </span>
          <span className="text-[0.9rem] font-semibold tracking-tight text-neutral-900">
            Founder Toolkit
          </span>
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100"
          aria-label="Open menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-neutral-950/30 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 left-0 z-50 w-[280px] border-r border-neutral-200/70 bg-white lg:hidden"
            >
              <ToolkitSidebar onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="lg:pl-[280px]">
        <main className="print-full mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
          {children}
        </main>
        <footer className="print-hide border-t border-neutral-100 lg:pl-0">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
            <p className="text-sm font-medium text-neutral-900">
              Zero to Brand™{" "}
              <span className="font-normal text-neutral-400">by Dinis</span>
            </p>
            <p className="text-sm text-neutral-400">
              Build smarter. Build profitable brands.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
