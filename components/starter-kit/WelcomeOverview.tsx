"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { lessons } from "@/lib/starterKit";
import { useProgress } from "./progress";
import { ContextCTA } from "./ContextCTA";
import { Check, Clock, ArrowRight, Sparkle } from "@/components/Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function WelcomeOverview() {
  const {
    isComplete,
    completedCount,
    total,
    percent,
    firstIncompleteSlug,
    hydrated,
  } = useProgress();

  const started = hydrated && completedCount > 0;
  const finished = hydrated && completedCount === total;
  const continueLesson =
    lessons.find((l) => l.slug === firstIncompleteSlug) ?? lessons[0];

  return (
    <motion.div
      variants={staggerContainer(0.09)}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10"
    >
      {/* Hero */}
      <motion.div variants={fadeUp} className="flex flex-col gap-4">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium tracking-tight text-emerald-700">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="h-2.5 w-2.5" strokeWidth={3} />
          </span>
          Free access unlocked
        </span>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tightest text-neutral-900 sm:text-5xl">
          Welcome to your Starter Kit
        </h1>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-neutral-500">
          Six focused lessons with downloadable templates — everything you need
          to validate an idea and lay the foundation of a real, profitable
          ecommerce brand. Work through them in order, at your own pace.
        </p>
      </motion.div>

      {/* Progress + continue */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-5 rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-7"
      >
        <div className="flex items-center gap-5">
          <ProgressRing percent={hydrated ? percent : 0} />
          <div>
            <div className="text-sm font-medium text-neutral-500">
              Your progress
            </div>
            <div className="text-xl font-semibold tracking-tight text-neutral-900">
              {hydrated ? completedCount : 0} of {total} lessons
            </div>
          </div>
        </div>
        <Link
          href={`/welcome/${finished ? lessons[0].slug : continueLesson.slug}`}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
        >
          {finished
            ? "Review lessons"
            : started
              ? "Continue where you left off"
              : "Start with Lesson 1"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      {/* Founder Toolkit cross-link */}
      <motion.div variants={fadeUp}>
        <Link
          href="/toolkit"
          className="group flex items-center justify-between gap-4 rounded-3xl border border-neutral-900 bg-neutral-950 p-5 shadow-card transition-transform duration-300 hover:-translate-y-0.5 sm:p-6"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary-300">
              <Sparkle className="h-5 w-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-white/70">
                  New
                </span>
                <h3 className="text-[1.02rem] font-semibold tracking-tight text-white">
                  Open the interactive Founder Toolkit
                </h3>
              </div>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-white/55">
                Editable frameworks, a profit calculator, an AI prompt library
                and more — put the lessons into practice.
              </p>
            </div>
          </div>
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 sm:block" />
        </Link>
      </motion.div>

      {/* Lessons grid */}
      <motion.div variants={fadeUp} className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
            Your lessons
          </h2>
          <span className="text-sm text-neutral-400">{total} lessons</span>
        </div>
        <motion.ul
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {lessons.map((lesson) => {
            const done = hydrated && isComplete(lesson.slug);
            return (
              <motion.li key={lesson.slug} variants={fadeUp}>
                <Link
                  href={`/welcome/${lesson.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-2xl border shadow-soft transition-colors",
                        done
                          ? "border-primary/20 bg-primary/10 text-primary"
                          : "border-neutral-100 bg-neutral-50 text-neutral-900",
                      )}
                    >
                      <lesson.icon className="h-5 w-5" />
                    </span>
                    {done ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[0.68rem] font-semibold text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} /> Done
                      </span>
                    ) : (
                      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[0.68rem] font-semibold text-neutral-500">
                        Lesson {lesson.number}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                    {lesson.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-neutral-500">
                    {lesson.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
                      <Clock className="h-3.5 w-3.5" />
                      {lesson.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 transition-colors group-hover:text-neutral-900">
                      {done ? "Review" : "Start"}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>

      {/* Contextual CTA */}
      <motion.div variants={fadeUp}>
        <ContextCTA variant="roadmap" />
      </motion.div>

      {/* Mentorship note */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col items-center gap-2 pt-2 text-center"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500">
          <Sparkle className="h-4 w-4" />
        </span>
        <p className="text-sm text-neutral-500">
          Prefer to build with Diogo directly?{" "}
          <Link
            href="/#mentorship"
            className="font-semibold text-neutral-900 underline-offset-4 hover:underline"
          >
            Explore 1:1 mentorship →
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}

function ProgressRing({ percent }: { percent: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="relative h-16 w-16 shrink-0">
      <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#EFF1F4" strokeWidth="6" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-tight text-neutral-900">
        {percent}%
      </span>
    </div>
  );
}
