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
      <div className="sticky-cta-inner">
        <div className="sticky-cta-text">
          <strong>Ready to start?</strong>
          <span>Free · No credit card</span>
        </div>
        <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="btn-sticky">
          Start Free →
        </a>
      </div>
    </div>
  );
}
