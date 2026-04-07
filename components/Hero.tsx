"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";
import { useTheme } from "@/lib/theme-provider";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(${isLight ? "rgba(77,110,255,0.06)" : "rgba(77,110,255,0.05)"} 1px, transparent 1px), linear-gradient(90deg, ${isLight ? "rgba(77,110,255,0.06)" : "rgba(77,110,255,0.05)"} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: isLight
          ? "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,200,140,0.08) 0%, rgba(77,110,255,0.05) 40%, transparent 70%)"
          : "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,255,178,0.10) 0%, rgba(77,110,255,0.07) 40%, transparent 70%)",
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}
          className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-mint/20 bg-mint/5 backdrop-blur-sm">
          <span className="glow-dot" />
          <span className="text-[12px] font-medium text-mint tracking-wide uppercase">{t.hero.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
          className="font-syne font-extrabold text-[40px] sm:text-[52px] lg:text-[52px] leading-[1.08] tracking-[-0.025em] mb-6"
          style={{ color: "var(--color-text-primary)" }}>
          {t.hero.headline1}
          <br />
          <span style={{
            background: "linear-gradient(135deg, #16A34A 0%, #4D6EFF 60%, #A855F7 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            {t.hero.headline2}
          </span>
          <br />
          {t.hero.headline3}
        </motion.h1>

        {/* Sub */}
        <motion.p initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
          className="max-w-xl mx-auto text-[17px] leading-relaxed mb-10"
          style={{ color: "var(--color-text-secondary)" }}>
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scrollTo("projects")} className="btn-primary group flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-syne font-semibold rounded-xl">
            {t.hero.cta1}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-outline flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-syne font-medium rounded-xl">
            {t.hero.cta2}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div initial="hidden" animate="visible" custom={0.45} variants={fadeUp}
          className="mt-16 grid grid-cols-3 gap-px max-w-sm mx-auto">
          {[
            { value: "2+", label: t.hero.stat1Label },
            { value: "9+", label: t.hero.stat2Label },
            { value: "100%", label: t.hero.stat3Label },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center px-4 py-3">
              <span className="font-syne font-bold text-[26px] text-mint leading-none mb-1">{s.value}</span>
              <span className="text-[11px] text-center leading-tight" style={{ color: "var(--color-text-muted)" }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        onClick={() => scrollTo("services")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors group"
        style={{ color: "var(--color-text-muted)" }}>
        <span className="text-[11px] tracking-widest uppercase">{t.hero.scrollLabel}</span>
        <ChevronDown size={16} className="animate-bounce group-hover:text-mint transition-colors" />
      </motion.button>
    </section>
  );
}
