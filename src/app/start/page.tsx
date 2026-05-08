"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function StartPage() {


  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    const toast = document.getElementById('copy-toast');
    if (toast) {
      toast.classList.add('is-visible');
      setTimeout(() => toast.classList.remove('is-visible'), 2000);
    }
  };

  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        {/*  ── Hero ──  */}
        <section className="start-hero">
          <div className="free-badge">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            Free · No signup · No credit card
          </div>
          <h1>Your first signal is<br /><span className="accent">60 seconds away.</span></h1>
          <p>Orion runs on Telegram — no app to install, no account to create. Open the bot, send one command, and get a full swing analysis on any IDX stock.</p>
        </section>

        {/*  ── Stat strip ──  */}
        <div className="stat-strip fade-up" role="list">
          <div className="stat-cell" role="listitem">
            <div className="stat-val"><span className="accent">All</span> IDX stocks</div>
            <div className="stat-lbl">Coverage</div>
          </div>
          <div className="stat-cell" role="listitem">
            <div className="stat-val"><span className="accent">20</span> swing setups</div>
            <div className="stat-lbl">Detectors</div>
          </div>
          <div className="stat-cell" role="listitem">
            <div className="stat-val">Walk-forward <span className="accent">A</span></div>
            <div className="stat-lbl">Robustness</div>
          </div>
          <div className="stat-cell" role="listitem">
            <div className="stat-val"><span className="accent">&lt; 60s</span> to start</div>
            <div className="stat-lbl">Onboarding</div>
          </div>
        </div>

        {/*  ── Who is this for ──  */}
        <section className="audience-section fade-up">
          <h2>Built for traders <span className="accent">who want a system</span></h2>
          <p className="audience-sub">Whether you're new to swing trading or systematic for years — Orion meets you where you are.</p>

          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h4>Beginners who want a real system</h4>
              <p>No more FOMO trades. Every signal explains itself — score, setup, levels — so you learn while the bot does the heavy lifting.</p>
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

        {/*  ── 3 Steps ──  */}
        <div className="steps fade-up">
          <div className="step-card">
            <div className="step-num-wrap">
              <div className="step-num">1</div>
              <div className="step-connector"></div>
            </div>
            <div className="step-body">
              <h3>Open Telegram and find the bot</h3>
              <p>Search for <strong>@orion_idx_bot</strong> in Telegram, or tap the button below. Works on any device — mobile or desktop.</p>
              <div className="step-code" onClick={() => copyToClipboard('@orion_idx_bot')} title="Tap to copy">
                @orion_idx_bot
                <svg className="copy-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </div>
              <span className="copy-hint">Tap to copy username</span>
            </div>
          </div>

          <div className="step-card">
            <div className="step-num-wrap">
              <div className="step-num">2</div>
              <div className="step-connector"></div>
            </div>
            <div className="step-body">
              <h3>Tap Start</h3>
              <p>Hit the <strong>Start</strong> button or send <code style={{fontFamily: '"Fira Code",monospace', color: 'var(--yellow)', fontSize: '13px'}}>/start</code>. You'll get a welcome message with all available commands and tier info.</p>
              <div className="step-img">
                <div className="mock-msg">
                  <span className="cmd">Orion Alpha</span><br />
                  Hello! Welcome to Orion Alpha.<br />
                  Type <span className="cmd">/help</span> for a complete list of commands.<br />
                  Start with <span className="cmd">/signal BBCA</span> for technical analysis.
                </div>
              </div>
            </div>
          </div>

          <div className="step-card">
            <div className="step-num-wrap">
              <div className="step-num">3</div>
            </div>
            <div className="step-body">
              <h3>Run your first analysis</h3>
              <p>Try any of these commands to get started:</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <div className="step-code" onClick={() => copyToClipboard('/signal BBCA')} title="Tap to copy">
                  /signal BBCA
                  <svg className="copy-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </div>
                <div className="step-code" onClick={() => copyToClipboard('/regime')} title="Tap to copy">
                  /regime
                  <svg className="copy-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </div>
                <div className="step-code" onClick={() => copyToClipboard('/scan')} title="Tap to copy">
                  /scan
                  <svg className="copy-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </div>
              </div>
              <span className="copy-hint">Tap any command to copy, then paste in Telegram</span>
            </div>
          </div>
        </div>

        {/*  ── Quick commands ──  */}
        <section className="commands-section fade-up">
          <span className="section-eyebrow">Quick Reference</span>
          <h2>Starter commands to try</h2>
          <div className="cmd-grid">
            <div className="cmd-card">
              <div className="cmd-name">/signal KODE <span className="cmd-tier free">Free</span></div>
              <div className="cmd-desc">Full technical analysis — RSI, MACD, EMA stack, confluence score, Entry/SL/TP</div>
            </div>
            <div className="cmd-card">
              <div className="cmd-name">/regime <span className="cmd-tier free">Free</span></div>
              <div className="cmd-desc">Current IHSG market regime — Bull / Bear / Sideways + TA summary</div>
            </div>
            <div className="cmd-card">
              <div className="cmd-name">/scan <span className="cmd-tier free">Free</span></div>
              <div className="cmd-desc">Scan all watchlist stocks for top signals — filter by sector</div>
            </div>
            <div className="cmd-card">
              <div className="cmd-name">/swing KODE <span className="cmd-tier starter">Starter</span></div>
              <div className="cmd-desc">Detect swing setup — Pullback, Breakout, VCP, EMA200 Bounce + quality score</div>
            </div>
            <div className="cmd-card">
              <div className="cmd-name">/fa KODE <span className="cmd-tier starter">Starter</span></div>
              <div className="cmd-desc">Fundamental score 0–100 — P/E, P/B, ROE, Graham Number, margin of safety</div>
            </div>
            <div className="cmd-card">
              <div className="cmd-name">/backtest KODE <span className="cmd-tier pro">Pro</span></div>
              <div className="cmd-desc">Historical simulation — win rate, profit factor, equity curve, per-trade log</div>
            </div>
          </div>
        </section>

        {/*  ── Free tier callout ──  */}
        <div className="free-callout fade-up">
          <h3>What's included in Free — forever</h3>
          <ul className="free-list">
            <li><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> 3 signals per day</li>
            <li><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> /regime market conditions</li>
            <li><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> /scan sector watchlist</li>
            <li><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> /price & /ihsg real-time</li>
            <li><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> /news global & IDX</li>
            <li><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> /edu 30 trading topics</li>
          </ul>
        </div>

        {/*  ── Final CTA ──  */}
        <section className="start-cta fade-up">
          <h2>Stop watching. Start catching.</h2>
          <p>The next high-conviction setup is one command away. Free, forever, no credit card.</p>
          <div className="cta-buttons">
            <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="btn btn-telegram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Open Telegram Bot
            </a>
            <a href="/pricing" className="btn btn-secondary">See Pricing →</a>
          </div>
        </section>

        <Footer />
      </div>

      <div className="copy-toast" id="copy-toast">Copied to clipboard</div>
    </div>
  );
}
