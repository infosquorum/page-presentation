// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import SiteHeader from "./components/site/SiteHeader";
import SiteFooter from "./components/site/SiteFooter";
import ScrollToTop from "./components/site/ScrollToTop";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const unbounded = Unbounded({ variable: "--font-unbounded", subsets: ["latin"], weight: ["800", "900"] });

export const metadata: Metadata = {
  title: { default: "Quorum Event — L’événement, de bout en bout", template: "%s · Quorum Event" },
  description:
    "Conférences, cérémonies, assemblées générales, séminaires, forums : inscriptions, billetterie mobile, accueil par scan, votes et bilan sur une seule plateforme.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased`}>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Aller au contenu
        </a>
        <SiteHeader />
        <div id="contenu">{children}</div>
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}
