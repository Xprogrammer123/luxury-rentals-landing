
import { motion } from "framer-motion";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";
import { BackButton } from "@/components/ui/BackButton";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen pt-16 bg-gray-50"
    >
      <div className="relative">
        <BackButton className="absolute top-4 left-4" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-luxury-orange uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h1 className="text-4xl font-bold text-luxury-black mb-8">
            Luxury Car Rental Excellence
          </h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Welcome to Tpadride services, where luxury meets convenience. We specialize in
              providing premium car rental services for those who appreciate the
              finer things in life.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-luxury-orange"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide an unparalleled luxury car rental experience, combining
                premium vehicles with exceptional service to exceed our clients'
                expectations.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">Premium Fleet</h3>
                <p className="text-gray-600">
                  Our carefully curated collection features the latest models from
                  prestigious automotive brands.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">Exceptional Service</h3>
                <p className="text-gray-600">
                  24/7 support and personalized assistance to ensure your complete
                  satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <Newsletter/>
      <Footer/>
    </motion.div>
  );
};

export default About;
