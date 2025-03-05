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
           <img className='text-luxury-gold font-bold text-3xl' src="https://media-hosting.imagekit.io//6f89dfa036f24074/tpadride-removebg-preview.png?Expires=1832414585&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IF6zkqNsFS86z1NUEjmJhC4lMzIDZn9LH0GhovNh00fqWAXRam37LIQxSSoDVGf74RLAi4WVQRIC9tSRoAgLiFiekh0K9ZOo2dVqCljSDxAgD8EUwW9S9RhvWo56aqb1nhfCbK1ezBF0f1czUxvW1x3Woy-l37w0eZDJNMKtkJPoKD8l3~6ebRvST4HqG9qqrof8kvyvX9oQnO2Z67fGjaVC~6ZuS768ibes3TO2AOwyk1xcSBf7jyZ3iHFnJJqSrPF6Oicg0yCBduiqRYh0V~SpeYTVUzLF5fuAu4tCePbJGbhjrcPjCJqA6Sk04D1Pqht-nMSCdKaIIf7kz5Yqiw__"/>
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
