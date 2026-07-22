/**
 * Official brand marks (Simple Icons CDN) + wordmark, in #9CA3AF at 22px.
 * On hover both the icon (brightness(0) filter) and the wordmark darken to
 * black. Runtime <img> loads, no build dependency. Evenly spaced logo cloud.
 */
function Brand({ name, slug }: { name: string; slug: string }) {
  return (
    <span className="group inline-flex items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${slug}/9CA3AF`}
        alt={name}
        width={22}
        height={22}
        loading="lazy"
        className="h-[22px] w-auto shrink-0 transition-[filter] duration-300 group-hover:[filter:brightness(0)]"
      />
      <span className="text-[1.05rem] font-semibold tracking-tight text-[#9CA3AF] transition-colors duration-300 group-hover:text-black">
        {name}
      </span>
    </span>
  );
}

export function ShopifyLogo() {
  return <Brand name="shopify" slug="shopify" />;
}
export function MetaLogo() {
  return <Brand name="Meta" slug="meta" />;
}
export function KlaviyoLogo() {
  return (
    <span className="inline-flex items-center gap-2 text-[#9CA3AF] transition-all duration-300 hover:-translate-y-0.5 hover:text-black">
      <svg
        viewBox="0 0 24 24"
        aria-label="Klaviyo"
        className="h-[22px] w-[22px] shrink-0"
        fill="currentColor"
      >
        <path d="M2 3h20l-6 9 6 9H2V3z" />
      </svg>
      <span className="text-[1.05rem] font-semibold tracking-tight">Klaviyo</span>
    </span>
  );
}
export function NotionLogo() {
  return <Brand name="Notion" slug="notion" />;
}
export function TikTokLogo() {
  return <Brand name="TikTok" slug="tiktok" />;
}
export function StripeLogo() {
  return <Brand name="stripe" slug="stripe" />;
}

export const brandLogos = [
  ShopifyLogo,
  MetaLogo,
  KlaviyoLogo,
  NotionLogo,
  TikTokLogo,
  StripeLogo,
];
