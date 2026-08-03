import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import BlogLayout from "@/components/blog/BlogLayout";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: AI Front Desk, RAG, AI Agents & Automation",
  description:
    "Practical guides from Eligent AI: clinic AI accuracy & RAG, AI front desk vs human receptionist, AI agents, and production AI systems.",
  keywords: [
    "Eligent AI blog",
    "RAG AI",
    "clinic AI chatbot",
    "AI front desk",
    "AI receptionist",
    "AI hallucination",
    "AI agents",
    "AI automation",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Eligent AI Blog: AI Front Desk, RAG & Production AI",
    description:
      "Guides on grounded clinic AI, RAG accuracy, AI front desk systems, and production AI agents.",
    url: "https://eligentai.com/blog",
    type: "website",
    siteName: "Eligent AI",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <BlogLayout>
      {/* No overflow-hidden / heavy gradients — they tear long titles on Android */}
      <section className="blog-page relative pt-28 pb-20">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12" style={{ background: "#22D3EE" }} />
              <span
                className="text-[12px] font-medium tracking-widest uppercase"
                style={{ color: "#22D3EE" }}
              >
                Eligent AI Blog
              </span>
            </div>
            <h1
              className="blog-heading font-bold text-[32px] sm:text-[44px] leading-[1.15] mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Insights on AI that works
              <br />
              <span style={{ color: "#22D3EE" }}>in real clinics & businesses</span>
            </h1>
            <p
              className="text-[16px] leading-relaxed max-w-2xl"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Practical writing from Eligent AI on AI front desk systems,
              grounded RAG answers, agents, automation, and production
              deployments — with live demos you can try.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card block rounded-2xl p-6 sm:p-8"
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
                        background: "var(--color-surface2)",
                        border: "1px solid #A16207",
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
                      background: "var(--color-surface2)",
                      border: "1px solid var(--color-border)",
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

                {/* blog-card-title: no tight tracking / no transform hover on mobile */}
                <h2
                  className="blog-card-title font-bold text-[20px] sm:text-[26px] leading-snug mb-3"
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
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
