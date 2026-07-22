"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import {
  ShieldCheck,
  Map,
  Target,
  Folder,
  Bolt,
  Store,
  AlertTriangle,
  ArrowRight,
} from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const items = [
  {
    icon: ShieldCheck,
    title: "The Ecommerce Reality Check",
    desc: "An honest look at money, time and effort before you start.",
    href: "/toolkit/reality-check",
    tag: "Read",
  },
  {
    icon: Map,
    title: "The Beginner Roadmap",
    desc: "The exact 8-step sequence from idea to your first sales.",
    href: "/toolkit/roadmap",
    tag: "Roadmap",
  },
  {
    icon: Target,
    title: "Product Validation Framework",
    desc: "Score any product idea before you spend a cent.",
    href: "/toolkit/validation",
    tag: "Framework",
  },
  {
    icon: Folder,
    title: "Product Research Resources",
    desc: "The tools I use to find products, suppliers and competitors.",
    href: "/toolkit/research-resources",
    tag: "Resources",
  },
  {
    icon: Bolt,
    title: "AI Prompt Library",
    desc: "The prompts I reach for daily, searchable and copy-ready.",
    href: "/toolkit/prompts",
    tag: "Library",
  },
  {
    icon: Store,
    title: "Shopify Launch Checklist",
    desc: "Set your store up like a pro before you run ads.",
    href: "/toolkit/shopify-checklist",
    tag: "Checklist",
  },
  {
    icon: AlertTriangle,
    title: "12 Beginner Mistakes",
    desc: "The errors that kill most brands, and how to avoid them.",
    href: "/toolkit/mistakes",
    tag: "Read",
  },
];

export function InsideToolkit() {
  return (
    <section id="resources" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Profitable Brand Starter Kit"
          title="Inside the free Starter Kit"
          description={"A premium onboarding for future founders, seven parts that take you from “no idea where to start” to knowing your exact next steps."}
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
                  Open
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

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
