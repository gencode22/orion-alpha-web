import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import ScrollObserver from "@/components/layout/ScrollObserver";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Orion Alpha — Systematic Swing Trading for IDX",
  description: "Find the setup, execute with edge. Orion Alpha provides systematic swing trading signals for the Indonesia Stock Exchange via Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZJDRV1E53"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NZJDRV1E53');
        ` }} />
        <script src="https://unpkg.com/lightweight-charts@4.1.1/dist/lightweight-charts.standalone.production.js" async></script>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            let t = localStorage.getItem('orion-theme');
            if (!t) {
              t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
            }
            document.documentElement.setAttribute('data-theme', t);
          })();
        ` }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ScrollObserver />
        <MobileStickyCTA />
        {children}
      </body>
    </html>
  );
}
