"use client";

import { motion } from "framer-motion";
import { Target, Zap, Code2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/lib/language-provider";

const LINKEDIN_URL = "https://www.linkedin.com/in/shadabkhanai";

const valueIcons = [Target, Code2, Zap];
const valueColors = [
  { accent: "#16A34A", accentDim: "rgba(0,255,178,0.08)", accentBorder: "rgba(0,255,178,0.18)" },
  { accent: "#4D6EFF", accentDim: "rgba(77,110,255,0.08)", accentBorder: "rgba(77,110,255,0.18)" },
  { accent: "#A855F7", accentDim: "rgba(168,85,247,0.08)", accentBorder: "rgba(168,85,247,0.18)" },
];
const specialColors = ["#16A34A", "#4D6EFF", "#A855F7", "#16A34A"];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-mint/50" />
              <span className="text-[12px] font-medium text-mint tracking-widest uppercase">{t.about.sectionLabel}</span>
            </div>
            <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-6" style={{ color: "var(--color-text-primary)" }}>
              {t.about.title}
            </h2>
            <div className="space-y-5 text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              <p>{t.about.body1}</p>
              <p>
                {t.about.body2Prefix}{" "}
                {t.about.body2Items.map((item: string, i: number) => (
                  <span key={i}>
                    <span className="font-medium" style={{ color: specialColors[i] }}>{item}</span>
                    {i < t.about.body2Items.length - 2 ? ", " : i === t.about.body2Items.length - 2 ? ` ${t.about.body2Connector} ` : ""}
                  </span>
                ))}.
              </p>
              <p>{t.about.body3}</p>
            </div>

            {/* Founder card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 mt-9 flex items-center gap-5 flex-wrap"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-syne font-bold text-[20px]"
                style={{
                  background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(77,110,255,0.15))",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "var(--color-mint)",
                }}
              >
                SK
              </div>
              <div className="flex-1 min-w-[200px]">
                <p className="font-syne font-semibold text-[16px]" style={{ color: "var(--color-text-primary)" }}>
                  {t.about.founderName}
                </p>
                <p className="text-[12.5px] mb-1.5" style={{ color: "var(--color-mint)" }}>{t.about.founderRole}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {t.about.founderBio}
                </p>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(10,102,194,0.10)", border: "1px solid rgba(10,102,194,0.30)", color: "#0A66C2" }}
              >
                <FaLinkedin size={14} />
                {t.about.founderCta}
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 max-w-[200px]" style={{ background: "linear-gradient(to right, rgba(0,255,178,0.3), transparent)" }} />
              <div className="glow-dot" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-5">
            {t.about.values.map((value: any, i: number) => {
              const Icon = valueIcons[i];
              const c = valueColors[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-6 flex items-start gap-5 group hover:shadow-card-hover transition-all duration-400">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: c.accentDim, border: `1px solid ${c.accentBorder}` }}>
                    <Icon size={18} style={{ color: c.accent }} />
                  </div>
                  <div>
                    <h3 className="font-syne font-semibold text-[16px] mb-1.5" style={{ color: "var(--color-text-primary)" }}>{value.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
