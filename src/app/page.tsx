"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Modular Components
import Hero from "@/features/landing/components/Hero";
import AudienceSection from "@/features/landing/components/AudienceSection";
import Features from "@/features/landing/components/Features";
import Pipeline from "@/features/landing/components/Pipeline";
import Methodology from "@/features/landing/components/Methodology";
import Advantages from "@/features/landing/components/Advantages";
import PricingCTA from "@/features/landing/components/PricingCTA";
import FinalCTA from "@/features/landing/components/FinalCTA";
import FeatureModal from "@/features/landing/components/FeatureModal";
import { useLanguage } from "@/store/LanguageContext";

// Config

export default function HomePage() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('orion-theme');
    if (!savedTheme) {
      const defaultTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', defaultTheme);
    } else {
      document.documentElement.setAttribute('data-theme', savedTheme);
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
          {t('trust').map((text: string, i: number) => (
            <span key={i} className="trust-pill" role="listitem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              {text}
            </span>
          ))}
        </div>

        <FinalCTA />
        <Footer />
      </div>

      <FeatureModal 
        activeModal={activeModal} 
        closeModal={closeModal} 
        featureData={activeModal ? t('modals')[activeModal] : null} 
      />
    </div>
  );
}
