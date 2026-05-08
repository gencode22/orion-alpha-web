import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

interface FeaturesProps {
  openModal: (key: string) => void;
}

export default function Features({ openModal }: FeaturesProps) {
  const { t } = useLanguage();

  // Top 4 — featured large cards (per Improvement Guide §4)
  const featuredModules = [
    {
      id: 'setups',
      title: t('features.cards.setups.title'),
      desc: t('features.cards.setups.desc'),
      core: true,
      icon: <polyline points="3 17 9 11 13 15 21 7"></polyline>,
    },
    {
      id: 'confluence',
      title: t('features.cards.confluence.title'),
      desc: t('features.cards.confluence.desc'),
      icon: <><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></>,
    },
    {
      id: 'alerts',
      title: t('features.cards.alerts.title'),
      desc: t('features.cards.alerts.desc'),
      icon: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></>,
    },
    {
      id: 'portfolio',
      title: t('features.cards.portfolio.title'),
      desc: t('features.cards.portfolio.desc'),
      icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></>,
    },
  ];

  // Remaining 6 — compact list
  const otherModules = [
    { id: 'ai', title: t('features.cards.ai.title'), icon: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></> },
    { id: 'fundamental', title: t('features.cards.fundamental.title'), icon: <><path d="M21 21H4.6c-.6 0-.6 0-.6-.6V3"></path><path d="M7 14l4-4 4 4 5-5"></path></> },
    { id: 'backtest', title: t('features.cards.backtest.title'), icon: <><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></> },
    { id: 'news', title: t('features.cards.news.title'), icon: <><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8m8-4h-8m4-4H8"></path></> },
    { id: 'charts', title: t('features.cards.charts.title'), icon: <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></> },
    { id: 'discord', title: t('features.cards.discord.title'), icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></>, link: 'https://discord.gg/rSAPFDgewe' },
  ];

  return (
    <section className="features fade-up" id="features">
      <div className="section-head">
        <span className="eyebrow">{t('features.eyebrow')}</span>
        <h2 className="display-text">{t('features.title')} <span className="accent">{t('features.title_accent')}</span></h2>
        <p className="lede">{t('features.desc')}</p>
      </div>

      {/* Top 4 featured — large cards */}
      <div className="feature-grid stagger-in">
        {featuredModules.map((f) => (
          <div key={f.id} className="feature-card-wrapper">
            {f.core && (
              <div className="feature-badge">
                <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                {t('common.core_feature')}
              </div>
            )}
            <a
              href="#"
              className={`feature-card glass-card${f.core ? ' is-core' : ''}`}
              onClick={(e) => { e.preventDefault(); openModal(f.id); }}
              aria-label={`Read more about ${f.title}`}
            >
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: f.desc }} />
              <span className="feature-card-cta btn-shine">
                {t('common.learn_more') || 'Read detail'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
              <div className="card-glow"></div>
            </a>
          </div>
        ))}
      </div>

      {/* Remaining modules — compact list */}
      <div className="feature-compact-list">
        <p className="feature-compact-label">{t('features.also_included') || 'Also included:'}</p>
        <div className="feature-compact-grid">
          {otherModules.map((f) => (
            f.link ? (
              <a
                key={f.id}
                href={f.link}
                target="_blank"
                rel="noopener"
                className="feature-compact-item"
                aria-label={`Join our Discord community`}
              >
                <span className="feature-compact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </span>
                <span>{f.title}</span>
                <svg className="feature-compact-arrow" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            ) : (
              <button
                key={f.id}
                className="feature-compact-item"
                onClick={() => openModal(f.id)}
                aria-label={`Read more about ${f.title}`}
              >
                <span className="feature-compact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </span>
                <span>{f.title}</span>
                <svg className="feature-compact-arrow" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
