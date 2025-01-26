import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 10, // Reduced movement
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Reduced duration
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Faster stagger time
    },
  },
};

export const scaleOnHover: Variants = {
  hover: {
    scale: 1.02, // Less intense scaling
    transition: {
      duration: 0.2, // Reduced duration
      ease: "easeInOut",
    },
  },
};
