import { modalTranslations } from './modals';
import { pricingTranslations } from './pricing';
import { pagesTranslations } from './pages';

export const translations: Record<'en' | 'id', any> = {
  en: {
    common: {
      learn_more: 'Read detail',
      join_discord: 'Join Discord',
      core_feature: 'Core Feature',
      get_started: 'Get Started'
    },
    nav: {
      home: 'Home',
      about: 'About',
      pricing: 'Pricing',
      docs: 'Docs',
      backtest: 'Backtest'
    },
    hero: {
      badge: 'Swing Trading Engine · IDX',
      title: 'Find the Setup.',
      title_accent: 'Execute with Edge.',
      desc: 'Stop guessing which IDX stock to buy today. Orion scans all of them against <span class="kw">15 walkforward-proven swing setups</span> — and tells you <span class="kw">exactly when to enter</span>, where to stop, and when to take profit.',
      stats: {
        setups: 'Swing Setups',
        indicators: 'Indicators',
        stocks: 'IDX Tickers',
        rating: 'Backtest Rating'
      },
      ctas: {
        telegram: 'Join Telegram Group',
        docs: 'Documentation',
        backtest: 'View Backtest',
        hint: '3,240 trades audited · No signup'
      },
      micro: '3 signals/day free · No credit card · No expiry',
      panel_title: 'Analysis Engine',
      panel_platforms: 'Telegram · Discord · Web Dashboard'
    },
    features: {
      eyebrow: 'Swing Trading Toolkit',
      title: 'Find the right setup.',
      title_accent: 'Every time.',
      also_included: 'Also included:',
      desc: 'Nine modules — setup detection, confluence scoring, risk sizing, fundamentals, and alerts — working together so you always know what the data is saying.',
      cards: {
        setups: { title: '15 Swing Setup Detectors', desc: '<span class="kw">VCP, Pullback-Uptrend, EMA200-Bounce</span>, Donchian-Break, Wyckoff-Spring, Ichimoku-Break — each scored 0–100 with regime-aware filter.' },
        confluence: { title: 'Multi-TF Confluence Scoring', desc: '12-indicator weighted vote across <span class="kw">Daily, Weekly, 4H</span>. Final 0–100 score with regime-adaptive weights.' },
        ai: { title: 'AI Research Assistant', desc: '<span class="kw">Gemini 2.5 Flash</span> primary, local Qwen 2.5 3B fallback. Tool-augmented natural-language queries on live data.' },
        fundamental: { title: 'Fundamental Analysis', desc: '4-pillar 0–100 scoring: valuation, profitability, health, growth. <span class="kw">Graham Number</span> with margin-of-safety.' },
        backtest: { title: 'Backtest Engine', desc: 'Bar-by-bar replay. 3-phase trailing stop. Per-setup expectancy + <span class="kw">walk-forward validation</span>.' },
        alerts: { title: 'Smart Alerts', desc: 'Personal price triggers + auto <span class="kw">swing-broadcast every 15 min</span>. Per-user watchlist filter, SL/TP proximity warnings.' },
        portfolio: { title: 'Portfolio Tracking', desc: 'SQLite-backed positions. Real-time net P&L (fee-aware). Natural-language commands and <span class="kw">XLSX export</span>.' },
        news: { title: 'News Aggregation', desc: 'Global RSS (Reuters, Investing.com) + Indonesia (CNBC, Bisnis, Kontan). Per-stock keyword filter.' },
        charts: { title: 'Decision-Ready Charts', desc: 'Candle render with entry zone, SL/TP horizontals, pattern annotations, multi-indicator overlays.' },
        discord: { title: 'Join Community', desc: 'Real-time discussions with <span class="kw">500+ traders</span>. Share setups, get support, and trade together on Discord.' }
      }
    },
    modals: modalTranslations.en,
    pricing: pricingTranslations.en,
    about: pagesTranslations.en.about,
    start: pagesTranslations.en.start,
    methodology: {
      eyebrow: 'Methodology',
      title: 'How every signal is built',
      desc: 'Six principles behind every output — written plainly so you understand the logic, not just the result.',
      cards: [
        { eyebrow: '01 · Confluence', title: '12-indicator weighted vote', desc: 'Each indicator contributes ±1 to ±2 points based on its signal strength. Final aggregate score normalises to 0–100.', meta: 'Score bands: 75+ Strong Buy · 60+ Buy · 45–59 Neutral · <45 Sell' },
        { eyebrow: '02 · Regime-adaptive weights', title: 'Bull / Bear / Sideways tilts', desc: 'IHSG regime is detected from EMA stack + ADX. Indicator weights shift accordingly — trend-following is amplified in trending regimes, mean-reversion in sideways.', meta: 'Bull: Supertrend + Ichimoku boosted · Sideways: RSI + BB boosted' },
        { eyebrow: '03 · Multi-timeframe', title: 'Daily + Weekly + 4H alignment', desc: 'A signal is "aligned" only if all three timeframes agree on direction. Misalignment downgrades the signal label and surfaces a warning.', meta: 'Daily = primary · Weekly = trend filter · 4H = entry timing' },
        { eyebrow: '04 · Setup quality', title: '0–100 quality score per setup', desc: 'Every named setup (VCP, Pullback, Donchian…) computes a quality score from trend profile, trendiness, volume context, and structural integrity.', meta: '≥75 high · 55–74 medium · <55 low (filtered)' },
        { eyebrow: '05 · Risk framework', title: 'ATR-anchored Entry / SL / TP', desc: 'Stops and targets are anchored to recent volatility (ATR), not arbitrary percentages. Position sizing accepts 1–2% portfolio risk per trade with R:R ≥ 1.5 minimum.', meta: 'SL = entry − 1.5×ATR · TP1 = entry + 2×ATR · TP2 = entry + 3×ATR' },
        { eyebrow: '06 · 3-phase trailing', title: 'Adaptive stop migration', desc: 'As the trade progresses, stops migrate to lock in profit. Backtest engine simulates this exactly.', meta: 'Phase 1: SL fixed · Phase 2: SL = entry · Phase 3: SL = TP1' }
      ]
    },
    advantages: {
      eyebrow: 'Why Orion Alpha',
      title: 'Built different.',
      title_accent: 'Priced for everyone.',
      desc: 'Most signal bots give you a number with no context. Orion Alpha <span class="kw">shows you the work</span> — so you learn while you trade.',
      cards: [
          { title: 'Made for IDX, not adapted for it', desc: 'Indonesian tickers, BEI market hours, Rupiah formatting, <span class="kw">LQ45 / IDX30</span> sector groupings — built for this market from day one.' },
          { title: 'Same signal everywhere', desc: 'Telegram, Discord, or the web — <span class="kw">zero drift</span> between platforms.' },
          { title: 'Start free. Always.', desc: '3 signals/day, full market scan, and news — <span class="kw">no credit card</span> required.' },
          { title: 'Explainable AI', desc: 'Not just "BUY" — get the <span class="kw">confluence checklist</span> and market regime context for every single alert.' },
        { title: 'Local Intelligence', desc: 'Qwen 2.5 takes over locally if the cloud is unavailable. Zero interruption.' },
        { title: 'Unmatched Reliability', desc: 'Automatic retries and persistent state. Orion Alpha runs when the market opens, every single day.' }
      ]
    },
    audience: {
      eyebrow: 'Who Orion is built for',
      title: 'For traders who want a system, ',
      title_italic: 'not noise.',
      desc: "Whether you're new to swing trading or systematic for years, Orion meets you where you are.",
      cards: [
        { title: 'Beginners who want a real system', desc: 'No more FOMO trades or random signal groups. Every signal explains itself — score, setup, levels — so you learn while the bot does the heavy lifting.' },
        { title: 'Working professionals', desc: '30 seconds for a setup, not 3 hours of charting. Check your watchlist on lunch break, set alerts, trade with conviction.' },
        { title: 'Data-driven retail traders', desc: 'Open methodology. Decomposable scores. Walk-forward backtests. No black boxes — every signal traceable to its inputs.' }
      ]
    },
    pipeline: {
      eyebrow: 'How it works',
      title: 'Four stages, one signal',
      desc: 'Every signal follows the same pipeline — price data in, actionable setup out. No black boxes. You can trace exactly why a stock was flagged at every step.',
      steps: [
        { title: 'Data Ingestion', desc: 'OHLCV from yfinance (15 min delayed) with retry + IHSG last-candle patch. RSS news from 6 publishers.' },
        { title: 'Indicator Computation', desc: '12 indicators across Daily / Weekly / 4H — RSI, MACD, BB, ATR, ADX, Supertrend, PSAR, OBV, MFI, CMF, Stoch, Ichimoku.' },
        { title: 'Confluence + Regime', desc: 'Detect IHSG regime (Bull / Bear / Sideways), apply adaptive weights, aggregate to 0–100 score with 0–12 confluence.' },
        { title: 'Setup + Risk', desc: 'Match against 15 named setups (VCP, Donchian-Break, Pullback-Uptrend…). Compute Entry/SL/TP with ATR-anchored stops, R:R guard.' }
      ]
    },
    final_cta: {
      title: 'Your edge in IDX is one click away.',
      desc: 'Start with Free — 3 signals/day, full market scan, regime read. No credit card. No expiry. Upgrade only when you\'re ready.',
      telegram: 'Join Telegram Group',
      discord: 'Join Discord'
    },
    pricing_cta: {
      eyebrow: 'Pricing',
      title: 'Start free. Upgrade ',
      title_italic: 'when you need more',
      desc: 'Monthly plans, no lock-in. Cancel anytime. Manual activation under 10 minutes via QRIS or bank transfer.',
      cta: 'See all plans',
      see_all: 'See full plan details',
      tiers: {
        free: { title: 'Free', desc: '3 signals/day · scan · regime' },
        starter: { title: 'Starter', badge: 'Popular', desc: 'Unlimited signals · swing · FA · chart' },
        pro: { title: 'Pro', desc: '+ backtest · auto-alert · watchlist' }
      }
    },
    stats: {
      tickers: 'IDX Tickers Scanned',
      setups: 'Swing Setups',
      indicators: 'Confluence Indicators',
      rating: 'Backtest Rating'
    },
    pricing_inline: {
      free: {
        name: 'FREE',
        price: 'Rp 0',
        features: ['3 signals/day', 'Full IDX market scan', 'Regime read (Bull/Bear/Sideways)', 'News aggregation', 'Telegram & Discord access'],
        cta: 'Start Free on Telegram',
        note: 'No credit card · No expiry'
      },
      starter: {
        name: 'STARTER',
        price: 'Rp 49K',
        period: '/month',
        badge: 'Most Popular',
        features: ['Unlimited /signal', '/chart full indicators + patterns', '/swing — 15 setup detectors', '/fa + /fascan screener', '/sizing + /calculator', '/scan across all IDX sectors'],
        cta: 'Upgrade to Starter',
        pro_hint: 'Need backtest, alerts & watchlist? See Pro plan →'
      }
    },
    method_summary: {
      text: 'Every signal is built on a <strong>12-indicator weighted vote</strong>, regime-adaptive weights, multi-timeframe alignment, and ATR-anchored risk sizing. <strong>No black boxes.</strong>',
      link: 'See full methodology'
    },
    trust: [
      'Built by a trader, for traders',
      'Open methodology — no black box',
      'Walk-forward A rated',
      '213 automated tests'
    ],
    footer: {
      legal: 'Built for IDX traders. Data delayed ~15 min. Educational tool — not investment advice.',
      links: {
        privacy: 'Privacy',
        terms: 'Terms'
      }
    },
    sticky_cta: {
      title: 'Orion Alpha Bot',
      sub: 'Free · Professional · IDX',
      action: 'Start Free'
    }
  },
  id: {
    common: {
      learn_more: 'Detail selengkapnya',
      join_discord: 'Gabung Discord',
      core_feature: 'Fitur Utama',
      get_started: 'Mulai Sekarang'
    },
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      pricing: 'Harga',
      docs: 'Docs',
      backtest: 'Backtest'
    },
    hero: {
      badge: 'Swing Trading Engine · IDX',
      title: 'Find the Setup.',
      title_accent: 'Execute with Edge.',
      desc: 'Stop tebak-tebakan saham IDX. Orion scan semua ticker pakai <span class="kw">15 setup teruji walkforward</span> — kasih sinyal <span class="kw">kapan masuk</span>, di mana stop, kapan ambil profit.',
      ctas: {
        telegram: 'Gabung Grup Telegram',
        docs: 'Dokumentasi',
        backtest: 'Lihat Backtest',
        hint: '3.240 trade teraudit · Tanpa daftar'
      },
      micro: '3 sinyal/hari gratis · Tanpa kartu kredit · Tanpa kadaluwarsa',
      panel_title: 'Mesin Analisis',
      panel_platforms: 'Telegram · Discord · Web Dashboard',
      stats: {
        setups: 'Setup Swing',
        indicators: 'Indikator',
        stocks: 'Ticker IDX',
        rating: 'Rating Backtest'
      }
    },
    features: {
      eyebrow: 'Swing Trading Toolkit',
      title: 'Temukan setup yang tepat.',
      title_accent: 'Setiap saat.',
      also_included: 'Termasuk juga:',
      desc: 'Sembilan modul kerja bareng — deteksi setup, skor confluence, sizing risiko, fundamental, alert. Data dengan konteks, bukan angka mentah.',
      cards: {
        setups: { title: '15 Detektor Swing Setup', desc: '<span class="kw">VCP, Pullback-Uptrend, EMA200-Bounce</span>, Wyckoff-Spring, Ichimoku-Break, Donchian-Break — masing-masing diberi skor 0–100 dengan filter kondisi market.' },
        confluence: { title: 'Skor Konfluensi Multi-TF', desc: 'Evaluasi 12 indikator di <span class="kw">Daily, Weekly, 4H</span>. Skor akhir 0–100 yang adaptif terhadap kondisi market.' },
        ai: { title: 'Asisten Riset AI', desc: '<span class="kw">Gemini 2.5 Flash</span> sebagai otak utama. Tanya jawab seputar data saham secara real-time dengan bahasa natural.' },
        fundamental: { title: 'Analisis Fundamental', desc: 'Penilaian 0–100 dari 4 pilar: valuasi, profitabilitas, kesehatan, dan pertumbuhan. Termasuk <span class="kw">Graham Number</span>.' },
        backtest: { title: 'Engine Backtest', desc: 'Replay per bar. Trailing stop 3 fase. <span class="kw">Validasi walk-forward</span> untuk memastikan strategi tetap tangguh.' },
        alerts: { title: 'Notifikasi Pintar', desc: 'Trigger harga personal + <span class="kw">siaran otomatis setup swing setiap 15 menit</span>. Filter berdasarkan watchlist Anda.' },
        portfolio: { title: 'Pelacakan Portofolio', desc: 'Kelola posisi dengan database SQLite. Pantau P&L real-time (setelah biaya) dan <span class="kw">ekspor ke XLSX</span>.' },
        news: { title: 'Berita Agregasi', desc: 'Berita global (Reuters) + lokal (CNBC, Bisnis, Kontan). Filter kata kunci spesifik per saham.' },
        charts: { title: 'Chart Siap Eksekusi', desc: 'Visualisasi candle dengan zona entry, SL/TP, anotasi pola, dan berbagai indikator teknis.' },
        discord: { title: 'Gabung Komunitas', desc: 'Diskusi real-time dengan <span class="kw">500+ trader</span>. Berbagi setup, edukasi, dan trading bersama di Discord.' }
      }
    },
    modals: modalTranslations.id,
    pricing: pricingTranslations.id,
    about: pagesTranslations.id.about,
    start: pagesTranslations.id.start,
    methodology: {
      eyebrow: 'Metodologi',
      title: 'Bagaimana setiap sinyal dibuat',
      desc: 'Enam prinsip di balik setiap output — dijelaskan secara sederhana agar Anda memahami logikanya, bukan hanya hasilnya.',
      cards: [
        { eyebrow: '01 · Konfluensi', title: 'Voting berbobot 12-indikator', desc: 'Setiap indikator berkontribusi ±1 hingga ±2 poin berdasarkan kekuatan sinyalnya. Skor agregat akhir dinormalisasi menjadi 0–100.', meta: 'Rentang skor: 75+ Strong Buy · 60+ Buy · 45–59 Netral · <45 Jual' },
        { eyebrow: '02 · Bobot adaptif regime', title: 'Tampilan Bull / Bear / Sideways', desc: 'Regime IHSG dideteksi dari tumpukan EMA + ADX. Bobot indikator bergeser — trend-following diperkuat di regime trending, mean-reversion di sideways.', meta: 'Bull: Supertrend + Ichimoku diperkuat · Sideways: RSI + BB diperkuat' },
        { eyebrow: '03 · Multi-timeframe', title: 'Daily + Weekly + 4H alignment', desc: 'Sinyal dianggap "selaras" hanya jika ketiga timeframe setuju pada arah yang sama. Ketidaksesuaian akan menurunkan label sinyal.', meta: 'Daily = utama · Weekly = filter tren · 4H = timing entry' },
        { eyebrow: '04 · Kualitas setup', title: 'Skor kualitas 0–100 per setup', desc: 'Setiap setup (VCP, Pullback, Donchian…) menghitung skor kualitas dari profil tren, volume, dan integritas struktural.', meta: '≥75 tinggi · 55–74 menengah · <55 rendah (difilter)' },
        { eyebrow: '05 · Kerangka risiko', title: 'Entry / SL / TP berbasis ATR', desc: 'Stop dan target didasarkan pada volatilitas terkini (ATR), bukan persentase sembarang. Risiko per trade 1–2% dengan R:R minimal 1.5.', meta: 'SL = entry − 1.5×ATR · TP1 = entry + 2×ATR · TP2 = entry + 3×ATR' },
        { eyebrow: '06 · Trailing 3-fase', title: 'Migrasi stop adaptif', desc: 'Seiring kemajuan trade, stop bermigrasi untuk mengamankan profit. Engine backtest mensimulasikan ini secara tepat.', meta: 'Fase 1: SL tetap · Fase 2: SL = entry · Fase 3: SL = TP1' }
      ]
    },
    advantages: {
      eyebrow: 'Kenapa Orion Alpha',
      title: 'Built different.',
      title_accent: 'Priced for everyone.',
      desc: 'Bot sinyal lain cuma kasih angka. Orion <span class="kw">tunjukin prosesnya</span> — biar makin paham tiap kali trading.',
      cards: [
          { title: 'Dibuat khusus untuk IDX', desc: 'Ticker Indonesia, jam BEI, format Rupiah, grup sektor <span class="kw">LQ45 / IDX30</span> — bukan tool global yang di-adaptasi.' },
          { title: 'Sinyal sama di semua platform', desc: 'Telegram, Discord, web — <span class="kw">sinkron 100%</span>, gak ada beda angka.' },
          { title: 'Gratis selamanya', desc: '3 sinyal/hari, scan full market, berita — <span class="kw">tanpa kartu kredit</span>.' },
          { title: 'AI yang transparan', desc: 'Bukan cuma "BELI" — tiap sinyal disertai <span class="kw">checklist konfluensi</span> + konteks regime.' },
        { title: 'Local fallback', desc: 'Qwen 2.5 jalan lokal kalau cloud down. Zero interruption.' },
        { title: 'Selalu on time', desc: 'Auto-retry + state persistence. Engine jalan tiap market buka, tanpa miss.' }
      ]
    },
    audience: {
      eyebrow: 'Buat siapa Orion ini',
      title: 'Untuk trader yang butuh sistem, ',
      title_italic: 'bukan tebak-tebakan.',
      desc: "Baru mulai atau sudah tahunan trading sistematis — Orion menyesuaikan level.",
      cards: [
        { title: 'Pemula yang serius', desc: 'Bukan grup sinyal asal-asalan. Tiap alert jelas alasannya — skor, setup, level — belajar sambil bot kerja.' },
        { title: 'Profesional sibuk', desc: '30 detik buat lihat setup, bukan 3 jam charting. Cek watchlist jam istirahat, pasang alert, eksekusi tenang.' },
        { title: 'Trader berbasis data', desc: 'Metodologi terbuka. Skor decomposable. Backtest walk-forward. Tiap sinyal traceable ke inputnya.' }
      ]
    },
    pipeline: {
      eyebrow: 'Cara kerja',
      title: 'Empat tahap, satu sinyal',
      desc: 'Tiap sinyal lewat pipeline yang sama: data mentah → setup siap pakai. Bisa di-trace dari awal sampai akhir, tanpa black box.',
      steps: [
        { title: 'Pengumpulan Data', desc: 'OHLCV dari yfinance (delay 15mnt) + auto-retry. Berita RSS dari 6 publisher lokal & global.' },
        { title: 'Komputasi Indikator', desc: '12 indikator di Daily / Weekly / 4H — RSI, MACD, BB, ATR, ADX, Supertrend, PSAR, OBV, MFI, CMF, Stoch, Ichimoku.' },
        { title: 'Konfluensi + Regime', desc: 'Deteksi regime IHSG (Bull / Bear / Sideways), terapkan bobot adaptif, gabung jadi skor 0–100.' },
        { title: 'Setup + Risiko', desc: 'Match ke 15 setup (VCP, Donchian-Break, Pullback-Uptrend…). Hitung Entry/SL/TP dengan ATR-anchored stop.' }
      ]
    },
    final_cta: {
      title: 'Edge di IDX, tinggal satu klik.',
      title_accent: 'Mulai sekarang.',
      desc: 'Mulai Gratis — 3 sinyal/hari, full market scan, regime read. Tanpa kartu kredit. Upgrade kalau memang butuh.',
      telegram: 'Gabung Grup Telegram',
      discord: 'Gabung Discord'
    },
    pricing_cta: {
      eyebrow: 'Harga',
      title: 'Mulai gratis. Upgrade ',
      title_italic: 'saat butuh lebih',
      desc: 'Bulanan, tanpa kontrak. Cancel kapan aja. Aktivasi manual <10 menit via QRIS atau transfer bank.',
      cta: 'Lihat semua paket',
      see_all: 'Lihat detail lengkap paket',
      tiers: {
        free: { title: 'Free', desc: '3 sinyal/hari · scan · regime' },
        starter: { title: 'Starter', badge: 'Populer', desc: 'Sinyal unlimited · swing · FA · chart' },
        pro: { title: 'Pro', desc: '+ backtest · auto-alert · watchlist' }
      }
    },
    stats: {
      tickers: 'Ticker IDX di-scan',
      setups: 'Setup Swing',
      indicators: 'Indikator Konfluensi',
      rating: 'Rating Backtest'
    },
    pricing_inline: {
      free: {
        name: 'GRATIS',
        price: 'Rp 0',
        features: ['3 sinyal/hari', 'Full market scan IDX', 'Regime read (Bull/Bear/Sideways)', 'Agregasi berita', 'Akses Telegram & Discord'],
        cta: 'Mulai Gratis di Telegram',
        note: 'Tanpa kartu kredit · Tanpa kadaluwarsa'
      },
      starter: {
        name: 'STARTER',
        price: 'Rp 49K',
        period: '/bulan',
        badge: 'Paling Populer',
        features: ['Sinyal unlimited (/signal)', '/chart indikator & pattern lengkap', '/swing — 15 detektor setup', '/fa + /fascan screener', '/sizing + /calculator', '/scan seluruh sektor IDX'],
        cta: 'Upgrade ke Starter',
        pro_hint: 'Butuh backtest, alert & watchlist? Lihat paket Pro →'
      }
    },
    method_summary: {
      text: 'Tiap sinyal dibangun dari <strong>voting berbobot 12-indikator</strong>, bobot adaptif regime, alignment multi-timeframe, dan sizing risiko berbasis ATR. <strong>Tanpa black box.</strong>',
      link: 'Lihat metodologi lengkap'
    },
    trust: [
      'Dibuat trader, buat trader',
      'Metodologi terbuka — tanpa black box',
      'Walk-forward Rating A',
      '213 automated tests'
    ],
    footer: {
      legal: 'Dibuat buat trader IDX. Data delay ~15 menit. Alat edukasi — bukan saran investasi.',
      links: {
        privacy: 'Privasi',
        terms: 'Ketentuan'
      }
    },
    sticky_cta: {
      title: 'Bot Orion Alpha',
      sub: 'Gratis · Profesional · IDX',
      action: 'Mulai Gratis'
    }
  }
};
