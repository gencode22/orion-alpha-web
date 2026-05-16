import type { Metadata } from "next";
import "@/styles/docs.css";

export const metadata: Metadata = {
  title: "Dokumentasi — Orion Alpha",
  description: "Panduan strategi, setup swing trading, dan cara membaca sinyal Orion Alpha untuk pasar saham IDX (BEI).",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
