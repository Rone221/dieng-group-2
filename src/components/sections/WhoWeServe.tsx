"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";
import { Container, SectionTitle, laneText, laneBg } from "../primitives";

function laneBorderTop(lane: "navy" | "teal" | "amber") {
  return lane === "navy" ? "border-t-navy" : lane === "teal" ? "border-t-teal" : "border-t-amber";
}

export default function WhoWeServe() {
  const c = useContent();
  return (
    <section id="serve" className="py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow={c.serve.kicker} title={c.b2.serveTitle} lead={c.serve.standfirst} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {c.lanes.map((l) => (
            <article key={l.name} className={`card flex flex-col overflow-hidden border-t-4 ${laneBorderTop(l.lane)}`}>
              <div className="relative aspect-[16/10] w-full bg-mist-deep">
                <Image src={l.image} alt={l.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className={`text-[0.74rem] font-bold uppercase tracking-[0.12em] ${laneText[l.lane]}`}>{l.name}</span>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{l.line}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {l.services.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-[0.9rem] text-ink/85">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${laneBg[l.lane]}`} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
