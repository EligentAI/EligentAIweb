"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Globe, Check } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { useLanguage } from "@/lib/language-provider";
import { localeLabels, type Locale } from "@/lib/translations";

const locales: Locale[] = ["en", "es", "fr"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";
  const onBlog = pathname?.startsWith("/blog");

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.caseStudies, href: "#case-studies" },
    { label: t.nav.technology, href: "#technology" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.blog || "Blog", href: "/blog", route: true as const },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!onHome) return;
      const sections = ["home", "services", "projects", "case-studies", "technology", "about", "contact"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHome]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setMobileOpen(false);
    if (isRoute || href.startsWith("/")) {
      router.push(href);
      return;
    }
    const id = href.replace("#", "");
    if (!onHome) {
      router.push("/" + href);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isLight = theme === "light";

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "var(--color-nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap- group">
              <img src="/logo2.png" alt="Eligent AI logo" className="h-12 w-auto" />
              <span className="font-syne font-bold text-[18px] tracking-tight" style={{ color: "var(--color-text-primary)" }}>
                Eligent <span style={{ color: "var(--color-mint)" }}>AI</span>
              </span>
            </Link>

            {/* Desktop Nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isRoute = "route" in link && link.route;
                const isActive = isRoute
                  ? onBlog
                  : onHome && activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href, isRoute)}
                    className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300"
                    style={{ color: isActive ? "#16A34A" : "var(--color-text-secondary)" }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(0,255,178,0.08)", border: "1px solid rgba(0,255,178,0.15)" }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right controls */}
            <div className="hidden lg:flex items-center gap-2">

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                title={isLight ? "Switch to dark mode" : "Switch to light mode"}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                style={{
                  background: "var(--color-input-bg)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
              >
                <motion.div
                  key={isLight ? "sun" : "moon"}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isLight ? <Moon size={15} /> : <Sun size={15} />}
                </motion.div>
              </button>

              {/* Language dropdown */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 h-9 rounded-lg text-[12px] font-medium transition-all duration-300 uppercase"
                  style={{
                    background: langOpen ? "rgba(0,255,178,0.06)" : "var(--color-input-bg)",
                    border: "1px solid " + (langOpen ? "rgba(0,255,178,0.2)" : "var(--color-border)"),
                    color: langOpen ? "#16A34A" : "var(--color-text-secondary)",
                  }}
                >
                  <Globe size={13} />
                  {locale}
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-40 rounded-xl overflow-hidden z-50"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                      }}
                    >
                      {locales.map((l) => (
                        <button
                          key={l}
                          onClick={() => { setLocale(l); setLangOpen(false); }}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-[13px] transition-all duration-150"
                          style={{
                            color: l === locale ? "#16A34A" : "var(--color-text-secondary)",
                            background: l === locale ? "rgba(0,255,178,0.06)" : "transparent",
                          }}
                        >
                          <span>{localeLabels[l]}</span>
                          {l === locale && <Check size={12} />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Book a Demo — desktop */}
              <a href="https://calendly.com/shadabkhaantab/30min" target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-[13px] font-syne font-semibold rounded-xl ml-1">{t.nav.bookDemo}</a>

            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                style={{
                  background: "var(--color-input-bg)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {isLight ? <Moon size={15} /> : <Sun size={15} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                style={{
                  background: "var(--color-input-bg)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden"
            style={{
              background: "var(--color-surface)",
              borderBottom: "1px solid var(--color-border)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isRoute = "route" in link && link.route;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNavClick(link.href, isRoute)}
                    className="text-left px-4 py-3 text-[14px] rounded-lg transition-all"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}

              {/* Language selector mobile */}
              <div className="mt-3 pt-3 flex gap-2 flex-wrap" style={{ borderTop: "1px solid var(--color-border)" }}>
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all"
                    style={{
                      background: l === locale ? "rgba(0,255,178,0.1)" : "var(--color-input-bg)",
                      border: "1px solid " + (l === locale ? "rgba(0,255,178,0.3)" : "var(--color-border)"),
                      color: l === locale ? "#16A34A" : "var(--color-text-secondary)",
                    }}
                  >
                    <Globe size={11} />
                    {localeLabels[l]}
                  </button>
                ))}
              </div>

              {/* Book a Demo — mobile */}
              <div className="mt-2">
                <a href="https://calendly.com/shadabkhaantab/30min" target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-3 text-[14px] font-syne font-semibold rounded-xl text-center block">{t.nav.bookDemo}</a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}