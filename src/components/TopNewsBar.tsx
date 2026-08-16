"use client";

import React from "react";

export default function TopNewsBar() {
  const newsText =
    "SYNC LICENSING OPEN • FREE BEAT PACK VOL. 3 OUT NOW • TRACK TEARDOWNS WEEKLY";

  return (
    <div
      className="w-full bg-[#050505] border-b border-white/[0.08] py-2 px-4 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-white/80 select-none overflow-hidden"
      role="region"
      aria-label="Latest Announcements"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#cc6437] opacity-90 animate-pulse" />
        <span>{newsText}</span>
      </div>
    </div>
  );
}
