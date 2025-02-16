
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "@/components/landing/Header"
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
import { Newsletter } from "@/components/landing/Newsletter";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div>
      <Header/>
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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
