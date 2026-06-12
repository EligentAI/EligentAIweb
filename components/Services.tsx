"use client";

import { motion } from "framer-motion";
import { BarChart3, Bot, MessageSquare, Workflow, Brain } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/lib/language-provider";

const icons = [FaWhatsapp, MessageSquare, BarChart3, Brain, Workflow, Bot];
const colors = [
  { color: "rgba(37,211,102,0.12)", border: "rgba(37,211,102,0.25)", iconColor: "#25D366" },
  { color: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.2)", iconColor: "#A855F7" },
  { color: "rgba(0,255,178,0.12)", border: "rgba(0,255,178,0.2)", iconColor: "#16A34A" },
  { color: "rgba(77,110,255,0.12)", border: "rgba(77,110,255,0.2)", iconColor: "#4D6EFF" },
  { color: "rgba(251,191,36,0.10)", border: "rgba(251,191,36,0.18)", iconColor: "#FBBF24" },
  { color: "rgba(0,255,178,0.08)", border: "rgba(0,255,178,0.15)", iconColor: "#16A34A" },
];

// where each card's "Learn more" leads
const anchors = ["whatsapp-ai", "projects", "projects", "projects", "process", "case-studies"];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-mint/50" />
            <span className="text-[12px] font-medium text-mint tracking-widest uppercase">{t.services.sectionLabel}</span>
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>
            {t.services.title}
          </h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{t.services.sub}</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((service: any, i: number) => {
            const Icon = icons[i];
            const c = colors[i];
            return (
              <motion.div key={i} variants={cardAnim}
                onClick={() => document.getElementById(anchors[i])?.scrollIntoView({ behavior: "smooth" })}
                className="glass-card glass-card-hover rounded-2xl p-7 cursor-pointer group transition-all duration-400 shadow-card hover:shadow-card-hover">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: c.color, border: `1px solid ${c.border}` }}>
                  <Icon size={22} style={{ color: c.iconColor }} />
                </div>
                <h3 className="font-syne font-semibold text-[17px] mb-3 leading-snug group-hover:text-white transition-colors" style={{ color: "var(--color-text-primary)" }}>
                  {service.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{service.description}</p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: c.iconColor }}>
                  <span className="text-[12px] font-medium">{t.services.learnMore}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
