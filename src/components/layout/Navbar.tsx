"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/store/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

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
    { name: t('nav.docs'), href: "/docs" },
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
            className="lang-switch"
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            aria-label="Switch language"
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
          <button
            className={`hamburger-btn${isMenuOpen ? ' is-open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="nav-dropdown"
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
        <div className="mobile-menu-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px', borderTop: '1px solid var(--border)' }}>
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="lang-toggle-btn"
            aria-label="Switch language"
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '8px 14px',
              color: 'var(--text)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'border-color var(--transition)',
            }}
          >
            {lang === 'en' ? '🇮🇩 Bahasa' : '🇬🇧 English'}
          </button>
        </div>
        <Link href="/start" className="is-cta btn-shine" onClick={closeMobileMenu}>
          {t('common.get_started')} →
        </Link>
      </nav>
    </div>
  );
}
