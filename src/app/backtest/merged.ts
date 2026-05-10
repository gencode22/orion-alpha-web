import {
  SETUPS,
  STOCKS,
  WALKFORWARD,
  type SetupRow,
  type StockRow,
  type WalkforwardRow,
  type Verdict,
} from "./data";

/** Stricter verdict wins (CONSISTENT beaten by VOLATILE beaten by NEGATIVE). */
const VERDICT_RANK: Record<Verdict, number> = {
  CONSISTENT: 0,
  VOLATILE: 1,
  NEGATIVE: 2,
  INSUFFICIENT: 3,
};

function stricter(a: Verdict, b: Verdict): Verdict {
  return VERDICT_RANK[a] >= VERDICT_RANK[b] ? a : b;
}

/** Stocks in both watchlists have identical stats — first occurrence wins. */
export function mergedStocks(): StockRow[] {
  const map = new Map<string, StockRow>();
  for (const r of [...STOCKS.FLAT, ...STOCKS.BCAST]) {
    if (!map.has(r.code)) map.set(r.code, r);
  }
  return Array.from(map.values()).sort((a, b) => b.totRet - a.totRet);
}

/** N-weighted merge of setup aggregates across FLAT + BCAST. */
export function mergedSetups(): SetupRow[] {
  type Pair = { setup: string; a: SetupRow; b?: SetupRow };
  const map = new Map<string, Pair>();
  for (const r of SETUPS.FLAT) map.set(r.setup, { setup: r.setup, a: r });
  for (const r of SETUPS.BCAST) {
    const cur = map.get(r.setup);
    if (cur) cur.b = r;
    else map.set(r.setup, { setup: r.setup, a: r });
  }

  const out: SetupRow[] = [];
  for (const { setup, a, b } of map.values()) {
    if (!b) {
      out.push(a);
      continue;
    }
    const n = a.n + b.n;
    const winsA = (a.n * a.wr) / 100;
    const winsB = (b.n * b.wr) / 100;
    const wins = winsA + winsB;
    const lossA = a.n - winsA;
    const lossB = b.n - winsB;
    const losses = lossA + lossB;
    const wr = n > 0 ? (wins / n) * 100 : 0;
    const avgW = wins > 0 ? (winsA * a.avgW + winsB * b.avgW) / wins : 0;
    const avgL = losses > 0 ? (lossA * a.avgL + lossB * b.avgL) / losses : 0;
    const exp = (wr / 100) * avgW + (1 - wr / 100) * avgL;
    const grossW = wins * avgW;
    const grossL = Math.abs(losses * avgL);
    const pf = grossL > 0 ? grossW / grossL : 999;
    out.push({ setup, n, wr, avgW, avgL, exp, pf });
  }
  return out.sort((x, y) => y.n - x.n);
}

/** Combined walkforward. Stricter verdict + weighted aggregates. */
export function mergedWalkforward(): WalkforwardRow[] {
  type Pair = { setup: string; a: WalkforwardRow; b?: WalkforwardRow };
  const map = new Map<string, Pair>();
  for (const r of WALKFORWARD.FLAT) map.set(r.setup, { setup: r.setup, a: r });
  for (const r of WALKFORWARD.BCAST) {
    const cur = map.get(r.setup);
    if (cur) cur.b = r;
    else map.set(r.setup, { setup: r.setup, a: r });
  }

  const out: WalkforwardRow[] = [];
  for (const { setup, a, b } of map.values()) {
    if (!b) {
      out.push(a);
      continue;
    }
    const n = a.n + b.n;
    const folds = Math.max(a.folds, b.folds);
    const winsA = (a.n * a.wr) / 100;
    const winsB = (b.n * b.wr) / 100;
    const wr = n > 0 ? ((winsA + winsB) / n) * 100 : 0;
    const exp = n > 0 ? (a.n * a.exp + b.n * b.exp) / n : 0;
    const pf =
      a.pf >= 999 || b.pf >= 999
        ? 999
        : n > 0
        ? (a.n * a.pf + b.n * b.pf) / n
        : 0;
    // Variance fields collapse when merging across universes — show worst-case.
    const wrStd = Math.max(a.wrStd, b.wrStd);
    const expStd = Math.max(a.expStd, b.expStd);
    const verdict = stricter(a.verdict, b.verdict);
    out.push({ setup, n, folds, wr, exp, pf, wrStd, expStd, verdict });
  }
  return out.sort((x, y) => y.n - x.n);
}

/** Aggregate headline numbers after merge. */
export function mergedHeadline() {
  const stocks = mergedStocks();
  const setups = mergedSetups();
  const wf = mergedWalkforward();

  const totalTrades = setups.reduce((s, r) => s + r.n, 0);
  const totalWins = setups.reduce((s, r) => s + (r.n * r.wr) / 100, 0);
  const overallWR = totalTrades > 0 ? (totalWins / totalTrades) * 100 : 0;
  const consistent = wf.filter((r) => r.verdict === "CONSISTENT").length;
  const totalSetups = wf.length;
  const top = stocks[0];

  return {
    totalTrades,
    uniqueStocks: stocks.length,
    overallWR,
    consistent,
    totalSetups,
    topReturn: top.totRet,
    topReturnCode: top.code,
  };
}
