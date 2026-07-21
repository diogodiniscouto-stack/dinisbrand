"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

/**
 * Scroll-triggered reveal wrapper. Animates once when it enters the viewport.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  amount = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
