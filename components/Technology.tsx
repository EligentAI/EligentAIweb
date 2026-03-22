"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-provider";

const icons = ["🐍", "⛓", "◈", "🐘", "⚡", "📚", "🤖", "▶", "📊"];
const colorMeta = [
  { color: "rgba(0,255,178,0.08)", border: "rgba(0,255,178,0.15)", text: "#16A34A" },
  { color: "rgba(77,110,255,0.08)", border: "rgba(77,110,255,0.15)", text: "#4D6EFF" },
  { color: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.15)", text: "#A855F7" },
  { color: "rgba(0,255,178,0.08)", border: "rgba(0,255,178,0.15)", text: "#16A34A" },
  { color: "rgba(77,110,255,0.08)", border: "rgba(77,110,255,0.15)", text: "#4D6EFF" },
  { color: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.15)", text: "#FBBF24" },
  { color: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.15)", text: "#A855F7" },
  { color: "rgba(0,255,178,0.08)", border: "rgba(0,255,178,0.15)", text: "#16A34A" },
  { color: "rgba(77,110,255,0.08)", border: "rgba(77,110,255,0.15)", text: "#4D6EFF" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, scale: 0.9, y: 16 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Technology() {
  const { t } = useLanguage();

  return (
    <section id="technology" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: "rgba(77,110,255,0.6)" }} />
            <span className="text-[12px] font-medium tracking-widest uppercase" style={{ color: "#4D6EFF" }}>{t.technology.sectionLabel}</span>
            <div className="h-px w-12" style={{ background: "rgba(77,110,255,0.6)" }} />
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>
            {t.technology.title}
          </h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{t.technology.sub}</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {t.technology.items.map((tech: any, i: number) => {
            const c = colorMeta[i];
            return (
              <motion.div key={i} variants={item} className="glass-card rounded-2xl p-5 group cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="text-2xl mb-3 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: c.color, border: `1px solid ${c.border}` }}>
                  {icons[i]}
                </div>
                <p className="text-[11px] font-medium uppercase tracking-widest mb-1.5 transition-colors duration-300" style={{ color: c.text }}>{tech.category}</p>
                <p className="font-syne font-semibold text-[14px] mb-1.5" style={{ color: "var(--color-text-primary)" }}>{tech.name}</p>
                <p className="text-[12px] leading-snug" style={{ color: "var(--color-text-muted)" }}>{tech.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
