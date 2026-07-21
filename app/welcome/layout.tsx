import type { Metadata } from "next";
import { DashboardShell } from "@/components/starter-kit/DashboardShell";

export const metadata: Metadata = {
  title: {
    default: "Free Starter Kit",
    template: "%s · Starter Kit · Diogo Dinis",
  },
  description:
    "Your private Zero to Brand™ Starter Kit, six lessons and downloadable templates to validate and launch a profitable ecommerce brand.",
  robots: { index: false, follow: false },
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
