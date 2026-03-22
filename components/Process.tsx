"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Plug, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

const stepIcons = [Search, PenTool, Code2, Plug, Rocket];
const stepColors = [
  { accent: "#16A34A", accentDim: "rgba(0,255,178,0.08)", accentBorder: "rgba(0,255,178,0.18)" },
  { accent: "#4D6EFF", accentDim: "rgba(77,110,255,0.08)", accentBorder: "rgba(77,110,255,0.18)" },
  { accent: "#A855F7", accentDim: "rgba(168,85,247,0.08)", accentBorder: "rgba(168,85,247,0.18)" },
  { accent: "#FBBF24", accentDim: "rgba(251,191,36,0.08)", accentBorder: "rgba(251,191,36,0.15)" },
  { accent: "#16A34A", accentDim: "rgba(0,255,178,0.08)", accentBorder: "rgba(0,255,178,0.18)" },
];
const stepNums = ["01", "02", "03", "04", "05"];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="process" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-mint/50" />
            <span className="text-[12px] font-medium text-mint tracking-widest uppercase">{t.process.sectionLabel}</span>
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>
            {t.process.title}
          </h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{t.process.sub}</p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px">
            <div className="w-full origin-top" style={{
              background: "linear-gradient(to bottom, rgba(0,255,178,0.4), rgba(77,110,255,0.2), transparent)",
              height: isInView ? "100%" : "0%",
              transition: "height 2s ease-in-out",
            }} />
          </div>

          <div className="flex flex-col gap-6 lg:gap-0">
            {t.process.steps.map((step: any, i: number) => {
              const Icon = stepIcons[i];
              const c = stepColors[i];
              const isLeft = i % 2 === 0;

              return (
                <motion.div key={i} initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${i > 0 ? "lg:-mt-2" : ""}`}>
                  <div className={`${isLeft ? "lg:flex lg:justify-end" : "lg:order-2"}`}>
                    <div className={`glass-card rounded-2xl p-7 group hover:shadow-card-hover transition-all duration-400 lg:max-w-[420px] w-full ${!isLeft ? "lg:ml-auto" : ""}`}>
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: c.accentDim, border: `1px solid ${c.accentBorder}` }}>
                          <Icon size={20} style={{ color: c.accent }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-syne font-bold text-[11px] tracking-[0.1em]" style={{ color: c.accent }}>{stepNums[i]}</span>
                            <h3 className="font-syne font-semibold text-[16px]" style={{ color: "var(--color-text-primary)" }}>{step.title}</h3>
                          </div>
                          <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full border-2" style={{ background: c.accent, borderColor: "var(--color-bg)", boxShadow: `0 0 16px ${c.accent}60` }} />
                  </div>
                  <div className={`hidden lg:block ${isLeft ? "" : "lg:order-1"}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
