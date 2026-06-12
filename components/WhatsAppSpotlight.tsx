"use client";

import { motion } from "framer-motion";
import { Clock, CalendarCheck, Languages, Filter, UserCheck, CheckCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/lib/language-provider";
import { useTheme } from "@/lib/theme-provider";
import { LucideIcon } from "lucide-react";

const WA_GREEN = "#25D366";
const WA_DEMO_URL =
  "https://wa.me/918188887958?text=" +
  encodeURIComponent("Hi! I'm interested in the WhatsApp AI receptionist for my business — I'd like a demo and early-access details.");

const bulletIcons: LucideIcon[] = [Clock, CalendarCheck, Languages, Filter, UserCheck];

export default function WhatsAppSpotlight() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const w = t.whatsapp;

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="whatsapp-ai" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(37,211,102,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <div className="h-px w-12" style={{ background: "rgba(37,211,102,0.6)" }} />
              <span className="text-[12px] font-medium tracking-widest uppercase" style={{ color: WA_GREEN }}>
                {w.sectionLabel}
              </span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold"
                style={{ background: "rgba(251,191,36,0.10)", border: "1px solid rgba(251,191,36,0.30)", color: "#FBBF24" }}
              >
                <span className="relative flex-shrink-0">
                  <span className="block w-1.5 h-1.5 rounded-full" style={{ background: "#FBBF24" }} />
                  <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(251,191,36,0.6)" }} />
                </span>
                {w.statusBadge}
              </span>
            </div>

            <h2 className="font-syne font-bold text-[36px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] mb-5" style={{ color: "var(--color-text-primary)" }}>
              {w.title1}{" "}
              <span style={{
                background: `linear-gradient(135deg, ${WA_GREEN} 0%, #16A34A 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {w.title2}
              </span>
            </h2>

            <p className="text-[16px] leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
              {w.sub}
            </p>

            {/* Bullets */}
            <div className="flex flex-col gap-3 mb-8">
              {w.bullets.map((b: any, i: number) => {
                const Icon = bulletIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(37,211,102,0.10)", border: "1px solid rgba(37,211,102,0.25)" }}
                    >
                      <Icon size={16} style={{ color: WA_GREEN }} />
                    </div>
                    <div>
                      <p className="text-[14.5px] font-semibold mb-0.5" style={{ color: "var(--color-text-primary)" }}>{b.title}</p>
                      <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{b.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Industries */}
            <div className="mb-9">
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-text-muted)" }}>
                {w.industriesLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {w.industries.map((ind: string) => (
                  <span
                    key={ind}
                    className="px-3 py-1.5 text-[12px] font-medium rounded-full"
                    style={{
                      background: isLight ? "rgba(37,211,102,0.07)" : "rgba(37,211,102,0.08)",
                      border: "1px solid rgba(37,211,102,0.22)",
                      color: isLight ? "#15803D" : "#4ADE80",
                    }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[14px] font-syne font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${WA_GREEN} 0%, #16A34A 100%)`, color: "#052010", boxShadow: "0 4px 24px rgba(37,211,102,0.25)" }}
              >
                <FaWhatsapp size={17} />
                {w.cta1}
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-outline inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[14px] font-syne font-medium rounded-xl"
              >
                {w.cta2}
              </button>
            </div>
          </motion.div>

          {/* ── Right: WhatsApp chat mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="w-full max-w-[420px] rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(37,211,102,0.25)",
                boxShadow: isLight
                  ? "0 24px 64px rgba(22,163,74,0.15)"
                  : "0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(37,211,102,0.06)",
              }}
            >
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4" style={{ background: isLight ? "#075E54" : "#0B141A", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${WA_GREEN}, #16A34A)` }}
                >
                  <FaWhatsapp size={20} color="#fff" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14.5px] font-semibold text-white leading-tight">{w.chat.businessName}</p>
                  <p className="text-[11.5px] flex items-center gap-1.5" style={{ color: "#8FD4A8" }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#4ADE80" }} />
                    {w.chat.status}
                  </p>
                </div>
                <div className="text-[10px] px-2.5 py-1 rounded-full font-semibold" style={{ background: "rgba(37,211,102,0.18)", color: "#4ADE80", border: "1px solid rgba(37,211,102,0.3)" }}>
                  AI
                </div>
              </div>

              {/* Chat body */}
              <div
                className="px-4 py-6 flex flex-col gap-3"
                style={{
                  background: isLight ? "#E5DDD5" : "#0B141A",
                  backgroundImage: isLight
                    ? "none"
                    : "radial-gradient(circle at 20% 30%, rgba(37,211,102,0.03) 0%, transparent 50%)",
                }}
              >
                {/* Customer message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="max-w-[85%] self-start rounded-2xl rounded-tl-md px-4 py-2.5"
                  style={{ background: isLight ? "#FFFFFF" : "#1F2C34" }}
                >
                  <p className="text-[13px] leading-relaxed" style={{ color: isLight ? "#111B21" : "#E9EDEF" }}>{w.chat.msg1}</p>
                  <p className="text-[10px] mt-1 text-right" style={{ color: isLight ? "#8696A0" : "#8696A0" }}>9:02 PM</p>
                </motion.div>

                {/* AI reply */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="max-w-[85%] self-end rounded-2xl rounded-tr-md px-4 py-2.5"
                  style={{ background: isLight ? "#D9FDD3" : "#005C4B" }}
                >
                  <p className="text-[13px] leading-relaxed" style={{ color: isLight ? "#111B21" : "#E9EDEF" }}>{w.chat.msg2}</p>
                  <p className="text-[10px] mt-1 text-right flex items-center justify-end gap-1" style={{ color: isLight ? "#5CA25C" : "#7FBFAE" }}>
                    9:02 PM <CheckCheck size={12} />
                  </p>
                </motion.div>

                {/* Customer message 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="max-w-[85%] self-start rounded-2xl rounded-tl-md px-4 py-2.5"
                  style={{ background: isLight ? "#FFFFFF" : "#1F2C34" }}
                >
                  <p className="text-[13px] leading-relaxed" style={{ color: isLight ? "#111B21" : "#E9EDEF" }}>{w.chat.msg3}</p>
                  <p className="text-[10px] mt-1 text-right" style={{ color: "#8696A0" }}>9:03 PM</p>
                </motion.div>

                {/* AI reply 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.05, duration: 0.4 }}
                  className="max-w-[85%] self-end rounded-2xl rounded-tr-md px-4 py-2.5"
                  style={{ background: isLight ? "#D9FDD3" : "#005C4B" }}
                >
                  <p className="text-[13px] leading-relaxed" style={{ color: isLight ? "#111B21" : "#E9EDEF" }}>{w.chat.msg4}</p>
                  <p className="text-[10px] mt-1 text-right flex items-center justify-end gap-1" style={{ color: isLight ? "#5CA25C" : "#7FBFAE" }}>
                    9:03 PM <CheckCheck size={12} />
                  </p>
                </motion.div>
              </div>

              {/* Chat footer */}
              <div
                className="px-5 py-3 flex items-center justify-center gap-2"
                style={{ background: isLight ? "#F0F2F5" : "#1F2C34", borderTop: "1px solid rgba(255,255,255,0.04)" }}
              >
                <span className="relative flex-shrink-0">
                  <span className="block w-2 h-2 rounded-full" style={{ background: WA_GREEN }} />
                  <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(37,211,102,0.5)" }} />
                </span>
                <p className="text-[11.5px] font-medium" style={{ color: isLight ? "#54656F" : "#8696A0" }}>
                  {w.chat.footer}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
