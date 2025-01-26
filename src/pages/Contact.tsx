import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { MapPin, Phone, Mail } from "lucide-react";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen pt-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
          <span className="text-luxury-orange uppercase tracking-wider mb-4 block">
            Contact Us
          </span>
          <h1 className="text-4xl font-bold text-luxury-black mb-8">
            Get in Touch
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-6 h-6 text-luxury-orange" />
                  <h3 className="text-xl font-bold">Phone</h3>
                </div>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-6 h-6 text-luxury-orange" />
                  <h3 className="text-xl font-bold">Email</h3>
                </div>
                <p className="text-gray-600">contact@luxride.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-6 h-6 text-luxury-orange" />
                  <h3 className="text-xl font-bold">Location</h3>
                </div>
                <p className="text-gray-600">
                  123 Luxury Drive
                  <br />
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-luxury-orange focus:border-luxury-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-luxury-orange focus:border-luxury-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-luxury-orange focus:border-luxury-orange"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-luxury-orange text-white px-6 py-3 rounded-md hover:bg-luxury-brightOrange transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Newsletter/>
      <Footer/>
    </motion.div>
  );
};

export default Contact;