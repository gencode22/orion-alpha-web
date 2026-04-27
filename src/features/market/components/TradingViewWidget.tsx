"use client";
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptId = 'tradingview-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initWidget = () => {
      if (window.TradingView && containerRef.current) {
        containerRef.current.innerHTML = '';
        const widgetId = `tv-widget-${Math.random().toString(36).substring(2, 9)}`;
        containerRef.current.id = widgetId;

        const theme = document.documentElement.getAttribute('data-theme') || 'dark';

        new window.TradingView.widget({
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
          container_id: widgetId,
        });
        setIsLoaded(true);
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else if (window.TradingView) {
      initWidget();
    } else {
      script.onload = initWidget;
    }

    // Handle theme changes
    const observer = new MutationObserver(() => {
      initWidget();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ height: '400px', width: '100%', position: 'relative' }}>
      <div 
        ref={containerRef} 
        style={{ height: '100%', width: '100%' }}
      />
      {!isLoaded && (
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'var(--bg2)',
          color: 'var(--muted)',
          fontSize: '12px'
        }}>
          Loading Chart...
        </div>
      )}
    </div>
  );
}
