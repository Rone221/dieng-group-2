"use client";

import { useContent } from "@/lib/i18n";
import { Container } from "../primitives";

export default function Corridor() {
  const c = useContent();
  return (
    <section className="border-b border-line bg-mist">
      <Container className="py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <span className="shrink-0 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-slate">
            {c.routeKicker}
          </span>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {c.route.map((r, i) => (
              <li key={r.place} className="flex items-center gap-7">
                <span className="font-display text-lg font-medium text-navy dark:text-[#d8c4b2]">{r.place}</span>
                {i < c.route.length - 1 && <span className="text-line">/</span>}
              </li>
            ))}
          </ul>
          <span className="shrink-0 text-[0.82rem] text-slate">{c.expansion}</span>
        </div>
      </Container>
    </section>
  );
}
