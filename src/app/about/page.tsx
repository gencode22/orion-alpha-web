"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function AboutPage() {
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
    <>
      <div className="landing">
        <Navbar />

<div className="landing-container">

  {/*  ── Hero ──  */}
  <section className="about-hero">
    <span className="about-eyebrow">About Orion Alpha</span>

    {/*  Orion Constellation SVG  */}
    <div className="constellation-wrap">
      <svg className="constellation-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/*  Constellation lines  */}
        <line className="star-line" x1="80" y1="14" x2="48" y2="40"/>
        <line className="star-line" x1="80" y1="14" x2="112" y2="36"/>
        <line className="star-line" x1="48" y1="40" x2="58" y2="84"/>
        <line className="star-line" x1="112" y1="36" x2="80" y2="88"/>
        <line className="star-line" x1="58" y1="84" x2="80" y2="88"/>
        <line className="star-line" x1="80" y1="88" x2="102" y2="84"/>
        <line className="star-line" x1="58" y1="84" x2="60" y2="136"/>
        <line className="star-line" x1="102" y1="84" x2="110" y2="130"/>
        {/*  Belt highlight  */}
        <line className="star-line" x1="58" y1="84" x2="80" y2="88" style={{opacity: '0.6', strokeWidth: '1.5'}}/>
        <line className="star-line" x1="80" y1="88" x2="102" y2="84" style={{opacity: '0.6', strokeWidth: '1.5'}}/>
        {/*  Stars  */}
        <circle className="star-dot" cx="80" cy="14" r="2.5"/>
        <circle className="star-dot bright" cx="48" cy="40" r="4"/>
        <circle className="star-dot" cx="112" cy="36" r="3"/>
        <circle className="star-dot" cx="58" cy="84" r="2.5"/>
        <circle className="star-dot" cx="80" cy="88" r="2"/>
        <circle className="star-dot" cx="102" cy="84" r="2.5"/>
        <circle className="star-dot" cx="60" cy="136" r="2.5"/>
        <circle className="star-dot bright" cx="110" cy="130" r="4"/>
      </svg>
    </div>

    <h1>A name built<br /><span className="accent">on purpose.</span></h1>
    <p>Every product name carries intent. Here's what ours means — and why it shapes everything we build.</p>
  </section>

  {/*  ── The Name ──  */}
  <div className="name-grid">
    <div className="name-card">
      <div className="name-label">The constellation</div>
      <div className="name-word">Orion</div>
      <div className="name-etymology">The Hunter · Latin / Greek</div>
      <p>Orion is one of the most recognizable constellations — a hunter who doesn't chase every prey. He studies patterns, waits for the right moment, and strikes with precision. Swing trading works exactly the same way. Not every day, not every stock. Just the right setup, at the right time.</p>
    </div>
    <div className="name-card gold-accent">
      <div className="name-label">The edge</div>
      <div className="name-word">Alpha</div>
      <div className="name-etymology">α · Finance / Astronomy</div>
      <p>In finance, alpha is excess return above the benchmark — the measurable edge that separates systematic trading from noise. In astronomy, alpha (α) marks the brightest star in a constellation. We build tools to help traders find their alpha: systematic, decomposable, repeatable.</p>
    </div>
  </div>

  {/*  ── Principles ──  */}
  <section className="principles-section fade-up">
    <div className="section-header">
      <span className="section-eyebrow">How we build</span>
      <h2>Three principles behind every feature</h2>
    </div>
    <div className="principles-grid">
      <div className="principle-card">
        <div className="principle-num">01 ·</div>
        <h3>Systematic over intuition</h3>
        <p>Every signal is computed, not guessed. Indicators, market regime, confluence — all quantified. The same logic runs on every stock, every time. No discretion in the engine.</p>
      </div>
      <div className="principle-card">
        <div className="principle-num">02 ·</div>
        <h3>Risk before reward</h3>
        <p>ATR-anchored stop losses, 3-phase trailing exits, position sizing built-in. The downside is always defined before entry. A good setup with undefined risk is not a setup.</p>
      </div>
      <div className="principle-card">
        <div className="principle-num">03 ·</div>
        <h3>Decomposable decisions</h3>
        <p>Every output shows its work — which setup fired, which indicators agreed, what the checklist says. You can reject any recommendation; you always know exactly why it was made.</p>
      </div>
    </div>
  </section>

  {/*  ── Outcomes — what changes when you use Orion ──  */}
  <section className="outcomes-section fade-up">
    <div className="section-header">
      <span className="section-eyebrow">What changes when you use Orion</span>
      <h2>Three things you'll feel from day one</h2>
    </div>
    <div className="outcomes-grid">
      <div className="outcome-card">
        <div className="outcome-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3>Confidence in every entry</h3>
        <p>No more guessing. Every signal arrives with a 0–100 score, the exact setup detected, and a checklist showing why. You'll know the answer before you ask the question.</p>
      </div>
      <div className="outcome-card">
        <div className="outcome-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h3>Hours of charting back</h3>
        <p>Three hours of manual TA, every day — gone. Orion scans every IDX stock against 20 setups in seconds. You spend time deciding, not searching.</p>
      </div>
      <div className="outcome-card">
        <div className="outcome-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
        </div>
        <h3>A measurable, repeatable edge</h3>
        <p>Walk-forward backtests. ATR-anchored risk. Decomposable scores. The same logic on every trade. Stop trading on vibes — start trading a system.</p>
      </div>
    </div>
  </section>

  {/*  ── Trust strip ──  */}
  <div className="trust-strip-about fade-up" role="list">
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

  {/*  ── CTA ──  */}
  <section className="about-cta fade-up">
    <h2>Hunt smarter. Start free.</h2>
    <p>Like Orion the hunter — wait for the right setup, strike with precision. Your first analysis is one command away.</p>
    <div className="cta-buttons">
      <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener" className="btn btn-telegram">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        Open Telegram Bot
      </a>
      <a href="/pricing" className="btn btn-secondary">See Pricing →</a>
    </div>
  </section>

  {/*  ── Footer ──  */}
    <Footer />

</div>




</div>
    </>
  );
}
