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
import { useLanguage } from "@/store/LanguageContext";

const audienceIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>,
];

export default function PricingPage() {
  const { t } = useLanguage();
  const audience = t('pricing.audience');
  const cards: { title: string; desc: string }[] = audience.cards || [];

  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        <PricingHero />
        <TierGrid />

        <section className="audience-section fade-up" aria-labelledby="audience-title">
          <div className="section-head">
            <span className="eyebrow">{audience.eyebrow}</span>
            <h2 id="audience-title" className="display-text">
              {audience.title_main}<em>{audience.title_italic}</em>
            </h2>
            <p className="lede">{audience.desc}</p>
          </div>
          <div className="audience-grid stagger-in">
            {cards.map((card, i) => (
              <div key={i} className="audience-card glass-card">
                <div className="audience-icon" aria-hidden="true">{audienceIcons[i]}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <div className="card-glow"></div>
              </div>
            ))}
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
