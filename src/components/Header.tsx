"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useContent, useLocale } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const c = useContent();
  const { locale, toggle } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 md:px-8">
        <Link href="/" className="flex items-center" aria-label="The Dieng Group — home">
          <Image src="/logo.png" alt="The Dieng Group" width={150} height={48} priority className="h-10 w-auto dark:rounded dark:bg-on-dark dark:px-2 dark:py-1" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {c.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(item.href) ? "page" : undefined}
              className={`relative py-1 text-[0.92rem] font-medium transition-colors ${active(item.href) ? "text-navy dark:text-[#d8c4b2]" : "text-slate hover:text-ink"}`}
            >
              {item.label}
              {active(item.href) && <span className="brand-bar absolute -bottom-[15px] left-0 right-0 h-[3px]" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggle} className="text-[0.8rem] font-semibold text-slate hover:text-ink" aria-label={`Switch language to ${c.ui.lang}`}>
            {locale.toUpperCase()} <span className="text-line">/</span> {locale === "en" ? "FR" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center text-slate hover:text-ink"
            aria-label={c.ui.theme}
          >
            {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link href="/contact" className="hidden rounded bg-navy px-5 py-2.5 text-[0.9rem] font-semibold text-on-dark transition-colors hover:bg-navy-deep sm:inline-block">
            {c.ui.getInTouch}
          </Link>
          <button type="button" aria-label={c.ui.menu} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center text-ink lg:hidden">
            <span className="text-xl" aria-hidden>{open ? "✕" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-6 py-3 lg:hidden">
          <ul className="flex flex-col">
            {c.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className={`block border-b border-line py-3 text-[0.95rem] font-medium ${active(item.href) ? "text-navy dark:text-[#d8c4b2]" : "text-slate"}`}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 inline-block rounded bg-navy px-5 py-2.5 text-[0.9rem] font-semibold text-on-dark">
                {c.ui.getInTouch}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
    </svg>
  );
}
