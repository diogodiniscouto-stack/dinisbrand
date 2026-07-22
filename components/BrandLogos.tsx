/**
 * Official brand marks from the Simple Icons CDN, requested in #9CA3AF and
 * rendered at 22px. On hover a brightness(0) filter darkens them to black.
 * These are runtime <img> loads (no build dependency), evenly spaced like a
 * SaaS logo cloud.
 */
const brands = [
  { name: "Shopify", slug: "shopify" },
  { name: "Meta", slug: "meta" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Notion", slug: "notion" },
  { name: "TikTok", slug: "tiktok" },
  { name: "Stripe", slug: "stripe" },
];

function Brand({ name, slug }: { name: string; slug: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/9CA3AF`}
      alt={name}
      width={22}
      height={22}
      loading="lazy"
      className="h-[22px] w-auto shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:[filter:brightness(0)]"
    />
  );
}

export function ShopifyLogo() {
  return <Brand name="Shopify" slug="shopify" />;
}
export function MetaLogo() {
  return <Brand name="Meta" slug="meta" />;
}
export function KlaviyoLogo() {
  return <Brand name="Klaviyo" slug="klaviyo" />;
}
export function NotionLogo() {
  return <Brand name="Notion" slug="notion" />;
}
export function TikTokLogo() {
  return <Brand name="TikTok" slug="tiktok" />;
}
export function StripeLogo() {
  return <Brand name="Stripe" slug="stripe" />;
}

export const brandLogos = [
  ShopifyLogo,
  MetaLogo,
  KlaviyoLogo,
  NotionLogo,
  TikTokLogo,
  StripeLogo,
];
