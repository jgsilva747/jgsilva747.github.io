import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Lightbulb, Cog } from "lucide-react";

const Mission = () => {
  const sections = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      content: "To revolutionize autonomous navigation by developing breakthrough technology that enables drones to navigate reliably in GPS-denied environments, unlocking new possibilities for search and rescue, defense, and industrial applications."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      content: "A world where autonomous systems can navigate anywhere, anytime, regardless of GPS availability. We envision our technology enabling life-saving missions, protecting critical infrastructure, and expanding the horizons of autonomous flight."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Our Innovation",
      content: "Combining advanced computer vision, machine learning, and sensor fusion to create navigation systems that surpass human-level spatial awareness in challenging environments where traditional navigation fails."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Our Technology",
      content: "Real-time SLAM (Simultaneous Localization and Mapping) algorithms with edge AI processing, enabling autonomous navigation through visual-inertial odometry and environmental mapping without external positioning signals."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Company Overview
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Mission & Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Zero Industries is pioneering the future of autonomous navigation, 
            developing technology that works where others fail.
          </p>
        </div>

        {/* Mission sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="border-border bg-card shadow-card h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded bg-accent text-accent-foreground">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact statement */}
        <div className="mt-16 text-center">
          <Card className="border-border bg-gradient-accent shadow-card">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Why It Matters</h3>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Current GPS-based navigation systems fail in underground facilities, dense urban environments, 
                and contested areas. Our technology ensures mission-critical operations can continue regardless 
                of GPS availability, potentially saving lives and protecting infrastructure when it matters most.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;