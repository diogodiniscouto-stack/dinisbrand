"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { ArrowRight } from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

const steps = [
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
    <section
      id="zero-to-brand"
      className="relative overflow-hidden bg-neutral-50/60 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40"
      />
      <Container>
        <SectionHeading
          eyebrow="Zero to Brand™"
          title="The Complete Ecommerce Roadmap."
          description="Fifteen sequenced stages that take you from a blank page to a brand that runs like a real company — each one building on the last."
        />

        {/* Timeline */}
        <motion.ol
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          {/* vertical spine */}
          <span
            aria-hidden
            className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-neutral-200 to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />

          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            const side = i % 2 === 0;
            return (
              <motion.li
                key={step}
                variants={fadeUp}
                className={`relative mb-3 flex items-center gap-4 sm:mb-4 sm:w-1/2 ${
                  side
                    ? "sm:ml-0 sm:pr-10 sm:text-right"
                    : "sm:ml-auto sm:flex-row-reverse sm:pl-10 sm:text-left"
                }`}
              >
                {/* node */}
                <span
                  className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold shadow-soft sm:absolute sm:top-1/2 sm:-translate-y-1/2 ${
                    side ? "sm:-right-[1.15rem]" : "sm:-left-[1.15rem]"
                  } ${
                    isLast
                      ? "border-primary bg-primary text-white"
                      : "border-neutral-200 bg-white text-neutral-500"
                  }`}
                >
                  {isLast ? (
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  ) : (
                    String(i + 1).padStart(2, "0")
                  )}
                </span>

                {/* card */}
                <div
                  className={`flex-1 rounded-2xl border px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${
                    isLast
                      ? "border-primary/30 bg-primary/[0.04] shadow-soft"
                      : "border-neutral-200/70 bg-white shadow-soft"
                  }`}
                >
                  <span
                    className={`text-[0.95rem] font-semibold tracking-tight ${
                      isLast ? "text-primary-700" : "text-neutral-900"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        <div className="mt-14 flex justify-center">
          <Button href="#mentorship" size="lg" className="group">
            Explore the Roadmap
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
