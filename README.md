# Orion Alpha — Next.js Frontend

The modern, high-performance web frontend for **Orion Alpha**, a systematic swing trading engine for the Indonesia Stock Exchange (IDX).

This repository contains the Next.js migration of the original Orion dashboard, rebuilt for better SEO, client-side routing, and component reusability while retaining its signature premium "vanilla" aesthetic.

## 🚀 Features

- **Next.js App Router**: Lightning-fast client-side navigation.
- **Premium UI/UX**: Dark mode by default, glassmorphism, smooth animations, and scroll-triggered `fade-up` effects.
- **Interactive Modals**: Deep-dive feature cards with React state management.
- **Live Market Data**: Integrated full-width TradingView widgets with dynamic symbol search.
- **Growth Optimized**: Sticky mobile CTAs and conversion-focused layouts.
- **SEO Ready**: Per-page metadata configuration.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: Vanilla CSS (`globals.css`) for maximum design control
- **Fonts**: Inter & JetBrains Mono (via `next/font`)
- **Icons**: Inline SVG

## 📦 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/gencode22/orion-alpha-web.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).
Simply import the repository into Vercel, and the Next.js framework preset will handle the rest automatically.
