"use client";

import { useState } from "react";
import { useContent } from "@/lib/i18n";
import { Container, SectionTitle } from "./primitives";

export default function Contact() {
  const c = useContent();
  const t = c.contact;
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionTitle eyebrow={t.kicker} title={t.title} lead={t.standfirst} />
            <dl className="mt-8 space-y-4 text-[0.92rem]">
              <div>
                <dt className="lbl">{t.homeDesk}</dt>
                <dd className="mt-1 text-ink/85">{c.site.address}</dd>
              </div>
              <div>
                <dt className="lbl">{t.corridor}</dt>
                <dd className="mt-1 text-ink/85">{c.route.map((r) => r.place).join(" · ")}</dd>
              </div>
              <div>
                <dt className="lbl">{t.reach}</dt>
                <dd className="mt-1 text-ink/85">
                  <a href={`tel:${c.site.phone.replace(/[^+\d]/g, "")}`} className="text-navy hover:underline dark:text-[#d8c4b2]">{c.site.phone}</a>
                  {" · "}
                  <a href={`mailto:${c.site.email}`} className="text-navy hover:underline dark:text-[#d8c4b2]">{c.site.email}</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="card p-8">
                <h3 className="h3 text-ink">{t.sentTitle}</h3>
                <p className="mt-2 text-slate">{t.sentBody}</p>
              </div>
            ) : (
              <form className="grid gap-5 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <Field label={t.nameLabel}><input required type="text" className="in" placeholder="Jane Doe" /></Field>
                <Field label={t.emailLabel}><input required type="email" className="in" placeholder="you@example.com" /></Field>
                <Select label={t.orgLabel} options={c.probing.orgType} placeholder={t.select} />
                <Select label={t.needLabel} options={c.probing.need} placeholder={t.select} />
                <Select label={t.regionLabel} options={c.probing.region} placeholder={t.select} />
                <Select label={t.tierLabel} options={c.probing.engagement} placeholder={t.select} />
                <div className="sm:col-span-2">
                  <Field label={t.msgLabel}>
                    <textarea rows={3} className="in resize-none" placeholder={t.msgPlaceholder} />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="rounded bg-orange px-7 py-3.5 text-[0.92rem] font-semibold text-on-dark transition-opacity hover:opacity-90">
                    {t.send}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
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

function Select({ label, options, placeholder }: { label: string; options: string[]; placeholder: string }) {
  return (
    <Field label={label}>
      <select defaultValue="" className="in">
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </Field>
  );
}
