"use client";

import React from "react";

export default function MobileCtaBar() {
  return (
    <aside
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0b0b0b]/90 backdrop-blur-md border-t border-white/[0.1] p-3 safe-area-bottom"
      aria-label="Mobile Action Bar"
    >
      <div className="flex items-center justify-between gap-3 max-w-sm mx-auto">
        <span className="font-brand text-base tracking-wider uppercase text-white/80 pl-2">
          PX-9 // COMMISSIONS
        </span>
        <a
          href="#contact"
          className="ghost-pill-btn text-xs tracking-wider py-3 px-6 min-h-[48px] border-[#cc6437] text-white flex items-center justify-center"
        >
          CONTACT
        </a>
      </div>
    </aside>
  );
}
