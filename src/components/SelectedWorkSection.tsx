"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const works = [
  {
    id: "01",
    type: "SELF RELEASE",
    title: "FREE BEAT PACK — VOL. 1–3",
    description:
      "自主配布のビートパックシリーズ。累計ダウンロード数などの統計は非公開。",
  },
  {
    id: "02",
    type: "COMPILATION",
    title: "CHIPTUNE COMPILATION: VOID PULSE",
    description:
      "複数のチップチューンアーティストによる自主企画コンピレーションに参加。",
  },
  {
    id: "03",
    type: "CUSTOM SCORE",
    title: "INDIE GAME JAM SCORES",
    description:
      "個人・小規模インディーゲーム制作者からの依頼で、ゲームジャム作品に楽曲を提供。",
  },
];

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (rowsRef.current) {
      const rows = rowsRef.current.querySelectorAll(".work-row");
      gsap.fromTo(
        rows,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rowsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-[#edebe7] text-[#0b0b0b] overflow-hidden"
      aria-label="Selected Works and Releases"
    >
      {/* Light Paper / Textile Grain Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-40">
        <Image
          src="/images/05-light-texture.png"
          alt="Bone subtle paper and textile grain texture"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0b0b0b]/15 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#cc6437]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0b0b0b]/70">
                SELECTED WORK
              </span>
            </div>
            <h2 className="font-brand text-4xl md:text-6xl text-[#0b0b0b] tracking-wide">
              AUTONOMOUS ARCHIVE
            </h2>
          </div>
          <span className="font-mono text-xs text-[#0b0b0b]/50 uppercase tracking-widest">
            INDEPENDENT RELEASES ONLY
          </span>
        </div>

        {/* Work Items List */}
        <div ref={rowsRef} className="flex flex-col divide-y divide-[#0b0b0b]/15">
          {works.map((work) => (
            <div
              key={work.id}
              className="work-row py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
            >
              {/* Number & Type */}
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="font-mono text-xs text-[#cc6437] tracking-wider">
                  [{work.id}]
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#0b0b0b]/60">
                  {work.type}
                </span>
              </div>

              {/* Title in Modak */}
              <div className="md:col-span-5">
                <h3 className="font-brand text-2xl md:text-3xl text-[#0b0b0b] tracking-wide group-hover:text-[#cc6437] transition-colors">
                  {work.title}
                </h3>
              </div>

              {/* Description in New Tegomin */}
              <div className="md:col-span-4">
                <p className="font-body text-base md:text-lg text-[#0b0b0b]/80 leading-relaxed tracking-wide">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
