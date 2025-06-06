
import { motion } from "framer-motion";

export const VIPServices = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2070&q=80"
              alt="VIP Services"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 md:order-2"
          >
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
