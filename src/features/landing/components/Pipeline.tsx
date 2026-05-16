import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

interface PipelineStep {
  title: string;
  desc: string;
}

export default function Pipeline() {
  const { t } = useLanguage();
  const steps: PipelineStep[] = t('pipeline.steps');

  return (
    <section className="pipeline fade-up" id="how">
      <div className="section-head">
        <span className="eyebrow">{t('pipeline.eyebrow')}</span>
        <h2 className="display-text">{t('pipeline.title')}</h2>
        <p className="lede">{t('pipeline.desc')}</p>
      </div>

      <div className="pipeline-grid">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="pipeline-step glass-card">
              <h4>{step.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: step.desc.replace(/<code>(.*?)<\/code>/g, '<code>$1</code>') }} />
              <div className="card-glow"></div>
            </div>
            {idx < 3 && (
              <div className="pipeline-arrow" aria-hidden="true">
                <span className="pipeline-arrow-track">
                  <span className="pipeline-arrow-dot" />
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
