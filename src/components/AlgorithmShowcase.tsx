import { Badge } from "@/components/ui/badge";

const description =
  "Sub-50 m accuracy across three initial tests,\nwith 2 months of development and a 500€ budget.";

const flightTests = [
  {
    title: "Open Field in Toulouse",
    flightImage: "/Flight1_map.svg",
    stats: ["Flight Distance: 2.4 km",  "Max Speed: 54 km/h"],
    avgAccuracy: "Mean Accuracy: 43.71 m",
  },
  {
    title: "Small Village in Toulouse",
    flightImage: "/Flight2_map.svg",
    stats: ["Flight Distance: 2.6 km",  "Max Speed: 54 km/h"],
    avgAccuracy: "Mean Accuracy: 24.88 m",
  },
  {
    title: "Coastline in Lisbon",
    flightImage: "/Flight3_map.svg",
    stats: ["Flight Distance: 5 km", "Max Speed: 54 km/h"],
    avgAccuracy: "Mean Accuracy: 36.79 m",
  },
];

const AlgorithmShowcase = () => {
  return (
    <section className="py-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Tests
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Initial Test Results</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Test Results Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {flightTests.map((test, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-card border border-border flex flex-col h-full"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-center py-4 px-2 border-b border-border">
              {test.title}
            </h3>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-4 space-y-4">
              {/* Stats as Badges */}
              <div className="flex flex-wrap justify-center gap-2">
                {test.stats.map((stat, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs px-3 py-1 rounded-full">
                    {stat}
                  </Badge>
                ))}
              </div>

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
                <Badge
                  variant="secondary"
                  className="text-base font-semibold px-5 py-3 rounded-full shadow-md bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  {test.avgAccuracy}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Demonstration */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
          Real-time Visual Positioning Demonstration
        </h3>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src="/showcase.gif"
            alt="Drone vs Satellite Real-time Demo"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          Real-time matching of aerial imagery with geospatial data for reliable navigation.
        </p>
      </div>
    </section>
  );
};

export default AlgorithmShowcase;

