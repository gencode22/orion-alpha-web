import React from 'react';

export default function RiskBlock() {
  return (
    <section className="risk-block fade-up" aria-labelledby="risk-title">
      <div className="risk-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </div>
      <div>
        <h3 id="risk-title">A note on risk — read this before you trade.</h3>
        <p>
          Orion Alpha is an <strong>analysis tool</strong>, not a profit machine. We show you what the data says — entry, stop, target, score breakdown. <strong>The trade decision is always yours.</strong> Trading IDX stocks involves real risk, and past performance never guarantees future results. Use position sizing, respect your stop loss, and never invest more than you can afford to lose.
        </p>
        <p style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(245,158,11,0.15)'}}>
          All market data is sourced from Yahoo Finance and delayed ~15 minutes. Orion signals reflect this data — verify current prices before placing any order.
        </p>
      </div>
    </section>
  );
}
