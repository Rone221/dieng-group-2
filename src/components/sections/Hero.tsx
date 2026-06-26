"use client";

import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/lib/i18n";

export default function Hero() {
  const c = useContent();
  return (
    <section id="top" className="grid items-stretch md:grid-cols-2">
      {/* Text panel */}
      <div className="order-2 flex flex-col justify-center bg-navy-deep px-6 py-16 text-on-dark md:order-1 md:px-12 md:py-24">
        <div className="max-w-xl">
          <span className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-gold-bright">
            {c.ui.heroEyebrow}
          </span>
          <div className="brand-bar mt-4 h-1 w-14 rounded" />
          <h1 className="h1 mt-5 text-on-dark">{c.hero.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-on-dark/80">{c.hero.standfirst}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="rounded bg-orange px-7 py-3.5 text-[0.95rem] font-semibold text-on-dark transition-opacity hover:opacity-90">
              {c.ui.cta}
            </Link>
            <Link href="/services" className="rounded border border-on-dark/30 px-7 py-3.5 text-[0.95rem] font-semibold text-on-dark transition-colors hover:bg-on-dark/10">
              {c.ui.exploreServices}
            </Link>
          </div>
        </div>
      </div>

      {/* Full-colour image, no overlay */}
      <div className="relative order-1 min-h-[40vh] md:order-2 md:min-h-0">
        <Image
          src="/images/dakar-skyline.jpg"
          alt="The Dakar waterfront at golden hour"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
