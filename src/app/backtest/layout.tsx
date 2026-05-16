import type { Metadata } from "next";
import "@/styles/docs.css";
import "@/styles/backtest.css";

export const metadata: Metadata = {
  title: "Hasil Backtest — Orion Alpha",
  description: "Hasil walkforward 15 setup swing trading Orion Alpha di 800+ saham IDX (BEI): expectancy, win rate, dan dekomposisi performa per setup.",
};

export default function BacktestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
