"use client";

import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQSection() {
  const { t } = useLanguage();
  const faq = t('pricing.faq');
  const items: FAQItem[] = faq.items || [];

  return (
    <section className="faq-section fade-up" aria-labelledby="faq-title">
      <div className="section-head">
        <span className="eyebrow">{faq.eyebrow}</span>
        <h2 id="faq-title">{faq.title}</h2>
      </div>

      <div className="faq-grid">
        {items.map((item, i) => (
          <details key={i} className="faq-item">
            <summary>
              <span>{item.q}</span>
              <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </summary>
            <div className="faq-body" dangerouslySetInnerHTML={{ __html: item.a }} />
          </details>
        ))}
      </div>
    </section>
  );
}
