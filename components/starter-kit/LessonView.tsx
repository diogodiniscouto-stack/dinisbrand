"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getLesson, getLessonNav } from "@/lib/starterKit";
import { useProgress } from "./progress";
import { LessonBlocks } from "./LessonBlocks";
import { DownloadTemplateButton } from "./DownloadTemplateButton";
import { ContextCTA } from "./ContextCTA";
import {
  Clock,
  Check,
  ArrowRight,
  ArrowUpRight,
  Target,
} from "@/components/Icons";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function LessonView({ slug }: { slug: string }) {
  const lesson = getLesson(slug);
  const { prev, next } = getLessonNav(slug);
  const { isComplete, markComplete, toggle, hydrated } = useProgress();

  if (!lesson) return null;

  const done = hydrated && isComplete(lesson.slug);
  const ctaVariant = lesson.number % 2 === 0 ? "mentorship" : "roadmap";

  return (
    <motion.article
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8"
    >
      {/* Header */}
      <motion.header variants={fadeUp} className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-primary">
            Lesson {lesson.number}
          </span>
          <span className="text-neutral-300">/</span>
          <span className="inline-flex items-center gap-1.5 text-neutral-400">
            <Clock className="h-3.5 w-3.5" />
            {lesson.readingTime}
          </span>
        </div>
        <div className="flex items-start gap-4">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-neutral-200/70 bg-white text-neutral-900 shadow-soft sm:flex">
            <lesson.icon className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-neutral-900 sm:text-4xl">
              {lesson.title}
            </h1>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-neutral-500">
              {lesson.summary}
            </p>
          </div>
        </div>
      </motion.header>

      {/* Learning outcomes */}
      <motion.div
        variants={fadeUp}
        className="rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft"
      >
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-900">
          <Target className="h-4 w-4 text-primary" />
          What you&apos;ll learn
        </div>
        <ul className="mt-4 flex flex-col gap-2.5">
          {lesson.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="text-[0.98rem] leading-relaxed text-neutral-600">
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Download */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-neutral-200/70 bg-neutral-50/60 p-5 sm:flex-row sm:items-center"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
            Downloadable template
          </p>
          <p className="mt-1 text-[0.98rem] font-medium text-neutral-900">
            {lesson.template.label}
          </p>
        </div>
        <DownloadTemplateButton
          label="Download template"
          filename={lesson.template.filename}
          content={lesson.template.content}
        />
      </motion.div>

      {/* Body */}
      <motion.div variants={fadeUp}>
        <LessonBlocks blocks={lesson.blocks} />
      </motion.div>

      {/* Mark complete */}
      <motion.div
        variants={fadeUp}
        className="flex items-center justify-between rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft"
      >
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
              done
                ? "border-primary bg-primary text-white"
                : "border-neutral-200 bg-neutral-50 text-neutral-300",
            )}
          >
            <Check className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-sm font-medium text-neutral-700">
            {done ? "Lesson completed" : "Mark this lesson as complete"}
          </span>
        </div>
        <button
          type="button"
          onClick={() => toggle(lesson.slug)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-[0.98]",
            done
              ? "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
              : "bg-neutral-900 text-white hover:bg-neutral-800",
          )}
        >
          {done ? "Undo" : "Mark complete"}
        </button>
      </motion.div>

      {/* Contextual CTA */}
      <motion.div variants={fadeUp}>
        <ContextCTA variant={ctaVariant} />
      </motion.div>

      {/* Prev / Next navigation */}
      <motion.nav
        variants={fadeUp}
        className="flex flex-col gap-3 border-t border-neutral-100 pt-8 sm:flex-row sm:items-stretch sm:justify-between"
      >
        {prev ? (
          <Link
            href={`/welcome/${prev.slug}`}
            className="group flex flex-1 items-center gap-3 rounded-2xl border border-neutral-200/70 bg-white px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
          >
            <ArrowRight className="h-4 w-4 rotate-180 text-neutral-400 transition-transform duration-300 group-hover:-translate-x-0.5" />
            <div className="text-left">
              <div className="text-xs text-neutral-400">Previous</div>
              <div className="text-sm font-semibold tracking-tight text-neutral-900">
                {prev.title}
              </div>
            </div>
          </Link>
        ) : (
          <span className="hidden flex-1 sm:block" />
        )}

        {next ? (
          <Link
            href={`/welcome/${next.slug}`}
            onClick={() => markComplete(lesson.slug)}
            className="group flex flex-1 items-center justify-end gap-3 rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-4 text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            <div className="text-right">
              <div className="text-xs text-white/50">Next lesson</div>
              <div className="text-sm font-semibold tracking-tight">
                {next.title}
              </div>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <Link
            href="/#zero-to-brand"
            onClick={() => markComplete(lesson.slug)}
            className="group flex flex-1 items-center justify-end gap-3 rounded-2xl border border-primary bg-primary px-5 py-4 text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600"
          >
            <div className="text-right">
              <div className="text-xs text-white/70">You&apos;ve finished the kit</div>
              <div className="text-sm font-semibold tracking-tight">
                Continue with Zero to Brand™
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </motion.nav>
    </motion.article>
  );
}
