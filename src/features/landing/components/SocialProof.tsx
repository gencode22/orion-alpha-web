"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full bg-surface/50 border-y border-border py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[10px] md:text-xs text-muted uppercase tracking-widest font-medium">
          <div className="flex items-center gap-1">
            <span className="text-primary">★★★★★</span>
            <span>Trusted by 500+ IDX traders</span>
          </div>
          <div className="h-1 w-1 bg-border rounded-full hidden md:block" />
          <span>Walk-forward A rated</span>
          <div className="h-1 w-1 bg-border rounded-full hidden md:block" />
          <span>Gemini 2.5 Flash + Qwen 2.5 fallback</span>
          <div className="h-1 w-1 bg-border rounded-full hidden md:block" />
          <span>213 automated tests</span>
        </div>
      </div>
    </motion.div>
  );
}
