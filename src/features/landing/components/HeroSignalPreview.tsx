"use client";

import { useEffect, useState } from "react";

type Signal = {
  ticker: string;
  setup: string;
  q: number;
  entry: string;
  sl: string;
  slPct: string;
  tp1: string;
  tp1Pct: string;
  rr: string;
  time: string;
};

const SIGNALS: Signal[] = [
  {
    ticker: "TLKM",
    setup: "Pullback-Uptrend",
    q: 72,
    entry: "Rp 3.150",
    sl: "Rp 2.961",
    slPct: "−6.0%",
    tp1: "Rp 3.535",
    tp1Pct: "+12.2%",
    rr: "1 : 2.0",
    time: "08 May · 09:00 WIB",
  },
  {
    ticker: "BBCA",
    setup: "Breakout-Range",
    q: 68,
    entry: "Rp 9.825",
    sl: "Rp 9.235",
    slPct: "−6.0%",
    tp1: "Rp 11.005",
    tp1Pct: "+12.0%",
    rr: "1 : 2.0",
    time: "06 May · 13:35 WIB",
  },
  {
    ticker: "ASII",
    setup: "Reversal-Bullish",
    q: 71,
    entry: "Rp 4.840",
    sl: "Rp 4.550",
    slPct: "−6.0%",
    tp1: "Rp 5.420",
    tp1Pct: "+12.0%",
    rr: "1 : 2.0",
    time: "05 May · 09:00 WIB",
  },
  {
    ticker: "MAPI",
    setup: "Golden Cross",
    q: 76,
    entry: "Rp 1.295",
    sl: "Rp 1.217",
    slPct: "−6.0%",
    tp1: "Rp 1.451",
    tp1Pct: "+12.0%",
    rr: "1 : 2.0",
    time: "08 May · 09:00 WIB",
  },
];

const CIRCUMFERENCE = 87.96; // 2 × π × 14

function QRing({ q }: { q: number }) {
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOffset(CIRCUMFERENCE * (1 - q / 100));
    });
    return () => cancelAnimationFrame(id);
  }, [q]);

  return (
    <svg className="hero-preview-q-ring" viewBox="0 0 36 36" aria-hidden="true">
      <circle className="hero-preview-q-ring-track" cx="18" cy="18" r="14" />
      <circle
        className="hero-preview-q-ring-fill"
        cx="18"
        cy="18"
        r="14"
        style={{ strokeDashoffset: offset }}
      />
    </svg>
  );
}

export default function HeroSignalPreview() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SIGNALS.length);
    }, 9000);
    return () => clearInterval(id);
  }, [paused]);

  const sig = SIGNALS[index];

  return (
    <aside
      className="hero-preview"
      data-cascade="4"
      aria-label="Example signal alert"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-preview-card">
        <div className="hero-preview-header">
          <span className="hero-preview-pulse" aria-hidden="true"></span>
          <span className="hero-preview-tag">Sample alert · Telegram</span>
        </div>

        <div className="hero-preview-content" key={index}>
          <div className="hero-preview-ticker">{sig.ticker}</div>
          <div className="hero-preview-meta">
            <div className="hero-preview-setup">
              <span className="hero-preview-dot" aria-hidden="true">●</span>
              {sig.setup}
            </div>
            <div
              className="hero-preview-q"
              aria-label={`Quality score ${sig.q} out of 100`}
            >
              <QRing q={sig.q} />
              <span className="hero-preview-q-num">{sig.q}</span>
            </div>
          </div>
          <div
            className="hero-preview-levels"
            role="group"
            aria-label="Trade levels"
          >
            <div className="hero-preview-row">
              <span className="hero-preview-label">Entry</span>
              <span className="hero-preview-val">{sig.entry}</span>
              <span className="hero-preview-pct" aria-hidden="true"></span>
            </div>
            <div className="hero-preview-row is-sl">
              <span className="hero-preview-label">SL</span>
              <span className="hero-preview-val">{sig.sl}</span>
              <span className="hero-preview-pct neg">{sig.slPct}</span>
            </div>
            <div className="hero-preview-row is-tp">
              <span className="hero-preview-label">TP1</span>
              <span className="hero-preview-val">{sig.tp1}</span>
              <span className="hero-preview-pct pos">{sig.tp1Pct}</span>
            </div>
            <div className="hero-preview-row">
              <span className="hero-preview-label">R:R</span>
              <span className="hero-preview-val">{sig.rr}</span>
              <span className="hero-preview-pct" aria-hidden="true"></span>
            </div>
          </div>
          <div className="hero-preview-footnote">
            Auto-broadcast · {sig.time}
          </div>
        </div>
      </div>
    </aside>
  );
}
