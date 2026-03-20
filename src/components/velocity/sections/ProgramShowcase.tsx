"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import React from "react";

type Program = {
  name: string;
  code: string;
  summary: string;
  duration: string;
  focus: string[];
};

const programs: Program[] = [
  {
    name: "Velocity Sprints",
    code: "VLT-01",
    summary: "Explosive acceleration and rhythm drills tuned for speed under pressure.",
    duration: "4 Weeks",
    focus: ["Acceleration", "Foot cadence", "Sprint mechanics"],
  },
  {
    name: "Iron Surge",
    code: "VLT-02",
    summary: "Strength with intent: high-output sets that translate to real movement.",
    duration: "6 Weeks",
    focus: ["Powerlifting blocks", "Carry strength", "Core bracing"],
  },
  {
    name: "Recovery Protocol",
    code: "VLT-03",
    summary: "Mobility + nervous system reset to keep your output climbing.",
    duration: "Ongoing",
    focus: ["Mobility cycles", "Breath work", "Sleep alignment"],
  },
];

export default function ProgramShowcase() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = React.useState(0);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-3">
        {programs.map((p, i) => {
          const isActive = i === active;

          return (
            <motion.button
              key={p.code}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={isActive}
              className={[
                "relative flex-1 rounded-2xl border px-0 text-left overflow-hidden",
                "bg-white/5 border-white/10",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-electricblue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
              ].join(" ")}
              animate={{
                flexGrow: isActive ? 3.2 : 1,
                scale: isActive ? 1.01 : 1,
                borderColor: isActive ? "rgba(0,163,255,0.55)" : "rgba(255,255,255,0.10)",
              }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 22 }
              }
              whileHover={reducedMotion ? undefined : { y: -3 }}
            >
              {/* Accent rail */}
              <motion.span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-electricblue/70"
                initial={false}
                animate={{ opacity: isActive ? 1 : 0.15 }}
                transition={{ duration: 0.25 }}
              />

              <div className="relative z-10 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.24em] uppercase text-white/55">
                      {p.code}
                    </p>
                    <p className="mt-2 text-lg sm:text-xl font-black tracking-tight">
                      {p.name}
                    </p>
                  </div>

                  <span className="mt-1 inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-electricblue">
                    {p.duration}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/72">
                  {p.summary}
                </p>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div
                      key="details"
                      initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                      exit={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                      transition={{ duration: reducedMotion ? 0 : 0.28, ease: "easeOut" }}
                    >
                      <div className="mt-6 h-px w-full bg-gradient-to-r from-electricblue/60 via-white/15 to-transparent" />
                      <p className="mt-5 text-xs tracking-[0.22em] uppercase text-white/60">
                        Focus
                      </p>
                      <ul className="mt-3 space-y-2">
                        {p.focus.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-white/78">
                            <span className="h-1.5 w-1.5 rounded-full bg-electricblue" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                          Hover to switch
                        </span>
                        <span className="inline-flex items-center rounded-full bg-electricblue/20 px-3 py-1 text-xs text-electricblue">
                          Active
                        </span>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

