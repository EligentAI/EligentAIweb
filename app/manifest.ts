import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eligent AI — AI Systems for Business",
    short_name: "Eligent AI",
    description:
      "AI engineering studio building WhatsApp AI receptionists, customer support automation, and custom AI agents.",
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
