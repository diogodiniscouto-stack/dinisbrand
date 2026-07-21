/**
 * Simplified, monochrome brand marks for the "powered by" logo cloud.
 * Each renders in currentColor so the row can be tinted/greyed uniformly.
 */

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-neutral-400 transition-colors duration-300 hover:text-neutral-700">
      {children}
    </span>
  );
}

const word = "text-[1.05rem] font-semibold tracking-tight";

export function ShopifyLogo() {
  return (
    <Wrapper>
      <svg
        viewBox="0 0 24 24"
        className="h-[1.15rem] w-[1.15rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      >
        <path d="M6.5 8h11l-.9 11.2a1 1 0 01-1 .9H8.4a1 1 0 01-1-.9L6.5 8z" />
        <path d="M9 8.5V7a3 3 0 016 0v1.5" strokeLinecap="round" />
      </svg>
      <span className={word}>shopify</span>
    </Wrapper>
  );
}

export function MetaLogo() {
  return (
    <Wrapper>
      <svg
        viewBox="0 0 28 16"
        className="h-[0.95rem] w-[1.7rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <path d="M2.4 11.8C1.6 11.8 1 10.6 1 8.6 1 6 2.3 4.2 4.1 4.2c2.3 0 3.7 3.4 5.4 5.9M9.5 10.1C11.2 7.6 12.6 4.2 15 4.2c1.8 0 3.1 1.8 3.1 4.4 0 2-.6 3.2-1.4 3.2-2.3 0-3.7-3.4-5.4-5.9" />
      </svg>
      <span className={word}>Meta</span>
    </Wrapper>
  );
}

export function KlaviyoLogo() {
  return (
    <Wrapper>
      <svg viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem]" fill="currentColor">
        <path d="M3 4h4l5 6-5 6H3l5-6-5-6z" opacity={0.55} />
        <path d="M9 4h4l6 8-6 8H9l6-8-6-8z" />
      </svg>
      <span className={word}>Klaviyo</span>
    </Wrapper>
  );
}

export function NotionLogo() {
  return (
    <Wrapper>
      <svg
        viewBox="0 0 24 24"
        className="h-[1.15rem] w-[1.15rem]"
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
      <span className={word}>Notion</span>
    </Wrapper>
  );
}

export function TikTokLogo() {
  return (
    <Wrapper>
      <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" fill="currentColor">
        <path d="M14.3 3h-2.4v11.6a2.35 2.35 0 11-2.06-2.33v-2.43a4.72 4.72 0 104.42 4.71V9.2a5.6 5.6 0 003.24 1.03V7.79a3.24 3.24 0 01-3.2-2.9V3z" />
      </svg>
      <span className={word}>TikTok</span>
    </Wrapper>
  );
}

export function StripeLogo() {
  return (
    <Wrapper>
      <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" fill="currentColor">
        <path d="M11.6 9.5c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V5.5A11 11 0 0013 4.8c-3.2 0-5.3 1.7-5.3 4.5 0 4.4 6 3.7 6 5.6 0 .8-.7 1.1-1.7 1.1-1.4 0-3.3-.6-4.7-1.4v4c1.6.7 3.2 1 4.7 1 3.3 0 5.5-1.6 5.5-4.5 0-4.7-6-3.9-6-5.6z" />
      </svg>
      <span className={word}>stripe</span>
    </Wrapper>
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
