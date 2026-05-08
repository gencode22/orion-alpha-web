import { Fragment } from "react";
import Link from "next/link";
import { useLanguage } from "@/store/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { name: t('nav.pricing'), href: "/pricing" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.showcase'), href: "/showcase" },
    { name: "Telegram", href: "https://t.me/orion_idx_bot", external: true },
    { name: "Discord", href: "https://discord.gg/rSAPFDgewe", external: true },
    { name: t('footer.links.privacy'), href: "/privacy" },
  ];

  return (
    <footer className="landing-footer" role="contentinfo">
      <div className="footer-links">
        {footerLinks.map((link, i) => (
          <Fragment key={link.name}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener">
                {link.name}
              </a>
            ) : (
              <Link href={link.href}>{link.name}</Link>
            )}
            {i < footerLinks.length - 1 && <span className="sep" aria-hidden="true">·</span>}
          </Fragment>
        ))}
      </div>
      <div className="footer-legal">
        {t('footer.legal')}
      </div>
      <div className="footer-brand">
        Orion Alpha · {new Date().getFullYear()}
      </div>
    </footer>
  );
}
