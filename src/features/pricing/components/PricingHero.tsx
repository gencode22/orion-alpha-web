"use client";

import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

export default function PricingHero() {
  const { t } = useLanguage();
  const pills: string[] = t('pricing.hero.pills') || [];

  return (
    <section className="pricing-hero">
      <span className="eyebrow">{t('pricing.hero.eyebrow')}</span>
      <h1>{t('pricing.hero.title')} <em>{t('pricing.hero.title_italic')}</em></h1>
      <p className="lede">{t('pricing.hero.desc')}</p>

      <div className="trust-strip" role="list">
        {pills.map((pill, i) => (
          <span key={i} className="pill" role="listitem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
}
