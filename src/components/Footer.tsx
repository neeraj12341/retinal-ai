
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-eye-primary" />
              <span className="text-xl font-bold text-eye-dark">
                EyeVision<span className="text-eye-primary">AI</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Revolutionizing retinal diagnosis through advanced AI technology, 
              helping detect eye conditions early and efficiently.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-eye-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diagnosis" className="text-gray-600 hover:text-eye-primary transition-colors text-sm">
                  Diagnosis
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-eye-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-eye-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-eye-primary transition-colors text-sm">
                  Eye Health Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-eye-primary transition-colors text-sm">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-eye-primary transition-colors text-sm">
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-eye-primary transition-colors text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 text-sm space-y-3">
              <p>123 Medical Center Drive</p>
              <p>Health City, HC 12345</p>
              <p>Email: info@eyevisionai.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} EyeVisionAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
