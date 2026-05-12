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
        {/* 2. Live signal ticker — engine-alive feel */}
        <SignalTicker />
        {/* 3. Stats Bar */}
        <StatsBar />

        {/* 3. Powered-by strip — credibility */}
        <section className="built-on fade-up" aria-label="Integrations">
          <span className="built-on-label">Powered by</span>
          <ul className="built-on-row" role="list">
            <li className="built-on-item">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </li>
            <li className="built-on-item">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Discord
            </li>
            <li className="built-on-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="6" y1="20" x2="6" y2="13" />
                <line x1="12" y1="20" x2="12" y2="8" />
                <line x1="18" y1="20" x2="18" y2="4" />
              </svg>
              Stockbit
            </li>
            <li className="built-on-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21h18" />
                <path d="M5 21V8l7-5 7 5v13" />
                <path d="M9 21v-6h6v6" />
              </svg>
              IDX&nbsp;(BEI)
            </li>
          </ul>
        </section>

        {/* 4. Features Grid — top 4 featured + collapsible rest */}
        <Features openModal={openModal} />

        {/* 5. Proof — signals we actually shipped */}
        <section className="sample-signal-home fade-up" aria-labelledby="sample-signal-home-title">
          <div className="section-head">
            <span className="eyebrow">Receipts</span>
            <h2 id="sample-signal-home-title">Two signals we shipped</h2>
            <p>
              Auto-broadcast that lands in subscribers&rsquo; DMs, and a manual <code>/signal</code> query.
              What the engine returned. What the stock did.
            </p>
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
