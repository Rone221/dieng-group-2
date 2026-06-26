import type { Metadata } from "next";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "The Team — The Dieng Group",
  description: "Advisors fluent across the private, civil and public sectors.",
};

export default function TeamPage() {
  return <Team />;
}
