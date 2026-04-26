"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURE_MODALS: Record<string, any> = {
  signals: {
    eyebrow: '02 · Technical · scoring',
    title: 'Multi-TF Confluence Scoring',
    intro: 'Twelve indicators aggregated across three timeframes (Daily, Weekly, 4H) into a single 0–100 score. Each indicator contributes ±1 to ±2 points; final label maps to STRONG BUY / BUY / NEUTRAL / SELL / STRONG SELL.',
    sections: [
      { title: 'Indicators evaluated', items: [
        'RSI (14) · MACD histogram · Bollinger %B',
        'ATR (volatility) · ADX + DI (trend strength)',
        'Supertrend · Parabolic SAR',
        'OBV · MFI · CMF (volume / money flow)',
        'Stochastic · Ichimoku Tenkan/Kijun cross'
      ]},
      { title: 'Regime-adaptive weighting', items: [
        'Bull regime: trend-following amplified (Supertrend, Ichimoku)',
        'Sideways regime: mean-reversion amplified (RSI, BB)',
        'Bear regime: defensive bias (avoid early longs, weight reversal carefully)'
      ]},
      { title: 'Output', items: [
        'score (0–100), confluence (0–12), signal label',
        'confluence_breakdown (12 rules with pass/fail)',
        'mtf_data (Daily / Weekly / 4H bull-counts and alignment)',
        'risk_level + risk_factors warnings'
      ]}
    ],
    cta: { label: 'Explore showcase', href: '/app' }
  },
  ai: {
    eyebrow: '03 · AI · research',
    title: 'AI Research Assistant',
    intro: 'Tool-augmented LLM that calls live analysis functions (signal, scan, fundamental, news) on demand. Owner-only on Telegram for cost control; Indonesian-language UX.',
    sections: [
      { title: 'Models', items: [
        'Primary: Google Gemini 2.5 Flash (cloud, fast, tool-calling)',
        'Fallback: Qwen 2.5 3B via Ollama (local, offline-capable, private)',
        'Specialised: deterministic narrators for swing alerts and regime briefs'
      ]},
      { title: 'Capabilities', items: [
        'Natural-language stock queries: "BBCA outlook?", "scan banking BUY"',
        'Multi-step research: news → fundamentals → technical synthesis',
        'Portfolio commands via regex fast-path (no LLM cost for structured ops)',
        'Content generation: Telegram channel posts, Threads drafts'
      ]},
      { title: 'Privacy & cost', items: [
        'Owner-only on Telegram (gated by OWNER_TELEGRAM_ID)',
        'Blocked on dashboard (returns 402 with Telegram CTA)',
        'Local fallback runs zero-API-cost when Gemini unavailable'
      ]}
    ],
    cta: { label: 'Try on Telegram', href: 'https://t.me/orion_idx_bot' }
  },
  fundamental: {
    eyebrow: '04 · Fundamental · scoring',
    title: 'Fundamental Analysis (0–100)',
    intro: 'Four-pillar scoring framework spanning valuation, profitability, balance-sheet health, and growth. Graham Number anchors valuation with explicit margin-of-safety.',
    sections: [
      { title: 'Pillar weights', items: [
        'Valuation (P/E, P/B, PEG, EV/EBITDA) — 30%',
        'Profitability (ROE, ROA, Net Margin, Gross Margin) — 30%',
        'Health (D/E, Current Ratio, Quick Ratio) — 20%',
        'Growth (EPS CAGR, Revenue CAGR, Dividend Growth) — 20%'
      ]},
      { title: 'Graham Number', items: [
        '√(22.5 × EPS × Book Value per Share)',
        'Compares fair value vs current price',
        'Margin of Safety = (Graham − Price) / Graham × 100%',
        'MoS ≥ 30% → undervalue zone'
      ]},
      { title: 'Sector-aware', items: [
        'Bank-specific metrics: NIM, NPL/NPF',
        'Property: revenue growth + RevPar trends',
        'Commodity: P/CF + reserve life adjustments'
      ]}
    ],
    cta: { label: 'Try /fa BBCA on Telegram', href: 'https://t.me/orion_idx_bot' }
  },
  backtest: {
    eyebrow: '05 · Backtest · validation',
    title: 'Bar-by-Bar Backtest Engine',
    intro: 'Replay any setup detector across historical OHLCV with realistic execution: 3-phase trailing stops, slippage simulation, walk-forward validation.',
    sections: [
      { title: '3-phase trailing stop', items: [
        'Phase 1 (entry → TP1): SL fixed at original level',
        'Phase 2 (past TP1): SL migrates to entry (break-even)',
        'Phase 3 (past TP2): SL migrates to TP1 (lock partial profit)'
      ]},
      { title: 'Output metrics', items: [
        'Win rate, profit factor, average gain / loss, expectancy',
        'Max drawdown, max winning / losing streaks',
        'Trade-by-trade table with reason logs'
      ]},
      { title: 'Walk-forward validation', items: [
        'Splits history into rolling train / test windows',
        'Re-fits regime weights on train, evaluates on test',
        'Detects strategy decay over time'
      ]}
    ],
    cta: { label: 'Try !backtest on Telegram (Pro)', href: 'https://t.me/orion_idx_bot' }
  },
  alerts: {
    eyebrow: '06 · Alerts · automation',
    title: 'Smart Alerts',
    intro: 'Three alert mechanisms: personal price triggers, auto swing-setup broadcast, and SL/TP proximity warnings. All delivered via Telegram DM.',
    sections: [
      { title: 'Personal price triggers', items: [
        'Format: /alert BBCA >9500 entry plan',
        'Up to 20 alerts per user, persisted in SQLite',
        'Checker runs every 15 min during market hours'
      ]},
      { title: 'Auto swing broadcast', items: [
        'Scans union (default + personal) every 15 min',
        'Filters per user matching their effective watchlist',
        'Includes "Reason" button for AI-narrated explanation'
      ]},
      { title: 'SL/TP proximity (owner)', items: [
        'Watches open portfolio positions',
        'Warns at 80% travel toward SL',
        'Warns at 90% travel toward TP1'
      ]}
    ],
    cta: { label: 'Try /alert on Telegram (Pro)', href: 'https://t.me/orion_idx_bot' }
  },
  portfolio: {
    eyebrow: '07 · Portfolio · tracking',
    title: 'Portfolio Tracking',
    intro: 'SQLite-backed position manager with fee-aware P&L, natural-language commands, and XLSX export. Owner-only.',
    sections: [
      { title: 'Position tracking', items: [
        'Add: buy BBCA 10 lot 9400 sl 9200 tp1 9700',
        'Close: close BBCA at 9700',
        'Backdate: buy BBCA 10 lot 9400 date 2026-04-15'
      ]},
      { title: 'P&L computation', items: [
        'Auto-deducts buy + sell fees (default 0.15%)',
        'Returns both gross and net figures',
        'Equity = capital + realized + floating'
      ]},
      { title: 'Output', items: [
        'Real-time summary with per-position breakdown',
        'Trade history with win-rate, expectancy',
        'XLSX export with formatted headers'
      ]}
    ],
    cta: { label: 'Try /portfolio on Telegram', href: 'https://t.me/orion_idx_bot' }
  },
  news: {
    eyebrow: '08 · News · aggregation',
    title: 'News Aggregation',
    intro: 'RSS-based aggregation from six publishers covering global markets and Indonesia, plus per-stock keyword filtering.',
    sections: [
      { title: 'Sources', items: [
        'Global: Reuters, Investing.com (RSS)',
        'Indonesia: CNBC ID, Bisnis.com, Kontan (RSS)',
        'Per-emiten: yfinance news API + filter'
      ]},
      { title: 'Delivery', items: [
        '/news on Telegram → 5 most recent',
        '/news BBCA → emiten-specific news',
        'News tab on dashboard with filter chips'
      ]}
    ],
    cta: { label: 'Explore showcase', href: '/app' }
  },
  charts: {
    eyebrow: '09 · Visualisation · charts',
    title: 'Decision-Ready Charts',
    intro: 'matplotlib-based candle charts annotated with Entry / SL / TP zones, pattern detections, and multi-indicator overlays.',
    sections: [
      { title: 'Layout', items: [
        'Top panel: candles + EMA stack + BB + Supertrend',
        'Middle panel: Volume bars colored by direction',
        'Bottom panel: RSI (14) + MACD histogram',
        'Overlays: Entry zone, SL/TP levels, patterns'
      ]},
      { title: 'Pattern detection', items: [
        'Double Top/Bottom · Head & Shoulders · Cup & Handle',
        'Flag · Pennant · Triangle · Wedge · Channel',
        'Annotated with neckline / breakout / target'
      ]}
    ],
    cta: { label: 'Try /chart on Telegram (Starter)', href: 'https://t.me/orion_idx_bot' }
  }
};

