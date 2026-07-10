"use client";

import { useEffect, useState } from "react";
import { Database, MessageCircle, BarChart2, FileSearch, Shield, FileText, ExternalLink, Workflow, Target, Users, LineChart, Star, CalendarCheck, BellRing, MailCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";
import { translations } from "@/lib/translations";
import FrontDeskDemo from "@/components/FrontDeskDemo";

const FRONTDESK_URL = "https://himcity-hospital.vercel.app/";
const SUPPORT_URL = "https://eligentai-support.vercel.app/";
const PROJECT1_URL = "https://aibizanalyst.streamlit.app/";
const PROJECT2_URL = "https://intelopsai.streamlit.app/";
const FRONTDESK_IMG = "/front-desk-screenshot.jpg";
const SUPPORT_IMG = "/support-ai-screenshot.png";
const PROJECT1_IMG = "/ai-analyst-screenshot.png";
const PROJECT2_IMG = "/opspilot-screenshot.png";

const frontdeskStack = ["Python", "FastAPI", "LangGraph", "RAG", "OpenAI API", "PostgreSQL", "Next.js", "Telegram API"];
const supportStack = ["Python", "LangGraph", "OpenAI API", "FastAPI", "Next.js", "PostgreSQL", "RAG"];
const project1stack = ["Python", "LangChain", "OpenAI API", "PostgreSQL", "Neon DB", "Plotly", "Streamlit"];
const project2stack = ["Python", "LangChain", "OpenAI API", "PostgreSQL", "Neon DB", "RAG Architecture", "Streamlit"];
const frontdeskIcons = [MessageCircle, CalendarCheck, BellRing, MailCheck];
const supportIcons = [Workflow, Target, Users, LineChart];
const project1icons = [MessageCircle, BarChart2, Database, FileText];
const project2icons = [FileSearch, Database, Shield, FileText];

/** True when mobile GPU path should avoid live embed + motion layers. */
function useMobileGpuSafe() {
  const [safe, setSafe] = useState(true); // default safe (SSR + first paint)
  useEffect(() => {
    const widthMq = window.matchMedia("(max-width: 1024px)");
    const touchMq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setSafe(widthMq.matches || touchMq.matches);
    update();
    widthMq.addEventListener("change", update);
    touchMq.addEventListener("change", update);
    return () => {
      widthMq.removeEventListener("change", update);
      touchMq.removeEventListener("change", update);
    };
  }, []);
  return safe;
}

export default function Projects() {
  const { t } = useLanguage();
  const mobileSafe = useMobileGpuSafe();

  const projects = [
    {
      id: "ai-front-desk",
      title: "AI Front Desk",
      flagship: true,
      demo: true,
      icons: frontdeskIcons,
      stack: frontdeskStack,
      accent: "#06B6D4",
      border: "#164E63",
      url: FRONTDESK_URL,
      img: FRONTDESK_IMG,
      btnBg: "#083344",
      btnBorder: "#0E7490",
      btnColor: "#22D3EE",
    },
    {
      id: "eligent-support",
      title: "EligentAI Support",
      flagship: false,
      icons: supportIcons,
      stack: supportStack,
      accent: "#A855F7",
      border: "#581C87",
      url: SUPPORT_URL,
      img: SUPPORT_IMG,
      btnBg: "#3B0764",
      btnBorder: "#7E22CE",
      btnColor: "#C084FC",
    },
    {
      id: "ai-analyst",
      title: "AI Analyst",
      flagship: false,
      icons: project1icons,
      stack: project1stack,
      accent: "#16A34A",
      border: "#14532D",
      url: PROJECT1_URL,
      img: PROJECT1_IMG,
      btnBg: "#052e16",
      btnBorder: "#15803D",
      btnColor: "#16A34A",
    },
    {
      id: "opspilot",
      title: "IntelOps AI",
      flagship: false,
      icons: project2icons,
      stack: project2stack,
      accent: "#4D6EFF",
      border: "#1E3A8A",
      url: PROJECT2_URL,
      img: PROJECT2_IMG,
      btnBg: "#172554",
      btnBorder: "#3B82F6",
      btnColor: "#7B9FFF",
    },
  ];

  return (
    <section id="projects" className="relative py-28">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* No Framer Motion here — opacity/transform layers tear body copy on Android. */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: "#4D6EFF" }} />
            <span className="text-[12px] font-medium tracking-widest uppercase" style={{ color: "#4D6EFF" }}>{t.projects.sectionLabel}</span>
          </div>
          <h2 className="font-syne font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4" style={{ color: "var(--color-text-primary)" }}>{t.projects.title}</h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{t.projects.sub}</p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((meta, i) => {
            const proj = t.projects.items[i] || translations.en.projects.items[i];
            // Live chat embed only on desktop. Nested overflow + shadows in the
            // same card corrupt description/feature text on Adreno/Mali GPUs.
            const showLiveDemo = Boolean(meta.demo) && !mobileSafe;

            return (
              <article
                key={meta.id}
                className="project-card rounded-3xl"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Left — content: fully opaque paints, no glass, no motion */}
                  <div className="project-card-body p-8 lg:p-10 flex flex-col gap-6">

                    <div className="flex items-center gap-3 flex-wrap">
                      {meta.flagship && (
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-full tracking-wide"
                          style={{ background: "#292524", border: "1px solid #A16207", color: "#FBBF24" }}
                        >
                          <Star size={11} fill="currentColor" />
                          {t.projects.flagship}
                        </span>
                      )}
                      <span
                        className="px-3 py-1 text-[11px] font-medium rounded-full tracking-wide"
                        style={{ background: "var(--color-surface2)", border: "1px solid " + meta.border, color: meta.accent }}
                      >
                        {t.projects.status}
                      </span>
                      <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{proj.subtitle}</span>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="font-syne font-bold text-[30px] sm:text-[34px] leading-tight tracking-[-0.02em]" style={{ color: "var(--color-text-primary)" }}>
                        {meta.title}
                      </h3>
                      <a
                        href={meta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-[12px] font-semibold"
                        style={{ background: meta.btnBg, border: "1px solid " + meta.btnBorder, color: meta.btnColor }}
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    </div>

                    <p className="project-card-desc text-[15px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {proj.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {proj.features.map((feat: string, k: number) => {
                        const Icon = meta.icons[k];
                        return (
                          <div
                            key={k}
                            className="feature-tile flex items-center gap-3 p-3 rounded-xl"
                            style={{ background: "var(--color-surface2)", border: "1px solid " + meta.border }}
                          >
                            <Icon size={14} style={{ color: meta.accent, flexShrink: 0 }} />
                            <span className="text-[12px] font-medium" style={{ color: meta.accent }}>{feat}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
                      <p className="text-[11px] uppercase tracking-widest mb-3" style={{ color: "var(--color-text-muted)" }}>{t.projects.stackLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {meta.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] rounded-md"
                            style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right — live demo (desktop only) or screenshot */}
                  <div
                    className="project-card-media relative min-h-[220px] lg:min-h-0 flex items-center justify-center py-8 lg:py-10 px-4 border-t lg:border-t-0 lg:border-l"
                    style={{
                      background: "var(--color-surface2)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {showLiveDemo ? (
                      <>
                        <img
                          src={meta.img}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ opacity: 0.14 }}
                        />
                        <FrontDeskDemo />
                      </>
                    ) : (
                      <div className="relative w-full max-w-[580px]">
                        <div
                          className="rounded-xl overflow-hidden"
                          style={{ border: "1px solid " + meta.border }}
                        >
                          <img
                            src={meta.img}
                            alt={meta.title + " — " + proj.subtitle}
                            loading="lazy"
                            decoding="async"
                            className="w-full block"
                          />
                        </div>
                        {meta.demo && mobileSafe && (
                          <p className="text-center text-[11px] mt-3" style={{ color: "var(--color-text-muted)" }}>
                            Open <a href={meta.url} target="_blank" rel="noopener noreferrer" style={{ color: meta.accent }} className="underline underline-offset-2">Live Demo</a> to try the chat on this device
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
