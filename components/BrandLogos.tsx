import {
  siShopify,
  siMeta,
  siKlaviyo,
  siNotion,
  siTiktok,
  siStripe,
} from "simple-icons";

/**
 * Official brand marks from the Simple Icons package, rendered monochrome
 * (#9CA3AF) at 22px with a hover transition to black. Symbol + wordmark,
 * evenly spaced like a SaaS logo cloud.
 */
type SimpleIcon = { path: string; title: string };

function Brand({ icon, label }: { icon: SimpleIcon; label: string }) {
  return (
    <span className="group inline-flex items-center gap-2 text-[#9CA3AF] transition-all duration-300 hover:-translate-y-0.5 hover:text-black">
      <svg
        role="img"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
        className="h-[22px] w-[22px]"
      >
        <path d={icon.path} />
      </svg>
      <span className="text-[1.05rem] font-semibold tracking-tight">
        {label}
      </span>
    </span>
  );
}

export function ShopifyLogo() {
  return <Brand icon={siShopify} label="Shopify" />;
}
export function MetaLogo() {
  return <Brand icon={siMeta} label="Meta" />;
}
export function KlaviyoLogo() {
  return <Brand icon={siKlaviyo} label="Klaviyo" />;
}
export function NotionLogo() {
  return <Brand icon={siNotion} label="Notion" />;
}
export function TikTokLogo() {
  return <Brand icon={siTiktok} label="TikTok" />;
}
export function StripeLogo() {
  return <Brand icon={siStripe} label="Stripe" />;
}

export const brandLogos = [
  ShopifyLogo,
  MetaLogo,
  KlaviyoLogo,
  NotionLogo,
  TikTokLogo,
  StripeLogo,
];
