"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFoundPage() {
  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        <div className="not-found-wrap">
          <div className="nf-code">404</div>
          <div className="nf-title">Page not found.</div>
          <p className="nf-sub">The page you&apos;re looking for doesn&apos;t exist or has been moved. Head back to a valid route below.</p>
          <div className="nf-links">
            <Link href="/" className="nf-primary">Back to Home</Link>
            <Link href="/pricing" className="nf-secondary">Pricing</Link>
            <Link href="/showcase" className="nf-secondary">Showcase</Link>
            <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="nf-secondary">Telegram Bot</a>
            <Link href="/privacy" className="nf-secondary">Privacy</Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
