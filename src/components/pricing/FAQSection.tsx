import React from 'react';
import Link from 'next/link';

export default function FAQSection() {
  return (
    <section className="faq-section fade-up" aria-labelledby="faq-title">
      <div className="section-head">
        <span className="eyebrow">FAQ</span>
        <h2 id="faq-title">Frequently asked questions</h2>
      </div>

      <div className="faq-grid">
        <details className="faq-item">
          <summary>
            <span>I'm a complete beginner. Will I understand the signals?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            Yes. Every signal includes a plain-language verdict (<strong>BUY / NEUTRAL / SELL</strong>), a confidence score (0–100), and clear Entry, Stop Loss, and Take Profit levels. You don't need to know what RSI or MACD means to act on the output — but if you want to learn, <code>/edu</code> covers 30+ topics with a built-in glossary.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>Can I use Orion with a 9-to-5 job?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            Absolutely — Orion is built for swing trading (multi-day to multi-week holds), not day trading. Check signals once a day, set alerts on your watchlist, and trade during your lunch break. <strong>Pro</strong> plan also auto-broadcasts new setups every 15 min during market hours, so you never miss a high-quality entry.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>What if I lose money following a signal?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            Trading carries real risk. <strong>Orion shows you the setup — the trade decision is always yours.</strong> Every signal includes a Stop Loss for exactly this reason: when a setup fails, the SL caps your loss. We provide analysis, not guarantees. Past performance never guarantees future results.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>How is this different from a paid Telegram signal group?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            Most signal groups push opaque "BUY BBCA NOW" messages — you can't verify, can't learn, can't replicate. Orion is the opposite: <strong>every signal is decomposable</strong>. You see which indicators fired, which setup was detected, why the score is what it is. You query (<code>/signal BBCA</code>), the bot responds with full reasoning. No hype. No FOMO. Just data.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>How do I pay for Starter or Pro?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            Click the <strong>Upgrade</strong> button on your chosen plan — the bot will reply with payment instructions (QRIS, GoPay, or Bank Transfer). Send the payment proof to the owner via bot chat. Activation typically takes under 10 minutes during working hours.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>Can I cancel anytime?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            Yes. Monthly plans <strong>do not auto-renew</strong>. Simply skip the next payment — access automatically reverts to Free at the end of your billing cycle. No contracts, no penalties.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>Is there a trial for Pro?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            No formal trial yet. However, Free users active for at least 2 weeks can DM the owner via bot to request a <strong>3-day Pro demo</strong> (backtest, auto-alerts).
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>Why manual payment instead of auto-debit?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            Orion Alpha is a solo-maintained side project. Payment gateway integration (Midtrans/Xendit) is on the roadmap. Manual is simpler for now — no gateway fees, every Rupiah goes back into product improvements.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>Where does the signal data come from?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            OHLCV from Yahoo Finance (~15 min delay). Signals are generated in real-time on request — 12 technical indicators (RSI, MACD, Bollinger, Supertrend, etc.) + 20 setup detectors. Pure analysis, <strong>not investment advice. DYOR.</strong>
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span>Can I use this on Discord or the web?</span>
            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <div className="faq-body">
            Paid plans are currently active on Telegram only. Discord runs in demo mode (5 popular stocks for technical commands; backtest/FA/scan blocked). The web dashboard (<Link href="/showcase">/showcase</Link>) also runs in demo mode. Cross-platform tier integration is on the roadmap.
          </div>
        </details>
      </div>
    </section>
  );
}
