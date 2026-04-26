import React from 'react';

interface FeatureModalProps {
  activeModal: string | null;
  closeModal: () => void;
  featureData: any;
}

export default function FeatureModal({ activeModal, closeModal, featureData }: FeatureModalProps) {
  if (!activeModal || !featureData) return null;

  return (
    <div 
      className={`modal-overlay ${activeModal ? 'is-open' : ''}`} 
      onClick={(e) => { if ((e.target as HTMLElement).classList.contains('modal-overlay')) closeModal(); }} 
      role="dialog" 
      aria-modal="true" 
      aria-hidden={!activeModal}
    >
      <div className="modal-content" tabIndex={-1}>
        <button className="modal-close" onClick={closeModal} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <span className="modal-eyebrow">{featureData.eyebrow}</span>
        <h2>{featureData.title}</h2>
        <p>{featureData.intro}</p>
        
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        )}
      </div>
    </div>
  );
}
