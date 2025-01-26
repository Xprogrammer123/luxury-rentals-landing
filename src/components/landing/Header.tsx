import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-luxury-black">LuxCars</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-luxury-black hover:text-luxury-orange transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-luxury-black hover:text-luxury-orange transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-luxury-black hover:text-luxury-orange transition-colors"
            >
              AdminLog
            </Link>
            <Link
              to="/cars"
              className="bg-luxury-gold text-luxury-black px-8 py-3 rounded-md hover:bg-white transition-colors duration-300"
            >
              Explore Cars
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="sr-only">Open menu</span>
              {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden flex flex-col items-center bg-white/80 backdrop-blur-lg shadow-md text-lg absolute top-16 left-0 right-0 py-4 transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Link
            to="/about"
            className="text-luxury-black hover:text-luxury-orange transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-luxury-black hover:text-luxury-orange transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="text-luxury-black hover:text-luxury-orange transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            AdminLog
          </Link>
          <Link
            to="/cars"
            className="bg-luxury-gold text-luxury-black px-8 py-3 rounded-md hover:bg-white transition-colors duration-300 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Explore Cars
          </Link>
        </div>
      </div>
    </header>
  );
};
