import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tpadride services</h3>
            <p className="text-gray-400">
              Experience luxury and performance with our premium car rental
              service.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  Our Cars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-luxury-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Luxury Street</li>
              <li>+1 (567) 304-5677</li>
              <li>tpadrideservices@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
           <Link
                      to="/login"
                      className="text-luxury-black hover:text-luxury-orange transition-colors py-2"
                     
                    >
                     <p>&copy; 2024 Tpadride services. All rights reserved.</p>
                    </Link>
        </div>
      </div>
    </footer>
  );
};
