"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/features/pricing/components/PricingHero";
import TierGrid from "@/features/pricing/components/TierGrid";
import CompareSection from "@/features/pricing/components/CompareSection";
import FAQSection from "@/features/pricing/components/FAQSection";
import RiskBlock from "@/features/pricing/components/RiskBlock";
import PricingFinalCTA from "@/features/pricing/components/PricingFinalCTA";

export default function PricingPage() {
  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        <PricingHero />
        <TierGrid />
        
        {/* Audience section - keep inline for now or move to shared if needed */}
        <section className="audience-section fade-up" aria-labelledby="audience-title">
          <div className="section-head">
            <span className="eyebrow">Who Orion is built for</span>
            <h2 id="audience-title" className="display-text">Made for traders <em>who want a system, not noise</em></h2>
            <p className="lede">Whether you're learning your first setup or trading systematically for years, Orion meets you where you are.</p>
          </div>
          <div className="audience-grid">
            <div className="audience-card glass-card">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h4>Beginners who want a real system</h4>
              <p>No more FOMO trades or group signal roulette. Orion explains every score, every setup, every level — so you learn while the bot does the heavy lifting.</p>
              <div className="card-glow"></div>
            </div>
            <div className="audience-card glass-card">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Working professionals</h4>
              <p>You don't have 3 hours a day to chart manually. Get high-conviction setups in 30 seconds — entry, stop, target — straight from Telegram on your lunch break.</p>
              <div className="card-glow"></div>
            </div>
            <div className="audience-card glass-card">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
              </div>
              <h4>Data-driven retail traders</h4>
              <p>Open methodology. Decomposable scores. Walk-forward backtests. Every signal traceable to its inputs — built for traders who refuse to trust black boxes.</p>
              <div className="card-glow"></div>
            </div>
          </div>
        </section>

        <CompareSection />
        <FAQSection />
        <RiskBlock />
        <PricingFinalCTA />

        <Footer />
      </div>
    </div>
  );
}
