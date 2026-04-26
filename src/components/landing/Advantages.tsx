import React from 'react';

export default function Advantages() {
  const advantages = [
    { title: 'Made for IDX, not adapted for it', desc: 'Indonesian tickers, BEI market hours, Rupiah formatting, LQ45 / IDX30 sector groupings — built for this market from day one, not a global tool with local cosmetics.' },
    { title: 'Same signal everywhere you are', desc: 'Telegram, Discord, or the web dashboard — they all run the same analysis engine. The signal you get on Telegram is identical to what the dashboard shows. Zero drift.' },
    { title: 'Start free. Upgrade only when you\'re ready.', desc: 'The free plan gives you 3 signals/day, a full market scan, regime read, and IDX news — no credit card, no expiry. Paid plans start at Rp 49K/month.' },
    { title: 'Every score explains itself', desc: 'Not just "BUY 78/100" — you get the full confluence checklist, which indicators fired, and what market regime you\'re in. You\'ll understand why, not just what.' },
    { title: 'AI that stays online when APIs don\'t', desc: 'Gemini 2.5 Flash handles natural-language queries. If cloud is unavailable, a local Qwen 2.5 model takes over automatically — no interruption, no extra cost.' },
    { title: 'Reliable enough to trust at open', desc: 'Automatic retries, persistent alert state that survives restarts, daily database backups. It\'s running when the market opens — consistently.' },
  ];

  return (
    <section className="advantages fade-up" id="why">
      <div className="section-head">
        <span className="eyebrow">Why Orion Alpha</span>
        <h2>Built different. Priced for everyone.</h2>
        <p>Most signal bots give you a number with no context. Orion Alpha shows you the work — so you learn while you trade.</p>
      </div>

      <div className="advantages-grid">
        {advantages.map((adv, i) => (
          <div key={i} className="advantage-item">
            <div className="advantage-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div>
              <h4>{adv.title}</h4>
              <p>{adv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
