import { Badge } from "@/components/ui/badge";

const flightTests = [
  {
    title: "Open Field in Toulouse",
    flightImage: "/Flight1_map.svg",
    stats: [
      "Flight Distance: 2.4 km",
      "Altitude Range: 200 m",
      "Max Speed: 54 km/h"
    ],
    avgAccuracy: "Mean Accuracy: 43.71 m"
  },
  {
    title: "Small Village in Toulouse",
    flightImage: "/Flight2_map.svf",
    stats: [
      "Flight Distance: 2.6 km",
      "Altitude Range: 200 m",
      "Max Speed: 54 km/h"
    ],
    avgAccuracy: "Mean Accuracy: 24.88 m"
  },
  {
    title: "Coasline in Lisbon",
    flightImage: "/Flight3_map.svg",
    stats: [
      "Flight Distance: 5 km",
      "Altitude Range: 200 m",
      "Max Speed: 54 km/h"
    ],
    avgAccuracy: "Mean Accuracy: 36.79"
  }
];

const AlgorithmShowcase = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {flightTests.map((test, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-card border border-border flex flex-col gap-6 p-6">
            
            {/* Title */}
            <h3 className="text-3xl font-bold text-center">{test.title}</h3>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              
              {/* Bullet Points */}
              <div className="flex-1 w-full">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-lg">
                  {test.stats.map((stat, idx) => (
                    <li key={idx}>{stat}</li>
                  ))}
                </ul>
              </div>

              {/* Flight Image */}
              <div className="flex-1 w-full">
                <img 
                  src={test.flightImage} 
                  alt={test.title} 
                  className="w-full h-auto object-contain rounded border border-border"
                />
              </div>
            </div>

            {/* Average Accuracy */}
            <div className="text-center">
              <Badge variant="secondary" className="text-lg px-6 py-3">
                {test.avgAccuracy}
              </Badge>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default AlgorithmShowcase;
