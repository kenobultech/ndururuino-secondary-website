import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, GraduationCap, Shield } from "lucide-react";
import { SCHOOL_INFO } from "../data";

const schoolCrest = "/src/assets/images/school_crest_1782422095723.jpg";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "academics", label: "Academics & Co-Curricular" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#FAF6F0] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo & School Name Section */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-full border border-academic-gold bg-academic-cream overflow-hidden shadow-inner flex items-center justify-center">
              {schoolCrest ? (
                <img 
                  src={schoolCrest} 
                  alt="Ndururuno Secondary School Crest" 
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Shield className="w-8 h-8 text-primary-brown" />
              )}
            </div>
            <div>
              <span className="block font-serif font-bold text-lg sm:text-xl text-primary-brown leading-tight tracking-tight">
                NDURURUNO
              </span>
              <span className="block font-display text-xs text-academic-gold font-semibold uppercase tracking-wider">
                Secondary School
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 font-display text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-primary-brown font-semibold" : "text-gray-600 hover:text-primary-brown"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-academic-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-4 px-5 py-2.5 bg-primary-brown hover:bg-primary-brown-dark text-white rounded-lg font-display text-xs uppercase tracking-wider font-semibold shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-primary-brown hover:bg-academic-cream focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-academic-cream-dark bg-white overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "bg-academic-cream text-primary-brown font-bold border-l-4 border-academic-gold pl-3"
                        : "text-gray-600 hover:bg-academic-cream/50 hover:text-primary-brown"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 px-4">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="block w-full py-3 text-center bg-primary-brown hover:bg-primary-brown-dark text-white rounded-lg font-display text-sm font-semibold shadow-md uppercase tracking-wider"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
