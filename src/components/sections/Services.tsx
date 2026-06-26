"use client";

import { useContent } from "@/lib/i18n";
import { Container, SectionTitle, laneText, laneBg } from "../primitives";

function borderL(lane: "navy" | "teal" | "amber") {
  return lane === "navy" ? "border-navy" : lane === "teal" ? "border-teal" : "border-amber";
}

export default function Services() {
  const c = useContent();
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow={c.services.kicker} title={c.b2.servicesTitle} lead={c.services.standfirst} />

        <div className="mt-14 space-y-px overflow-hidden rounded border border-line bg-line">
          {c.lanes.map((l) => (
            <div key={l.name} className="grid gap-6 bg-paper p-7 md:grid-cols-12 md:p-9">
              <div className="md:col-span-4">
                <span className={`inline-block border-l-2 pl-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] ${laneText[l.lane]} ${borderL(l.lane)}`}>
                  {l.name}
                </span>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">{l.line}</p>
              </div>
              <ul className="grid gap-x-8 gap-y-2.5 md:col-span-8 sm:grid-cols-2">
                {l.services.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-[0.92rem] text-ink/85">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${laneBg[l.lane]}`} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="h3 text-ink">{c.services.tiersKicker}</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.tiers.map((t) => (
              <div key={t.name} className="card p-6">
                <span className="font-display text-xl font-medium text-navy dark:text-[#d8c4b2]">{t.name}</span>
                <p className="mt-2 text-[0.88rem] leading-snug text-slate">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded border border-line bg-mist p-7 md:p-8">
          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.12em] text-slate">{c.services.extendedKicker}</h3>
          <p className="mt-2 max-w-xl text-[0.92rem] text-slate">{c.partnerServices.line}</p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {c.partnerServices.items.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-[0.9rem] text-ink/85">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-bright" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
