import type { Metadata } from "next";
import { RealityCheck } from "@/components/toolkit/RealityCheck";
export const metadata: Metadata = { title: "The Ecommerce Reality Check" };
export default function Page() { return <RealityCheck />; }
