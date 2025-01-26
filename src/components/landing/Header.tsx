import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-luxury-black">LuxCars</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/cars"
              className="text-luxury-black hover:text-luxury-orange transition-colors"
            >
              Explore Cars
            </Link>
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
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};