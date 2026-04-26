import React from 'react';

export default function Advantages() {
  const advantages = [
    { 
      title: 'Made for IDX, not adapted for it', 
      desc: 'Indonesian tickers, BEI market hours, Rupiah formatting, LQ45 / IDX30 sector groupings — built for this market from day one.',
      size: 'large' 
    },
    { 
      title: 'Same signal everywhere', 
      desc: 'Telegram, Discord, or the web — zero drift between platforms.',
      size: 'small' 
    },
    { 
      title: 'Start free. Always.', 
      desc: '3 signals/day, full market scan, and news — no credit card required.',
      size: 'small' 
    },
    { 
      title: 'Explainable AI', 
      desc: 'Not just "BUY" — get the confluence checklist and market regime context for every single alert.',
      size: 'medium' 
    },
    { 
      title: 'Local Intelligence', 
      desc: 'Qwen 2.5 takes over locally if the cloud is unavailable. Zero interruption.',
      size: 'medium' 
    },
    { 
      title: 'Unmatched Reliability', 
      desc: 'Automatic retries and persistent state. It runs when the market opens.',
      size: 'small' 
    },
  ];

  return (
    <section className="advantages fade-up" id="why">
      <div className="section-head">
        <span className="eyebrow">Why Orion Alpha</span>
        <h2 className="display-text">Built different. <span className="accent">Priced for everyone.</span></h2>
        <p>Most signal bots give you a number with no context. Orion Alpha shows you the work — so you learn while you trade.</p>
      </div>

      <div className="advantages-bento">
        {advantages.map((adv, i) => (
          <div key={i} className={`advantage-card card-${adv.size} glass-card`}>
            <div className="card-content">
              <div className="advantage-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="text-content">
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
              </div>
            </div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
