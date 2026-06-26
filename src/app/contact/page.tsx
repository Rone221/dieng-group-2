import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — The Dieng Group",
  description: "Tell us where you operate, through a few qualifying questions. We'll meet you there.",
};

export default function ContactPage() {
  return <Contact />;
}
