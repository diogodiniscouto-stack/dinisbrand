"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { lessons } from "@/lib/starterKit";

type ProgressValue = {
  completed: string[];
  hydrated: boolean;
  isComplete: (slug: string) => boolean;
  toggle: (slug: string) => void;
  markComplete: (slug: string) => void;
  completedCount: number;
  total: number;
  percent: number;
  firstIncompleteSlug: string;
};

const ProgressContext = createContext<ProgressValue | null>(null);
const STORAGE_KEY = "dinisbrands:starter-progress";

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completed, setCompleted] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load once on mount to avoid hydration mismatch.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setCompleted(parsed.filter((s) => typeof s === "string"));
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      /* ignore */
    }
  }, [completed, hydrated]);

  const isComplete = useCallback(
    (slug: string) => completed.includes(slug),
    [completed],
  );

  const toggle = useCallback((slug: string) => {
    setCompleted((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }, []);

  const markComplete = useCallback((slug: string) => {
    setCompleted((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
  }, []);

  const value = useMemo<ProgressValue>(() => {
    const valid = completed.filter((s) => lessons.some((l) => l.slug === s));
    const total = lessons.length;
    const completedCount = valid.length;
    const firstIncomplete =
      lessons.find((l) => !valid.includes(l.slug))?.slug ?? lessons[0].slug;
    return {
      completed,
      hydrated,
      isComplete,
      toggle,
      markComplete,
      completedCount,
      total,
      percent: Math.round((completedCount / total) * 100),
      firstIncompleteSlug: firstIncomplete,
    };
  }, [completed, hydrated, isComplete, toggle, markComplete]);

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return ctx;
}
