"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PricingPage() {
  useEffect(() => {
    const t = localStorage.getItem('orion-theme');
    if (!t) {
      const defaultTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', defaultTheme);
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }
  }, []);

  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        {/*  ── Hero ──  */}
        <section className="pricing-hero">
          <span className="eyebrow">Pricing</span>
          <h1 className="display-text">Stop paying for noise. <em>Start paying for edge.</em></h1>
          <p className="lede">Less than a cup of coffee per day. More edge than most paid Telegram groups deliver in a year. Start free, upgrade only when you're ready.</p>

          <div className="trust-strip" role="list">
            <span className="pill" role="listitem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Activated in &lt; 10 min
            </span>
            <span className="pill" role="listitem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              QRIS · GoPay · Bank Transfer
            </span>
            <span className="pill" role="listitem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Cancel anytime
            </span>
          </div>
        </section>

        {/*  ── Tier grid ──  */}
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
          <article className="tier-card is-highlight glass-card">
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
            <div className="tier-footnote">Bot will send payment instructions in chat (QRIS, GoPay, or Bank Transfer).</div>
            <div className="card-glow"></div>
          </article>

          {/*  PRO  */}
          <article className="tier-card is-pro glass-card">
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
            <a href="https://t.me/orion_idx_bot?start=upgrade_pro" target="_blank" rel="noopener" className="tier-cta">
              Upgrade to Pro
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <div className="tier-footnote">Upgrading from Starter? The difference is prorated.</div>
            <div className="card-glow"></div>
          </article>
        </section>

        {/*  ── Who Orion is built for ──  */}
        <section className="audience-section fade-up" aria-labelledby="audience-title">
          <div className="section-head">
            <span className="eyebrow">Who Orion is built for</span>
            <h2 id="audience-title" className="display-text">Made for traders <em>who want a system, not noise</em></h2>
            <p className="lede">Whether you're learning your first setup or trading systematically for years, Orion meets you where you are.</p>
          </div>
          <div className="audience-grid">
            <div className="audience-card glass-card">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h4>Beginners who want a real system</h4>
              <p>No more FOMO trades or grup signal roulette. Orion explains every score, every setup, every level — so you learn while the bot does the heavy lifting.</p>
              <div className="card-glow"></div>
            </div>
            <div className="audience-card glass-card">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Working professionals</h4>
              <p>You don't have 3 hours a day to chart manually. Get high-conviction setups in 30 seconds — entry, stop, target — straight from Telegram on your lunch break.</p>
              <div className="card-glow"></div>
            </div>
            <div className="audience-card glass-card">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
              </div>
              <h4>Data-driven retail traders</h4>
              <p>Open methodology. Decomposable scores. Walk-forward backtests. Every signal traceable to its inputs — built for traders who refuse to trust black boxes.</p>
              <div className="card-glow"></div>
            </div>
          </div>
        </section>

        {/*  ── Compare table ──  */}
        <section className="compare-section fade-up" aria-labelledby="compare-title">
          <div className="section-head">
            <span className="eyebrow">Comparison</span>
            <h2 id="compare-title" className="display-text">Every feature, every plan</h2>
            <p className="lede">Data feed &amp; analysis engine are identical across plans. Only access &amp; quotas differ.</p>
          </div>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Free<small>Rp 0</small></th>
                  <th scope="col" className="is-highlight">Starter<small>Rp 49,000 / month</small></th>
                  <th scope="col">Pro<small>Rp 99,000 / month</small></th>
                </tr>
              </thead>
              <tbody>
                <tr className="cat-row"><td colSpan={4}>Signals &amp; Scan</td></tr>
                <tr><td>Daily signals (<code>/signal</code>)</td><td>3/day</td><td>∞</td><td>∞</td></tr>
                <tr><td>Candlestick chart (<code>/chart</code>)</td>
                  <td><span className="cross-icon" aria-label="Not available"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon" aria-label="Available"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon" aria-label="Available"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr><td>Scan all sectors (<code>/scan all</code>)</td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr className="cat-row"><td colSpan={4}>Analysis &amp; Setup</td></tr>
                <tr><td>Swing setup (<code>/swing</code>)</td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr><td>Fundamental (<code>/fa</code>, <code>/fascan</code>)</td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr><td>Position sizing &amp; calculator</td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr className="cat-row"><td colSpan={4}>Automation</td></tr>
                <tr><td>Historical backtest (<code>/backtest</code>)</td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr><td>Auto swing broadcast (15 min)</td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr><td>Personal price alerts (<code>/alert</code>)</td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr><td>Personal watchlist (up to 50)</td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="cross-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr className="cat-row"><td colSpan={4}>Market Context</td></tr>
                <tr><td>Market regime (<code>/regime</code>)</td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
                <tr><td>News feed &amp; education</td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                  <td><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/*  ── FAQ ──  */}
        <section className="faq-section fade-up" aria-labelledby="faq-title">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-title" className="display-text">Frequently asked questions</h2>
          </div>
          <div className="faq-grid">
            <details className="faq-item glass-card">
              <summary>
                <span>I'm a complete beginner. Will I understand the signals?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                Yes. Every signal includes a plain-language verdict (<strong>BUY / NEUTRAL / SELL</strong>), a confidence score (0–100), and clear Entry, Stop Loss, and Take Profit levels. You don't need to know what RSI or MACD means to act on the output — but if you want to learn, <code>/edu</code> covers 30+ topics with a built-in glossary.
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>Can I use Orion with a 9-to-5 job?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                Absolutely — Orion is built for swing trading (multi-day to multi-week holds), not day trading. Check signals once a day, set alerts on your watchlist, and trade during your lunch break. <strong>Pro</strong> plan also auto-broadcasts new setups every 15 min during market hours, so you never miss a high-quality entry.
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>What if I lose money following a signal?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                Trading carries real risk. <strong>Orion shows you the setup — the trade decision is always yours.</strong> Every signal includes a Stop Loss for exactly this reason: when a setup fails, the SL caps your loss. We provide analysis, not guarantees. Past performance never guarantees future results.
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>How is this different from a paid Telegram signal group?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                Most signal groups push opaque "BUY BBCA NOW" messages — you can't verify, can't learn, can't replicate. Orion is the opposite: <strong>every signal is decomposable</strong>. You see which indicators fired, which setup was detected, why the score is what it is. You query (<code>/signal BBCA</code>), the bot responds with full reasoning. No hype. No FOMO. Just data.
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>How do I pay for Starter or Pro?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                Click the <strong>Upgrade</strong> button on your chosen plan — the bot will reply with payment instructions (QRIS, GoPay, or Bank Transfer). Send the payment proof to the owner via bot chat. Activation typically takes under 10 minutes during working hours.
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>Can I cancel anytime?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                Yes. Monthly plans <strong>do not auto-renew</strong>. Simply skip the next payment — access automatically reverts to Free at the end of your billing cycle. No contracts, no penalties.
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>Is there a trial for Pro?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                No formal trial yet. However, Free users active for at least 2 weeks can DM the owner via bot to request a <strong>3-day Pro demo</strong> (backtest, auto-alerts).
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>Why manual payment instead of auto-debit?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                Orion Alpha is a solo-maintained side project. Payment gateway integration (Midtrans/Xendit) is on the roadmap. Manual is simpler for now — no gateway fees, every Rupiah goes back into product improvements.
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>Where does the signal data come from?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                OHLCV from Yahoo Finance (~15 min delay). Signals are generated in real-time on request — 12 technical indicators (RSI, MACD, Bollinger, Supertrend, etc.) + 20 setup detectors. Pure analysis, <strong>not investment advice. DYOR.</strong>
              </div>
              <div className="card-glow"></div>
            </details>
            <details className="faq-item glass-card">
              <summary>
                <span>Can I use this on Discord or the web?</span>
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="faq-body">
                Paid plans are currently active on Telegram only. Discord runs in demo mode (5 popular stocks for technical commands; backtest/FA/scan blocked). The web dashboard (<a href="/showcase">/showcase</a>) also runs in demo mode. Cross-platform tier integration is on the roadmap.
              </div>
              <div className="card-glow"></div>
            </details>
          </div>
        </section>

        {/*  ── Risk transparency block ──  */}
        <section className="risk-block fade-up glass-card" aria-labelledby="risk-title">
          <div className="risk-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div>
            <h3 id="risk-title">A note on risk — read this before you trade.</h3>
            <p>
              Orion Alpha is an <strong>analysis tool</strong>, not a profit machine. We show you what the data says — entry, stop, target, score breakdown. <strong>The trade decision is always yours.</strong> Trading IDX stocks involves real risk, and past performance never guarantees future results. Use position sizing, respect your stop loss, and never invest more than you can afford to lose.
            </p>
            <p style={{marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(245,158,11,0.15)'}}>
              All market data is sourced from Yahoo Finance and delayed ~15 minutes. Orion signals reflect this data — verify current prices before placing any order.
            </p>
          </div>
          <div className="card-glow"></div>
        </section>

        {/*  ── Final CTA ──  */}
        <section className="pricing-final fade-up glass-card">
          <h2 className="display-text">Your edge in IDX is one click away.</h2>
          <p className="lede">Start with Free — 3 signals/day, full market scan, regime read. No credit card. No expiry. Upgrade only when you're ready.</p>
          <div className="btn-row">
            <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="btn btn-telegram btn-shine">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Open Telegram Bot
            </a>
            <a href="/showcase" className="btn btn-secondary">
              Live Showcase
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m9 11 2 2 4-4"/></svg>
            </a>
          </div>
          <div className="card-glow"></div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
