import type { Metadata } from "next";
import { ShopifyChecklist } from "@/components/toolkit/ShopifyChecklist";

export const metadata: Metadata = { title: "Shopify Launch Checklist" };

export default function Page() {
  return <ShopifyChecklist />;
}
