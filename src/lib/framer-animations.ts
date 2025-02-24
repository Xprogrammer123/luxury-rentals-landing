
import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 10, // Reduced distance
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2, // Reduced from 0.5
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Reduced from 0.2
    },
  },
};

// Simplified page transition
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2, // Reduced from 0.5
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2, // Reduced from 0.3
    },
  },
};
