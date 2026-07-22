import type { Metadata } from "next";
import { ToolkitShell } from "@/components/toolkit/ToolkitShell";

export const metadata: Metadata = {
  title: {
    default: "Profitable Brand Starter Kit",
    template: "%s · Profitable Brand Starter Kit",
  },
  description:
    "The Profitable Brand Starter Kit by Dinis, a free premium onboarding for future founders: reality check, roadmap, validation, research resources, AI prompts and a Shopify launch checklist.",
  robots: { index: false, follow: false },
};

export default function ToolkitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ToolkitShell>{children}</ToolkitShell>;
}
