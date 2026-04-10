"use client";

import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, GitBranch, Layers, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

const sectionIcons = [AlertCircle, Lightbulb, GitBranch, Layers, TrendingUp];

const studyMeta = [
  {
    title: "AI Analyst",
    subtitle: "Business Intelligence",
    accent: "#16A34A",
    accentDim: "rgba(22,163,74,0.08)",
    accentBorder: "rgba(22,163,74,0.18)",
    arch: [
      { label: "User Query", icon: "💬", desc: "Natural language input" },
      { label: "LangChain Agent", icon: "⛓", desc: "Intent routing" },
      { label: "SQL Generator", icon: "🗄", desc: "NL → SQL conversion" },
      { label: "Neon PostgreSQL", icon: "🐘", desc: "Data retrieval" },
      { label: "Plotly Charts", icon: "📊", desc: "Visual output" },
      { label: "GPT-4o", icon: "◈", desc: "Insight generation" },
    ],
  },
  {
    title: "IntelOps AI",
    subtitle: "Internal Knowledge System",
    accent: "#4D6EFF",
    accentDim: "rgba(77,110,255,0.08)",
    accentBorder: "rgba(77,110,255,0.18)",
    arch: [
      { label: "User Query", icon: "💬", desc: "Role-based input" },
      { label: "Router Agent", icon: "🤖", desc: "Intent classification" },
      { label: "RAG Agent", icon: "📚", desc: "ChromaDB retrieval" },
      { label: "SQL Agent", icon: "🗄", desc: "PostgreSQL analytics" },
      { label: "Report Agent", icon: "📋", desc: "PDF generation" },
      { label: "GPT-4o", icon: "◈", desc: "Final response" },
    ],
  },
];

export default function CaseStudies() {
  const { t } = useLanguage();

  return (
    <section id="case-studies" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: "rgba(22,163,74,0.6)" }} />
            <span className="text-[12px] font-medium tracking-widest uppercase" style={{ color: "var(--color-mint)" }}>
              {t.caseStudies.sectionLabel}
            </span>
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>
            {t.caseStudies.title}
          </h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            {t.caseStudies.sub}
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {studyMeta.map((meta, si) => {
            const study = t.caseStudies.items[si];
            const sectionLabels = Object.values(t.caseStudies.labels) as string[];

            return (
              <motion.div
                key={meta.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: si * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Title row */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12" style={{ background: meta.accent + "80" }} />
                  <span className="font-syne font-bold text-[24px] tracking-[-0.01em]" style={{ color: meta.accent }}>
                    {meta.title}
                  </span>
                  <span className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>
                    — {meta.subtitle}
                  </span>
                </div>

                {/* Case study cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                  {study.sections.map((content: string, i: number) => {
                    const Icon = sectionIcons[i];
                    return (
                      <div
                        key={i}
                        className="glass-card rounded-2xl p-5 group transition-all duration-300 hover:-translate-y-1"
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: meta.accentDim, border: "1px solid " + meta.accentBorder }}
                        >
                          <Icon size={16} style={{ color: meta.accent }} />
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: meta.accent }}>
                          {sectionLabels[i]}
                        </p>
                        <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                          {content}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* ── Visual Architecture Diagram ── */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ background: meta.accentDim, border: "1px solid " + meta.accentBorder }}
                >
                  {/* Diagram header */}
                  <div
                    className="px-6 py-3 flex items-center gap-2"
                    style={{ borderBottom: "1px solid " + meta.accentBorder }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: meta.accent }} />
                    <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: meta.accent }}>
                      System Architecture
                    </span>
                  </div>

                  {/* Nodes */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {meta.arch.map((node, ni) => (
                        <div key={ni} className="flex items-center gap-2">
                          {/* Node card */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ni * 0.08, duration: 0.4 }}
                            className="flex flex-col items-center gap-1.5 group"
                          >
                            <div
                              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                              style={{
                                background: "var(--color-surface)",
                                border: "1px solid " + meta.accentBorder,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                              }}
                            >
                              {node.icon}
                            </div>
                            <div className="text-center">
                              <p className="text-[11px] font-semibold whitespace-nowrap" style={{ color: meta.accent }}>
                                {node.label}
                              </p>
                              <p className="text-[10px] whitespace-nowrap" style={{ color: "var(--color-text-muted)" }}>
                                {node.desc}
                              </p>
                            </div>
                          </motion.div>

                          {/* Arrow between nodes */}
                          {ni < meta.arch.length - 1 && (
                            <motion.div
                              initial={{ opacity: 0, scaleX: 0 }}
                              whileInView={{ opacity: 1, scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: ni * 0.08 + 0.2, duration: 0.3 }}
                              className="flex flex-col items-center gap-1 mb-5"
                            >
                              <div
                                className="flex items-center gap-0"
                                style={{ color: meta.accent + "80" }}
                              >
                                <div
                                  className="h-px w-6 sm:w-8"
                                  style={{ background: "linear-gradient(90deg, " + meta.accentBorder + ", " + meta.accent + ")" }}
                                />
                                <div
                                  style={{
                                    width: 0,
                                    height: 0,
                                    borderTop: "4px solid transparent",
                                    borderBottom: "4px solid transparent",
                                    borderLeft: "6px solid " + meta.accent,
                                  }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Flow label */}
                    <p
                      className="text-center text-[11px] mt-4"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {t.caseStudies.archNote}
                    </p>
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