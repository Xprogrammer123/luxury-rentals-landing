import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { Award, Clock, DollarSign, Briefcase } from "lucide-react";

export const DriverBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Earn premium rates driving luxury vehicles",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Choose your schedule and work-life balance",
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Advance your career with our training programs",
    },
    {
      icon: Briefcase,
      title: "Full Benefits",
      description: "Comprehensive health and retirement packages",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
              Driver Benefits
            </span>
            <h2 className="text-4xl font-bold text-luxury-black mb-6">
              Why Drive With Us?
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <benefit.icon className="w-8 h-8 text-luxury-gold mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2070&q=80"
              alt="Professional Environment"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 bg-luxury-black p-4 rounded-lg">
              <p className="text-luxury-gold font-bold">Premium Benefits</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};