"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, Clock, MessageSquare, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

const CALENDLY_URL = "https://calendly.com/shadabkhaantab/30min";
const WEB3FORMS_KEY = "ea1957d7-34f0-4f27-8052-3b7f1d637fe9";

type Status = "idle" | "loading" | "success" | "error";

const nextSteps = [
  { number: "01", text: "We review your project", sub: "Within 12 hours of receiving your message" },
  { number: "02", text: "We schedule a free call", sub: "No obligation — just an honest conversation" },
  { number: "03", text: "We send a proposal", sub: "Clear scope, timeline & delivery plan" },
];

const projectTypes = [
  "Not sure yet",
  "WhatsApp AI Receptionist",
  "Customer Support AI",
  "AI Chatbot / Copilot",
  "Data Dashboard / Analytics",
  "Multi-Agent System",
  "Automation / Workflow",
  "Custom App with AI",
];

const budgetOptions = [
  "Not sure yet",
  "Under $500 (pilot / quick build)",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
];

const inputStyle: React.CSSProperties = {
  background: "var(--color-input-bg)",
  border: "1px solid #e2e8f0",
  color: "var(--color-text-primary)",
  outline: "none",
  width: "100%",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  fontSize: "14px",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Not sure yet",
    budget: "Not sure yet",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          project_type: form.projectType,
          budget: form.budget,
          message: form.message,
          subject: `New project inquiry from ${form.name} — ${form.projectType}`,
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
            <div className="flex flex-col gap-3 mb-6">
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

            {/* Availability status card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 rounded-2xl mb-4"
              style={{ background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.25)" }}
            >
              <div className="relative flex-shrink-0">
                <span className="block w-3 h-3 rounded-full" style={{ background: "#16A34A" }} />
                <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(22,163,74,0.5)" }} />
              </div>
              <div>
                <p className="font-semibold text-[14px]" style={{ color: "#16A34A" }}>Now Accepting New Projects</p>
                <p className="text-[12px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                  2 project slots open this quarter · Small businesses · Startups · Enterprises
                </p>
              </div>
            </motion.div>

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 rounded-2xl"
              style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>
                What happens next?
              </p>
              <div className="flex flex-col gap-3">
                {nextSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold font-syne"
                      style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.22)", color: "#16A34A" }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <p className="text-[13px] font-medium" style={{ color: "var(--color-text-primary)" }}>{step.text}</p>
                      <p className="text-[11.5px]" style={{ color: "var(--color-text-muted)" }}>{step.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

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
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", projectType: "Not sure yet", budget: "Not sure yet", message: "" }); }} className="mt-2 text-[13px] transition-colors underline underline-offset-2" style={{ color: "var(--color-mint)" }}>
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  <div className="mb-2">
                    <h3 className="font-syne font-bold text-[20px] mb-1" style={{ color: "var(--color-text-primary)" }}>Send us a message</h3>
                    <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>Describe your project and we will get back to you within 12 hours.</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>{t.contact.nameLabel}</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.contact.namePlaceholder} style={inputStyle} className="input-field" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>{t.contact.emailLabel}</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.contact.emailPlaceholder} style={inputStyle} className="input-field" />
                  </div>

                  {/* Project Type + Budget side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        style={inputStyle}
                        className="input-field"
                      >
                        {projectTypes.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>
                        Estimated Budget <span style={{ color: "var(--color-text-muted)" }}>(optional)</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        style={inputStyle}
                        className="input-field"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>{t.contact.messageLabel}</label>
                    <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} placeholder={t.contact.messagePlaceholder} style={{ ...inputStyle, resize: "none" }} className="input-field" />
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
