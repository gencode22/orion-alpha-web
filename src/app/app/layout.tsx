import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Showcase — Orion Alpha",
  description: "Live interactive showcase of Orion Alpha's IDX analysis capabilities. See sample charts, signal logs, and market regime data.",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
