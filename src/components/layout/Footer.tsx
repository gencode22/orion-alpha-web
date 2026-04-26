import React from "react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "Features", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Showcase", href: "/showcase" },
    { name: "Telegram", href: "https://t.me/orion_idx_bot", external: true },
    { name: "Discord", href: "https://discord.gg/rSAPFDgewe", external: true },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
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
        Built for IDX traders. Data delayed ~15 min. Educational tool — not investment advice.
      </div>
      <div className="footer-brand">
        Orion Alpha · 2026
      </div>
    </footer>
  );
}
