import type { Metadata } from "next";
import { WelcomeContent } from "@/components/WelcomeContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Welcome to Zero to Brand™",
  description:
    "Your free Zero to Brand™ starter path — Lesson 1, free templates, niche validation, brand positioning and the Shopify launch checklist.",
  robots: { index: false, follow: false },
};

export default function WelcomePage() {
  return (
    <>
      <WelcomeContent />
      <Footer />
    </>
  );
}
