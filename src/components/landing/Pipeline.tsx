import React from 'react';

export default function Pipeline() {
  return (
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
  );
}
