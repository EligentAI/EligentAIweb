export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO
  updated?: string;
  readingMinutes: number;
  author: string;
  category: string;
  tags: string[];
  coverAccent: string;
  coverLabel: string;
  featured?: boolean;
};

export const posts: BlogPost[] = [
  {
    slug: "ai-front-desk-vs-human-receptionist",
    title: "AI Front Desk vs Human Receptionist: What Clinics Actually Need in 2026",
    description:
      "Honest comparison of AI front desk systems vs human receptionists for clinics and hospitals — coverage, booking accuracy, cost, patient experience, and when you still need people. From Eligent AI.",
    excerpt:
      "Missed calls after hours. Double bookings. Staff buried in the same five questions. Here's a clear, practical comparison of AI front desk vs human reception — and how modern clinics use both.",
    date: "2026-07-11",
    readingMinutes: 9,
    author: "Shadab Khan",
    category: "AI Front Desk",
    tags: [
      "AI front desk",
      "AI receptionist",
      "clinic automation",
      "appointment booking",
      "Eligent AI",
      "EligentAI",
    ],
    coverAccent: "#06B6D4",
    coverLabel: "AI Front Desk",
    featured: true,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
