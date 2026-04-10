"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, CheckCircle, Loader2, Clock, MessageSquare, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

const GITHUB_URL = "https://github.com/EligentAI";
const LINKEDIN_URL = "https://www.linkedin.com/in/shadab-khan-88a632264";
const CALENDLY_URL = "https://calendly.com/shadabkhaantab/30min";
const WEB3FORMS_KEY = "ea1957d7-34f0-4f27-8052-3b7f1d637fe9";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "New message from Eligent AI Portfolio",
        }),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(22,163,74,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Left ── */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12" style={{ background: "rgba(22,163,74,0.6)" }} />
              <span className="text-[12px] font-medium tracking-widest uppercase" style={{ color: "var(--color-mint)" }}>{t.contact.sectionLabel}</span>
            </div>

            <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-5" style={{ color: "var(--color-text-primary)" }}>
              {t.contact.title1}
              <br />
              <span style={{ backgroundImage: "linear-gradient(135deg, #16A34A 0%, #4D6EFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t.contact.title2}
              </span>
            </h2>

            <p className="text-[16px] leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>{t.contact.sub}</p>

            {/* Trust signals */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.22)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--color-surface)", border: "1px solid rgba(22,163,74,0.22)" }}>
                  <Clock size={16} style={{ color: "#16A34A" }} />
                </div>
                <div>
                  <p className="font-semibold text-[13px]" style={{ color: "#16A34A" }}>Response within 12 hours</p>
                  <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>We reply fast — usually same day</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "rgba(77,110,255,0.08)", border: "1px solid rgba(77,110,255,0.22)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--color-surface)", border: "1px solid rgba(77,110,255,0.22)" }}>
                  <MessageSquare size={16} style={{ color: "#7B9FFF" }} />
                </div>
                <div>
                  <p className="font-semibold text-[13px]" style={{ color: "#7B9FFF" }}>Free consultation call</p>
                  <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>Tell us your problem, we will advise honestly</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.22)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--color-surface)", border: "1px solid rgba(168,85,247,0.22)" }}>
                  <Calendar size={16} style={{ color: "#C084FC" }} />
                </div>
                <div>
                  <p className="font-semibold text-[13px]" style={{ color: "#C084FC" }}>Book a meeting directly</p>
                  <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>Pick a time that works for you</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 glass-card rounded-2xl transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--color-input-bg)", border: "1px solid var(--color-border)" }}>
                  <Github size={18} style={{ color: "var(--color-text-secondary)" }} />
                </div>
                <div>
                  <p className="font-medium text-[14px]" style={{ color: "var(--color-text-primary)" }}>GitHub</p>
                  <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>github.com/EligentAI</p>
                </div>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 glass-card rounded-2xl transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--color-input-bg)", border: "1px solid var(--color-border)" }}>
                  <Linkedin size={18} style={{ color: "var(--color-text-secondary)" }} />
                </div>
                <div>
                  <p className="font-medium text-[14px]" style={{ color: "var(--color-text-primary)" }}>LinkedIn</p>
                  <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>linkedin.com/in/shadab-khan</p>
                </div>
              </a>
            </div>

          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div className="glass-card rounded-3xl p-8">

              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.25)" }}>
                    <CheckCircle size={28} style={{ color: "var(--color-mint)" }} />
                  </div>
                  <h3 className="font-syne font-semibold text-[20px]" style={{ color: "var(--color-text-primary)" }}>{t.contact.successTitle}</h3>
                  <p className="text-[14px] max-w-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{t.contact.successSub}</p>
                  <div className="px-4 py-2 rounded-xl text-[12px] font-medium" style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.22)", color: "var(--color-mint)" }}>
                    ⚡ We will respond within 12 hours
                  </div>
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }} className="mt-2 text-[13px] transition-colors underline underline-offset-2" style={{ color: "var(--color-mint)" }}>
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  <div className="mb-2">
                    <h3 className="font-syne font-bold text-[20px] mb-1" style={{ color: "var(--color-text-primary)" }}>Send us a message</h3>
                    <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>Describe your project and we will get back to you within 12 hours.</p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>{t.contact.nameLabel}</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.contact.namePlaceholder} className="input-field w-full px-4 py-3 rounded-xl text-[14px]" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>{t.contact.emailLabel}</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.contact.emailPlaceholder} className="input-field w-full px-4 py-3 rounded-xl text-[14px]" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>{t.contact.messageLabel}</label>
                    <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder={t.contact.messagePlaceholder} className="input-field w-full px-4 py-3 rounded-xl text-[14px] resize-none" />
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-medium" style={{ background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.20)", color: "var(--color-mint)" }}>
                    <Clock size={13} />
                    We typically respond within 12 hours
                  </div>

                  {status === "error" && (
                    <p className="text-[13px] text-red-400 text-center">Something went wrong. Please try again.</p>
                  )}

                  <button type="submit" disabled={status === "loading"} className="btn-primary w-full flex items-center justify-center gap-2.5 py-3.5 text-[14px] font-syne font-semibold rounded-xl disabled:opacity-70">
                    {status === "loading"
                      ? <><Loader2 size={16} className="animate-spin" />{t.contact.sending}</>
                      : <>{t.contact.submitBtn}<Send size={16} /></>}
                  </button>

                  <div className="text-center">
                    <p className="text-[12px] mb-2" style={{ color: "var(--color-text-muted)" }}>Prefer to talk directly?</p>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5" style={{ background: "rgba(77,110,255,0.10)", border: "1px solid rgba(77,110,255,0.25)", color: "#7B9FFF" }}>
                      <Calendar size={13} />
                      Book a free 30-min call
                    </a>
                  </div>

                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}