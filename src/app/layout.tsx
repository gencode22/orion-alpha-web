import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit, Geist } from "next/font/google";

// Legacy Styles (Fallback)
import "../styles/theme.css";
import "../styles/style.css";
import "../styles/landing.css";
import "../styles/showcase.css";
import "../styles/pricing.css";
import "../styles/docs.css";

// Global Tailwind v4 & DESIGN.md Tokens (Overrides Legacy)
import "./globals.css";

import ScrollObserver from "@/components/layout/ScrollObserver";

import { LanguageProvider } from "@/store/LanguageContext";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-display" 
});

export const metadata: Metadata = {
  title: "Orion Alpha — Sinyal Swing Trading Saham IDX & BEI",
  description: "Dapatkan sinyal trading saham IDX (BEI) yang sistematis dan terukur. Orion Alpha membantu trader menemukan setup swing trading terbaik melalui bot Telegram & Discord.",
  keywords: ["saham idx", "sinyal saham", "bot saham telegram", "swing trading indonesia", "analisa teknikal bei", "trading sistematis"],
  authors: [{ name: "Orion Alpha Team" }],
  openGraph: {
    title: "Orion Alpha — Systematic Swing Trading for IDX",
    description: "Sinyal trading saham BEI yang presisi dan berbasis sistem.",
    url: "https://orion-alpha-web.vercel.app",
    siteName: "Orion Alpha",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/static/orion-logo.png",
    shortcut: "/static/orion-logo.png",
    apple: "/static/orion-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={cn("dark", geist.variable, inter.variable, jetbrainsMono.variable, outfit.variable)}
      data-theme="dark"
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZJDRV1E53"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NZJDRV1E53');
        ` }} />
        <script src="https://unpkg.com/lightweight-charts@4.1.1/dist/lightweight-charts.standalone.production.js" async></script>
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <LanguageProvider>
          <ScrollObserver />

          <main id="main-content">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
