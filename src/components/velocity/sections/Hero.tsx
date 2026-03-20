"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import BackgroundHero from "../BackgroundHero";
import TextReveal from "../TextReveal";

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <BackgroundHero />

      {/* Top command bar */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 sm:px-10 pt-6">
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-electricblue shadow-[0_0_26px_rgba(0,163,255,0.85)]" />
            <span className="font-mono text-xs tracking-[0.22em] uppercase text-white/90">
              VELOCITY
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#programs"
              className="rounded-md text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Programs
            </a>
            <a
              href="#metrics"
              className="rounded-md text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Metrics
            </a>
            <a
              href="#testimonials"
              className="rounded-md text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Proof
            </a>
          </nav>

          <motion.a
            href="#cta"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            whileHover={reducedMotion ? undefined : { y: -2 }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
          >
            Join
          </motion.a>
        </div>
      </header>

      <div className="relative z-10 w-full px-6 sm:px-10">
        <div className="mx-auto max-w-6xl pt-28 pb-20 sm:pt-32 sm:pb-24">
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="inline-flex items-center gap-3 text-xs tracking-[0.26em] uppercase text-white/70">
              <span className="h-[1px] w-10 bg-electricblue" />
              Premium fitness • electric performance
            </p>

            <h1 className="mt-6 text-[clamp(54px,10vw,118px)] leading-[0.86] font-black tracking-tight">
              <TextReveal text="VELOCITY" className="block" stagger={0.03} />
              <span className="block mt-3 text-white/90">
                TRAINING THAT MOVES
              </span>
              <span className="block mt-3 text-electricblue">
                WITH YOU
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
              A luxury training system engineered for speed, recovery, and momentum.
              Built to feel fast. Designed to look lethal.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#programs"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-electricblue px-7 py-3 font-semibold text-black shadow-[0_0_0_1px_rgba(0,163,255,0.3),0_0_38px_rgba(0,163,255,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                whileHover={reducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={reducedMotion ? undefined : { scale: 0.99 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <span className="relative z-10">Start Training</span>
                <span className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute -left-full top-0 h-full w-full bg-black/30 opacity-100 transition-transform duration-500 group-hover:translate-x-full" />
              </motion.a>

              <motion.a
                href="#metrics"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 font-semibold text-white/90 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                whileHover={reducedMotion ? undefined : { y: -2 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
              >
                <span className="inline-flex items-center gap-2">
                  See Performance
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
                    <span className="h-[6px] w-[6px] rounded-full bg-electricblue" />
                  </span>
                </span>
              </motion.a>
            </div>

            {/* Scroll cue */}
            <div className="mt-12 flex items-center gap-4 text-sm text-white/60">
              <motion.span
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15"
                animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
                transition={reducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="h-[2px] w-5 bg-electricblue" />
              </motion.span>
              <span>Scroll to ignite the system</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

