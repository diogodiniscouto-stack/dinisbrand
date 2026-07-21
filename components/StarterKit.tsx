"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { EmailCaptureForm } from "./EmailCaptureForm";
import { Check, Sparkle } from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const items = [
  "Brand Validation Framework",
  "Product Research Checklist",
  "Supplier Outreach Templates",
  "Brand Positioning Canvas",
  "Shopify Launch Checklist",
  "AI Prompt Pack",
];

export function StarterKit() {
  return (
    <section id="starter-kit" className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200/70 bg-neutral-950 px-6 py-14 shadow-float sm:px-12 sm:py-16 lg:px-16">
          {/* Ambient gradients */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-[100px]" />
            <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-primary/15 blur-[100px]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:26px_26px] opacity-40" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: copy */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-tight text-white/70 backdrop-blur"
              >
                <Sparkle className="h-3.5 w-3.5 text-primary-300" /> Free Starter
                Kit
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-6 text-balance text-3xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-4xl md:text-[2.85rem]"
              >
                Start Free. <br /> Build Smarter.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/60 sm:text-lg"
              >
                Six of the exact tools I use to take an idea to a launched,
                revenue-ready brand. No fluff — just the frameworks that move the
                needle.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 max-w-md">
                <EmailCaptureForm theme="dark" buttonLabel="Get free access" />
                <p className="mt-3 text-xs text-white/40">
                  Instant access · No credit card required
                </p>
              </motion.div>
            </motion.div>

            {/* Right: the kit card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                Inside the Starter Kit
              </p>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[0.95rem] font-medium text-white/85">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
