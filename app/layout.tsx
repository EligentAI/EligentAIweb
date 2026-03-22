import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { LanguageProvider } from "@/lib/language-provider";

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

export const metadata: Metadata = {
  title: "Eligent AI — AI Systems for Business Data, Knowledge & Operations",
  description:
    "Eligent AI builds intelligent AI systems that help companies analyze data, automate workflows, and unlock insights. Specialists in AI agents, RAG systems, and data analytics automation.",
  keywords: [
    "AI systems",
    "business AI",
    "AI analytics",
    "RAG systems",
    "AI agents",
    "LangChain",
    "OpenAI",
    "knowledge assistant",
    "AI automation",
    "Eligent AI",
  ],
  authors: [{ name: "Eligent AI" }],
  creator: "Eligent AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Eligent AI — AI Systems for Business Data, Knowledge & Operations",
    description:
      "We build intelligent AI systems that help companies analyze data, automate workflows, and unlock insights.",
    siteName: "Eligent AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eligent AI",
    description: "AI systems for business data, knowledge and operations.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-dm antialiased" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text-primary)" }}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="noise-overlay" aria-hidden="true" />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}