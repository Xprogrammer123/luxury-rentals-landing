import { Link } from "react-router-dom";
import { Car, Info, Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-luxury-black">
              Lux<span className="text-luxury-orange">Ride</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/cars"
              className="flex items-center space-x-1 text-gray-600 hover:text-luxury-orange transition-colors"
            >
              <Car className="w-4 h-4" />
              <span>Explore Cars</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-1 text-gray-600 hover:text-luxury-orange transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-1 text-gray-600 hover:text-luxury-orange transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};