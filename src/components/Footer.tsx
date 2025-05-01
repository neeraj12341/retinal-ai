
import { Link } from "react-router-dom";
import { Eye, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">
                Retinal<span className="text-eye-accent">AI</span>
              </span>
            </Link>
            <p className="mt-4 text-white/90 text-sm leading-relaxed">
              Transforming eye care through advanced AI technology, making early detection 
              accessible and efficient for everyone.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-eye-accent transition-colors text-sm flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diagnosis" className="text-white/80 hover:text-eye-accent transition-colors text-sm flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Diagnosis
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-eye-accent transition-colors text-sm flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-eye-accent transition-colors text-sm flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-white/80 text-sm space-y-3">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Medical Center Drive</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Health City, HC 12345</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@retinalai.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6">
          <p className="text-center text-white/80 text-sm">
            © {new Date().getFullYear()} RetinalAI. Empowering Vision Through Innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
