"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { HeroMockup } from "./HeroMockup";
import { EmailCaptureForm } from "./EmailCaptureForm";
import { Gift, Check } from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const benefits = ["100% Free", "Instant Access", "No Credit Card"];

const logos = ["Shopify", "Meta", "Klaviyo", "Notion", "TikTok", "Stripe"];

const kitItems = [
  "7 Practical Tools",
  "Proven Frameworks",
  "Ready-to-Use Templates",
  "AI Prompts",
  "Resource Library",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
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
            {/* Badge + annotation */}
            <motion.div
              variants={fadeUp}
              className="flex w-full items-center justify-between gap-4"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.06] py-1.5 pl-2 pr-4 text-sm font-medium tracking-tight text-accent">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-accent shadow-soft">
                  <Gift className="h-3.5 w-3.5" />
                </span>
                Free Founder Toolkit
              </span>

              <span className="relative hidden pr-6 sm:block">
                <span className="font-handwritten text-lg leading-tight text-accent/80">
                  Everything you need
                  <br /> to start building.
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 60 40"
                  className="absolute -bottom-5 -left-7 h-8 w-12 text-accent/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M50 6C40 4 14 6 10 22" />
                  <path d="M10 22l-4-6M10 22l7-2" />
                </svg>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-7 text-balance text-5xl font-semibold leading-[1.0] tracking-tightest text-neutral-900 sm:text-6xl lg:text-[4.6rem]"
            >
              Build Your First
              <br />
              <span className="relative whitespace-nowrap text-accent">
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
              <span className="text-neutral-900">Brand.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-neutral-500"
            >
              Everything you need to validate your product, build your brand and
              launch with confidence.
            </motion.p>

            {/* Email CTA */}
            <motion.div variants={fadeUp} className="mt-8 w-full max-w-xl">
              <EmailCaptureForm size="hero" />
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

          {/* Mockup */}
          <div className="relative lg:pl-2">
            <HeroMockup />
            {/* Annotation */}
            <span className="pointer-events-none absolute -bottom-10 right-2 hidden text-right md:block">
              <span className="font-handwritten text-lg leading-tight text-accent/80">
                Practical tools.
                <br /> Real results.
              </span>
              <svg
                aria-hidden
                viewBox="0 0 60 40"
                className="absolute -top-6 left-2 h-8 w-12 text-accent/50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M8 34C18 30 40 26 48 10" />
                <path d="M48 10l-8 2M48 10l1 8" />
              </svg>
            </span>
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
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
            Powered by the tools every ecommerce founder should know
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {logos.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-neutral-400"
              >
                {name}
              </span>
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
          className="mb-4 flex flex-col items-start gap-4 rounded-3xl border border-neutral-200/70 bg-neutral-50/60 p-6 sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Gift className="h-5 w-5" />
            </span>
            <span className="text-[0.95rem] font-semibold tracking-tight text-neutral-900">
              In the Free Founder Toolkit,
              <br className="hidden sm:block" /> you&apos;ll get:
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {kitItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-neutral-600">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
