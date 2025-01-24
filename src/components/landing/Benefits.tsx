import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { Shield, Clock, Headphones, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All our vehicles come with comprehensive insurance coverage",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for your peace of mind",
  },
  {
    icon: Headphones,
    title: "Dedicated Service",
    description: "Personal concierge service for all your needs",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options for your convenience",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-luxury-black text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-400">
            Experience the difference with our premium service
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-6 border border-gray-800 rounded-lg hover:border-luxury-gold transition-colors duration-300"
            >
              <div className="inline-block p-4 bg-luxury-gray rounded-full mb-6">
                <benefit.icon className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};