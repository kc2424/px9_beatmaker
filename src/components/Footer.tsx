"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/[0.08] py-12 px-6 md:px-12 pb-24 md:pb-12 text-white/50 font-mono text-xs">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#cc6437]" />
          <span className="tracking-widest uppercase text-white/70">PX-9</span>
        </div>
        <p className="tracking-wider text-center sm:text-right">
          © PX-9. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
