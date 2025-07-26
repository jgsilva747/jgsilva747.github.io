import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge algorithmic research and development."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Focused",
      description: "Every algorithm is designed for maximum accuracy and reliability in real-world applications."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Forward Thinking",
      description: "We anticipate future computational challenges and develop solutions ahead of the curve."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Excellence",
      description: "Our team combines diverse expertise to create breakthrough algorithmic solutions."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Advanced Navigation</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our proprietary navigation technology combines computer vision, machine learning, 
            and advanced sensors to enable autonomous flight in the most challenging environments.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Navigation Without Limits
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Traditional GPS-based navigation fails when you need it most - in underground facilities, 
                dense urban canyons, and contested environments. Our breakthrough technology enables 
                autonomous navigation where others cannot operate.
              </p>
              <p>
                Using advanced computer vision and machine learning, our systems create real-time 
                maps while simultaneously tracking position and orientation. This allows drones to 
                navigate complex environments with human-level spatial awareness.
              </p>
              <p>
                Our technology opens new possibilities for search and rescue operations, infrastructure 
                inspection, and defense applications in challenging environments previously inaccessible 
                to autonomous systems.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="border-border bg-card shadow-card text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Years Development</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-card text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-grey-light mb-2">12</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-card text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-grey-light mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Patents Filed</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-card text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-border bg-card shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded bg-accent mb-4">
                  <div className="text-accent-foreground">
                    {value.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;