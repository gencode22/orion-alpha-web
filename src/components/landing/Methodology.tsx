import React from 'react';

export default function Methodology() {
  return (
    <section className="methodology fade-up" id="methodology">
      <div className="section-head">
        <span className="eyebrow">Methodology</span>
        <h2 className="display-text">How every signal is built</h2>
        <p className="lede">Six principles behind every output — written plainly so you understand the logic, not just the result.</p>
      </div>

      <div className="methodology-grid">
        <div className="method-card glass-card">
          <span className="method-eyebrow">01 · Confluence</span>
          <h4>12-indicator weighted vote</h4>
          <p>Each indicator contributes ±1 to ±2 points based on its signal strength. Final aggregate score normalises to 0–100.</p>
          <div className="method-meta">
            <strong>Score bands:</strong> 75+ Strong Buy · 60+ Buy · 45–59 Neutral · &lt;45 Sell
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="method-card glass-card">
          <span className="method-eyebrow">02 · Regime-adaptive weights</span>
          <h4>Bull / Bear / Sideways tilts</h4>
          <p>IHSG regime is detected from EMA stack + ADX. Indicator weights shift accordingly — trend-following is amplified in trending regimes, mean-reversion in sideways.</p>
          <div className="method-meta">
            <strong>Bull:</strong> Supertrend + Ichimoku boosted · <strong>Sideways:</strong> RSI + BB boosted
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="method-card glass-card">
          <span className="method-eyebrow">03 · Multi-timeframe</span>
          <h4>Daily + Weekly + 4H alignment</h4>
          <p>A signal is "aligned" only if all three timeframes agree on direction. Misalignment downgrades the signal label and surfaces a warning.</p>
          <div className="method-meta">
            <strong>Daily</strong> = primary · <strong>Weekly</strong> = trend filter · <strong>4H</strong> = entry timing
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="method-card glass-card">
          <span className="method-eyebrow">04 · Setup quality</span>
          <h4>0–100 quality score per setup</h4>
          <p>Every named setup (VCP, Pullback, Donchian…) computes a quality score from trend profile, trendiness, volume context, and structural integrity.</p>
          <div className="method-meta">
            <strong>≥75</strong> high · <strong>55–74</strong> medium · <strong>&lt;55</strong> low (filtered)
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="method-card glass-card">
          <span className="method-eyebrow">05 · Risk framework</span>
          <h4>ATR-anchored Entry / SL / TP</h4>
          <p>Stops and targets are anchored to recent volatility (ATR), not arbitrary percentages. Position sizing accepts 1–2% portfolio risk per trade with R:R ≥ 1.5 minimum.</p>
          <div className="method-meta">
            <strong>SL</strong> = entry − 1.5×ATR · <strong>TP1</strong> = entry + 2×ATR · <strong>TP2</strong> = entry + 3×ATR
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="method-card glass-card">
          <span className="method-eyebrow">06 · 3-phase trailing</span>
          <h4>Adaptive stop migration</h4>
          <p>As the trade progresses, stops migrate to lock in profit. Backtest engine simulates this exactly.</p>
          <div className="method-meta">
            <strong>Phase 1</strong> entry→TP1: SL fixed<br />
            <strong>Phase 2</strong> TP1→TP2: SL = entry<br />
            <strong>Phase 3</strong> past TP2: SL = TP1
          </div>
          <div className="card-glow"></div>
        </div>
      </div>
    </section>
  );
}
