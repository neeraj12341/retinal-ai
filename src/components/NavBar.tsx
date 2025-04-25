
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Eye className="h-6 w-6 text-eye-primary" />
          <span className="text-xl font-bold text-eye-dark">
            EyeVision<span className="text-eye-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-eye-primary font-medium transition-colors">
            Home
          </Link>
          <Link to="/diagnosis" className="text-gray-700 hover:text-eye-primary font-medium transition-colors">
            Diagnosis
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-eye-primary font-medium transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-eye-primary font-medium transition-colors">
            Contact
          </Link>
          <Button variant="default" className="bg-eye-primary hover:bg-eye-secondary text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden container mx-auto mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-eye-primary font-medium transition-colors px-3 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/diagnosis"
              className="text-gray-700 hover:text-eye-primary font-medium transition-colors px-3 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Diagnosis
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-eye-primary font-medium transition-colors px-3 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-eye-primary font-medium transition-colors px-3 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="default"
              className="bg-eye-primary hover:bg-eye-secondary text-white w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
