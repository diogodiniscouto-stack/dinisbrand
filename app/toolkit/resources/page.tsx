import type { Metadata } from "next";
import { ResourceLibrary } from "@/components/toolkit/ResourceLibrary";

export const metadata: Metadata = { title: "Resource Library" };

export default function Page() {
  return <ResourceLibrary />;
}
