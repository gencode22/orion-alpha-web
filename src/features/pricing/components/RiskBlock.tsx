"use client";

import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

export default function RiskBlock() {
  const { t } = useLanguage();
  const risk = t('pricing.risk');

  return (
    <section className="risk-block fade-up" aria-labelledby="risk-title">
      <div className="risk-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
      <div>
        <h3 id="risk-title">{risk.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: risk.p1 }} />
        <p className="risk-data-note">
          {risk.p2}
        </p>
      </div>
    </section>
  );
}
