"use client";

import Link from "next/link";
import { useContent } from "@/lib/i18n";
import Hero from "@/components/sections/Hero";
import Corridor from "@/components/sections/Corridor";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Approach from "@/components/sections/Approach";
import { Container } from "@/components/primitives";

export default function Home() {
  const c = useContent();
  return (
    <>
      <Hero />
      <Corridor />
      <WhoWeServe />
      <Approach />

      <section className="bg-navy py-16 text-on-dark md:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="h2 max-w-2xl text-on-dark">{c.ui.closingTitle}</h2>
            <Link href="/contact" className="shrink-0 rounded bg-orange px-7 py-3.5 text-[0.95rem] font-semibold text-on-dark transition-opacity hover:opacity-90">
              {c.ui.cta}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
