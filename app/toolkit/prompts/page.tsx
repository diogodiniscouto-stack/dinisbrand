import type { Metadata } from "next";
import { PromptLibrary } from "@/components/toolkit/PromptLibrary";
export const metadata: Metadata = { title: "AI Prompt Library" };
export default function Page() { return <PromptLibrary />; }
