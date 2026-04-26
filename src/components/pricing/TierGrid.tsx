import React from 'react';

export default function TierGrid() {
  return (
    <section className="tier-grid fade-up" aria-label="Subscription plans">

      {/*  FREE  */}
      <article className="tier-card glass-card">
        <span className="tier-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/></svg>
        </span>
        <div className="tier-name">Free</div>
        <div className="tier-tagline">Try Orion Alpha risk-free. Ideal for learning and exploring the market.</div>

        <div className="tier-price">
          <span className="amount">Rp 0</span>
        </div>
        <div className="tier-sub">Forever free, no credit card</div>

        <hr className="tier-divider" />

        <ul className="tier-features">
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>3 <code>/signal</code> per day</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/scan</code> by sector</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/regime</code>, <code>/news</code>, <code>/ihsg</code></span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Education (<code>/edu</code> + glossary)</span></li>
          <li className="is-off"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><span>Chart &amp; fundamental analysis</span></li>
          <li className="is-off"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><span>Swing setup &amp; position sizing</span></li>
          <li className="is-off"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><span>Backtest &amp; auto-alerts</span></li>
        </ul>

        <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="tier-cta">
          Start Free
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <div className="card-glow"></div>
      </article>

      {/*  STARTER — highlighted  */}
      <article className="tier-card glass-card is-highlight">
        <div className="tier-ribbon">Most Popular</div>
        <span className="tier-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2"/></svg>
        </span>
        <div className="tier-name">Starter</div>
        <div className="tier-tagline">Core toolkit for active swing traders. Charts + screener + calculator.</div>

        <div className="tier-price">
          <span className="cur">Rp</span>
          <span className="amount">49,000</span>
          <span className="period">/ month</span>
        </div>
        <div className="tier-sub">≈ Rp 1,600/day — cheaper than coffee</div>

        <hr className="tier-divider" />

        <ul className="tier-features">
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Unlimited</strong> <code>/signal</code></span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/chart</code> full indicators + patterns</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/swing</code> — 20 setup detectors</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/fa</code> + <code>/fascan</code> screener</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/sizing</code> + <code>/calculator</code></span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/scan</code> across all IDX sectors</span></li>
          <li className="is-off"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><span>Backtest, auto-alerts, watchlist</span></li>
        </ul>

        <a href="https://t.me/orion_idx_bot?start=upgrade_starter" target="_blank" rel="noopener" className="tier-cta is-primary btn-shine">
          Upgrade to Starter
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <div className="tier-footnote">Bot will send payment instructions in chat.</div>
        <div className="card-glow"></div>
      </article>

      {/*  PRO  */}
      <article className="tier-card glass-card is-pro">
        <span className="tier-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l3-7 6 4 6-4 3 7M5 20h14"/><path d="M5 11l3 9h8l3-9"/></svg>
        </span>
        <div className="tier-name">Pro</div>
        <div className="tier-tagline">Full power — backtest, auto-alerts, personal watchlist. For active traders.</div>

        <div className="tier-price">
          <span className="cur">Rp</span>
          <span className="amount">99,000</span>
          <span className="period">/ month</span>
        </div>
        <div className="tier-sub">≈ Rp 3,300/day — 1 winning setup pays the month</div>

        <hr className="tier-divider" />

        <ul className="tier-features">
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Everything in Starter</strong></span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/backtest</code> historical (5 years)</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Auto swing broadcast every 15 min</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/alert</code> personal price triggers</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span><code>/watchlist</code> (up to 50 stocks)</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Priority response &amp; early access</span></li>
          <li className="is-on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Direct support from the maker</span></li>
        </ul>

        <a href="https://t.me/orion_idx_bot?start=upgrade_pro" target="_blank" rel="noopener" className="tier-cta btn-shine">
          Upgrade to Pro
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <div className="card-glow"></div>
      </article>
    </section>
  );
}
