"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Modular Components
import Hero from "@/components/landing/Hero";
import AudienceSection from "@/components/landing/AudienceSection";
import Features from "@/components/landing/Features";
import Pipeline from "@/components/landing/Pipeline";
import Methodology from "@/components/landing/Methodology";
import Advantages from "@/components/landing/Advantages";
import PricingCTA from "@/components/landing/PricingCTA";
import FinalCTA from "@/components/landing/FinalCTA";
import FeatureModal from "@/components/landing/FeatureModal";

// Config
import { FEATURE_MODALS } from "@/config/features";

export default function FeaturesPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    // Theme initialization
    const t = localStorage.getItem('orion-theme');
    if (!t) {
      const defaultTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', defaultTheme);
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }

    // Modal ESC handler
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = ''; // Reset on unmount
    };
  }, []);

  const openModal = (key: string) => {
    setActiveModal(key);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        <Hero />
        <AudienceSection />
        <Features openModal={openModal} />
        <Pipeline />
        <Methodology />
        <Advantages />
        <PricingCTA />

        {/* Trust strip */}
        <div className="trust-strip-features fade-up" role="list">
          <span className="trust-pill" role="listitem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Built by a trader, for traders
          </span>
          <span className="trust-pill" role="listitem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Open methodology — no black box
          </span>
          <span className="trust-pill" role="listitem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Walk-forward A rated
          </span>
          <span className="trust-pill" role="listitem">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            161 automated tests
          </span>
        </div>

        <FinalCTA />
        <Footer />
      </div>

      <FeatureModal 
        activeModal={activeModal} 
        closeModal={closeModal} 
        featureData={activeModal ? FEATURE_MODALS[activeModal] : null} 
      />
    </div>
  );
}
