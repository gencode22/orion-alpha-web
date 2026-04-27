import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AudienceSection() {
  const { t } = useLanguage();

  return (
    <section className="audience-section fade-up" aria-labelledby="audience-title">
      <div className="section-head">
        <span className="eyebrow">{t('audience.eyebrow')}</span>
        <h2 id="audience-title" className="display-text">{t('audience.title')}<em>{t('audience.title_italic')}</em></h2>
        <p className="lede">{t('audience.desc')}</p>
      </div>

      <div className="audience-grid">
        <div className="audience-card glass-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <h4>{t('audience.cards.0.title')}</h4>
          <p>{t('audience.cards.0.desc')}</p>
          <div className="card-glow"></div>
        </div>
        <div className="audience-card glass-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h4>{t('audience.cards.1.title')}</h4>
          <p>{t('audience.cards.1.desc')}</p>
          <div className="card-glow"></div>
        </div>
        <div className="audience-card glass-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
          </div>
          <h4>{t('audience.cards.2.title')}</h4>
          <p>{t('audience.cards.2.desc')}</p>
          <div className="card-glow"></div>
        </div>
      </div>
    </section>
  );
}
