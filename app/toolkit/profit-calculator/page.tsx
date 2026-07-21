import type { Metadata } from "next";
import { ProfitCalculator } from "@/components/toolkit/ProfitCalculator";

export const metadata: Metadata = { title: "Profit Calculator" };

export default function Page() {
  return <ProfitCalculator />;
}
