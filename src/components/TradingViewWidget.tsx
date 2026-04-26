"use client";
import { useEffect, useRef } from 'react';

export default function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    const theme = document.documentElement.getAttribute('data-theme') || 'dark';

    const createWidget = () => {
      if (!(window as any).TradingView || !containerRef.current) return;
      containerRef.current.innerHTML = '';
      const innerDiv = document.createElement('div');
      innerDiv.id = 'tv_chart_inner';
      innerDiv.style.width = '100%';
      innerDiv.style.height = '100%';
      containerRef.current.appendChild(innerDiv);

      new (window as any).TradingView.widget({
        autosize: true,
        symbol: 'IDX:BBCA',
        interval: 'D',
        timezone: 'Asia/Jakarta',
        theme: theme === 'light' ? 'light' : 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: theme === 'light' ? '#f8fafc' : '#0d1117',
        enable_publishing: false,
        allow_symbol_change: true,
        save_image: false,
        container_id: 'tv_chart_inner',
      });
    };

    if ((window as any).TradingView) {
      createWidget();
    } else {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = createWidget;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '500px',
        display: 'block',
      }}
    />
  );
}
