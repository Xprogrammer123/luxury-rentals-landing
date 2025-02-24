
import { motion } from "framer-motion";
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
    <section className="py-20 bg-luxury-black text-white relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
          alt="Background"
          className="w-full h-full object-cover opacity-5 mix-blend-overlay"
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-400">
            Experience the difference with our premium service
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
