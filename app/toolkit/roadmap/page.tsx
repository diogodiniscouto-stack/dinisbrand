import type { Metadata } from "next";
import { BeginnerRoadmap } from "@/components/toolkit/BeginnerRoadmap";
export const metadata: Metadata = { title: "The Beginner Roadmap" };
export default function Page() { return <BeginnerRoadmap />; }
