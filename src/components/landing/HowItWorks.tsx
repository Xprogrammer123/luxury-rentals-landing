import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { Calendar, MapPin, Car } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose Location",
    description: "Select your pickup and return locations",
    bgImage: "https://static.thenounproject.com/png/1806649-200.png",
  },
  {
    icon: Calendar,
    title: "Pick Date",
    description: "Choose your rental dates and time",
    bgImage: "https://www.shutterstock.com/image-vector/choose-date-icon-illustration-vector-260nw-2337047081.jpg",
  },
  {
    icon: Car,
    title: "Select Car",
    description: "Choose from our premium selection",
    bgImage: "https://banner2.cleanpng.com/20180204/apq/av283f6hy.webp",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-luxury-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-300">
            Three simple steps to start your premium car rental experience
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 to-luxury-black" />
              <div 
                className="relative p-8 text-center backdrop-blur-sm border border-luxury-gold/20 rounded-xl"
                style={{
                  background: "rgba(17, 17, 17, 0.8)",
                }}
              >
                <div className="inline-block p-4 bg-luxury-gold rounded-full mb-6 shadow-lg shadow-luxury-gold/20">
                  <step.icon className="w-8 h-8 text-luxury-black" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                <div className="mt-6">
                  <span className="inline-block px-4 py-2 bg-luxury-gold/10 rounded-full text-luxury-gold text-sm">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
