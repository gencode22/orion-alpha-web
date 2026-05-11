"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function SignalPreview() {
  return (
    <section className="py-24 bg-surface/10 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="outline" className="border-primary/20 text-primary mb-4 uppercase tracking-widest">LIVE SIGNAL PREVIEW</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Execution <span className="text-primary">with Edge.</span></h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Every signal contains precise entry, stop loss, and take profit levels, 
              backed by multi-indicator confluence scoring.
            </p>
            <div className="flex flex-col gap-4 text-sm text-muted">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#00b4c4]" />
                <span>15 walkforward-proven swing setups tracked</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#00b4c4]" />
                <span>Real-time price & volume confluence</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <Card className="bg-surface border-border p-6 shadow-2xl relative overflow-hidden group">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tighter">ASII</h3>
                    <p className="text-[10px] text-muted uppercase tracking-widest">Astra International Tbk.</p>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    STRONG BUY
                  </Badge>
                </div>

                {/* Levels Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-3 rounded-lg bg-surface/50 border border-border">
                    <div className="text-[10px] text-muted uppercase mb-1">Entry Range</div>
                    <div className="text-lg font-bold tabular-nums">5,200 - 5,350</div>
                  </div>
                  <div className="p-3 rounded-lg bg-error/5 border border-error/10">
                    <div className="text-[10px] text-error/60 uppercase mb-1">Stop Loss</div>
                    <div className="text-lg font-bold tabular-nums text-error">5,050</div>
                  </div>
                  <div className="p-3 rounded-lg bg-success/5 border border-success/10">
                    <div className="text-[10px] text-success/60 uppercase mb-1">Take Profit 1</div>
                    <div className="text-lg font-bold tabular-nums text-success">5,800</div>
                  </div>
                  <div className="p-3 rounded-lg bg-success/5 border border-success/10">
                    <div className="text-[10px] text-success/60 uppercase mb-1">Take Profit 2</div>
                    <div className="text-lg font-bold tabular-nums text-success">6,200</div>
                  </div>
                </div>

                {/* Quality Metrics */}
                <div className="space-y-4 mb-6">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider">
                      <span className="text-muted">Confluence Score</span>
                      <span className="text-primary">85%</span>
                    </div>
                    <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-success w-[85%] shadow-[0_0_10px_rgba(0,180,196,0.5)]" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider">
                      <span className="text-muted">Setup Quality</span>
                      <span className="text-primary">High</span>
                    </div>
                    <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-success w-[92%] shadow-[0_0_10px_rgba(0,180,196,0.5)]" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-muted">
                    <TrendingUp className="h-3 w-3 text-primary" />
                    Setup: VCP Pullback
                  </div>
                  <div className="text-[10px] text-muted italic">
                    Signal preview · Live on Telegram/Discord
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all rounded-xl pointer-events-none" />
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
