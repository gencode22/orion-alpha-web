import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

export default function Pipeline() {
  const { t } = useLanguage();

  return (
    <section className="pipeline fade-up" id="how">
      <div className="section-head">
        <span className="eyebrow">{t('pipeline.eyebrow')}</span>
        <h2 className="display-text">{t('pipeline.title')}</h2>
        <p className="lede">{t('pipeline.desc')}</p>
      </div>

      <div className="pipeline-grid">
        {t('pipeline.steps').map((step: any, idx: number) => (
          <React.Fragment key={idx}>
            <div className="pipeline-step glass-card">
              <h4>{step.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: step.desc.replace(/<code>(.*?)<\/code>/g, '<code>$1</code>') }} />
              <div className="card-glow"></div>
            </div>
            {idx < 3 && (
              <div className="pipeline-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
