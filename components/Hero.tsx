"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { HeroMockup } from "./HeroMockup";
import { ArrowRight, Sparkle } from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Background: dotted grid + soft gradient wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dotgrid mask-fade-b opacity-70" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[380px] w-[380px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28">
          {/* Copy */}
          <motion.div
            variants={staggerContainer(0.09)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] py-1.5 pl-2 pr-3.5 text-xs font-medium tracking-tight text-primary-700">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-white">
                  <Sparkle className="h-3 w-3" /> New
                </span>
                Free Ecommerce Starter Kit
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-tightest text-neutral-900 sm:text-5xl lg:text-6xl"
            >
              Build Your First{" "}
              <span className="relative whitespace-nowrap text-primary">
                Profitable
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-primary/30"
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
              Ecommerce Brand.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-neutral-500"
            >
              Practical frameworks, templates and systems to help ambitious
              founders launch and grow real ecommerce brands.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#starter-kit" size="lg" className="group">
                Get the Free Starter Kit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button href="#zero-to-brand" variant="secondary" size="lg">
                Explore Zero to Brand™
              </Button>
            </motion.div>

            {/* Small trust line */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {["#DBEAFE", "#E5E7EB", "#EDE9FE", "#DCFCE7"].map((c, i) => (
                  <span
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white shadow-soft"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="text-sm leading-tight text-neutral-500">
                <span className="font-semibold text-neutral-900">
                  Thousands of founders
                </span>
                <br className="hidden sm:block" /> building better brands.
              </p>
            </motion.div>
          </motion.div>

          {/* Mockup */}
          <div className="relative lg:pl-4">
            <HeroMockup />
          </div>
        </div>
      </Container>

      {/* Logo strip */}
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-neutral-100 py-8"
        >
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            The stack ambitious founders build on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {["Shopify", "Meta", "Klaviyo", "Notion", "TikTok", "Stripe"].map(
              (name) => (
                <span
                  key={name}
                  className="text-lg font-semibold tracking-tight text-neutral-400"
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
