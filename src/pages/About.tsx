import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen pt-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
          <span className="text-luxury-orange uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h1 className="text-4xl font-bold text-luxury-black mb-8">
            Luxury Car Rental Excellence
          </h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Welcome to LuxRide, where luxury meets convenience. We specialize in
              providing premium car rental services for those who appreciate the
              finer things in life.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-luxury-orange">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide an unparalleled luxury car rental experience, combining
                premium vehicles with exceptional service to exceed our clients'
                expectations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Premium Fleet</h3>
                <p className="text-gray-600">
                  Our carefully curated collection features the latest models from
                  prestigious automotive brands.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Exceptional Service</h3>
                <p className="text-gray-600">
                  24/7 support and personalized assistance to ensure your complete
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;