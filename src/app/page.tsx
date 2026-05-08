"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Modular Components
import Hero from "@/features/landing/components/Hero";
import StatsBar from "@/features/landing/components/StatsBar";
import Features from "@/features/landing/components/Features";
import Pipeline from "@/features/landing/components/Pipeline";
import Advantages from "@/features/landing/components/Advantages";
import PricingCTA from "@/features/landing/components/PricingCTA";
import FinalCTA from "@/features/landing/components/FinalCTA";
import FeatureModal from "@/features/landing/components/FeatureModal";
import { useLanguage } from "@/store/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
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
        {/* 1. Hero */}
        <Hero />
        {/* 2. Stats Bar */}
        <StatsBar />
        {/* 4. Features Grid — top 4 featured + collapsible rest */}
        <Features openModal={openModal} />
        {/* 5. How It Works (4-stage pipeline) */}
        <Pipeline />
        {/* Why Orion Alpha */}
        <Advantages />
        {/* 6. Pricing inline Free vs Pro */}
        <PricingCTA />

        {/* Trust strip */}
        <section className="trust-strip-features fade-up" role="list" aria-label="Trust indicators">
          {t('trust').map((text: string, i: number) => (
            <span key={i} className="trust-pill" role="listitem">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              {text}
            </span>
          ))}
        </section>

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
