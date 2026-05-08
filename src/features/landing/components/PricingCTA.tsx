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

  const proTier = {
    name: t('pricing_inline.pro.name') || 'PRO',
    price: t('pricing_inline.pro.price') || 'Rp 49K',
    period: t('pricing_inline.pro.period') || '/month',
    badge: t('pricing_inline.pro.badge') || 'Most Popular',
    features: t('pricing_inline.pro.features') || [],
    cta: t('pricing_inline.pro.cta') || 'Upgrade to Pro',
    ctaHref: '/pricing',
    external: false,
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

        {/* Pro Tier */}
        <div className="pricing-inline-card glass-card is-primary">
          <div className="pricing-inline-badge">{proTier.badge}</div>
          <div className="pricing-inline-header">
            <span className="pricing-inline-name">{proTier.name}</span>
            <div className="pricing-inline-price">
              {proTier.price}
              <span className="pricing-inline-period">{proTier.period}</span>
            </div>
          </div>
          <ul className="pricing-inline-features" role="list">
            {proTier.features.map((f: string, i: number) => (
              <li key={i} className="pricing-inline-feature">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="pricing-inline-footer">
            <Link href={proTier.ctaHref} className="pricing-inline-cta btn btn-telegram btn-shine">
              {proTier.cta}
            </Link>
          </div>
          <div className="card-glow"></div>
        </div>
      </div>

      <div className="pricing-inline-seeall">
        <Link href="/pricing" className="pricing-see-all-link">
          {t('pricing_cta.see_all') || 'See full plan details'}
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
