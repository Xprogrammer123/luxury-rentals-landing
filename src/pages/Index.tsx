import { motion } from "framer-motion";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturedCars } from "@/components/landing/FeaturedCars";
import { Benefits } from "@/components/landing/Benefits";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <HowItWorks />
      <FeaturedCars />
      <Benefits />
      <Footer />
    </motion.div>
  );
};

export default Index;