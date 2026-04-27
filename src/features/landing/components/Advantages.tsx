import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

export default function Advantages() {
  const { t } = useLanguage();

  const advantages = [
    { 
      title: t('advantages.cards.0.title'), 
      desc: t('advantages.cards.0.desc'),
      size: 'large' 
    },
    { 
      title: t('advantages.cards.1.title'), 
      desc: t('advantages.cards.1.desc'),
      size: 'small' 
    },
    { 
      title: t('advantages.cards.2.title'), 
      desc: t('advantages.cards.2.desc'),
      size: 'small' 
    },
    { 
      title: t('advantages.cards.3.title'), 
      desc: t('advantages.cards.3.desc'),
      size: 'medium' 
    },
    { 
      title: t('advantages.cards.4.title'), 
      desc: t('advantages.cards.4.desc'),
      size: 'medium' 
    },
    { 
      title: t('advantages.cards.5.title'), 
      desc: t('advantages.cards.5.desc'),
      size: 'medium' 
    },
  ];

  return (
    <section className="advantages fade-up" id="why">
      <div className="section-head">
        <span className="eyebrow">{t('advantages.eyebrow')}</span>
        <h2 className="display-text">{t('advantages.title')} <span className="accent">{t('advantages.title_accent')}</span></h2>
        <p dangerouslySetInnerHTML={{ __html: t('advantages.desc') }} />
      </div>

      <div className="advantages-bento">
        {advantages.map((adv, i) => (
          <div key={i} className={`advantage-card card-${adv.size} glass-card`}>
            <div className="card-content">
              <div className="advantage-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="text-content">
                <h4>{adv.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: adv.desc }} />
              </div>
            </div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
