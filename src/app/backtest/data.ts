/* Backtest report data — engine v9, generated 2026-05-11 WIB
 * Source: docs/backtest.md (kept in sync manually; regen via scripts/generate_backtest_md.py)
 */

export type Universe = "FLAT" | "BCAST";

export type Verdict = "CONSISTENT" | "VOLATILE" | "NEGATIVE" | "INSUFFICIENT";

export interface SetupRow {
  setup: string;
  n: number;
  wr: number;
  avgW: number;
  avgL: number;
  exp: number;
  pf: number;
}

export interface StockRow {
  code: string;
  n: number;
  wr: number;
  exp: number;
  pf: number;
  totRet: number;
  maxDD: number;
  hold: number;
  topSetup: string;
}

export interface WalkforwardRow {
  setup: string;
  n: number;
  folds: number;
  wr: number;
  exp: number;
  pf: number;
  wrStd: number;
  expStd: number;
  verdict: Verdict;
}

export const HEADLINE = {
  totalTrades: 3240,
  stocks: 125,
  oosMonths: 24,
  flatWR: 52.8,
  bcastWR: 54.1,
  topReturn: 5048,
  topReturnCode: "BUVA",
  consistentFlat: 8,
  consistentBcast: 9,
  totalSetups: 15,
};

export const SETUPS: Record<Universe, SetupRow[]> = {
  FLAT: [
    { setup: "Pullback-Uptrend",   n: 421, wr: 54.9, avgW: 14.00, avgL: -4.61, exp: 5.60, pf: 3.69 },
    { setup: "EMA200-Bounce",      n: 306, wr: 51.3, avgW: 16.31, avgL: -4.30, exp: 6.27, pf: 3.99 },
    { setup: "Pocket-Pivot",       n: 228, wr: 49.6, avgW:  8.63, avgL: -5.70, exp: 1.40, pf: 1.49 },
    { setup: "Ichimoku-Break",     n: 120, wr: 60.0, avgW: 13.21, avgL: -4.08, exp: 6.29, pf: 4.86 },
    { setup: "Wyckoff-Spring",     n: 116, wr: 46.6, avgW: 13.87, avgL: -2.77, exp: 4.98, pf: 4.36 },
    { setup: "Accumulation-Zone",  n: 102, wr: 59.8, avgW: 12.53, avgL: -3.58, exp: 6.05, pf: 5.21 },
    { setup: "Inside-Bar-Break",   n:  81, wr: 54.3, avgW: 10.72, avgL: -4.77, exp: 3.64, pf: 2.67 },
    { setup: "Stage2-Breakout",    n:  77, wr: 57.1, avgW:  8.13, avgL: -3.63, exp: 3.09, pf: 2.99 },
    { setup: "VCP",                n:  64, wr: 43.8, avgW: 10.17, avgL: -3.99, exp: 2.20, pf: 1.98 },
    { setup: "Donchian-Break",     n:  21, wr: 71.4, avgW: 13.69, avgL: -7.07, exp: 7.76, pf: 4.84 },
    { setup: "Golden-Cross",       n:  21, wr: 42.9, avgW:  9.61, avgL: -4.19, exp: 1.72, pf: 1.72 },
    { setup: "52W-High-Break",     n:  16, wr: 43.8, avgW: 18.38, avgL: -5.78, exp: 4.79, pf: 2.47 },
    { setup: "HL-Reversal",        n:  15, wr: 33.3, avgW: 22.08, avgL: -1.32, exp: 6.48, pf: 8.34 },
    { setup: "Weakness-Recovery",  n:   9, wr: 44.4, avgW:  8.75, avgL: -1.63, exp: 2.98, pf: 4.29 },
    { setup: "High-Tight-Flag",    n:   6, wr: 50.0, avgW: 68.92, avgL: -8.07, exp: 30.43, pf: 8.54 },
  ],
  BCAST: [
    { setup: "Pullback-Uptrend",   n: 466, wr: 51.3, avgW: 16.74, avgL: -5.38, exp:  5.96, pf:  3.27 },
    { setup: "EMA200-Bounce",      n: 301, wr: 55.8, avgW: 22.81, avgL: -5.23, exp: 10.42, pf:  5.51 },
    { setup: "Pocket-Pivot",       n: 249, wr: 52.6, avgW: 13.89, avgL: -7.14, exp:  3.92, pf:  2.16 },
    { setup: "Ichimoku-Break",     n: 114, wr: 61.4, avgW: 16.61, avgL: -5.23, exp:  8.18, pf:  5.05 },
    { setup: "Wyckoff-Spring",     n: 112, wr: 43.8, avgW: 18.43, avgL: -3.51, exp:  6.09, pf:  4.08 },
    { setup: "Inside-Bar-Break",   n:  87, wr: 56.3, avgW: 17.10, avgL: -6.05, exp:  6.99, pf:  3.64 },
    { setup: "VCP",                n:  79, wr: 57.0, avgW: 11.89, avgL: -4.87, exp:  4.68, pf:  3.23 },
    { setup: "Accumulation-Zone",  n:  74, wr: 66.2, avgW: 15.83, avgL: -4.92, exp:  8.82, pf:  6.30 },
    { setup: "Stage2-Breakout",    n:  52, wr: 63.5, avgW: 10.38, avgL: -4.32, exp:  5.01, pf:  4.18 },
    { setup: "52W-High-Break",     n:  29, wr: 55.2, avgW: 20.83, avgL: -5.69, exp:  8.94, pf:  4.51 },
    { setup: "Donchian-Break",     n:  28, wr: 53.6, avgW: 14.72, avgL: -6.12, exp:  5.04, pf:  2.77 },
    { setup: "Golden-Cross",       n:  24, wr: 45.8, avgW: 33.29, avgL: -4.92, exp: 12.59, pf:  5.72 },
    { setup: "High-Tight-Flag",    n:  10, wr: 40.0, avgW: 51.69, avgL: -8.65, exp: 15.49, pf:  3.98 },
    { setup: "HL-Reversal",        n:   9, wr: 66.7, avgW: 29.89, avgL: -0.91, exp: 19.62, pf: 65.70 },
    { setup: "Weakness-Recovery",  n:   3, wr: 33.3, avgW: 18.31, avgL: -0.78, exp:  5.59, pf: 11.81 },
  ],
};

