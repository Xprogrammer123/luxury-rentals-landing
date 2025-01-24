import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { Calendar, MapPin, Car } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose Location",
    description: "Select your pickup and return locations",
  },
  {
    icon: Calendar,
    title: "Pick Date",
    description: "Choose your rental dates and time",
  },
  {
    icon: Car,
    title: "Select Car",
    description: "Choose from our premium selection",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-luxury-black mb-4">
            How It Works
          </h2>
          <p className="text-gray-600">
            Three simple steps to start your premium car rental experience
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-6"
            >
              <div className="inline-block p-4 bg-luxury-black rounded-full mb-6">
                <step.icon className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};