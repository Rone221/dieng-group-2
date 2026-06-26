import type { Metadata } from "next";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";

export const metadata: Metadata = {
  title: "About — The Dieng Group",
  description: "Mission, vision, core values, and the SPELIT lens behind every engagement.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Approach />
    </>
  );
}
