"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SocialProofBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="social-proof-bar fade-up"
      aria-label="Social proof"
    >
      <div className="social-proof-inner">
        <span className="social-proof-stars" aria-hidden="true">★★★★★</span>
        <span className="social-proof-text">Trusted by <strong>500+ IDX traders</strong></span>
        <span className="social-proof-sep" aria-hidden="true">·</span>
        <span className="social-proof-text">Walk-forward <strong>A-rated</strong></span>
        <span className="social-proof-sep" aria-hidden="true">·</span>
        <span className="social-proof-text">Gemini 2.5 Flash + Qwen 2.5 fallback</span>
        <span className="social-proof-sep" aria-hidden="true">·</span>
        <span className="social-proof-text"><strong>213</strong> automated tests</span>
      </div>
    </motion.section>
  );
}
