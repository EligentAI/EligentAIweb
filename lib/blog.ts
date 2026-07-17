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
  coverTagline: string;
  featured?: boolean;
};

export const posts: BlogPost[] = [
  {
    slug: "clinic-ai-faqs-without-guessing-rag",
    title: "Clinic AI That Doesn't Guess: 5 FAQs That Must Be Grounded in Your Docs",
    description:
      "Why clinic chatbots invent wrong answers, and how RAG-based AI systems ground FAQs in your real documents — OPD timings, fees, insurance, doctors, and policies. From Eligent AI production AI front desk systems.",
    excerpt:
      "Patients don't forgive made-up fees or fake insurance answers. Here's how production AI systems stop guessing — and the five clinic FAQs that must be grounded in your own documents.",
    date: "2026-07-18",
    readingMinutes: 10,
    author: "Shadab Khan",
    category: "AI Systems · RAG",
    tags: [
      "RAG",
      "retrieval augmented generation",
      "clinic AI",
      "AI front desk",
      "AI chatbot accuracy",
      "AI hallucination",
      "knowledge base AI",
      "AI receptionist",
      "grounded AI answers",
      "Eligent AI",
      "custom AI agents",
    ],
    coverAccent: "#22C55E",
    coverLabel: "RAG · Accuracy",
    coverTagline: "Grounded answers. No guessing.",
    featured: true,
  },
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
    ],
    coverAccent: "#06B6D4",
    coverLabel: "AI Front Desk",
    coverTagline: "Humans for judgment. AI for coverage.",
    featured: false,
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
