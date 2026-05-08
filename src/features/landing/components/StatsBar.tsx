"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useLanguage } from "@/store/LanguageContext";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericMatch = value.match(/\d+/);
  const numericPart = numericMatch ? parseInt(numericMatch[0]) : null;

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && numericPart !== null) {
      animate(motionValue, numericPart, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, motionValue, numericPart]);

  if (numericPart === null) {
    return <span ref={ref}>{value}</span>;
  }

  const prefix = value.substring(0, numericMatch!.index);
  const suffix = value.substring(numericMatch!.index! + numericMatch![0].length);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const { t } = useLanguage();

  const stats = [
    { label: t('stats.tickers'), value: "800+" },
    { label: t('stats.setups'), value: "20" },
    { label: t('stats.indicators'), value: "12" },
    { label: t('stats.rating'), value: "A" },
  ];

  return (
    <section className="stats-bar fade-up" aria-label="Key statistics">
      <div className="stats-bar-grid">
        {stats.map((stat: { label: string; value: string }, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="stats-bar-item"
          >
            <div className="stats-bar-val">
              <Counter value={stat.value} />
            </div>
            <div className="stats-bar-lbl">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
