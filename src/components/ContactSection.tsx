"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [inquiryStatus, setInquiryStatus] = useState<string | null>(null);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setInquiryStatus(
      "現在、タイアップおよびライセンスのご相談はDM等のダイレクトメッセージ窓口にて受付を行っています。"
    );
  };

  return (
    <section
      id="contact"
      className="w-full py-24 md:py-36 bg-[#0b0b0b] border-t border-white/[0.08]"
      aria-label="Contact and Licensing"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#cc6437]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              COMMISSIONS & LICENSING
            </span>
          </div>

          {/* Heading in Alegreya */}
          <h2 className="font-brand text-4xl md:text-6xl text-white tracking-wider uppercase">
            WORK WITH PX-9
          </h2>

          {/* Body in New Tegomin */}
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl tracking-wide">
            シンクライセンス、カスタムスコア制作、コラボレーションの相談を受け付けている。
          </p>

          {/* Ghost Pill CTA Button */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              onClick={handleCtaClick}
              className="ghost-pill-btn text-sm tracking-widest px-8 py-3.5 border-white/40 hover:border-[#cc6437]"
            >
              GET IN TOUCH
            </a>
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
              [ DIRECT COMMISSIONS ]
            </span>
          </div>

          {/* Interactive feedback notice (if clicked) */}
          {inquiryStatus && (
            <div className="mt-4 p-5 rounded-[10px] bg-[#272a2a] border border-[#cc6437]/40 text-white/95 text-base font-body animate-in fade-in duration-200 tracking-wide">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#cc6437]" />
                {inquiryStatus}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
