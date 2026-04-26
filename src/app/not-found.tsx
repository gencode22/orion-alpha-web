"use client";

import React, { useEffect } from "react";
import Link from "next/link";

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

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('orion-theme', next);
  };

  const toggleMobileMenu = () => {
    const d = document.getElementById('nav-dropdown');
    const b = document.getElementById('hamburger-btn');
    if (d && b) {
      const isExpanded = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!isExpanded));
      if (isExpanded) {
        d.classList.remove('is-open');
        setTimeout(() => d.setAttribute('aria-hidden', 'true'), 300);
      } else {
        d.setAttribute('aria-hidden', 'false');
        void d.offsetWidth;
        d.classList.add('is-open');
      }
    }
  };

  return (
    <>
      
  <div className="not-found-wrap">
    <div className="nf-code">404</div>
    <div className="nf-title">Page not found.</div>
    <p className="nf-sub">The page you're looking for doesn't exist or has been moved. Head back to a valid route below.</p>
    <div className="nf-links">
      <a href="/" className="nf-primary">Back to Home</a>
      <a href="/pricing" className="nf-secondary">Pricing</a>
      <a href="/showcase" className="nf-secondary">Showcase</a>
      <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="nf-secondary">Telegram Bot</a>
      <a href="/privacy" className="nf-secondary">Privacy</a>
    </div>
  </div>

    </>
  );
}
