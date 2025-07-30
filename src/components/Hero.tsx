import { Button } from "@/components/ui/button";
import { ArrowRight, Navigation, Shield, Zap } from "lucide-react";
import ZeroLogo from "../../public/Zero_Logo.svg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background_cortado.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4">
        <div className="flex flex-col items-center min-h-screen text-center pt-20">
          <img
            src={ZeroLogo}
            alt="Zero Industries Logo"
            className="w-2/3 md:w-1/3"
          />
          {/* Your Slogan */}
          <p className="text-2xl italic text-muted-foreground -mt-4 md:-mt-[60px]">
            Smarter systems.
            <br className="md:hidden" /> Stronger defence.
          </p>
          {/* Subheading */}
          <p className="mt-8 text-l md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-8">
            Solving navigation for drones in GPS-denied environments,
            <br className="hidden md:block" />
            developing an affordable, light, plug-and-play module with AI.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded bg-accent">
                <Navigation className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">Autonomous Navigation</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI-powered navigation systems
                <br className="hidden md:block" />
                for GPS-denied environments
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded bg-accent">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">Mission Critical</h3>
              <p className="text-sm text-muted-foreground text-center">
                Reliable performance in
                <br className="hidden md:block" />
                challenging operational conditions
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded bg-accent">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">Real-Time Processing</h3>
              <p className="text-sm text-muted-foreground text-center">
                Cutting-edge computer vision algorithms
                <br className="hidden md:block" />
                for fast performance on edge devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
