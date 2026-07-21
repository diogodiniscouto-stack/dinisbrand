import type { Metadata } from "next";
import { BrandCanvas } from "@/components/toolkit/BrandCanvas";

export const metadata: Metadata = { title: "Brand Positioning Canvas" };

export default function Page() {
  return <BrandCanvas />;
}
