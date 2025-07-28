import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Lightbulb, Cog } from "lucide-react";

const Mission = () => {
  const sections = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission", // Our mission is to build lightweight, cost-effective, and plug-and-play navigation solutions that provide instant, reliable positioning for troops and systems in any GNSS-denied environment.
      content: "To create the essential building blocks for autonomy. As a first step, we are providing lightweight, cost-effective, and plug-and-play navigation solutions for GNSS-denied environments, powered by advanced Computer Vision and Sensor Fusion algorithms." //"To provide AI and Computer Vision systems that enable drones to navigate reliably in GPS-denied environments, enabling full autonomy for drone missions in the battlefield."
    },
    { // Zero will keep European sovereignty by providing advanced technology to every defence prime and army in Europe
      icon: <Eye className="w-8 h-8" />, // A Europe where every defence asset - on the ground, in the air, and at sea - can operate with intelligent and complete autonomy to ensure sovereignty.
      title: "Our Vision", // To ensure that every European warfighter can operate with confidence and precision in any environment, powered by accessible, intelligent navigation technology.
      content: "A world where every European defence asset can operate autonomously and with precision in any environment. We envision a sovereign Europe, powered by accessible and intelligent technology."
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
                Current GPS-based navigation systems fail in contested areas due to spoofing and jamming. Our technology ensures mission-critical operations can continue regardless 
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
