const TICKER_ITEMS = [
  { ticker: "TLKM", setup: "Pullback-Uptrend", q: 72 },
  { ticker: "BBCA", setup: "Breakout", q: 68 },
  { ticker: "ASII", setup: "Reversal-Bullish", q: 71 },
  { ticker: "BMRI", setup: "Pullback-Uptrend", q: 69 },
  { ticker: "MAPI", setup: "Golden Cross", q: 76 },
  { ticker: "MINA", setup: "Strong Buy", q: 79 },
  { ticker: "GOTO", setup: "Range-High", q: 65 },
  { ticker: "INDF", setup: "Trend Continuation", q: 73 },
  { ticker: "SMGR", setup: "Bollinger-Compression", q: 66 },
  { ticker: "PGAS", setup: "Volume Surge", q: 70 },
];

export default function SignalTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="signal-ticker fade-up" aria-label="Recent signals">
      <div className="signal-ticker-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="signal-ticker-item">
            <span className="signal-ticker-dot" />
            <strong>{item.ticker}</strong>
            <span className="signal-ticker-sep">·</span>
            {item.setup}
            <span className="signal-ticker-sep">·</span>
            <span className="signal-ticker-q">Q{item.q}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
