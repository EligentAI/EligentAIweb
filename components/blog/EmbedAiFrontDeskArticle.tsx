import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  MessageCircle,
  Settings,
  Sparkles,
  XCircle,
} from "lucide-react";

const DEMO_URL = "https://himcity-hospital.vercel.app/";
const WIDGET_DEMO = "https://api.eligentai.com/api/v1/web/demo";
const CALENDLY = "https://calendly.com/shadabkhaantab/30min";

const steps = [
  {
    n: "1",
    title: "We set up your clinic org",
    body: "Name, branding color, phone, knowledge base (timings, fees, insurance), doctors and real slots — all on your private tenant.",
  },
  {
    n: "2",
    title: "You paste one script on your site",
    body: "Before </body> on any page (or site-wide footer). No rebuild of your whole website. No App Store wait.",
  },
  {
    n: "3",
    title: "Patients chat and book on your domain",
    body: "Answers come from your docs. Bookings and chats land in your staff dashboard for confirm / takeover.",
  },
  {
    n: "4",
    title: "You test before go-live",
    body: "Five real FAQs + one test booking. Check that data only appears under your clinic — never another tenant.",
  },
];

const myths = [
  {
    bad: "“We need a brand-new website first.”",
    good: "Keep your current site. The front desk is a small overlay, not a redesign project.",
  },
  {
    bad: "“Any free ChatGPT widget is the same.”",
    good: "Without your KB, real slots, and staff confirm path, you get polite wrong answers and ghost bookings.",
  },
  {
    bad: "“Install means the AI is fully trained forever.”",
    good: "When fees or hours change, update the knowledge base — same as updating a notice board.",
  },
];

