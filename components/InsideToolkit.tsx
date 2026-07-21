"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import {
  Target,
  Compass,
  Bolt,
  Box,
  Store,
  Calculator,
  Folder,
  ArrowRight,
} from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const items = [
  {
    icon: Target,
    title: "Product Validation Scorecard",
    desc: "Score any idea across six make-or-break factors and get a clear verdict.",
    href: "/toolkit/product-validation",
    tag: "Framework",
  },
  {
    icon: Compass,
    title: "Brand Positioning Canvas",
    desc: "Define your entire positioning on one editable, printable page.",
    href: "/toolkit/brand-canvas",
    tag: "Framework",
  },
  {
    icon: Bolt,
    title: "AI Prompt Library",
    desc: "A searchable library of proven prompts for every part of your brand.",
    href: "/toolkit/ai-prompts",
    tag: "Library",
  },
  {
    icon: Box,
    title: "Supplier Outreach Templates",
    desc: "Seven copy-paste emails that get suppliers to take you seriously.",
    href: "/toolkit/supplier-templates",
    tag: "Templates",
  },
  {
    icon: Store,
    title: "Shopify Launch Checklist",
    desc: "Every box to tick before you launch, with a live progress bar.",
    href: "/toolkit/shopify-checklist",
    tag: "Checklist",
  },
  {
    icon: Calculator,
    title: "Profit Calculator",
    desc: "Know your margins and break-even ROAS before you spend on ads.",
    href: "/toolkit/profit-calculator",
    tag: "Calculator",
  },
  {
    icon: Folder,
    title: "Resource Directory",
    desc: "The tools every ecommerce founder should have bookmarked.",
    href: "/toolkit/resources",
    tag: "Directory",
  },
];

export function InsideToolkit() {
  return (
    <section id="resources" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Free Founder Toolkit"
          title="Inside the Founder Toolkit"
          description="Seven practical, interactive tools to take you from a raw idea to a launch-ready brand, free, forever."
        />

        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-neutral-200 hover:shadow-card sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-900 shadow-soft transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/[0.06] group-hover:text-accent">
                    <item.icon className="h-[1.35rem] w-[1.35rem]" />
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-wide text-neutral-500">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-neutral-500">
                  {item.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-neutral-500 transition-colors group-hover:text-accent">
                  Open tool
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Primary CTA back to capture */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(59,91,255,0.6)] transition-all duration-300 hover:bg-accent-600 active:scale-[0.98]"
          >
            Build My Brand
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
