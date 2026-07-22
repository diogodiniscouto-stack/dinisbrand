"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Grid,
  ShieldCheck,
  Map,
  Target,
  Folder,
  Bolt,
  Store,
  AlertTriangle,
  ArrowUpRight,
} from "@/components/Icons";
import { cn } from "@/lib/utils";

export const toolkitNav = [
  { label: "Dashboard", href: "/toolkit", icon: Grid },
  { label: "Ecommerce Reality Check", href: "/toolkit/reality-check", icon: ShieldCheck },
  { label: "Beginner Roadmap", href: "/toolkit/roadmap", icon: Map },
  { label: "Product Validation Framework", href: "/toolkit/validation", icon: Target },
  { label: "Product Research Resources", href: "/toolkit/research-resources", icon: Folder },
  { label: "AI Prompt Library", href: "/toolkit/prompts", icon: Bolt },
  { label: "Shopify Launch Checklist", href: "/toolkit/shopify-checklist", icon: Store },
  { label: "Beginner Mistakes", href: "/toolkit/mistakes", icon: AlertTriangle },
];

export function ToolkitSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Brand lockup */}
      <div className="px-4 pt-5">
        <Link
          href="/toolkit"
          onClick={onNavigate}
          className="group flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-neutral-50"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
            D
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[0.82rem] font-semibold tracking-tight text-neutral-900">
              Profitable Brand
              <br />
              Starter Kit
            </span>
            <span className="mt-1 block text-[0.68rem] font-medium text-neutral-400">
              by Dinis
            </span>
          </span>
        </Link>
      </div>

      <div className="mx-4 my-4 h-px bg-neutral-100" />

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3">
        <p className="px-3 pb-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-neutral-300">
          The Kit
        </p>
        <ul className="flex flex-col gap-0.5">
          {toolkitNav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl py-2.5 pl-3 pr-2 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900",
                  )}
                >
                  {/* Active accent bar */}
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-accent transition-all duration-300",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                    )}
                  />
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-all duration-200",
                      active
                        ? "bg-accent/10 text-accent"
                        : "text-neutral-400 group-hover:-translate-y-0.5 group-hover:text-neutral-700",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="leading-tight">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Next steps CTA */}
      <div className="p-3">
        <Link
          href="/toolkit/next-steps"
          onClick={onNavigate}
          className="group relative block overflow-hidden rounded-2xl bg-neutral-950 p-4 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
          />
          <div className="relative">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent-300">
              Finished the Starter Kit?
            </p>
            <p className="mt-1 text-sm font-semibold leading-snug text-white">
              Ready to build a real ecommerce brand?
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/60">
              Explore next steps
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
