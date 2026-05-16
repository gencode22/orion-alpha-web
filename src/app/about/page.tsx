"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/store/LanguageContext";

const outcomeIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>,
];

export default function AboutPage() {
  const { t } = useLanguage();
  const about = t('about');
  const principles: { num: string; title: string; body: string }[] = about.principles?.items || [];
  const outcomes: { title: string; body: string }[] = about.outcomes?.items || [];

  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        {/*  ── Hero ──  */}
        <section className="about-hero">
          <span className="about-eyebrow">{about.eyebrow}</span>

          {/*  Orion Constellation SVG  */}
          <div className="constellation-wrap">
            <svg className="constellation-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <line className="star-line" x1="80" y1="14" x2="48" y2="40"/>
              <line className="star-line" x1="80" y1="14" x2="112" y2="36"/>
              <line className="star-line" x1="48" y1="40" x2="58" y2="84"/>
              <line className="star-line" x1="112" y1="36" x2="80" y2="88"/>
              <line className="star-line" x1="58" y1="84" x2="80" y2="88"/>
              <line className="star-line" x1="80" y1="88" x2="102" y2="84"/>
              <line className="star-line" x1="58" y1="84" x2="60" y2="136"/>
              <line className="star-line" x1="102" y1="84" x2="110" y2="130"/>
              <line className="star-line star-belt" x1="58" y1="84" x2="80" y2="88"/>
              <line className="star-line star-belt" x1="80" y1="88" x2="102" y2="84"/>
              <circle className="star-dot" cx="80" cy="14" r="2.5"/>
              <circle className="star-dot bright" cx="48" cy="40" r="4"/>
              <circle className="star-dot" cx="112" cy="36" r="3"/>
              <circle className="star-dot" cx="58" cy="84" r="2.5"/>
              <circle className="star-dot" cx="80" cy="88" r="2"/>
              <circle className="star-dot" cx="102" cy="84" r="2.5"/>
              <circle className="star-dot" cx="60" cy="136" r="2.5"/>
              <circle className="star-dot bright" cx="110" cy="130" r="4"/>
            </svg>
          </div>

          <h1 className="display-text">{about.title_main}<br /><span className="accent">{about.title_accent}</span></h1>
          <p className="lede">{about.desc}</p>
        </section>

        {/*  ── The Name ──  */}
        <div className="name-grid">
          <div className="name-card glass-card">
            <div className="name-label">{about.name_orion.label}</div>
            <div className="name-word">{about.name_orion.word}</div>
            <div className="name-etymology">{about.name_orion.etymology}</div>
            <p>{about.name_orion.body}</p>
            <div className="card-glow"></div>
          </div>
          <div className="name-card glass-card gold-accent">
            <div className="name-label">{about.name_alpha.label}</div>
            <div className="name-word">{about.name_alpha.word}</div>
            <div className="name-etymology">{about.name_alpha.etymology}</div>
            <p>{about.name_alpha.body}</p>
            <div className="card-glow"></div>
          </div>
        </div>

        {/*  ── Principles ──  */}
        <section className="principles-section fade-up">
          <div className="section-header">
            <span className="section-eyebrow">{about.principles.eyebrow}</span>
            <h2>{about.principles.title}</h2>
          </div>
          <div className="principles-grid stagger-in">
            {principles.map((p, i) => (
              <div key={i} className="principle-card glass-card">
                <div className="principle-num">{p.num} ·</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </section>

        {/*  ── Outcomes ──  */}
        <section className="outcomes-section fade-up">
          <div className="section-header">
            <span className="section-eyebrow">{about.outcomes.eyebrow}</span>
            <h2>{about.outcomes.title}</h2>
          </div>
          <div className="outcomes-grid stagger-in">
            {outcomes.map((o, i) => (
              <div key={i} className="outcome-card glass-card">
                <div className="outcome-icon" aria-hidden="true">{outcomeIcons[i]}</div>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </section>

        {/*  ── CTA ──  */}
        <section className="about-cta fade-up glass-card">
          <h2 className="display-text">{about.cta.title}</h2>
          <p>{about.cta.body}</p>
          <div className="cta-buttons">
            <a href="https://t.me/orion_circle" target="_blank" rel="noopener noreferrer" className="btn btn-telegram btn-shine">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              {about.cta.telegram}
            </a>
            <a href="/pricing" className="btn btn-secondary">{about.cta.pricing}</a>
          </div>
          <div className="card-glow"></div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
