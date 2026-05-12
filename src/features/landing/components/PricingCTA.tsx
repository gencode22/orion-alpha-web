"use client";

import Link from 'next/link';
import { useLanguage } from '@/store/LanguageContext';

export default function PricingCTA() {
  const { t } = useLanguage();

  const freeTier = {
    name: t('pricing_inline.free.name') || 'FREE',
    price: t('pricing_inline.free.price') || 'Rp 0',
    features: t('pricing_inline.free.features') || [],
    cta: t('pricing_inline.free.cta') || 'Start Free on Telegram',
    ctaHref: 'https://t.me/orion_idx_bot',
    note: t('pricing_inline.free.note') || 'No credit card · No expiry',
    external: true,
  };

  const starterTier = {
    name: t('pricing_inline.starter.name') || 'STARTER',
    price: t('pricing_inline.starter.price') || 'Rp 49K',
    period: t('pricing_inline.starter.period') || '/month',
    features: t('pricing_inline.starter.features') || [],
    cta: t('pricing_inline.starter.cta') || 'Upgrade to Starter',
    proHint: t('pricing_inline.starter.pro_hint') || 'Need backtest, alerts & watchlist? See Pro plan →',
    ctaHref: 'https://t.me/orion_idx_bot?start=upgrade_starter',
    external: true,
  };

  return (
    <section className="pricing-inline fade-up" id="pricing" aria-labelledby="pricing-inline-title">
      <div className="section-head">
        <span className="eyebrow">{t('pricing_cta.eyebrow')}</span>
        <h2 id="pricing-inline-title" className="display-text">
          {t('pricing_cta.title')}<em>{t('pricing_cta.title_italic')}</em>.
        </h2>
        <p className="lede">{t('pricing_cta.desc')}</p>
      </div>

      <div className="pricing-inline-grid">
        {/* Free Tier */}
        <div className="pricing-inline-card glass-card">
          <div className="pricing-inline-header">
            <span className="pricing-inline-name">{freeTier.name}</span>
            <div className="pricing-inline-price">
              {freeTier.price}
            </div>
          </div>
          <ul className="pricing-inline-features" role="list">
            {freeTier.features.map((f: string, i: number) => (
              <li key={i} className="pricing-inline-feature">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="pricing-inline-footer">
            <a
              href={freeTier.ctaHref}
              target="_blank"
              rel="noopener"
              className="pricing-inline-cta btn btn-explore"
            >
              {freeTier.cta}
            </a>
            <p className="pricing-inline-note">{freeTier.note}</p>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* Starter Tier — homepage's primary tier preview. Pro is one click away via see-all link. */}
        <div className="pricing-inline-card glass-card is-primary">
          <div className="pricing-inline-header">
            <span className="pricing-inline-name">{starterTier.name}</span>
            <div className="pricing-inline-price">
              {starterTier.price}
              <span className="pricing-inline-period">{starterTier.period}</span>
            </div>
          </div>
          <ul className="pricing-inline-features" role="list">
            {starterTier.features.map((f: string, i: number) => (
              <li key={i} className="pricing-inline-feature">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="pricing-inline-footer">
            <a
              href={starterTier.ctaHref}
              target="_blank"
              rel="noopener"
              className="pricing-inline-cta btn btn-telegram btn-shine"
            >
              {starterTier.cta}
            </a>
            <p className="pricing-inline-note">{starterTier.proHint}</p>
          </div>
          <div className="card-glow"></div>
        </div>
      </div>

      <div className="pricing-inline-seeall">
        <Link href="/pricing" className="pricing-see-all-link">
          {t('pricing_cta.see_all') || 'See full plan details'}
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
