"use client";

import { Github, Linkedin, Mail, ArrowUp, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.caseStudies, href: "#case-studies" },
    { label: t.nav.technology, href: "#technology" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { href: "https://github.com/EligentAI", Icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/shadab-khan-88a632264", Icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/eligentai", Icon: Twitter, label: "X (Twitter)" },
    { href: "https://instagram.com/eligentai", Icon: Instagram, label: "Instagram" },
    { href: "https://youtube.com/@eligentai", Icon: Youtube, label: "YouTube" },
    { href: "https://wa.me/+918188887958", Icon: MessageCircle, label: "WhatsApp" },
    { href: "mailto:contact.eligentai@gmail.com", Icon: Mail, label: "contact.EligentAI@gmail.com" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(22,163,74,0.2), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 mb-5">
              <img src="/logo2.png" alt="Eligent AI logo" className="h-9 w-auto" />
              <span className="font-syne font-bold text-[17px] tracking-tight" style={{ color: "var(--color-text-primary)" }}>
                Eligent <span style={{ color: "var(--color-mint)" }}>AI</span>
              </span>
            </button>
            <p className="text-[13px] leading-relaxed max-w-[220px] mb-4" style={{ color: "var(--color-text-secondary)" }}>
              {t.footer.tagline}
            </p>
            <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>
              🌍 Working Remotely · Worldwide
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>
              {t.footer.navTitle}
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)}
                  className="text-left text-[13px] py-0.5 hover:text-mint transition-colors"
                  style={{ color: "var(--color-text-secondary)" }}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>
              CONNECT
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.slice(0, 5).map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[13px] transition-colors hover:text-mint"
                  style={{ color: "var(--color-text-secondary)" }}>
                  <Icon size={14} className="group-hover:text-mint transition-colors" style={{ color: "var(--color-text-muted)" }} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>
              CONTACT
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.slice(5).map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[13px] transition-colors hover:text-mint"
                  style={{ color: "var(--color-text-secondary)" }}>
                  <Icon size={14} className="group-hover:text-mint transition-colors" style={{ color: "var(--color-text-muted)" }} />
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--color-border)" }}>
          <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Eligent AI. {t.footer.copyright}
          </p>
          <button onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 text-[12px] hover:text-mint transition-colors group"
            style={{ color: "var(--color-text-muted)" }}>
            {t.footer.backTop}
            <div className="w-6 h-6 rounded-md flex items-center justify-center transition-all"
              style={{ border: "1px solid var(--color-border)" }}>
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}