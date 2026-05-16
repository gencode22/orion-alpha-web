"use client";

import { useSyncExternalStore } from "react";

type Status = { open: boolean; label: string; time: string };

function computeStatus(now: Date): Status {
  const jakarta = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  const day = jakarta.getDay();
  const hh = jakarta.getHours();
  const mm = jakarta.getMinutes();
  const t = hh * 60 + mm;
  const timeStr = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;

  // Weekend
  if (day === 0 || day === 6) {
    return { open: false, label: "CLOSED", time: timeStr };
  }
  const isFri = day === 5;
  const s1Start = 9 * 60;
  const s1End = isFri ? 11 * 60 + 30 : 12 * 60;
  const s2Start = isFri ? 14 * 60 : 13 * 60 + 30;
  const s2End = 15 * 60 + 50;

  const open =
    (t >= s1Start && t < s1End) || (t >= s2Start && t < s2End);
  return { open, label: open ? "OPEN" : "CLOSED", time: timeStr };
}

// Module-level store: time is an external source, so useSyncExternalStore
// is the recommended primitive (vs useState + setState-in-effect).
const listeners = new Set<() => void>();
let snapshot: Status | null = null;
let interval: ReturnType<typeof setInterval> | null = null;

function getSnapshot(): Status | null {
  if (snapshot === null && typeof window !== "undefined") {
    snapshot = computeStatus(new Date());
  }
  return snapshot;
}

function getServerSnapshot(): null {
  // Render nothing during SSR; client fills in after mount.
  return null;
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  if (interval === null) {
    interval = setInterval(() => {
      snapshot = computeStatus(new Date());
      listeners.forEach((cb) => cb());
    }, 30000);
  }
  return () => {
    listeners.delete(callback);
    if (listeners.size === 0 && interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  };
}

export default function MarketStatusPill() {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!status) return null;

  return (
    <span
      className={`market-pill${status.open ? " is-open" : ""}`}
      aria-label={`IDX market ${status.label}, ${status.time} WIB`}
      title={`Jakarta time · IDX ${status.label}`}
    >
      <span className="market-pill-dot" aria-hidden="true" />
      <span className="market-pill-label">IDX {status.label}</span>
      <span className="market-pill-sep" aria-hidden="true">·</span>
      <span className="market-pill-time">{status.time} WIB</span>
    </span>
  );
}
