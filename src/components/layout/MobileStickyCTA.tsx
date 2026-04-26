"use client";
import React, { useEffect, useState } from 'react';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ctaGate = document.querySelector('.cta-gate');
      const isPastTop = window.scrollY > 400;
      let isBeforeBottom = true;

      if (ctaGate) {
        const gateRect = ctaGate.getBoundingClientRect();
        if (gateRect.top < window.innerHeight) {
          isBeforeBottom = false;
        }
      }

      setIsVisible(isPastTop && isBeforeBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`mobile-sticky-cta ${isVisible ? 'is-visible' : ''}`}>
      <div className="sticky-pill">
        <div className="sticky-info">
          <div className="sticky-title">Orion Alpha Bot</div>
          <div className="sticky-sub">Free · Professional · IDX</div>
        </div>
        <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="sticky-action">
          Start Free
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>
  );
}
