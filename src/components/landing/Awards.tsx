
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const Awards = () => {
  const awards = [
    "Best Luxury Car Rental 2023",
    "Customer Service Excellence",
    "Top Fleet Management",
    "Innovation in Car Rental",
  ];

  return (
    <section className="py-20 bg-luxury-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="relative order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2070&q=80"
              alt="Awards"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="order-1 md:order-2"
          >
            <span className="text-luxury-gold uppercase tracking-wider mb-4 block">
              Recognition
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Award-Winning Service Excellence
            </h2>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-luxury-gray p-4 rounded-lg"
                >
                  <Award className="w-6 h-6 text-luxury-gold" />
                  <span>{award}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
