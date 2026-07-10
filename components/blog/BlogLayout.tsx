"use client";

import { FaWhatsapp } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WA_FAB_URL =
  "https://wa.me/918188887958?text=" +
  encodeURIComponent("Hi! I'm interested in an AI Front Desk for my clinic.");

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      {children}
      <Footer />
      <a
        href={WA_FAB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} color="white" />
      </a>
    </main>
  );
}
