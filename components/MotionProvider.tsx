"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Mobile GPUs (Adreno/Mali) corrupt render layers when many elements animate
 * transforms with will-change — visible as glitchy pixel noise. On small
 * screens we switch Framer Motion to reduced-motion (opacity-only, no
 * transform layers); desktop keeps the full animations.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return <MotionConfig reducedMotion={reduce ? "always" : "user"}>{children}</MotionConfig>;
}
