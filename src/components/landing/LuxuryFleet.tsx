import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

export const LuxuryFleet = () => {
  return (
    <section className="py-20 bg-gray-50">
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
          <motion.div variants={fadeInUp} className="relative">
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