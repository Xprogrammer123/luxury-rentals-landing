import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-luxury-gold text-luxury-black px-4 py-2 rounded-md hover:bg-white transition duration-300"
    >
     <ArrowLeft />
    </button>
  );
};


