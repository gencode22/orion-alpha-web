import React from 'react';

export default function PricingHero() {
  return (
    <section className="pricing-hero">
      <span className="eyebrow">Pricing</span>
      <h1>Stop paying for noise. <em>Start paying for edge.</em></h1>
      <p className="lede">Less than a cup of coffee per day. More edge than most paid Telegram groups deliver in a year. Start free, upgrade only when you're ready.</p>

      <div className="trust-strip" role="list">
        <span className="pill" role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Activated in &lt; 10 min
        </span>
        <span className="pill" role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          QRIS · GoPay · Bank Transfer
        </span>
        <span className="pill" role="listitem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Cancel anytime
        </span>
      </div>
    </section>
  );
}
