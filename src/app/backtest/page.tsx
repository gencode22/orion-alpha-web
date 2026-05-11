"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SampleSignals } from "@/features/sample-signal/SampleSignals";
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
                <span className="accent-num is-green">
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
                <span className="accent-num is-green">+{topReturnAnim.toLocaleString()}<span style={{ fontSize: "0.6em" }}>%</span></span>
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
          <section className="doc-section fade-up" id="methodology">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 01</span>
              <h2>How we tested</h2>
              <p>Methodology you can audit — not a black box.</p>
            </div>
            <div className="doc-content">
              <div className="doc-callout info">
                <strong>{headline.uniqueStocks} unique stocks. Every trade counted once.</strong> Watchlist spans LQ45 + bandar names; overlapping tickers deduplicated. The math on this page is the math we&rsquo;d quote in court.
              </div>

              <details className="bt-faq-card" style={{ marginTop: 16 }}>
                <summary>
                  <span className="bt-faq-q">Engine state &amp; test framework</span>
                  <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="bt-faq-a">
                  <h4 className="bt-collapse-h">Setups doing the work</h4>
                  <ul className="bt-tight-list">
                    <li><strong>15 battle-tested detectors.</strong> Started with 20. Cut 5 that failed OOS. Added 5 that survived independent validation.</li>
                    <li><strong>3-phase chandelier trail.</strong> SL → breakeven after TP1, then trails 2×ATR below running high.</li>
                    <li><strong>Per-setup MAX_HOLD.</strong> Each detector has a hold-window tuned to its character (Stage2-Breakout 90d, Pullback-Uptrend 15d, etc).</li>
                    <li><strong>Production-identical replay.</strong> Weekly MTF resample + per-bar IHSG regime simulation. Backtest sees nothing the live engine doesn&rsquo;t.</li>
                    <li><strong>Universal SL/TP guards.</strong> SL must sit below entry, TP2 must exceed TP1, fallback 2.5R on invalid swing levels.</li>
                  </ul>
                  <h4 className="bt-collapse-h">How we know it&rsquo;s not curve-fitting</h4>
                  <ul className="bt-tight-list">
                    <li><strong>Plain backtest.</strong> Every stock, every bar, 3 years.</li>
                    <li><strong>Walkforward.</strong> 4 disjoint 6-month windows after 12-month warmup. Trades filtered by entry date — no warmup leakage.</li>
                    <li><strong>Data source.</strong> yfinance daily snapshots, 2023-05 → 2026-04. Reproducible.</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          {/* §2 Per-setup */}
          <section className="doc-section fade-up" id="per-setup">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 02</span>
              <h2>What each setup actually does</h2>
              <p>15 setups, ranked by trade count. Workhorses top, specialists tail.</p>
            </div>
            <div className="doc-content">
              <PerSetupChart metric="exp" />
              <PerSetupChart metric="wr" />
              <SetupTable rows={setupRows} />
              <div className="doc-callout success bt-formula-callout" style={{ marginTop: 16 }}>
                <strong>50% winrate is fine — actually ideal.</strong>
                <div className="bt-formula">
                  Expectancy = <em>AvgWin × WR − AvgLoss × (1−WR)</em>
                </div>
                <span className="bt-formula-takeaway">
                  Avg winner runs <strong>3–5×</strong> avg loser. Lose 2 of 3 and still compound.
                </span>
              </div>
            </div>
          </section>

          {/* §3 Per-stock */}
          <section className="doc-section fade-up" id="per-stock">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 03</span>
              <h2>Every ticker, every trade</h2>
              <p>
                All {headline.uniqueStocks} stocks ranked by 3y return. Top: <strong>{headline.topReturnCode} +{headline.topReturn.toLocaleString()}%</strong>. Power-law spread is the trend-following fingerprint — most upside in a few trends, no bleed on the rest.
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
          <section className="doc-section fade-up" id="walkforward">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 04</span>
              <h2>The hardest test we run</h2>
              <p>
                Tuned on month 0–12, tested on 4 independent unseen 6-month windows.
                <strong> CONSISTENT</strong> = edge survives all 4. The line between real edge and lucky window.
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
                <strong>VOLATILE ≠ broken.</strong> Positive expectancy across all 4 windows, just lumpier. Sized smaller in production. Honest labeling so you know before the trade, not after.
              </div>
            </div>
          </section>

          {/* §5 Caveats */}
          <section className="doc-section fade-up" id="caveats">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 05</span>
              <h2>What the numbers don&rsquo;t tell you</h2>
              <p>Anyone who hides limitations is selling you something. Here&rsquo;s ours.</p>
            </div>
            <div className="doc-content">
              <div className="bt-caveat-grid">
                <div className="bt-caveat-chip">
                  <span className="bt-caveat-title">Gross of fees</span>
                  <span className="bt-caveat-line">Real round-trip ~0.30%. Shave 5–10% off expectancy.</span>
                </div>
                <div className="bt-caveat-chip">
                  <span className="bt-caveat-title">~15 min data lag</span>
                  <span className="bt-caveat-line">yfinance delay. Live entry can differ 1–2% on fast movers.</span>
                </div>
                <div className="bt-caveat-chip">
                  <span className="bt-caveat-title">Recent IPOs excluded</span>
                  <span className="bt-caveat-line">CDIA, FORE, etc. — not enough warmup yet.</span>
                </div>
                <div className="bt-caveat-chip">
                  <span className="bt-caveat-title">Survivorship bias</span>
                  <span className="bt-caveat-line">Delisted 2023–2026 names absent from test set.</span>
                </div>
                <div className="bt-caveat-chip">
                  <span className="bt-caveat-title">Per-trade, not portfolio</span>
                  <span className="bt-caveat-line">No correlation, sizing, or concurrent-position modeling.</span>
                </div>
                <div className="bt-caveat-chip">
                  <span className="bt-caveat-title">One IDX cycle</span>
                  <span className="bt-caveat-line">3 years validates short-term, not multi-cycle (10y+).</span>
                </div>
                <div className="bt-caveat-chip">
                  <span className="bt-caveat-title">v9 snapshot</span>
                  <span className="bt-caveat-line">Matches engine in production. Re-runs on every update.</span>
                </div>
              </div>

              <details className="bt-faq-card" style={{ marginTop: 16 }}>
                <summary>
                  <span className="bt-faq-q">Full notes on each caveat</span>
                  <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="bt-faq-a">
                  <ul className="bt-tight-list">
                    <li><strong>Gross, not net of fees.</strong> Real broker fees run ~0.15% each way (~0.30% round-trip). The <code>/portfolio</code> tracker accounts for them in live tracking; the backtest math here doesn&rsquo;t. Expectancy on smaller-edge setups drops once fees are in.</li>
                    <li><strong>yfinance has ~15 min lag.</strong> Live entries can differ from backtest entries by 1–2% on fast movers.</li>
                    <li><strong>Recent IPOs excluded from walkforward.</strong> Tickers like CDIA and FORE don&rsquo;t have enough warmup history yet. They&rsquo;ll join the OOS pool once they do.</li>
                    <li><strong>Survivorship bias.</strong> The watchlist is what exists today. Stocks delisted between 2023–2026 aren&rsquo;t in the test set.</li>
                    <li><strong>Per-stock, not portfolio-level.</strong> No correlation modeling, no max concurrent positions, no capital allocation logic. Your account return depends on your sizing decisions.</li>
                    <li><strong>One IDX cycle.</strong> 3 years is enough to validate short-term edge. Not enough to claim multi-cycle (10y+) robustness.</li>
                    <li><strong>Engine v9 snapshot.</strong> Numbers match the engine version currently in production. Every engine update triggers a full re-run via <code>python scripts/generate_backtest_md.py</code>.</li>
                  </ul>
                </div>
              </details>

              <div className="doc-callout warning" style={{ marginTop: 16 }}>
                <strong>Educational purpose only. Not investment advice.</strong> Past performance does not guarantee future results. Size positions you can afford to lose. Never trade a signal you don&rsquo;t understand.
              </div>
            </div>
          </section>

          {/* §6 FAQ */}
          <section className="doc-section fade-up" id="faq">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 06</span>
              <h2>Questions you should be asking</h2>
              <p>Skepticism is a feature. 7 questions, honest answers.</p>
            </div>
            <div className="doc-content">
              <div className="bt-faq-list">

                <details className="bt-faq-card">
                  <summary>
                    <span className="bt-faq-q">How do you know this isn&rsquo;t curve-fitting?</span>
                    <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="bt-faq-a">
                    <p>
                      We tune the engine on the first 12 months of data, then test it on 4 independent
                      6-month windows it has never seen. A setup only earns the <strong>CONSISTENT</strong> label
                      if its edge holds steady across all 4 — fold-to-fold variance smaller than mean expectancy.
                    </p>
                    <p>
                      Curve-fitted edges fail this test. They look great on the data they were tuned on,
                      then collapse the moment the regime shifts. <strong>7 of our 15 setups passed.</strong> The
                      other 8 are still positive in aggregate but lumpy across windows — we keep them
                      running with smaller position sizing and call them VOLATILE in §4. No hiding.
                    </p>
                  </div>
                </details>

                <details className="bt-faq-card">
                  <summary>
                    <span className="bt-faq-q">Why only 7 of 15 setups CONSISTENT?</span>
                    <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="bt-faq-a">
                    <p>
                      No. VOLATILE means &ldquo;positive expectancy overall, but lumpy fold-to-fold&rdquo; — the edge
                      is real, it just doesn&rsquo;t arrive on a predictable schedule. Look at the walkforward
                      table: every VOLATILE setup still has positive aggregate expectancy and PF &gt; 1.
                    </p>
                    <p>
                      We sized these setups smaller in production and treat their signals as opportunistic
                      rather than core. The strict labeling exists so you know what you&rsquo;re buying
                      <em> before</em> the trade, not after. Most retail signal services would call these
                      &ldquo;our top performers.&rdquo; We call them what they are.
                    </p>
                  </div>
                </details>

                <details className="bt-faq-card">
                  <summary>
                    <span className="bt-faq-q">What about bear markets or major regime changes?</span>
                    <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="bt-faq-a">
                    <p>
                      The engine reads IHSG regime on every bar and adjusts setup weights and quality thresholds
                      accordingly. In the tested window (2023–2026) IHSG had two distinct drawdown phases
                      (Q3 2023, Q1 2024) — signal frequency dropped automatically during both.
                    </p>
                    <p>
                      Honest take: <strong>trend-following systems underperform in chop.</strong> You should expect
                      lower returns during prolonged sideways or bear markets. The system shouldn&rsquo;t blow up,
                      but it won&rsquo;t print money in a 70%-of-the-year sideways grind. We have 3 years of data —
                      not enough to claim multi-cycle robustness. We&rsquo;d be lying if we did.
                    </p>
                  </div>
                </details>

                <details className="bt-faq-card">
                  <summary>
                    <span className="bt-faq-q">Will my real account match these numbers?</span>
                    <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="bt-faq-a">
                    <p>
                      <strong>No, and you shouldn&rsquo;t expect them to.</strong> The backtest is gross of fees
                      (real round-trip is ~0.30%), assumes you take every signal (you won&rsquo;t — you&rsquo;ll skip
                      some, miss some, hesitate on others), and doesn&rsquo;t model partial fills or slippage.
                    </p>
                    <p>
                      Realistic adjustment: shave <strong>~5–10% off per-setup expectancy</strong> for fees + slippage.
                      The workhorse setups (Pullback-Uptrend, EMA200-Bounce, Ichimoku-Break, etc.) still
                      print after that haircut. The marginal setups don&rsquo;t. That&rsquo;s your filter.
                    </p>
                  </div>
                </details>

                <details className="bt-faq-card">
                  <summary>
                    <span className="bt-faq-q">What&rsquo;s the worst case I should plan for?</span>
                    <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="bt-faq-a">
                    <p>
                      Per-trade worst case: a single position going against entry hard enough to hit
                      MaxDD before SL triggers. We&rsquo;ve seen <strong>−57% on LEAD</strong> as the deepest
                      single-position drawdown. That&rsquo;s the depth, not the loss — SL caught it eventually.
                    </p>
                    <p>
                      Portfolio-level: depends entirely on your sizing. <strong>Size every signal so a single
                      −50% per-position drawdown wouldn&rsquo;t break you.</strong> The engine doesn&rsquo;t model your
                      portfolio for you — that&rsquo;s your judgment call, and the most important one.
                    </p>
                  </div>
                </details>

                <details className="bt-faq-card">
                  <summary>
                    <span className="bt-faq-q">Can I try the signals before subscribing?</span>
                    <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="bt-faq-a">
                    <p>
                      Yes. The free plan delivers <strong>3 signals/day</strong> from the same engine and the same
                      15 setups you just audited. No credit card. No trial period. No expiry.
                    </p>
                    <p>
                      Paper-trade them for as long as you want before deciding whether to upgrade.
                      The expectancy on these signals is in §2 of this page — you already know what to expect
                      before you start.
                    </p>
                  </div>
                </details>

                <details className="bt-faq-card">
                  <summary>
                    <span className="bt-faq-q">What if my position hits ARA / ARB?</span>
                    <svg className="bt-faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="bt-faq-a">
                    <p>
                      The engine sees end-of-day bars. If a stock hits ARB (auto-reject bawah) mid-session,
                      you physically can&rsquo;t exit at SL until next session — that&rsquo;s an IDX rule, not an
                      engine choice. The backtest mirrors this: it executes at EOD only.
                    </p>
                    <p>
                      In other words, the backtest <em>already accounts for</em> the ARA/ARB constraint by
                      default. The number you see in §3 includes trades where SL was breached intraday
                      but execution happened at the next-day open. <strong>It&rsquo;s not a hidden risk — it&rsquo;s
                      baked into the math.</strong>
                    </p>
                  </div>
                </details>

              </div>
            </div>
          </section>

          {/* §7 Sample Signal — alert + outcome */}
          <section className="doc-section fade-up" id="sample-signal">
            <div className="doc-section-header">
              <span className="section-eyebrow">Section 07</span>
              <h2>Two signals we shipped</h2>
              <p>Same engine, two delivery modes — the auto-broadcast that lands in subscribers&rsquo; DMs, and the manual <code>/signal</code> query a user types in chat.</p>
            </div>
            <div className="doc-content">
              <SampleSignals variant="full" />
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
