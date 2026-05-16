"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/store/LanguageContext";

const CopyIcon = () => (
  <svg className="copy-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
);

interface StepCodeButtonProps {
  code: string;
  onCopy: (text: string) => void;
  copyTitle: string;
}

function StepCodeButton({ code, onCopy, copyTitle }: StepCodeButtonProps) {
  return (
    <button
      type="button"
      className="step-code"
      onClick={() => onCopy(code)}
      title={copyTitle}
    >
      {code}
      <CopyIcon />
    </button>
  );
}

export default function StartPage() {
  const { t } = useLanguage();
  const start = t('start');
  const [toastVisible, setToastVisible] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const copyTitle = t('start.copy_toast') === 'Disalin ke clipboard' ? 'Klik untuk salin' : 'Click to copy';

  const stats: { val_pre: string; val_accent: string; val_post: string; label: string }[] = start.stats || [];
  const audienceCards: { title: string; body: string }[] = start.audience?.cards || [];
  const steps: { title: string; body: string; code?: string; codes?: string[]; mock_lines?: string[]; hint?: string }[] = start.steps || [];
  const cmds: { name: string; tier: string; tier_class: string; desc: string }[] = start.commands?.items || [];
  const callout: string[] = start.free_callout?.items || [];

  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">
        {/*  ── Hero ──  */}
        <section className="start-hero">
          <div className="free-badge">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            {start.free_badge}
          </div>
          <h1>{start.hero.title_main}<br /><span className="accent">{start.hero.title_accent}</span></h1>
          <p>{start.hero.desc}</p>
        </section>

        {/*  ── Stat strip ──  */}
        <div className="stat-strip fade-up" role="list">
          {stats.map((s, i) => (
            <div key={i} className="stat-cell" role="listitem">
              <div className="stat-val">
                {s.val_pre}<span className="accent">{s.val_accent}</span>{s.val_post}
              </div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>

        {/*  ── Who is this for ──  */}
        <section className="audience-section fade-up">
          <h2>{start.audience.title_main}<span className="accent">{start.audience.title_accent}</span></h2>
          <p className="audience-sub">{start.audience.sub}</p>

          <div className="audience-grid stagger-in">
            {audienceCards.map((card, i) => (
              <div key={i} className="audience-card">
                <div className="audience-icon" aria-hidden="true">
                  {i === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
                  {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                  {i === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>}
                </div>
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/*  ── 3 Steps ──  */}
        <div className="steps fade-up">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-num-wrap">
                <div className="step-num">{i + 1}</div>
                {i < steps.length - 1 && <div className="step-connector"></div>}
              </div>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: step.body }} />

                {step.code && (
                  <>
                    <StepCodeButton code={step.code} onCopy={copyToClipboard} copyTitle={copyTitle} />
                    {step.hint && <span className="copy-hint">{step.hint}</span>}
                  </>
                )}

                {step.mock_lines && (
                  <div className="step-img">
                    <div className="mock-msg">
                      <span className="cmd">Orion Alpha</span><br />
                      {step.mock_lines.map((line, j) => (
                        <React.Fragment key={j}>
                          {line.split(/(\/\w+(?:\s\w+)?)/).map((part, k) =>
                            part.startsWith('/') ? <span key={k} className="cmd">{part}</span> : part
                          )}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {step.codes && (
                  <>
                    <div className="step-codes-stack">
                      {step.codes.map((c) => (
                        <StepCodeButton key={c} code={c} onCopy={copyToClipboard} copyTitle={copyTitle} />
                      ))}
                    </div>
                    {step.hint && <span className="copy-hint">{step.hint}</span>}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/*  ── Quick commands ──  */}
        <section className="commands-section fade-up">
          <span className="section-eyebrow">{start.commands.eyebrow}</span>
          <h2>{start.commands.title}</h2>
          <div className="cmd-grid">
            {cmds.map((cmd, i) => (
              <div key={i} className="cmd-card">
                <div className="cmd-name">{cmd.name} <span className={`cmd-tier ${cmd.tier_class}`}>{cmd.tier}</span></div>
                <div className="cmd-desc">{cmd.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/*  ── Free tier callout ──  */}
        <div className="free-callout fade-up">
          <h3>{start.free_callout.title}</h3>
          <ul className="free-list">
            {callout.map((item, i) => (
              <li key={i}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/*  ── Final CTA ──  */}
        <section className="start-cta fade-up">
          <h2>{start.cta.title}</h2>
          <p>{start.cta.body}</p>
          <div className="cta-buttons">
            <a href="https://t.me/orion_idx_bot" target="_blank" rel="noopener noreferrer" className="btn btn-telegram btn-shine">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              {start.cta.telegram}
            </a>
            <a href="/pricing" className="btn btn-secondary">{start.cta.pricing}</a>
          </div>
        </section>

        <Footer />
      </div>

      <div
        className={`copy-toast${toastVisible ? ' is-visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        {start.copy_toast}
      </div>
    </div>
  );
}
