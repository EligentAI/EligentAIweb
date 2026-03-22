"use client";

import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, GitBranch, Layers, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

const sectionIcons = [AlertCircle, Lightbulb, GitBranch, Layers, TrendingUp];
const studyMeta = [
  { title: "AI Analyst", subtitle: "Business Intelligence", accent: "#16A34A", accentDim: "rgba(0,255,178,0.08)", accentBorder: "rgba(0,255,178,0.18)" },
  { title: "IntelOps AI", subtitle: "Internal Knowledge System", accent: "#4D6EFF", accentDim: "rgba(77,110,255,0.08)", accentBorder: "rgba(77,110,255,0.18)" },
];

export default function CaseStudies() {
  const { t } = useLanguage();

  return (
    <section id="case-studies" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-mint/50" />
            <span className="text-[12px] font-medium text-mint tracking-widest uppercase">{t.caseStudies.sectionLabel}</span>
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>
            {t.caseStudies.title}
          </h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{t.caseStudies.sub}</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {studyMeta.map((meta, si) => {
            const study = t.caseStudies.items[si];
            const sectionLabels = Object.values(t.caseStudies.labels) as string[];

            return (
              <motion.div key={meta.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: si * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <div className="flex items-center gap-4 mb-7">
                  <div className="h-px flex-1 max-w-[48px]" style={{ background: meta.accent + "60" }} />
                  <span className="font-syne font-bold text-[22px] tracking-[-0.01em]" style={{ color: meta.accent }}>{meta.title}</span>
                  <span className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>— {meta.subtitle}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {study.sections.map((content: string, i: number) => {
                    const Icon = sectionIcons[i];
                    return (
                      <div key={i} className="glass-card rounded-2xl p-5 group hover:shadow-card-hover transition-all duration-400">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: meta.accentDim, border: `1px solid ${meta.accentBorder}` }}>
                          <Icon size={16} style={{ color: meta.accent }} />
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: meta.accent }}>{sectionLabels[i]}</p>
                        <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{content}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Architecture strip */}
                <div className="mt-5 rounded-2xl overflow-hidden" style={{ background: meta.accentDim, border: `1px solid ${meta.accentBorder}` }}>
                  <div className="p-6 flex flex-wrap items-center justify-center gap-3">
                    {["User Input", "→", "LangChain Agent", "→", "LLM + Tools", "→", "Database / Docs", "→", "Response"].map((node, ni) => (
                      <div key={ni}>
                        {node === "→"
                          ? <span className="text-[16px]" style={{ color: "var(--color-text-muted)" }}>→</span>
                          : <div className="px-3.5 py-1.5 rounded-lg text-[12px] font-medium whitespace-nowrap"
                            style={{ background: "var(--color-surface2)", border: `1px solid ${meta.accentBorder}`, color: meta.accent }}>
                            {node}
                          </div>}
                      </div>
                    ))}
                  </div>
                  <div className="px-6 py-3 text-[11px] text-center" style={{ borderTop: `1px solid ${meta.accentBorder}`, color: "var(--color-text-muted)" }}>
                    {t.caseStudies.archNote}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
