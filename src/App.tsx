import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Academics from "./components/Academics";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { GraduationCap, ArrowUp, Phone, Mail, Clock } from "lucide-react";
import { SCHOOL_INFO } from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll height to toggle the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper function to render active page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "academics":
        return <Academics />;
      case "gallery":
        return <Gallery />;
      case "contact":
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-academic-gold selection:text-primary-brown-dark">
      {/* Top Banner Notice - Institutional details */}
      <div className="bg-primary-brown-dark text-gray-300 py-2 border-b border-academic-gold/20 text-xs hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center font-display font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[11px] hover:text-academic-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-academic-gold mr-1.5" />
              {SCHOOL_INFO.phone}
            </span>
            <span className="flex items-center text-[11px] hover:text-academic-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-academic-gold mr-1.5" />
              {SCHOOL_INFO.email}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-[11px]">
              <Clock className="w-3.5 h-3.5 text-academic-gold mr-1.5" />
              {SCHOOL_INFO.workingHours}
            </span>
            <span className="px-2 py-0.5 bg-academic-gold text-primary-brown-dark font-semibold rounded text-[10px] uppercase tracking-wider">
              KNEC Code: 20409002
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Header Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Dynamic Viewport with Animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Institutional Global Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Elegant Scroll to Top Action FAB Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-45 p-3.5 bg-[#4A2E1B] hover:bg-[#352012] border border-academic-gold/30 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-academic-gold group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
