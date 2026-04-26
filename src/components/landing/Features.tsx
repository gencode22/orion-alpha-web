import React from 'react';

interface FeaturesProps {
  openModal: (key: string) => void;
}

export default function Features({ openModal }: FeaturesProps) {
  const featureList = [
    { id: 'setups', title: '20+ Swing Setup Detectors', desc: 'VCP, Pullback, Breakout-Volume, Donchian, Cup-Handle, Flag — each scored 0–100 with regime-aware filter.', core: true, icon: <polyline points="3 17 9 11 13 15 21 7"></polyline> },
    { id: 'confluence', title: 'Multi-TF Confluence Scoring', desc: '12-indicator weighted vote across Daily, Weekly, 4H. Final 0–100 score with regime-adaptive weights.', icon: <><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></> },
    { id: 'ai', title: 'AI Research Assistant', desc: 'Gemini 2.5 Flash primary, local Qwen 2.5 3B fallback. Tool-augmented natural-language queries on live data.', icon: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></> },
    { id: 'fundamental', title: 'Fundamental Analysis', desc: '4-pillar 0–100 scoring: valuation, profitability, health, growth. Graham Number with margin-of-safety.', icon: <><path d="M21 21H4.6c-.6 0-.6 0-.6-.6V3"></path><path d="M7 14l4-4 4 4 5-5"></path></> },
    { id: 'backtest', title: 'Backtest Engine', desc: 'Bar-by-bar replay. 3-phase trailing stop. Per-setup expectancy + walk-forward validation.', icon: <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></> },
    { id: 'alerts', title: 'Smart Alerts', desc: 'Personal price triggers + auto swing-broadcast every 15 min. Per-user watchlist filter, SL/TP proximity warnings.', icon: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></> },
    { id: 'portfolio', title: 'Portfolio Tracking', desc: 'SQLite-backed positions. Real-time net P&L (fee-aware). Natural-language commands and XLSX export.', icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></> },
    { id: 'news', title: 'News Aggregation', desc: 'Global RSS (Reuters, Investing.com) + Indonesia (CNBC, Bisnis, Kontan). Per-stock keyword filter.', icon: <><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8m8-4h-8m4-4H8"></path></> },
    { id: 'charts', title: 'Decision-Ready Charts', desc: 'Candle render with entry zone, SL/TP horizontals, pattern annotations, multi-indicator overlays.', icon: <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></> },
    { id: 'discord', title: 'Join Community', desc: 'Real-time discussions with 500+ traders. Share setups, get support, and trade together on Discord.', icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></>, link: 'https://discord.gg/rSAPFDgewe' },
  ];

  return (
    <section className="features fade-up" id="features">
      <div className="section-head">
        <span className="eyebrow">Swing Trading Toolkit</span>
        <h2 className="display-text">Find the right setup. Every time.</h2>
        <p className="lede">Nine modules — setup detection, confluence scoring, risk sizing, fundamentals, and alerts — working together so you always know what the data is saying. Click any card for the full breakdown.</p>
      </div>

      <div className="feature-grid">
        {featureList.map((f) => (
          <a 
            key={f.id}
            href={f.link || '#'}
            target={f.link ? "_blank" : undefined}
            rel={f.link ? "noopener" : undefined}
            className={`feature-card glass-card ${f.link ? 'is-link' : ''}`}
            onClick={(e) => {
              if (!f.link) {
                e.preventDefault();
                openModal(f.id);
              }
            }}
            aria-label={f.link ? `Join our Discord community` : `Read more about ${f.title}`}
            style={f.core ? {borderColor: 'rgba(6,182,212,0.3)'} : {}}
          >
            {f.core && (
              <div className="feature-badge">
                <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                Core Feature
              </div>
            )}
            <div className="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {f.icon}
              </svg>
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <span className="feature-card-cta btn-shine">
              {f.link ? 'Join Discord' : 'Read detail'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
            <div className="card-glow"></div>
          </a>
        ))}
      </div>
    </section>
  );
}
