export const FEATURE_MODALS: Record<string, any> = {
  signals: {
    eyebrow: '02 · Technical · scoring',
    title: 'Multi-TF Confluence Scoring',
    intro: 'Twelve indicators aggregated across three timeframes (Daily, Weekly, 4H) into a single 0–100 score. Each indicator contributes ±1 to ±2 points; final label maps to STRONG BUY / BUY / NEUTRAL / SELL / STRONG SELL.',
    sections: [
      { title: 'Indicators evaluated', items: [
        'RSI (14) · MACD histogram · Bollinger %B',
        'ATR (volatility) · ADX + DI (trend strength)',
        'Supertrend · Parabolic SAR',
        'OBV · MFI · CMF (volume / money flow)',
        'Stochastic · Ichimoku Tenkan/Kijun cross'
      ]},
      { title: 'Regime-adaptive weighting', items: [
        'Bull regime: trend-following amplified (Supertrend, Ichimoku)',
        'Sideways regime: mean-reversion amplified (RSI, BB)',
        'Bear regime: defensive bias (avoid early longs, weight reversal carefully)'
      ]},
      { title: 'Output', items: [
        'score (0–100), confluence (0–12), signal label',
        'confluence_breakdown (12 rules with pass/fail)',
        'mtf_data (Daily / Weekly / 4H bull-counts and alignment)',
        'risk_level + risk_factors warnings'
      ]}
    ],
    cta: { label: 'Explore showcase', href: '/showcase' }
  },
  ai: {
    eyebrow: '03 · AI · research',
    title: 'AI Research Assistant',
    intro: 'Tool-augmented LLM that calls live analysis functions (signal, scan, fundamental, news) on demand. Owner-only on Telegram for cost control; Indonesian-language UX.',
    sections: [
      { title: 'Models', items: [
        'Primary: Google Gemini 2.5 Flash (cloud, fast, tool-calling)',
        'Fallback: Qwen 2.5 3B via Ollama (local, offline-capable, private)',
        'Specialised: deterministic narrators for swing alerts and regime briefs'
      ]},
      { title: 'Capabilities', items: [
        'Natural-language stock queries: "BBCA outlook?", "scan banking BUY"',
        'Multi-step research: news → fundamentals → technical synthesis',
        'Portfolio commands via regex fast-path (no LLM cost for structured ops)',
        'Content generation: Telegram channel posts, Threads drafts'
      ]},
      { title: 'Privacy & cost', items: [
        'Owner-only on Telegram (gated by OWNER_TELEGRAM_ID)',
        'Blocked on dashboard (returns 402 with Telegram CTA)',
        'Local fallback runs zero-API-cost when Gemini unavailable'
      ]}
    ],
    cta: { label: 'Try on Telegram', href: 'https://t.me/orion_idx_bot' }
  },
  fundamental: {
    eyebrow: '04 · Fundamental · scoring',
    title: 'Fundamental Analysis (0–100)',
    intro: 'Four-pillar scoring framework spanning valuation, profitability, balance-sheet health, and growth. Graham Number anchors valuation with explicit margin-of-safety.',
    sections: [
      { title: 'Pillar weights', items: [
        'Valuation (P/E, P/B, PEG, EV/EBITDA) — 30%',
        'Profitability (ROE, ROA, Net Margin, Gross Margin) — 30%',
        'Health (D/E, Current Ratio, Quick Ratio) — 20%',
        'Growth (EPS CAGR, Revenue CAGR, Dividend Growth) — 20%'
      ]},
      { title: 'Graham Number', items: [
        '√(22.5 × EPS × Book Value per Share)',
        'Compares fair value vs current price',
        'Margin of Safety = (Graham − Price) / Graham × 100%',
        'MoS ≥ 30% → undervalue zone'
      ]},
      { title: 'Sector-aware', items: [
        'Bank-specific metrics: NIM, NPL/NPF',
        'Property: revenue growth + RevPar trends',
        'Commodity: P/CF + reserve life adjustments'
      ]}
    ],
    cta: { label: 'Try /fa BBCA on Telegram', href: 'https://t.me/orion_idx_bot' }
  },
  backtest: {
    eyebrow: '05 · Backtest · validation',
    title: 'Bar-by-Bar Backtest Engine',
    intro: 'Replay any setup detector across historical OHLCV with realistic execution: 3-phase trailing stops, slippage simulation, walk-forward validation.',
    sections: [
      { title: '3-phase trailing stop', items: [
        'Phase 1 (entry → TP1): SL fixed at original level',
        'Phase 2 (past TP1): SL migrates to entry (break-even)',
        'Phase 3 (past TP2): SL migrates to TP1 (lock partial profit)'
      ]},
      { title: 'Output metrics', items: [
        'Win rate, profit factor, average gain / loss, expectancy',
        'Max drawdown, max winning / losing streaks',
        'Trade-by-trade table with reason logs'
      ]},
      { title: 'Walk-forward validation', items: [
        'Splits history into rolling train / test windows',
        'Re-fits regime weights on train, evaluates on test',
        'Detects strategy decay over time'
      ]}
    ],
    cta: { label: 'Try !backtest on Telegram (Pro)', href: 'https://t.me/orion_idx_bot' }
  },
  alerts: {
    eyebrow: '06 · Alerts · automation',
    title: 'Smart Alerts',
    intro: 'Three alert mechanisms: personal price triggers, auto swing-setup broadcast, and SL/TP proximity warnings. All delivered via Telegram DM.',
    sections: [
      { title: 'Personal price triggers', items: [
        'Format: /alert BBCA >9500 entry plan',
        'Up to 20 alerts per user, persisted in SQLite',
        'Checker runs every 15 min during market hours'
      ]},
      { title: 'Auto swing broadcast', items: [
        'Scans union (default + personal) every 15 min',
        'Filters per user matching their effective watchlist',
        'Includes "Reason" button for AI-narrated explanation'
      ]},
      { title: 'SL/TP proximity (owner)', items: [
        'Watches open portfolio positions',
        'Warns at 80% travel toward SL',
        'Warns at 90% travel toward TP1'
      ]}
    ],
    cta: { label: 'Try /alert on Telegram (Pro)', href: 'https://t.me/orion_idx_bot' }
  },
  portfolio: {
    eyebrow: '07 · Portfolio · tracking',
    title: 'Portfolio Tracking',
    intro: 'SQLite-backed position manager with fee-aware P&L, natural-language commands, and XLSX export. Owner-only.',
    sections: [
      { title: 'Position tracking', items: [
        'Add: buy BBCA 10 lot 9400 sl 9200 tp1 9700',
        'Close: close BBCA at 9700',
        'Backdate: buy BBCA 10 lot 9400 date 2026-04-15'
      ]},
      { title: 'P&L computation', items: [
        'Auto-deducts buy + sell fees (default 0.15%)',
        'Returns both gross and net figures',
        'Equity = capital + realized + floating'
      ]},
      { title: 'Output', items: [
        'Real-time summary with per-position breakdown',
        'Trade history with win-rate, expectancy',
        'XLSX export with formatted headers'
      ]}
    ],
    cta: { label: 'Try /portfolio on Telegram', href: 'https://t.me/orion_idx_bot' }
  },
  news: {
    eyebrow: '08 · News · aggregation',
    title: 'News Aggregation',
    intro: 'RSS-based aggregation from six publishers covering global markets and Indonesia, plus per-stock keyword filtering.',
    sections: [
      { title: 'Sources', items: [
        'Global: Reuters, Investing.com (RSS)',
        'Indonesia: CNBC ID, Bisnis.com, Kontan (RSS)',
        'Per-emiten: yfinance news API + filter'
      ]},
      { title: 'Delivery', items: [
        '/news on Telegram → 5 most recent',
        '/news BBCA → emiten-specific news',
        'News tab on dashboard with filter chips'
      ]}
    ],
    cta: { label: 'Explore showcase', href: '/showcase' }
  },
  charts: {
    eyebrow: '09 · Visualisation · charts',
    title: 'Decision-Ready Charts',
    intro: 'matplotlib-based candle charts annotated with Entry / SL / TP zones, pattern detections, and multi-indicator overlays.',
    sections: [
      { title: 'Layout', items: [
        'Top panel: candles + EMA stack + BB + Supertrend',
        'Middle panel: Volume bars colored by direction',
        'Bottom panel: RSI (14) + MACD histogram',
        'Overlays: Entry zone, SL/TP levels, patterns'
      ]},
      { title: 'Pattern detection', items: [
        'Double Top/Bottom · Head & Shoulders · Cup & Handle',
        'Flag · Pennant · Triangle · Wedge · Channel',
        'Annotated with neckline / breakout / target'
      ]}
    ],
    cta: { label: 'Try /chart on Telegram (Starter)', href: 'https://t.me/orion_idx_bot' }
  }
};
