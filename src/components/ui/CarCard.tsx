import { motion } from "framer-motion";
import { fadeInUp, scaleOnHover } from "@/lib/framer-animations";

interface CarCardProps {
  name: string;
  image: string;
  price: number;
  type: string;
}

export const CarCard = ({ name, image, price, type }: CarCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover="hover"
      className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300"
    >
      <motion.div variants={scaleOnHover} className="relative aspect-[16/9]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-luxury-black mb-2">{name}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{type}</span>
          <span className="text-luxury-gold font-semibold">${price}/day</span>
        </div>
        <button className="w-full bg-luxury-black text-white py-2 rounded-md hover:bg-luxury-gray transition-colors duration-300">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};