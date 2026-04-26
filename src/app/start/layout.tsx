import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — Orion Alpha",
  description: "Start using Orion Alpha in under 60 seconds. Learn how to open the Telegram bot and run your first IDX market analysis.",
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
