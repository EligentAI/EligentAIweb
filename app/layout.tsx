import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { LanguageProvider } from "@/lib/language-provider";
import MotionProvider from "@/components/MotionProvider";

const SITE_URL = "https://eligentai.com";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#04040A" },
    { media: "(prefers-color-scheme: light)", color: "#F5F5FA" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Eligent AI — AI Services, AI Agents, Automation & AI Receptionist",
    template: "%s | Eligent AI",
  },
  description:
    "Eligent AI builds production AI services: WhatsApp AI receptionist, custom AI agents, business process automation, AI customer support, RAG knowledge assistants, and AI analytics. Fixed price — you own the code. Live demos at eligentai.com.",
  keywords: [
    // Brand (spaced + one-word for discovery)
    "Eligent AI",
    "EligentAI",
    "eligentai",
    "eligentai.com",
    "Eligent",
    // Core service intents
    "AI services",
    "AI service company",
    "AI agency",
    "AI automation",
    "business automation AI",
    "AI process automation",
    "workflow automation AI",
    // Agents & chat
    "AI agent",
    "AI agents",
    "custom AI agents",
    "AI chatbot for business",
    "conversational AI",
    // Receptionist / booking
    "AI receptionist",
    "WhatsApp AI receptionist",
    "AI receptionist for clinics",
    "AI appointment booking",
    "virtual AI receptionist",
    "AI front desk",
    // Support & knowledge
    "AI customer support",
    "AI customer support automation",
    "AI support agent",
    "RAG systems",
    "AI knowledge assistant",
    // Analytics & stack
    "AI analytics dashboard",
    "natural language SQL",
    "LangChain",
    "LangGraph",
    "OpenAI agents",
    // Geo / buyer modifiers
    "AI development company India",
    "hire AI engineer",
    "AI automation agency",
  ],
  authors: [{ name: "Shadab Khan", url: "https://www.linkedin.com/in/shadabkhanai" }],
  creator: "Eligent AI",
  publisher: "Eligent AI",
  category: "technology",
  applicationName: "Eligent AI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Eligent AI — AI Services, AI Agents, Automation & AI Receptionist",
    description:
      "Production AI services: AI receptionist on WhatsApp, custom AI agents, support automation, RAG assistants, and analytics copilots. Live demos · fixed pricing · full code ownership.",
    siteName: "Eligent AI",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Eligent AI — AI services, agents, automation & receptionist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eligent AI — AI Services, Agents & Automation",
    description:
      "AI receptionist, custom AI agents, business automation, and AI support systems — built for production with live demos at eligentai.com.",
    images: ["/opengraph-image"],
    creator: "@shadabbuilds",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Eligent AI",
      legalName: "Eligent AI",
      alternateName: ["EligentAI", "eligentai", "Eligent", "Eligent AI Studio"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo2.png`,
      },
      image: `${SITE_URL}/logo2.png`,
      email: "contact@eligentai.com",
      description:
        "Eligent AI is an AI engineering studio offering AI services, custom AI agents, business automation, WhatsApp AI receptionist systems, AI customer support, RAG knowledge assistants, and AI analytics for businesses worldwide.",
      slogan: "AI systems that answer, automate & analyze — 24/7",
      knowsAbout: [
        "AI services",
        "AI agents",
        "AI automation",
        "AI receptionist",
        "WhatsApp AI",
        "Business process automation",
        "Customer support AI",
        "RAG",
        "LangChain",
        "LangGraph",
      ],
      founder: { "@id": `${SITE_URL}/#founder` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "contact@eligentai.com",
          availableLanguage: ["English", "Hindi", "Spanish", "French"],
          url: SITE_URL,
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "contact@eligentai.com",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/shadabkhanai",
        "https://x.com/shadabbuilds",
        "https://youtube.com/@eligentai",
        "https://github.com/EligentAI",
        "https://eligentai.com",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Shadab Khan",
      alternateName: ["shadabbuilds", "Shadab Khan AI"],
      jobTitle: "Founder & AI Engineer",
      url: SITE_URL,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      description:
        "Shadab Khan (shadabbuilds) is the founder of Eligent AI. He builds AI services, AI agents, AI front desk systems, and automation for businesses worldwide from Lucknow, India.",
      knowsAbout: [
        "AI services",
        "AI agents",
        "AI automation",
        "AI receptionist",
        "WhatsApp AI receptionists",
        "AI customer support automation",
        "RAG systems",
        "LangChain",
        "LangGraph",
        "Business process automation",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/in/shadabkhanai",
        "https://x.com/shadabbuilds",
        "https://youtube.com/@eligentai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Eligent AI",
      alternateName: ["EligentAI", "eligentai", "eligentai.com", "Eligent AI"],
      description:
        "Official website of Eligent AI — AI services, AI agents, automation, and AI receptionist solutions.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "es", "fr"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Eligent AI — AI Services & Custom AI Agents",
      alternateName: "EligentAI AI Services",
      url: SITE_URL,
      image: `${SITE_URL}/logo2.png`,
      priceRange: "$$",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      serviceType: [
        "AI services",
        "AI agent development",
        "AI automation",
        "AI receptionist",
        "WhatsApp AI chatbot",
        "Customer support automation",
        "RAG knowledge systems",
        "AI analytics",
      ],
      provider: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressCountry: "IN",
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WhatsApp AI Receptionist",
            alternateName: ["AI receptionist", "virtual AI receptionist", "AI front desk"],
            description:
              "24/7 AI receptionist on WhatsApp that answers inquiries instantly, books appointments, qualifies leads, and hands off to humans — for clinics, hospitals, salons, real estate, hotels, and local businesses.",
            serviceType: "AI receptionist",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom AI Agents",
            alternateName: ["AI agent development", "autonomous AI agents"],
            description:
              "Purpose-built AI agents with tool use: query databases, call APIs, analyze documents, and execute multi-step tasks autonomously for your business workflows.",
            serviceType: "AI agents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Business Process Automation",
            alternateName: ["AI automation", "workflow automation AI"],
            description:
              "End-to-end AI automation connecting reasoning with business data — triggering actions, generating reports, and surfacing anomalies automatically.",
            serviceType: "AI automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Customer Support Automation",
            description:
              "AI support systems that resolve routine customer tickets automatically with confidence scoring, human escalation, and CSAT analytics.",
            serviceType: "AI customer support",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Analytics Dashboards",
            description:
              "Natural-language business analytics: ask questions in plain English, get SQL, charts, and AI-driven insights automatically.",
            serviceType: "AI analytics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Knowledge Assistants",
            description:
              "RAG-powered AI assistants that answer questions from company documents, wikis, and internal knowledge bases.",
            serviceType: "RAG AI assistant",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Front Desk for Clinics & Hospitals",
            description:
              "Multi-tenant AI front desk that answers patients 24/7 from clinic knowledge bases, books appointments with real doctor schedules, and alerts staff on Telegram.",
            serviceType: "AI front desk",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What AI services does Eligent AI offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eligent AI builds production AI services including WhatsApp AI receptionists, custom AI agents, business process automation, AI customer support systems, RAG knowledge assistants, and AI analytics dashboards. You get fixed pricing and full code ownership.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build a WhatsApp AI receptionist for my clinic or local business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — it's our flagship solution. Your AI receptionist answers on WhatsApp 24/7: it greets patients or customers, answers common questions, books appointments into your calendar, qualifies leads, and hands over to a human when needed. It works great for clinics, hospitals, salons, real estate agencies, hotels, and any business whose customers live on WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Do you build custom AI agents and automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We design and deploy custom AI agents that use tools (databases, APIs, documents) and AI automation that runs multi-step business workflows end-to-end — from lead handling to reporting.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical AI project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most projects fall into two categories — rapid prototypes (1–2 weeks) and production-grade systems (4–8 weeks). A RAG-powered knowledge assistant typically takes 2–3 weeks. A full multi-agent copilot with custom frontend takes 5–8 weeks. We always share a clear timeline before starting.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a project cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on the scope and complexity of the system. We offer everything from focused pilot builds to full production systems with custom frontend and deployment. We provide a fixed-price quote after a free 30-minute consultation — no hourly billing, no surprise invoices.",
          },
        },
        {
          "@type": "Question",
          name: "Which tools and platforms can you integrate with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp Business API, Google Calendar and Calendly, Gmail and Outlook, Google Sheets, Notion, Slack, Telegram, CRMs like HubSpot, plus any custom REST API or database. If your business runs on it, we can usually connect AI to it.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with startups or enterprises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both. Startups get fast MVPs they can demo to investors. Enterprises get production-ready systems that integrate with their existing data and workflows. Our stack scales from a single Streamlit prototype to a full Next.js + FastAPI + PostgreSQL deployment.",
          },
        },
        {
          "@type": "Question",
          name: "Will I own the code after the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, 100%. You get full ownership of all code, models, and infrastructure. We deliver clean, documented code pushed to your GitHub repository. No lock-in, no subscriptions, no hidden dependencies on our services.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer support after delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every project includes a 2-week post-launch support window for bug fixes at no extra cost. For ongoing maintenance, monitoring, or feature additions, we offer flexible monthly retainer arrangements.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-dm antialiased" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text-primary)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <MotionProvider>
            <div className="noise-overlay" aria-hidden="true" />
            {children}
          </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
