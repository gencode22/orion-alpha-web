import React from 'react';

export default function AudienceSection() {
  return (
    <section className="audience-section fade-up" aria-labelledby="audience-title">
      <div className="section-head">
        <span className="eyebrow">Who Orion is built for</span>
        <h2 id="audience-title" className="display-text">For traders who want a system, <em>not noise.</em></h2>
        <p className="lede">Whether you're new to swing trading or systematic for years, Orion meets you where you are.</p>
      </div>

      <div className="audience-grid">
        <div className="audience-card glass-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <h4>Beginners who want a real system</h4>
          <p>No more FOMO trades or grup signal roulette. Every signal explains itself — score, setup, levels — so you learn while the bot does the heavy lifting.</p>
          <div className="card-glow"></div>
        </div>
        <div className="audience-card glass-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h4>Working professionals</h4>
          <p>30 seconds for a setup, not 3 hours of charting. Check your watchlist on lunch break, set alerts, trade with conviction.</p>
          <div className="card-glow"></div>
        </div>
        <div className="audience-card glass-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
          </div>
          <h4>Data-driven retail traders</h4>
          <p>Open methodology. Decomposable scores. Walk-forward backtests. No black boxes — every signal traceable to its inputs.</p>
          <div className="card-glow"></div>
        </div>
      </div>
    </section>
  );
}
