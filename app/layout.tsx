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
    default: "Eligent AI — WhatsApp AI Receptionist, Customer Support AI & Custom AI Agents",
    template: "%s | Eligent AI",
  },
  description:
    "We build production AI systems that win you time and customers: WhatsApp AI receptionists that answer & book appointments 24/7, AI customer support automation, analytics copilots, and custom AI agents. Fixed price — you own the code.",
  keywords: [
    "WhatsApp AI receptionist",
    "AI customer support automation",
    "AI automation agency",
    "AI receptionist for clinics",
    "AI appointment booking",
    "custom AI agents",
    "RAG systems",
    "AI analytics dashboard",
    "LangChain",
    "LangGraph",
    "AI chatbot for business",
    "Eligent AI",
  ],
  authors: [{ name: "Shadab Khan", url: "https://www.linkedin.com/in/shadabkhanai" }],
  creator: "Eligent AI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Eligent AI — WhatsApp AI Receptionists, Customer Support AI & Custom AI Agents",
    description:
      "Production AI systems that answer customers, book appointments, and automate support 24/7. Live demos, fixed pricing, 100% code ownership.",
    siteName: "Eligent AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eligent AI — AI Systems That Answer, Automate & Analyze",
    description:
      "WhatsApp AI receptionists, customer support automation, and custom AI agents — built for production, with live demos.",
    images: ["/opengraph-image"],
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
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Eligent AI",
      alternateName: ["EligentAI", "eligentai", "Eligent"],
      url: SITE_URL,
      logo: `${SITE_URL}/logo2.png`,
      email: "contact@eligentai.com",
      description:
        "AI engineering studio building production AI systems: WhatsApp AI receptionists, customer support automation, analytics copilots, and custom AI agents.",
      founder: { "@id": `${SITE_URL}/#founder` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@eligentai.com",
        availableLanguage: ["English", "Hindi", "Spanish", "French"],
      },
      sameAs: [
        "https://www.linkedin.com/in/shadabkhanai",
        "https://twitter.com/eligentai",
        "https://instagram.com/eligentai",
        "https://youtube.com/@eligentai",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Shadab Khan",
      jobTitle: "Founder & AI Engineer",
      url: SITE_URL,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      description:
        "Shadab Khan is the founder of Eligent AI, an AI engineering studio in Lucknow, India. He builds WhatsApp AI receptionists, AI customer support systems, and custom AI agents for businesses worldwide.",
      knowsAbout: [
        "AI agents",
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
      sameAs: ["https://www.linkedin.com/in/shadabkhanai"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Eligent AI",
      alternateName: ["EligentAI", "eligentai.com"],
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Eligent AI",
      url: SITE_URL,
      image: `${SITE_URL}/logo2.png`,
      priceRange: "$$",
      areaServed: "Worldwide",
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
            description:
              "24/7 AI receptionist on WhatsApp that answers inquiries instantly, books appointments, qualifies leads, and hands off to humans — for clinics, salons, real estate, hotels, and local businesses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Customer Support Automation",
            description:
              "AI support systems that resolve routine customer tickets automatically with confidence scoring, human escalation, and CSAT analytics.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Analytics Dashboards",
            description:
              "Natural-language business analytics: ask questions in plain English, get SQL, charts, and AI-driven insights automatically.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Knowledge Assistants",
            description:
              "RAG-powered assistants that answer questions from company documents, wikis, and internal knowledge bases.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Business Process Automation",
            description:
              "End-to-end workflow automation connecting AI reasoning with business data — triggering actions, generating reports, surfacing anomalies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom AI Agents",
            description:
              "Purpose-built AI agents with tool use: query databases, call APIs, analyze documents, and execute multi-step tasks autonomously.",
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
          name: "Can you build a WhatsApp AI receptionist for my clinic or local business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — it's our flagship solution. Your AI receptionist answers on WhatsApp 24/7: it greets patients or customers, answers common questions, books appointments into your calendar, qualifies leads, and hands over to a human when needed. It works great for clinics, hospitals, salons, real estate agencies, hotels, and any business whose customers live on WhatsApp.",
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
