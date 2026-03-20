"use client";

import React from "react";
import { animate } from "framer-motion";
import { useReducedMotion } from "framer-motion";

type UseCountUpProps = {
  from?: number;
  to: number;
  duration?: number; // seconds
  start: boolean;
  /**
   * How to display the count.
   * - If omitted, the hook returns a number rounded to int.
   */
  format?: (value: number) => number | string;
};

export default function useCountUp({
  from = 0,
  to,
  duration = 1.4,
  start,
  format,
}: UseCountUpProps) {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = React.useState<number>(from);

  React.useEffect(() => {
    if (!start) {
      setValue(from);
      return;
    }

    if (reducedMotion) {
      setValue(to);
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(latest),
    });

    return () => controls.stop();
  }, [from, to, duration, start, reducedMotion]);

  const display = format ? format(value) : Math.round(value);
  return display;
}

