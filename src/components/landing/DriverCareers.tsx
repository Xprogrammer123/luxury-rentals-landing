import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { Button } from "@/components/ui/button";

export const DriverCareers = () => {
  return (
    <section className="py-20 bg-luxury-black text-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2070&q=80"
              alt="Professional Driver"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-luxury-gold p-4 rounded-lg">
              <p className="text-luxury-black font-bold">Join Our Elite Team</p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <span className="text-luxury-gold uppercase tracking-wider mb-4 block">
              Career Opportunities
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Become a Professional Luxury Car Driver
            </h2>
            <p className="text-gray-300 mb-8">
              Join our team of elite drivers and experience the thrill of driving
              luxury vehicles while providing exceptional service to our
              distinguished clients.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                <span>Competitive compensation package</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                <span>Flexible scheduling options</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                <span>Professional development opportunities</span>
              </li>
            </ul>
            <Button className="bg-luxury-gold text-luxury-black hover:bg-white">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};