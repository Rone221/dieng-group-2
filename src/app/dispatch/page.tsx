import type { Metadata } from "next";
import DispatchDesk from "@/components/DispatchDesk";
import Podcast from "@/components/sections/Podcast";

export const metadata: Metadata = {
  title: "The Meridian Dispatch — The Dieng Group",
  description: "Subscribe to the newsletter and download the gated PDF brief from the corridor.",
};

export default function DispatchPage() {
  return (
    <>
      <DispatchDesk />
      <Podcast />
    </>
  );
}
