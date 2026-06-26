import type { Metadata } from "next";
import Podcast from "@/components/sections/Podcast";

export const metadata: Metadata = {
  title: "Podcast — The Dieng Group",
  description: "Conversations from the corridor — the firm's podcast, episodes and channels.",
};

export default function PodcastPage() {
  return <Podcast />;
}
