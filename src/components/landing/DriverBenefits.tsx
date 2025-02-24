import { motion } from "framer-motion";

export const DriverBenefits = () => {
  return (
    <section className="py-20 bg-luxury-black text-white relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Background"
          className="w-full h-full object-cover opacity-5 mix-blend-overlay"
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
          <h2 className="text-4xl font-bold mb-4">Driver Benefits</h2>
          <p className="text-gray-400">
            Discover the advantages of being a driver with us
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6 border border-gray-800 rounded-lg hover:border-luxury-gold transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Flexible Hours</h3>
            <p className="text-gray-400">
              Work on your own schedule and enjoy the freedom of flexibility.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6 border border-gray-800 rounded-lg hover:border-luxury-gold transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Competitive Pay</h3>
            <p className="text-gray-400">
              Earn a competitive income with our attractive pay structure.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-6 border border-gray-800 rounded-lg hover:border-luxury-gold transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Supportive Community</h3>
            <p className="text-gray-400">
              Join a community of drivers who support and uplift each other.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center p-6 border border-gray-800 rounded-lg hover:border-luxury-gold transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Training Programs</h3>
            <p className="text-gray-400">
              Access training programs to enhance your skills and knowledge.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center p-6 border border-gray-800 rounded-lg hover:border-luxury-gold transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Health Benefits</h3>
            <p className="text-gray-400">
              Enjoy health benefits that support your well-being.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center p-6 border border-gray-800 rounded-lg hover:border-luxury-gold transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Rewards Program</h3>
            <p className="text-gray-400">
              Participate in our rewards program and earn bonuses.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
