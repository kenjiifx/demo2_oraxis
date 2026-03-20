"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxBlockProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Y shift applied across the element's scroll progress.
   * [from, to] in px.
   */
  y?: [number, number];
  /**
   * Opacity shift across the element's scroll progress.
   * [from, to]
   */
  opacity?: [number, number];
  /**
   * Scale shift across the element's scroll progress.
   * [from, to]
   */
  scale?: [number, number];
  /**
   * Rotate Z shift across the element's scroll progress.
   * [from, to] in deg
   */
  rotate?: [number, number];
  /**
   * Intersection mapping for scroll progress.
   */
  offset?: any;
};

export default function ParallaxBlock({
  children,
  className,
  y = [56, 0],
  opacity = [0, 1],
  scale = [0.98, 1],
  rotate = [0, 0],
  offset = ["start end", "end start"],
}: ParallaxBlockProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const yPx = useTransform(scrollYProgress, [0, 1], y);
  const op = useTransform(scrollYProgress, [0, 1], opacity);
  const sc = useTransform(scrollYProgress, [0, 1], scale);
  const rot = useTransform(scrollYProgress, [0, 1], rotate);

  return (
    <motion.div ref={ref} className={className} style={{ y: yPx, opacity: op, scale: sc, rotate: rot }}>
      {children}
    </motion.div>
  );
}

