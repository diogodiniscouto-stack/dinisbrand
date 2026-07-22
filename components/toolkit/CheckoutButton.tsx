"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { cn } from "@/lib/utils";

/**
 * Starts a Stripe Checkout Session via /api/checkout and redirects the buyer
 * to Stripe's hosted checkout. Falls back to a friendly message if checkout
 * isn't configured yet.
 */
export function CheckoutButton({
  label = "Get The Profitable Brand Roadmap",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function start() {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = (await res.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };
      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      setError(data.error ?? "Checkout isn't available right now.");
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div>
      <button
        type="button"
        onClick={start}
        disabled={loading}
        className={cn(
          "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-[0.98rem] font-semibold text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98] disabled:opacity-70",
          className,
        )}
      >
        {loading ? "Redirecting to checkout…" : label}
        {!loading && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </button>
      {error && (
        <p className="mt-2 text-center text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
