import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-neutral-900 text-white shadow-soft hover:bg-neutral-800 hover:shadow-card active:scale-[0.98]",
  secondary:
    "border border-neutral-200 bg-white text-neutral-800 shadow-soft hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.98]",
  ghost: "text-neutral-700 hover:bg-neutral-100 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & ComponentProps<typeof Link>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

type ButtonElProps = {
  variant?: Variant;
  size?: Size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonEl({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonElProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
