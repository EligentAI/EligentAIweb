import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User } from "lucide-react";
import BlogLayout from "@/components/blog/BlogLayout";
import AiFrontDeskVsHumanArticle from "@/components/blog/AiFrontDeskVsHumanArticle";
import { formatBlogDate, getAllPosts, getPost } from "@/lib/blog";

const SITE = "https://eligentai.com";

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

async function resolveSlug(params: Props["params"]): Promise<string> {
  const p = await Promise.resolve(params);
  return p.slug;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await resolveSlug(params);
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE}/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: "Eligent AI",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function ArticleBody({ slug }: { slug: string }) {
  if (slug === "ai-front-desk-vs-human-receptionist") {
    return <AiFrontDeskVsHumanArticle />;
  }
  return null;
}

export default async function BlogPostPage({ params }: Props) {
  const slug = await resolveSlug(params);
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.linkedin.com/in/shadabkhanai",
    },
    publisher: {
      "@type": "Organization",
      name: "Eligent AI",
      alternateName: ["EligentAI", "eligentai"],
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/logo2.png` },
    },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <BlogLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative pt-28 pb-20">
        <div
          className="absolute top-0 left-0 right-0 h-[420px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${post.coverAccent}18 0%, transparent 65%)`,
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-medium mb-8 transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ArrowLeft size={14} />
            All articles
          </Link>

          {/* Cover header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="px-3 py-1 text-[11px] font-semibold rounded-full tracking-wide"
                style={{
                  background: `${post.coverAccent}18`,
                  border: `1px solid ${post.coverAccent}44`,
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

            <h1
              className="font-syne font-bold text-[32px] sm:text-[42px] leading-[1.12] tracking-[-0.025em] mb-5"
              style={{ color: "var(--color-text-primary)" }}
            >
              {post.title}
            </h1>

            <p
              className="text-[17px] leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {post.excerpt}
            </p>

            <div
              className="flex items-center gap-3 pt-5"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(22,163,74,0.12)",
                  border: "1px solid rgba(22,163,74,0.3)",
                  color: "#22C55E",
                }}
              >
                <User size={18} />
              </div>
              <div>
                <p className="text-[14px] font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  {post.author}
                </p>
                <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>
                  Founder, Eligent AI (EligentAI)
                </p>
              </div>
            </div>
          </header>

          {/* Decorative cover band */}
          <div
            className="not-prose mb-12 rounded-2xl overflow-hidden relative h-[180px] sm:h-[220px] flex items-end p-6 sm:p-8"
            style={{
              background: `linear-gradient(135deg, ${post.coverAccent}22 0%, var(--color-surface2) 55%, var(--color-surface) 100%)`,
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(128,128,128,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.06) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: post.coverAccent }}
              >
                {post.coverLabel}
              </p>
              <p
                className="font-syne font-bold text-[20px] sm:text-[24px] max-w-md leading-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                Humans for judgment. AI for coverage.
              </p>
            </div>
          </div>

          <ArticleBody slug={post.slug} />

          {/* Footer CTA */}
          <div
            className="mt-16 pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              <ArrowLeft size={14} />
              Back to blog
            </Link>
            <Link
              href="/#contact"
              className="btn-primary inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[13px] font-syne font-semibold"
            >
              Talk to Eligent AI
            </Link>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
