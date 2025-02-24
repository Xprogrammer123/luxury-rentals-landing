
import { useNavigate } from "react-router-dom";

interface CarCardProps {
  name: string;
  image: string;
  price: number;
  type: string;
}

export const CarCard = ({ name, image, price, type }: CarCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-200 hover:scale-105">
      <div className="relative aspect-[16/9]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-luxury-black mb-2">{name}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{type}</span>
          <span className="text-luxury-gold font-semibold">${price}/day</span>
        </div>
        <button 
          className="w-full bg-luxury-black text-white py-2 rounded-md hover:bg-luxury-gray transition-colors duration-200"
          onClick={() => navigate(`/rental-form/1`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
