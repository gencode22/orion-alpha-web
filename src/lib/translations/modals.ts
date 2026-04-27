export const modalTranslations: Record<'en' | 'id', any> = {
  en: {
    setups: {
      eyebrow: '01 · Signal · setups',
      title: '20+ Swing Setup Detectors',
      intro: 'Proprietary pattern recognition engine scanning the entire IDX market every 15 minutes. From classic VCP to volatility-anchored breakouts.',
      sections: [
        { title: 'Detectors', items: ['VCP (Volatility Contraction Pattern)', 'Bull Flag & Pennant', 'Pocket Pivot (Volume Signature)', 'Donchian Channel Breakouts', 'RS (Relative Strength) New Highs'] },
        { title: 'Filtration', items: ['Market regime filter (Bull/Bear check)', 'Relative strength vs IHSG index', 'Volume signature validation', 'Sector-group momentum'] }
      ],
      cta: 'Explore showcase'
    },
    confluence: {
      eyebrow: '02 · Technical · scoring',
      title: 'Multi-TF Confluence Scoring',
      intro: 'Twelve indicators aggregated across three timeframes (Daily, Weekly, 4H) into a single 0–100 score. Each indicator contributes ±1 to ±2 points.',
      sections: [
        { title: 'Indicators evaluated', items: ['RSI (14) · MACD histogram', 'ATR (volatility) · ADX + DI', 'Supertrend · Parabolic SAR', 'OBV · MFI · CMF (Volume)'] },
        { title: 'Output', items: ['Score (0–100), Signal Label', '12-rule breakdown (Pass/Fail)', 'MTF Alignment data', 'Risk level warning'] }
      ],
      cta: 'Explore showcase'
    },
    ai: {
      eyebrow: '03 · AI · research',
      title: 'AI Research Assistant',
      intro: 'Tool-augmented LLM that calls live analysis functions (signal, scan, fundamental, news) on demand via Telegram.',
      sections: [
        { title: 'Models', items: ['Primary: Google Gemini 2.5 Flash', 'Fallback: Qwen 2.5 3B (local)', 'Specialised narrators for alerts'] },
        { title: 'Capabilities', items: ['Natural-language queries: "BBCA outlook?"', 'Scan commands: "scan banking BUY"', 'Portfolio commands via fast-path'] }
      ],
      cta: 'Try on Telegram'
    },
    fundamental: {
      eyebrow: '04 · Fundamental · scoring',
      title: 'Fundamental Analysis (0–100)',
      intro: 'Four-pillar scoring framework spanning valuation, profitability, balance-sheet health, and growth.',
      sections: [
        { title: 'Pillar weights', items: ['Valuation (P/E, P/B, PEG) — 30%', 'Profitability (ROE, ROA) — 30%', 'Health (D/E, Ratios) — 20%', 'Growth (EPS, Revenue) — 20%'] },
        { title: 'Graham Number', items: ['√(22.5 × EPS × BVPS)', 'Fair value vs current price', 'Margin of Safety check'] }
      ],
      cta: 'Try /fa on Telegram'
    },
    backtest: {
      eyebrow: '05 · Backtest · validation',
      title: 'Bar-by-Bar Backtest Engine',
      intro: 'Replay any setup detector across historical OHLCV with realistic execution and 3-phase trailing stops.',
      sections: [
        { title: 'Trailing stop logic', items: ['Phase 1: Fixed at original level', 'Phase 2: Migrates to entry (BE)', 'Phase 3: Migrates to TP1 (Lock)'] },
        { title: 'Metrics', items: ['Win rate, Profit Factor, Expectancy', 'Max Drawdown, Win/Loss streaks', 'Trade reason logs'] }
      ],
      cta: 'Try !backtest (Pro)'
    },
    alerts: {
      eyebrow: '06 · Alerts · automation',
      title: 'Smart Alerts',
      intro: 'Three alert mechanisms: personal price triggers, auto swing-setup broadcast, and SL/TP proximity warnings.',
      sections: [
        { title: 'Price triggers', items: ['Format: /alert BBCA >9500', 'Up to 20 alerts per user', 'Checker runs every 15 min'] },
        { title: 'Auto broadcast', items: ['Scans 15 min intervals', 'Filters by personal watchlist', 'AI-narrated explanations'] }
      ],
      cta: 'Try /alert (Pro)'
    },
    portfolio: {
      eyebrow: '07 · Portfolio · tracking',
      title: 'Portfolio Tracking',
      intro: 'SQLite-backed position manager with fee-aware P&L, natural-language commands, and XLSX export.',
      sections: [
        { title: 'Commands', items: ['Buy/Close/Backdate commands', 'Regex-based fast parsing', 'Fee deduction (0.15%)'] },
        { title: 'Features', items: ['Real-time net P&L', 'Trade history analytics', 'Formatted XLSX export'] }
      ],
      cta: 'Try /portfolio'
    },
    news: {
      eyebrow: '08 · News · aggregation',
      title: 'News Aggregation',
      intro: 'RSS-based aggregation from publishers covering global markets and Indonesia, plus per-stock filtering.',
      sections: [
        { title: 'Sources', items: ['Global: Reuters, Investing.com', 'Local: CNBC ID, Bisnis, Kontan', 'Per-stock: yfinance news API'] },
        { title: 'Features', items: ['Top 5 recent aggregator', 'Emiten-specific news filter', 'Dashboard news tab'] }
      ],
      cta: 'Explore showcase'
    },
    charts: {
      eyebrow: '09 · Visualisation · charts',
      title: 'Decision-Ready Charts',
      intro: 'Matplotlib-based candle charts annotated with Entry / SL / TP zones and pattern detections.',
      sections: [
        { title: 'Indicators', items: ['EMA stack, BB, Supertrend', 'Volume with direction color', 'RSI (14) + MACD histogram'] },
        { title: 'Patterns', items: ['VCP, Cup & Handle, Flags', 'H&S, Pennants, Channels', 'Breakout target annotations'] }
      ],
      cta: 'Try /chart (Starter)'
    }
  },
  id: {
    setups: {
      eyebrow: '01 · Signal · setup',
      title: '20+ Detektor Swing Setup',
      intro: 'Engine pengenal pola eksklusif yang memindai seluruh pasar IDX setiap 15 menit. Dari VCP klasik hingga breakout berbasis volatilitas.',
      sections: [
        { title: 'Detektor', items: ['VCP (Volatility Contraction Pattern)', 'Bull Flag & Pennant', 'Pocket Pivot (Volume)', 'Breakout Donchian Channel', 'RS (Relative Strength) New Highs'] },
        { title: 'Filter', items: ['Filter kondisi market (Bull/Bear)', 'Kekuatan relatif vs indeks IHSG', 'Validasi tanda volume', 'Momentum grup sektor'] }
      ],
      cta: 'Lihat showcase'
    },
    confluence: {
      eyebrow: '02 · Teknikal · skor',
      title: 'Skor Konfluensi Multi-TF',
      intro: 'Dua belas indikator digabungkan di tiga timeframe (Daily, Weekly, 4H) menjadi satu skor 0–100.',
      sections: [
        { title: 'Indikator dievaluasi', items: ['RSI (14) · MACD histogram', 'ATR (volatilitas) · ADX + DI', 'Supertrend · Parabolic SAR', 'OBV · MFI · CMF (Volume)'] },
        { title: 'Output', items: ['Skor (0–100), Label Sinyal', 'Rincian 12 aturan (Lolos/Gagal)', 'Data penyelarasan MTF', 'Peringatan level risiko'] }
      ],
      cta: 'Lihat showcase'
    },
    ai: {
      eyebrow: '03 · AI · riset',
      title: 'Asisten Riset AI',
      intro: 'LLM dengan alat bantu yang memanggil fungsi analisis langsung (sinyal, scan, fundamental, berita) via Telegram.',
      sections: [
        { title: 'Model', items: ['Utama: Google Gemini 2.5 Flash', 'Cadangan: Qwen 2.5 3B (lokal)', 'Narator khusus untuk alert'] },
        { title: 'Kemampuan', items: ['Query bahasa natural: "Outlook BBCA?"', 'Perintah scan: "scan banking BELI"', 'Perintah portofolio via fast-path'] }
      ],
      cta: 'Coba di Telegram'
    },
    fundamental: {
      eyebrow: '04 · Fundamental · skor',
      title: 'Analisis Fundamental (0–100)',
      intro: 'Kerangka penilaian empat pilar yang mencakup valuasi, profitabilitas, kesehatan neraca, dan pertumbuhan.',
      sections: [
        { title: 'Bobot Pilar', items: ['Valuasi (P/E, P/B, PEG) — 30%', 'Profitabilitas (ROE, ROA) — 30%', 'Kesehatan (D/E, Rasio) — 20%', 'Pertumbuhan (EPS, Pendapatan) — 20%'] },
        { title: 'Graham Number', items: ['√(22.5 × EPS × BVPS)', 'Nilai wajar vs harga saat ini', 'Cek Margin of Safety'] }
      ],
      cta: 'Coba /fa di Telegram'
    },
    backtest: {
      eyebrow: '05 · Backtest · validasi',
      title: 'Engine Backtest Per Bar',
      intro: 'Replay detektor setup apa pun di data historis OHLCV dengan eksekusi realistis dan trailing stop 3 fase.',
      sections: [
        { title: 'Logika trailing stop', items: ['Fase 1: Tetap di level awal', 'Fase 2: Pindah ke entry (BE)', 'Fase 3: Pindah ke TP1 (Lock)'] },
        { title: 'Metrik', items: ['Win rate, Profit Factor, Expectancy', 'Max Drawdown, Win/Loss streaks', 'Log alasan setiap trade'] }
      ],
      cta: 'Coba !backtest (Pro)'
    },
    alerts: {
      eyebrow: '06 · Alert · otomatisasi',
      title: 'Notifikasi Pintar',
      intro: 'Tiga mekanisme alert: trigger harga personal, siaran otomatis setup swing, dan peringatan jarak SL/TP.',
      sections: [
        { title: 'Trigger harga', items: ['Format: /alert BBCA >9500', 'Hingga 20 alert per user', 'Pengecekan setiap 15 menit'] },
        { title: 'Siaran otomatis', items: ['Scan interval 15 menit', 'Filter berdasarkan watchlist', 'Penjelasan narasi AI'] }
      ],
      cta: 'Coba /alert (Pro)'
    },
    portfolio: {
      eyebrow: '07 · Portofolio · pelacakan',
      title: 'Pelacakan Portofolio',
      intro: 'Manajer posisi berbasis SQLite dengan perhitungan biaya P&L, perintah bahasa natural, dan ekspor XLSX.',
      sections: [
        { title: 'Perintah', items: ['Perintah Beli/Tutup/Backdate', 'Parsing cepat berbasis Regex', 'Pemotongan biaya (0.15%)'] },
        { title: 'Fitur', items: ['P&L bersih real-time', 'Analitik riwayat trading', 'Ekspor XLSX terformat'] }
      ],
      cta: 'Coba /portfolio'
    },
    news: {
      eyebrow: '08 · Berita · agregasi',
      title: 'Agregasi Berita',
      intro: 'Agregasi berbasis RSS dari penerbit berita pasar global dan Indonesia, ditambah filter per saham.',
      sections: [
        { title: 'Sumber', items: ['Global: Reuters, Investing.com', 'Lokal: CNBC ID, Bisnis, Kontan', 'Per-saham: yfinance news API'] },
        { title: 'Fitur', items: ['Agregator 5 berita terbaru', 'Filter berita spesifik emiten', 'Tab berita di dashboard'] }
      ],
      cta: 'Lihat showcase'
    },
    charts: {
      eyebrow: '09 · Visualisasi · chart',
      title: 'Chart Siap Eksekusi',
      intro: 'Chart candle berbasis matplotlib dengan anotasi zona Entry / SL / TP dan deteksi pola.',
      sections: [
        { title: 'Indikator', items: ['EMA stack, BB, Supertrend', 'Volume dengan warna arah', 'RSI (14) + MACD histogram'] },
        { title: 'Pola', items: ['VCP, Cup & Handle, Bendera', 'H&S, Pennants, Channels', 'Anotasi target breakout'] }
      ],
      cta: 'Coba /chart (Starter)'
    }
  }
};
