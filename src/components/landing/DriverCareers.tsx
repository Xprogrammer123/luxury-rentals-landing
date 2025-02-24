import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

export const DriverCareers = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-luxury-black mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600">
            Be a part of our luxury car rental service and drive your career forward.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Driver Positions</h3>
            <p className="text-gray-600 mb-4">
              We are looking for experienced drivers who are passionate about providing exceptional service.
            </p>
            <button className="bg-luxury-gold text-luxury-black px-4 py-2 rounded-md hover:bg-white transition-colors duration-300">
              Apply Now
            </button>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Competitive salary</li>
              <li>Flexible hours</li>
              <li>Health insurance</li>
              <li>Employee discounts</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
