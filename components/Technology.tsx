"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-provider";

const technologies = [
  { icon: "🐍", category: "Language",      name: "Python",           description: "Core language for all AI system development",                color: "rgba(22,163,74,0.08)",    border: "rgba(22,163,74,0.18)",    text: "#16A34A" },
  { icon: "⛓",  category: "Framework",     name: "LangChain",        description: "AI agent orchestration and chain management",               color: "rgba(77,110,255,0.08)",   border: "rgba(77,110,255,0.18)",   text: "#7B9FFF" },
  { icon: "🕸",  category: "Framework",     name: "LangGraph",        description: "Stateful multi-agent workflows and graph execution",        color: "rgba(77,110,255,0.08)",   border: "rgba(77,110,255,0.18)",   text: "#7B9FFF" },
  { icon: "◈",  category: "AI Model",      name: "OpenAI API",       description: "GPT-4o models for reasoning and generation",               color: "rgba(168,85,247,0.08)",   border: "rgba(168,85,247,0.18)",   text: "#C084FC" },
  { icon: "🧠",  category: "AI Model",      name: "Anthropic Claude", description: "Claude models for advanced reasoning and analysis",        color: "rgba(251,146,60,0.08)",   border: "rgba(251,146,60,0.18)",   text: "#FB923C" },
  { icon: "🐘",  category: "Database",      name: "PostgreSQL",       description: "Structured data storage and SQL analytics",                color: "rgba(22,163,74,0.08)",    border: "rgba(22,163,74,0.18)",    text: "#16A34A" },
  { icon: "⚡",  category: "Database",      name: "Neon Database",    description: "Serverless PostgreSQL with branching and scaling",         color: "rgba(77,110,255,0.08)",   border: "rgba(77,110,255,0.18)",   text: "#7B9FFF" },
  { icon: "🔍",  category: "Vector DB",     name: "ChromaDB",         description: "Vector database for semantic search and RAG",             color: "rgba(251,191,36,0.08)",   border: "rgba(251,191,36,0.18)",   text: "#FBBF24" },
  { icon: "📚",  category: "Architecture",  name: "RAG Systems",      description: "Retrieval-augmented generation for knowledge bases",       color: "rgba(251,191,36,0.08)",   border: "rgba(251,191,36,0.18)",   text: "#FBBF24" },
  { icon: "🤖",  category: "Architecture",  name: "AI Agents",        description: "Autonomous multi-step AI reasoning systems",              color: "rgba(168,85,247,0.08)",   border: "rgba(168,85,247,0.18)",   text: "#C084FC" },
  { icon: "🚀",  category: "Backend",       name: "FastAPI",          description: "High-performance async backend for AI APIs",              color: "rgba(22,163,74,0.08)",    border: "rgba(22,163,74,0.18)",    text: "#16A34A" },
  { icon: "⚛",  category: "Frontend",      name: "React + Next.js",  description: "Custom production-grade web interfaces",                  color: "rgba(77,110,255,0.08)",   border: "rgba(77,110,255,0.18)",   text: "#7B9FFF" },
  { icon: "▶",  category: "Prototyping",   name: "Streamlit",        description: "Rapid AI prototype and demo deployment",                  color: "rgba(22,163,74,0.08)",    border: "rgba(22,163,74,0.18)",    text: "#16A34A" },
  { icon: "📊",  category: "Visualization", name: "Plotly",           description: "Interactive data visualizations and charts",              color: "rgba(77,110,255,0.08)",   border: "rgba(77,110,255,0.18)",   text: "#7B9FFF" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, scale: 0.9, y: 16 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function Technology() {
  const { t } = useLanguage();

  return (
    <section id="technology" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: "rgba(77,110,255,0.6)" }} />
            <span className="text-[12px] font-medium tracking-widest uppercase" style={{ color: "#7B9FFF" }}>
              {t.technology.sectionLabel}
            </span>
            <div className="h-px w-12" style={{ background: "rgba(77,110,255,0.6)" }} />
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>
            {t.technology.title}
          </h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            A focused stack of proven technologies — from rapid prototypes to custom production frontends and enterprise AI backends.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-card rounded-2xl p-5 group cursor-default transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="text-2xl mb-3 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: tech.color, border: "1px solid " + tech.border }}
              >
                {tech.icon}
              </div>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-1.5" style={{ color: tech.text }}>
                {tech.category}
              </p>
              <p className="font-syne font-semibold text-[14px] mb-1.5" style={{ color: "var(--color-text-primary)" }}>
                {tech.name}
              </p>
              <p className="text-[12px] leading-snug" style={{ color: "var(--color-text-muted)" }}>
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}