"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroSection() {
  const rimPulseRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle breathing pulse on the ember-rust accent line
    if (rimPulseRef.current) {
      gsap.to(rimPulseRef.current, {
        opacity: 0.35,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Subtle initial reveal of hero text
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power2.out", delay: 0.2 }
      );
    }
  }, []);

  return (
    <section
      className="relative w-full min-h-[88vh] md:min-h-[92vh] flex items-end justify-start overflow-hidden bg-[#0b0b0b]"
      aria-label="Hero Section"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/01-hero-portrait.png"
          alt="PX-9 silhouette portrait in deep shadow traced by ember-rust rimlight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center opacity-85"
        />
        {/* Soft edge darkening to integrate seamlessly into void black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/50 to-transparent hidden md:block" />
      </div>

      {/* Subtle Ember Hairline Accent */}
      <div
        ref={rimPulseRef}
        className="absolute top-0 right-0 w-full md:w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#cc6437] to-transparent opacity-80 pointer-events-none z-10"
      />

      {/* Content Overlay */}
      <div
        ref={textRef}
        className="relative z-20 max-w-[1400px] w-full mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-32"
      >
        <div className="max-w-2xl flex flex-col gap-6">
          {/* Tagline Badge */}
          <div className="flex items-center gap-3">
            <span className="badge-pill">CHIPTUNE PRODUCER</span>
            <span className="w-12 h-[1px] bg-[#484848]" />
            <span className="font-mono text-xs text-[#cc6437] uppercase tracking-widest">
              DISCIPLINE & CHOICE
            </span>
          </div>

          {/* Main Wordmark H1 with Alegreya */}
          <h1 className="font-brand text-7xl md:text-9xl text-white tracking-wider leading-none select-none uppercase">
            PX-9
          </h1>

          {/* Philosophy Statement in Alegreya */}
          <p className="font-brand text-xl md:text-3xl text-white/90 tracking-wider leading-snug max-w-xl border-l border-[#cc6437] pl-4 uppercase">
            8BIT IS NOT A LIMITATION. IT&apos;S A CHOICE.
          </p>

          {/* Minimal Quick Links */}
          <div className="pt-4 flex items-center gap-4">
            <a href="#about" className="ghost-pill-btn text-xs tracking-wider">
              EXPLORE WORLD
            </a>
            <a
              href="#works"
              className="ghost-pill-btn text-xs tracking-wider border-white/20 text-white/70 hover:border-white/50"
            >
              SELECTED WORK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
