import type { Metadata } from "next";
import { ProductValidation } from "@/components/toolkit/ProductValidation";

export const metadata: Metadata = { title: "Product Validation Scorecard" };

export default function Page() {
  return <ProductValidation />;
}
