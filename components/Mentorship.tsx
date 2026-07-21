"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import {
  Calendar,
  MessageSquare,
  Map,
  Store,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const perks = [
  { icon: Calendar, title: "Weekly calls", desc: "Live 1:1 strategy sessions." },
  {
    icon: MessageSquare,
    title: "Direct feedback",
    desc: "Async access between calls.",
  },
  { icon: Map, title: "Roadmap included", desc: "Full Zero to Brand™ access." },
  { icon: Store, title: "Store reviews", desc: "Line-by-line store audits." },
  {
    icon: TrendingUp,
    title: "Growth strategy",
    desc: "A plan tailored to your numbers.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    desc: "Clear targets, kept on track.",
  },
];

export function Mentorship() {
  return (
    <section id="mentorship" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              1:1 Mentorship
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-tighter text-neutral-900 sm:text-4xl md:text-[2.85rem]"
            >
              Need Personal Guidance?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-pretty text-base leading-relaxed text-neutral-500 sm:text-lg"
            >
              For founders who want to move faster with less guesswork. We work
              together directly — mapping your next moves, reviewing your store,
              and holding the plan accountable until it&apos;s producing results.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-pretty text-[0.95rem] leading-relaxed text-neutral-400"
            >
              Limited spots. Selective by application to keep the quality of
              guidance high.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Button href="#newsletter" size="lg" className="group">
                Apply for Mentorship
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: perks grid */}
          <motion.div
            variants={staggerContainer(0.07, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                variants={fadeUp}
                className="group rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 text-neutral-900 transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-primary/[0.06] group-hover:text-primary">
                  <perk.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[0.98rem] font-semibold tracking-tight text-neutral-900">
                  {perk.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
