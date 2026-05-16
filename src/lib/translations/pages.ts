// Translations for /about and /start pages.
import type { TranslationDict } from './types';

export const pagesTranslations: Record<'en' | 'id', TranslationDict> = {
  en: {
    about: {
      eyebrow: 'About Orion Alpha',
      title_main: 'A name built',
      title_accent: 'on purpose.',
      desc: "Every product name carries intent. Here's what ours means — and why it shapes everything we build.",
      name_orion: {
        label: 'The constellation',
        word: 'Orion',
        etymology: 'The Hunter · Latin / Greek',
        body: "Orion is one of the most recognizable constellations — a hunter who doesn't chase every prey. He studies patterns, waits for the right moment, and strikes with precision. Swing trading works exactly the same way. Not every day, not every stock. Just the right setup, at the right time.",
      },
      name_alpha: {
        label: 'The edge',
        word: 'Alpha',
        etymology: 'α · Finance / Astronomy',
        body: 'In finance, alpha is excess return above the benchmark — the measurable edge that separates systematic trading from noise. In astronomy, alpha (α) marks the brightest star in a constellation. We build tools to help traders find their alpha: systematic, decomposable, repeatable.',
      },
      principles: {
        eyebrow: 'How we build',
        title: 'Three principles behind every feature',
        items: [
          {
            num: '01',
            title: 'Systematic over intuition',
            body: 'Every signal is computed, not guessed. Indicators, market regime, confluence — all quantified. The same logic runs on every stock, every time. No discretion in the engine.',
          },
          {
            num: '02',
            title: 'Risk before reward',
            body: 'ATR-anchored stop losses, 3-phase trailing exits, position sizing built-in. The downside is always defined before entry. A good setup with undefined risk is not a setup.',
          },
          {
            num: '03',
            title: 'Decomposable decisions',
            body: 'Every output shows its work — which setup fired, which indicators agreed, what the checklist says. You can reject any recommendation; you always know exactly why it was made.',
          },
        ],
      },
      outcomes: {
        eyebrow: 'What changes when you use Orion',
        title: "Three things you'll feel from day one",
        items: [
          {
            title: 'Confidence in every entry',
            body: "No more guessing. Every signal arrives with a 0–100 score, the exact setup detected, and a checklist showing why. You'll know the answer before you ask the question.",
          },
          {
            title: 'Hours of charting back',
            body: 'Three hours of manual TA, every day — gone. Orion scans every IDX stock against 15 setups in seconds. You spend time deciding, not searching.',
          },
          {
            title: 'A measurable, repeatable edge',
            body: 'Walk-forward backtests. ATR-anchored risk. Decomposable scores. The same logic on every trade. Stop trading on vibes — start trading a system.',
          },
        ],
      },
      trust: [
        'Built by a trader, for traders',
        'Open methodology — no black box',
        'Walk-forward A rated',
        '213 automated tests',
      ],
      cta: {
        title: 'Hunt smarter. Start free.',
        body: 'Like Orion the hunter — wait for the right setup, strike with precision. Your first analysis is one command away.',
        telegram: 'Join Telegram Group',
        pricing: 'See Pricing →',
      },
    },
    start: {
      free_badge: 'Free · No signup · No credit card',
      hero: {
        title_main: 'Your first signal is',
        title_accent: '60 seconds away.',
        desc: 'Orion runs on Telegram — no app to install, no account to create. Open the bot, send one command, and get a full swing analysis on any IDX stock.',
      },
      stats: [
        { val_pre: '', val_accent: 'All', val_post: ' IDX stocks', label: 'Coverage' },
        { val_pre: '', val_accent: '15', val_post: ' swing setups', label: 'Detectors' },
        { val_pre: 'Walk-forward ', val_accent: 'A', val_post: '', label: 'Robustness' },
        { val_pre: '', val_accent: '< 60s', val_post: ' to start', label: 'Onboarding' },
      ],
      audience: {
        title_main: 'Built for traders ',
        title_accent: 'who want a system',
        sub: "Whether you're new to swing trading or systematic for years — Orion meets you where you are.",
        cards: [
          {
            title: 'Beginners who want a real system',
            body: 'No more FOMO trades. Every signal explains itself — score, setup, levels — so you learn while the bot does the heavy lifting.',
          },
          {
            title: 'Working professionals',
            body: '30 seconds for a setup, not 3 hours of charting. Check your watchlist on lunch break, set alerts, trade with conviction.',
          },
          {
            title: 'Data-driven retail traders',
            body: 'Open methodology. Decomposable scores. Walk-forward backtests. No black boxes — every signal traceable to its inputs.',
          },
        ],
      },
      steps: [
        {
          title: 'Open Telegram and find the bot',
          body: 'Search for <strong>@orion_idx_bot</strong> in Telegram, or tap the button below. Works on any device — mobile or desktop.',
          code: '@orion_idx_bot',
          hint: 'Tap to copy username',
        },
        {
          title: 'Tap Start',
          body: "Hit the <strong>Start</strong> button or send <code>/start</code>. You'll get a welcome message with all available commands and tier info.",
          mock_lines: [
            'Hello! Welcome to Orion Alpha.',
            'Type /help for a complete list of commands.',
            'Start with /signal BBCA for technical analysis.',
          ],
        },
        {
          title: 'Run your first analysis',
          body: 'Try any of these commands to get started:',
          codes: ['/signal BBCA', '/regime', '/scan'],
          hint: 'Tap any command to copy, then paste in Telegram',
        },
      ],
      commands: {
        eyebrow: 'Quick Reference',
        title: 'Starter commands to try',
        items: [
          { name: '/signal KODE', tier: 'Free', tier_class: 'free', desc: 'Full technical analysis — RSI, MACD, EMA stack, confluence score, Entry/SL/TP' },
          { name: '/regime', tier: 'Free', tier_class: 'free', desc: 'Current IHSG market regime — Bull / Bear / Sideways + TA summary' },
          { name: '/scan', tier: 'Free', tier_class: 'free', desc: 'Scan all watchlist stocks for top signals — filter by sector' },
          { name: '/swing KODE', tier: 'Starter', tier_class: 'starter', desc: 'Detect swing setup — Pullback, Breakout, VCP, EMA200 Bounce + quality score' },
          { name: '/fa KODE', tier: 'Starter', tier_class: 'starter', desc: 'Fundamental score 0–100 — P/E, P/B, ROE, Graham Number, margin of safety' },
          { name: '/backtest KODE', tier: 'Pro', tier_class: 'pro', desc: 'Historical simulation — win rate, profit factor, equity curve, per-trade log' },
        ],
      },
      free_callout: {
        title: "What's included in Free — forever",
        items: [
          '3 signals per day',
          '/regime market conditions',
          '/scan sector watchlist',
          '/price & /ihsg real-time',
          '/news global & IDX',
          '/edu 30 trading topics',
        ],
      },
      cta: {
        title: 'Stop watching. Start catching.',
        body: 'The next high-conviction setup is one command away. Free, forever, no credit card.',
        telegram: 'Open Telegram Bot',
        pricing: 'See Pricing →',
      },
      copy_toast: 'Copied to clipboard',
    },
  },
  id: {
    about: {
      eyebrow: 'Tentang Orion Alpha',
      title_main: 'Sebuah nama dibangun',
      title_accent: 'dengan tujuan.',
      desc: 'Setiap nama produk membawa niat. Inilah arti nama kami — dan mengapa ia membentuk semua yang kami bangun.',
      name_orion: {
        label: 'Konstelasi',
        word: 'Orion',
        etymology: 'Sang Pemburu · Latin / Yunani',
        body: 'Orion adalah salah satu konstelasi paling dikenal — pemburu yang tidak mengejar setiap mangsa. Ia mempelajari pola, menunggu momen yang tepat, dan menyerang dengan presisi. Swing trading bekerja persis seperti ini. Bukan setiap hari, bukan setiap saham. Hanya setup yang tepat, di waktu yang tepat.',
      },
      name_alpha: {
        label: 'Sang edge',
        word: 'Alpha',
        etymology: 'α · Finance / Astronomi',
        body: 'Dalam finance, alpha adalah excess return di atas benchmark — edge terukur yang memisahkan trading sistematis dari kebisingan. Dalam astronomi, alpha (α) menandai bintang paling terang dalam konstelasi. Kami membangun alat untuk membantu trader menemukan alpha mereka: sistematis, bisa diuraikan, bisa direplikasi.',
      },
      principles: {
        eyebrow: 'Cara kami membangun',
        title: 'Tiga prinsip di balik setiap fitur',
        items: [
          {
            num: '01',
            title: 'Sistematis melebihi intuisi',
            body: 'Setiap sinyal dihitung, bukan ditebak. Indikator, regime market, konfluensi — semua dikuantifikasi. Logika yang sama berjalan di setiap saham, setiap saat. Tidak ada diskresi di engine.',
          },
          {
            num: '02',
            title: 'Risiko sebelum reward',
            body: 'Stop loss berbasis ATR, exit trailing 3-fase, position sizing built-in. Downside selalu didefinisikan sebelum entry. Setup bagus tanpa risiko terdefinisi bukanlah setup.',
          },
          {
            num: '03',
            title: 'Keputusan yang bisa diuraikan',
            body: 'Setiap output menampilkan prosesnya — setup mana yang aktif, indikator mana yang setuju, apa kata checklist. Anda bisa menolak rekomendasi apapun; Anda selalu tahu persis kenapa sinyalnya muncul.',
          },
        ],
      },
      outcomes: {
        eyebrow: 'Apa yang berubah saat Anda pakai Orion',
        title: 'Tiga hal yang akan Anda rasakan dari hari pertama',
        items: [
          {
            title: 'Kepercayaan di setiap entry',
            body: 'Tidak lagi menebak. Setiap sinyal datang dengan skor 0–100, setup persis yang terdeteksi, dan checklist yang menjelaskan alasannya. Anda akan tahu jawabannya sebelum bertanya.',
          },
          {
            title: 'Jam-jam charting kembali',
            body: 'Tiga jam TA manual setiap hari — hilang. Orion scan setiap saham IDX dengan 15 setup dalam hitungan detik. Anda habiskan waktu untuk memutuskan, bukan mencari.',
          },
          {
            title: 'Edge yang terukur dan bisa direplikasi',
            body: 'Walk-forward backtest. Risiko berbasis ATR. Skor bisa diuraikan. Logika yang sama di setiap trade. Berhenti trading pakai feeling — mulai trading dengan sistem.',
          },
        ],
      },
      trust: [
        'Dibuat oleh trader, untuk trader',
        'Metodologi terbuka — tanpa black box',
        'Rating Walk-forward A',
        '213 tes otomatis',
      ],
      cta: {
        title: 'Berburu lebih cerdas. Mulai gratis.',
        body: 'Seperti Orion sang pemburu — tunggu setup yang tepat, serang dengan presisi. Analisis pertama lo cuma satu command lagi.',
        telegram: 'Gabung Grup Telegram',
        pricing: 'Lihat Harga →',
      },
    },
    start: {
      free_badge: 'Gratis · Tanpa daftar · Tanpa kartu kredit',
      hero: {
        title_main: 'Sinyal pertama Anda',
        title_accent: '60 detik lagi.',
        desc: 'Orion berjalan di Telegram — tanpa install aplikasi, tanpa buat akun. Buka bot, kirim satu command, dan dapatkan analisis swing lengkap untuk saham IDX manapun.',
      },
      stats: [
        { val_pre: '', val_accent: 'Semua', val_post: ' saham IDX', label: 'Cakupan' },
        { val_pre: '', val_accent: '15', val_post: ' swing setup', label: 'Detektor' },
        { val_pre: 'Walk-forward ', val_accent: 'A', val_post: '', label: 'Ketangguhan' },
        { val_pre: '', val_accent: '< 60d', val_post: ' untuk mulai', label: 'Onboarding' },
      ],
      audience: {
        title_main: 'Dibuat untuk trader ',
        title_accent: 'yang butuh sistem',
        sub: 'Apakah Anda baru di swing trading atau sudah sistematis bertahun-tahun — Orion menyesuaikan dengan kebutuhan Anda.',
        cards: [
          {
            title: 'Pemula yang butuh sistem nyata',
            body: 'Tidak ada lagi FOMO. Setiap sinyal menjelaskan dirinya — skor, setup, level — agar Anda belajar sambil bot bekerja.',
          },
          {
            title: 'Profesional sibuk',
            body: '30 detik untuk lihat setup, bukan 3 jam charting. Cek watchlist saat istirahat makan siang, pasang alert, trading dengan tenang.',
          },
          {
            title: 'Retail trader berbasis data',
            body: 'Metodologi terbuka. Skor bisa diuraikan. Walk-forward backtest. Tanpa black box — setiap sinyal bisa ditelusuri ke inputnya.',
          },
        ],
      },
      steps: [
        {
          title: 'Buka Telegram dan cari bot-nya',
          body: 'Cari <strong>@orion_idx_bot</strong> di Telegram, atau klik tombol di bawah. Bekerja di perangkat apapun — mobile atau desktop.',
          code: '@orion_idx_bot',
          hint: 'Klik untuk copy username',
        },
        {
          title: 'Tap Start',
          body: 'Tekan tombol <strong>Start</strong> atau kirim <code>/start</code>. Anda akan dapat pesan sambutan dengan semua command yang tersedia dan info paket.',
          mock_lines: [
            'Halo! Selamat datang di Orion Alpha.',
            'Ketik /help untuk daftar lengkap command.',
            'Mulai dengan /signal BBCA untuk analisis teknikal.',
          ],
        },
        {
          title: 'Jalankan analisis pertama Anda',
          body: 'Coba salah satu command ini untuk mulai:',
          codes: ['/signal BBCA', '/regime', '/scan'],
          hint: 'Klik command apapun untuk copy, lalu paste di Telegram',
        },
      ],
      commands: {
        eyebrow: 'Referensi Cepat',
        title: 'Command starter untuk dicoba',
        items: [
          { name: '/signal KODE', tier: 'Free', tier_class: 'free', desc: 'Analisis teknikal lengkap — RSI, MACD, tumpukan EMA, skor konfluensi, Entry/SL/TP' },
          { name: '/regime', tier: 'Free', tier_class: 'free', desc: 'Regime IHSG saat ini — Bull / Bear / Sideways + ringkasan TA' },
          { name: '/scan', tier: 'Free', tier_class: 'free', desc: 'Scan semua saham di watchlist untuk sinyal terbaik — filter per sektor' },
          { name: '/swing KODE', tier: 'Starter', tier_class: 'starter', desc: 'Deteksi swing setup — Pullback, Breakout, VCP, EMA200 Bounce + skor kualitas' },
          { name: '/fa KODE', tier: 'Starter', tier_class: 'starter', desc: 'Skor fundamental 0–100 — P/E, P/B, ROE, Graham Number, margin of safety' },
          { name: '/backtest KODE', tier: 'Pro', tier_class: 'pro', desc: 'Simulasi historis — win rate, profit factor, equity curve, log per-trade' },
        ],
      },
      free_callout: {
        title: 'Yang termasuk di Free — selamanya',
        items: [
          '3 sinyal per hari',
          'Kondisi market /regime',
          'Watchlist sektor /scan',
          '/price & /ihsg real-time',
          '/news global & IDX',
          '/edu 30 topik trading',
        ],
      },
      cta: {
        title: 'Berhenti menonton. Mulai menangkap.',
        body: 'Setup high-conviction berikutnya hanya satu command lagi. Gratis, selamanya, tanpa kartu kredit.',
        telegram: 'Buka Bot Telegram',
        pricing: 'Lihat Harga →',
      },
      copy_toast: 'Disalin ke clipboard',
    },
  },
};
