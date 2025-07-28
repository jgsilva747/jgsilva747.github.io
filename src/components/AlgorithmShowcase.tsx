const flightTests = [
  {
    title: "Open Field in Toulouse",
    flightImage: "/Flight1_map.pdf",
    errorImage: "/Flight1_error.pdf",
    stats: [
      "Flight Distance: 2.4 km",
      "Altitude Range: 200 m",
      "Max Speed: 54 km/h",
      "Mean Accuracy: 43.71 m"
    ]
  },
  {
    title: "Small Village in Toulouse",
    flightImage: "/Flight2_map.pdf",
    errorImage: "/Flight2_error.pdf",
    stats: [
      "Flight Distance: 2.6 km",
      "Altitude Range: 200 m",
      "Max Speed: 54 km/h",
      "Mean Accuracy: 24.88 m"
    ]
  },
  {
    title: "Coastline in Lisbon",
    flightImage: "/Flight3_map.pdf",
    errorImage: "/Flight3_error.pdf",
    stats: [
      "Flight Distance: 5 km",
      "Altitude Range: 200 m",
      "Max Speed: 54 km/h",
      "Mean Accuracy: 36.79 m"
    ]
  }
];

const AlgorithmShowcase = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {flightTests.map((test, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-card border border-border">
            {/* Flight Image */}
            <div>
              <img src={test.flightImage} alt={test.title} className="w-full h-auto object-cover" />
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col md:flex-row p-6 gap-6 items-start">
              {/* Bullet Points */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">{test.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {test.stats.map((stat, idx) => (
                    <li key={idx}>{stat}</li>
                  ))}
                </ul>
              </div>

              {/* Error Image */}
              <div className="flex-1 w-full">
                <img src={test.errorImage} alt={`${test.title} Estimation Error`} className="w-full h-auto object-contain rounded border border-border" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlgorithmShowcase;
