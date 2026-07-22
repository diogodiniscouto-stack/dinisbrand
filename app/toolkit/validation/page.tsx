import type { Metadata } from "next";
import { ValidationFramework } from "@/components/toolkit/ValidationFramework";
export const metadata: Metadata = { title: "Product Validation Framework" };
export default function Page() { return <ValidationFramework />; }
