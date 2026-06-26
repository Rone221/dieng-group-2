"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";
import { Container, SectionTitle } from "../primitives";

export default function Team() {
  const c = useContent();
  return (
    <section id="team" className="py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow={c.team.kicker} title={c.b2.teamTitle} lead={c.b2.teamLead} />

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {c.team.members.map((m) => (
            <li key={m.name}>
              <div className="relative aspect-square w-full overflow-hidden rounded border border-line bg-mist-deep">
                {m.image ? (
                  <Image src={m.image} alt={`${m.name}, ${m.role}`} fill sizes="(max-width: 640px) 50vw, 30vw" className="object-cover object-top" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" className="text-navy/35 dark:text-on-dark/30" aria-hidden>
                      <circle cx="12" cy="8" r="4" fill="currentColor" />
                      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="currentColor" />
                    </svg>
                    <span className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-slate/70">{c.team.pending}</span>
                  </div>
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">{m.name}</h3>
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-navy dark:text-[#d8c4b2]">{m.role}</p>
              <p className="mt-1 text-[0.84rem] text-slate">{m.fluency}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
