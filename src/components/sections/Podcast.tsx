"use client";

import { useContent } from "@/lib/i18n";
import { Container } from "../primitives";

export default function Podcast() {
  const c = useContent();
  return (
    <section id="podcast" className="bg-navy-deep py-20 text-on-dark md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-[0.74rem] font-bold uppercase tracking-[0.14em] text-gold-bright">{c.podcast.kicker}</span>
            <h2 className="h2 mt-4 text-on-dark">{c.podcast.title}</h2>
            <p className="mt-4 text-on-dark/75">{c.podcast.standfirst}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["YouTube", "Spotify", "Apple Podcasts"].map((p) => (
                <a key={p} href="#" className="text-[0.86rem] font-medium text-on-dark/70 hover:text-gold-bright">{p}</a>
              ))}
            </div>
          </div>

          <ul className="md:col-span-7">
            {c.podcast.episodes.map((title, i) => (
              <li key={title} className="flex items-center gap-5 border-b border-on-dark/15 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-bright/40 text-gold-bright">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-gold-bright">{`${i + 1}`.padStart(2, "0")}</span>
                  <p className="font-display text-lg font-medium text-on-dark">{title}</p>
                </div>
                <span className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-on-dark/45">{c.podcast.comingSoon}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
