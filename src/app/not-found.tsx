"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function NotFoundPage() {
  useEffect(() => {
    const t = localStorage.getItem('orion-theme');
    if (!t) {
      const defaultTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', defaultTheme);
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }
  }, []);

  return (
    <>
  <div className="landing">
    <Navbar />
    <div className="not-found-wrap">
      <div className="nf-code">404</div>
      <div className="nf-title">Page not found.</div>
      <p className="nf-sub">The page you're looking for doesn't exist or has been moved. Head back to a valid route below.</p>
      <div className="nf-links">
        <Link href="/" className="nf-primary">Back to Home</Link>
        <Link href="/pricing" className="nf-secondary">Pricing</Link>
        <Link href="/app" className="nf-secondary">Explore</Link>
        <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="nf-secondary">Telegram Bot</a>
        <Link href="/privacy" className="nf-secondary">Privacy</Link>
      </div>
    </div>
    <Footer />
  </div>

    </>
  );
}
