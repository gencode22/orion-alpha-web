import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

export default function Methodology() {
  const { t } = useLanguage();

  return (
    <section className="methodology fade-up" id="methodology">
      <div className="section-head">
        <span className="eyebrow">{t('methodology.eyebrow')}</span>
        <h2 className="display-text">{t('methodology.title')}</h2>
        <p className="lede">{t('methodology.desc')}</p>
      </div>

      <div className="methodology-grid">
        {t('methodology.cards').map((card: any, idx: number) => (
          <div key={idx} className="method-card glass-card">
            <span className="method-eyebrow">{card.eyebrow}</span>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
            <div className="method-meta" dangerouslySetInnerHTML={{ __html: card.meta.replace(/·/g, ' · ') }}>
            </div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
