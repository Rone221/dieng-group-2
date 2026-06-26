import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maquette2.terangadev.com"),
  title: "The Dieng Group — Cross-border advisory, trade & development",
  description:
    "The Dieng Group advises private enterprises, NGOs and governments across West Africa and beyond — consulting, importing and exporting with integrity.",
  openGraph: {
    title: "The Dieng Group",
    description:
      "Cross-border advisory, importing and exporting — from Indianapolis to West Africa.",
    siteName: "The Dieng Group",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "The Dieng Group" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${newsreader.variable} ${publicSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Providers>
          <div className="brand-bar h-1 w-full" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
