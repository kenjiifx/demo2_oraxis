"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: React.ElementType;
  stagger?: number;
  viewportAmount?: number;
};

export default function TextReveal({
  text,
  className,
  as: Component = "span",
  stagger = 0.035,
  viewportAmount = 0.45,
}: TextRevealProps) {
  const reducedMotion = useReducedMotion();

  // If motion is reduced, render static text for accessibility.
  if (reducedMotion) {
    return (
      <Component className={className}>
        {text}
      </Component>
    );
  }

  const words = text.split(" ");

  return (
    <Component className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: viewportAmount }}
          variants={{
            hidden: { y: 24, opacity: 0, filter: "blur(10px)" },
            visible: (index: number) => ({
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                delay: index * stagger,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            }),
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Component>
  );
}

