"use client";

import { motion } from "framer-motion";
import { Database, MessageCircle, BarChart2, FileSearch, Shield, FileText, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

const PROJECT1_URL = "https://aibizanalyst.streamlit.app/";
const PROJECT2_URL = "https://intelopsai.streamlit.app/";
const PROJECT1_IMG = "/ai-analyst-screenshot.png";
const PROJECT2_IMG = "/opspilot-screenshot.png";

const project1stack = ["Python", "LangChain", "OpenAI API", "PostgreSQL", "Neon DB", "Plotly", "Streamlit"];
const project2stack = ["Python", "LangChain", "OpenAI API", "PostgreSQL", "Neon DB", "RAG Architecture", "Streamlit"];
const project1icons = [MessageCircle, BarChart2, Database, FileText];
const project2icons = [FileSearch, Database, Shield, FileText];

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: "ai-analyst",
      title: "AI Analyst",
      icons: project1icons,
      stack: project1stack,
      accent: "#16A34A",
      dim: "rgba(22,163,74,0.10)",
      border: "rgba(22,163,74,0.22)",
      url: PROJECT1_URL,
      img: PROJECT1_IMG,
      btnBg: "rgba(22,163,74,0.12)",
      btnBorder: "rgba(22,163,74,0.35)",
      btnColor: "#16A34A",
    },
    {
      id: "opspilot",
      title: "IntelOps AI",
      icons: project2icons,
      stack: project2stack,
      accent: "#4D6EFF",
      dim: "rgba(77,110,255,0.10)",
      border: "rgba(77,110,255,0.22)",
      url: PROJECT2_URL,
      img: PROJECT2_IMG,
      btnBg: "rgba(77,110,255,0.12)",
      btnBorder: "rgba(77,110,255,0.35)",
      btnColor: "#7B9FFF",
    },
  ];

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: "rgba(77,110,255,0.6)" }} />
            <span className="text-[12px] font-medium tracking-widest uppercase" style={{ color: "#4D6EFF" }}>{t.projects.sectionLabel}</span>
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>{t.projects.title}</h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{t.projects.sub}</p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((meta, i) => {
            const proj = t.projects.items[i];
            return (
              <motion.div
                key={meta.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass-card rounded-3xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Left — content */}
                  <div className="p-8 lg:p-10 flex flex-col gap-6">

                    {/* Status badge */}
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-[11px] font-medium rounded-full tracking-wide" style={{ background: meta.dim, border: "1px solid " + meta.border, color: meta.accent }}>
                        {t.projects.status}
                      </span>
                      <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{proj.subtitle}</span>
                    </div>

                    {/* Title + Live Demo button */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="font-syne font-bold text-[30px] sm:text-[34px] leading-tight tracking-[-0.02em]" style={{ color: "var(--color-text-primary)" }}>
                        {meta.title}
                      </h3>
                      <a href={meta.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5" style={{ background: meta.btnBg, border: "1px solid " + meta.btnBorder, color: meta.btnColor }}>
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{proj.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {proj.features.map((feat: string, k: number) => {
                        const Icon = meta.icons[k];
                        return (
                          <div key={k} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: meta.dim, border: "1px solid " + meta.border }}>
                            <Icon size={14} style={{ color: meta.accent, flexShrink: 0 }} />
                            <span className="text-[12px] font-medium" style={{ color: meta.accent }}>{feat}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech stack */}
                    <div className="pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
                      <p className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-muted)" }}>{t.projects.stackLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {meta.stack.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 text-[11px] rounded-md" style={{ background: "var(--color-input-bg)", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right — screenshot */}
                  <div className="relative min-h-[280px] lg:min-h-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, " + meta.dim + " 0%, var(--color-surface2) 60%)", borderLeft: "1px solid var(--color-border)" }}>
                    <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(128,128,128,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                    <div className="relative z-10 w-[99%] max-w-[580px] p-2">
                      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid " + meta.border, boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}>
                        <img
                          src={meta.img}
                          alt={meta.title + " screenshot"}
                          className="w-full block"
                        />
                      </div>
                    </div>
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