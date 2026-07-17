import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileWarning,
  MessageCircle,
  Search,
  Shield,
  Sparkles,
  XCircle,
} from "lucide-react";

const DEMO_URL = "https://himcity-hospital.vercel.app/";
const CALENDLY = "https://calendly.com/shadabkhaantab/30min";

const faqs = [
  {
    n: "1",
    q: "What are your OPD / clinic timings?",
    why: "Wrong hours = patients show up to a locked door — or never come.",
    source: "Official timings PDF / website notice / admin memo",
    bad: "Guessing from a generic hospital template or last year’s memory.",
    good: "Retrieve the current timings document, quote it, and say when it was last updated.",
  },
  {
    n: "2",
    q: "Which insurance / TPA do you accept?",
    why: "A wrong yes on insurance destroys trust and creates billing fights.",
    source: "Approved insurer list maintained by accounts",
    bad: "“We accept most major insurers” without checking the list.",
    good: "Match the insurer name against your list; if unsure, say so and hand off to staff.",
  },
  {
    n: "3",
    q: "What is the consultation fee / package cost?",
    why: "Invented prices are a legal and reputation risk.",
    source: "Fee schedule / rate card owned by admin",
    bad: "Rounding or inventing a “typical” fee from other clinics.",
    good: "Answer only if the fee is in the knowledge base; otherwise route to billing.",
  },
  {
    n: "4",
    q: "Which doctor is available for this specialty?",
    why: "Wrong doctor or specialty wastes a visit and your team’s time.",
    source: "Doctor roster + department mapping",
    bad: "Suggesting a name that “sounds right” from training data.",
    good: "Use roster data only; offer booking only against real schedules when connected.",
  },
  {
    n: "5",
    q: "What documents should I bring / what is the prep?",
    why: "Missing reports delay care and frustrate patients.",
    source: "Procedure prep sheets / specialty guidelines",
    bad: "Generic internet advice that doesn’t match your clinic.",
    good: "Return your prep checklist; flag “confirm with staff” for complex cases.",
  },
];

