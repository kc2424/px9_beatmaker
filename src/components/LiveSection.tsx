"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LiveSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageContainerRef.current && sectionRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 1.05, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }

    if (contentRef.current && sectionRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="live"
      ref={sectionRef}
      className="relative w-full py-28 md:py-44 bg-[#0b0b0b] border-t border-white/[0.06] overflow-hidden"
      aria-label="Live Performance and Hardware Setup"
    >
      {/* Background Live Performance Image */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <Image
          src="/images/09-live-performance.jpg"
          alt="PX-9 performing live with hardware 8-bit synthesizers and samplers in a foggy dark club with warm amber lighting"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        {/* Soft edge darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/60 to-[#0b0b0b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-transparent to-[#0b0b0b]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div ref={contentRef} className="max-w-2xl flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#cc6437] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#cc6437]">
              LIVE SOUND SYSTEM
            </span>
          </div>

          {/* Heading in Alegreya */}
          <h2 className="font-brand text-4xl md:text-6xl text-white tracking-wider uppercase leading-tight">
            HARDWARE PERFORMANCE
          </h2>

          {/* Body in New Tegomin */}
          <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed tracking-wide">
            ラップトップの画面を見つめるDJセットではない。ゲーム機実機とハードウェアサンプラー、モジュラーシンセをその場で同期させ、8bitの生々しいパルスを現場のスピーカーから直接放つ。
          </p>

          {/* Live Specs Badges */}
          <div className="mt-6 pt-6 border-t border-white/[0.1] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[#cc6437] uppercase tracking-wider">
                SETUP 01
              </span>
              <span className="font-brand text-sm md:text-base text-white/90 tracking-wider uppercase">
                DIRECT LINE OUT
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[#cc6437] uppercase tracking-wider">
                SETUP 02
              </span>
              <span className="font-brand text-sm md:text-base text-white/90 tracking-wider uppercase">
                CHIP SYNC 140BPM
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[#cc6437] uppercase tracking-wider">
                SETUP 03
              </span>
              <span className="font-brand text-sm md:text-base text-white/90 tracking-wider uppercase">
                ZERO BACKTRACK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
