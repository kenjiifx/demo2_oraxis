"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import useCountUp from "../metrics/useCountUp";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

const metrics: Metric[] = [
  {
    label: "Velocity Boost",
    value: 38,
    suffix: "%",
    description: "Acceleration gains that stay sharp in real sessions.",
  },
  {
    label: "Recovery Index",
    value: 92,
    suffix: "/100",
    description: "A protocol built to keep output rising without collapse.",
  },
  {
    label: "Explosive Power",
    value: 17,
    suffix: "%",
    description: "Strength-to-speed transfer engineered for impact.",
  },
];

const bars = [
  { label: "Acceleration", value: 86 },
  { label: "Stability", value: 72 },
  { label: "Recovery", value: 90 },
  { label: "Output", value: 78 },
  { label: "Cadence", value: 81 },
];

export default function PerformanceMetrics() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -10% 0px" });

  const count0 = useCountUp({
    to: metrics[0].value,
    start: inView,
    duration: 1.5,
    format: (v) => `${Math.round(v)}${metrics[0].suffix ?? ""}`,
  });
  const count1 = useCountUp({
    to: metrics[1].value,
    start: inView,
    duration: 1.65,
    format: (v) => `${Math.round(v)}${metrics[1].suffix ?? ""}`,
  });
  const count2 = useCountUp({
    to: metrics[2].value,
    start: inView,
    duration: 1.8,
    format: (v) => `${Math.round(v)}${metrics[2].suffix ?? ""}`,
  });

  const maxBarHeightPx = 180;

  return (
    <div ref={ref} className="w-full">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="space-y-5">
            {[
              { metric: metrics[0], value: count0 },
              { metric: metrics[1], value: count1 },
              { metric: metrics[2], value: count2 },
            ].map(({ metric, value }) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs tracking-[0.18em] uppercase text-white/55">
                  {metric.label}
                </p>
                <p className="mt-2 text-4xl font-black tracking-tight text-white">
                  {value}
                </p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {metric.description}
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-electricblue/70 via-white/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-white/90 tracking-tight">
                Live Performance Bars
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-electricblue" />
                <span className="text-xs text-white/65">In-view animation</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {bars.map((bar) => {
                const targetPx = (bar.value / 100) * maxBarHeightPx;
                return (
                  <div key={bar.label} className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs text-white/70">{bar.label}</p>
                      <p className="text-xs text-electricblue">{bar.value}%</p>
                    </div>
                    <div className="h-[200px] w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
                      <motion.div
                        className="w-full rounded-t-xl bg-gradient-to-t from-electricblue/30 via-electricblue/60 to-white/10"
                        initial={{ height: 0, opacity: 0.4 }}
                        animate={
                          inView
                            ? { height: targetPx, opacity: 1 }
                            : { height: 0, opacity: 0.4 }
                        }
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                      {/* top shimmer */}
                      <motion.div
                        className="mt-[-1px] h-2 w-full bg-electricblue/50 blur-[1px]"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 0.9 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-sm text-white/65 leading-relaxed">
              Counters ignite first. Bars follow. Everything moves like it should when velocity is on.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

