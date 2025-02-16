
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

export const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button 
      variant="ghost" 
      className={className} 
      onClick={() => navigate(-1)}
    >
      <ChevronLeft className="h-4 w-4 mr-2" />
      Back
    </Button>
  );
};
