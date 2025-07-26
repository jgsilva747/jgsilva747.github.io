import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Users } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      education: "PhD Computer Science, MIT",
      background: "Former navigation systems engineer at NASA JPL"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "CTO & Co-Founder", 
      education: "PhD Robotics, Stanford",
      background: "10 years in autonomous systems at Google X"
    },
    {
      name: "Dr. Emily Zhang",
      role: "Head of AI & Co-Founder",
      education: "PhD Machine Learning, Carnegie Mellon",
      background: "Former principal scientist at Amazon Robotics"
    }
  ];

  const supporters = [
    {
      type: "Incubator",
      name: "TechStars",
      description: "Accelerating our growth in autonomous systems"
    },
    {
      type: "Investor",
      name: "Andreessen Horowitz",
      description: "Leading our Series A funding round"
    },
    {
      type: "Partner",
      name: "DARPA",
      description: "Supporting research in GPS-denied navigation"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Expert Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our founding team combines decades of experience in autonomous systems, 
            navigation technology, and artificial intelligence.
          </p>
        </div>

        {/* Founding Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Founding Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="border-border bg-card shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{founder.name}</h4>
                  <p className="text-primary font-medium mb-3">{founder.role}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{founder.education}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{founder.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support & Investment */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Our Support Network</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {supporters.map((supporter, index) => (
              <Card key={index} className="border-border bg-card shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <Badge variant="outline" className="mb-3">{supporter.type}</Badge>
                  <h4 className="font-bold text-lg mb-2">{supporter.name}</h4>
                  <p className="text-sm text-muted-foreground">{supporter.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;