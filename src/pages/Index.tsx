import { motion } from "framer-motion";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturedCars } from "@/components/landing/FeaturedCars";
import { Benefits } from "@/components/landing/Benefits";
import { Footer } from "@/components/landing/Footer";
import { DriverCareers } from "@/components/landing/DriverCareers";
import { DriverBenefits } from "@/components/landing/DriverBenefits";
import { LuxuryFleet } from "@/components/landing/LuxuryFleet";
import { VIPServices } from "@/components/landing/VIPServices";
import { Locations } from "@/components/landing/Locations";
import { Awards } from "@/components/landing/Awards";

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
      <LuxuryFleet />
      <VIPServices />
      <Benefits />
      <DriverCareers />
      <DriverBenefits />
      <Locations />
      <Awards />
      <Footer />
    </motion.div>
  );
};

export default Index;