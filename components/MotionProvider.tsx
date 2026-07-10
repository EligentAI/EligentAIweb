"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Mobile GPUs (Adreno/Mali) corrupt render layers when many elements animate
 * transforms with will-change — visible as glitchy pixel noise / tearing.
 *
 * Default to reduced motion until we know the viewport is desktop. Starting
 * at `false` caused a first-paint window where full transform animations ran
 * on phones and left compositor layers in a bad state (especially long text
 * + translucent tiles on the flagship project card).
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  // true until proven desktop — avoids transform animations on first paint
  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    const widthMq = window.matchMedia("(max-width: 1024px)");
    const touchMq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setReduce(widthMq.matches || touchMq.matches);
    update();
    widthMq.addEventListener("change", update);
    touchMq.addEventListener("change", update);
    return () => {
      widthMq.removeEventListener("change", update);
      touchMq.removeEventListener("change", update);
    };
  }, []);

  return <MotionConfig reducedMotion={reduce ? "always" : "user"}>{children}</MotionConfig>;
}
