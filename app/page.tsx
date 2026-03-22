import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Technology from "@/components/Technology";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
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
      <Contact />
      <Footer />
    </main>
  );
}
