"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useContent } from "@/lib/i18n";
import { Container, SectionTitle } from "./primitives";

function useDialogA11y(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previously = document.activeElement as HTMLElement | null;
    const el = ref.current;
    const focusables = () =>
      Array.from(
        el?.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
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
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previously?.focus();
    };
  }, [onClose]);
  return ref;
}

export default function DispatchDesk() {
  const c = useContent();
  const d = c.dispatch;
  const [open, setOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="dispatch" className="py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow={d.sectionKicker} title={d.title} lead={d.blurb} />

        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded border border-line bg-navy-deep">
              <Image src={d.cover} alt="The Meridian Dispatch, Issue 01" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-navy-deep/85 via-transparent to-navy-deep/30 p-5">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-on-dark/90">The Meridian Dispatch</span>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-gold-bright">Issue 01</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:col-span-8 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="h3 text-ink">{c.ui.download}</h3>
              <p className="mt-2 text-[0.9rem] text-slate">{d.browseNote}</p>
              <button onClick={() => setOpen(true)} className="mt-5 rounded bg-navy px-6 py-3 text-[0.9rem] font-semibold text-on-dark transition-colors hover:bg-navy-deep">
                {d.download}
              </button>
            </div>

            <div className="card p-6">
              <h3 className="h3 text-ink">{c.ui.subscribe}</h3>
              {subscribed ? (
                <p className="mt-3 text-[0.9rem] text-slate">{d.subscribedThanks}</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                  <p className="mt-2 text-[0.9rem] text-slate">{d.newsletterNote}</p>
                  <input type="email" required placeholder="you@example.com" className="in mt-4" />
                  <button type="submit" className="mt-3 rounded bg-orange px-5 py-2.5 text-[0.88rem] font-semibold text-on-dark transition-opacity hover:opacity-90">
                    {c.ui.subscribe}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>

      {open && <CaptureModal onClose={() => setOpen(false)} />}
    </section>
  );
}

function CaptureModal({ onClose }: { onClose: () => void }) {
  const c = useContent();
  const d = c.dispatch;
  const [done, setDone] = useState(false);
  const ref = useDialogA11y(onClose);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/70 p-4" onClick={onClose}>
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby="w2-capture-title" className="relative w-full max-w-lg rounded bg-paper p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close dialog" className="absolute right-4 top-3 flex h-9 w-9 items-center justify-center text-slate hover:text-ink">✕</button>

        {done ? (
          <div className="py-6 text-center">
            <h3 id="w2-capture-title" className="h3 text-ink">{d.modalDoneTitle}</h3>
            <p className="mt-2 text-[0.92rem] text-slate">{d.modalDoneBody}</p>
          </div>
        ) : (
          <>
            <span className="eyebrow">{d.kicker}</span>
            <h3 id="w2-capture-title" className="h3 mt-2 text-ink">{d.modalTitle}</h3>
            <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <Field label={c.forms.fullName}><input required type="text" className="in" placeholder="Jane Doe" /></Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={c.forms.sector}>
                  <select required defaultValue="" className="in">
                    <option value="" disabled>{c.contact.select}</option>
                    {c.sectors.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label={c.forms.phone}><input required type="tel" className="in" placeholder="+1 (201) 555-0100" /></Field>
              </div>
              <Field label={c.forms.emailAddress}><input required type="email" className="in" placeholder="you@example.com" /></Field>
              <label className="flex items-start gap-2.5 text-[0.88rem] text-slate">
                <input type="checkbox" defaultChecked className="mt-1 accent-[var(--color-orange)]" />
                {d.optIn}
              </label>
              <button type="submit" className="rounded bg-navy px-6 py-3 text-[0.92rem] font-semibold text-on-dark transition-colors hover:bg-navy-deep">
                {d.download}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="lbl">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
