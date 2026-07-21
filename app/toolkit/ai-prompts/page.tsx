import type { Metadata } from "next";
import { AIPrompts } from "@/components/toolkit/AIPrompts";

export const metadata: Metadata = { title: "AI Prompt Library" };

export default function Page() {
  return <AIPrompts />;
}
