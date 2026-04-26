import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Orion Alpha",
  description: "Learn about the mission behind Orion Alpha: Systematic, decomposable, and risk-managed swing trading for the Indonesia Stock Exchange (IDX).",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
