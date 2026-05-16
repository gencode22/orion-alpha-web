"use client";

import React, { useState, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/docs.css";

/* ── Reusable: Setup accordion card ── */
function SetupCard({ name, quality, hold, desc, children }: {
  name: string; quality: string; hold: string; desc: string; children: React.ReactNode;
}) {
  return (
    <details className="setup-card">
      <summary>
        <span className="setup-card-title">{name}</span>
        <div className="setup-card-right">
          <div className="setup-meta"><span>{quality}</span><span>{hold}</span></div>
          <svg className="setup-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </summary>
      <div className="setup-card-body">
        <p className="setup-desc">{desc}</p>
        {children}
      </div>
    </details>
  );
}

/* ── Reusable: Requirement table ── */
function ReqTable({ rows }: { rows: [string, 'Hard' | 'Soft', string][] }) {
  return (
    <div className="doc-table-wrap">
      <table className="doc-table">
        <thead><tr><th>Requirement</th><th>Type</th><th>Detail</th></tr></thead>
        <tbody>
          {rows.map(([req, type, detail], i) => (
            <tr key={i}>
              <td>{req}</td>
              <td><span className={type === 'Hard' ? 'badge-hard' : 'badge-soft'}>{type}</span></td>
              <td>{detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── TOC Data ── */
const tocItems = [
  { id: 'philosophy', num: '01', label: 'Philosophy' },
  { id: 'setups', num: '02', label: '15 Active Setups' },
  { id: 'confluence', num: '03', label: 'Signal Scoring' },
  { id: 'regime', num: '04', label: 'Market Regime' },
  { id: 'risk', num: '05', label: 'Risk Management' },
  { id: 'trendiness', num: '06', label: 'Adaptive Adjustments' },
  { id: 'backtest', num: '07', label: 'Backtest Evidence' },
  { id: 'limitations', num: '08', label: 'Limitations' },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Chapter Content Components
   ═══════════════════════════════════════════════════════════════════════════ */

function ChapterPhilosophy() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <span className="section-eyebrow">Chapter 1</span>
        <h2>Philosophy & Approach</h2>
        <p>Orion Alpha is a trend-following swing trading system for the Indonesian stock market (Bursa Efek Indonesia / IDX). It scans 100+ stocks across LQ45 + momentum names and identifies actionable setups with defined entry, stop-loss, and take-profit levels.</p>
      </div>
      <div className="doc-content">
        <h3>Core Principles</h3>
        <ul>
          <li><strong>Trend-following bias:</strong> prioritize buying in established uptrends or at trend initiation. Mean-reversion is secondary.</li>
          <li><strong>Swing timeframe:</strong> 5-45 day holding, adapted per-stock based on historical trend episode length.</li>
          <li><strong>Long-only:</strong> IDX has no retail short selling. Bearish detectors exist in code but are disabled in the live dispatcher.</li>
          <li><strong>15 diverse setups:</strong> different market conditions favor different entry patterns. The engine runs all detectors and picks the highest-quality match.</li>
          <li><strong>Checklist-based quality:</strong> each setup has 7-11 binary items. Quality = (passed / total) x 100. Hard requirements gate entry.</li>
          <li><strong>Regime-aware:</strong> IHSG market regime modulates indicator weights, setup selection, and quality thresholds.</li>
        </ul>
        <h3>Why 15 Setups?</h3>
        <p>A single setup works in some conditions and fails in others. By maintaining 15 detectors spanning trend continuation, breakout, momentum shift, pattern recognition, and accumulation, the system finds opportunities across all market conditions &mdash; from strong trends to post-consolidation expansions, direction changes, and institutional support zones.</p>
      </div>
    </section>
  );
}

function ChapterSetups() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <span className="section-eyebrow">Chapter 2</span>
        <h2>The 15 Active Swing Setups</h2>
        <p>Each setup has <strong>Hard</strong> requirements (must-pass gates) and <strong>Soft</strong> requirements (quality score contributors). Click any setup to expand its checklist.</p>
      </div>
      <div className="doc-content">
        <div className="doc-callout info">
          <strong>Engine v9 note.</strong> This chapter documents the 20-setup original design. Engine v9 currently runs <strong>15 active setups</strong>. <strong>6 retired</strong> after walkforward returned NEGATIVE/INSUFFICIENT verdicts: <em>Breakout-Volume, BB-Squeeze-Break, Cup-Handle, Flag-Continuation, Flat-Base, Supertrend-Flip</em>. <strong>5 added</strong> in phases 3–4: <em>Pocket-Pivot, Wyckoff-Spring, Stage2-Breakout, HL-Reversal, High-Tight-Flag</em> — detailed criteria docs pending. See <a href="/backtest" style={{ color: 'var(--cyan)' }}>/backtest §1</a> for the canonical active list with current stats.
        </div>

        {/* Group A */}
        <div className="setup-group">
          <div className="setup-group-title">Group A: Trend Continuation</div>
          <SetupCard name="Pullback-Uptrend" quality="/8" hold="5-15d" desc="Weekly uptrend + daily EMA stack bullish + price pulled back to EMA20 or nearest swing support. Classic buy-the-dip in an uptrend.">
            <ReqTable rows={[['Weekly uptrend (price>EMA20 & MACD>=0)','Hard','MTF confirmation'],['EMA stack bullish (20>50>100, price>EMA20)','Hard','Trend structure'],['Price above EMA200','Hard','Long-term uptrend'],['In pullback zone (\u22641.2 ATR of EMA20 or \u22641.5 ATR of support)','Hard','Entry timing'],['RSI 38-62','Soft','Not overbought'],['Volume healthy (\u22642.5x, no panic)','Soft',''],['ADX \u2265 18','Soft',''],['IHSG regime not BEAR','Soft','']]} />
          </SetupCard>
          <SetupCard name="Donchian-Break (Turtle System)" quality="/9" hold="15-45d" desc="Close above 20-day (S1) or 55-day (S2) Donchian channel high. Classic Turtle trading breakout. SL: 10-day Donchian low.">
            <ReqTable rows={[['Close > 20-day Donchian high','Hard','Channel breakout'],['Channel width \u2265 3%','Hard','Filter false breakouts'],['Volume \u2265 1.2x','Hard','Confirmation'],['Trend profile not STRONG_DOWNTREND/RANGE','Hard',''],['Close > 55-day Donchian high','Soft','+5 quality bonus'],['ADX \u2265 20','Soft',''],['Above EMA50','Soft',''],['IHSG not bear','Soft',''],['Weekly not bearish','Soft','']]} />
          </SetupCard>
          <SetupCard name="Flag-Continuation" quality="/7" hold="5-20d" desc="Bull flag or pennant after sharp rally. Target: measured move (pole height projected).">
            <ReqTable rows={[['Bull flag/pennant pattern detected','Hard','Pattern recognition'],['Volume \u2265 1.2x','Soft',''],['Price > EMA20','Soft',''],['MACD histogram > 0','Soft',''],['ADX \u2265 18','Soft',''],['IHSG not bear','Soft',''],['Weekly aligned','Soft','']]} />
          </SetupCard>
          <SetupCard name="Golden-Cross" quality="/8" hold="10-25d" desc="EMA20 crosses above EMA50 within last 5 bars. Trend initiation.">
            <ReqTable rows={[['EMA20 crossed above EMA50 in last 5 bars','Hard','Detected bar-by-bar'],['Price > EMA20 > EMA50','Hard','Cross confirmed'],['MACD histogram > 0','Soft',''],['ADX \u2265 18','Soft',''],['Volume \u2265 1.0x','Soft',''],['IHSG not bear','Soft',''],['Weekly not bearish','Soft',''],['Above EMA200','Soft','']]} />
          </SetupCard>
        </div>

        {/* Group B */}
        <div className="setup-group">
          <div className="setup-group-title">Group B: Breakout</div>
          <SetupCard name="Breakout-Volume" quality="/8" hold="10-30d" desc="Price breaks above 20-bar high with volume surge \u2265 1.5x. Range/squeeze break with conviction.">
            <ReqTable rows={[['Close > 20-bar high (0.2% margin)','Hard','Breakout'],['Volume \u2265 1.5x','Hard','Conviction'],['Prior consolidation (BB width < avg x 0.85)','Soft',''],['ADX \u2265 18','Soft',''],['Above EMA50','Soft',''],['IHSG not bear','Soft',''],['Weekly not bearish','Soft',''],['No resistance within 2% above','Soft','']]} />
          </SetupCard>
          <SetupCard name="BB-Squeeze-Break" quality="/8" hold="5-15d" desc="BB squeeze (width < 80% of 50-bar avg) then price breaks above upper band. Post-squeeze expansion.">
            <ReqTable rows={[['BB width < avg x 0.8','Hard','Squeeze detected'],['Price \u2265 upper BB','Hard','Break confirmed'],['Above EMA50','Hard','Trend filter'],['Volume \u2265 1.5x','Hard',''],['ADX \u2265 18','Soft',''],['RSI \u2264 78','Soft',''],['CMF > 0','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
          <SetupCard name="52W-High-Break" quality="/8" hold="10-30d" desc="Price breaks above 252-bar high. Pure momentum, price discovery zone with no overhead resistance.">
            <ReqTable rows={[['Price \u2265 N-bar high (up to 252)','Hard',''],['Volume \u2265 1.5x','Hard',''],['ADX \u2265 20','Soft',''],['Above EMA50','Soft',''],['Above EMA200','Soft',''],['RSI 45-82','Soft','Not exhausted'],['CMF > 0','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
          <SetupCard name="Inside-Bar-Break" quality="/7" hold="3-10d" desc="Yesterday's bar inside the prior bar (mother). Today breaks above mother bar high. SL: inside bar low.">
            <ReqTable rows={[['Inside bar pattern valid','Hard',''],['Price \u2265 mother bar high','Hard',''],['Above EMA50','Hard','Trend filter'],['Volume \u2265 1.3x','Soft',''],['ADX \u2265 18','Soft',''],['RSI \u2264 72','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
          <SetupCard name="VCP (Volatility Contraction Pattern)" quality="/9" hold="10-30d" desc="Minervini-style: 3 contracting price ranges (depth shrinking), volume drying, then breakout from pivot. High-conviction.">
            <ReqTable rows={[['3 contracting phases (last < 65% of first)','Hard',''],['Breakout from 10-bar pivot high','Hard',''],['Volume \u2265 1.5x at breakout','Hard',''],['Price > EMA50','Hard',''],['Volume drying during contraction (<85% early)','Soft',''],['Price > EMA200','Soft','+5 quality bonus'],['Last base \u2264 10% depth','Soft','+5 bonus'],['ADX \u2265 18','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
          <SetupCard name="Flat-Base" quality="/10" hold="15-40d" desc="O'Neil CAN SLIM: tight base (<15% depth, 25-40 bars) near prior high, volume drying, then breakout. Extra +8 if base < 8%.">
            <ReqTable rows={[['Base depth < 15%','Hard',''],['Breakout from base high','Hard',''],['Volume \u2265 1.4x at breakout','Hard',''],['Price > EMA50','Hard',''],['Near prior high (\u2265 85%)','Soft',''],['Volume drying during base (<80% pre-base)','Soft',''],['Price > EMA200','Soft','+5 bonus'],['ADX \u2265 18','Soft',''],['RSI \u2264 80','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
        </div>

        {/* Group C */}
        <div className="setup-group">
          <div className="setup-group-title">Group C: Momentum / Direction Change</div>
          <SetupCard name="Supertrend-Flip" quality="/7" hold="7-25d" desc="Supertrend flips bearish to bullish within 5 bars. SL: below Supertrend line.">
            <ReqTable rows={[['Supertrend flip bullish \u2264 5 bars ago','Hard',''],['Volume \u2265 1.3x at flip','Hard',''],['Price > Supertrend line','Hard',''],['ADX \u2265 15','Soft',''],['RSI \u2264 70','Soft',''],['Above EMA20','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
          <SetupCard name="Ichimoku-Break" quality="/8" hold="15-30d" desc="Price breaks above Kumo cloud + Tenkan > Kijun. Multi-layered trend confirmation. SL: below Kijun line.">
            <ReqTable rows={[['Price above Kumo cloud','Hard',''],['Tenkan > Kijun (TK cross)','Hard',''],['MACD histogram > 0','Soft',''],['ADX \u2265 20','Soft',''],['Volume \u2265 1.0x','Soft',''],['Price > EMA50','Soft',''],['Weekly aligned','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
          <SetupCard name="EMA200-Bounce" quality="/8" hold="7-20d" desc="Price corrects to EMA200 area and bounces. Institutional support at the 200-day moving average.">
            <ReqTable rows={[['Was above EMA200+5% in last 60 bars','Hard','Not perma-below-200'],['Price within 2 ATR of EMA200','Hard','Near the level'],['Price \u2265 EMA200 x 0.99','Hard','Support holding'],['EMA50 > EMA200','Soft','Golden cross area'],['RSI \u2264 52','Soft','Correction happened'],['Volume \u2265 1.0x','Soft',''],['Bullish reversal candle','Soft','Hammer/engulfing'],['IHSG not bear','Soft','']]} />
          </SetupCard>
          <SetupCard name="Weakness-Recovery" quality="/11" hold="7-25d" desc="Corrected \u22655% from 20-bar high, then fresh Golden Cross within 7 bars. Double confirmation. +5 if depth\u226510%, +5 if cross\u22642 bars.">
            <ReqTable rows={[['Correction \u2265 5% from 20-bar high','Hard','Meaningful pullback'],['Fresh Golden Cross within 7 bars','Hard','Momentum turning'],['Price > EMA20 > EMA50 (confirmed)','Soft',''],['Above EMA100','Soft','Not collapsed'],['Volume exhaustion during decline','Soft',''],['RSI 35-58','Soft','Room to rise'],['CMF > -0.1','Soft',''],['Above EMA200','Soft',''],['Weekly not strong bearish','Soft',''],['Volume uptick at cross \u2265 1.0x','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
        </div>

        {/* Group D */}
        <div className="setup-group">
          <div className="setup-group-title">Group D: Pattern Recognition</div>
          <SetupCard name="Cup & Handle" quality="/8" hold="15-40d" desc="Rounded bottom + small handle pullback + rim breakout. Target: cup depth projected from rim.">
            <ReqTable rows={[['Cup & Handle detected','Hard','Pattern recognition'],['Pattern confirmed (price \u2265 rim)','Hard','Breakout'],['Volume \u2265 1.2x','Soft',''],['Price > EMA50','Soft',''],['Handle present','Soft',''],['IHSG not bear','Soft',''],['Weekly aligned','Soft',''],['ADX \u2265 18','Soft','']]} />
          </SetupCard>
          <SetupCard name="Accumulation-Zone" quality="/8" hold="7-20d" desc="Sideways above EMA50 with rising OBV + positive CMF. Smart money accumulating. Target: nearest resistance or 2.5 ATR.">
            <ReqTable rows={[['Above EMA50','Hard','Trend filter'],['ADX \u2264 25','Hard','Sideways'],['CMF > 0.05','Hard','Institutional inflow'],['MFI 30-65','Soft',''],['Price near EMA20 (within 1 ATR)','Soft',''],['RSI \u2264 60','Soft',''],['OBV rising over 10 bars','Soft',''],['IHSG not bear','Soft','']]} />
          </SetupCard>
        </div>

        {/* Group E */}
        <div className="setup-group">
          <div className="setup-group-title">Group E: Reversal (Disabled in Live)</div>
          <div className="doc-callout warning">These 4 detectors exist in code but are disabled in the live dispatcher. IDX has no retail short selling, so bearish setups are not actionable.</div>
          <div className="doc-table-wrap">
            <table className="doc-table">
              <thead><tr><th>Setup</th><th>Direction</th><th>Hard Gates</th></tr></thead>
              <tbody>
                <tr><td>Reversal-Support</td><td>Bullish</td><td>At support + (RSI&lt;38 OR bullish divergence)</td></tr>
                <tr><td>Rejection-Downtrend</td><td>Bearish</td><td>Wk down + EMA bear stack + pullback + &lt;EMA200</td></tr>
                <tr><td>Breakdown-Volume</td><td>Bearish</td><td>Close &lt; 20-bar low + vol&ge;1.5x + &lt;EMA50</td></tr>
                <tr><td>Reversal-Resistance</td><td>Bearish</td><td>At resistance + (RSI&gt;62 OR bearish divergence)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterConfluence() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <span className="section-eyebrow">Chapter 3</span>
        <h2>Signal Scoring & Confluence</h2>
        <p>The confluence score counts how many of 12 independent indicators agree on a bullish stance (0-12).</p>
      </div>
      <div className="doc-content">
        <h3>12-Point Confluence Checklist</h3>
        <div className="confluence-grid">
          {[
            { num: 1, check: 'RSI < 50', meaning: 'Oversold zone' },
            { num: 2, check: 'MACD Hist > 0', meaning: 'Momentum bullish' },
            { num: 3, check: 'Price > EMA200', meaning: 'Major uptrend' },
            { num: 4, check: 'Price > EMA50', meaning: 'Medium uptrend' },
            { num: 5, check: 'Supertrend BULL', meaning: 'Trend = bullish' },
            { num: 6, check: 'PSAR bullish', meaning: 'SAR below price' },
            { num: 7, check: 'CMF > 0', meaning: 'Money inflow' },
            { num: 8, check: 'OBV confirms', meaning: 'OBV > OBV EMA20' },
            { num: 9, check: 'ADX > 20', meaning: 'Trending market' },
            { num: 10, check: 'StochRSI K > D', meaning: 'Stoch cross bullish' },
            { num: 11, check: 'Above Ichimoku', meaning: 'Above Senkou A & B' },
            { num: 12, check: 'Tenkan > Kijun', meaning: 'TK cross bullish' },
          ].map(item => (
            <div key={item.num} className="confluence-item">
              <span className="confluence-num">{item.num}</span>
              <span className="confluence-check">{item.check}</span>
              <span className="confluence-meaning">{item.meaning}</span>
            </div>
          ))}
        </div>
        <h3>Signal Labels</h3>
        <div className="signal-label-grid">
          <div className="signal-label-item"><div className="signal-label-name strong-buy">STRONG BUY</div><div className="label-desc">Quality &ge; 80 &middot; High-conviction setup</div></div>
          <div className="signal-label-item"><div className="signal-label-name buy">BUY</div><div className="label-desc">Quality &ge; 60 (50 counter) &middot; Standard entry</div></div>
          <div className="signal-label-item"><div className="signal-label-name neutral">NEUTRAL</div><div className="label-desc">No setup or below threshold &middot; No edge</div></div>
          <div className="signal-label-item"><div className="signal-label-name sell">SELL / STRONG SELL</div><div className="label-desc">Bearish quality &ge; 60/80 &middot; Disabled in live</div></div>
        </div>
      </div>
    </section>
  );
}

function ChapterRegime() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <span className="section-eyebrow">Chapter 4</span>
        <h2>Market Regime Detection</h2>
        <p>The system detects the IHSG (Jakarta Composite Index) regime and adjusts indicator weights accordingly.</p>
      </div>
      <div className="doc-content">
        <h3>Regime Classification</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Regime</th><th>Conditions</th><th>Weight Shift</th></tr></thead>
            <tbody>
              <tr><td><strong>BULL</strong></td><td>&gt;EMA200, &gt;EMA50, ADX&gt;20, +DI&gt;-DI</td><td>Trend wt up, osc down</td></tr>
              <tr><td><strong>BEAR</strong></td><td>&lt;EMA200, &lt;EMA50, ADX&gt;20, -DI&gt;+DI</td><td>Trend wt max, osc down</td></tr>
              <tr><td><strong>KOREKSI</strong></td><td>&gt;EMA200, &lt;EMA50</td><td>Default weights</td></tr>
              <tr><td><strong>SIDEWAYS</strong></td><td>ADX &lt; 20</td><td>Osc wt up, trend down</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Adaptive Weight Examples</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Indicator</th><th>Default</th><th>Bull</th><th>Sideways</th><th>Bear</th></tr></thead>
            <tbody>
              <tr><td>EMA</td><td>0.16</td><td>0.20</td><td>0.08</td><td>0.20</td></tr>
              <tr><td>MACD</td><td>0.12</td><td>0.14</td><td>0.10</td><td>0.14</td></tr>
              <tr><td>RSI</td><td>0.12</td><td>0.08</td><td>0.16</td><td>0.08</td></tr>
              <tr><td>Supertrend</td><td>0.09</td><td>0.11</td><td>0.05</td><td>0.12</td></tr>
              <tr><td>BB</td><td>0.08</td><td>0.06</td><td>0.12</td><td>0.05</td></tr>
              <tr><td>Stochastic</td><td>0.04</td><td>0.03</td><td>0.08</td><td>0.03</td></tr>
            </tbody>
          </table>
        </div>
        <h3>EIDO Leading Indicator</h3>
        <p>EIDO (iShares MSCI Indonesia ETF, NYSE) closes at ~04:00 WIB. Overnight movement can signal next-day IHSG direction. Flags generated for: overnight move &ge; +/-1.5%, and divergence between IHSG regime and EIDO trend. Informational only.</p>
      </div>
    </section>
  );
}

function ChapterRisk() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <span className="section-eyebrow">Chapter 5</span>
        <h2>Risk Management</h2>
      </div>
      <div className="doc-content">
        <h3>Stop-Loss Placement (Per-Setup)</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Setup</th><th>SL Method</th></tr></thead>
            <tbody>
              <tr><td>Pullback-Uptrend</td><td>Swing low - 0.5 ATR or Entry - 1.5 ATR (tighter)</td></tr>
              <tr><td>Breakout-Volume</td><td>Below breakout level (nearest support) x 0.995</td></tr>
              <tr><td>Donchian-Break</td><td>10-day Donchian low - 0.3 ATR (Turtle rule)</td></tr>
              <tr><td>Golden-Cross</td><td>Below EMA50 - 0.5 ATR</td></tr>
              <tr><td>Ichimoku-Break</td><td>Below Kijun line - 0.5 ATR</td></tr>
              <tr><td>CupHandle / Flag</td><td>Below pattern low - 0.3 ATR</td></tr>
              <tr><td>EMA200-Bounce</td><td>Below swing low in EMA200 area - 0.3 ATR</td></tr>
              <tr><td>Supertrend-Flip</td><td>Below Supertrend line - 0.3 ATR</td></tr>
              <tr><td>BB-Squeeze / 52W</td><td>Below pre-breakout swing low - 0.3 ATR</td></tr>
              <tr><td>Inside-Bar-Break</td><td>Below inside bar low - 0.2 ATR</td></tr>
              <tr><td>VCP</td><td>Below last contraction low - 0.2 ATR</td></tr>
              <tr><td>Flat-Base</td><td>Below base low - 0.3 ATR</td></tr>
              <tr><td>Weakness-Recovery</td><td>Below 20-bar weakness low - 0.3 ATR</td></tr>
            </tbody>
          </table>
        </div>
        <div className="doc-callout info"><strong>SL Safety Cap:</strong> Regardless of setup logic, SL distance is capped at the tighter of: 2.5 x ATR from entry, or 6% of entry price.</div>
        <h3>3-Phase Trailing Stop (Backtest)</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Phase</th><th>Trigger</th><th>SL moves to</th></tr></thead>
            <tbody>
              <tr><td><strong>1</strong></td><td>Entry &rarr; TP1 hit</td><td>Original SL (no change)</td></tr>
              <tr><td><strong>2</strong></td><td>TP1 hit (high &ge; TP1)</td><td>Entry price (breakeven)</td></tr>
              <tr><td><strong>3</strong></td><td>TP2 hit (high &ge; TP2)</td><td>TP1 (locked profit)</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Position Sizing</h3>
        <p>Default Rp 50M capital, 1% risk per trade = Rp 500K risk amount. Shares = risk_amount / (entry - SL), rounded to 100-share lots (IDX standard). Max position: 20% of capital.</p>
      </div>
    </section>
  );
}

function ChapterTrendiness() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <span className="section-eyebrow">Chapter 6</span>
        <h2>Per-Stock Trendiness & Adaptive Adjustments</h2>
        <p>Not all stocks trend equally. The system computes a trendiness score (0-100) for each stock using 6-month historical data.</p>
      </div>
      <div className="doc-content">
        <h3>Trendiness Score (0-100)</h3>
        <ul>
          <li><strong>Kaufman Efficiency Ratio (60% weight):</strong> net_move / total_path over 126 bars. Score = efficiency x 250 (capped 100).</li>
          <li><strong>Avg Trend Episode Length (40% weight):</strong> count EMA20/EMA50 crossover transitions, divide lookback by episodes. Score = avg_length x 3 (capped 100).</li>
        </ul>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Score</th><th>Label</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td>&ge; 70</td><td><strong>TRENDY</strong></td><td>+5 quality boost</td></tr>
              <tr><td>35-69</td><td><strong>MIXED</strong></td><td>No adjustment</td></tr>
              <tr><td>&lt; 30</td><td><strong>CHOPPY</strong></td><td>-10 penalty; skip most trend-following setups</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Chandelier Trailing Stop (State-Adaptive)</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Trend State</th><th>Conserv.</th><th>Normal</th><th>Aggress.</th><th>Note</th></tr></thead>
            <tbody>
              <tr><td>STRONG_UPTREND</td><td>HH-3.5ATR</td><td>HH-3.0ATR</td><td>HH-2.5ATR</td><td>Loose: ride the trend</td></tr>
              <tr><td>EARLY_UPTREND</td><td>HH-3.0ATR</td><td>HH-2.5ATR</td><td>HH-2.0ATR</td><td>Medium</td></tr>
              <tr><td>LATE_UPTREND</td><td>HH-2.0ATR</td><td>HH-1.5ATR</td><td>HH-1.2ATR</td><td>Tight: lock profits</td></tr>
              <tr><td>Default/RANGE</td><td>HH-2.5ATR</td><td>HH-2.0ATR</td><td>HH-1.5ATR</td><td>Standard</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ChapterBacktest() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <span className="section-eyebrow">Chapter 7</span>
        <h2>Backtest Evidence</h2>
        <p>The full audit lives on its own page — with the canonical engine v9 numbers, interactive charts, and walkforward verdicts.</p>
      </div>
      <div className="doc-content">
        <div className="docs-bt-link-card">
          <div className="docs-bt-link-stats">
            <div className="docs-bt-link-stat">
              <span className="docs-bt-link-stat-val">3,240</span>
              <span className="docs-bt-link-stat-lbl">Trades audited</span>
            </div>
            <div className="docs-bt-link-stat">
              <span className="docs-bt-link-stat-val">53.5<span style={{ fontSize: '0.6em' }}>%</span></span>
              <span className="docs-bt-link-stat-lbl">Aggregate winrate</span>
            </div>
            <div className="docs-bt-link-stat">
              <span className="docs-bt-link-stat-val">7<span style={{ opacity: 0.4, fontSize: '0.65em' }}> / 15</span></span>
              <span className="docs-bt-link-stat-lbl">Walkforward-proven</span>
            </div>
            <div className="docs-bt-link-stat">
              <span className="docs-bt-link-stat-val">96</span>
              <span className="docs-bt-link-stat-lbl">Unique stocks</span>
            </div>
          </div>
          <p className="docs-bt-link-body">
            Three years of replay across 96 IDX tickers, validated on 24 months of out-of-sample data the engine never saw during tuning. Per-setup tables, per-stock results, walkforward verdicts, and a real signal walkthrough — all on one page.
          </p>
          <a href="/backtest" className="docs-bt-link-cta">
            Open the Audit Report
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        <div className="doc-callout success" style={{ marginTop: 24 }}>
          <strong>Bottom line.</strong> Walkforward validation confirms <strong>7 of 15 setups CONSISTENT</strong> across 4 independent OOS periods. Edge is real, but driven by asymmetric payoff (avg win 3–5× loss), not high winrate.
        </div>
      </div>
    </section>
  );
}

function ChapterLimitations() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <span className="section-eyebrow">Chapter 8</span>
        <h2>Known Limitations & Caveats</h2>
      </div>
      <div className="doc-content">
        <h3>Data Limitations</h3>
        <ul>
          <li>Delayed data (~15 min): yfinance free tier. Real fills differ.</li>
          <li>No real-time order book: no bid-ask spread, no market depth.</li>
          <li>No intraday data for daily setups: gaps and spikes not captured.</li>
        </ul>
        <h3>Backtest Limitations</h3>
        <ul>
          <li>Survivorship bias: WATCHLIST contains stocks that exist today. Delisted stocks from 2023-2026 are not included.</li>
          <li>Per-stock, not portfolio-level: no correlation, max concurrent positions, or capital allocation modeling.</li>
          <li>No slippage modeling: fills assumed at computed prices.</li>
          <li>Flat fee assumption: 0.15% each way used in portfolio tracking but NOT in backtest P&L.</li>
          <li>No weekly MTF in backtest: setups relying on weekly confirmation may behave differently live.</li>
          <li>3-year window = one IDX cycle: 2023-2026 conditions may not repeat.</li>
        </ul>
        <h3>Statistical Limitations</h3>
        <ul>
          <li>Walk-forward covers 3 years (4 folds). While more robust than a single train/test split, 4 OOS periods is still small.</li>
          <li>Low-N setups remain unvalidated: Flat-Base (2t), 52W-High (3t), CupHandle (4t), Flag (7t) fire too rarely.</li>
          <li>Quality score is ordinal, not predictive. Equal-weighted binary checklist items.</li>
        </ul>
        <h3>What This System Is Good At</h3>
        <ul>
          <li>Systematic scanning of 60+ stocks for actionable setups</li>
          <li>Defined entry/exit levels with position sizing</li>
          <li>Diverse setup detection across market conditions</li>
          <li>Honest quality scoring (not every signal is BUY)</li>
        </ul>
        <h3>What This System Is NOT</h3>
        <ul>
          <li>A high-frequency trading system</li>
          <li>A guaranteed profit machine</li>
          <li>A replacement for fundamental analysis and due diligence</li>
          <li>Tested on a sufficiently long sample to claim statistical robustness</li>
        </ul>
      </div>
    </section>
  );
}

/* ── Chapter map ── */
const chapters: Record<string, React.FC> = {
  philosophy: ChapterPhilosophy,
  setups: ChapterSetups,
  confluence: ChapterConfluence,
  regime: ChapterRegime,
  risk: ChapterRisk,
  trendiness: ChapterTrendiness,
  backtest: ChapterBacktest,
  limitations: ChapterLimitations,
};

/* ═══════════════════════════════════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function DocsPage() {
  const [active, setActive] = useState('philosophy');

  const handleNav = useCallback((id: string) => {
    setActive(id);
    // scroll content area to top on mobile
    const top = document.querySelector('.docs-layout')?.getBoundingClientRect().top;
    if (top === undefined) return;
    window.scrollTo({ top: top + window.scrollY - 70, behavior: 'smooth' });
  }, []);

  const ActiveChapter = chapters[active];

  return (
    <div className="landing">
      <Navbar />
      <div className="landing-container">

        {/* ── Hero ── */}
        <section className="docs-hero">
          <span className="about-eyebrow">Strategy Documentation</span>
          <h1 className="display-text">
            Trading Strategy<br /><span className="accent">Methodology</span>
          </h1>
          <p className="lede">
            Complete documentation of Orion Alpha&apos;s swing setup detectors,
            confluence scoring, market regimes, and walk-forward validated backtest evidence.
          </p>
          <div className="docs-stats">
            <div className="docs-stat"><div className="docs-stat-value"><span className="accent-num">15</span></div><div className="docs-stat-label">Swing Setups</div></div>
            <div className="docs-stat"><div className="docs-stat-value"><span className="accent-num">12</span></div><div className="docs-stat-label">Confluence Points</div></div>
            <div className="docs-stat"><div className="docs-stat-value"><span className="accent-num">4</span></div><div className="docs-stat-label">Market Regimes</div></div>
            <div className="docs-stat"><div className="docs-stat-value"><span className="accent-num">3,240</span></div><div className="docs-stat-label">Trades Audited</div></div>
          </div>
          <p className="docs-version">v2.6 · Engine v9 · Educational purpose only · Not investment advice</p>
        </section>

        {/* ── Mobile TOC (horizontal scroll tabs) ── */}
        <nav className="docs-toc-mobile" aria-label="Table of contents">
          {tocItems.map(t => (
            <button
              key={t.id}
              className={`docs-toc-btn${active === t.id ? ' is-active' : ''}`}
              onClick={() => handleNav(t.id)}
            >
              <span className="toc-num">{t.num}</span> {t.label}
            </button>
          ))}
        </nav>

        {/* ── Layout: Sidebar + Main ── */}
        <div className="docs-layout">

          {/* Sidebar TOC (desktop) */}
          <aside className="docs-sidebar">
            <div className="docs-sidebar-title">Contents</div>
            {tocItems.map(t => (
              <button
                key={t.id}
                className={`docs-sidebar-btn${active === t.id ? ' is-active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                <span className="toc-num">{t.num}</span> {t.label}
              </button>
            ))}
          </aside>

          {/* Main Content — only active chapter renders */}
          <div className="docs-main">
            <div className="doc-chapter-panel" key={active}>
              <ActiveChapter />
            </div>

            {/* Nav prev/next */}
            <div className="doc-nav-footer">
              {tocItems.findIndex(t => t.id === active) > 0 && (
                <button className="doc-nav-btn" onClick={() => setActive(tocItems[tocItems.findIndex(t => t.id === active) - 1].id)}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                  {tocItems[tocItems.findIndex(t => t.id === active) - 1].label}
                </button>
              )}
              <div style={{ flex: 1 }} />
              {tocItems.findIndex(t => t.id === active) < tocItems.length - 1 && (
                <button className="doc-nav-btn" onClick={() => setActive(tocItems[tocItems.findIndex(t => t.id === active) + 1].id)}>
                  {tocItems[tocItems.findIndex(t => t.id === active) + 1].label}
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              )}
            </div>

            {/* Disclaimer */}
            <div className="docs-disclaimer">
              <div className="doc-callout warning">
                <strong>Educational purpose only. Not investment advice. DYOR.</strong><br />
                Walk-forward validation confirms 7/15 setups CONSISTENT across 4 independent OOS periods (1,137 trades, 54.7% WR).
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
