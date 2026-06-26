"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";
import { Container, SectionTitle } from "../primitives";

export default function About() {
  const c = useContent();
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionTitle eyebrow={c.b2.aboutEyebrow} title={c.b2.aboutTitle} lead={c.b2.aboutLead} />
            <figure className="mt-8 overflow-hidden rounded border border-line bg-mist">
              <div className="relative aspect-[16/10] w-full">
                <Image src="/images/infographics/mission-vision-values.png" alt="The Dieng Group mission, vision and core values" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-contain p-2" />
              </div>
            </figure>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-slate">{c.b2.coreValues}</h3>
            <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {c.values.map((v, i) => (
                <div key={v.title}>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display text-sm font-medium text-orange">{String(i + 1).padStart(2, "0")}</span>
                    <h4 className="font-display text-lg font-medium text-ink">{v.title}</h4>
                  </div>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-slate">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
