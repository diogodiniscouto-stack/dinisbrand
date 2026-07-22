"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "@/lib/starterKit";
import { useProgress } from "./progress";
import { Check, Sparkle, ArrowRight } from "@/components/Icons";
import { cn } from "@/lib/utils";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { isComplete, completedCount, total, percent, hydrated } =
    useProgress();

  return (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="flex items-center justify-between px-5 pt-5">
        <Link
          href="/"
          onClick={onNavigate}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white shadow-soft">
            D
          </span>
          <span className="text-[0.9rem] font-semibold tracking-tight text-neutral-900">
            Diogo Dinis
          </span>
        </Link>
      </div>

      {/* Progress */}
      <div className="px-5 pt-6">
        <div className="rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-soft">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium uppercase tracking-[0.14em] text-neutral-400">
              Starter Kit
            </span>
            <span className="font-semibold text-neutral-900">
              {hydrated ? completedCount : 0}
              <span className="text-neutral-400"> / {total}</span>
            </span>
          </div>
          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${hydrated ? percent : 0}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lessons */}
      <nav className="mt-6 flex-1 overflow-y-auto px-3">
        <p className="px-2 pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-neutral-400">
          Lessons
        </p>
        <ul className="flex flex-col gap-0.5">
          <li>
            <Link
              href="/welcome"
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                pathname === "/welcome"
                  ? "bg-neutral-100 text-neutral-900"
                  : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900",
              )}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Sparkle className="h-3 w-3" />
              </span>
              Welcome
            </Link>
          </li>
          {lessons.map((lesson) => {
            const href = `/welcome/${lesson.slug}`;
            const active = pathname === href;
            const done = hydrated && isComplete(lesson.slug);
            return (
              <li key={lesson.slug}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[0.6rem] font-semibold transition-colors",
                      done
                        ? "border-primary bg-primary text-white"
                        : active
                          ? "border-neutral-300 bg-white text-neutral-500"
                          : "border-neutral-200 bg-white text-neutral-400",
                    )}
                  >
                    {done ? (
                      <Check className="h-3 w-3" strokeWidth={3} />
                    ) : (
                      lesson.number
                    )}
                  </span>
                  <span className="truncate">{lesson.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Unlock CTA */}
      <div className="p-3">
        <Link
          href="/toolkit/next-steps"
          onClick={onNavigate}
          className="group block overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-950 p-4 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary-300">
            The Profitable Brand Roadmap
          </p>
          <p className="mt-1 text-sm font-medium leading-snug text-white">
            Unlock all 15 modules
          </p>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/60">
            See the roadmap
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}