export const STOCKS: Record<Universe, StockRow[]> = {
  FLAT: [
    { code: "BUVA", n: 39, wr: 61.5, exp: 14.67, pf: 6.84, totRet: 5048, maxDD: -24.4, hold:  9.9, topSetup: "Pullback-Uptrend" },
    { code: "DEWA", n: 32, wr: 62.5, exp: 13.34, pf: 7.96, totRet: 3021, maxDD: -26.4, hold: 12.8, topSetup: "Pullback-Uptrend" },
    { code: "BULL", n: 38, wr: 52.6, exp: 10.77, pf: 3.97, totRet: 2033, maxDD: -27.5, hold:  9.1, topSetup: "Pullback-Uptrend" },
    { code: "MINA", n: 24, wr: 62.5, exp: 18.06, pf: 4.88, totRet: 1768, maxDD: -39.6, hold: 10.7, topSetup: "Pullback-Uptrend" },
    { code: "HRTA", n: 29, wr: 65.5, exp: 12.28, pf: 7.08, totRet: 1564, maxDD: -16.4, hold: 12.5, topSetup: "Pullback-Uptrend" },
    { code: "ENRG", n: 32, wr: 65.6, exp: 10.69, pf: 6.21, totRet: 1321, maxDD: -17.8, hold:  8.7, topSetup: "Pullback-Uptrend" },
    { code: "TAPG", n: 25, wr: 76.0, exp: 11.57, pf: 12.79, totRet: 1198, maxDD:  -9.2, hold: 17.0, topSetup: "Pullback-Uptrend" },
    { code: "PTRO", n: 34, wr: 50.0, exp: 10.03, pf: 4.31, totRet: 1195, maxDD: -37.8, hold: 11.1, topSetup: "Pullback-Uptrend" },
    { code: "ARCI", n: 27, wr: 66.7, exp: 10.06, pf: 6.02, totRet:  842, maxDD: -25.0, hold: 11.3, topSetup: "Pullback-Uptrend" },
    { code: "RAJA", n: 33, wr: 54.5, exp:  8.61, pf: 3.92, totRet:  824, maxDD: -26.3, hold: 10.5, topSetup: "Pullback-Uptrend" },
    { code: "CUAN", n: 28, wr: 42.9, exp: 10.50, pf: 4.17, totRet:  677, maxDD: -26.3, hold: 11.6, topSetup: "EMA200-Bounce" },
    { code: "PSAB", n: 31, wr: 64.5, exp:  7.80, pf: 3.76, totRet:  569, maxDD: -33.5, hold: 13.3, topSetup: "Pullback-Uptrend" },
    { code: "BRMS", n: 35, wr: 60.0, exp:  6.65, pf: 3.99, totRet:  542, maxDD: -24.1, hold:  9.1, topSetup: "Pullback-Uptrend" },
    { code: "BIPI", n: 29, wr: 51.7, exp:  9.27, pf: 4.40, totRet:  451, maxDD: -26.2, hold: 10.0, topSetup: "EMA200-Bounce" },
    { code: "BUMI", n: 33, wr: 51.5, exp:  6.00, pf: 3.13, totRet:  375, maxDD: -17.6, hold:  9.8, topSetup: "EMA200-Bounce" },
    { code: "INCO", n: 22, wr: 68.2, exp:  7.27, pf: 8.91, totRet:  307, maxDD:  -7.2, hold: 13.0, topSetup: "Pocket-Pivot" },
    { code: "ADRO", n: 30, wr: 63.3, exp:  4.97, pf: 5.86, totRet:  290, maxDD: -10.0, hold: 11.3, topSetup: "Pullback-Uptrend" },
    { code: "MEDC", n: 37, wr: 59.5, exp:  3.98, pf: 3.63, totRet:  277, maxDD: -11.5, hold: 10.2, topSetup: "EMA200-Bounce" },
    { code: "MBMA", n: 24, wr: 54.2, exp:  6.59, pf: 3.34, totRet:  266, maxDD: -18.4, hold: 10.4, topSetup: "Pocket-Pivot" },
    { code: "ANTM", n: 36, wr: 50.0, exp:  4.08, pf: 3.32, totRet:  221, maxDD: -26.7, hold:  8.0, topSetup: "Pocket-Pivot" },
    { code: "PGAS", n: 32, wr: 68.8, exp:  3.83, pf: 5.46, totRet:  214, maxDD: -11.4, hold: 12.5, topSetup: "Pullback-Uptrend" },
    { code: "PANI", n: 32, wr: 62.5, exp:  4.31, pf: 2.77, totRet:  197, maxDD: -33.5, hold: 10.8, topSetup: "EMA200-Bounce" },
    { code: "LEAD", n: 35, wr: 48.6, exp:  4.22, pf: 2.05, totRet:  180, maxDD: -57.4, hold:  9.7, topSetup: "Pullback-Uptrend" },
    { code: "PADI", n: 17, wr: 47.1, exp:  9.24, pf: 2.60, totRet:  174, maxDD: -24.6, hold:  6.8, topSetup: "Pullback-Uptrend" },
    { code: "TPIA", n: 25, wr: 60.0, exp:  4.30, pf: 3.27, totRet:  140, maxDD: -20.3, hold: 10.8, topSetup: "Accumulation-Zone" },
    { code: "PGEO", n: 26, wr: 42.3, exp:  3.53, pf: 2.83, totRet:  111, maxDD: -19.0, hold:  9.1, topSetup: "EMA200-Bounce" },
    { code: "PNLF", n: 26, wr: 38.5, exp:  3.73, pf: 2.36, totRet:  106, maxDD: -25.8, hold: 10.0, topSetup: "Ichimoku-Break" },
    { code: "EMTK", n: 29, wr: 51.7, exp:  3.09, pf: 2.07, totRet:   97, maxDD: -25.1, hold: 10.3, topSetup: "Pullback-Uptrend" },
    { code: "UNVR", n: 17, wr: 47.1, exp:  4.84, pf: 3.14, totRet:   96, maxDD: -13.3, hold: 11.8, topSetup: "Pocket-Pivot" },
    { code: "AADI", n:  8, wr: 62.5, exp:  8.52, pf: 8.12, totRet:   86, maxDD:  -5.2, hold: 14.5, topSetup: "Pullback-Uptrend" },
    { code: "NCKL", n: 28, wr: 39.3, exp:  3.09, pf: 2.09, totRet:   84, maxDD: -32.4, hold: 11.6, topSetup: "Pocket-Pivot" },
    { code: "HRUM", n: 23, wr: 69.6, exp:  2.99, pf: 2.69, totRet:   84, maxDD: -12.8, hold: 13.4, topSetup: "Pocket-Pivot" },
    { code: "EXCL", n: 32, wr: 50.0, exp:  2.12, pf: 2.54, totRet:   76, maxDD: -17.1, hold: 12.1, topSetup: "EMA200-Bounce" },
    { code: "ITMG", n: 31, wr: 64.5, exp:  1.66, pf: 2.96, totRet:   62, maxDD: -10.3, hold: 10.4, topSetup: "Pullback-Uptrend" },
    { code: "BRIS", n: 25, wr: 44.0, exp:  2.19, pf: 2.25, totRet:   61, maxDD: -18.1, hold: 12.0, topSetup: "EMA200-Bounce" },
    { code: "UNTR", n: 34, wr: 58.8, exp:  1.44, pf: 2.56, totRet:   58, maxDD: -13.7, hold: 10.8, topSetup: "Pullback-Uptrend" },
    { code: "PTBA", n: 31, wr: 51.6, exp:  1.58, pf: 2.23, totRet:   56, maxDD: -12.7, hold: 11.7, topSetup: "Pullback-Uptrend" },
    { code: "BREN", n: 23, wr: 39.1, exp:  2.54, pf: 1.90, totRet:   56, maxDD: -23.3, hold: 10.5, topSetup: "Wyckoff-Spring" },
    { code: "ASII", n: 31, wr: 51.6, exp:  1.53, pf: 2.29, totRet:   54, maxDD: -15.0, hold: 11.9, topSetup: "Pullback-Uptrend" },
    { code: "BSDE", n: 19, wr: 47.4, exp:  2.53, pf: 2.71, totRet:   49, maxDD: -21.4, hold: 12.2, topSetup: "Pullback-Uptrend" },
    { code: "TLKM", n: 22, wr: 45.5, exp:  2.17, pf: 2.27, totRet:   48, maxDD: -18.4, hold: 11.2, topSetup: "Pullback-Uptrend" },
    { code: "INDF", n: 26, wr: 50.0, exp:  1.48, pf: 2.23, totRet:   42, maxDD: -11.1, hold: 12.0, topSetup: "Accumulation-Zone" },
    { code: "BBTN", n: 34, wr: 44.1, exp:  1.25, pf: 1.59, totRet:   40, maxDD: -22.1, hold:  9.8, topSetup: "EMA200-Bounce" },
    { code: "SMSM", n: 26, wr: 34.6, exp:  1.47, pf: 2.05, totRet:   40, maxDD: -12.8, hold: 11.5, topSetup: "EMA200-Bounce" },
    { code: "SMRA", n: 20, wr: 65.0, exp:  1.68, pf: 2.50, totRet:   36, maxDD: -12.9, hold: 10.4, topSetup: "Ichimoku-Break" },
    { code: "MTEL", n: 25, wr: 44.0, exp:  1.25, pf: 1.72, totRet:   30, maxDD: -10.1, hold: 11.6, topSetup: "EMA200-Bounce" },
    { code: "BMRI", n: 28, wr: 42.9, exp:  0.97, pf: 1.56, totRet:   25, maxDD: -15.0, hold: 10.0, topSetup: "Pullback-Uptrend" },
    { code: "EMAS", n:  2, wr: 100.0, exp: 11.48, pf: 999.0, totRet: 24, maxDD:   0.0, hold: 14.0, topSetup: "Pullback-Uptrend" },
    { code: "BBCA", n: 18, wr: 44.4, exp:  1.21, pf: 2.37, totRet:   22, maxDD:  -7.3, hold: 11.5, topSetup: "Pullback-Uptrend" },
    { code: "BBNI", n: 29, wr: 48.3, exp:  0.75, pf: 1.73, totRet:   22, maxDD:  -8.6, hold: 10.0, topSetup: "EMA200-Bounce" },
    { code: "KLBF", n: 16, wr: 37.5, exp:  1.18, pf: 1.57, totRet:   15, maxDD: -22.5, hold: 13.5, topSetup: "Pocket-Pivot" },
    { code: "INTP", n: 21, wr: 42.9, exp:  0.80, pf: 1.39, totRet:   13, maxDD: -10.2, hold: 11.7, topSetup: "Pocket-Pivot" },
    { code: "ACES", n: 17, wr: 52.9, exp:  0.58, pf: 1.41, totRet:    8, maxDD:  -9.9, hold: 11.7, topSetup: "Pullback-Uptrend" },
    { code: "PWON", n: 23, wr: 43.5, exp:  0.42, pf: 1.36, totRet:    8, maxDD: -12.2, hold:  8.9, topSetup: "Pocket-Pivot" },
    { code: "ICBP", n: 23, wr: 47.8, exp:  0.40, pf: 1.37, totRet:    8, maxDD:  -7.1, hold: 10.1, topSetup: "Wyckoff-Spring" },
    { code: "BBRI", n: 20, wr: 45.0, exp:  0.49, pf: 1.28, totRet:    7, maxDD: -16.4, hold: 11.6, topSetup: "Accumulation-Zone" },
    { code: "GOTO", n: 29, wr: 41.4, exp:  0.45, pf: 1.16, totRet:    5, maxDD: -21.2, hold:  7.3, topSetup: "Pullback-Uptrend" },
    { code: "MAPI", n: 19, wr: 52.6, exp:  0.30, pf: 1.16, totRet:    3, maxDD: -17.4, hold: 11.6, topSetup: "Pocket-Pivot" },
    { code: "AMRT", n: 22, wr: 40.9, exp: -0.24, pf: 0.86, totRet:   -7, maxDD: -24.7, hold:  9.3, topSetup: "Pullback-Uptrend" },
    { code: "SIDO", n: 24, wr: 37.5, exp: -0.26, pf: 0.85, totRet:   -8, maxDD: -19.5, hold: 13.0, topSetup: "Pullback-Uptrend" },
    { code: "SMGR", n: 17, wr: 47.1, exp: -0.55, pf: 0.74, totRet:  -11, maxDD: -16.4, hold:  8.9, topSetup: "Pocket-Pivot" },
  ],
  BCAST: [
    { code: "BUVA", n: 39, wr: 61.5, exp: 14.67, pf:  6.84, totRet: 5048, maxDD: -24.4, hold:  9.9, topSetup: "Pullback-Uptrend" },
    { code: "DEWA", n: 32, wr: 62.5, exp: 13.34, pf:  7.96, totRet: 3021, maxDD: -26.4, hold: 12.8, topSetup: "Pullback-Uptrend" },
    { code: "BULL", n: 38, wr: 52.6, exp: 10.77, pf:  3.97, totRet: 2033, maxDD: -27.5, hold:  9.1, topSetup: "Pullback-Uptrend" },
    { code: "MINA", n: 24, wr: 62.5, exp: 18.06, pf:  4.88, totRet: 1768, maxDD: -39.6, hold: 10.7, topSetup: "Pullback-Uptrend" },
    { code: "BNBR", n: 12, wr: 66.7, exp: 36.91, pf: 26.10, totRet: 1699, maxDD:  -8.7, hold:  8.2, topSetup: "Pullback-Uptrend" },
    { code: "HRTA", n: 29, wr: 65.5, exp: 12.28, pf:  7.08, totRet: 1564, maxDD: -16.4, hold: 12.5, topSetup: "Pullback-Uptrend" },
    { code: "VKTR", n: 27, wr: 55.6, exp: 13.55, pf:  6.33, totRet: 1411, maxDD: -34.0, hold: 10.4, topSetup: "Wyckoff-Spring" },
    { code: "ENRG", n: 32, wr: 65.6, exp: 10.69, pf:  6.21, totRet: 1321, maxDD: -17.8, hold:  8.7, topSetup: "Pullback-Uptrend" },
    { code: "TAPG", n: 25, wr: 76.0, exp: 11.57, pf: 12.79, totRet: 1198, maxDD:  -9.2, hold: 17.0, topSetup: "Pullback-Uptrend" },
    { code: "PTRO", n: 34, wr: 50.0, exp: 10.03, pf:  4.31, totRet: 1195, maxDD: -37.8, hold: 11.1, topSetup: "Pullback-Uptrend" },
    { code: "ARCI", n: 27, wr: 66.7, exp: 10.06, pf:  6.02, totRet:  842, maxDD: -25.0, hold: 11.3, topSetup: "Pullback-Uptrend" },
    { code: "RAJA", n: 33, wr: 54.5, exp:  8.61, pf:  3.92, totRet:  824, maxDD: -26.3, hold: 10.5, topSetup: "Pullback-Uptrend" },
    { code: "CUAN", n: 28, wr: 42.9, exp: 10.50, pf:  4.17, totRet:  677, maxDD: -26.3, hold: 11.6, topSetup: "EMA200-Bounce" },
    { code: "OASA", n: 31, wr: 61.3, exp:  8.79, pf:  4.47, totRet:  673, maxDD: -24.0, hold: 11.0, topSetup: "EMA200-Bounce" },
    { code: "INET", n: 32, wr: 46.9, exp:  9.70, pf:  2.77, totRet:  578, maxDD: -36.2, hold:  9.5, topSetup: "Pocket-Pivot" },
    { code: "PSAB", n: 31, wr: 64.5, exp:  7.80, pf:  3.76, totRet:  569, maxDD: -33.5, hold: 13.3, topSetup: "Pullback-Uptrend" },
    { code: "BRMS", n: 35, wr: 60.0, exp:  6.65, pf:  3.99, totRet:  542, maxDD: -24.1, hold:  9.1, topSetup: "Pullback-Uptrend" },
    { code: "WIFI", n: 38, wr: 55.3, exp:  6.19, pf:  3.02, totRet:  532, maxDD: -42.1, hold:  8.8, topSetup: "Pullback-Uptrend" },
    { code: "DSNG", n: 29, wr: 69.0, exp:  7.12, pf:  5.14, totRet:  509, maxDD: -13.6, hold: 13.2, topSetup: "Pullback-Uptrend" },
    { code: "TINS", n: 32, wr: 65.6, exp:  7.04, pf:  4.37, totRet:  496, maxDD: -21.6, hold: 12.1, topSetup: "Pullback-Uptrend" },
    { code: "BIPI", n: 29, wr: 51.7, exp:  9.27, pf:  4.40, totRet:  451, maxDD: -26.2, hold: 10.0, topSetup: "EMA200-Bounce" },
    { code: "BUMI", n: 33, wr: 51.5, exp:  6.00, pf:  3.13, totRet:  375, maxDD: -17.6, hold:  9.8, topSetup: "EMA200-Bounce" },
    { code: "KOTA", n:  6, wr: 66.7, exp: 37.27, pf: 13.24, totRet:  341, maxDD: -13.5, hold:  8.2, topSetup: "Pullback-Uptrend" },
    { code: "SSIA", n: 28, wr: 50.0, exp:  6.92, pf:  3.63, totRet:  335, maxDD: -32.7, hold:  9.9, topSetup: "Pullback-Uptrend" },
    { code: "SCMA", n: 23, wr: 56.5, exp:  7.84, pf:  5.05, totRet:  311, maxDD: -23.2, hold: 12.9, topSetup: "EMA200-Bounce" },
    { code: "INCO", n: 22, wr: 68.2, exp:  7.27, pf:  8.91, totRet:  307, maxDD:  -7.2, hold: 13.0, topSetup: "Pocket-Pivot" },
    { code: "MDIA", n:  7, wr: 57.1, exp: 29.15, pf:  9.31, totRet:  303, maxDD: -14.3, hold:  8.1, topSetup: "EMA200-Bounce" },
    { code: "ADRO", n: 30, wr: 63.3, exp:  4.97, pf:  5.86, totRet:  290, maxDD: -10.0, hold: 11.3, topSetup: "Pullback-Uptrend" },
    { code: "MEDC", n: 37, wr: 59.5, exp:  3.98, pf:  3.63, totRet:  277, maxDD: -11.5, hold: 10.2, topSetup: "EMA200-Bounce" },
    { code: "MBMA", n: 24, wr: 54.2, exp:  6.59, pf:  3.34, totRet:  266, maxDD: -18.4, hold: 10.4, topSetup: "Pocket-Pivot" },
    { code: "ANTM", n: 36, wr: 50.0, exp:  4.08, pf:  3.32, totRet:  221, maxDD: -26.7, hold:  8.0, topSetup: "Pocket-Pivot" },
    { code: "WIIM", n: 26, wr: 61.5, exp:  5.31, pf:  3.38, totRet:  209, maxDD: -20.4, hold:  8.8, topSetup: "Pullback-Uptrend" },
    { code: "JPFA", n: 36, wr: 58.3, exp:  3.62, pf:  3.28, totRet:  203, maxDD: -15.6, hold: 11.1, topSetup: "Pullback-Uptrend" },
    { code: "BBYB", n: 24, wr: 54.2, exp:  5.65, pf:  2.87, totRet:  201, maxDD: -20.6, hold: 10.5, topSetup: "Pullback-Uptrend" },
    { code: "AGII", n: 14, wr: 35.7, exp: 11.51, pf:  4.19, totRet:  188, maxDD: -29.7, hold:  8.1, topSetup: "Pullback-Uptrend" },
    { code: "ELSA", n: 29, wr: 58.6, exp:  4.11, pf:  3.72, totRet:  184, maxDD: -12.4, hold: 13.0, topSetup: "Pullback-Uptrend" },
    { code: "LEAD", n: 35, wr: 48.6, exp:  4.22, pf:  2.05, totRet:  180, maxDD: -57.4, hold:  9.7, topSetup: "Pullback-Uptrend" },
    { code: "BKSL", n: 25, wr: 52.0, exp:  5.45, pf:  3.02, totRet:  177, maxDD: -16.2, hold:  9.4, topSetup: "Pullback-Uptrend" },
    { code: "PADI", n: 17, wr: 47.1, exp:  9.24, pf:  2.60, totRet:  174, maxDD: -24.6, hold:  6.8, topSetup: "Pullback-Uptrend" },
    { code: "SMDR", n: 26, wr: 50.0, exp:  4.07, pf:  2.91, totRet:  149, maxDD: -12.6, hold: 12.2, topSetup: "EMA200-Bounce" },
    { code: "TPIA", n: 25, wr: 60.0, exp:  4.30, pf:  3.27, totRet:  140, maxDD: -20.3, hold: 10.8, topSetup: "Accumulation-Zone" },
    { code: "ADMR", n: 24, wr: 58.3, exp:  3.88, pf:  2.78, totRet:  118, maxDD: -21.2, hold: 14.8, topSetup: "EMA200-Bounce" },
    { code: "BDMN", n: 25, wr: 48.0, exp:  4.02, pf:  5.27, totRet:  113, maxDD: -10.1, hold: 12.2, topSetup: "Wyckoff-Spring" },
    { code: "PGEO", n: 26, wr: 42.3, exp:  3.53, pf:  2.83, totRet:  111, maxDD: -19.0, hold:  9.1, topSetup: "EMA200-Bounce" },
    { code: "MDKA", n: 27, wr: 51.9, exp:  3.39, pf:  2.15, totRet:  110, maxDD: -24.0, hold: 11.0, topSetup: "Pullback-Uptrend" },
    { code: "GIAA", n: 22, wr: 40.9, exp:  3.94, pf:  2.85, totRet:   97, maxDD: -26.7, hold:  7.8, topSetup: "Pullback-Uptrend" },
    { code: "EMTK", n: 29, wr: 51.7, exp:  3.09, pf:  2.07, totRet:   97, maxDD: -25.1, hold: 10.3, topSetup: "Pullback-Uptrend" },
    { code: "AADI", n:  8, wr: 62.5, exp:  8.52, pf:  8.12, totRet:   86, maxDD:  -5.2, hold: 14.5, topSetup: "Pullback-Uptrend" },
    { code: "NCKL", n: 28, wr: 39.3, exp:  3.09, pf:  2.09, totRet:   84, maxDD: -32.4, hold: 11.6, topSetup: "Pocket-Pivot" },
    { code: "TKIM", n: 25, wr: 44.0, exp:  2.88, pf:  2.55, totRet:   81, maxDD: -13.7, hold: 11.8, topSetup: "Pullback-Uptrend" },
    { code: "FORE", n:  3, wr: 100.0, exp: 21.39, pf: 999.0, totRet:   78, maxDD:   0.0, hold:  8.7, topSetup: "VCP" },
    { code: "BRPT", n: 25, wr: 36.0, exp:  4.03, pf:  1.96, totRet:   77, maxDD: -46.0, hold:  8.8, topSetup: "Pullback-Uptrend" },
    { code: "EXCL", n: 32, wr: 50.0, exp:  2.12, pf:  2.54, totRet:   76, maxDD: -17.1, hold: 12.1, topSetup: "EMA200-Bounce" },
    { code: "GGRM", n: 16, wr: 50.0, exp:  4.15, pf:  3.09, totRet:   70, maxDD: -15.2, hold:  8.2, topSetup: "Pocket-Pivot" },
    { code: "INDY", n: 36, wr: 41.7, exp:  1.97, pf:  1.69, totRet:   63, maxDD: -40.9, hold:  8.4, topSetup: "Pocket-Pivot" },
    { code: "IATA", n: 25, wr: 40.0, exp:  2.63, pf:  2.07, totRet:   62, maxDD: -22.8, hold:  6.8, topSetup: "Pullback-Uptrend" },
    { code: "BREN", n: 23, wr: 39.1, exp:  2.54, pf:  1.90, totRet:   56, maxDD: -23.3, hold: 10.5, topSetup: "Wyckoff-Spring" },
    { code: "AKRA", n: 28, wr: 64.3, exp:  1.68, pf:  2.47, totRet:   54, maxDD: -15.1, hold: 11.3, topSetup: "EMA200-Bounce" },
    { code: "WMUU", n: 10, wr: 40.0, exp:  5.62, pf:  2.34, totRet:   52, maxDD: -15.5, hold:  5.3, topSetup: "VCP" },
    { code: "RATU", n:  6, wr: 50.0, exp:  7.80, pf:  4.40, totRet:   51, maxDD: -13.2, hold:  7.2, topSetup: "Wyckoff-Spring" },
    { code: "INKP", n: 26, wr: 46.2, exp:  1.87, pf:  1.78, totRet:   46, maxDD: -20.9, hold: 10.3, topSetup: "Pullback-Uptrend" },
    { code: "CDIA", n:  2, wr: 50.0, exp: 16.45, pf:  3.84, totRet:   28, maxDD: -11.6, hold:  5.0, topSetup: "HL-Reversal" },
    { code: "HMSP", n: 20, wr: 35.0, exp:  0.68, pf:  1.23, totRet:    8, maxDD: -13.7, hold: 11.9, topSetup: "Pocket-Pivot" },
    { code: "ESSA", n: 31, wr: 45.2, exp:  0.22, pf:  1.09, totRet:   -4, maxDD: -48.1, hold: 10.4, topSetup: "Pocket-Pivot" },
  ],
};

