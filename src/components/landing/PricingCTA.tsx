import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function PricingCTA() {
  const { t } = useLanguage();

  return (
    <section className="pricing-cta fade-up" aria-labelledby="pricing-cta-title">
      <div className="pricing-cta-head">
        <span className="eyebrow">{t('pricing_cta.eyebrow')}</span>
        <h2 id="pricing-cta-title" className="display-text">{t('pricing_cta.title')}<em>{t('pricing_cta.title_italic')}</em>.</h2>
        <p className="lede">{t('pricing_cta.desc')}</p>
        <Link href="/pricing" className="pricing-cta-link btn-shine">
          {t('pricing_cta.cta')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>

      <div className="pricing-tiers-mini" aria-hidden="true">
        <div className="pricing-tier-chip glass-card">
          <div className="tier-col">
            <strong>{t('pricing_cta.tiers.free.title')}</strong>
            <small>{t('pricing_cta.tiers.free.desc')}</small>
          </div>
          <div className="tier-price">Rp 0</div>
          <div className="card-glow"></div>
        </div>

        <div className="pricing-tier-chip is-primary glass-card">
          <div className="tier-col">
            <strong>{t('pricing_cta.tiers.starter.title')} <span className="badge">{t('pricing_cta.tiers.starter.badge')}</span></strong>
            <small>{t('pricing_cta.tiers.starter.desc')}</small>
          </div>
          <div className="tier-price">49K<span className="unit">/mo</span></div>
          <div className="card-glow"></div>
        </div>

        <div className="pricing-tier-chip glass-card">
          <div className="tier-col">
            <strong>{t('pricing_cta.tiers.pro.title')}</strong>
            <small>{t('pricing_cta.tiers.pro.desc')}</small>
          </div>
          <div className="tier-price">99K<span className="unit">/mo</span></div>
          <div className="card-glow"></div>
        </div>
      </div>
    </section>
  );
}
