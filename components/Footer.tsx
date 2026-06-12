"use client";

import { Mail, ArrowUp, MapPin, Clock, Zap } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/lib/language-provider";

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ── Col 1: Brand + social icons ── */}
          <div className="flex flex-col gap-5">
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 w-fit">
              <img src="/logo2.png" alt="Eligent AI" className="h-16 w-auto" />
              <span className="font-syne font-bold text-[30px] tracking-tight" style={{ color: "var(--color-text-primary)" }}>
                Eligent <span style={{ color: "var(--color-mint)" }}>AI</span>
              </span>
            </button>

            <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {t.footer.tagline}
            </p>

            {/* Social icon buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <a href="https://www.linkedin.com/in/shadabkhanai" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
                <FaLinkedin size={20} color="#0A66C2" />
              </a>
              <a href="https://twitter.com/eligentai" target="_blank" rel="noopener noreferrer" title="X (Twitter)"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
                <FaXTwitter size={20} style={{ color: "var(--color-text-primary)" }} />
              </a>
              <a href="https://instagram.com/eligentai" target="_blank" rel="noopener noreferrer" title="Instagram"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
                <FaInstagram size={20} color="#E1306C" />
              </a>
              <a href="https://youtube.com/@eligentai" target="_blank" rel="noopener noreferrer" title="YouTube"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
                <FaYoutube size={20} color="#FF0000" />
              </a>
              <a href="https://wa.me/918188887958" target="_blank" rel="noopener noreferrer" title="WhatsApp"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
                <FaWhatsapp size={20} color="#25D366" />
              </a>
            </div>
          </div>

          {/* ── Col 2: Studio Info ── */}
          <div className="flex flex-col gap-5">
            <p className="text-[14px] font-semibold uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
              Studio Info
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.22)" }}>
                  <MapPin size={15} style={{ color: "var(--color-mint)" }} />
                </div>
                <div>
                  <p className="text-[14px] font-medium mb-0.5" style={{ color: "var(--color-text-primary)" }}>Location</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    🌍 Working Remotely · Worldwide<br />Based in Lucknow, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(77,110,255,0.10)", border: "1px solid rgba(77,110,255,0.22)" }}>
                  <Clock size={15} style={{ color: "#7B9FFF" }} />
                </div>
                <div>
                  <p className="text-[14px] font-medium mb-0.5" style={{ color: "var(--color-text-primary)" }}>Response Time</p>
                  <p className="text-[13px]" style={{ color: "var(--color-text-secondary)" }}>
                    We respond within 12 hours<br />Mon – Sat, 9AM – 10PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,85,247,0.10)", border: "1px solid rgba(168,85,247,0.22)" }}>
                  <Zap size={15} style={{ color: "#C084FC" }} />
                </div>
                <div>
                  <p className="text-[14px] font-medium mb-0.5" style={{ color: "var(--color-text-primary)" }}>Availability</p>
                  <p className="text-[13px]" style={{ color: "var(--color-text-secondary)" }}>
                    2 project slots open this quarter<br />Small businesses · Startups · Enterprises
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="flex flex-col gap-5">
            <p className="text-[14px] font-semibold uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
              Get In Touch
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:contact@eligentai.com" className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5" style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.22)" }}>
                  <Mail size={18} style={{ color: "var(--color-mint)" }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] uppercase tracking-wide mb-0.5" style={{ color: "var(--color-text-muted)" }}>Email</p>
                  <p className="text-[14px] font-medium break-all" style={{ color: "var(--color-text-primary)" }}>contact@eligentai.com</p>
                </div>
              </a>

              <a href="https://wa.me/918188887958" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5" style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,211,102,0.10)", border: "1px solid rgba(37,211,102,0.22)" }}>
                  <FaWhatsapp size={18} color="#25D366" />
                </div>
                <div>
                  <p className="text-[13px] uppercase tracking-wide mb-0.5" style={{ color: "var(--color-text-muted)" }}>WhatsApp</p>
                  <p className="text-[13px] font-medium" style={{ color: "var(--color-text-primary)" }}>Click to chat</p>
                </div>
              </a>

              <a href="https://calendly.com/shadabkhaantab/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 mt-1" style={{ background: "rgba(22,163,74,0.12)", border: "1px solid rgba(22,163,74,0.30)", color: "var(--color-mint)" }}>
                <Zap size={14} />
                Book a Free 30-min Call
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-6 pb-24 sm:pb-6 sm:pr-24 2xl:pr-0 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--color-border)" }}>
          <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} EligentAI · eligentai.com · All rights reserved. Built with ❤️ in India.
          </p>
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-2 text-[12px] transition-colors hover:text-mint group" style={{ color: "var(--color-text-muted)" }}>
            Back to top
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ border: "1px solid var(--color-border)" }}>
              <ArrowUp size={12} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
