import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AlgorithmShowcase from "@/components/AlgorithmShowcase";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";

const SHOW_TECHNOLOGY = false;
const SHOW_CONTACT = false;

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
        {SHOW_TECHNOLOGY && (
          <section id="about">
            <About />
            </section>
        )}
        {SHOW_CONTACT && (
          <section id="contact">
            <Contact />
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;
