"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Modular Components
import Hero from "@/features/landing/components/Hero";
import SignalTicker from "@/features/landing/components/SignalTicker";
import StatsBar from "@/features/landing/components/StatsBar";
import Features from "@/features/landing/components/Features";
import Pipeline from "@/features/landing/components/Pipeline";
import PricingCTA from "@/features/landing/components/PricingCTA";
import FinalCTA from "@/features/landing/components/FinalCTA";
import FeatureModal from "@/features/landing/components/FeatureModal";
import { SampleSignals } from "@/features/sample-signal/SampleSignals";
import { useLanguage } from "@/store/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (key: string) => {
    setActiveModal(key);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

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

  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Live signal ticker — engine-alive feel */}
        <SignalTicker />
        {/* 3. Stats Bar */}
        <StatsBar />

        {/* 4. Features Grid — top 4 featured + collapsible rest */}
        <Features openModal={openModal} />

        {/* 5. Proof — signals we actually shipped */}
        <section className="sample-signal-home fade-up" aria-labelledby="sample-signal-home-title">
          <div className="section-head">
            <span className="eyebrow">{t('proof.eyebrow')}</span>
            <h2 id="sample-signal-home-title">{t('proof.title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('proof.desc') }} />
            <p className="sample-signal-illustrative">{t('proof.illustrative')}</p>
          </div>
          <SampleSignals variant="home" />
        </section>

        {/* 6. How It Works (4-stage pipeline) */}
        <Pipeline />
        {/* 7. Pricing inline Free vs Starter */}
        <PricingCTA />

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
