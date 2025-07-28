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
    flightImage: "/Flight2_map.svg",
    stats: [
      "Flight Distance: 2.6 km",
      "Altitude Range: 200 m",
      "Max Speed: 54 km/h"
    ],
    avgAccuracy: "Mean Accuracy: 24.88 m"
  },
  {
    title: "Coastline in Lisbon",
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {flightTests.map((test, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-card border border-border flex flex-col h-full">

            {/* Title */}
            <h3 className="text-xl font-bold text-center py-4 px-2 border-b border-border">{test.title}</h3>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-4 space-y-4">
              {/* Stats */}
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                {test.stats.map((stat, idx) => (
                  <li key={idx}>{stat}</li>
                ))}
              </ul>

              {/* Flight Image */}
              <div className="flex justify-center items-center w-full">
                <img 
                  src={test.flightImage} 
                  alt={test.title} 
                  className="w-full h-auto object-contain max-h-48"
                />
              </div>

              {/* Average Accuracy */}
              <div className="text-center mt-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {test.avgAccuracy}
                </Badge>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default AlgorithmShowcase;

