import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Orion Alpha",
  description: "Our commitment to your data privacy. We collect only what is necessary to operate our IDX trading signals service.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
