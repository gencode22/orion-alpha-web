"use client";

import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useLanguage } from "@/store/LanguageContext";

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, { duration: 1.4, ease: [0.25, 1, 0.5, 1] });
    }
  }, [isInView, motionValue, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { name: t('nav.pricing'), href: "/pricing" },
    { name: t('nav.docs'), href: "/docs" },
    { name: t('nav.backtest'), href: "/backtest" },
    { name: t('nav.about'), href: "/about" },
    { name: "Telegram", href: "https://t.me/orion_idx_bot", external: true },
    { name: "Discord", href: "https://discord.gg/rSAPFDgewe", external: true },
    { name: t('footer.links.privacy'), href: "/privacy" },
  ];

  return (
    <footer className="landing-footer" role="contentinfo">
      <div className="footer-live" aria-label="Engine status">
        <span className="footer-live-dot" aria-hidden="true" />
        Last signal <strong>~2h ago</strong>
        <span className="footer-live-sep" aria-hidden="true">·</span>
        <strong><CountUp target={14} /></strong> shipped in last 24h
        <span className="footer-live-sep" aria-hidden="true">·</span>
        Engine <strong className="footer-live-up">online</strong>
      </div>
      <div className="footer-links">
        {footerLinks.map((link, i) => (
          <Fragment key={link.name}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
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
