import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eligent AI (EligentAI) — AI Services & Agents",
    short_name: "EligentAI",
    description:
      "Eligent AI builds AI services, custom AI agents, business automation, and WhatsApp AI receptionist systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#04040A",
    theme_color: "#04040A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
