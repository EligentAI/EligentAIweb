"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";
import { translations } from "@/lib/translations";

/**
 * Live, in-card demo of the AI Front Desk. This is NOT a mock — it talks to
 * the same production backend that powers the live clinic sites, scoped to
 * the HimCity Hospital demo tenant. Visitors ask a question right here and
 * get a real RAG-grounded answer in seconds.
 */

const API = "https://api.eligentai.com/api/v1/web";
const ORG = "himcity-hospital";
const ACCENT = "#06B6D4";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

interface Session {
  sessionId: string;
  token: string;
}

export default function FrontDeskDemo() {
  const { t } = useLanguage();
  const d = t.projects.demo || translations.en.projects.demo;

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const sessionRef = useRef<Session | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, busy]);

  const ensureSession = async (): Promise<Session> => {
    if (sessionRef.current) return sessionRef.current;
    const r = await fetch(`${API}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ org: ORG, name: "Portfolio Visitor" }),
    });
    if (!r.ok) throw new Error(`session ${r.status}`);
    const data = await r.json();
    const s = { sessionId: data.session_id, token: data.access_token };
    sessionRef.current = s;
    return s;
  };

  const send = async (text: string) => {
    const msg = text.trim();
    if (!msg || busy) return;
    setMessages((m) => [...m, { role: "user", content: msg }]);
    setInput("");
    setBusy(true);
    try {
      let s = await ensureSession();
      let r = await fetch(`${API}/session/${s.sessionId}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${s.token}` },
        body: JSON.stringify({ content: msg }),
      });
      if (r.status === 401 || r.status === 403 || r.status === 404) {
        sessionRef.current = null;
        s = await ensureSession();
        r = await fetch(`${API}/session/${s.sessionId}/message`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${s.token}` },
          body: JSON.stringify({ content: msg }),
        });
      }
      if (!r.ok) throw new Error(`message ${r.status}`);
      const data = await r.json();
      const replies: string[] = data.replies?.length ? data.replies : [d.noReply];
      setMessages((m) => [...m, ...replies.map((c) => ({ role: "assistant" as const, content: c }))]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: d.error }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      className="relative z-10 w-full max-w-[440px] rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "var(--color-surface)",
        border: "1px solid rgba(6,182,212,0.35)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: "rgba(6,182,212,0.10)", borderBottom: "1px solid rgba(6,182,212,0.25)" }}>
        <span className="relative flex-shrink-0">
          <span className="block w-2 h-2 rounded-full" style={{ background: ACCENT }} />
          <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(6,182,212,0.6)" }} />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold leading-tight" style={{ color: "var(--color-text-primary)" }}>{d.title}</p>
          <p className="text-[11px] leading-tight" style={{ color: "var(--color-text-muted)" }}>{d.subtitle}</p>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full tracking-wide uppercase" style={{ background: "rgba(6,182,212,0.15)", color: ACCENT, border: "1px solid rgba(6,182,212,0.3)" }}>
          {d.badge}
        </span>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2.5 px-4 py-3 h-[240px] overflow-y-auto">
        {messages.length === 0 && (
          <p className="text-[12px] leading-relaxed m-auto text-center px-6" style={{ color: "var(--color-text-muted)" }}>
            {d.hint}
          </p>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <span className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: m.role === "user" ? "var(--color-input-bg)" : "rgba(6,182,212,0.12)" }}>
              {m.role === "user"
                ? <User size={12} style={{ color: "var(--color-text-muted)" }} />
                : <Bot size={12} style={{ color: ACCENT }} />}
            </span>
            <div
              className="max-w-[80%] px-3 py-2 rounded-xl text-[12px] leading-relaxed whitespace-pre-wrap"
              style={m.role === "user"
                ? { background: "rgba(6,182,212,0.14)", color: "var(--color-text-primary)", border: "1px solid rgba(6,182,212,0.25)" }
                : { background: "var(--color-input-bg)", color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }}
            >
              {m.content}
            </div>
          </div>
        ))}
        {busy && (
          <div className="flex gap-2">
            <span className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(6,182,212,0.12)" }}>
              <Bot size={12} style={{ color: ACCENT }} />
            </span>
            <div className="px-3 py-2.5 rounded-xl flex items-center gap-1" style={{ background: "var(--color-input-bg)", border: "1px solid var(--color-border)" }}>
              {[0, 1, 2].map((k) => (
                <span key={k} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: ACCENT, animationDelay: `${k * 0.12}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Suggested chips */}
      {messages.length === 0 && (
        <div className="flex flex-wrap gap-1.5 px-4 pb-2">
          {d.chips.map((c: string) => (
            <button
              key={c}
              onClick={() => send(c)}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.3)", color: ACCENT }}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 px-3 py-3" style={{ borderTop: "1px solid var(--color-border)" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder={d.placeholder}
          className="flex-1 px-3 py-2 rounded-lg text-[12px] outline-none"
          style={{ background: "var(--color-input-bg)", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}
        />
        <button
          onClick={() => send(input)}
          disabled={!input.trim() || busy}
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-40"
          style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.4)", color: ACCENT }}
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