export default function ClinicAiFaqsRagArticle() {
  return (
    <article className="blog-prose">
      <p className="lead">
        A clinic AI that <em>sounds</em> confident but invents fees, insurance,
        or timings is worse than no bot at all. Patients remember the wrong
        answer. Staff clean up the mess.
      </p>
      <p>
        The fix is not “a smarter model.” It’s a production pattern:{" "}
        <strong>answers grounded in your documents</strong> — often called{" "}
        <strong>RAG</strong> (retrieval-augmented generation) — plus clear rules
        for when the system must say “I don’t know” and hand off to a human.
      </p>
      <p>
        At <strong>Eligent AI</strong> we build production AI systems — AI front
        desk, support agents, and knowledge assistants — where accuracy beats
        chatty guesses. This guide is the practical checklist clinics (and any
        business FAQ bot) should demand.
      </p>

      <h2 id="what-is-rag">What “grounded” means (RAG in plain English)</h2>
      <p>
        A plain chatbot answers from whatever it “remembers” from training —
        which is not your fee list. A <strong>RAG-based AI system</strong>:
      </p>
      <ol>
        <li>
          <strong>Retrieves</strong> relevant chunks from <em>your</em> PDFs,
          pages, and policies.
        </li>
        <li>
          <strong>Generates</strong> a reply using only those chunks (plus safe
          instructions).
        </li>
        <li>
          <strong>Refuses or escalates</strong> when nothing relevant is found.
        </li>
      </ol>

      <div className="not-prose grid sm:grid-cols-3 gap-3 my-8">
        {[
          {
            icon: Search,
            title: "Retrieve",
            body: "Find the right clinic docs for this question.",
            color: "#22C55E",
          },
          {
            icon: BookOpen,
            title: "Ground",
            body: "Answer from those docs — not from the open internet.",
            color: "#06B6D4",
          },
          {
            icon: Shield,
            title: "Guard",
            body: "If confidence is low, don’t invent — hand off to staff.",
            color: "#A855F7",
          },
        ].map(({ icon: Icon, title, body, color }) => (
          <div
            key={title}
            className="rounded-xl p-4"
            style={{
              background: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color,
              }}
            >
              <Icon size={16} />
            </div>
            <p className="text-[14px] font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>
              {title}
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {body}
            </p>
          </div>
        ))}
      </div>

      <p>
        That’s the same backbone behind a serious{" "}
        <strong>AI front desk</strong>, an internal knowledge assistant, or a
        customer support agent — different channels, same accuracy rules.
      </p>

      <h2 id="why-generic-fails">Why generic “AI chatbots” fail in clinics</h2>
      <ul>
        <li>
          <strong>Hallucinations:</strong> fluent wrong answers on fees and
          insurance.
        </li>
        <li>
          <strong>Stale knowledge:</strong> last year’s timings still “sound”
          right.
        </li>
        <li>
          <strong>No ownership:</strong> nobody knows which PDF the bot used —
          if any.
        </li>
        <li>
          <strong>No escalation:</strong> the bot never admits uncertainty.
        </li>
      </ul>
      <p>
        Production AI systems treat the knowledge base like a product: versioned
        docs, clear owners, and tests for the questions patients actually ask.
      </p>

      <h2 id="five-faqs">The 5 FAQs that must never be guessed</h2>
      <p>
        If your system gets these wrong, you don’t have an AI receptionist —
        you have a liability generator.
      </p>

      <div className="not-prose flex flex-col gap-4 my-8">
        {faqs.map((f) => (
          <div
            key={f.n}
            className="rounded-2xl p-5 sm:p-6"
            style={{
              background: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold flex-shrink-0"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "#22C55E",
                }}
              >
                {f.n}
              </span>
              <div>
                <p className="text-[15px] font-semibold leading-snug" style={{ color: "var(--color-text-primary)" }}>
                  {f.q}
                </p>
                <p className="text-[13px] mt-1" style={{ color: "var(--color-text-muted)" }}>
                  {f.why}
                </p>
              </div>
            </div>
            <p className="text-[12px] uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
              Source of truth: {f.source}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-start">
                <XCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#F87171" }} />
                <p className="text-[13px]" style={{ color: "var(--color-text-secondary)" }}>
                  <strong style={{ color: "var(--color-text-primary)" }}>Guessing:</strong> {f.bad}
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#22C55E" }} />
                <p className="text-[13px]" style={{ color: "var(--color-text-secondary)" }}>
                  <strong style={{ color: "var(--color-text-primary)" }}>Grounded:</strong> {f.good}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 id="checklist">Build checklist for grounded clinic AI</h2>
      <ul>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={15} style={{ color: "#22C55E" }} />
          One <strong>owner</strong> for each doc type (timings, fees, insurance, roster)
        </li>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={15} style={{ color: "#22C55E" }} />
          Re-index when fees or hours change — don’t “set and forget”
        </li>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={15} style={{ color: "#22C55E" }} />
          Test the top 20 real patient questions every month
        </li>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={15} style={{ color: "#22C55E" }} />
          Log questions the bot couldn’t answer — those become new docs
        </li>
        <li>
          <CheckCircle2 className="inline mr-1.5" size={15} style={{ color: "#22C55E" }} />
          Human handoff for clinical advice, complaints, and edge cases
        </li>
      </ul>

      <h2 id="beyond-clinics">Same pattern for any AI system we build</h2>
      <p>
        Clinics feel the pain first, but the rule is universal for production
        AI:
      </p>
      <ul>
        <li>
          <strong>AI front desk / receptionist</strong> — policies + roster +
          booking rules
        </li>
        <li>
          <strong>Customer support AI</strong> — product docs + refund policy
        </li>
        <li>
          <strong>Internal knowledge agents</strong> — SOPs + wikis + role access
        </li>
        <li>
          <strong>Analytics copilots</strong> — query only real databases, never
          invent metrics
        </li>
      </ul>
      <p>
        Whether you call it RAG, a knowledge base, or a tool-using agent:{" "}
        <strong>no source, no answer</strong> is the professional default.
      </p>

      <div
        className="not-prose my-10 rounded-2xl p-5 sm:p-6"
        style={{
          background: "var(--color-surface2)",
          border: "1px solid var(--color-border)",
        }}
      >
        <div className="flex gap-3 items-start">
          <FileWarning size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#FBBF24" }} />
          <div>
            <p className="text-[15px] font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}>
              Red flag when buying “AI chatbot for clinic”
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              If the vendor cannot show <em>which document</em> an answer came
              from — or demo a wrong-doc refusal — you are buying a guessing
              machine with a friendly UI.
            </p>
          </div>
        </div>
      </div>

      <div
        className="not-prose my-10 rounded-2xl p-6 sm:p-8"
        style={{
          background: "var(--color-surface2)",
          border: "1px solid rgba(34,197,94,0.28)",
        }}
      >
        <div className="flex items-center gap-2 mb-3" style={{ color: "#22C55E" }}>
          <Sparkles size={18} />
          <span className="text-[12px] font-bold uppercase tracking-widest">
            Live · Eligent AI Front Desk
          </span>
        </div>
        <h3
          className="font-syne font-bold text-[22px] sm:text-[26px] mb-3"
          style={{ color: "var(--color-text-primary)" }}
        >
          See grounded answers in a real clinic demo
        </h3>
        <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Ask about timings, insurance, or fees on our production-style AI
          Front Desk demo — built to answer from clinic knowledge, not thin air.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold"
            style={{
              background: "rgba(34,197,94,0.14)",
              border: "1px solid rgba(34,197,94,0.4)",
              color: "#22C55E",
            }}
          >
            <MessageCircle size={16} />
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

      <h2 id="next">What to do next</h2>
      <ol>
        <li>List your top 20 patient questions from WhatsApp / phone logs.</li>
        <li>Map each to a single source document (or create the missing one).</li>
        <li>
          Try the{" "}
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            live AI Front Desk
          </a>{" "}
          and notice how answers stay on clinic facts.
        </li>
        <li>
          Read our companion piece:{" "}
          <Link href="/blog/ai-front-desk-vs-human-receptionist">
            AI Front Desk vs Human Receptionist
          </Link>
          .
        </li>
        <li>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            Talk to Eligent AI
          </a>{" "}
          if you want a production system with RAG, booking, and staff alerts.
        </li>
      </ol>
      <p>
        <strong>Eligent AI</strong> designs and ships production AI systems —
        front desk, agents, automation, and knowledge assistants — with fixed
        pricing and full code ownership. Start at{" "}
        <Link href="/">eligentai.com</Link>.
      </p>

      <div className="not-prose mt-10 flex flex-wrap gap-2">
        {[
          "RAG",
          "AI accuracy",
          "Clinic AI",
          "AI front desk",
          "Knowledge base",
          "Eligent AI",
        ].map((tag) => (
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
        ))}
      </div>
    </article>
  );
}
