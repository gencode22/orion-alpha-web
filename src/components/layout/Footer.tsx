import React from "react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "Features", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Get Started", href: "/start" },
    { name: "Telegram", href: "https://t.me/orion_idx_bot", external: true },
    { name: "Discord", href: "https://discord.gg/rSAPFDgewe", external: true },
    { name: "Showcase", href: "/showcase" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className="landing-footer">
      <div>
        {footerLinks.map((link, i) => (
          <React.Fragment key={link.name}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener">
                {link.name}
              </a>
            ) : (
              <Link href={link.href}>{link.name}</Link>
            )}
            {i < footerLinks.length - 1 && " · "}
          </React.Fragment>
        ))}
      </div>
      <div style={{ marginTop: "12px", opacity: "0.6" }}>
        Educational tool — not investment advice. Data delayed ~15 min via yfinance.
      </div>
    </footer>
  );
}
