"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/store/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("orion-theme", next);
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.showcase'), href: "/showcase" },
    { name: t('nav.pricing'), href: "/pricing" },
    { name: t('nav.about'), href: "/about" },
  ];

  return (
    <div className="topbar-wrap">
      <div className="landing-topbar">
        <Link href="/" className="landing-brand">
          <img src="/static/orion-logo.png?v=3" alt="Orion Alpha" />
          <span>
            <span className="brand-orion">Orion</span> <span className="brand-alpha">Alpha</span>
          </span>
        </Link>
        <nav className="topbar-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={pathname === link.href ? "is-active" : ""}
            >
              {link.name}
            </Link>
          ))}
          
          <button
            className="lang-toggle-btn"
            onClick={toggleLanguage}
            title={lang === 'en' ? 'Switch to Indonesia' : 'Ganti ke English'}
            aria-label="Toggle language"
          >
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title="Toggle dark / light mode"
            aria-label="Toggle theme"
          >
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>
          
          <button
            className="hamburger-btn"
            id="hamburger-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="ham-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg className="ham-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Link href="/start" className="is-cta btn-shine" onClick={closeMobileMenu}>
            {t('common.get_started')} →
          </Link>
        </nav>
      </div>
      <nav
        className={`landing-nav-dropdown ${isMenuOpen ? "is-open" : ""}`}
        id="nav-dropdown"
        aria-hidden={!isMenuOpen}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={pathname === link.href ? "is-active" : ""}
            onClick={closeMobileMenu}
          >
            {link.name}
          </Link>
        ))}
        <div className="mobile-menu-actions" style={{ display: 'flex', gap: '12px', padding: '12px 20px', borderTop: '1px solid var(--border)' }}>
          <button
            className="lang-toggle-btn"
            onClick={toggleLanguage}
            title={lang === 'en' ? 'Switch to Indonesia' : 'Ganti ke English'}
            aria-label="Toggle language"
            style={{ padding: '8px 12px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '14px', fontWeight: '600' }}
          >
            {lang.toUpperCase()}
          </button>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title="Toggle dark / light mode"
            aria-label="Toggle theme"
            style={{ padding: '8px 12px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
        <Link href="/start" className="is-cta btn-shine" onClick={closeMobileMenu}>
          {t('common.get_started')} →
        </Link>
      </nav>
    </div>
  );
}
