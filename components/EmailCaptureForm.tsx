"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "./Icons";
import { cn } from "@/lib/utils";

/**
 * Email capture used across the funnel. On submit it (placeholder) hands the
 * email to your provider and sends the visitor straight into the free
 * Founder Toolkit at /toolkit.
 */
export function EmailCaptureForm({
  theme = "light",
  size = "default",
  buttonLabel = "Build My Brand",
  placeholder = "Enter your email address...",
  className,
}: {
  theme?: "light" | "dark";
  size?: "default" | "hero";
  buttonLabel?: string;
  placeholder?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || loading) return;
    setLoading(true);
    // TODO: POST the email to your provider (Loops, ConvertKit, Resend…).
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem("dinisbrands:lead", email);
      } catch {
        /* ignore storage errors */
      }
    }
    router.push("/toolkit");
  }

  const dark = theme === "dark";

  // Large, premium unified pill for the hero.
  if (size === "hero") {
    return (
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex flex-col gap-2 rounded-[1.4rem] bg-white p-2 sm:flex-row sm:items-center sm:rounded-full",
          className,
        )}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className="h-14 flex-1 rounded-full bg-transparent px-5 text-[1.02rem] text-neutral-900 outline-none placeholder:text-neutral-400 sm:px-6"
        />
        <button
          type="submit"
          disabled={loading}
          className="group/btn relative inline-flex h-14 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-[#5B7BFF] px-7 text-[1.02rem] font-semibold text-white shadow-[0_12px_34px_-10px_rgba(59,91,255,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgba(59,91,255,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.99] disabled:opacity-70"
        >
          {/* Shine sweep on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
          />
          <span className="relative">{loading ? "Sending…" : buttonLabel}</span>
          {!loading && (
            <ArrowRight className="relative h-[1.1rem] w-[1.1rem] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          )}
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-2.5 sm:flex-row", className)}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        aria-label="Email address"
        className={cn(
          "h-12 flex-1 rounded-full border px-5 text-[0.95rem] shadow-soft outline-none transition-all",
          dark
            ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-4 focus:ring-white/10"
            : "border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10",
        )}
      />
      <button
        type="submit"
        disabled={loading}
        className={cn(
          "group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-base font-medium tracking-tight shadow-soft transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-70",
          dark
            ? "bg-white text-neutral-900 hover:bg-neutral-100 focus-visible:ring-white/40"
            : "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-primary/40",
        )}
      >
        {loading ? "Sending…" : buttonLabel}
        {!loading && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </button>
    </form>
  );
}
