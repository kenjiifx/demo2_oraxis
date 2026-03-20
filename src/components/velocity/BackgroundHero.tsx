"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function BackgroundHero() {
  const reducedMotion = useReducedMotion();
  const [videoOk, setVideoOk] = React.useState(true);

  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      {/* Video layer (optional). If `/hero-video.mp4` doesn't exist, we fall back to an electric gradient. */}
      {videoOk ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/hero-video.mp4"
          onError={() => setVideoOk(false)}
        />
      ) : null}

      {/* Signature deep-black base */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Electric grid */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,163,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,163,255,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Static energy field */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.24),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(0,163,255,0.14),transparent_60%)]" />

      {/* Subtle motion glow */}
      {!reducedMotion ? (
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(0,163,255,0.35),transparent_35%)]"
          animate={{
            x: [-40, 40, -40],
            y: [-22, 18, -22],
            scale: [1, 1.07, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
    </div>
  );
}

