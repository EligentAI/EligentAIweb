"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical AI project take?",
    a: "Most projects fall into two categories — rapid prototypes (1–2 weeks) and production-grade systems (4–8 weeks). A RAG-powered knowledge assistant typically takes 2–3 weeks. A full multi-agent copilot with custom frontend takes 5–8 weeks. We always share a clear timeline before starting.",
    accent: "#16A34A",
    dim: "rgba(22,163,74,0.08)",
    border: "rgba(22,163,74,0.20)",
  },
  {
    q: "Do you work with startups or enterprises?",
    a: "Both. Startups get fast MVPs they can demo to investors. Enterprises get production-ready systems that integrate with their existing data and workflows. Our stack scales from a single Streamlit prototype to a full Next.js + FastAPI + PostgreSQL deployment.",
    accent: "#7B9FFF",
    dim: "rgba(77,110,255,0.08)",
    border: "rgba(77,110,255,0.20)",
  },
  {
    q: "What does end-to-end delivery mean exactly?",
    a: "It means we handle everything — system architecture, AI agent logic, database setup, backend API, frontend UI, deployment, and post-launch support. You describe the problem, we deliver a working product. No need to coordinate multiple vendors or freelancers.",
    accent: "#C084FC",
    dim: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.20)",
  },
  {
    q: "How flexible are you with tech stack?",
    a: "Very flexible. Our core stack is Python, LangChain, LangGraph, OpenAI, FastAPI, PostgreSQL, and React/Next.js. But we can work with your existing tools, preferred cloud provider, or any LLM — including Anthropic Claude, open-source models via Ollama, or Azure OpenAI.",
    accent: "#FB923C",
    dim: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.20)",
  },
  {
    q: "What kind of problems are best suited for AI agents?",
    a: "Any task that involves multiple steps, decisions, or data sources — customer support automation, internal knowledge search, business analytics from natural language, report generation, document processing, or workflow automation. If your team spends hours on a repetitive task, an AI agent can likely automate it.",
    accent: "#16A34A",
    dim: "rgba(22,163,74,0.08)",
    border: "rgba(22,163,74,0.20)",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing depends on the scope and complexity of the system. We offer everything from focused pilot builds to full production systems with custom frontend and deployment.We provide a fixed-price quote after a free 30-minute consultation — no hourly billing, no surprise invoices.",
    accent: "#7B9FFF",
    dim: "rgba(77,110,255,0.08)",
    border: "rgba(77,110,255,0.20)",
  },
  {
    q: "Will I own the code after the project?",
    a: "Yes, 100%. You get full ownership of all code, models, and infrastructure. We deliver clean, documented code pushed to your GitHub repository. No lock-in, no subscriptions, no hidden dependencies on our services.",
    accent: "#C084FC",
    dim: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.20)",
  },
  {
    q: "Do you offer support after delivery?",
    a: "Yes. Every project includes a 2-week post-launch support window for bug fixes at no extra cost. For ongoing maintenance, monitoring, or feature additions, we offer flexible monthly retainer arrangements.",
    accent: "#FB923C",
    dim: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.20)",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(77,110,255,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: "rgba(77,110,255,0.6)" }} />
            <span className="text-[12px] font-medium tracking-widest uppercase" style={{ color: "#7B9FFF" }}>
              FAQ
            </span>
            <div className="h-px w-12" style={{ background: "rgba(77,110,255,0.6)" }} />
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            Everything you need to know before starting a project with us.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen ? faq.dim : "var(--color-card-bg)",
                    border: "1px solid " + (isOpen ? faq.border : "var(--color-border)"),
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                        style={{ background: isOpen ? faq.accent : "var(--color-text-muted)" }}
                      />
                      <span
                        className="font-syne font-semibold text-[15px] leading-snug transition-colors duration-300"
                        style={{ color: isOpen ? faq.accent : "var(--color-text-primary)" }}
                      >
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isOpen ? faq.dim : "var(--color-input-bg)",
                        border: "1px solid " + (isOpen ? faq.border : "var(--color-border)"),
                      }}
                    >
                      {isOpen
                        ? <Minus size={13} style={{ color: faq.accent }} />
                        : <Plus size={13} style={{ color: "var(--color-text-muted)" }} />
                      }
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="px-6 pb-6 pt-0 ml-10"
                          style={{ borderTop: "1px solid " + faq.border }}
                        >
                          <p className="text-[14px] leading-relaxed pt-4" style={{ color: "var(--color-text-secondary)" }}>
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center p-8 rounded-3xl"
          style={{ background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.18)" }}
        >
          <p className="font-syne font-semibold text-[18px] mb-2" style={{ color: "var(--color-text-primary)" }}>
            Still have questions?
          </p>
          <p className="text-[14px] mb-6" style={{ color: "var(--color-text-secondary)" }}>
            Book a free 30-minute call — no pressure, just an honest conversation about your project.
          </p>
          <a
            href="https://calendly.com/shadabkhaantab/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.30)", color: "var(--color-mint)" }}
          >
            Book a Free Call
          </a>
        </motion.div>

      </div>
    </section>
  );
}