import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
