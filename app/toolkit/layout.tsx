import type { Metadata } from "next";
import { ToolkitShell } from "@/components/toolkit/ToolkitShell";

export const metadata: Metadata = {
  title: {
    default: "Founder Toolkit",
    template: "%s · Founder Toolkit · Zero to Brand™",
  },
  description:
    "The Founder Toolkit by Dinis — free editable frameworks, interactive tools and resources to start building your ecommerce brand.",
  robots: { index: false, follow: false },
};

export default function ToolkitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ToolkitShell>{children}</ToolkitShell>;
}
