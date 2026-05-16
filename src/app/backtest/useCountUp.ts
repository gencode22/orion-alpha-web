"use client";

import { useEffect, useRef, useState } from "react";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function useCountUp(target: number, durationMs = 1100, decimals = 0): number {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const fromRef = useRef(0);

  useEffect(() => {
    // useEffect already runs client-only — no `typeof window` guard needed.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Snap to target without animation. Defer via rAF so setValue
      // happens in a callback rather than directly in the effect body.
      rafRef.current = requestAnimationFrame(() => setValue(target));
      return () => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      };
    }

    fromRef.current = value;
    startRef.current = null;

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = easeOutExpo(t);
      const next = fromRef.current + (target - fromRef.current) * eased;
      setValue(decimals > 0 ? Number(next.toFixed(decimals)) : Math.round(next));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // intentionally exclude `value` so we don't restart each tick
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durationMs, decimals]);

  return value;
}