export const WALKFORWARD: Record<Universe, WalkforwardRow[]> = {
  FLAT: [
    { setup: "Pullback-Uptrend",  n: 374, folds: 4, wr: 55.9, exp:  5.67, pf:  3.75, wrStd:  6.3, expStd:   0.93, verdict: "CONSISTENT" },
    { setup: "EMA200-Bounce",     n: 285, folds: 4, wr: 55.8, exp:  6.09, pf:  4.11, wrStd: 11.9, expStd:   3.26, verdict: "CONSISTENT" },
    { setup: "Pocket-Pivot",      n: 208, folds: 4, wr: 48.1, exp:  0.81, pf:  1.28, wrStd: 13.0, expStd:   1.07, verdict: "VOLATILE" },
    { setup: "Wyckoff-Spring",    n: 130, folds: 4, wr: 54.6, exp:  5.34, pf:  5.39, wrStd: 11.8, expStd:   1.57, verdict: "CONSISTENT" },
    { setup: "Ichimoku-Break",    n: 104, folds: 4, wr: 55.8, exp:  5.90, pf:  4.39, wrStd: 15.6, expStd:   4.12, verdict: "CONSISTENT" },
    { setup: "Accumulation-Zone", n: 103, folds: 4, wr: 60.2, exp:  4.89, pf:  4.46, wrStd: 10.7, expStd:   2.24, verdict: "CONSISTENT" },
    { setup: "Inside-Bar-Break",  n:  78, folds: 4, wr: 57.7, exp:  3.81, pf:  2.83, wrStd:  3.9, expStd:   3.88, verdict: "VOLATILE" },
    { setup: "Stage2-Breakout",   n:  62, folds: 4, wr: 58.1, exp:  4.02, pf:  3.50, wrStd:  5.4, expStd:   3.01, verdict: "CONSISTENT" },
    { setup: "VCP",               n:  59, folds: 4, wr: 42.4, exp:  3.88, pf:  2.89, wrStd: 10.1, expStd:   4.13, verdict: "VOLATILE" },
    { setup: "Golden-Cross",      n:  34, folds: 4, wr: 61.8, exp:  6.04, pf:  5.47, wrStd:  4.2, expStd:   3.46, verdict: "CONSISTENT" },
    { setup: "Donchian-Break",    n:  20, folds: 4, wr: 70.0, exp:  7.35, pf:  5.04, wrStd: 23.6, expStd:  11.97, verdict: "VOLATILE" },
    { setup: "52W-High-Break",    n:  15, folds: 4, wr: 46.7, exp:  2.61, pf:  1.86, wrStd: 43.5, expStd:   8.15, verdict: "VOLATILE" },
    { setup: "HL-Reversal",       n:  13, folds: 4, wr: 46.2, exp:  4.59, pf:  6.71, wrStd: 14.5, expStd:   3.76, verdict: "CONSISTENT" },
    { setup: "Weakness-Recovery", n:   9, folds: 4, wr: 44.4, exp:  2.90, pf:  4.28, wrStd: 28.9, expStd:   3.20, verdict: "VOLATILE" },
    { setup: "High-Tight-Flag",   n:   5, folds: 3, wr: 80.0, exp: 42.13, pf: 22.97, wrStd: 28.9, expStd: 111.24, verdict: "VOLATILE" },
  ],
  BCAST: [
    { setup: "Pullback-Uptrend",  n: 409, folds: 4, wr: 51.8, exp:  5.70, pf:  3.25, wrStd:  6.2, expStd:  1.36, verdict: "CONSISTENT" },
    { setup: "EMA200-Bounce",     n: 247, folds: 4, wr: 59.5, exp:  8.64, pf:  5.22, wrStd: 10.2, expStd:  2.77, verdict: "CONSISTENT" },
    { setup: "Pocket-Pivot",      n: 196, folds: 4, wr: 52.6, exp:  2.63, pf:  1.81, wrStd:  4.8, expStd:  1.69, verdict: "CONSISTENT" },
    { setup: "Ichimoku-Break",    n: 105, folds: 4, wr: 56.2, exp:  7.19, pf:  4.41, wrStd: 20.2, expStd:  4.93, verdict: "CONSISTENT" },
    { setup: "Wyckoff-Spring",    n:  86, folds: 4, wr: 48.8, exp:  6.52, pf:  4.93, wrStd: 17.8, expStd:  2.59, verdict: "CONSISTENT" },
    { setup: "Inside-Bar-Break",  n:  76, folds: 4, wr: 51.3, exp:  4.42, pf:  2.51, wrStd: 17.5, expStd:  5.79, verdict: "VOLATILE" },
    { setup: "Accumulation-Zone", n:  66, folds: 4, wr: 65.2, exp:  7.34, pf:  5.28, wrStd: 14.1, expStd:  3.07, verdict: "CONSISTENT" },
    { setup: "VCP",               n:  66, folds: 4, wr: 53.0, exp:  4.96, pf:  3.28, wrStd: 13.2, expStd:  3.71, verdict: "CONSISTENT" },
    { setup: "Stage2-Breakout",   n:  40, folds: 4, wr: 62.5, exp:  5.05, pf:  3.72, wrStd: 20.2, expStd:  5.30, verdict: "VOLATILE" },
    { setup: "Golden-Cross",      n:  27, folds: 4, wr: 63.0, exp:  8.33, pf:  7.99, wrStd:  4.6, expStd:  4.01, verdict: "CONSISTENT" },
    { setup: "52W-High-Break",    n:  24, folds: 4, wr: 54.2, exp:  7.80, pf:  3.90, wrStd: 37.6, expStd:  8.79, verdict: "VOLATILE" },
    { setup: "Donchian-Break",    n:  24, folds: 4, wr: 66.7, exp:  6.97, pf:  4.00, wrStd: 14.9, expStd:  8.25, verdict: "VOLATILE" },
    { setup: "High-Tight-Flag",   n:  10, folds: 4, wr: 50.0, exp: 18.18, pf:  5.72, wrStd: 40.8, expStd: 99.60, verdict: "VOLATILE" },
    { setup: "HL-Reversal",       n:   5, folds: 4, wr: 100.0, exp: 15.07, pf: 999.0, wrStd: 0.0, expStd:  9.91, verdict: "CONSISTENT" },
    { setup: "Weakness-Recovery", n:   3, folds: 3, wr: 33.3, exp:  5.59, pf: 11.81, wrStd: 57.7, expStd: 11.03, verdict: "VOLATILE" },
  ],
};
