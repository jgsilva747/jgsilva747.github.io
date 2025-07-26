import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AlgorithmShowcase from "@/components/AlgorithmShowcase";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="showcase">
          <AlgorithmShowcase />
        </section>
        <section id="mission">
          <Mission />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
