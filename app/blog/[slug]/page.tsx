import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { existsSync } from "fs";
import path from "path";
import { ArrowLeft, Clock } from "lucide-react";
import BlogLayout from "@/components/blog/BlogLayout";
import AiFrontDeskVsHumanArticle from "@/components/blog/AiFrontDeskVsHumanArticle";
import ClinicAiFaqsRagArticle from "@/components/blog/ClinicAiFaqsRagArticle";
import EmbedAiFrontDeskArticle from "@/components/blog/EmbedAiFrontDeskArticle";
import { formatBlogDate, getAllPosts, getPost } from "@/lib/blog";

const SITE = "https://eligentai.com";
/** Drop your headshot here: public/shadab-khan.jpg (or .png / .webp). */
const AUTHOR_PHOTO_CANDIDATES = [
  "shadab-khan.jpg",
  "shadab-khan.jpeg",
  "shadab-khan.png",
  "shadab-khan.webp",
];

function getAuthorPhotoSrc(): string | null {
  for (const file of AUTHOR_PHOTO_CANDIDATES) {
    if (existsSync(path.join(process.cwd(), "public", file))) {
      return `/${file}`;
    }
  }
  return null;
}

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
  if (slug === "add-ai-front-desk-to-clinic-website") {
    return <EmbedAiFrontDeskArticle />;
  }
  if (slug === "clinic-ai-faqs-without-guessing-rag") {
    return <ClinicAiFaqsRagArticle />;
  }
  if (slug === "ai-front-desk-vs-human-receptionist") {
    return <AiFrontDeskVsHumanArticle />;
  }
  return null;
}

export default async function BlogPostPage({ params }: Props) {
  const slug = await resolveSlug(params);
  const post = getPost(slug);
  if (!post) notFound();
  const authorPhoto = getAuthorPhotoSrc();

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

      <section className="blog-page relative pt-28 pb-20">
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-medium mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ArrowLeft size={14} />
            All articles
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="px-3 py-1 text-[11px] font-semibold rounded-full"
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

            <h1
              className="blog-heading font-bold text-[28px] sm:text-[40px] leading-[1.18] mb-5"
              style={{ color: "var(--color-text-primary)" }}
            >
              {post.title}
            </h1>

            <p
              className="text-[16px] sm:text-[17px] leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {post.excerpt}
            </p>

            <div
              className="flex items-center gap-3 pt-5"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              {authorPhoto ? (
                <img
                  src={authorPhoto}
                  alt={`${post.author}, Founder of Eligent AI`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  style={{
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface2)",
                  }}
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[13px] font-bold"
                  style={{
                    background: "var(--color-surface2)",
                    border: "1px solid var(--color-border)",
                    color: "#22C55E",
                  }}
                  aria-hidden
                >
                  SK
                </div>
              )}
              <div>
                <p className="text-[14px] font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  {post.author}
                </p>
                <p className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>
                  Founder, Eligent AI
                </p>
              </div>
            </div>
          </header>

          {/* Simple solid cover — no grid overlay on mobile path (desktop keeps subtle solid) */}
          <div
            className="blog-cover not-prose mb-12 rounded-2xl relative flex items-end p-6 sm:p-8 min-h-[140px] sm:min-h-[180px]"
            style={{
              background: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="relative">
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-2"
                style={{ color: post.coverAccent }}
              >
                {post.coverLabel}
              </p>
              <p
                className="blog-heading font-bold text-[18px] sm:text-[22px] max-w-md leading-snug"
                style={{ color: "var(--color-text-primary)" }}
              >
                {post.coverTagline}
              </p>
            </div>
          </div>

          <ArticleBody slug={post.slug} />

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
              className="btn-primary inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[13px] font-semibold"
            >
              Talk to Eligent AI
            </Link>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
