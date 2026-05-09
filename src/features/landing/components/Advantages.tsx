"use client";

import Link from 'next/link';
import { useLanguage } from '@/store/LanguageContext';

export default function Advantages() {
  const { t } = useLanguage();

  const advantages = Array.from({ length: 6 }, (_, i) => ({
    title: t(`advantages.cards.${i}.title`),
    desc: t(`advantages.cards.${i}.desc`),
  }));

  return (
    <section className="advantages fade-up" id="why">
      <div className="section-head">
        <span className="eyebrow">{t('advantages.eyebrow')}</span>
        <h2 className="display-text">{t('advantages.title')} <span className="accent">{t('advantages.title_accent')}</span></h2>
        <p dangerouslySetInnerHTML={{ __html: t('advantages.desc') }} />
      </div>

      <div className="method-callout fade-up">
        <p className="method-callout-text" dangerouslySetInnerHTML={{ __html: t('method_summary.text') }} />
        <Link href="/about" className="method-summary-link">
          {t('method_summary.link')}
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>

      <div className="advantages-grid stagger-in">
        {advantages.map((adv, i) => (
          <article key={i} className="advantage-card glass-card">
            <span className="advantage-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <h4>{adv.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: adv.desc }} />
            <div className="card-glow"></div>
          </article>
        ))}
      </div>
    </section>
  );
}
