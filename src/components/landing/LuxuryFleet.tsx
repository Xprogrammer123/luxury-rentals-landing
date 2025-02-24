import { motion } from "framer-motion";

export const LuxuryFleet = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-luxury-gold uppercase tracking-wider mb-4 block">
              Luxury Fleet
            </span>
            <h2 className="text-4xl font-bold text-luxury-black mb-6">
              Experience Our Premium Collection
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our handpicked selection of luxury vehicles, from elegant
              sedans to powerful sports cars, each maintained to perfection.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Sports Cars</h3>
                <p className="text-sm text-gray-600">
                  High-performance vehicles for thrill-seekers
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Luxury Sedans</h3>
                <p className="text-sm text-gray-600">
                  Elegant comfort for business and leisure
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2070&q=80"
              alt="Luxury Fleet"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
