"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { ButtonEl } from "./ui/Button";
import { Check, ArrowRight } from "./Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // Placeholder for a real subscribe endpoint.
    setStatus("done");
  }

  return (
    <section id="newsletter" className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200/70 bg-gradient-to-b from-neutral-50/80 to-white px-6 py-16 shadow-soft sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute inset-0 bg-dotgrid opacity-40 mask-fade-b" />
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto flex max-w-xl flex-col items-center text-center"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              Newsletter
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tighter text-neutral-900 sm:text-4xl md:text-[2.6rem]"
            >
              Don&apos;t miss the next free playbook.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-pretty text-base leading-relaxed text-neutral-500"
            >
              You just saw the Starter Kit. Subscribe to get new frameworks,
              breakdowns and the systems behind real ecommerce brands, one
              practical email a week. Free, no hype.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 w-full max-w-md">
              {status === "done" ? (
                <div className="flex items-center justify-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3.5 text-sm font-medium text-emerald-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  You&apos;re in, check your inbox to confirm.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2.5 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-label="Email address"
                    className="h-12 flex-1 rounded-full border border-neutral-200 bg-white px-5 text-[0.95rem] text-neutral-900 shadow-soft outline-none transition-all placeholder:text-neutral-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                  />
                  <ButtonEl type="submit" size="lg" className="group shrink-0">
                    Subscribe
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </ButtonEl>
                </form>
              )}
              <p className="mt-3 text-xs text-neutral-400">
                Unsubscribe anytime. No spam, ever.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
