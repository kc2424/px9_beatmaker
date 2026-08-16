"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "CONTENT", href: "#content" },
    { label: "SELECTED WORK", href: "#works" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Left Pill: MENU */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="ghost-pill-btn text-xs tracking-wider"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            MENU
          </button>

          {/* Center Brand */}
          <a
            href="#"
            className="font-brand text-2xl md:text-3xl tracking-widest text-white hover:text-[#cc6437] transition-colors"
          >
            PX-9
          </a>

          {/* Right Pill: CONTACT */}
          <a
            href="#contact"
            className="ghost-pill-btn text-xs tracking-wider"
          >
            CONTACT
          </a>
        </div>
      </header>

      {/* Fullscreen Minimal Navigation Overlay */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 bg-[#0b0b0b]/95 backdrop-blur-lg flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              [ NAVIGATION ]
            </span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="ghost-pill-btn flex items-center gap-2 text-xs"
              aria-label="Close Navigation"
            >
              <X className="w-3.5 h-3.5" />
              <span>CLOSE</span>
            </button>
          </div>

          <nav className="max-w-[1400px] w-full mx-auto my-auto flex flex-col gap-6 md:gap-8">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-baseline gap-4 text-3xl md:text-5xl font-brand tracking-wider text-white/70 hover:text-white transition-colors"
              >
                <span className="font-mono text-xs md:text-sm text-[#cc6437]">
                  0{idx + 1}
                </span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center text-xs font-mono text-white/40 pt-6 border-t border-white/[0.08]">
            <span>PX-9 CHIPTUNE DISCIPLINE</span>
            <span>8BIT REBUILD</span>
          </div>
        </div>
      )}
    </>
  );
}
