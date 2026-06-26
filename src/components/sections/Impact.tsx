"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";
import { Container, SectionTitle } from "../primitives";

export default function Impact() {
  const c = useContent();
  return (
    <section id="impact" className="border-t border-line bg-mist py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow={c.impact.kicker} title={c.b2.impactTitle} lead={c.impact.standfirst} />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {c.fieldNotes.map((n) => (
            <article key={n.title} className="card flex flex-col overflow-hidden">
              <div className="relative aspect-[16/11] w-full bg-mist-deep">
                <Image src={n.image} alt={n.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-orange">
                  {n.tag.replace(/^.*· /, "")}
                </span>
                <h3 className="h3 mt-2 text-ink">{n.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">{n.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
