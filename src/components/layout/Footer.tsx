import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang, t } = useLanguage();

  const footerLinks = [
    { name: t('nav.features'), href: "/#features" },
    { name: t('nav.pricing'), href: "/pricing" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.showcase'), href: "/showcase" },
    { name: "Telegram", href: "https://t.me/orion_idx_bot", external: true },
    { name: "Discord", href: "https://discord.gg/rSAPFDgewe", external: true },
    { name: t('footer.links.privacy'), href: "/privacy" },
    { name: t('footer.links.terms'), href: "/terms" },
  ];

  return (
    <footer className="landing-footer">
      <div className="footer-links">
        {footerLinks.map((link, i) => (
          <React.Fragment key={link.name}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener">
                {link.name}
              </a>
            ) : (
              <Link href={link.href}>{link.name}</Link>
            )}
            {i < footerLinks.length - 1 && <span className="sep">·</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="footer-legal">
        {t('footer.legal')}
      </div>
      <div className="footer-brand">
        Orion Alpha · 2026
      </div>
    </footer>
  );
}
