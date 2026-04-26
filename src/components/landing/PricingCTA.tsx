import React from 'react';
import Link from 'next/link';

export default function PricingCTA() {
  return (
    <section className="pricing-cta fade-up" aria-labelledby="pricing-cta-title">
      <div className="pricing-cta-head">
        <span className="eyebrow">Pricing</span>
        <h2 id="pricing-cta-title" className="display-text">Start free. Upgrade <em>when you need more</em>.</h2>
        <p className="lede">Monthly plans, no lock-in. Cancel anytime. Manual activation under 10 minutes via QRIS or bank transfer.</p>
        <Link href="/pricing" className="pricing-cta-link btn-shine">
          See all plans
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>

      <div className="pricing-tiers-mini" aria-hidden="true">
        <div className="pricing-tier-chip glass-card">
          <div className="tier-col">
            <strong>Free</strong>
            <small>3 signals/day · scan · regime</small>
          </div>
          <div className="tier-price">Rp 0</div>
          <div className="card-glow"></div>
        </div>

        <div className="pricing-tier-chip is-primary glass-card">
          <div className="tier-col">
            <strong>Starter <span className="badge">Popular</span></strong>
            <small>Unlimited signals · swing · FA · chart</small>
          </div>
          <div className="tier-price">49K<span className="unit">/mo</span></div>
          <div className="card-glow"></div>
        </div>

        <div className="pricing-tier-chip glass-card">
          <div className="tier-col">
            <strong>Pro</strong>
            <small>+ backtest · auto-alert · watchlist</small>
          </div>
          <div className="tier-price">99K<span className="unit">/mo</span></div>
          <div className="card-glow"></div>
        </div>
      </div>
    </section>
  );
}
