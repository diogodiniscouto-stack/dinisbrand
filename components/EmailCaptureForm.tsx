"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "./Icons";
import { cn } from "@/lib/utils";

/**
 * Email capture used across the funnel. On submit it (placeholder) hands the
 * email to your provider and sends the visitor straight into the free
 * members area at /welcome.
 */
export function EmailCaptureForm({
  theme = "light",
  buttonLabel = "Get the free starter kit",
  placeholder = "you@company.com",
  className,
}: {
  theme?: "light" | "dark";
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
    router.push("/welcome");
  }

  const dark = theme === "dark";

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
