"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "15", label: "Roadmap stages" },
  { value: "6", label: "Free frameworks" },
  { value: "1:1", label: "Direct mentorship" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-gradient-to-b from-neutral-100 to-neutral-50 shadow-card">
              {/* Portrait placeholder */}
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  viewBox="0 0 200 250"
                  className="h-full w-full text-neutral-200"
                  aria-label="Portrait of Diogo Dinis"
                >
                  <rect width="200" height="250" fill="url(#pg)" />
                  <defs>
                    <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F5F6F8" />
                      <stop offset="100%" stopColor="#ECEEF1" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="95" r="38" fill="#DDE1E7" />
                  <path
                    d="M40 230c0-38 27-62 60-62s60 24 60 62z"
                    fill="#DDE1E7"
                  />
                </svg>
              </div>
              {/* Name plate */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
                  D
                </span>
                <div>
                  <div className="text-sm font-semibold tracking-tight text-neutral-900">
                    Diogo Dinis
                  </div>
                  <div className="text-xs text-neutral-500">
                    Founder, DinisBrands
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
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
              About
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-tighter text-neutral-900 sm:text-4xl md:text-[2.85rem]"
            >
              Hi, I&apos;m Diogo.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-neutral-500 sm:text-lg"
            >
              <p>
                I created DinisBrands to document the exact systems I use to
                build ecommerce brands.
              </p>
              <p>
                Instead of selling another course, I built practical frameworks
                that founders can actually execute.
              </p>
              <p>
                Everything I create is designed to reduce trial and error and
                help entrepreneurs build better businesses.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-9 grid grid-cols-3 gap-4 border-t border-neutral-100 pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500 sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
