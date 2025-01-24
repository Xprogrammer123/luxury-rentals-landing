import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
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
          </motion.div>
          <motion.div variants={fadeInUp} className="relative">
            <img
              src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=2070&q=80"
              alt="Our Locations"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};