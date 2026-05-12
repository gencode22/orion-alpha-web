"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      el.style.setProperty('--cursor-x', `${x}px`);
      el.style.setProperty('--cursor-y', `${y}px`);
      rafId = 0;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(apply);
    };

    el.style.opacity = '1';
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
