"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CardProps {
  badge: string;
  category: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

function ContentCard({
  badge,
  category,
  heading,
  body,
  imageSrc,
  imageAlt,
  className = "",
}: CardProps) {
  return (
    <article
      className={`system-card group relative flex flex-col justify-between p-8 md:p-10 min-h-[380px] md:min-h-[420px] transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      {/* Background Image with Charcoal Surface overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center opacity-35 group-hover:opacity-45 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-[#272a2a]/75" />
      </div>

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="badge-pill">{badge}</span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/60 group-hover:text-[#cc6437] transition-colors">
          [ {category} ]
        </span>
      </div>

      {/* Bottom Content Row */}
      <div className="relative z-10 mt-auto pt-8 flex flex-col gap-3">
        <h3 className="font-brand text-3xl md:text-4xl text-white tracking-wide leading-tight">
          {heading}
        </h3>
        <p className="font-body text-base md:text-lg text-white/85 leading-relaxed max-w-xl whitespace-pre-line tracking-wide">
          {body}
        </p>
      </div>
    </article>
  );
}

export default function ContentGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll(".system-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="content"
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-[#0b0b0b] border-t border-white/[0.06]"
      aria-label="Core Content Pillars"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#cc6437]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                DISCIPLINE & OUTPUT
              </span>
            </div>
            <h2 className="font-brand text-4xl md:text-6xl text-white tracking-wide">
              CONTENT PILLARS
            </h2>
          </div>
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
            3 CHANNELS / 1 VISION
          </span>
        </div>

        {/* Asymmetric 3-Card Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1: 2-column span on desktop, with 07-handheld-synth.png */}
          <ContentCard
            badge="01"
            category="PRODUCTION PROCESS"
            heading="HOW A TRACK IS BUILT"
            body="着想からミックスダウンまで、1本の曲ができる過程をそのまま見せる。音源選びの理由、テンポの決め方、制約の中でどこを削り、どこを残すか。"
            imageSrc="/images/07-handheld-synth.png"
            imageAlt="Retro 8-bit chunky handheld synthesizer and controller in ember rust"
            className="md:col-span-2 lg:col-span-2"
          />

          {/* Card 2: 1-column span on desktop, with 08-crt-scanline.png */}
          <ContentCard
            badge="02"
            category="CHIP ARCHITECTURE"
            heading="INSIDE THE CHIP"
            body="レトロゲーム音源がどう鳴っているかを解剖する。矩形波・三角波・ノイズ、それぞれのチャンネルが何を担っていたかを、実際の音と波形で解説する。"
            imageSrc="/images/08-crt-scanline.png"
            imageAlt="Vintage curved CRT monitor screen with scanlines"
            className="md:col-span-1 lg:col-span-1"
          />

          {/* Card 3: 1-column span on desktop, with 04-card-freebeats.png */}
          <ContentCard
            badge="03"
            category="FREE RELEASES"
            heading="FREE BEAT PACKS"
            body="制作したビートの一部を無料で配布している。ラッパー・実況者・インディーゲーム制作者、誰でも使ってよい。"
            imageSrc="/images/04-card-freebeats.png"
            imageAlt="Macro cassette tape magnetic reels texture"
            className="md:col-span-1 lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
