"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Grid,
  Target,
  Compass,
  Box,
  Store,
  Bolt,
  Calculator,
  Folder,
  ArrowRight,
} from "@/components/Icons";
import { cn } from "@/lib/utils";

export const toolkitNav = [
  { label: "Dashboard", href: "/toolkit", icon: Grid },
  { label: "Product Validation", href: "/toolkit/product-validation", icon: Target },
  { label: "Brand Canvas", href: "/toolkit/brand-canvas", icon: Compass },
  { label: "Supplier Templates", href: "/toolkit/supplier-templates", icon: Box },
  { label: "Shopify Checklist", href: "/toolkit/shopify-checklist", icon: Store },
  { label: "AI Prompts", href: "/toolkit/ai-prompts", icon: Bolt },
  { label: "Profit Calculator", href: "/toolkit/profit-calculator", icon: Calculator },
  { label: "Resource Library", href: "/toolkit/resources", icon: Folder },
];

export function ToolkitSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="px-5 pt-5">
        <Link
          href="/toolkit"
          onClick={onNavigate}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white shadow-soft">
            D
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[0.9rem] font-semibold tracking-tight text-neutral-900">
              Zero to Brand™
            </span>
            <span className="mt-0.5 text-[0.7rem] font-medium text-neutral-400">
              by Dinis
            </span>
          </span>
        </Link>
      </div>

      <div className="px-5 pt-5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Founder Toolkit
        </span>
      </div>

      {/* Nav */}
      <nav className="mt-4 flex-1 overflow-y-auto px-3">
        <ul className="flex flex-col gap-0.5">
          {toolkitNav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-lg transition-colors",
                      active
                        ? "bg-accent/10 text-accent"
                        : "text-neutral-400",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mentorship CTA */}
      <div className="p-3">
        <a
          href="https://www.linkedin.com/in/diogo-dinis-a16bb1188/"
          target="_blank"
          rel="noreferrer"
          onClick={onNavigate}
          className="group block overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-950 p-4 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent-300">
            Work with me
          </p>
          <p className="mt-1 text-sm font-medium leading-snug text-white">
            1:1 Mentorship
          </p>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/60">
            Apply on LinkedIn
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>
    </div>
  );
}
