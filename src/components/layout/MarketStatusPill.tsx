"use client";

import { useEffect, useState } from "react";

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

export default function MarketStatusPill() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(computeStatus(new Date()));
    const id = setInterval(
      () => setStatus(computeStatus(new Date())),
      30000
    );
    return () => clearInterval(id);
  }, []);

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
