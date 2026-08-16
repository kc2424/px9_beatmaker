"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const crtRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (crtRef.current && sectionRef.current) {
      gsap.to(crtRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
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
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-[#0b0b0b] border-t border-white/[0.06] overflow-hidden"
      aria-label="About PX-9"
    >
      {/* CRT Scanline Ambient Background (08-crt-scanline.png) */}
      <div
        ref={crtRef}
        className="absolute inset-0 pointer-events-none opacity-25 select-none z-0"
      >
        <Image
          src="/images/08-crt-scanline.png"
          alt="Vintage curved CRT monitor screen with warm ember raster scanlines"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0b0b0b]/80" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div ref={contentRef} className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#cc6437]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              WHO IS PX-9
            </span>
          </div>

          {/* Section Heading in Modak */}
          <h2 className="font-brand text-4xl md:text-6xl text-white tracking-wide mb-8 leading-tight">
            RESTRICTION AS AN ARTISTIC DECISION
          </h2>

          {/* Exact Japanese Copy in New Tegomin */}
          <div className="space-y-6 font-body text-lg md:text-xl text-white/90 leading-relaxed tracking-wide">
            <p>
              PX-9はチップチューン出身のビートメイカー。矩形波・三角波・ノイズという
              数少ない音源の制約から曲を組み立て、現代のミックスとBPMでリビルドする。
            </p>
            <p>
              8bitは過去を懐かしむための道具ではない。今も現役で鳴らせる選択肢のひとつ。
              制限は言い訳にならない——それがPX-9の一貫した態度。
            </p>
          </div>

          {/* 3 Core Waveform Badges */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[#cc6437] uppercase tracking-wider">
                CH 01
              </span>
              <span className="font-brand text-base md:text-lg text-white/90 tracking-wide">
                SQUARE WAVE
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[#cc6437] uppercase tracking-wider">
                CH 02
              </span>
              <span className="font-brand text-base md:text-lg text-white/90 tracking-wide">
                TRIANGLE WAVE
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] text-[#cc6437] uppercase tracking-wider">
                CH 03
              </span>
              <span className="font-brand text-base md:text-lg text-white/90 tracking-wide">
                NOISE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
