"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TradingViewWidget from "@/features/market/components/TradingViewWidget";
import AnimatedCounter from "@/features/market/components/AnimatedCounter";

export default function IndexPromoPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [demoTicker, setDemoTicker] = useState("");
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [showDemoResult, setShowDemoResult] = useState(false);
  const [resultTicker, setResultTicker] = useState("");

  useEffect(() => {
    const t = localStorage.getItem('orion-theme');
    if (!t) {
      const defaultTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', defaultTheme);
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleDemoAnalyze = () => {
    let val = demoTicker.trim().toUpperCase();
    if (!val) return;
    
    val = val.replace(/[^A-Z0-9]/g, '');
    if (val.length > 5) val = val.substring(0, 5);
    
    setShowDemoResult(false);
    setIsDemoLoading(true);
    
    setTimeout(() => {
      setIsDemoLoading(false);
      setResultTicker(val + '.JK');
      setShowDemoResult(true);
    }, 1500);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="landing">
        <Navbar />

<div className="promo-outer">

<main className="page-wrap">

  {/*  ── HERO ──  */}
  <div className="hero">
    <div className="sonar-wrapper animate-float">
      <div className="sonar-wave"></div>
      <div className="hero-badge">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        Swing Trading Engine · IDX
      </div>
    </div>
    <h1 className="display-text">Find the Setup.<br /><span className="accent">Execute with Edge.</span></h1>
    <p className="lede">Stop guessing which IDX stock to buy today. Orion scans all of them against 20 proven swing setups — and tells you exactly when to enter, where to stop, and when to take profit.</p>
  </div>

  {/*  ── Live Market Ticker ──  */}
  <div className="ticker-wrap fade-up">
    <div className="ticker-track">
      <div className="ticker-item">IHSG <span className="up">▲ 7,230 (+0.4%)</span></div>
      <div className="ticker-item">BBCA <span className="up">▲ 9,800 (+1.2%)</span></div>
      <div className="ticker-item">GOTO <span className="down">▼ 64 (-1.5%)</span></div>
      <div className="ticker-item">BMRI <span className="up">▲ 6,450 (+0.8%)</span></div>
      <div className="ticker-item">AMMN <span className="up">▲ 8,200 (+2.1%)</span></div>
      <div className="ticker-item">TLKM <span className="down">▼ 3,900 (-0.2%)</span></div>
      <div className="ticker-item">BREN <span className="up">▲ 5,500 (+3.4%)</span></div>
      {/*  Duplikasi untuk infinite scroll yang mulus  */}
      <div className="ticker-item">IHSG <span className="up">▲ 7,230 (+0.4%)</span></div>
      <div className="ticker-item">BBCA <span className="up">▲ 9,800 (+1.2%)</span></div>
      <div className="ticker-item">GOTO <span className="down">▼ 64 (-1.5%)</span></div>
      <div className="ticker-item">BMRI <span className="up">▲ 6,450 (+0.8%)</span></div>
      <div className="ticker-item">AMMN <span className="up">▲ 8,200 (+2.1%)</span></div>
      <div className="ticker-item">TLKM <span className="down">▼ 3,900 (-0.2%)</span></div>
      <div className="ticker-item">BREN <span className="up">▲ 5,500 (+3.4%)</span></div>
    </div>
  </div>

  {/*  ── Stat strip ──  */}
  <div className="promo-stat-strip-wrapper">
    <div className="promo-stat-strip fade-up" role="list">
      <div className="stat-cell" role="listitem">
        <div className="stat-val"><span className="accent">All</span> IDX stocks</div>
        <div className="stat-lbl">Coverage</div>
      </div>
      <div className="stat-cell" role="listitem">
        <div className="stat-val"><span className="accent"><AnimatedCounter value={20} /></span> swing setups</div>
        <div className="stat-lbl">Detectors</div>
      </div>
      <div className="stat-cell" role="listitem">
        <div className="stat-val"><span className="accent"><AnimatedCounter value={12} /></span> indicators</div>
        <div className="stat-lbl">Confluence</div>
      </div>
      <div className="stat-cell" role="listitem">
        <div className="stat-val">Walk-forward <span className="accent">A</span></div>
        <div className="stat-lbl">Robustness</div>
      </div>
    </div>
  </div>

  {/*  ── 01 SIGNAL SAMPLE ──  */}
  <div className="promo-section fade-up">
    <div className="promo-section-hd">
      <div className="promo-section-num">01</div>
      <span className="promo-section-name">Signal Sample</span>
      <span className="promo-section-tag">Sample</span>
    </div>
    <div className="signal-card glass-card">
      <div className="signal-card-hd">
        <div>
          <div className="signal-ticker">BBCA.JK</div>
          <div className="signal-sub">Bank Central Asia · Banking · IDX30</div>
        </div>
        <div className="signal-label">STRONG BUY</div>
      </div>

      <div className="conf-bars">
        <div className="conf-row">
          <span className="conf-lbl">Confluence</span>
          <div className="conf-track"><div className="conf-fill cyan" style={{width: '75%'}}></div></div>
          <span className="conf-score cyan">9 / 12</span>
        </div>
        <div className="conf-row">
          <span className="conf-lbl">Setup Quality</span>
          <div className="conf-track"><div className="conf-fill green" style={{width: '78%'}}></div></div>
          <span className="conf-score green">78 / 100</span>
        </div>
      </div>

      <div className="signal-meta">
        <div className="meta-cell">
          <div className="meta-lbl">Setup Detected</div>
          <div className="meta-val cyan">Pullback Uptrend</div>
        </div>
        <div className="meta-cell">
          <div className="meta-lbl">Market Regime</div>
          <div className="meta-val green">Bullish</div>
        </div>
        <div className="meta-cell">
          <div className="meta-lbl">Timeframes</div>
          <div className="meta-val">Daily · Weekly · 4H</div>
        </div>
        <div className="meta-cell">
          <div className="meta-lbl">Last Price (delayed)</div>
          <div className="meta-val">Rp 8,950</div>
        </div>
      </div>

      <div className="level-row">
        <div className="level-cell">
          <span className="level-name">Entry</span>
          <span className="level-val entry">8,950</span>
        </div>
        <div className="level-cell">
          <span className="level-name">Stop Loss</span>
          <span className="level-val sl">8,600</span>
        </div>
        <div className="level-cell">
          <span className="level-name">TP1 / TP2</span>
          <span className="level-val tp">9,475 / 9,975</span>
        </div>
      </div>
      <div className="card-glow"></div>
    </div>
  </div>

  {/*  ── 02 LIVE CHART ──  */}
  <div className="promo-section fade-up">
    <div className="promo-section-hd">
      <div className="promo-section-num">02</div>
      <span className="promo-section-name">Live Market Data</span>
      <span style={{marginLeft: 'auto', fontSize: '10px', color: 'var(--muted)'}}>Powered by TradingView</span>
    </div>
    <div className="chart-card glass-card">
      <div className="tradingview-wrap">
        <TradingViewWidget />
      </div>
      <div className="chart-foot">IDX:BBCA · Daily · Use search bar to switch ticker</div>
      <div className="card-glow"></div>
    </div>
  </div>

  {/*  ── 03 ORION CHART OUTPUT ──  */}
  <div className="promo-section fade-up">
    <div className="promo-section-hd">
      <div className="promo-section-num">03</div>
      <span className="promo-section-name">Orion Alpha Chart Output</span>
      <span className="promo-section-tag">BBCA · 6mo</span>
    </div>
    <div className="chart-card">
      <button className="chart-click-wrap" onClick={openLightbox} aria-label="Enlarge Orion Alpha chart">
        <img src="/static/sample-chart.png" alt="Orion Alpha full chart — BBCA 6-month with Entry/SL/TP overlays" className="sample-chart-img" loading="lazy" />
        <div className="chart-zoom-hint">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          Click to enlarge
        </div>
      </button>
      <div className="chart-foot">3-panel: Price · Volume · RSI &nbsp;·&nbsp; Entry zone · SL/TP · Supertrend · EMA200 · Pattern detection</div>
    </div>
  </div>

  {/*  ── 04 BACKTEST RESULTS ──  */}
  <div className="promo-section fade-up">
    <div className="promo-section-hd">
      <div className="promo-section-num">04</div>
      <span className="promo-section-name">Backtest Results</span>
      <span className="promo-section-tag">RAJA · 3 Years</span>
    </div>
    <div className="bt-card">
      <div className="bt-metrics">
        <div className="bt-metric">
          <div className="bt-metric-val green"><AnimatedCounter value={482.97} decimals={2} prefix="+" suffix="%" /></div>
          <div className="bt-metric-lbl">Total Return</div>
        </div>
        <div className="bt-metric">
          <div className="bt-metric-val cyan"><AnimatedCounter value={68.4} decimals={1} suffix="%" /></div>
          <div className="bt-metric-lbl">Win Rate</div>
        </div>
        <div className="bt-metric">
          <div className="bt-metric-val cyan"><AnimatedCounter value={5.38} decimals={2} suffix="×" /></div>
          <div className="bt-metric-lbl">Profit Factor</div>
        </div>
        <div className="bt-metric">
          <div className="bt-metric-val red"><AnimatedCounter value={28.54} decimals={2} prefix="−" suffix="%" /></div>
          <div className="bt-metric-lbl">Max Drawdown</div>
        </div>
        <div className="bt-metric">
          <div className="bt-metric-val"><AnimatedCounter value={11.71} decimals={2} prefix="+" suffix="%" /></div>
          <div className="bt-metric-lbl">Expectancy / Trade</div>
        </div>
        <div className="bt-metric">
          <div className="bt-metric-val"><AnimatedCounter value={20.6} decimals={1} suffix="d" /></div>
          <div className="bt-metric-lbl">Avg Hold</div>
        </div>
      </div>

      <div className="bt-equity">
        <svg viewBox="0 0 280 70" width="100%" height="70" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="bt-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,70 L0,70 14.7,68.2 29.5,68.2 44.2,68.7 58.9,69.1 73.7,63.5 88.4,63.5 103.2,60.9 117.9,60.9 132.6,58.9 147.4,53.3 162.1,56.5 176.8,53.6 191.6,47.8 206.3,25.0 221.1,0 235.8,12.2 250.5,19.5 265.3,23.0 280,20.7 L280,70 Z" fill="url(#bt-grad)"/>
          <polyline points="0,70 14.7,68.2 29.5,68.2 44.2,68.7 58.9,69.1 73.7,63.5 88.4,63.5 103.2,60.9 117.9,60.9 132.6,58.9 147.4,53.3 162.1,56.5 176.8,53.6 191.6,47.8 206.3,25.0 221.1,0 235.8,12.2 250.5,19.5 265.3,23.0 280,20.7" fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="bt-equity-row">
          <span>Feb 2024</span>
          <span>Equity curve · 3-phase trailing stop</span>
          <span>Apr 2026</span>
        </div>
      </div>

      <div className="bt-setup-hd">Setup Breakdown</div>
      <div className="bt-setup-rows">
        <div className="bt-setup-row">
          <span className="bt-setup-name">EMA200-Bounce</span>
          <div className="bt-setup-track"><div className="bt-setup-fill" style={{width: '60%'}}></div></div>
          <span className="bt-setup-wr">60%</span>
        </div>
        <div className="bt-setup-row">
          <span className="bt-setup-name">Ichimoku-Break</span>
          <div className="bt-setup-track"><div className="bt-setup-fill" style={{width: '67%'}}></div></div>
          <span className="bt-setup-wr">67%</span>
        </div>
        <div className="bt-setup-row">
          <span className="bt-setup-name">VCP</span>
          <div className="bt-setup-track"><div className="bt-setup-fill" style={{width: '100%'}}></div></div>
          <span className="bt-setup-wr">100%</span>
        </div>
        <div className="bt-setup-row">
          <span className="bt-setup-name">Accumulation-Zone</span>
          <div className="bt-setup-track"><div className="bt-setup-fill" style={{width: '100%'}}></div></div>
          <span className="bt-setup-wr">100%</span>
        </div>
      </div>
    </div>
  </div>

  {/*  ── 05 WALK-FORWARD BACKTEST ──  */}
  <div className="promo-section fade-up">
    <div className="promo-section-hd">
      <div className="promo-section-num">05</div>
      <span className="promo-section-name">Walk-Forward Backtest</span>
      <span className="promo-section-tag">RAJA · 3 Years</span>
    </div>
    <div className="bt-card">

      {/*  Concept explainer  */}
      <div className="wf-concept">
        <div className="wf-concept-icon">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div>
          <div className="wf-concept-title">What is Walk-Forward Backtest?</div>
          <div className="wf-concept-body">
            Regular backtest runs once on all historical data — prone to overfitting. Walk-forward splits history into rolling <strong>train → test</strong> windows. Strategy parameters are optimized on the training window, then validated on <strong>unseen out-of-sample bars</strong> — a much stricter test of real-world robustness.
          </div>
          <div className="wf-concept-flow">
            <span className="wf-flow-step active">Train &amp; Optimize</span>
            <span className="wf-flow-arrow">→</span>
            <span className="wf-flow-step active">Test OOS</span>
            <span className="wf-flow-arrow">→</span>
            <span className="wf-flow-step">Roll Window</span>
            <span className="wf-flow-arrow">→</span>
            <span className="wf-flow-step">Repeat</span>
          </div>
        </div>
      </div>

      {/*  Summary stats  */}
      <div className="bt-metrics">
        <div className="bt-metric">
          <div className="bt-metric-val green"><AnimatedCounter value={68.4} decimals={1} prefix="+" suffix="%" /></div>
          <div className="bt-metric-lbl">Total OOS Return</div>
        </div>
        <div className="bt-metric">
          <div className="bt-metric-val cyan"><AnimatedCounter value={60.0} decimals={1} suffix="%" /></div>
          <div className="bt-metric-lbl">OOS Win Rate</div>
        </div>
        <div className="bt-metric">
          <div className="bt-metric-val cyan"><AnimatedCounter value={3.00} decimals={2} suffix="×" /></div>
          <div className="bt-metric-lbl">Profit Factor</div>
        </div>
        <div className="bt-metric">
          <div className="bt-metric-val red"><AnimatedCounter value={18.2} decimals={1} prefix="−" suffix="%" /></div>
          <div className="bt-metric-lbl">Max Drawdown</div>
        </div>
      </div>

      {/*  OOS Equity curve — 5 windows  */}
      <div className="bt-equity">
        <svg viewBox="0 0 280 70" width="100%" height="70" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="wf-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.22"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/*  baseline 100%  */}
          <line x1="0" y1="56" x2="280" y2="56" stroke="#94a3b8" strokeWidth="0.6" strokeDasharray="4,4" opacity="0.4"/>
          {/*  window boundary lines  */}
          <line x1="56"  y1="2" x2="56"  y2="70" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.45"/>
          <line x1="112" y1="2" x2="112" y2="70" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.45"/>
          <line x1="168" y1="2" x2="168" y2="70" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.45"/>
          <line x1="224" y1="2" x2="224" y2="70" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.45"/>
          {/*  window labels  */}
          <text x="28"  y="9" fontSize="7" fill="#94a3b8" textAnchor="middle" opacity="0.7">W1</text>
          <text x="84"  y="9" fontSize="7" fill="#94a3b8" textAnchor="middle" opacity="0.7">W2</text>
          <text x="140" y="9" fontSize="7" fill="#94a3b8" textAnchor="middle" opacity="0.7">W3</text>
          <text x="196" y="9" fontSize="7" fill="#94a3b8" textAnchor="middle" opacity="0.7">W4</text>
          <text x="252" y="9" fontSize="7" fill="#94a3b8" textAnchor="middle" opacity="0.7">W5</text>
          {/*  equity fill  */}
          <path d="M0,70 L0,56 10,54 22,51 35,48 48,45 56,45 65,43 78,41 90,40 104,39 112,39 122,41 132,44 145,44 158,43 168,43 178,39 190,34 202,29 215,27 224,27 234,22 245,17 256,12 268,9 280,8 L280,70 Z" fill="url(#wf-grad)"/>
          {/*  equity line  */}
          <polyline points="0,56 10,54 22,51 35,48 48,45 56,45 65,43 78,41 90,40 104,39 112,39 122,41 132,44 145,44 158,43 168,43 178,39 190,34 202,29 215,27 224,27 234,22 245,17 256,12 268,9 280,8" fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="bt-equity-row">
          <span>Apr 2022</span>
          <span>OOS equity curve · 5 rolling windows</span>
          <span>Apr 2025</span>
        </div>
      </div>

      {/*  Per-window breakdown  */}
      <div className="bt-setup-hd">Per-Window Out-of-Sample Results</div>
      <div className="wf-window-rows">
        <div className="wf-window-row">
          <span className="wf-w-num">W1</span>
          <span className="wf-w-period">Jul – Oct 2022</span>
          <span className="wf-w-minq">MinQ 60</span>
          <span className="wf-w-wr">WR 67%</span>
          <div className="wf-w-ret green">+15.3%</div>
        </div>
        <div className="wf-window-row">
          <span className="wf-w-num">W2</span>
          <span className="wf-w-period">Nov 2022 – Feb 2023</span>
          <span className="wf-w-minq">MinQ 55</span>
          <span className="wf-w-wr">WR 56%</span>
          <div className="wf-w-ret green">+8.7%</div>
        </div>
        <div className="wf-window-row">
          <span className="wf-w-num">W3</span>
          <span className="wf-w-period">Mar – Jun 2023</span>
          <span className="wf-w-minq">MinQ 65</span>
          <span className="wf-w-wr">WR 43%</span>
          <div className="wf-w-ret red">−4.8%</div>
        </div>
        <div className="wf-window-row">
          <span className="wf-w-num">W4</span>
          <span className="wf-w-period">Jul – Oct 2023</span>
          <span className="wf-w-minq">MinQ 60</span>
          <span className="wf-w-wr">WR 62%</span>
          <div className="wf-w-ret green">+22.4%</div>
        </div>
        <div className="wf-window-row">
          <span className="wf-w-num">W5</span>
          <span className="wf-w-period">Nov 2023 – Feb 2024</span>
          <span className="wf-w-minq">MinQ 60</span>
          <span className="wf-w-wr">WR 70%</span>
          <div className="wf-w-ret green">+18.9%</div>
        </div>
      </div>

      {/*  Robustness  */}
      <div className="wf-robustness">
        <span className="wf-rob-label">Robustness</span>
        <div className="wf-rob-track">
          <div className="wf-rob-fill" style={{width: '80%'}}></div>
        </div>
        <span className="wf-rob-val">80% windows profit</span>
        <span className="wf-rob-badge">Rating: A+ (Sangat Bagus)</span>
      </div>
      <div className="wf-vs-note">vs regular backtest (section 04): same RAJA 3y data → +482% in-sample. Walk-forward OOS: +68.4% — more realistic, no data leakage.</div>

    </div>
  </div>

  {/*  ── 06 SETUP CONDITIONS ──  */}
  <div className="promo-section fade-up">
    <div className="promo-section-hd">
      <div className="promo-section-num">06</div>
      <span className="promo-section-name">Setup Conditions</span>
      <span className="promo-section-tag">Sample</span>
    </div>
    <div className="checklist-card">
      <div className="checklist-meta">
        <span className="checklist-setup-name">EMA200-Bounce</span>
        <span className="checklist-stock">RAJA · Daily</span>
        <span className="checklist-quality">Quality 82 / 100</span>
      </div>
      <div className="check-list">
        <div className="check-item">
          <div className="check-icon pass">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="check-text">
            Price at EMA200 support zone (within 1.5× ATR)
            <span className="check-detail">4,174 vs EMA200 4,098</span>
          </div>
        </div>
        <div className="check-item">
          <div className="check-icon pass">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="check-text">
            RSI turning up from oversold zone
            <span className="check-detail">RSI 34.2 → 41.8 (bouncing)</span>
          </div>
        </div>
        <div className="check-item">
          <div className="check-icon pass">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="check-text">
            Volume surge — accumulation candle
            <span className="check-detail">1.9× 20-day average</span>
          </div>
        </div>
        <div className="check-item">
          <div className="check-icon pass">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="check-text">
            Supertrend bullish (price above ST line)
            <span className="check-detail">ST 3,941 &lt; price 4,174</span>
          </div>
        </div>
        <div className="check-item">
          <div className="check-icon pass">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="check-text">
            ADX confirms trend strength
            <span className="check-detail">ADX 26.4 (+DI 28.1 &gt; −DI 19.3)</span>
          </div>
        </div>
        <div className="check-item">
          <div className="check-icon fail">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
          <div className="check-text">
            MACD bullish cross (not yet confirmed)
            <span className="check-detail">MACD −48 / Signal −61 (histogram narrowing)</span>
          </div>
        </div>
      </div>
      <div className="checklist-levels">
        <div className="level-cell">
          <span className="level-name">Entry</span>
          <span className="level-val entry">4,174</span>
        </div>
        <div className="level-cell">
          <span className="level-name">Stop Loss</span>
          <span className="level-val sl">3,941</span>
        </div>
        <div className="level-cell">
          <span className="level-name">TP1 / TP2</span>
          <span className="level-val tp">4,640 / 5,440</span>
        </div>
      </div>
    </div>
  </div>

  {/*  ── 07 KEY CAPABILITIES ──  */}
  <div className="promo-section fade-up">
    <div className="promo-section-hd">
      <div className="promo-section-num">07</div>
      <span className="promo-section-name">Key Capabilities</span>
    </div>
    <div className="feat-grid">
      <div className="feat-card tilt-card">
        <div className="tilt-card-inner">
          <div className="feat-icon animate-float-delayed">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div>
            <div className="feat-title">12-Indicator Confluence</div>
            <div className="feat-desc">RSI, MACD, BB, ATR, ADX, Supertrend, PSAR, EMA cross — regime-weighted. Score 0–12.</div>
            <span className="feat-tag free">Free tier</span>
          </div>
        </div>
      </div>
      <div className="feat-card tilt-card">
        <div className="tilt-card-inner">
          <div className="feat-icon animate-float-delayed">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
          </div>
          <div>
            <div className="feat-title">20 Swing-Setup Detectors</div>
            <div className="feat-desc">VCP, Cup &amp; Handle, Breakout, Pullback, EMA200 Bounce, Supertrend Flip — ATR-anchored stops, 3-phase trailing.</div>
            <span className="feat-tag starter">Starter+</span>
          </div>
        </div>
      </div>
      <div className="feat-card tilt-card">
        <div className="tilt-card-inner">
          <div className="feat-icon animate-float-delayed">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div>
            <div className="feat-title">Graham FA Scoring</div>
            <div className="feat-desc">P/E, P/B, ROE, D/E, EPS growth — Graham Number margin of safety. 0–100 composite score.</div>
            <span className="feat-tag free">Free tier</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/*  ── INTERACTIVE FAKE DEMO (Growth Hack) ──  */}
  <div className="promo-section fade-up demo-section">
    <div className="promo-section-hd" style={{justifyContent: 'center', marginBottom: '16px'}}>
      <span className="promo-section-name">Live Checker</span>
    </div>
    <h2 style={{textAlign: 'center', marginBottom: '24px'}}>Check Any IDX Stock</h2>
    
    <div className="demo-box">
      <div className="demo-input-group">
        <input 
          type="text" 
          value={demoTicker}
          onChange={(e) => setDemoTicker(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleDemoAnalyze()}
          placeholder="e.g. BBCA, GOTO, AMMN..." 
          maxLength={4} 
          style={{textTransform: 'uppercase'}} 
        />
        <button 
          onClick={handleDemoAnalyze} 
          className="btn-primary"
          disabled={isDemoLoading}
        >
          {isDemoLoading ? "Scanning..." : "Analyze"}
        </button>
      </div>
      
      {isDemoLoading && (
        <div id="demo-loading" className="demo-loading">
          <div className="spinner"></div>
          <span>Orion Engine is scanning 20 setups...</span>
        </div>
      )}
      
      {showDemoResult && (
        <div id="demo-result" className="demo-result">
          <div className="demo-card-blur">
            <div className="blur-overlay">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <h4>Analysis Locked</h4>
              <p>Orion Alpha has found a potential setup for <strong>{resultTicker}</strong>.</p>
              <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="btn-primary btn-magnetic" style={{fontSize: '13px', padding: '10px 16px'}}>Unlock Full Analysis in Telegram</a>
            </div>
            {/* Fake content underneath */}
            <div className="fake-signal-hd">
              <span className="fake-tkr">{resultTicker}</span>
              <span className="fake-lbl">STRONG BUY</span>
            </div>
            <div className="fake-bars">
              <div className="fake-bar"></div>
              <div className="fake-bar"></div>
              <div className="fake-bar"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>

  {/*  ── Data delay notice ──  */}
  <div className="data-note fade-up">
    <div className="data-note-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    </div>
    <div>
      <h3>A note on data.</h3>
      <p>All market data is sourced from Yahoo Finance and delayed ~15 minutes. Orion signals reflect this data — verify current prices before placing any order.</p>
    </div>
  </div>

  {/*  ── CTA ──  */}
  <div className="cta-gate">
    <div className="cta-icon">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
    </div>
    <h2>Get tomorrow's setup. Tonight.</h2>
    <p>Real-time swing alerts, personalized watchlists, sector scans, FA scoring — every signal traceable to its inputs. Free to start, no credit card.</p>
    <div className="cta-row">
      <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="btn-primary btn-magnetic">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        Open Telegram Bot
      </a>
      <a href="/pricing" className="btn-outline">
        View Pricing
      </a>
    </div>
  </div>

</main>

    <Footer />
  </div>
</div>

{isLightboxOpen && (
  <div id="lightbox" className="open" onClick={closeLightbox}>
    <button className="lb-close" onClick={closeLightbox} aria-label="Close lightbox">&times;</button>
    <img src="/static/sample-chart.png" alt="Orion Alpha full chart — BBCA 6-month" onClick={(e) => e.stopPropagation()} />
  </div>
)}
    </>
  );
}
