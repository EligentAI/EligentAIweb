import Link from "next/link";
import {
  Clock,
  Users,
  Bot,
  CheckCircle2,
  XCircle,
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  BellRing,
  Sparkles,
  Scale,
} from "lucide-react";

const DEMO_URL = "https://himcity-hospital.vercel.app/";
const CALENDLY = "https://calendly.com/shadabkhaantab/30min";

const rows: { factor: string; human: string; ai: string; hybrid: string }[] = [
  {
    factor: "Hours of coverage",
    human: "Shift-based (often 8–12 hrs)",
    ai: "24/7, including nights & holidays",
    hybrid: "AI covers gaps; humans peak hours",
  },
  {
    factor: "Same FAQ, 100× a day",
    human: "Correct — but draining",
    ai: "Instant, consistent, never tired",
    hybrid: "AI handles FAQs; staff complex cases",
  },
  {
    factor: "Appointment booking",
    human: "Flexible, can negotiate",
    ai: "Real slots from schedule — no ghost bookings",
    hybrid: "AI books routine; staff edge cases",
  },
  {
    factor: "Empathy & sensitive topics",
    human: "Strong (trained staff)",
    ai: "Good for routine; limited for crises",
    hybrid: "Fast handoff to a person",
  },
  {
    factor: "Cost at scale",
    human: "Rises with headcount & overtime",
    ai: "Fixed system cost, unlimited chats",
    hybrid: "Best cost-to-coverage ratio",
  },
  {
    factor: "Languages",
    human: "Depends who is on shift",
    ai: "Can serve multiple languages consistently",
    hybrid: "AI multilingual; staff preferred language",
  },
  {
    factor: "Knowledge accuracy",
    human: "Varies by training & memory",
    ai: "Grounded in clinic docs (RAG) — no guessing",
    hybrid: "AI + staff both use same source of truth",
  },
];

