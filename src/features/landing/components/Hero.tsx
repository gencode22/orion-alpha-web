"use client";

import Link from 'next/link';
import { useLanguage } from '@/store/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="intro hero-cascade">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-badge-wrap" data-cascade="0">
            <span className="eyebrow-badge">{t('hero.badge')}</span>
          </div>
          <h1 className="display-text" data-cascade="1">
            {t('hero.title')}<br />
            <span className="accent accent-animate">{t('hero.title_accent')}</span>
          </h1>
          <p data-cascade="2" dangerouslySetInnerHTML={{ __html: t('hero.desc') }} />
          <div className="intro-ctas" data-cascade="3">
            <a
              href="https://t.me/orion_idx_bot"
              target="_blank"
              rel="noopener"
              className="btn btn-telegram btn-shine btn-magnetic btn-pulse"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              {t('hero.ctas.telegram')}
            </a>
            <Link href="/docs" className="btn btn-secondary btn-magnetic">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              {t('hero.ctas.docs')}
            </Link>
          </div>
          <p className="hero-micro" data-cascade="3">
            {t('hero.micro') || '3 signals/day free · No credit card · No expiry'}
          </p>
        </div>

        <aside className="hero-preview" data-cascade="4" aria-label="Example signal alert">
          <div className="hero-preview-card">
            <div className="hero-preview-header">
              <span className="hero-preview-pulse" aria-hidden="true"></span>
              <span className="hero-preview-tag">Sample alert · Telegram</span>
            </div>
            <div className="hero-preview-ticker">TLKM</div>
            <div className="hero-preview-meta">
              <div className="hero-preview-setup">
                <span className="hero-preview-dot" aria-hidden="true">●</span>
                Pullback-Uptrend
              </div>
              <div className="hero-preview-q" aria-label="Quality score 72 out of 100">
                <svg className="hero-preview-q-ring" viewBox="0 0 36 36" aria-hidden="true">
                  <circle className="hero-preview-q-ring-track" cx="18" cy="18" r="14" />
                  <circle className="hero-preview-q-ring-fill" cx="18" cy="18" r="14" />
                </svg>
                <span className="hero-preview-q-num">72</span>
              </div>
            </div>
            <div className="hero-preview-levels" role="group" aria-label="Trade levels">
              <div className="hero-preview-row">
                <span className="hero-preview-label">Entry</span>
                <span className="hero-preview-val">Rp 3.150</span>
                <span className="hero-preview-pct" aria-hidden="true"></span>
              </div>
              <div className="hero-preview-row">
                <span className="hero-preview-label">SL</span>
                <span className="hero-preview-val">Rp 2.961</span>
                <span className="hero-preview-pct neg">−6.0%</span>
              </div>
              <div className="hero-preview-row is-tp">
                <span className="hero-preview-label">TP1</span>
                <span className="hero-preview-val">Rp 3.535</span>
                <span className="hero-preview-pct pos">+12.2%</span>
              </div>
              <div className="hero-preview-row">
                <span className="hero-preview-label">R:R</span>
                <span className="hero-preview-val">1 : 2.0</span>
                <span className="hero-preview-pct" aria-hidden="true"></span>
              </div>
            </div>
            <div className="hero-preview-footnote">Auto-broadcast · 08 May · 09:00 WIB</div>
          </div>
        </aside>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span className="hero-scroll-cue-line" />
      </div>
    </section>
  );
}
