"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, BadgeCheck, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";
import { useTheme } from "@/lib/theme-provider";
import { LucideIcon } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const featureIcons: LucideIcon[] = [Zap, BadgeCheck, ShieldCheck];

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* Grid Background */}
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

      {/* Floating orbs */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 300, height: 300, top: "15%", left: "5%",
          background: isLight
            ? "radial-gradient(circle, rgba(0,200,140,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(0,255,178,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 250, height: 250, bottom: "20%", right: "5%",
          background: isLight
            ? "radial-gradient(circle, rgba(77,110,255,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(77,110,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial="hidden" animate="visible" custom={0} variants={fadeUp}
          className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-mint/20 bg-mint/5 backdrop-blur-sm cursor-default"
          whileHover={{ scale: 1.04, borderColor: "rgba(0,255,178,0.35)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="glow-dot" />
          <span className="text-[12px] font-medium text-mint tracking-wide uppercase">{t.hero.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
          className="font-syne font-extrabold text-[40px] sm:text-[52px] lg:text-[52px] leading-[1.08] tracking-[-0.025em] mb-6"
          style={{ color: "var(--color-text-primary)" }}
        >
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

        {/* Subheading */}
        <motion.p
          initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
          className="max-w-xl mx-auto text-[17px] leading-relaxed mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollTo("projects")}
            className="btn-primary group flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-syne font-semibold rounded-xl"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {t.hero.cta1}
            <motion.span
              className="flex items-center"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.button>

          <motion.button
            onClick={() => scrollTo("contact")}
            className="btn-outline flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-syne font-medium rounded-xl"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {t.hero.cta2}
          </motion.button>
        </motion.div>

        {/* Feature Badges */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
          {(t.hero.features as string[]).map((label, i) => {
            const Icon = featureIcons[i];
            return (
            <motion.div
              key={label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border backdrop-blur-sm cursor-default"
              style={{
                borderColor: isLight ? "rgba(77,110,255,0.15)" : "rgba(77,110,255,0.2)",
                background: isLight ? "rgba(77,110,255,0.04)" : "rgba(77,110,255,0.07)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                scale: 1.05,
                y: -2,
                borderColor: "rgba(0,255,178,0.4)",
                backgroundColor: isLight ? "rgba(0,200,140,0.08)" : "rgba(0,255,178,0.08)",
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
            >
              <motion.span
                className="flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0"
                style={{ background: "rgba(0,255,178,0.12)" }}
                whileHover={{ scale: 1.2, background: "rgba(0,255,178,0.22)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Icon size={10} className="text-mint" strokeWidth={3} />
              </motion.span>
              <span
                className="text-[12.5px] font-medium tracking-wide whitespace-nowrap"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {label}
              </span>
            </motion.div>
            );
          })}
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("services")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        style={{ color: "var(--color-text-muted)" }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[11px] tracking-widest uppercase group-hover:text-mint transition-colors duration-200">
          {t.hero.scrollLabel}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="group-hover:text-mint transition-colors duration-200" />
        </motion.div>
      </motion.button>

    </section>
  );
}
