"use client";

import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CrossIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

function FeatureItem({ html, on }: { html: string; on: boolean }) {
  return (
    <li className={on ? 'is-on' : 'is-off'}>
      {on ? <CheckIcon /> : <CrossIcon />}
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </li>
  );
}

export default function TierGrid() {
  const { t } = useLanguage();
  const free = t('pricing.tiers.free');
  const starter = t('pricing.tiers.starter');
  const pro = t('pricing.tiers.pro');

  return (
    <section className="tier-grid stagger-in" aria-label="Subscription plans">

      {/*  FREE  */}
      <article className="tier-card glass-card">
        <span className="tier-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/></svg>
        </span>
        <div className="tier-name">{free.name}</div>
        <div className="tier-tagline">{free.tagline}</div>

        <div className="tier-price">
          <span className="amount">{free.price}</span>
        </div>
        <div className="tier-sub">{free.sub}</div>

        <hr className="tier-divider" />

        <ul className="tier-features">
          {free.on.map((html: string, i: number) => <FeatureItem key={`on-${i}`} html={html} on />)}
          {free.off.map((html: string, i: number) => <FeatureItem key={`off-${i}`} html={html} on={false} />)}
        </ul>

        <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener noreferrer" className="tier-cta">
          {free.cta}
          <ArrowRightIcon />
        </a>
        <div className="card-glow"></div>
      </article>

      {/*  STARTER — highlighted  */}
      <article className="tier-card glass-card is-highlight">
        <div className="tier-ribbon">{starter.ribbon}</div>
        <span className="tier-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2"/></svg>
        </span>
        <div className="tier-name">{starter.name}</div>
        <div className="tier-tagline">{starter.tagline}</div>

        <div className="tier-price">
          <span className="cur">{starter.cur}</span>
          <span className="amount">{starter.amount}</span>
          <span className="period">{starter.period}</span>
        </div>
        <div className="tier-sub">{starter.sub}</div>

        <hr className="tier-divider" />

        <ul className="tier-features">
          {starter.on.map((html: string, i: number) => <FeatureItem key={`on-${i}`} html={html} on />)}
          {starter.off.map((html: string, i: number) => <FeatureItem key={`off-${i}`} html={html} on={false} />)}
        </ul>

        <a href="https://t.me/orion_idx_bot?start=upgrade_starter" target="_blank" rel="noopener noreferrer" className="tier-cta is-primary btn-shine">
          {starter.cta}
          <ArrowRightIcon />
        </a>
        <div className="tier-footnote">{starter.footnote}</div>
        <div className="card-glow"></div>
      </article>

      {/*  PRO  */}
      <article className="tier-card glass-card is-pro">
        <span className="tier-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l3-7 6 4 6-4 3 7M5 20h14"/><path d="M5 11l3 9h8l3-9"/></svg>
        </span>
        <div className="tier-name">{pro.name}</div>
        <div className="tier-tagline">{pro.tagline}</div>

        <div className="tier-price">
          <span className="cur">{pro.cur}</span>
          <span className="amount">{pro.amount}</span>
          <span className="period">{pro.period}</span>
        </div>
        <div className="tier-sub">{pro.sub}</div>

        <hr className="tier-divider" />

        <ul className="tier-features">
          {pro.on.map((html: string, i: number) => <FeatureItem key={`on-${i}`} html={html} on />)}
        </ul>

        <a href="https://t.me/orion_idx_bot?start=upgrade_pro" target="_blank" rel="noopener noreferrer" className="tier-cta btn-shine">
          {pro.cta}
          <ArrowRightIcon />
        </a>
        <div className="card-glow"></div>
      </article>
    </section>
  );
}