export default function AiFrontDeskVsHumanArticle() {
  return (
    <article className="blog-prose">
      {/* Lead */}
      <p className="lead">
        Every clinic still needs people. The question is no longer{" "}
        <em>“AI or human?”</em> — it’s{" "}
        <strong>“who should do which job at the front desk?”</strong>
      </p>
      <p>
        Human receptionists build trust, handle delicate conversations, and
        improvise when life gets messy. An{" "}
        <strong>AI front desk</strong> never sleeps, never loses the fee list,
        and can book against <em>real</em> doctor schedules while your team is
        with patients. The clinics winning in 2026 combine both.
      </p>
      <p>
        This guide is a practical comparison from{" "}
        <strong>Eligent AI (EligentAI)</strong> — builders of a production{" "}
        <Link href="/#projects">AI Front Desk</Link> already running for live
        clinics. No hype. Just what actually moves the needle for patients and
        staff.
      </p>

      {/* Snapshot cards */}
      <div className="not-prose grid sm:grid-cols-2 gap-4 my-10">
        <div
          className="rounded-2xl p-6"
          style={{
            background: "var(--color-surface2)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="flex items-center gap-2 mb-3" style={{ color: "#A78BFA" }}>
            <Users size={18} />
            <span className="text-[12px] font-semibold uppercase tracking-widest">
              Human receptionist
            </span>
          </div>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Best at empathy, judgment, and complex edge cases — limited by
            shifts, burnout, and how many lines one person can hold.
          </p>
        </div>
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(6,182,212,0.08)",
            border: "1px solid rgba(6,182,212,0.28)",
          }}
        >
          <div className="flex items-center gap-2 mb-3" style={{ color: "#22D3EE" }}>
            <Bot size={18} />
            <span className="text-[12px] font-semibold uppercase tracking-widest">
              AI front desk
            </span>
          </div>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Best at 24/7 answers, consistent policy, and in-chat booking with
            real slots — weak alone on pure human crises without a handoff path.
          </p>
        </div>
      </div>

      <h2 id="why-this-matters">Why this debate exists now</h2>
      <p>
        Front desks are under pressure from three directions at once:
      </p>
      <ul>
        <li>
          <strong>After-hours demand</strong> — patients message and call when
          the counter is closed.
        </li>
        <li>
          <strong>Repeat questions</strong> — OPD timings, insurance, fees,
          doctor availability — the same five answers, all day.
        </li>
        <li>
          <strong>Booking friction</strong> — manual slot juggling leads to
          double books, no-shows, and staff stuck on the phone instead of at the
          counter.
        </li>
      </ul>
      <p>
        Hiring more people is one answer. Smarter coverage is another. An AI
        front desk doesn’t replace the craft of hospitality — it removes the
        load that never needed a human in the first place.
      </p>

      <h2 id="comparison-table">Side-by-side comparison</h2>
      <p>
        Use this as a decision table for owners, hospital admins, and clinic
        managers — not a scoreboard for “who wins.”
      </p>

      <div className="not-prose overflow-x-auto my-8 rounded-2xl" style={{ border: "1px solid var(--color-border)" }}>
        <table className="w-full text-left text-[13px] min-w-[640px]">
          <thead>
            <tr style={{ background: "var(--color-surface2)" }}>
              <th className="px-4 py-3.5 font-semibold" style={{ color: "var(--color-text-primary)" }}>
                Factor
              </th>
              <th className="px-4 py-3.5 font-semibold" style={{ color: "#A78BFA" }}>
                Human
              </th>
              <th className="px-4 py-3.5 font-semibold" style={{ color: "#22D3EE" }}>
                AI front desk
              </th>
              <th className="px-4 py-3.5 font-semibold" style={{ color: "#22C55E" }}>
                Hybrid (recommended)
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.factor}
                style={{
                  background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface2)",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <td className="px-4 py-3 font-medium" style={{ color: "var(--color-text-primary)" }}>
                  {r.factor}
                </td>
                <td className="px-4 py-3" style={{ color: "var(--color-text-secondary)" }}>
                  {r.human}
                </td>
                <td className="px-4 py-3" style={{ color: "var(--color-text-secondary)" }}>
                  {r.ai}
                </td>
                <td className="px-4 py-3" style={{ color: "var(--color-text-secondary)" }}>
                  {r.hybrid}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="where-humans-win">Where human receptionists still win</h2>
      <p>Keep people front-and-center for:</p>
      <ul>
        <li>
          <strong>Emotional or high-stakes moments</strong> — bad news, angry
          families, elderly patients who need patience and presence.
        </li>
        <li>
          <strong>Judgment calls</strong> — overbook exceptions, VIP handling,
          insurance edge cases that aren’t in the policy PDF yet.
        </li>
        <li>
          <strong>In-person flow</strong> — directing traffic in a crowded
          lobby, reading body language, calming a waiting room.
        </li>
        <li>
          <strong>Brand warmth</strong> — a great receptionist is marketing.
          AI should amplify them, not erase that smile at the counter.
        </li>
      </ul>
      <p>
        If a vendor promises “fire your entire front desk,” treat that as a red
        flag. Production clinics don’t run on slogans.
      </p>

      <h2 id="where-ai-wins">Where an AI front desk clearly wins</h2>
      <div className="not-prose grid sm:grid-cols-2 gap-3 my-6">
        {[
          {
            icon: Clock,
            title: "24/7 first response",
            body: "Nights, weekends, holidays — patients get answers while staff sleep.",
          },
          {
            icon: MessageCircle,
            title: "Grounded FAQs",
            body: "Answers from your clinic docs — timings, fees, insurance — not invented claims.",
          },
          {
            icon: CalendarCheck,
            title: "In-chat booking",
            body: "Real doctor slots inside the conversation. No “we’ll call you back.”",
          },
          {
            icon: BellRing,
            title: "Staff alerts",
            body: "Instant Telegram (or similar) pings so humans only jump in when needed.",
          },
        ].map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="flex gap-3 p-4 rounded-xl"
            style={{
              background: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(6,182,212,0.12)",
                border: "1px solid rgba(6,182,212,0.28)",
                color: "#22D3EE",
              }}
            >
              <Icon size={18} />
            </div>
            <div>
              <p className="text-[14px] font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>
                {title}
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p>
        That’s exactly how{" "}
        <strong>Eligent AI’s AI Front Desk</strong> is designed: multi-tenant
        AI for clinics, RAG-grounded answers, in-chat booking against real
        schedules, staff confirmations, and installable on a website — not a
        toy chatbot demo.
      </p>

      <h2 id="myths">Three myths that waste money</h2>
      <div className="not-prose space-y-3 my-6">
        {[
          {
            bad: "“AI will replace our receptionist next month.”",
            good: "AI should absorb volume so receptionists do higher-value work.",
          },
          {
            bad: "“Any ChatGPT widget is an AI front desk.”",
            good: "Without real schedules, clinic docs, and staff alerts, you get polite wrong answers.",
          },
          {
            bad: "“We’ll only use AI; no process change.”",
            good: "You still need clear policies, escalation rules, and a human dashboard for confirmations.",
          },
        ].map((m) => (
          <div
            key={m.bad}
            className="rounded-xl p-4 sm:p-5"
            style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
          >
            <div className="flex gap-2 items-start mb-2">
              <XCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F87171" }} />
              <p className="text-[14px]" style={{ color: "var(--color-text-secondary)" }}>
                {m.bad}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#22C55E" }} />
              <p className="text-[14px] font-medium" style={{ color: "var(--color-text-primary)" }}>
                {m.good}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="hybrid-model">The hybrid model that actually works</h2>
      <p>Think of the front desk as three layers:</p>
      <ol>
        <li>
          <strong>Layer 1 — AI (always on):</strong> greet, answer FAQs from
          clinic knowledge, offer real appointment slots, collect patient
          details.
        </li>
        <li>
          <strong>Layer 2 — Staff dashboard:</strong> one-tap confirm/cancel,
          Telegram alerts, override when needed.
        </li>
        <li>
          <strong>Layer 3 — Humans (high value):</strong> walk-ins, escalations,
          clinical sensitivity, relationship care.
        </li>
      </ol>
      <p>
        Patients experience “the clinic is always available.” Staff experience
        fewer interruptions for the same five questions. Owners experience
        coverage without a 3× payroll line for night shifts.
      </p>

      <div
        className="not-prose my-10 rounded-2xl p-6 sm:p-8"
        style={{
          background: "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(22,163,74,0.08) 100%)",
          border: "1px solid rgba(6,182,212,0.28)",
        }}
      >
        <div className="flex items-center gap-2 mb-3" style={{ color: "#22D3EE" }}>
          <Sparkles size={18} />
          <span className="text-[12px] font-bold uppercase tracking-widest">
            Live product · Eligent AI Front Desk
          </span>
        </div>
        <h3 className="font-syne font-bold text-[22px] sm:text-[26px] mb-3" style={{ color: "var(--color-text-primary)" }}>
          Try the AI Front Desk yourself
        </h3>
        <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Production system used by live clinics — grounded answers, real
          booking flow, staff alerts. Not a slide deck.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: "rgba(6,182,212,0.18)",
              border: "1px solid rgba(6,182,212,0.45)",
              color: "#22D3EE",
            }}
          >
            Open live demo
            <ArrowRight size={16} />
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[14px] font-syne font-semibold"
          >
            Book a strategy call
          </a>
        </div>
      </div>

      <h2 id="cost">Cost: people vs AI vs both</h2>
      <p>
        Exact numbers vary by city and clinic size, but the shape of the
        economics is consistent:
      </p>
      <ul>
        <li>
          <strong>Human-only:</strong> quality during open hours; silence or
          missed calls outside them. Scaling = more salaries + overtime.
        </li>
        <li>
          <strong>AI-only (no process):</strong> cheap coverage with poor
          escalation becomes patient frustration.
        </li>
        <li>
          <strong>Hybrid:</strong> AI absorbs high-volume, low-complexity work;
          humans stay for judgment. Coverage rises faster than payroll.
        </li>
      </ul>
      <p>
        Eligent AI ships fixed-price builds with{" "}
        <strong>100% code ownership</strong> — so you’re not locked into a
        black-box subscription that holds your patient channel hostage.
      </p>

      <h2 id="checklist">Decision checklist for clinic owners</h2>
      <p>Before you buy any “AI receptionist,” demand yes to these:</p>
      <ul>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={16} style={{ color: "#22C55E" }} />
          Answers come from <strong>your</strong> clinic documents (not generic web knowledge)
        </li>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={16} style={{ color: "#22C55E" }} />
          Booking uses <strong>real</strong> doctor availability
        </li>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={16} style={{ color: "#22C55E" }} />
          Staff get <strong>instant alerts</strong> and a confirm path
        </li>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={16} style={{ color: "#22C55E" }} />
          Clear <strong>human handoff</strong> when the AI is unsure
        </li>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={16} style={{ color: "#22C55E" }} />
          You can try a <strong>live demo</strong> before a contract
        </li>
      </ul>

      <h2 id="verdict">Verdict</h2>
      <div
        className="not-prose flex gap-3 p-5 rounded-2xl my-6"
        style={{
          background: "var(--color-surface2)",
          border: "1px solid var(--color-border)",
        }}
      >
        <Scale size={22} className="flex-shrink-0 mt-0.5" style={{ color: "#22C55E" }} />
        <div>
          <p className="text-[15px] leading-relaxed mb-2" style={{ color: "var(--color-text-primary)" }}>
            <strong>Human receptionist:</strong> irreplaceable for empathy,
            judgment, and in-person care.
          </p>
          <p className="text-[15px] leading-relaxed mb-2" style={{ color: "var(--color-text-primary)" }}>
            <strong>AI front desk:</strong> irreplaceable for 24/7 coverage,
            consistent answers, and high-volume booking.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            <strong>Winner for modern clinics:</strong> hybrid — AI on the
            first line, humans on what only humans do well. That’s the model
            behind Eligent AI’s AI Front Desk.
          </p>
        </div>
      </div>

      <h2 id="next-steps">Next steps</h2>
      <ol>
        <li>
          Open the{" "}
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            live AI Front Desk demo
          </a>{" "}
          and ask about timings, fees, or booking.
        </li>
        <li>
          List your top 20 patient questions — those become your knowledge base.
        </li>
        <li>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            Book a free 30-minute call
          </a>{" "}
          with Eligent AI to map hybrid coverage for your clinic.
        </li>
      </ol>
      <p>
        <strong>Eligent AI (EligentAI)</strong> builds production AI systems —
        AI front desk, support agents, and automation — with fixed pricing and
        full code ownership. Explore more on{" "}
        <Link href="/">eligentai.com</Link> or jump to{" "}
        <Link href="/#projects">live projects</Link>.
      </p>

      <div className="not-prose mt-10 flex flex-wrap gap-2">
        {["AI front desk", "AI receptionist", "Clinic automation", "Appointment booking", "EligentAI"].map(
          (tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[11px] font-medium"
              style={{
                background: "var(--color-surface2)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
              }}
            >
              {tag}
            </span>
          )
        )}
      </div>
    </article>
  );
}
