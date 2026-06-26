"use client";

import { useContent } from "@/lib/i18n";
import { Container, SectionTitle } from "../primitives";

export default function Approach() {
  const c = useContent();
  return (
    <section id="approach" className="border-y border-line bg-mist py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow={c.approach.kicker} title={c.approach.title} lead={c.spelit.standfirst} />
        <div className="mt-12 grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {c.spelit.segments.map((s) => (
            <div key={s.letter} className="bg-paper p-7">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-medium text-navy dark:text-[#d8c4b2]">{s.letter}</span>
                <span className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-slate">{s.word}</span>
              </div>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">{s.gloss}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
