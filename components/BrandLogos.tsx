/**
 * Self-contained monochrome brand marks for the "powered by" logo cloud.
 * Rendered in #9CA3AF at 22px with a hover transition to black, symbol +
 * wordmark, evenly spaced like a SaaS logo cloud. No external dependency, so
 * the build never breaks. Swap in official SVGs later if desired.
 */
import type { ReactNode } from "react";

function Brand({ children, label }: { children: ReactNode; label: string }) {
  return (
    <span className="group inline-flex items-center gap-2 text-[#9CA3AF] transition-all duration-300 hover:-translate-y-0.5 hover:text-black">
      {children}
      <span className="text-[1.05rem] font-semibold tracking-tight">
        {label}
      </span>
    </span>
  );
}

export function ShopifyLogo() {
  return (
    <Brand label="shopify">
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      >
        <path d="M6.5 8h11l-.9 11.2a1 1 0 01-1 .9H8.4a1 1 0 01-1-.9L6.5 8z" />
        <path d="M9 8.5V7a3 3 0 016 0v1.5" strokeLinecap="round" />
      </svg>
    </Brand>
  );
}

export function MetaLogo() {
  return (
    <Brand label="Meta">
      <svg
        viewBox="0 0 24 24"
        className="h-[19px] w-[26px]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
      >
        <path d="M4 12c0-2.4 1.7-4.2 3.8-4.2 2.6 0 4 4.2 4.2 4.2s1.6-4.2 4.2-4.2C20.3 7.8 22 9.6 22 12s-1.7 4.2-3.8 4.2c-2.6 0-4-4.2-4.2-4.2s-1.6 4.2-4.2 4.2C5.7 16.2 4 14.4 4 12z" />
      </svg>
    </Brand>
  );
}

export function KlaviyoLogo() {
  return (
    <Brand label="Klaviyo">
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="currentColor"
      >
        <path d="M5 4h4l7 8-7 8H5l7-8-7-8z" />
      </svg>
    </Brand>
  );
}

export function NotionLogo() {
  return (
    <Brand label="Notion">
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
        <path
          d="M8.5 16V8l7 8V8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Brand>
  );
}

export function TikTokLogo() {
  return (
    <Brand label="TikTok">
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px]"
        fill="currentColor"
      >
        <path d="M14.3 3h-2.4v11.6a2.35 2.35 0 11-2.06-2.33v-2.43a4.72 4.72 0 104.42 4.71V9.2a5.6 5.6 0 003.24 1.03V7.79a3.24 3.24 0 01-3.2-2.9V3z" />
      </svg>
    </Brand>
  );
}

export function StripeLogo() {
  return (
    <Brand label="stripe">
      <svg
        viewBox="0 0 24 24"
        className="h-[20px] w-[20px]"
        fill="currentColor"
      >
        <path d="M11.6 9.5c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V5.5A11 11 0 0013 4.8c-3.2 0-5.3 1.7-5.3 4.5 0 4.4 6 3.7 6 5.6 0 .8-.7 1.1-1.7 1.1-1.4 0-3.3-.6-4.7-1.4v4c1.6.7 3.2 1 4.7 1 3.3 0 5.5-1.6 5.5-4.5 0-4.7-6-3.9-6-5.6z" />
      </svg>
    </Brand>
  );
}

export const brandLogos = [
  ShopifyLogo,
  MetaLogo,
  KlaviyoLogo,
  NotionLogo,
  TikTokLogo,
  StripeLogo,
];
