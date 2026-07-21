"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Resources", href: "#resources" },
  { label: "Newsletter", href: "#newsletter" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled
            ? "border-neutral-200/80 bg-white/80 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-white/40 backdrop-blur-md",
        )}
      >
        {/* Logo */}
        <Link
          href="#top"
          className="group flex items-center gap-2.5 pl-1"
          aria-label="Diogo Dinis — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
            D
          </span>
          <span className="text-[0.95rem] font-semibold tracking-tight text-neutral-900">
            Diogo Dinis
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium tracking-tight text-neutral-600 transition-colors hover:bg-neutral-100/80 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Button href="#top" size="sm" className="hidden sm:inline-flex">
            Get Free Founder Toolkit
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-5 rounded bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-[1.5px] w-5 rounded bg-current transition-all duration-300",
                  open ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-5 rounded bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-[0.65rem]",
                )}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 right-4 top-[4.5rem] rounded-3xl border border-neutral-200/80 bg-white/95 p-3 shadow-card backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="#top"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Get Free Founder Toolkit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
