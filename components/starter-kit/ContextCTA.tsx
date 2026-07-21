import Link from "next/link";
import { Map, Calendar, ArrowRight } from "@/components/Icons";

/**
 * Elegant contextual upsell used between lessons — alternating between the
 * paid roadmap and 1:1 mentorship to build trust before any purchase.
 */
export function ContextCTA({ variant }: { variant: "roadmap" | "mentorship" }) {
  const isRoadmap = variant === "roadmap";
  const Icon = isRoadmap ? Map : Calendar;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-neutral-950 p-6 shadow-card sm:p-8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary-300">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-300">
              {isRoadmap ? "Zero to Brand™" : "1:1 Mentorship"}
            </span>
            <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white">
              {isRoadmap
                ? "Ready for the complete roadmap?"
                : "Want me in your corner?"}
            </h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-white/60">
              {isRoadmap
                ? "This kit is the foundation. Zero to Brand™ is all 15 modules — from suppliers and content to retention, finance and running your brand like a company."
                : "1:1 mentorship includes the full roadmap, weekly calls and line-by-line reviews of your store as you build."}
            </p>
          </div>
        </div>
        <Link
          href={isRoadmap ? "/#zero-to-brand" : "/#mentorship"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-soft transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98]"
        >
          {isRoadmap ? "Explore the roadmap" : "Apply for mentorship"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
