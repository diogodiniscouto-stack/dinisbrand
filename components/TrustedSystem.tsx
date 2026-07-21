"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/motion";
import {
  Target,
  Compass,
  Box,
  Store,
  Pen,
  Bolt,
} from "./Icons";

const features = [
  {
    icon: Target,
    title: "Product Validation",
    desc: "Pressure-test demand before you spend a cent on inventory or ads.",
  },
  {
    icon: Compass,
    title: "Brand Positioning",
    desc: "Carve out a distinct position that makes competitors irrelevant.",
  },
  {
    icon: Box,
    title: "Supplier Outreach",
    desc: "Proven scripts and vetting checklists to find partners you can trust.",
  },
  {
    icon: Store,
    title: "Shopify",
    desc: "Launch a fast, high-converting store without touching a line of code.",
  },
  {
    icon: Pen,
    title: "Content Strategy",
    desc: "A repeatable engine for content that compounds into demand.",
  },
  {
    icon: Bolt,
    title: "AI Workflows",
    desc: "Automate the busywork so you can operate like a full team of one.",
  },
];

export function TrustedSystem() {
  return (
    <section id="resources" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="A Trusted System"
          title={
            <>
              Everything You Need.
              <br className="hidden sm:block" /> Nothing You Don&apos;t.
            </>
          }
          description="A complete operating system for building an ecommerce brand — distilled into six disciplines you can actually execute."
        />

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-neutral-200 hover:shadow-card sm:p-7"
            >
              {/* hover gradient wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-900 shadow-soft transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-primary/[0.06] group-hover:text-primary">
                  <f.icon className="h-[1.35rem] w-[1.35rem]" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-neutral-500">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
