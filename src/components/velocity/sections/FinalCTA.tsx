"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function FinalCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="cta"
      className="relative mt-10 overflow-hidden border-t border-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.2]" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,163,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,163,255,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {!reducedMotion ? (
        <motion.div
          aria-hidden
          className="absolute -left-1/4 top-1/2 h-40 w-[60rem] -translate-y-1/2 bg-electricblue/15 blur-2xl"
          animate={{ x: ["-30%", "30%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 py-20 sm:py-24 text-center">
        <p className="text-xs tracking-[0.28em] uppercase text-white/60">
          VELOCITY MEMBERSHIP
        </p>
        <h2 className="mt-5 text-[clamp(34px,5.2vw,64px)] leading-[0.98] font-black tracking-tight">
          Train fast.
          <span className="block text-electricblue">Recover harder.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
          A premium training system designed to make your body move like you mean it.
          Clean mechanics. Loud output. Visible progress.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#programs"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-electricblue px-8 py-3 font-semibold text-black shadow-[0_0_0_1px_rgba(0,163,255,0.35),0_0_38px_rgba(0,163,255,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            whileHover={reducedMotion ? undefined : { y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <span className="relative z-10">Start Your Training</span>
            <span className="pointer-events-none absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute -left-full top-0 h-full w-full bg-white/30 opacity-60 transition-transform duration-700 group-hover:translate-x-full" />
          </motion.a>

          <motion.a
            href="#metrics"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/20 px-8 py-3 font-semibold text-white/90 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            whileHover={reducedMotion ? undefined : { y: -2 }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
          >
            <span className="relative inline-flex items-center gap-3">
              View Performance
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
                <span className="h-[6px] w-[6px] rounded-full bg-electricblue" />
              </span>
            </span>
          </motion.a>
        </div>

        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-5 py-2">
          <span className="h-2 w-2 rounded-full bg-electricblue" />
          <p className="text-sm text-white/65">
            Fast. Powerful. Alive. Built for relentless training.
          </p>
        </div>
      </div>
    </section>
  );
}

