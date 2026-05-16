import type { Metadata } from "next";
import "@/styles/pricing.css";

export const metadata: Metadata = {
  title: "Pricing — Orion Alpha",
  description: "Stop paying for noise. Start paying for edge. View our subscription plans for IDX swing trading signals.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
