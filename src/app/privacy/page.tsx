"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {


  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        {/*  ── Hero ──  */}
        <div className="privacy-hero">
          <span className="privacy-eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="meta">Last updated: May 2026 &nbsp;·&nbsp; Orion Alpha (<a href="https://orion-alpha-web.vercel.app">orion-alpha-web.vercel.app</a>)</p>
        </div>

        {/*  ── Sections ──  */}
        <div className="privacy-section">
          <h2>1. Overview</h2>
          <p>Orion Alpha ("we", "us") is an Indonesian stock market analysis tool delivered via Telegram bot and this web dashboard. A community Discord server is also available, but no signals are delivered there at this time. This policy explains what data we collect, why, and how it is used when you visit this website or interact with our Telegram bot.</p>
          <p>We do not sell your data. We do not run ads. We collect only what is necessary to operate the service.</p>
        </div>

        <div className="privacy-section">
          <h2>2. Data We Collect</h2>
          <p><strong>Website analytics (Google Analytics 4)</strong></p>
          <ul>
            <li>Pages visited, time on page, referral source</li>
            <li>Device type, browser, operating system</li>
            <li>Approximate geographic location (country/city level)</li>
            <li>This data is anonymized and aggregated — no personally identifiable information</li>
          </ul>
          <p><strong>Telegram bot</strong></p>
          <ul>
            <li>Your Telegram user ID and username (to track subscription tier and personal watchlist)</li>
            <li>Commands you send (to generate analysis responses)</li>
            <li>Portfolio positions you add (owner account only, stored locally in SQLite)</li>
            <li>Price alerts you set (stored locally, deleted when triggered or cancelled)</li>
          </ul>
          <p><strong>Discord</strong> — no Orion Alpha bot is currently deployed on Discord; the linked Discord server is a community space only. We do not collect any data from Discord beyond what Discord itself provides for any user joining a public server.</p>
          <p><strong>We do not collect</strong> passwords, payment card numbers, or government ID. Payments are handled manually via screenshot proof — we never see your banking credentials.</p>
        </div>

        <div className="privacy-section">
          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To deliver analysis results in response to your commands</li>
            <li>To enforce subscription tier limits (Free / Starter / Pro)</li>
            <li>To send auto-broadcast swing alerts to eligible subscribers</li>
            <li>To understand which features are used (via GA4 analytics)</li>
            <li>To improve the bot and website</li>
          </ul>
          <p>We do not use your data for advertising, profiling, or any purpose beyond operating Orion Alpha.</p>
        </div>

        <div className="privacy-section">
          <h2>4. Third-Party Services</h2>
          <ul>
            <li><strong>Google Analytics 4</strong> — website usage analytics. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>.</li>
            <li><strong>Telegram</strong> — bot platform. Messages are processed per <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">Telegram's Privacy Policy</a>.</li>
            <li><strong>Discord</strong> — community server only (no bot deployed). Membership is governed by <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer">Discord's Privacy Policy</a>.</li>
            <li><strong>Yahoo Finance (yfinance)</strong> — market data source. Data is delayed ~15 minutes. We do not share your identity with Yahoo Finance.</li>
            <li><strong>Google Gemini / Ollama</strong> — AI analysis (owner account only). Messages sent to AI agents may be processed by Google's API.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>5. Data Retention</h2>
          <ul>
            <li>Bot user data (Telegram ID, tier, watchlist, alerts) is retained while your account is active and deleted upon request</li>
            <li>GA4 analytics data is retained per Google's default retention settings (14 months)</li>
            <li>Subscription records are kept for billing reference</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>6. Your Rights</h2>
          <p>You may request deletion of your data at any time by contacting us via Telegram. We will delete your Telegram user ID, watchlist, alerts, and any stored preferences within 7 days of your request.</p>
          <p>To opt out of GA4 analytics, use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a> or enable "Do Not Track" in your browser settings.</p>
        </div>

        <div className="privacy-section">
          <h2>7. Cookies</h2>
          <p>This website uses one first-party cookie (<code>orion-theme</code>) to remember your dark/light mode preference. No tracking cookies are set by us directly. Google Analytics 4 may set cookies per Google's standard behavior.</p>
        </div>

        <div className="privacy-section">
          <h2>8. Changes to This Policy</h2>
          <p>We may update this policy as the service evolves. The "last updated" date at the top of this page reflects the most recent revision. Continued use of Orion Alpha after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div className="privacy-contact privacy-section">
          <h2>9. Contact</h2>
          <p>Questions about this policy? Reach us via <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener noreferrer">Telegram bot</a> or email at <a href="mailto:genta.prdna@gmail.com">genta.prdna@gmail.com</a>.</p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
