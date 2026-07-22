import type { Metadata } from "next";
import { ResearchResources } from "@/components/toolkit/ResearchResources";
export const metadata: Metadata = { title: "Product Research Resources" };
export default function Page() { return <ResearchResources />; }
