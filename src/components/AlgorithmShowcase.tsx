import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navigation, MapPin, Crosshair } from "lucide-react";

const AlgorithmShowcase = () => {
  const testResults = [
    {
      title: "Indoor Navigation Test",
      result: "98.5%",
      description: "Accuracy in GPS-denied warehouse environment",
      details: "Successfully navigated 50+ flight paths with sub-meter precision",
      icon: <Navigation className="w-5 h-5" />
    },
    {
      title: "Urban Canyon Test",
      result: "94.2%",
      description: "Performance in dense urban environments",
      details: "Maintained navigation between buildings with limited sky visibility",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      title: "Underground Facility Test",
      result: "96.8%",
      description: "Navigation in completely enclosed spaces",
      details: "Zero GPS signal with complex multi-level structure navigation",
      icon: <Crosshair className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Test Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Navigation Tests</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our drone navigation system has been tested in three critical GPS-denied environments, 
            demonstrating exceptional performance and reliability.
          </p>
        </div>

        {/* Test results */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testResults.map((test, index) => (
            <Card key={index} className="border-border bg-card shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-accent">
                    {test.icon}
                  </div>
                  <CardTitle className="text-xl">{test.title}</CardTitle>
                </div>
                <CardDescription>{test.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">{test.result}</div>
                <p className="text-sm text-muted-foreground">{test.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded bg-card border border-border">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Test Environments</div>
          </div>
          <div className="text-center p-6 rounded bg-card border border-border">
            <div className="text-3xl font-bold text-grey-light mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Flight Hours</div>
          </div>
          <div className="text-center p-6 rounded bg-card border border-border">
            <div className="text-3xl font-bold text-grey-light mb-2">0</div>
            <div className="text-sm text-muted-foreground">GPS Signals</div>
          </div>
          <div className="text-center p-6 rounded bg-card border border-border">
            <div className="text-3xl font-bold text-primary mb-2">96%+</div>
            <div className="text-sm text-muted-foreground">Avg Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgorithmShowcase;