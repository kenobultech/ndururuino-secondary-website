import { Mail, Phone, MapPin, Clock, Shield, Facebook, Twitter, Youtube, Award } from "lucide-react";
import { SCHOOL_INFO } from "../data";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-brown text-white pt-16 pb-8 border-t-4 border-academic-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & School Motto Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-academic-gold bg-white overflow-hidden flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-brown" />
              </div>
              <div>
                <span className="block font-serif font-bold text-lg leading-none tracking-tight text-white">
                  NDURURUNO
                </span>
                <span className="block font-display text-[10px] text-academic-gold font-semibold uppercase tracking-wider">
                  Secondary School
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students from diverse backgrounds with quality, affordable, and inclusive education in Nairobi's Starehe district since 1984.
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-brown-dark px-3 py-1.5 rounded-md border border-primary-brown-light text-xs text-academic-gold font-serif italic">
              <Award className="w-4 h-4 text-academic-gold" />
              <span>Motto: &ldquo;{SCHOOL_INFO.motto}&rdquo;</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-display text-sm font-semibold text-academic-gold uppercase tracking-wider mb-6 pb-2 border-b border-primary-brown-light">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavClick("home")}
                  className="hover:text-academic-gold transition-colors duration-200 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("about")}
                  className="hover:text-academic-gold transition-colors duration-200 text-left"
                >
                  About Us & JSS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("academics")}
                  className="hover:text-academic-gold transition-colors duration-200 text-left"
                >
                  Academics & Co-Curriculars
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("gallery")}
                  className="hover:text-academic-gold transition-colors duration-200 text-left"
                >
                  Gallery & Media
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("contact")}
                  className="hover:text-academic-gold transition-colors duration-200 text-left"
                >
                  Admissions & Contacts
                </button>
              </li>
            </ul>
          </div>

          {/* School Operations & Hours */}
          <div>
            <h3 className="font-display text-sm font-semibold text-academic-gold uppercase tracking-wider mb-6 pb-2 border-b border-primary-brown-light">
              School Hours
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-academic-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Academic Day</span>
                  <span className="text-xs">Mon - Fri: 7:00 AM - 4:30 PM</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-academic-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Administration Office</span>
                  <span className="text-xs">Mon - Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-gray-400">Weekends & Holidays</span>
                  <span className="text-xs text-gray-400">Closed (Except pre-scheduled events)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div>
            <h3 className="font-display text-sm font-semibold text-academic-gold uppercase tracking-wider mb-6 pb-2 border-b border-primary-brown-light">
              Contact School
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-academic-gold shrink-0 mt-0.5" />
                <span className="leading-tight">{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-academic-gold shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-academic-gold shrink-0" />
                <span className="break-all">{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Border, Social Media and Copyright */}
        <div className="pt-8 mt-8 border-t border-primary-brown-light flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved. <span className="block sm:inline text-[10px] text-gray-500">Ministry of Education Reg No: MST/S/4820</span>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-primary-brown-dark border border-primary-brown-light text-gray-300 hover:text-academic-gold hover:border-academic-gold transition-all" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary-brown-dark border border-primary-brown-light text-gray-300 hover:text-academic-gold hover:border-academic-gold transition-all" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary-brown-dark border border-primary-brown-light text-gray-300 hover:text-academic-gold hover:border-academic-gold transition-all" aria-label="Youtube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
