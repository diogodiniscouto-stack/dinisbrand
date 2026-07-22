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
  ArrowRight,
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
      {/* Brand */}
      <div className="px-5 pt-5">
        <Link href="/toolkit" onClick={onNavigate} className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white shadow-soft">
            D
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[0.82rem] font-semibold leading-tight tracking-tight text-neutral-900">
              Profitable Brand
              <br />
              Starter Kit
            </span>
          </span>
        </Link>
      </div>

      <div className="px-5 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-accent">
          Free · by Dinis
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
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-colors",
                      active ? "bg-accent/10 text-accent" : "text-neutral-400",
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
          className="group block overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-950 p-4 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent-300">
            When you&apos;re ready
          </p>
          <p className="mt-1 text-sm font-medium leading-snug text-white">
            Build your brand
          </p>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/60">
            See next steps
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}
