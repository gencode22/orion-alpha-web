import Link from 'next/link';
import { useLanguage } from '@/store/LanguageContext';

export default function MethodologySummary() {
  const { t } = useLanguage();

  return (
    <section className="method-summary fade-up" aria-label="Methodology summary">
      <div className="method-summary-inner glass-card">
        <div className="method-summary-content">
          <span className="eyebrow">{t('methodology.eyebrow')}</span>
          <p className="method-summary-text" dangerouslySetInnerHTML={{ __html: t('method_summary.text') || 'Every signal is built on a <strong>12-indicator weighted vote</strong>, regime-adaptive weights, multi-timeframe alignment, and ATR-anchored risk sizing. <strong>No black boxes.</strong>' }} />
        </div>
        <Link href="/about" className="method-summary-link">
          {t('method_summary.link') || 'See full methodology'}
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
        <div className="card-glow" />
      </div>
    </section>
  );
}
