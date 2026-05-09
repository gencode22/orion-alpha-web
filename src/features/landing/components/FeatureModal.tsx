"use client";

import React, { useEffect, useRef } from 'react';

interface FeatureModalProps {
  activeModal: string | null;
  closeModal: () => void;
  featureData: any;
}

export default function FeatureModal({ activeModal, closeModal, featureData }: FeatureModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Focus management: capture trigger, focus close button on open, restore on close.
  useEffect(() => {
    if (!activeModal) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    return () => {
      previouslyFocused.current?.focus?.();
    };
  }, [activeModal]);

  // Trap Tab inside the dialog.
  useEffect(() => {
    if (!activeModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [activeModal]);

  if (!activeModal || !featureData) return null;

  return (
    <div
      className="modal-overlay is-open"
      onClick={(e) => { if ((e.target as HTMLElement).classList.contains('modal-overlay')) closeModal(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="feature-modal-title"
    >
      <div ref={dialogRef} className="modal-content glass-card" tabIndex={-1}>
        <button ref={closeBtnRef} className="modal-close" onClick={closeModal} aria-label="Close" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <span className="modal-eyebrow">{featureData.eyebrow}</span>
        <h2 id="feature-modal-title" className="display-text">{featureData.title}</h2>
        <p className="lede">{featureData.intro}</p>
        <div className="card-glow"></div>

        {featureData.sections.map((sec: any, i: number) => (
          <div className="modal-section" key={i}>
            <h3>{sec.title}</h3>
            <ul>
              {sec.items.map((item: string, j: number) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {featureData.cta && (
          <a href={featureData.cta.href} target="_blank" rel="noopener" className="modal-cta">
            {featureData.cta.label}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
