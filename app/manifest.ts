import type { MetadataRoute } from "next";

/**
 * Minimal manifest for metadata only.
 * display: "browser" avoids PWA "Install app" / Add to Home Screen prompts
 * that look unprofessional on a marketing portfolio site.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eligent AI",
    short_name: "Eligent AI",
    description:
      "Eligent AI builds production AI systems, AI agents, and automation for businesses.",
    start_url: "/",
    display: "browser",
    background_color: "#04040A",
    theme_color: "#04040A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
