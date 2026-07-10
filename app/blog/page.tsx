import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import BlogLayout from "@/components/blog/BlogLayout";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Front Desk, AI Agents & Automation Insights",
  description:
    "Practical guides from Eligent AI: AI front desk vs human receptionist, clinic automation, AI agents, and production AI systems.",
  keywords: [
    "Eligent AI blog",
    "EligentAI",
    "AI front desk",
    "AI receptionist",
    "clinic AI",
    "AI agents",
    "AI automation",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Eligent AI Blog — AI Front Desk & Production AI Insights",
    description:
      "Guides on AI front desk systems, clinic automation, AI agents, and what actually works in production.",
    url: "https://eligentai.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <BlogLayout>
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(6,182,212,0.10) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12" style={{ background: "rgba(6,182,212,0.6)" }} />
              <span
                className="text-[12px] font-medium tracking-widest uppercase"
                style={{ color: "#22D3EE" }}
              >
                Eligent AI Blog
              </span>
            </div>
            <h1
              className="font-syne font-bold text-[36px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Insights on AI that works
              <br />
              <span style={{ color: "#22D3EE" }}>in real clinics & businesses</span>
            </h1>
            <p className="text-[16px] leading-relaxed max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
              No fluff. Practical writing from Eligent AI on AI front desk
              systems, agents, automation, and production deployments — with
              live demos you can try.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {post.featured && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full"
                      style={{
                        background: "rgba(251,191,36,0.12)",
                        border: "1px solid rgba(251,191,36,0.35)",
                        color: "#FBBF24",
                      }}
                    >
                      <Sparkles size={10} />
                      Featured
                    </span>
                  )}
                  <span
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-full"
                    style={{
                      background: "rgba(6,182,212,0.12)",
                      border: "1px solid rgba(6,182,212,0.3)",
                      color: post.coverAccent,
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <Clock size={12} />
                    {post.readingMinutes} min read
                  </span>
                  <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>
                    {formatBlogDate(post.date)}
                  </span>
                </div>

                <h2
                  className="font-syne font-bold text-[22px] sm:text-[28px] leading-snug tracking-[-0.02em] mb-3 group-hover:underline underline-offset-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-[15px] leading-relaxed mb-5 max-w-2xl"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {post.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[13px] font-semibold"
                  style={{ color: "#22D3EE" }}
                >
                  Read article
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
