import { modalTranslations } from './modals';

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
      showcase: 'Showcase',
      about: 'About',
      pricing: 'Pricing'
    },
    hero: {
      badge: 'Swing Trading Engine · IDX',
      title: 'Find the Setup.',
      title_accent: 'Execute with Edge.',
      desc: 'Stop guessing which IDX stock to buy today. Orion scans all of them against <span class="kw">20 proven swing setups</span> — and tells you <span class="kw">exactly when to enter</span>, where to stop, and when to take profit.',
      stats: {
        setups: 'Swing Setups',
        indicators: 'Indicators',
        stocks: 'IDX Stocks'
      },
      ctas: {
        telegram: 'Open Telegram Bot',
        showcase: 'Live Showcase',
        hint: 'Interactive preview — no signup'
      }
    },
    features: {
      eyebrow: 'Swing Trading Toolkit',
      title: 'Find the right setup.',
      title_accent: 'Every time.',
      desc: 'Nine modules — setup detection, confluence scoring, risk sizing, fundamentals, and alerts — working together so you always know what the data is saying.',
      cards: {
        setups: { title: '20+ Swing Setup Detectors', desc: '<span class="kw">VCP, Pullback, Breakout-Volume</span>, Donchian, Cup-Handle, Flag — each scored 0–100 with regime-aware filter.' },
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
        { title: 'Beginners who want a real system', desc: 'No more FOMO trades or grup signal roulette. Every signal explains itself — score, setup, levels — so you learn while the bot does the heavy lifting.' },
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
        { title: 'Setup + Risk', desc: 'Match against 20 named setups (VCP, Donchian, Pullback…). Compute Entry/SL/TP with ATR-anchored stops, R:R guard.' }
      ]
    },
    final_cta: {
      title: 'Your edge in IDX is one click away.',
      desc: 'Start with Free — 3 signals/day, full market scan, regime read. No credit card. No expiry. Upgrade only when you\'re ready.',
      telegram: 'Open Telegram Bot',
      discord: 'Join Discord'
    },
    pricing_cta: {
      eyebrow: 'Pricing',
      title: 'Start free. Upgrade ',
      title_italic: 'when you need more',
      desc: 'Monthly plans, no lock-in. Cancel anytime. Manual activation under 10 minutes via QRIS or bank transfer.',
      cta: 'See all plans',
      tiers: {
        free: { title: 'Free', desc: '3 signals/day · scan · regime' },
        starter: { title: 'Starter', badge: 'Popular', desc: 'Unlimited signals · swing · FA · chart' },
        pro: { title: 'Pro', desc: '+ backtest · auto-alert · watchlist' }
      }
    },
    trust: [
      'Built by a trader, for traders',
      'Open methodology — no black box',
      'Walk-forward A rated',
      '161 automated tests'
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
      showcase: 'Showcase',
      about: 'Tentang',
      pricing: 'Harga'
    },
    hero: {
      badge: 'Swing Trading Engine · IDX',
      title: 'Find the Setup.',
      title_accent: 'Execute with Edge.',
      desc: 'Berhenti menebak saham IDX mana yang harus dibeli hari ini. Orion memindai semuanya berdasarkan <span class="kw">20 setup swing teruji</span> — dan memberi tahu Anda <span class="kw">kapan harus masuk</span>, di mana harus stop, dan kapan harus take profit.',
      ctas: {
        telegram: 'Buka Bot Telegram',
        showcase: 'Showcase Live',
        hint: 'Pratinjau interaktif — tanpa daftar'
      },
      stats: {
        setups: 'Setup Swing',
        indicators: 'Indikator',
        stocks: 'Saham IDX'
      }
    },
    features: {
      eyebrow: 'Swing Trading Toolkit',
      title: 'Temukan setup yang tepat.',
      title_accent: 'Setiap saat.',
      desc: 'Sembilan modul — deteksi setup, skor confluence, manajemen risiko, fundamental, dan notifikasi — bekerja bersama agar Anda selalu tahu apa yang dikatakan data.',
      cards: {
        setups: { title: '20+ Detektor Swing Setup', desc: '<span class="kw">VCP, Pullback, Breakout</span>, Cup-Handle, Flag — masing-masing diberi skor 0–100 dengan filter kondisi market.' },
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
      eyebrow: 'Mengapa Orion Alpha',
      title: 'Built different.',
      title_accent: 'Priced for everyone.',
      desc: 'Kebanyakan bot hanya memberi angka tanpa konteks. Orion Alpha <span class="kw">menunjukkan prosesnya</span> — sehingga Anda belajar sambil trading.',
      cards: [
          { title: 'Dibuat untuk IDX, bukan adaptasi', desc: 'Ticker Indonesia, jam market BEI, format Rupiah, grup sektor <span class="kw">LQ45 / IDX30</span> — dirancang khusus untuk pasar kita.' },
          { title: 'Sinyal yang sama di mana saja', desc: 'Telegram, Discord, atau web — <span class="kw">sinkronisasi sempurna</span> antar platform.' },
          { title: 'Mulai Gratis. Selamanya.', desc: '3 sinyal/hari, scan seluruh market, dan berita — <span class="kw">tanpa perlu kartu kredit</span>.' },
          { title: 'AI yang Bisa Dijelaskan', desc: 'Bukan sekadar "BELI" — dapatkan <span class="kw">checklist konfluensi</span> dan konteks kondisi market untuk setiap sinyal.' },
        { title: 'Kecerdasan Lokal', desc: 'Qwen 2.5 mengambil alih secara lokal jika koneksi cloud terputus. Tanpa interupsi.' },
        { title: 'Keandalan Tanpa Tanding', desc: 'Retry otomatis dan sistem yang tangguh. Orion Alpha berjalan saat market buka, setiap hari.' }
      ]
    },
    audience: {
      eyebrow: 'Siapa pengguna Orion',
      title: 'Untuk trader yang butuh sistem, ',
      title_italic: 'bukan kebisingan.',
      desc: "Baik Anda baru memulai atau sudah berpengalaman, Orion menyesuaikan dengan kebutuhan Anda.",
      cards: [
        { title: 'Pemula yang butuh sistem nyata', desc: 'Bukan sekadar grup sinyal. Setiap sinyal menjelaskan alasannya — skor, setup, level — agar Anda belajar sambil bot bekerja.' },
        { title: 'Profesional yang sibuk', desc: 'Cukup 30 detik untuk melihat setup. Cek watchlist saat jam istirahat, pasang alert, dan trading dengan tenang.' },
        { title: 'Retail trader berbasis data', desc: 'Metodologi terbuka. Skor yang transparan. Backtest walk-forward. Tanpa "black box" — setiap sinyal bisa dilacak sumbernya.' }
      ]
    },
    pipeline: {
      eyebrow: 'Cara kerja',
      title: 'Empat tahap, satu sinyal',
      desc: 'Setiap sinyal mengikuti pipeline yang sama — dari data mentah hingga setup siap pakai. Tanpa kotak hitam. Anda bisa menelusuri logika di setiap langkah.',
      steps: [
        { title: 'Pengumpulan Data', desc: 'OHLCV dari yfinance (tunda 15 mnt) dengan retry otomatis. Berita RSS dari 6 penerbit lokal dan global.' },
        { title: 'Komputasi Indikator', desc: '12 indikator di Daily / Weekly / 4H — RSI, MACD, BB, ATR, ADX, Supertrend, PSAR, OBV, MFI, CMF, Stoch, Ichimoku.' },
        { title: 'Konfluensi + Regime', desc: 'Deteksi kondisi IHSG (Bull / Bear / Sideways), terapkan bobot adaptif, gabungkan menjadi skor 0–100.' },
        { title: 'Setup + Risiko', desc: 'Cocokkan dengan 20 setup (VCP, Donchian, Pullback…). Hitung Entry/SL/TP dengan stop berbasis ATR.' }
      ]
    },
    final_cta: {
      title: 'Hanya selangkah lagi menuju keunggulan di IDX.',
      title_accent: 'Mulai sekarang.',
      desc: 'Mulai dengan yang Gratis — 3 sinyal/hari, scan seluruh market, pembacaan regime. Tanpa kartu kredit. Tanpa batas waktu. Upgrade hanya jika Anda siap.',
      telegram: 'Buka Bot Telegram',
      discord: 'Gabung Discord'
    },
    pricing_cta: {
      eyebrow: 'Harga',
      title: 'Mulai gratis. Upgrade ',
      title_italic: 'saat butuh lebih',
      desc: 'Paket bulanan, tanpa kontrak. Batalkan kapan saja. Aktivasi manual di bawah 10 menit via QRIS atau transfer bank.',
      cta: 'Lihat semua paket',
      tiers: {
        free: { title: 'Free', desc: '3 sinyal/hari · scan · regime' },
        starter: { title: 'Starter', badge: 'Populer', desc: 'Sinyal tanpa batas · swing · FA · chart' },
        pro: { title: 'Pro', desc: '+ backtest · auto-alert · watchlist' }
      }
    },
    trust: [
      'Dibuat oleh trader, untuk trader',
      'Metodologi terbuka — tanpa kotak hitam',
      'Rating Walk-forward A',
      '161 tes otomatis'
    ],
    footer: {
      legal: 'Dibuat untuk trader IDX. Data tertunda ~15 menit. Alat edukasi — bukan nasihat investasi.',
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