export default function EmbedAiFrontDeskArticle() {
  return (
    <article className="blog-prose">
      <p className="lead">
        Most clinics already have a website. What they lack is a{" "}
        <strong>front desk that never sleeps</strong> — answering timings and
        fees, and taking appointment requests without forcing a full rebuild.
      </p>
      <p>
        That’s what an <strong>embeddable AI Front Desk</strong> is for:{" "}
        <strong>one line of code</strong> on your existing site, backed by a
        production system that knows <em>your</em> clinic — not a generic chatbot
        demo.
      </p>
      <p>
        At <strong>Eligent AI</strong> we build and run that stack for clinics and
        hospitals. Here’s how install actually works, what you get, and how to
        test it before patients ever see it.
      </p>

      <h2 id="problem">The real problem (it isn’t “no website”)</h2>
      <ul>
        <li>Patients message after hours; nobody replies until morning.</li>
        <li>Staff repeat the same five answers: timings, fees, insurance, doctors, prep.</li>
        <li>Phone lines and WhatsApp pile up while the website stays static.</li>
        <li>Rebuilding the whole site just to “add AI” is expensive and slow.</li>
      </ul>
      <p>
        You don’t need a new digital identity. You need a{" "}
        <strong>channel on the site you already paid for</strong>.
      </p>

      <h2 id="what-you-get">What the embed actually does</h2>
      <div className="not-prose grid sm:grid-cols-2 gap-3 my-8">
        {[
          {
            icon: MessageCircle,
            title: "24/7 patient chat",
            body: "Grounded in your clinic documents — timings, fees, policies — not invented claims.",
          },
          {
            icon: Globe,
            title: "Lives on your domain",
            body: "Patients stay on your website. The bubble is yours (name + color).",
          },
          {
            icon: Settings,
            title: "Staff dashboard",
            body: "See chats, confirm or cancel bookings, take over when a human is needed.",
          },
          {
            icon: Code2,
            title: "One script tag",
            body: "No mobile app. No forced redesign. Install like analytics — simpler intent, higher stakes.",
          },
        ].map(({ icon: Icon, title, body }) => (
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
                color: "#06B6D4",
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
        For the deeper “AI vs human receptionist” debate, see{" "}
        <Link href="/blog/ai-front-desk-vs-human-receptionist">
          AI Front Desk vs Human Receptionist
        </Link>
        . For accuracy and RAG, see{" "}
        <Link href="/blog/clinic-ai-faqs-without-guessing-rag">
          Clinic AI That Doesn&apos;t Guess
        </Link>
        .
      </p>

      <h2 id="install">The install: one line of code</h2>
      <p>
        After your clinic is provisioned on the Eligent AI platform, the embed
        looks like this:
      </p>
      <pre
        className="not-prose text-[12px] sm:text-[13px] leading-relaxed p-4 rounded-xl overflow-x-auto my-6"
        style={{
          background: "var(--color-surface2)",
          border: "1px solid var(--color-border)",
          color: "var(--color-text-secondary)",
        }}
      >
        {`<script
  src="https://api.eligentai.com/api/v1/web/widget.js"
  data-org="your-clinic-slug"
  data-hospital="Your Clinic Name"
  data-color="#0d9488">
</script>`}
      </pre>
      <ul>
        <li>
          <strong>data-org</strong> — your private tenant slug (isolates data from other clinics)
        </li>
        <li>
          <strong>data-hospital</strong> — name shown in the chat header
        </li>
        <li>
          <strong>data-color</strong> — accent color (hex) for button and chrome
        </li>
      </ul>
      <p>
        Paste it before the closing <code>&lt;/body&gt;</code> tag (WordPress
        footer, Webflow embed, custom HTML — wherever your site allows scripts).
      </p>

      <h2 id="steps">How onboarding works (we do the heavy lift)</h2>
      <div className="not-prose flex flex-col gap-3 my-8">
        {steps.map((s) => (
          <div
            key={s.n}
            className="flex gap-3 p-4 rounded-xl"
            style={{
              background: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
            }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold flex-shrink-0"
              style={{
                background: "rgba(6,182,212,0.12)",
                border: "1px solid rgba(6,182,212,0.3)",
                color: "#22D3EE",
              }}
            >
              {s.n}
            </span>
            <div>
              <p className="text-[14px] font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>
                {s.title}
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="myths">Three myths that waste time</h2>
      <div className="not-prose space-y-3 my-6">
        {myths.map((m) => (
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

      <h2 id="test">How to test before patients see it</h2>
      <ol>
        <li>Open your site (or a local HTML file with the script) in a private window.</li>
        <li>Click the chat bubble — confirm name and color look right.</li>
        <li>
          Ask five real questions: timings, fees, insurance, a doctor/specialty, prep docs.
        </li>
        <li>Run one <strong>test booking</strong> end to end.</li>
        <li>Log into the staff dashboard — chat and appointment must appear under <strong>your</strong> clinic only.</li>
        <li>Wrong <code>data-org</code> must fail cleanly — never open another clinic’s data.</li>
      </ol>
      <p>
        Public widget demo (UI smoke test):{" "}
        <a href={WIDGET_DEMO} target="_blank" rel="noopener noreferrer">
          api.eligentai.com/api/v1/web/demo
        </a>
        . Full hospital-style demo:{" "}
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
          HimCity Hospital live demo
        </a>
        .
      </p>

      <h2 id="security">Security in one paragraph</h2>
      <p>
        Website visitors get a <strong>guest session</strong> bound to their own
        conversation — not staff admin access. Your clinic data is scoped by{" "}
        <strong>organization</strong>. Rate limits protect login and chat abuse.
        That doesn’t replace good passwords or careful onboarding — but it’s built
        for multi-clinic production, not a weekend toy.
      </p>

      <div
        className="not-prose my-10 rounded-2xl p-6 sm:p-8"
        style={{
          background: "var(--color-surface2)",
          border: "1px solid rgba(6,182,212,0.28)",
        }}
      >
        <div className="flex items-center gap-2 mb-3" style={{ color: "#22D3EE" }}>
          <Sparkles size={18} />
          <span className="text-[12px] font-bold uppercase tracking-widest">
            Live · Eligent AI Front Desk
          </span>
        </div>
        <h3
          className="font-syne font-bold text-[22px] sm:text-[26px] mb-3"
          style={{ color: "var(--color-text-primary)" }}
        >
          See it on a real hospital demo
        </h3>
        <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Chat, booking flow, clinic-scoped answers — then talk to us about the
          same embed on your site.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold"
            style={{
              background: "rgba(6,182,212,0.14)",
              border: "1px solid rgba(6,182,212,0.4)",
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

      <h2 id="next">What to do next</h2>
      <ol>
        <li>List your top 20 patient questions and current fee/timings docs.</li>
        <li>Try the live demo and the public widget demo link above.</li>
        <li>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            Book a call
          </a>{" "}
          — we provision your org and send the exact script for your site.
        </li>
      </ol>
      <p>
        <strong>Eligent AI</strong> builds production AI systems for clinics and
        businesses — AI front desk, agents, and automation — with fixed pricing and
        code ownership options. Start at{" "}
        <Link href="/">eligentai.com</Link>.
      </p>

      <div className="not-prose mt-10 flex flex-wrap gap-2">
        {[
          "AI front desk",
          "Clinic website chatbot",
          "Embed AI chat",
          "AI appointment booking",
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
