import type { Metadata } from "next";
import { SupplierTemplates } from "@/components/toolkit/SupplierTemplates";

export const metadata: Metadata = { title: "Supplier Outreach Templates" };

export default function Page() {
  return <SupplierTemplates />;
}