export default function FeaturesPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem('orion-theme');
    if (!t) {
      const defaultTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', defaultTheme);
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openModal = (key: string) => {
    setActiveModal(key);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="landing">
        <Navbar />

  <div className="landing-container">

    {/*  ── Intro ──  */}
    <section className="intro">
      <div className="intro-body">
        <span className="eyebrow">Systematic Swing Trading · IDX · Walk-Forward Validated</span>
        <h1>Trade like a system.<br />Even if you're <em>starting today.</em></h1>
        <p>
          Behind every Orion signal: 20 swing-setup detectors, 12 technical indicators,
          walk-forward backtested. In front of you: one Telegram command, one clear move
          — entry, stop, take-profit. The math stays under the hood. The decisions stay
          with you.
        </p>
        <div className="ctas-group">
          <div className="intro-ctas">
            <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="btn btn-telegram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Open Telegram Bot
            </a>
            <a href="https://discord.gg/rSAPFDgewe" target="_blank" rel="noopener" className="btn btn-discord">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
              Join Discord
            </a>
          </div>
          <div className="explore-cta">
            <Link href="/app" className="btn btn-explore">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m9 11 2 2 4-4"/></svg>
              Explore Showcase
            </Link>
            <span className="explore-hint">Interactive preview — no signup</span>
          </div>
        </div>
      </div>
      {/*  Hero stats panel — desktop only  */}
      <div className="intro-panel" aria-hidden="true">
        <div className="ipanel-card">
          <div className="ipanel-head">
            <span className="ipanel-dot"></span>
            Analysis Engine
          </div>
          <div className="ipanel-grid">
            <div className="intro-stat">
              <div className="intro-stat-val">20<span className="stat-sup">+</span></div>
              <div className="intro-stat-lbl">Swing Setups</div>
            </div>
            <div className="intro-stat">
              <div className="intro-stat-val">12</div>
              <div className="intro-stat-lbl">Indicators</div>
            </div>
            <div className="intro-stat">
              <div className="intro-stat-val">All</div>
              <div className="intro-stat-lbl">IDX Stocks</div>
            </div>
            <div className="intro-stat">
              <div className="intro-stat-val">3</div>
              <div className="intro-stat-lbl">Platforms</div>
            </div>
          </div>
          <div className="ipanel-foot">Telegram · Discord · Web Dashboard</div>
        </div>
      </div>
    </section>

    {/*  ── Who is this for ──  */}
    <section className="audience-section fade-up" aria-labelledby="audience-title">
      <div className="section-head">
        <span className="eyebrow">Who Orion is built for</span>
        <h2 id="audience-title">For traders who want a system, <em>not noise.</em></h2>
        <p>Whether you're new to swing trading or systematic for years, Orion meets you where you are.</p>
      </div>

      <div className="audience-grid">
        <div className="audience-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <h4>Beginners who want a real system</h4>
          <p>No more FOMO trades or grup signal roulette. Every signal explains itself — score, setup, levels — so you learn while the bot does the heavy lifting.</p>
        </div>
        <div className="audience-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h4>Working professionals</h4>
          <p>30 seconds for a setup, not 3 hours of charting. Check your watchlist on lunch break, set alerts, trade with conviction.</p>
        </div>
        <div className="audience-card">
          <div className="audience-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
          </div>
          <h4>Data-driven retail traders</h4>
          <p>Open methodology. Decomposable scores. Walk-forward backtests. No black boxes — every signal traceable to its inputs.</p>
        </div>
      </div>
    </section>

    {/*  ── Features (clickable, opens modal) ──  */}
    <section className="features fade-up" id="features">
      <div className="section-head">
        <span className="eyebrow">Swing Trading Toolkit</span>
        <h2>Find the right setup. Every time.</h2>
        <p>Nine modules — setup detection, confluence scoring, risk sizing, fundamentals, and alerts — working together so you always know what the data is saying. Click any card for the full breakdown.</p>
      </div>

      <div className="feature-grid">
        <button type="button" className="feature-card" onClick={() => openModal('setups')} aria-label="Read more about Swing Setup Detectors" style={{borderColor: 'rgba(6,182,212,0.3)'}}>
          <div className="feature-badge">
            <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Core Feature
          </div>
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="14 7 21 7 21 14"></polyline></svg>
          </div>
          <h3>20+ Swing Setup Detectors</h3>
          <p>VCP, Pullback, Breakout-Volume, Donchian, Cup-Handle, Flag — each scored 0–100 with regime-aware filter.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>

        <button type="button" className="feature-card" onClick={() => openModal('signals')} aria-label="Read more about Multi-TF Confluence">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></svg>
          </div>
          <h3>Multi-TF Confluence Scoring</h3>
          <p>12-indicator weighted vote across Daily, Weekly, 4H. Final 0–100 score with regime-adaptive weights.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>

        <button type="button" className="feature-card" onClick={() => openModal('ai')} aria-label="Read more about AI Assistant">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
          </div>
          <h3>AI Research Assistant</h3>
          <p>Gemini 2.5 Flash primary, local Qwen 2.5 3B fallback. Tool-augmented natural-language queries on live data.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>

        <button type="button" className="feature-card" onClick={() => openModal('fundamental')} aria-label="Read more about Fundamental Analysis">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21H4.6c-.6 0-.6 0-.6-.6V3"></path><path d="M7 14l4-4 4 4 5-5"></path></svg>
          </div>
          <h3>Fundamental Analysis</h3>
          <p>4-pillar 0–100 scoring: valuation, profitability, health, growth. Graham Number with margin-of-safety.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>

        <button type="button" className="feature-card" onClick={() => openModal('backtest')} aria-label="Read more about Backtest Engine">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <h3>Backtest Engine</h3>
          <p>Bar-by-bar replay. 3-phase trailing stop. Per-setup expectancy + walk-forward validation.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>

        <button type="button" className="feature-card" onClick={() => openModal('alerts')} aria-label="Read more about Smart Alerts">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </div>
          <h3>Smart Alerts</h3>
          <p>Personal price triggers + auto swing-broadcast every 15 min. Per-user watchlist filter, SL/TP proximity warnings.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>

        <button type="button" className="feature-card" onClick={() => openModal('portfolio')} aria-label="Read more about Portfolio Tracking">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <h3>Portfolio Tracking</h3>
          <p>SQLite-backed positions. Real-time net P&amp;L (fee-aware). Natural-language commands and XLSX export.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>

        <button type="button" className="feature-card" onClick={() => openModal('news')} aria-label="Read more about News Feed">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8m8-4h-8m4-4H8"></path></svg>
          </div>
          <h3>News Aggregation</h3>
          <p>Global RSS (Reuters, Investing.com) + Indonesia (CNBC, Bisnis, Kontan). Per-stock keyword filter.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>

        <button type="button" className="feature-card" onClick={() => openModal('charts')} aria-label="Read more about Charts">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
          </div>
          <h3>Decision-Ready Charts</h3>
          <p>Candle render with entry zone, SL/TP horizontals, pattern annotations, multi-indicator overlays.</p>
          <span className="feature-card-cta">Read detail
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </button>
      </div>
    </section>

    {/*  ── How It Works (4-step pipeline) ──  */}
    <section className="pipeline fade-up" id="how">
      <div className="section-head">
        <span className="eyebrow">How it works</span>
        <h2>Four stages, one signal</h2>
        <p>Every signal follows the same pipeline — price data in, actionable setup out. No black boxes. You can trace exactly why a stock was flagged at every step.</p>
      </div>

      <div className="pipeline-grid">
        <div className="pipeline-step">
          <h4>Data Ingestion</h4>
          <p>OHLCV from <code>yfinance</code> (15 min delayed) with retry + IHSG last-candle patch. RSS news from 6 publishers.</p>
        </div>
        <div className="pipeline-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
        <div className="pipeline-step">
          <h4>Indicator Computation</h4>
          <p>12 indicators across Daily / Weekly / 4H — RSI, MACD, BB, ATR, ADX, Supertrend, PSAR, OBV, MFI, CMF, Stoch, Ichimoku.</p>
        </div>
        <div className="pipeline-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
        <div className="pipeline-step">
          <h4>Confluence + Regime</h4>
          <p>Detect IHSG regime (Bull / Bear / Sideways), apply adaptive weights, aggregate to 0–100 score with <code>0–12</code> confluence.</p>
        </div>
        <div className="pipeline-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
        <div className="pipeline-step">
          <h4>Setup + Risk</h4>
          <p>Match against 20 named setups (VCP, Donchian, Pullback…). Compute Entry/SL/TP with ATR-anchored stops, R:R guard.</p>
        </div>
      </div>
    </section>

    {/*  ── Methodology (deep concepts) ──  */}
    <section className="methodology fade-up" id="methodology">
      <div className="section-head">
        <span className="eyebrow">Methodology</span>
        <h2>How every signal is built</h2>
        <p>Six principles behind every output — written plainly so you understand the logic, not just the result.</p>
      </div>

      <div className="methodology-grid">
        <div className="method-card">
          <span className="method-eyebrow">01 · Confluence</span>
          <h4>12-indicator weighted vote</h4>
          <p>Each indicator contributes ±1 to ±2 points based on its signal strength. Final aggregate score normalises to 0–100.</p>
          <div className="method-meta">
            <strong>Score bands:</strong> 75+ Strong Buy · 60+ Buy · 45–59 Neutral · &lt;45 Sell
          </div>
        </div>

        <div className="method-card">
          <span className="method-eyebrow">02 · Regime-adaptive weights</span>
          <h4>Bull / Bear / Sideways tilts</h4>
          <p>IHSG regime is detected from EMA stack + ADX. Indicator weights shift accordingly — trend-following is amplified in trending regimes, mean-reversion in sideways.</p>
          <div className="method-meta">
            <strong>Bull:</strong> Supertrend + Ichimoku boosted · <strong>Sideways:</strong> RSI + BB boosted
          </div>
        </div>

        <div className="method-card">
          <span className="method-eyebrow">03 · Multi-timeframe</span>
          <h4>Daily + Weekly + 4H alignment</h4>
          <p>A signal is "aligned" only if all three timeframes agree on direction. Misalignment downgrades the signal label and surfaces a warning.</p>
          <div className="method-meta">
            <strong>Daily</strong> = primary · <strong>Weekly</strong> = trend filter · <strong>4H</strong> = entry timing
          </div>
        </div>

        <div className="method-card">
          <span className="method-eyebrow">04 · Setup quality</span>
          <h4>0–100 quality score per setup</h4>
          <p>Every named setup (VCP, Pullback, Donchian…) computes a quality score from trend profile, trendiness, volume context, and structural integrity.</p>
          <div className="method-meta">
            <strong>≥75</strong> high · <strong>55–74</strong> medium · <strong>&lt;55</strong> low (filtered)
          </div>
        </div>

        <div className="method-card">
          <span className="method-eyebrow">05 · Risk framework</span>
          <h4>ATR-anchored Entry / SL / TP</h4>
          <p>Stops and targets are anchored to recent volatility (ATR), not arbitrary percentages. Position sizing accepts 1–2% portfolio risk per trade with R:R ≥ 1.5 minimum.</p>
          <div className="method-meta">
            <strong>SL</strong> = entry − 1.5×ATR · <strong>TP1</strong> = entry + 2×ATR · <strong>TP2</strong> = entry + 3×ATR
          </div>
        </div>

        <div className="method-card">
          <span className="method-eyebrow">06 · 3-phase trailing</span>
          <h4>Adaptive stop migration</h4>
          <p>As the trade progresses, stops migrate to lock in profit. Backtest engine simulates this exactly.</p>
          <div className="method-meta">
            <strong>Phase 1</strong> entry→TP1: SL fixed<br />
            <strong>Phase 2</strong> TP1→TP2: SL = entry<br />
            <strong>Phase 3</strong> past TP2: SL = TP1
          </div>
        </div>
      </div>
    </section>

    {/*  ── Why Orion Alpha ──  */}
    <section className="advantages fade-up" id="why">
      <div className="section-head">
        <span className="eyebrow">Why Orion Alpha</span>
        <h2>Built different. Priced for everyone.</h2>
        <p>Most signal bots give you a number with no context. Orion Alpha shows you the work — so you learn while you trade.</p>
      </div>

      <div className="advantages-grid">
        <div className="advantage-item">
          <div className="advantage-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
          <div>
            <h4>Made for IDX, not adapted for it</h4>
            <p>Indonesian tickers, BEI market hours, Rupiah formatting, LQ45 / IDX30 sector groupings — built for this market from day one, not a global tool with local cosmetics.</p>
          </div>
        </div>

        <div className="advantage-item">
          <div className="advantage-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
          <div>
            <h4>Same signal everywhere you are</h4>
            <p>Telegram, Discord, or the web dashboard — they all run the same analysis engine. The signal you get on Telegram is identical to what the dashboard shows. Zero drift.</p>
          </div>
        </div>

        <div className="advantage-item">
          <div className="advantage-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
          <div>
            <h4>Start free. Upgrade only when you're ready.</h4>
            <p>The free plan gives you 3 signals/day, a full market scan, regime read, and IDX news — no credit card, no expiry. Paid plans start at Rp 49K/month.</p>
          </div>
        </div>

        <div className="advantage-item">
          <div className="advantage-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
          <div>
            <h4>Every score explains itself</h4>
            <p>Not just "BUY 78/100" — you get the full confluence checklist, which indicators fired, and what market regime you're in. You'll understand why, not just what.</p>
          </div>
        </div>

        <div className="advantage-item">
          <div className="advantage-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
          <div>
            <h4>AI that stays online when APIs don't</h4>
            <p>Gemini 2.5 Flash handles natural-language queries. If cloud is unavailable, a local Qwen 2.5 model takes over automatically — no interruption, no extra cost.</p>
          </div>
        </div>

        <div className="advantage-item">
          <div className="advantage-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
          <div>
            <h4>Reliable enough to trust at open</h4>
            <p>Automatic retries, persistent alert state that survives restarts, daily database backups. It's running when the market opens — consistently.</p>
          </div>
        </div>
      </div>
    </section>

    {/*  ── Pricing CTA ──  */}
    <section className="pricing-cta fade-up" aria-labelledby="pricing-cta-title">
      <div className="pricing-cta-head">
        <span className="eyebrow">Pricing</span>
        <h2 id="pricing-cta-title">Start free. Upgrade <em>when you need more</em>.</h2>
        <p>Monthly plans, no lock-in. Cancel anytime. Manual activation under 10 minutes via QRIS or bank transfer.</p>
        <Link href="/pricing" className="pricing-cta-link">
          See all plans
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>

      <div className="pricing-tiers-mini" aria-hidden="true">
        <div className="pricing-tier-chip">
          <div className="tier-col">
            <strong>Free</strong>
            <small>3 signals/day · scan · regime</small>
          </div>
          <div className="tier-price">Rp 0</div>
        </div>

        <div className="pricing-tier-chip is-primary">
          <div className="tier-col">
            <strong>Starter <span className="badge">Popular</span></strong>
            <small>Unlimited signals · swing · FA · chart</small>
          </div>
          <div className="tier-price">49K<span className="unit">/mo</span></div>
        </div>

        <div className="pricing-tier-chip">
          <div className="tier-col">
            <strong>Pro</strong>
            <small>+ backtest · auto-alert · watchlist</small>
          </div>
          <div className="tier-price">99K<span className="unit">/mo</span></div>
        </div>
      </div>
    </section>

    {/*  ── Trust strip ──  */}
    <div className="trust-strip-features fade-up" role="list">
      <span className="trust-pill" role="listitem">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Built by a trader, for traders
      </span>
      <span className="trust-pill" role="listitem">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Open methodology — no black box
      </span>
      <span className="trust-pill" role="listitem">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Walk-forward A rated
      </span>
      <span className="trust-pill" role="listitem">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        161 automated tests
      </span>
    </div>

    {/*  ── Final CTA ──  */}
    <section className="final-cta fade-up">
      <h2>Your edge in IDX starts here.</h2>
      <p>Open the Telegram bot — free, no signup, no credit card. Your first signal is one command away.</p>
      <div className="intro-ctas">
        <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="btn btn-telegram">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          Open Telegram Bot
        </a>
        <a href="https://discord.gg/rSAPFDgewe" target="_blank" rel="noopener" className="btn btn-discord">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
          Join Discord
        </a>
      </div>
    </section>

    {/*  ── Footer ──  */}
    <Footer />

  </div>

  {/*  ── Modal: feature deep-dive ──────────────────────────────────────────  */}
  <div className={`modal-overlay ${activeModal ? 'is-open' : ''}`} onClick={(e) => { if ((e.target as HTMLElement).classList.contains('modal-overlay')) closeModal(); }} role="dialog" aria-modal="true" aria-hidden={!activeModal}>
    {activeModal && FEATURE_MODALS[activeModal] && (
      <div className="modal-content" tabIndex={-1}>
        <button className="modal-close" onClick={closeModal} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <span className="modal-eyebrow">{FEATURE_MODALS[activeModal].eyebrow}</span>
        <h2>{FEATURE_MODALS[activeModal].title}</h2>
        <p>{FEATURE_MODALS[activeModal].intro}</p>
        
        {FEATURE_MODALS[activeModal].sections.map((sec: any, i: number) => (
          <div className="modal-section" key={i}>
            <h3>{sec.title}</h3>
            <ul>
              {sec.items.map((item: string, j: number) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {FEATURE_MODALS[activeModal].cta && (
          <a href={FEATURE_MODALS[activeModal].cta.href} target="_blank" rel="noopener" className="modal-cta">
            {FEATURE_MODALS[activeModal].cta.label}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        )}
      </div>
    )}
  </div>


  
  
  

</div>
    </>
  );
}
