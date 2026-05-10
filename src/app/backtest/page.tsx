"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  type StockRow,
  type SetupRow,
  type WalkforwardRow,
  type Verdict,
} from "./data";
import { mergedSetups, mergedStocks, mergedWalkforward, mergedHeadline } from "./merged";
import { useCountUp } from "./useCountUp";
import { PerSetupChart, Top10StockChart } from "./charts";
import "@/styles/docs.css";
import "@/styles/backtest.css";

const STOCK_PAGE_SIZE = 10;

const fmtSigned = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(2)}`;
const fmtPF = (pf: number) => (pf >= 999 ? "∞" : pf.toFixed(2));

/** Strict sign-based coloring: any positive value → green, any negative → red. */
const signClass = (n: number) =>
  n > 0 ? "bt-num-pos" : n < 0 ? "bt-num-neg" : "bt-num-dim";

/** WR has no sign — split at break-even (50%). */
const wrClass = (wr: number) => (wr >= 50 ? "bt-num-pos" : "bt-num-neg");

/** PF has no sign — split at break-even (1.0). */
const pfClass = (pf: number) => (pf >= 1 ? "bt-num-pos" : "bt-num-neg");

/** sqrt-scaled width % so 5048 doesn't visually dwarf 200, but ordering stays correct. */
const totRetBarWidth = (ret: number, maxAbs: number): number => {
  if (maxAbs <= 0) return 0;
  const v = Math.min(Math.abs(ret), maxAbs);
  return Math.max(2, Math.round((Math.sqrt(v) / Math.sqrt(maxAbs)) * 100));
};

function SetupTable({ rows }: { rows: SetupRow[] }) {
  return (
    <div className="bt-table-wrap">
      <table className="bt-table">
        <thead>
          <tr>
            <th>Setup</th>
            <th>N</th>
            <th>WR%</th>
            <th>AvgW</th>
            <th>AvgL</th>
            <th>Exp%</th>
            <th>PF</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.setup}>
              <td className="bt-cell-setup">{r.setup}</td>
              <td className="bt-num-mute">{r.n}</td>
              <td className={wrClass(r.wr)}>{r.wr.toFixed(1)}</td>
              <td className="bt-num-pos">{fmtSigned(r.avgW)}</td>
              <td className="bt-num-neg">{r.avgL.toFixed(2)}</td>
              <td className={signClass(r.exp)}>{fmtSigned(r.exp)}</td>
              <td className={pfClass(r.pf)}>{fmtPF(r.pf)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StockTable({ rows }: { rows: StockRow[] }) {
  const maxAbsRet = Math.max(...rows.map((r) => Math.abs(r.totRet)), 1);
  return (
    <div className="bt-table-wrap">
      <table className="bt-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>N</th>
            <th>WR%</th>
            <th>Exp%</th>
            <th>PF</th>
            <th>TotRet% (3y)</th>
            <th>MaxDD%</th>
            <th>Hold</th>
            <th style={{ textAlign: "left" }}>Top Setup</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const barW = totRetBarWidth(r.totRet, maxAbsRet);
            return (
              <tr key={r.code}>
                <td>{r.code}</td>
                <td className="bt-num-mute">{r.n}</td>
                <td className={wrClass(r.wr)}>{r.wr.toFixed(1)}</td>
                <td className={signClass(r.exp)}>{fmtSigned(r.exp)}</td>
                <td className={pfClass(r.pf)}>{fmtPF(r.pf)}</td>
                <td
                  className={`bt-totret-cell ${r.totRet < 0 ? "neg" : ""} ${signClass(r.totRet)}`}
                  style={{ ["--bar-w" as string]: `${barW}%` }}
                >
                  {r.totRet > 0 ? "+" : ""}{r.totRet}
                </td>
                <td className="bt-num-neg">{r.maxDD.toFixed(1)}</td>
                <td className="bt-num-mute">{r.hold.toFixed(1)}</td>
                <td className="bt-cell-setup">{r.topSetup}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function WalkforwardTable({ rows }: { rows: WalkforwardRow[] }) {
  return (
    <div className="bt-table-wrap">
      <table className="bt-table">
        <thead>
          <tr>
            <th>Setup</th>
            <th>N</th>
            <th>Folds</th>
            <th>WR%</th>
            <th>Exp%</th>
            <th>PF</th>
            <th>WR±</th>
            <th>Exp±</th>
            <th style={{ textAlign: "left" }}>Verdict</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.setup}>
              <td className="bt-cell-setup">{r.setup}</td>
              <td className="bt-num-mute">{r.n}</td>
              <td className="bt-num-mute">{r.folds}</td>
              <td className={wrClass(r.wr)}>{r.wr.toFixed(1)}</td>
              <td className={signClass(r.exp)}>{fmtSigned(r.exp)}</td>
              <td className={pfClass(r.pf)}>{fmtPF(r.pf)}</td>
              <td className="bt-num-dim">±{r.wrStd.toFixed(1)}</td>
              <td className="bt-num-dim">±{r.expStd.toFixed(2)}</td>
              <td style={{ textAlign: "left" }}>
                <span className={`verdict-${r.verdict.toLowerCase()}`}>{r.verdict}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function countVerdicts(rows: WalkforwardRow[]): Record<Verdict, number> {
  const out: Record<Verdict, number> = {
    CONSISTENT: 0,
    VOLATILE: 0,
    NEGATIVE: 0,
    INSUFFICIENT: 0,
  };
  for (const r of rows) out[r.verdict] += 1;
  return out;
}

export default function BacktestPage() {
  const [stockPage, setStockPage] = useState(0);

  const setupRows = useMemo(() => mergedSetups(), []);
  const stockRowsAll = useMemo(() => mergedStocks(), []);
  const walkRows = useMemo(() => mergedWalkforward(), []);
  const headline = useMemo(() => mergedHeadline(), []);

  const verdictCounts = useMemo(() => countVerdicts(walkRows), [walkRows]);
  const totalStockPages = Math.ceil(stockRowsAll.length / STOCK_PAGE_SIZE);
  const stockStart = stockPage * STOCK_PAGE_SIZE;
  const stockEnd = Math.min(stockStart + STOCK_PAGE_SIZE, stockRowsAll.length);
  const stocksVisible = stockRowsAll.slice(stockStart, stockEnd);

  const goToPage = (next: number) => {
    setStockPage(Math.max(0, Math.min(totalStockPages - 1, next)));
    // Keep the table top in view when paging.
    if (typeof document !== "undefined") {
      const el = document.getElementById("per-stock");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  // Animated counters
  const totalTradesAnim = useCountUp(headline.totalTrades);
  const topReturnAnim = useCountUp(headline.topReturn);
  const overallWRAnim = useCountUp(headline.overallWR, 1100, 1);
  const consistentCount = useCountUp(verdictCounts.CONSISTENT, 800);
  const volatileCount = useCountUp(verdictCounts.VOLATILE, 800);
  const negativeCount = useCountUp(verdictCounts.NEGATIVE, 800);
  const totalSetupsCount = useCountUp(walkRows.length, 800);

  return (
    <div className="landing">
      <Navbar />
      <div className="landing-container">
        {/* ── Hero ── */}
        <section className="docs-hero">
          <span className="about-eyebrow">Audit Report · Engine v9</span>
          <h1 className="display-text">
            15 setups.<br />
            <span className="accent">Receipts attached.</span>
          </h1>
          <p className="lede">
            Every trade the engine would have taken — <strong>3,240 of them across {headline.uniqueStocks} IDX
            tickers over 3 years</strong> — replayed bar-by-bar. Then re-tested on 24 months of out-of-sample
            data the engine never saw during tuning. No cherry-picked windows. No survivorship-flattering
            selection. The same 15 setups that fire signals in your inbox today.
          </p>

          <div className="bt-hero-stats">
            <div className="bt-hero-stat">
              <div className="bt-hero-stat-value">
                <span className="accent-num">{totalTradesAnim.toLocaleString()}</span>
              </div>
              <div className="bt-hero-stat-sub">{headline.uniqueStocks} stocks · 3 yrs</div>
              <div className="bt-hero-stat-label">Trades Audited</div>
            </div>
            <div className="bt-hero-stat">
              <div className="bt-hero-stat-value">
                <span className="accent-num">
                  {overallWRAnim.toFixed(1)}<span style={{ fontSize: "0.6em" }}>%</span>
                </span>
              </div>
              <div className="bt-hero-stat-sub">Wins, not promises</div>
              <div className="bt-hero-stat-label">Aggregate Winrate</div>
            </div>
            <div className="bt-hero-stat">
              <div className="bt-hero-stat-value">
                <span className="accent-num">{consistentCount}</span>
                <span style={{ opacity: 0.4, fontSize: "0.55em", marginLeft: 4 }}>/ {totalSetupsCount}</span>
              </div>
              <div className="bt-hero-stat-sub">Held up on unseen data</div>
              <div className="bt-hero-stat-label">Walkforward-Proven</div>
            </div>
            <div className="bt-hero-stat">
              <div className="bt-hero-stat-value">
                <span className="accent-num">+{topReturnAnim.toLocaleString()}<span style={{ fontSize: "0.6em" }}>%</span></span>
              </div>
              <div className="bt-hero-stat-sub">{headline.topReturnCode} · 3 yr return</div>
              <div className="bt-hero-stat-label">Best Stock</div>
            </div>
          </div>

          <p className="docs-version">
            Engine v9 · Generated 2026-05-11 WIB · Educational only · Not investment advice
          </p>
        </section>

        {/* ── Main content ── */}
        <div className="docs-main" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

          {/* §1 Methodology */}
          <section className="doc-section" id="methodology">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 01</span>
              <h2>How we tested</h2>
              <p>If you can&rsquo;t see the methodology, you can&rsquo;t trust the result. Here&rsquo;s exactly how the numbers below were produced.</p>
            </div>
            <div className="doc-content">
              <h3>The setups doing the work</h3>
              <ul>
                <li><strong>15 battle-tested detectors.</strong> Started with 20. Cut 5 that didn&rsquo;t earn their keep on out-of-sample data. Added 5 more after they survived independent validation. What you see today is what made the cut.</li>
                <li><strong>3-phase chandelier trail.</strong> SL moves to breakeven after TP1, then trails 2×ATR below the running high. Winners get room to run; losers get cut at fixed risk.</li>
                <li><strong>Per-setup MAX_HOLD.</strong> Each detector has a maximum holding window tuned to its character — Stage2-Breakout 90d, Pullback-Uptrend 15d, and so on. No setup overstays its welcome.</li>
                <li><strong>Production-identical replay.</strong> Weekly resample for MTF confluence + per-bar IHSG regime simulation. The backtest doesn&rsquo;t see anything the live engine doesn&rsquo;t.</li>
                <li><strong>Universal SL/TP guardrails.</strong> SL must sit below entry, TP2 must exceed TP1, fallback to 2.5R when raw swing levels are invalid. No way to fake a profitable trade with broken levels.</li>
              </ul>
              <h3>How we know it&rsquo;s not curve-fitting</h3>
              <ul>
                <li><strong>Plain backtest.</strong> Every stock, every bar, 3 years. The base layer.</li>
                <li><strong>Walkforward (rolling OOS).</strong> 4 disjoint 6-month windows after a 12-month warmup. The engine is tuned on the warmup, then released into windows it has never seen. Trades filtered by entry date so warmup logic can&rsquo;t leak into test results. This is the test that separates real edge from data-mined illusion.</li>
                <li><strong>Data source.</strong> yfinance daily snapshots, 2023-05 → 2026-04. Same source you&rsquo;d hit if you wanted to reproduce these numbers yourself.</li>
              </ul>
              <div className="doc-callout info">
                <strong>{headline.uniqueStocks} unique stocks. Every trade counted once.</strong> The watchlist spans LQ45 blue chips and momentum/bandar names. Overlapping tickers between profiles are deduplicated — no double-counting, no inflated trade counts. The math on this page is the math we&rsquo;d quote in court.
              </div>
            </div>
          </section>

          {/* §2 Per-setup */}
          <section className="doc-section" id="per-setup">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 02</span>
              <h2>What each setup actually does</h2>
              <p>
                The 15 setups, ranked by trade count. Workhorses up top — these are the ones doing the heavy lifting,
                fired hundreds of times across 3 years, expectancy positive on every one. The long tail at the bottom
                fires rarer but punches above its weight when it does.
              </p>
            </div>
            <div className="doc-content">
              <PerSetupChart metric="exp" />
              <PerSetupChart metric="wr" />
              <SetupTable rows={setupRows} />
              <div className="doc-callout success" style={{ marginTop: 16 }}>
                <strong>Why a 50% winrate is fine — actually, ideal.</strong> The number most traders chase
                (winrate) isn&rsquo;t the one that builds equity. The one that does is <em>expectancy</em>:
                AvgWin × WR − AvgLoss × (1−WR). The engine&rsquo;s average winner runs <em>3–5× the average loser</em>.
                That asymmetry means you can lose 2 out of 3 trades and still compound — the few that work
                cover the many that don&rsquo;t, with room to spare. Tightening stops to crank winrate above 65%
                cuts runners early and collapses expectancy. We&rsquo;ve tested it. It does.
              </div>
            </div>
          </section>

          {/* §3 Per-stock */}
          <section className="doc-section" id="per-stock">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 03</span>
              <h2>Every ticker, every trade</h2>
              <p>
                All {headline.uniqueStocks} stocks the engine touched, ranked by 3-year total return.
                The top names crushed it — <strong>{headline.topReturnCode} returned +{headline.topReturn.toLocaleString()}%</strong> on
                the setups firing. The bottom names cost a small amount. That power-law spread isn&rsquo;t a flaw —
                it&rsquo;s the fingerprint of trend-following: most upside concentrates in a few strong trends,
                and the system is engineered to ride them without bleeding capital on the rest.
              </p>
            </div>
            <div className="doc-content">
              <Top10StockChart />
              <StockTable key={`stock-page-${stockPage}`} rows={stocksVisible} />

              <div className="bt-pagination">
                <button
                  type="button"
                  className="bt-page-btn"
                  onClick={() => goToPage(stockPage - 1)}
                  disabled={stockPage === 0}
                  aria-label="Previous page"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Prev
                </button>

                <div className="bt-page-info">
                  <span className="bt-page-info-range">
                    {stockStart + 1}<span className="bt-page-dash">–</span>{stockEnd}
                  </span>
                  <span className="bt-page-info-total">of {stockRowsAll.length}</span>
                  <span className="bt-page-info-dots" aria-hidden="true">
                    {Array.from({ length: totalStockPages }).map((_, i) => (
                      <span
                        key={i}
                        className={`bt-page-dot${i === stockPage ? " is-active" : ""}`}
                        onClick={() => goToPage(i)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            goToPage(i);
                          }
                        }}
                        aria-label={`Page ${i + 1}`}
                      />
                    ))}
                  </span>
                </div>

                <button
                  type="button"
                  className="bt-page-btn"
                  onClick={() => goToPage(stockPage + 1)}
                  disabled={stockPage >= totalStockPages - 1}
                  aria-label="Next page"
                >
                  Next
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* §4 Walkforward */}
          <section className="doc-section" id="walkforward">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 04</span>
              <h2>The hardest test we run</h2>
              <p>
                Anyone can produce a backtest that looks good in hindsight. The real test is whether the edge
                survives on data the engine has never seen. We tune on the first 12 months, then turn the engine
                loose on 4 independent 6-month windows. A setup earns the <strong>CONSISTENT</strong> badge only
                when its fold-to-fold variance is <em>smaller</em> than its mean expectancy — every window earned
                its keep, not just the lucky ones. That&rsquo;s the line between an edge and a fluke.
              </p>
            </div>
            <div className="doc-content">
              <div className="bt-verdict-summary">
                <div className="bt-verdict-tile consistent">
                  <div className="bt-verdict-tile-count">{consistentCount}</div>
                  <div className="bt-verdict-tile-label">Consistent</div>
                </div>
                <div className="bt-verdict-tile volatile">
                  <div className="bt-verdict-tile-count">{volatileCount}</div>
                  <div className="bt-verdict-tile-label">Volatile</div>
                </div>
                <div className="bt-verdict-tile negative">
                  <div className="bt-verdict-tile-count">{negativeCount}</div>
                  <div className="bt-verdict-tile-label">Negative</div>
                </div>
                <div className="bt-verdict-tile total">
                  <div className="bt-verdict-tile-count">{totalSetupsCount}</div>
                  <div className="bt-verdict-tile-label">Setups Tested</div>
                </div>
              </div>
              <WalkforwardTable rows={walkRows} />
              <div className="doc-callout info" style={{ marginTop: 16 }}>
                <strong>VOLATILE doesn&rsquo;t mean broken.</strong> A VOLATILE setup has positive expectancy
                across all 4 windows but swings hard between them — it works, just lumpier. We keep these
                running because the edge is real; the signals are sized smaller and treated as opportunistic
                rather than core. Honest labeling means you know what you&rsquo;re getting before the trade,
                not after.
              </div>
            </div>
          </section>

          {/* §5 Caveats */}
          <section className="doc-section" id="caveats">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 05</span>
              <h2>What the numbers don&rsquo;t tell you</h2>
              <p>
                Anyone who hides limitations is selling you something. Here&rsquo;s what these numbers
                <em> aren&rsquo;t</em> — so you can size your expectations honestly.
              </p>
            </div>
            <div className="doc-content">
              <ul>
                <li><strong>Gross, not net of fees.</strong> Real broker fees run ~0.15% each way. The <code>/portfolio</code> tracker accounts for them in live tracking; the backtest math here doesn&rsquo;t. Expectancy on smaller-edge setups drops a touch once fees are in.</li>
                <li><strong>yfinance has ~15 min lag.</strong> Live entries can differ from backtest entries by 1–2% on fast movers. We won&rsquo;t pretend otherwise.</li>
                <li><strong>Recent IPOs excluded from walkforward.</strong> Tickers like CDIA and FORE don&rsquo;t have enough warmup history yet. They&rsquo;ll join the OOS pool once they do.</li>
                <li><strong>Survivorship bias.</strong> The watchlist is what exists today. Stocks delisted between 2023–2026 aren&rsquo;t in the test set. This is an honest blind spot.</li>
                <li><strong>Per-stock, not portfolio-level.</strong> No correlation modeling, no max concurrent positions, no capital allocation logic. Your account return depends on your sizing decisions — these numbers tell you the edge per signal, not how to deploy capital.</li>
                <li><strong>One IDX cycle.</strong> 3 years is enough to validate short-term edge. It&rsquo;s not enough to claim multi-cycle (10y+) robustness, and we won&rsquo;t.</li>
                <li><strong>Engine v9 snapshot.</strong> The numbers above match the engine version currently in production. Every engine update triggers a full re-run via <code>python scripts/generate_backtest_md.py</code>.</li>
              </ul>
              <div className="doc-callout warning" style={{ marginTop: 16 }}>
                <strong>Educational purpose only. Not investment advice.</strong> Past performance does not guarantee future results.
                Do your own research, size positions you can afford to lose, and never trade on a signal you don&rsquo;t understand.
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bt-cta">
            <span className="bt-cta-eyebrow">Same engine. Same setups. Live.</span>
            <h2>The 15 setups above are firing right now.</h2>
            <p>
              Every time one triggers on an IDX ticker, you get the alert — with entry, stop, and take-profit
              already calculated. Same logic, same engine, same numbers you just audited. Three signals per day
              on the free plan. No credit card, no trial period, no catch.
            </p>
            <div className="bt-cta-actions">
              <Link href="/pricing" className="btn-primary btn-magnetic">
                See Pricing →
              </Link>
              <Link href="/docs" className="btn-outline">
                How the Setups Work
              </Link>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
