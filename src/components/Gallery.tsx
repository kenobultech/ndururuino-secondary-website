import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_PHOTOS, GalleryItem } from "../data";
import { Grid, Eye, X, Compass, ChevronLeft, ChevronRight, Award } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Filter logic
  const filteredPhotos = filter === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(photo => photo.category === filter);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = [
    { id: "all", label: "Show All" },
    { id: "academic", label: "Academics & JSS" },
    { id: "sports", label: "Sports & Games" },
    { id: "facility", label: "Our Facilities" },
    { id: "event", label: "School Events" }
  ];

  return (
    <div className="space-y-16 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HEADER SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
          Visual Memories
        </span>
        <h1 className="font-serif text-4xl font-bold text-primary-brown">
          School Gallery &amp; Campus Life
        </h1>
        <div className="w-24 h-1 bg-academic-gold mx-auto rounded-full" />
        <p className="text-gray-600 font-sans text-sm">
          A glimpse into the daily life, achievements, and facilities of Ndururuno Secondary School. Experience the energy of our students and the quality of our learning spaces.
        </p>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="flex flex-wrap justify-center gap-2 border-b border-academic-cream-dark pb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4.5 py-2.5 rounded-lg font-display text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              filter === cat.id
                ? "bg-academic-gold text-primary-brown-dark shadow-md scale-105"
                : "bg-academic-cream text-primary-brown hover:bg-academic-cream-dark"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* 3. DYNAMIC PHOTO GRID */}
      <section>
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedImage(photo)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-white border border-academic-cream-dark shadow-sm hover:shadow-lg transition-all"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorphism Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-brown-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-2 py-1 bg-primary-brown/95 border border-academic-gold/30 rounded text-[9px] font-display font-bold text-academic-gold uppercase tracking-wider">
                    {photo.category}
                  </span>
                </div>

                {/* Caption Details */}
                <div className="p-4 bg-white space-y-1">
                  <h3 className="font-serif font-semibold text-sm text-primary-brown group-hover:text-academic-gold transition-colors line-clamp-1 leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 bg-academic-cream rounded-xl border border-dashed border-academic-gold/20 max-w-md mx-auto space-y-3">
            <Compass className="w-10 h-10 text-academic-gold mx-auto" />
            <h3 className="font-serif font-bold text-primary-brown">No photos in this category yet</h3>
            <p className="text-xs text-gray-500">We are continuously updating our media archive. Check back shortly!</p>
          </div>
        )}
      </section>

      {/* 4. LIGHTBOX OVERLAY MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Image Section */}
                <div className="md:col-span-8 bg-black flex items-center justify-center aspect-[4/3] md:aspect-auto md:h-[500px]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Text Sidebar */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between text-white space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-2 py-0.5 bg-academic-gold/20 border border-academic-gold/40 text-[9px] font-display font-semibold uppercase tracking-wider text-academic-gold rounded">
                      {selectedImage.category} Archive
                    </span>
                    <h3 className="font-serif font-bold text-xl leading-tight">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-gray-400">
                      <Award className="w-3.5 h-3.5 text-academic-gold" />
                      <span>NDURURUNO SECONDARY SCHOOL</span>
                    </div>
                    <p className="text-[9px] text-gray-500">
                      Photography &copy; Ndururuno Media Club. Authorized for public viewing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
