"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";

export default function Footer() {
  const c = useContent();
  const year = 2026;
  return (
    <footer className="bg-navy-deep text-on-dark">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Image src="/logo.png" alt="The Dieng Group" width={170} height={54} className="h-12 w-auto rounded bg-on-dark px-3 py-2" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-on-dark/65">{c.footer.blurb}</p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-on-dark/55">{c.footer.sections}</h3>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] text-on-dark/80">
              {c.nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-on-dark">{n.label}</a></li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-on-dark/55">{c.footer.desk}</h3>
            <address className="mt-4 space-y-2.5 text-[0.95rem] not-italic text-on-dark/80">
              <p>{c.site.address}</p>
              <p><a href={`tel:${c.site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-on-dark">{c.site.phone}</a></p>
              <p><a href={`mailto:${c.site.email}`} className="hover:text-on-dark">{c.site.email}</a></p>
            </address>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
              {c.social.map((s) => (
                <li key={s.label}><a href={s.href} className="text-[0.82rem] font-medium text-on-dark/60 hover:text-on-dark">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-on-dark/15 pt-6 text-[0.8rem] text-on-dark/45">
          © {year} The Dieng Group, LLC · {c.site.address}
        </div>
      </div>
    </footer>
  );
}
