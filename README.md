# Orion Alpha — Next.js Frontend

The modern, high-performance web frontend for **Orion Alpha**, a systematic swing trading engine for the Indonesia Stock Exchange (IDX).

This repository contains the Next.js migration of the original Orion dashboard, rebuilt for better SEO, client-side routing, and modular scalability while retaining its signature premium "vanilla" aesthetic.

## 🚀 Key Features

- **Next.js App Router**: Lightning-fast client-side navigation with server-side optimization.
- **Premium UI/UX**: Dark mode by default, glassmorphism, smooth animations, and scroll-triggered `fade-up` effects.
- **Internationalization (i18n)**: Built-in multi-language support (EN/ID) via custom Context API.
- **Feature-Based Architecture**: Modular organization for Landing, Market, Pricing, and Auth.
- **Live Market Data**: Integrated full-width TradingView widgets with dynamic symbol search.
- **Interactive Modals**: Deep-dive feature cards with robust React state management.
- **SEO Ready**: Comprehensive per-page metadata and semantic HTML.

## 📂 Project Architecture

The project follows a **Feature-Driven Architecture** for better maintainability:

```text
src/
├── app/             # App Router: Page routes and layouts ONLY
├── features/        # Feature-specific logic & components
│   ├── landing/     # Hero, Features, Pipeline sections
│   ├── market/      # Showcase, TradingView integration
│   └── pricing/     # Subscription tiers & comparison
├── components/      # Shared/Global components (Navbar, Footer, UI)
├── lib/             # Utility logic & static assets
│   └── translations/# i18n JSON files
├── store/           # Global state (LanguageContext)
└── styles/          # Core CSS tokens & global styles
```

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React 19)
- **State**: React Context API (Language & UI)
- **Styling**: Vanilla CSS for maximum design flexibility
- **Fonts**: Inter, JetBrains Mono, & Outfit
- **Deployment**: [Vercel](https://vercel.com)

## 📦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gencode22/orion-alpha-web.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🚢 Deployment

Optimized for Vercel. Simply import the repository, and the Next.js framework preset will handle the rest.

---
Built with ⚡ by Orion Alpha Team.
