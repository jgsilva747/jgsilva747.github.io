import { Button } from "@/components/ui/button";
import { ArrowRight, Navigation, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-card border border-border">
            <Navigation className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Autonomous Drone Navigation</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-primary">
              Zero Industries
            </span>
            <br />
            <span className="text-foreground">GPS-Free Navigation</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Developing breakthrough navigation technology for drones operating in GPS-denied environments. 
            Our autonomous systems enable reliable navigation where traditional methods fail.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="group">
              View Our Tests
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded bg-accent">
                <Navigation className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">Autonomous Navigation</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI-powered navigation systems for GPS-denied environments
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded bg-accent">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">Mission Critical</h3>
              <p className="text-sm text-muted-foreground text-center">
                Reliable performance in challenging operational conditions
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded bg-accent">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">Real-Time Processing</h3>
              <p className="text-sm text-muted-foreground text-center">
                Instant decision-making for dynamic flight environments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;