"use client";

import React from "react";
import ParallaxBlock from "../scroll/ParallaxBlock";
import ProgramShowcase from "./ProgramShowcase";
import PerformanceMetrics from "./PerformanceMetrics";
import TestimonialsCarousel from "./TestimonialsCarousel";
import FinalCTA from "./FinalCTA";

function SectionFrame({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-28">
      <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 sm:block bg-gradient-to-b from-electricblue/0 via-electricblue/30 to-electricblue/0" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <ParallaxBlock y={[70, 0]} opacity={[0, 1]} scale={[0.99, 1]}>
          <p className="text-xs tracking-[0.26em] uppercase text-white/60">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(28px,4.2vw,44px)] leading-[1.05] font-black tracking-tight">
            {title}
          </h2>
        </ParallaxBlock>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function ConnectedScrollSections() {
  return (
    <div className="relative">
      {/* PROGRAMS placeholder frame (replaced by real interactive panels later) */}
      <SectionFrame
        id="programs"
        eyebrow="PROGRAM / SYSTEM"
        title="Built for velocity. Designed for control."
      >
        <ParallaxBlock
          y={[60, 0]}
          opacity={[0, 1]}
          scale={[0.97, 1]}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10"
        >
          <ProgramShowcase />
        </ParallaxBlock>
      </SectionFrame>

      {/* METRICS placeholder frame */}
      <SectionFrame
        id="metrics"
        eyebrow="PERFORMANCE METRICS"
        title="Measure the burn. Watch the recovery."
      >
        <ParallaxBlock
          y={[60, 0]}
          opacity={[0, 1]}
          scale={[0.97, 1]}
          className="p-0 bg-transparent border-0"
        >
          <PerformanceMetrics />
        </ParallaxBlock>
      </SectionFrame>

      {/* TESTIMONIALS placeholder frame */}
      <SectionFrame
        id="testimonials"
        eyebrow="SOCIAL PROOF"
        title="Relentless results. Real bodies. Loud energy."
      >
        <ParallaxBlock y={[60, 0]} opacity={[0, 1]} scale={[0.97, 1]} className="p-0 bg-transparent border-0">
          <TestimonialsCarousel />
        </ParallaxBlock>
      </SectionFrame>

      <FinalCTA />
    </div>
  );
}

