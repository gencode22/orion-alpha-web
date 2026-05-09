"use client";

import React from 'react';
import { useLanguage } from '@/store/LanguageContext';

const CheckCell = ({ label }: { label: string }) => (
  <span className="check-icon" aria-label={label}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </span>
);

const CrossCell = ({ label }: { label: string }) => (
  <span className="cross-icon" aria-label={label}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  </span>
);

function Cell({ value, availableLabel, naLabel }: { value: string; availableLabel: string; naLabel: string }) {
  if (value === 'check') return <CheckCell label={availableLabel} />;
  if (value === 'cross') return <CrossCell label={naLabel} />;
  return <>{value}</>;
}

interface CompareRow {
  cat?: string;
  label?: string;
  free?: string;
  starter?: string;
  pro?: string;
}

export default function CompareSection() {
  const { t, lang } = useLanguage();
  const compare = t('pricing.compare');
  const rows: CompareRow[] = compare.rows || [];
  const availableLabel = lang === 'id' ? 'Tersedia' : 'Available';
  const naLabel = lang === 'id' ? 'Tidak tersedia' : 'Not available';

  return (
    <section className="compare-section fade-up" aria-labelledby="compare-title">
      <div className="section-head">
        <span className="eyebrow">{compare.eyebrow}</span>
        <h2 id="compare-title">{compare.title}</h2>
        <p>{compare.desc}</p>
      </div>

      <div className="compare-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col">{compare.headers.feature}</th>
              <th scope="col">{compare.headers.free}<small>{compare.headers.free_price}</small></th>
              <th scope="col" className="is-highlight">{compare.headers.starter}<small>{compare.headers.starter_price}</small></th>
              <th scope="col">{compare.headers.pro}<small>{compare.headers.pro_price}</small></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              if (row.cat) {
                return (
                  <tr key={i} className="cat-row">
                    <td colSpan={4}>{compare.categories[row.cat]}</td>
                  </tr>
                );
              }
              return (
                <tr key={i}>
                  <td dangerouslySetInnerHTML={{ __html: row.label || '' }} />
                  <td><Cell value={row.free!} availableLabel={availableLabel} naLabel={naLabel} /></td>
                  <td><Cell value={row.starter!} availableLabel={availableLabel} naLabel={naLabel} /></td>
                  <td><Cell value={row.pro!} availableLabel={availableLabel} naLabel={naLabel} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
