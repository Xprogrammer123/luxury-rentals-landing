import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

export const VIPServices = () => {
  return (
    <section className="py-20 bg-luxury-black text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} className="relative order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2070&q=80"
              alt="VIP Services"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="order-1 md:order-2">
            <span className="text-luxury-gold uppercase tracking-wider mb-4 block">
              VIP Experience
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Exclusive Services for Our Elite Clients
            </h2>
            <p className="text-gray-300 mb-8">
              Enjoy personalized service, priority booking, and exclusive access to
              our most prestigious vehicles.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                <span>24/7 Concierge Service</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                <span>Priority Vehicle Selection</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                <span>Chauffeur Services</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};