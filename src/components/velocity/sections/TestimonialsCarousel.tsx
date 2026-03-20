"use client";

import React from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  stat: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mara K.",
    title: "Sprinter / Coach",
    quote:
      "VELOCITY doesn’t feel like a program. It feels like a system that pushes and then resets you—every week.",
    stat: "+31% acceleration",
  },
  {
    name: "Jules R.",
    title: "Strength Athlete",
    quote:
      "The intensity is real, but the recovery is built-in. I’m training harder without paying the price the next day.",
    stat: "Recovery stays high",
  },
  {
    name: "Noah S.",
    title: "Performance Analyst",
    quote:
      "Fast, aggressive, clean. The pacing is lethal and the output is measurable. VELOCITY is the difference-maker.",
    stat: "Output trending up",
  },
];

function clampIndex(i: number, length: number) {
  return (i % length + length) % length;
}

export default function TestimonialsCarousel() {
  const reducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px -30% 0px" });

  const [active, setActive] = React.useState(0);
  const count = testimonials.length;

  React.useEffect(() => {
    if (reducedMotion) return;
    if (!inView) return;

    const interval = window.setInterval(() => {
      setActive((prev) => clampIndex(prev + 1, count));
    }, 4800);

    return () => window.clearInterval(interval);
  }, [reducedMotion, inView, count]);

  const current = testimonials[active];
  const transition = reducedMotion ? undefined : { duration: 0.35 };

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-white/60">SOCIAL PROOF</p>
          <p className="mt-2 text-sm text-white/75">The system speaks for itself.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="h-1.5 w-28 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-electricblue"
              initial={{ width: "0%" }}
              animate={inView ? { width: `${((active + 1) / count) * 100}%` } : undefined}
              transition={transition}
            />
          </div>
          <p className="text-xs text-white/60">{active + 1}/{count}</p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-8">
        <div className="relative">
          <div aria-hidden className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-electricblue/15 blur-2xl" />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.name}
              initial={reducedMotion ? undefined : { opacity: 0, x: 40 }}
              animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, x: -40 }}
              transition={transition}
              className="relative z-10"
            >
              <blockquote className="text-white/90 text-lg leading-relaxed">
                “{current.quote}”
              </blockquote>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white/95">{current.name}</p>
                  <p className="text-xs text-white/60">{current.title}</p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-electricblue" />
                  <p className="text-sm font-semibold text-electricblue">{current.stat}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={isActive}
                className={[
                  "h-2.5 w-12 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                  isActive ? "bg-electricblue" : "bg-white/10 hover:bg-white/15",
                ].join(" ")}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={() => setActive((prev) => clampIndex(prev - 1, count))}
            whileHover={reducedMotion ? undefined : { y: -2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
            transition={transition}
            className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Previous testimonial"
          >
            Prev
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setActive((prev) => clampIndex(prev + 1, count))}
            whileHover={reducedMotion ? undefined : { y: -2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
            transition={transition}
            className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Next testimonial"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
}

