"use client";

import React from "react";
import Image from "next/image";
import "@/styles/backtest.css";

/* ─────────────────────────────────────────────────────────────────────────
   Case 1 — MAPI auto-broadcast
   ───────────────────────────────────────────────────────────────────────── */

function MapiCase() {
  return (
    <div className="bt-sample-case">
      <div className="bt-sample-case-header">
        <span className="bt-sample-case-num">Case 1</span>
        <span className="bt-sample-case-mode">Auto-broadcast · 08 May 09:00 WIB · MAPI</span>
        <span className="bt-sample-case-result is-green">→ Same-session TP1 hit +12.36%</span>
      </div>

      <div className="bt-sample-grid">
        {/* Telegram alert bubble */}
        <div className="bt-sample-side">
          <div className="bt-sample-side-label">
            <span className="bt-sample-side-tag">Alert · 09:00 WIB</span>
            <span className="bt-sample-side-source">Telegram</span>
          </div>
          <div className="bt-tg-bubble">
            <div className="bt-tg-header">
              <span className="bt-tg-bell" aria-hidden="true">🔔</span>
              <strong>Swing Alert — MAPI</strong>
            </div>
            <div className="bt-tg-date">08 May 2026 09:00 WIB</div>
            <div className="bt-tg-setup">
              <span aria-hidden="true">🟢</span>
              <strong>Pullback-Uptrend</strong>
              <span className="bt-tg-pipe">|</span>
              <span>Quality: <strong>65/100</strong></span>
            </div>
            <div className="bt-tg-price">
              <span aria-hidden="true">💰</span>
              Harga: <strong>Rp 1.295</strong>
            </div>
            <ul className="bt-tg-levels">
              <li>
                <span aria-hidden="true">🎯</span>
                Entry: <strong>Rp 1.295</strong>
              </li>
              <li>
                <span aria-hidden="true">🛑</span>
                SL: <strong>Rp 1.217</strong>
                <span className="bt-tg-pct neg">(-6.02%)</span>
              </li>
              <li>
                <span aria-hidden="true">✅</span>
                TP1: <strong>Rp 1.451</strong>
                <span className="bt-tg-pct pos">(+12.0%)</span>
              </li>
              <li>
                <span aria-hidden="true">⚖️</span>
                R:R <strong>1:2.0</strong>
              </li>
              <li>
                <span aria-hidden="true">⏱</span>
                Holding: <strong>8–25 hari</strong>
              </li>
            </ul>
            <div className="bt-tg-disclaimer">
              <span aria-hidden="true">⚠️</span>
              <em>Bukan rekomendasi investasi. DYOR. Gunakan <span className="bt-tg-cmd">/swing</span> untuk analisis lengkap.</em>
            </div>
            <div className="bt-tg-buttons" aria-hidden="true">
              <span className="bt-tg-btn">🤔 Reason</span>
              <span className="bt-tg-btn">📊 Swing</span>
            </div>
          </div>
        </div>

        {/* Bridge */}
        <div className="bt-sample-bridge" aria-hidden="true">
          <svg className="bt-sample-arrow" viewBox="0 0 80 24" fill="none">
            <path d="M4 12 L72 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M64 6 L74 12 L64 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <div className="bt-sample-bridge-text">
            <strong className="bt-sample-result">TP1 hit</strong>
            <span className="bt-sample-result-pct">+12.36%</span>
            <span className="bt-sample-result-when">same session</span>
          </div>
        </div>

        {/* Stockbit MAPI (centered vertically vs the tall signal bubble) */}
        <div className="bt-sample-side bt-sample-side--result">
          <div className="bt-sample-side-label">
            <span className="bt-sample-side-tag">Result · close 08 May</span>
            <span className="bt-sample-side-source">Stockbit</span>
          </div>
          <div className="bt-stockbit-frame">
            <Image
              src="/backtest/mapi-stockbit-20260508.jpg"
              alt="Stockbit chart of MAPI on 08 May 2026 — intraday low 1,295 climbing to 1,455 (+12.36%)"
              width={980}
              height={970}
              className="bt-stockbit-image"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="bt-sample-timeline">
        <div className="bt-sample-step">
          <span className="bt-sample-step-time">09:00 WIB</span>
          <span className="bt-sample-step-event">Engine fires Pullback-Uptrend signal at <strong>Rp 1.295</strong>.</span>
        </div>
        <div className="bt-sample-step">
          <span className="bt-sample-step-time">Intraday</span>
          <span className="bt-sample-step-event">MAPI climbs to session high <strong>Rp 1.455</strong> — TP1 (<strong>Rp 1.451</strong>) breached.</span>
        </div>
        <div className="bt-sample-step">
          <span className="bt-sample-step-time">EOD 08 May</span>
          <span className="bt-sample-step-event">Close <strong>Rp 1.455</strong> · session return <strong className="bt-num-pos-inline">+12.36%</strong> vs alert entry. R:R 1:2 target achieved on Day 1.</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Case 2 — MINA manual /signal
   ───────────────────────────────────────────────────────────────────────── */

function MinaCase() {
  return (
    <div className="bt-sample-case">
      <div className="bt-sample-case-header">
        <span className="bt-sample-case-num">Case 2</span>
        <span className="bt-sample-case-mode">Manual /signal · 08 May 13:23 WIB · MINA</span>
        <span className="bt-sample-case-result is-green">→ TP1 breached on Day 3 · high Rp 390</span>
      </div>

      <div className="bt-sample-grid">
        {/* Full-TA /signal bubble */}
        <div className="bt-sample-side">
          <div className="bt-sample-side-label">
            <span className="bt-sample-side-tag">/signal · 13:23 WIB</span>
            <span className="bt-sample-side-source">Telegram</span>
          </div>
          <div className="bt-tg-user-msg" aria-hidden="true">/signal MINA</div>
          <div className="bt-tg-bubble bt-tg-bubble-ta">
            <div className="bt-tg-ta-header">
              <span aria-hidden="true">🟢</span>
              <strong>MINA</strong>
              <span className="bt-tg-pipe">—</span>
              <strong className="bt-tg-strong-buy">STRONG BUY</strong>
            </div>
            <div className="bt-tg-ta-price">
              <span aria-hidden="true">💰</span>
              Rp <strong>342</strong>
              <span className="bt-tg-pct neg" style={{ marginLeft: 6 }}>📉 -14.93%</span>
            </div>
            <div className="bt-tg-ta-score">
              <span aria-hidden="true">📊</span>
              <strong>79.0/100</strong>
              <span className="bt-tg-dots" aria-hidden="true">●●●●○</span>
              <span className="bt-tg-pipe">·</span>
              <em>Sangat Kuat</em>
              <span className="bt-tg-pipe">·</span>
              <span>9/12 konfluensi</span>
            </div>

            <hr className="bt-tg-divider" />

            <div className="bt-tg-ta-row">
              <strong className="bt-tg-ta-label">Trend</strong>
              <span className="bt-tg-badge ok">✅ EMA200</span>
              <span className="bt-tg-badge ok">✅ EMA50</span>
              <span className="bt-tg-badge ok">✅ Supertrend</span>
            </div>
            <div className="bt-tg-ta-row">
              <strong className="bt-tg-ta-label">Momentum</strong>
              <span>RSI <strong>51.6</strong></span>
              <span className="bt-tg-pipe">·</span>
              <span>MACD <span style={{ color: '#4ec57f' }}>✅</span></span>
              <span className="bt-tg-pipe">·</span>
              <span>Vol <strong>1.6x</strong></span>
            </div>
            <div className="bt-tg-ta-row">
              <strong className="bt-tg-ta-label">Multi-TF</strong>
              <span>D <span style={{ color: '#4ec57f' }}>✅</span></span>
              <span className="bt-tg-pipe">·</span>
              <span>W <span aria-hidden="true">🟢</span></span>
              <span className="bt-tg-pipe">·</span>
              <span>4H <span aria-hidden="true">🔴</span></span>
              <span className="bt-tg-pipe">·</span>
              <span aria-hidden="true">⚠️</span>
              <em>mixed</em>
            </div>

            <hr className="bt-tg-divider" />

            <div className="bt-tg-ta-section-h">
              <span aria-hidden="true">🎯</span>
              <strong>Level Trading</strong>
            </div>
            <ul className="bt-tg-levels">
              <li>
                <span aria-hidden="true">🔵</span>
                Entry <strong>Rp 342</strong>
              </li>
              <li>
                <span aria-hidden="true">✅</span>
                TP1 <strong>Rp 384</strong>
                <span className="bt-tg-pct pos">(+12.28%)</span>
              </li>
              <li>
                <span aria-hidden="true">✅</span>
                TP2 <strong>Rp 448</strong>
                <span className="bt-tg-pct pos">(+30.99%)</span>
              </li>
              <li>
                <span aria-hidden="true">🛑</span>
                SL <strong>Rp 321</strong>
                <span className="bt-tg-pct neg">(-6.14%)</span>
              </li>
              <li>
                <span aria-hidden="true">⚖️</span>
                R:R <strong>1:2.0</strong>
              </li>
            </ul>

            <hr className="bt-tg-divider" />

            <div className="bt-tg-ta-setup">
              <span aria-hidden="true">⚡</span>
              <strong>Golden Cross Fresh</strong>
              <span aria-hidden="true">🟢</span>
              <strong>87/100</strong>
              <span className="bt-tg-pipe">(Tinggi)</span>
              <span className="bt-tg-pipe">·</span>
              <span>12–37 hari</span>
            </div>

            <div className="bt-tg-ta-warning">
              <span aria-hidden="true">⚠️</span>
              <em>Volatilitas tinggi (ATR/price 9.5%) — perlebar SL, perkecil size</em>
            </div>
            <div className="bt-tg-ta-warning">
              <span aria-hidden="true">⚠️⚠️</span>
              <em>Counter-trend: IHSG dalam Bear Market</em>
            </div>

            <div className="bt-tg-disclaimer bt-tg-disclaimer-ta">
              <em>Bukan rekomendasi investasi. DYOR.</em>
            </div>
          </div>
        </div>

        {/* Bridge */}
        <div className="bt-sample-bridge" aria-hidden="true">
          <svg className="bt-sample-arrow" viewBox="0 0 80 24" fill="none">
            <path d="M4 12 L72 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M64 6 L74 12 L64 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <div className="bt-sample-bridge-text">
            <strong className="bt-sample-result">TP1 breach</strong>
            <span className="bt-sample-result-pct">Day 3</span>
            <span className="bt-sample-result-when">high Rp 390</span>
          </div>
        </div>

        {/* Stockbit MINA (centered vertically vs the tall TA bubble) */}
        <div className="bt-sample-side bt-sample-side--result">
          <div className="bt-sample-side-label">
            <span className="bt-sample-side-tag">Result · 11 May</span>
            <span className="bt-sample-side-source">Stockbit</span>
          </div>
          <div className="bt-stockbit-frame">
            <Image
              src="/backtest/mina-stockbit-20260511.jpg"
              alt="Stockbit chart of MINA on 11 May 2026 — intraday low 342 climbing to high 390, closing 380 (+11.11%)"
              width={974}
              height={978}
              className="bt-stockbit-image"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="bt-sample-timeline">
        <div className="bt-sample-step">
          <span className="bt-sample-step-time">08 May 13:23</span>
          <span className="bt-sample-step-event">User types <code>/signal MINA</code>. Engine returns <strong>STRONG BUY</strong> at <strong>Rp 342</strong>, confluence <strong>79/100</strong>, setup <em>Golden Cross Fresh</em> Q87 — flagged with high-volatility + counter-trend warnings.</span>
        </div>
        <div className="bt-sample-step">
          <span className="bt-sample-step-time">11 May</span>
          <span className="bt-sample-step-event">MINA reaches intraday high <strong>Rp 390</strong> — TP1 (<strong>Rp 384</strong>) breached by 6 points. Heading toward TP2 (<strong>Rp 448</strong>).</span>
        </div>
        <div className="bt-sample-step">
          <span className="bt-sample-step-time">Day 3 close</span>
          <span className="bt-sample-step-event">Close <strong>Rp 380</strong> · day return <strong className="bt-num-pos-inline">+11.11%</strong>, ~<strong className="bt-num-pos-inline">+11%</strong> on signal entry. TP1 achieved in 3 trading days vs forecast 12–37.</span>
        </div>
      </div>
    </div>
  );
}

const CAPTION = (
  <>
    Two signals, two delivery modes — same engine, same Entry/SL/TP discipline.
    Notice the MINA query also surfaced two honest risk warnings <em>before</em> the
    trade: high volatility (ATR 9.5%) and counter-trend (IHSG Bear). The engine
    labels risk transparently, before you click buy.
  </>
);

/* ─────────────────────────────────────────────────────────────────────────
   Public component — variant decides layout
   ───────────────────────────────────────────────────────────────────────── */

export function SampleSignals({ variant = "full" }: { variant?: "home" | "full" }) {
  if (variant === "home") {
    return (
      <div className="bt-sample">
        <MapiCase />
        <details className="bt-faq-card bt-sample-2nd">
          <summary>
            <span className="bt-faq-q">
              Show 2nd case — manual <code>/signal</code> query · MINA · TP1 breached Day 3
            </span>
            <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </summary>
          <div className="bt-faq-a bt-sample-2nd-body">
            <MinaCase />
          </div>
        </details>
        <p className="bt-sample-caption">{CAPTION}</p>
      </div>
    );
  }

  return (
    <div className="bt-sample">
      <MapiCase />
      <MinaCase />
      <p className="bt-sample-caption">{CAPTION}</p>
    </div>
  );
}
