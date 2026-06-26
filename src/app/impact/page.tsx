import type { Metadata } from "next";
import Impact from "@/components/sections/Impact";

export const metadata: Metadata = {
  title: "Our Impact — The Dieng Group",
  description: "Impact told through outcomes and relationships, not statistics.",
};

export default function ImpactPage() {
  return <Impact />;
}
