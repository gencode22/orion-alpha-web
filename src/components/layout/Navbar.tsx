"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/store/LanguageContext";
import MarketStatusPill from "@/components/layout/MarketStatusPill";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const toggleMobileMenu = () => setIsMenuOpen((open) => !open);
  const closeMobileMenu = () => setIsMenuOpen(false);
  const toggleLang = () => setLang(lang === 'en' ? 'id' : 'en');

  // Lock body scroll + close on ESC while the mobile drawer is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: t('nav.pricing'), href: "/pricing" },
    { name: t('nav.docs'), href: "/docs" },
    { name: t('nav.backtest'), href: "/backtest" },
    { name: t('nav.about'), href: "/about" },
  ];

  return (
    <>
      <div
        className={`landing-nav-backdrop${isMenuOpen ? ' is-open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      <div className="topbar-wrap">
      <div className="landing-topbar">
        <Link href="/" className="landing-brand">
          <Image
            src="/static/orion-logo.png"
            alt="Orion Alpha"
            width={32}
            height={32}
            priority
          />
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
          <MarketStatusPill />
          <button
            type="button"
            className="lang-switch"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
          <button
            type="button"
            className={`hamburger-btn${isMenuOpen ? ' is-open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="nav-dropdown"
          >
            <span className="ham-bars" aria-hidden="true">
              <span className="ham-bar"></span>
              <span className="ham-bar"></span>
              <span className="ham-bar"></span>
            </span>
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
        inert={!isMenuOpen}
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
        <div className="mobile-menu-meta">
          <MarketStatusPill />
        </div>
        <div className="mobile-menu-actions">
          <button
            type="button"
            onClick={toggleLang}
            className="lang-toggle-btn"
            aria-label="Switch language"
          >
            {lang === 'en' ? 'Bahasa' : 'English'}
          </button>
          <Link href="/start" className="is-cta btn-shine" onClick={closeMobileMenu}>
            {t('common.get_started')} →
          </Link>
        </div>
      </nav>
      </div>
    </>
  );
}
