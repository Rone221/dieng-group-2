"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Locale } from "./content";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
}>({ locale: "en", setLocale: () => {}, toggle: () => {} });

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("dieng-locale");
    if (saved === "fr" || saved === "en") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("dieng-locale", l);
    document.documentElement.lang = l;
  };
  const toggle = () => setLocale(locale === "en" ? "fr" : "en");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggle }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useContent(): Content {
  return content[useContext(LocaleContext).locale];
}
