"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useContent } from "@/lib/i18n";
import { Container, SectionTitle } from "../primitives";

type Member = ReturnType<typeof useContent>["team"]["members"][number];

export default function Team() {
  const c = useContent();
  const [active, setActive] = useState<Member | null>(null);

  return (
    <section id="team" className="py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow={c.team.kicker} title={c.b2.teamTitle} lead={c.b2.teamLead} />

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {c.team.members.map((m) => (
            <li key={m.name}>
              <button
                type="button"
                onClick={() => setActive(m)}
                className="group block w-full text-left"
                aria-haspopup="dialog"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded border border-line bg-mist-deep">
                  {m.image ? (
                    <Image src={m.image} alt={`${m.name}, ${m.role}`} fill sizes="(max-width: 640px) 50vw, 30vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" className="text-navy/35 dark:text-on-dark/30" aria-hidden>
                        <circle cx="12" cy="8" r="4" fill="currentColor" />
                        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="currentColor" />
                      </svg>
                      <span className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-slate/70">{c.team.pending}</span>
                    </div>
                  )}
                  <span className="absolute inset-x-0 bottom-0 translate-y-full bg-navy/90 px-3 py-1.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-on-dark transition-transform duration-300 group-hover:translate-y-0">
                    {c.ui.viewProfile} →
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">{m.name}</h3>
                <p className="text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-navy dark:text-[#d8c4b2]">{m.role}</p>
                <p className="mt-1 text-[0.84rem] text-slate">{m.fluency}</p>
              </button>
            </li>
          ))}
        </ul>
      </Container>

      {active && <MemberModal member={active} onClose={() => setActive(null)} closeLabel={c.ui.close} />}
    </section>
  );
}

function MemberModal({ member, onClose, closeLabel }: { member: Member; onClose: () => void; closeLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const el = ref.current;
    const focusables = () => Array.from(el?.querySelectorAll<HTMLElement>('a[href],button,[tabindex]:not([tabindex="-1"])') ?? []);
    focusables()[0]?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const list = focusables();
      if (!list.length) return;
      const i = list.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); list[list.length - 1].focus(); }
      else if (!e.shiftKey && i === list.length - 1) { e.preventDefault(); list[0].focus(); }
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; prev?.focus(); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/70 p-4" onClick={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="member-name"
        className="relative grid w-full max-w-2xl gap-6 rounded bg-paper p-6 shadow-2xl sm:grid-cols-[200px_1fr] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label={closeLabel} className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center text-slate hover:text-ink">✕</button>

        <div className="relative aspect-square w-full overflow-hidden rounded border border-line bg-mist-deep">
          {member.image ? (
            <Image src={member.image} alt={member.name} fill sizes="200px" className="object-cover object-top" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-navy/30" aria-hidden>
                <circle cx="12" cy="8" r="4" fill="currentColor" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="currentColor" />
              </svg>
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 id="member-name" className="font-display text-2xl font-medium text-ink">{member.name}</h3>
          <p className="mt-1 text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-navy dark:text-[#d8c4b2]">{member.role}</p>
          <div className="accent-rule mt-4" />
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate">{member.bio}</p>
          <p className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-slate/80">{member.fluency}</p>
        </div>
      </div>
    </div>
  );
}
