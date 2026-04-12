import { FaWhatsapp } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Technology from "@/components/Technology";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <CaseStudies />
      <Technology />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/918188887958"
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
