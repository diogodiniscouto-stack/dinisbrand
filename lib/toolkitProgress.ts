"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

/** Ordered lesson routes that count towards Starter Kit progress. */
export const TOOLKIT_LESSONS = [
  "/toolkit/reality-check",
  "/toolkit/roadmap",
  "/toolkit/validation",
  "/toolkit/research-resources",
  "/toolkit/prompts",
  "/toolkit/shopify-checklist",
  "/toolkit/mistakes",
];

const KEY = "toolkit:progress";

/**
 * Tracks which Starter Kit lessons a visitor has opened (persisted to
 * localStorage). Powers the dashboard progress bar and "continue where you
 * left off" flow. Writes happen only via `mark`, so read-only consumers
 * never clobber it.
 */
export function useToolkitProgress() {
  const [visited, setVisited] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setVisited(parsed.filter((x) => typeof x === "string"));
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const mark = useCallback((href: string) => {
    setVisited((prev) => {
      if (prev.includes(href)) return prev;
      const next = [...prev, href];
      try {
        window.localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const derived = useMemo(() => {
    const valid = visited.filter((v) => TOOLKIT_LESSONS.includes(v));
    const count = valid.length;
    const total = TOOLKIT_LESSONS.length;
    const next =
      TOOLKIT_LESSONS.find((l) => !valid.includes(l)) ?? TOOLKIT_LESSONS[0];
    return {
      count,
      total,
      percent: Math.round((count / total) * 100),
      next,
      started: count > 0,
      finished: count === total,
    };
  }, [visited]);

  return { ...derived, hydrated, mark };
}
