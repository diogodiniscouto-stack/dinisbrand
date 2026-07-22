"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { ArrowRight } from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "15", label: "Modules" },
  { value: "72", label: "Frameworks" },
  { value: "40+", label: "Templates" },
];

const modules = [
  "Entrepreneur Foundation",
  "Find Your Niche",
  "Product Research",
  "Suppliers",
  "Branding",
  "Shopify Store",
  "Content",
  "Customer Acquisition",
  "Retention",
  "Analytics",
  "Operations",
  "AI",
  "Finance",
  "CEO Dashboard",
  "Build With Me",
];

export function ZeroToBrand() {
  return (
    <section id="zero-to-brand" className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200/70 bg-neutral-950 px-6 py-14 shadow-float sm:px-12 sm:py-16 lg:px-16">
          {/* Ambient */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-[100px]" />
            <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-accent/15 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:26px_26px] opacity-40" />
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-balance text-3xl font-semibold leading-[1.08] tracking-tighter text-white sm:text-4xl md:text-[2.85rem]"
            >
              The Profitable Brand Roadmap
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-white/60 sm:text-lg"
            >
              The complete roadmap from idea to profitable ecommerce brand.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid w-full max-w-xl grid-cols-3 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03] py-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Module chips */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex max-w-2xl flex-wrap justify-center gap-2"
            >
              {modules.map((m, i) => (
                <span
                  key={m}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60"
                >
                  <span className="mr-1.5 text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {m}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <Link
                href="#newsletter"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.98rem] font-semibold text-neutral-900 shadow-soft transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98]"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
