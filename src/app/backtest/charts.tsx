"use client";

import React, { useMemo } from "react";
import { mergedSetups, mergedStocks } from "./merged";

const BAR_COLOR = "#22d3ee";        // cyan-400
const BAR_GLOW = "rgba(34, 211, 238, 0.45)";
const BAR_NEG = "#f87171";          // red-400
const BAR_NEG_GLOW = "rgba(248, 113, 113, 0.4)";
const AXIS = "rgba(255, 255, 255, 0.18)";
const AXIS_TEXT = "rgba(255, 255, 255, 0.55)";
const GRID = "rgba(255, 255, 255, 0.045)";

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="bt-chart-card">
      <figcaption className="bt-chart-header">
        <div>
          <span className="bt-chart-title">{title}</span>
          {subtitle && <span className="bt-chart-subtitle">{subtitle}</span>}
        </div>
      </figcaption>
      <div className="bt-chart-body">{children}</div>
    </figure>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Per-Setup single bar chart (Expectancy OR Winrate)
   ───────────────────────────────────────────────────────────────────────── */

interface PerSetupChartProps {
  metric: "exp" | "wr";
}

export function PerSetupChart({ metric }: PerSetupChartProps) {
  const rows = useMemo(() => {
    return mergedSetups().map((r) => ({
      setup: r.setup,
      value: metric === "exp" ? r.exp : r.wr,
    }));
  }, [metric]);

  const allVals = rows.map((r) => r.value);
  const dataMax = Math.max(...allVals);
  const dataMin = Math.min(...allVals, 0);
  const yMax = metric === "wr" ? 80 : Math.ceil(dataMax / 5) * 5 + 5;
  const yMin = metric === "wr" ? 0 : Math.min(0, Math.floor(dataMin / 5) * 5);
  const tickStep = metric === "wr" ? 20 : yMax >= 30 ? 10 : 5;
  const ticks: number[] = [];
  for (let t = yMin; t <= yMax; t += tickStep) ticks.push(t);

  const W = 1240;
  const H = 420;
  const padL = 50;
  const padR = 20;
  const padT = 22;
  const padB = 96;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const groupW = plotW / rows.length;
  const barW = Math.min(28, groupW - 14);
  const yScale = (v: number) => padT + plotH - ((v - yMin) / (yMax - yMin)) * plotH;
  const zeroY = yScale(0);
  const title = metric === "exp" ? "Per-setup expectancy" : "Per-setup win rate";
  const fmt = (v: number) =>
    metric === "exp" ? `${v > 0 ? "+" : ""}${v.toFixed(1)}` : v.toFixed(1);

  return (
    <ChartCard title={title} subtitle={`${rows.length} setups · ${metric === "exp" ? "expectancy %" : "win rate %"}`}>
      <div className="bt-chart-svg-wrap">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          role="img"
          aria-label={`${title} bar chart`}
          className="bt-chart-svg"
        >
          <defs>
            <linearGradient id="bar-pos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={BAR_COLOR} stopOpacity="0.95" />
              <stop offset="100%" stopColor={BAR_COLOR} stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="bar-neg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={BAR_NEG} stopOpacity="0.75" />
              <stop offset="100%" stopColor={BAR_NEG} stopOpacity="0.95" />
            </linearGradient>
          </defs>
          {/* gridlines */}
          {ticks.map((t) => {
            const y = yScale(t);
            return (
              <g key={`tick-${t}`}>
                <line
                  x1={padL}
                  x2={W - padR}
                  y1={y}
                  y2={y}
                  stroke={GRID}
                  strokeDasharray={t === 0 ? "0" : "2 4"}
                />
                <text
                  x={padL - 8}
                  y={y + 3.5}
                  fill={AXIS_TEXT}
                  fontSize="10.5"
                  textAnchor="end"
                  fontFamily="var(--mono)"
                >
                  {t}%
                </text>
              </g>
            );
          })}
          {yMin < 0 && (
            <line x1={padL} x2={W - padR} y1={zeroY} y2={zeroY} stroke={AXIS} strokeWidth="1" />
          )}
          {/* bars + labels */}
          {rows.map((r, i) => {
            const cx = padL + groupW * i + groupW / 2;
            const x = cx - barW / 2;
            const top = yScale(Math.max(r.value, 0));
            const bottom = yScale(Math.min(r.value, 0));
            const h = Math.max(1, bottom - top);
            const isPos = r.value >= 0;
            const fill = isPos ? "url(#bar-pos)" : "url(#bar-neg)";
            const valueLabelY = isPos ? top - 6 : bottom + 14;
            return (
              <g key={r.setup} className="bt-bar-group">
                <rect
                  x={x}
                  y={top}
                  width={barW}
                  height={h}
                  rx={3}
                  fill={fill}
                  className="bt-svg-bar"
                  style={{
                    animationDelay: `${i * 0.04}s`,
                    transformOrigin: `${x}px ${zeroY}px`,
                    filter: `drop-shadow(0 0 8px ${isPos ? BAR_GLOW : BAR_NEG_GLOW})`,
                  }}
                >
                  <title>{`${r.setup}: ${fmt(r.value)}%`}</title>
                </rect>
                <text
                  x={cx}
                  y={valueLabelY}
                  fill={isPos ? BAR_COLOR : BAR_NEG}
                  fontSize="10.5"
                  textAnchor="middle"
                  fontFamily="var(--mono)"
                  fontWeight="700"
                  className="bt-svg-value-label"
                  style={{ animationDelay: `${i * 0.04 + 0.4}s` }}
                >
                  {fmt(r.value)}
                </text>
                <g transform={`translate(${cx}, ${padT + plotH + 14})`}>
                  <text
                    fill={AXIS_TEXT}
                    fontSize="11"
                    textAnchor="end"
                    fontFamily="var(--mono)"
                    transform="rotate(-32)"
                  >
                    {r.setup}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    </ChartCard>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Top-10 stock return horizontal bars (merged universe)
   ───────────────────────────────────────────────────────────────────────── */

export function Top10StockChart() {
  const rows = useMemo(() => mergedStocks().slice(0, 10), []);
  const maxRet = Math.max(...rows.map((r) => r.totRet));

  return (
    <ChartCard
      title="Top 10 performers"
      subtitle="3-year total return % — combined watchlist"
    >
      <div className="bt-top10">
        {rows.map((r, i) => {
          const pct = Math.max(2, Math.round((r.totRet / maxRet) * 100));
          const delay = i * 60;
          return (
            <div className="bt-top10-row" key={r.code}>
              <span className="bt-top10-rank">{String(i + 1).padStart(2, "0")}</span>
              <span className="bt-top10-code">{r.code}</span>
              <div className="bt-top10-track">
                <div
                  className="bt-top10-bar"
                  style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${BAR_COLOR} 0%, ${BAR_COLOR}99 100%)`,
                    boxShadow: `0 0 14px ${BAR_GLOW}`,
                    animationDelay: `${delay}ms`,
                  }}
                />
              </div>
              <span className="bt-top10-val">+{r.totRet.toLocaleString()}%</span>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
}
