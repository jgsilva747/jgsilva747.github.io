import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Users } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Frederico Baptista",
      role: "CEO & Co-Founder", 
      education: "MSc Aerospace Systems Engineering, ISAE-SUPAERO",
      background: "Project Management at Airbus",
      image: "/_fred.png"
    },
    {
      name: "Álvaro Patrício",
      role: "CTO & Co-Founder",
      education: "MSc Aerospace Engineering, La Sapienza",
      background: "Computer Vision at ESA",
      image: "/_alvaro.png"
    },
    {
      name: "João Silva",
      role: "CTO & Co-Founder",
      education: "MSc Cum Laude Aerospace Engineering, TU Delft",
      background: "Spacecraft Navigation at DLR",
      image: "/_joao.png"
    }
  ];

  const supporters = [
    {
      type: "Incubator",
      name: "ISAE-SUPAERO",
      logo: "/_isae.png",
      url: "https://www.isae-supaero.fr/"
    },
    {
      type: "Investor",
      name: "Project Europe",
      logo: "/_proj_europe.png",
      url: "https://www.projecteurope.co/"
    },
    {
      type: "Partner",
      name: "Heartfelt Capital",
      logo: "/_heartfelt.png",
      url: "https://heartfelt.capital/"
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
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
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
              <a key={index} href={supporter.url} target="_blank" rel="noopener noreferrer">
                <Card className="border-border bg-card shadow-card hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <div className="w-full h-24 flex items-center justify-center mb-4">
                      <img src={supporter.logo} alt={supporter.name} className="max-h-full object-contain" />
                    </div>
                    <Badge variant="outline">{supporter.type}</Badge>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
