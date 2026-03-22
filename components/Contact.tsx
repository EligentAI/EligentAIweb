"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, CheckCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

const GITHUB_URL = "https://github.com/Sdkhan01";
const LINKEDIN_URL = "https://www.linkedin.com/in/shadab-khan-88a632264";
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

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-mint/50" />
              <span className="text-[12px] font-medium text-mint tracking-widest uppercase">{t.contact.sectionLabel}</span>
            </div>
            <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-5" style={{ color: "var(--color-text-primary)" }}>
              {t.contact.title1}
              <br />
              <span style={{ background: "linear-gradient(135deg, #16A34A 0%, #4D6EFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t.contact.title2}
              </span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-10" style={{ color: "var(--color-text-secondary)" }}>{t.contact.sub}</p>

            <div className="flex flex-col gap-3">
              {[
                { href: GITHUB_URL, Icon: Github, label: "GitHub", sub: "github.com/Sdkhan01", hoverColor: "#16A34A" },
                { href: LINKEDIN_URL, Icon: Linkedin, label: "LinkedIn", sub: "linkedin.com/in/shadab-khan-88a632264", hoverColor: "#4D6EFF" },
              ].map(({ href, Icon, label, sub, hoverColor }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 glass-card rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: "var(--color-input-bg)", border: "1px solid var(--color-border)" }}>
                    <Icon size={18} style={{ color: "var(--color-text-secondary)" }} />
                  </div>
                  <div>
                    <p className="font-medium text-[14px]" style={{ color: "var(--color-text-primary)" }}>{label}</p>
                    <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <div className="glass-card rounded-3xl p-8">
              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(0,255,178,0.1)", border: "1px solid rgba(0,255,178,0.25)" }}>
                    <CheckCircle size={28} className="text-mint" />
                  </div>
                  <h3 className="font-syne font-semibold text-[20px]" style={{ color: "var(--color-text-primary)" }}>{t.contact.successTitle}</h3>
                  <p className="text-[14px] max-w-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{t.contact.successSub}</p>
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                    className="mt-4 text-[13px] text-mint hover:text-mint-dim transition-colors underline underline-offset-2">
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { id: "name", label: t.contact.nameLabel, placeholder: t.contact.namePlaceholder, type: "text" },
                    { id: "email", label: t.contact.emailLabel, placeholder: t.contact.emailPlaceholder, type: "email" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>{field.label}</label>
                      <input id={field.id} name={field.id} type={field.type} required
                        value={(form as any)[field.id]} onChange={handleChange}
                        placeholder={field.placeholder}
                        className="input-field w-full px-4 py-3 rounded-xl text-[14px]" />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-[12px] font-medium mb-2 tracking-wide" style={{ color: "var(--color-text-secondary)" }}>{t.contact.messageLabel}</label>
                    <textarea id="message" name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      className="input-field w-full px-4 py-3 rounded-xl text-[14px] resize-none" />
                  </div>

                  {status === "error" && (
                    <p className="text-[13px] text-red-400 text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button type="submit" disabled={status === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-2.5 py-3.5 text-[14px] font-syne font-semibold rounded-xl disabled:opacity-70">
                    {status === "loading"
                      ? <><Loader2 size={16} className="animate-spin" />{t.contact.sending}</>
                      : <>{t.contact.submitBtn}<Send size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}