import type { Metadata } from "next";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services — The Dieng Group",
  description: "Three umbrellas — private, NGO, government — scaled from Silver to Diamond, with extended partner services.",
};

export default function ServicesPage() {
  return (
    <>
      <WhoWeServe />
      <Services />
    </>
  );
}
