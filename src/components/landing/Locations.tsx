
import { MapPin } from "lucide-react";

export const Locations = () => {
  const locations = [
    "New York",
    "Los Angeles",
    "Miami",
    "Las Vegas",
    "Chicago",
    "San Francisco",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <span className="text-luxury-gold uppercase tracking-wider mb-4 block">
              Our Locations
            </span>
            <h2 className="text-4xl font-bold text-luxury-black mb-6">
              Find Us in Major Cities
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <MapPin className="w-4 h-4 text-luxury-gold" />
                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <img
              src="https://as2.ftcdn.net/v2/jpg/04/05/50/27/1000_F_405502788_2GoHAVDY9KKqSTNzuQ0DIArLIru6cphU.jpg"
              alt="Our Locations"
              className="rounded-lg shadow-2xl h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
