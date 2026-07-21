"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { HeroMockup } from "./HeroMockup";
import { EmailCaptureForm } from "./EmailCaptureForm";
import { brandLogos } from "./BrandLogos";
import { Gift, Check } from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const benefits = ["100% Free", "Instant Access", "No Credit Card"];

const kitItems = [
  "7 Practical Tools",
  "Proven Frameworks",
  "Ready-to-Use Templates",
  "AI Prompts",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dotgrid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/10 to-transparent blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[380px] w-[380px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-24">
          {/* Copy */}
          <motion.div
            variants={staggerContainer(0.09)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.06] py-1.5 pl-2 pr-4 text-sm font-medium tracking-tight text-accent"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-accent shadow-soft">
                <Gift className="h-3.5 w-3.5" />
              </span>
              Free Founder Toolkit
            </motion.span>

            {/* Headline, fluid size so it never overflows the column */}
            <motion.h1
              variants={fadeUp}
              className="mt-7 text-balance font-semibold leading-[1.02] tracking-tightest text-neutral-900"
              style={{ fontSize: "clamp(2.6rem, 5.4vw, 4.15rem)" }}
            >
              Build Your First
              <br />
              <span className="relative inline-block text-accent">
                Profitable
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent/30"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8c60-6 236-6 296 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Brand.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-neutral-500"
            >
              Everything you need to validate your product, build your brand and
              launch with confidence.
            </motion.p>

            {/* Email CTA with animated neon ring */}
            <motion.div variants={fadeUp} className="group relative mt-8 w-full max-w-xl">
              {/* Outer neon glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 overflow-hidden rounded-[2rem] opacity-50 blur-xl transition-opacity duration-500 group-focus-within:opacity-80 sm:rounded-full"
              >
                <div className="absolute left-1/2 top-1/2 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 animate-neon-spin bg-[conic-gradient(from_0deg,#3B5BFF,#22D3EE,#8B5CF6,#3B5BFF)]" />
              </div>
              {/* Spinning gradient border */}
              <div className="relative overflow-hidden rounded-[1.55rem] sm:rounded-full">
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 animate-neon-spin bg-[conic-gradient(from_0deg,#3B5BFF,#22D3EE,#8B5CF6,#3B5BFF)]"
                />
                {/* White form inset reveals the ring */}
                <div className="relative m-[1.6px] rounded-[1.45rem] bg-white sm:rounded-full">
                  <EmailCaptureForm size="hero" />
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.ul
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-neutral-600">
                    {b}
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Interactive mockup */}
          <div className="relative lg:pl-2">
            <HeroMockup />
          </div>
        </div>
      </Container>

      {/* Logos */}
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-neutral-100 py-8"
        >
          <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Powered by the tools every ecommerce founder should know
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
            {brandLogos.map((Logo, i) => (
              <Logo key={i} />
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Toolkit contents strip */}
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group/bar relative mb-4 overflow-hidden rounded-[1.75rem] border border-neutral-200/70 bg-white p-6 shadow-soft transition-shadow duration-500 hover:shadow-card sm:p-7"
        >
          {/* Ambient accent wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5 blur-3xl transition-opacity duration-500 group-hover/bar:opacity-100"
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {/* Label */}
            <div className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-500 group-hover/bar:scale-105">
                <Gift className="h-[1.35rem] w-[1.35rem]" />
              </span>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Free Founder Toolkit
                </p>
                <p className="mt-0.5 text-[1.05rem] font-semibold tracking-tight text-neutral-900">
                  Inside, you&apos;ll get:
                </p>
              </div>
            </div>

            {/* Interactive chips */}
            <ul className="flex flex-wrap gap-2.5">
              {kitItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <span className="group/chip flex cursor-default items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/[0.04] hover:shadow-card">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover/chip:bg-accent group-hover/chip:text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-neutral-700 transition-colors duration-300 group-hover/chip:text-neutral-900">
                      {item}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
