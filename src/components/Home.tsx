import { motion } from "motion/react";
import { GraduationCap, HeartHandshake, Users, ArrowRight, Calendar, BookOpen, Clock, FileText } from "lucide-react";
import { SCHOOL_INFO, CORE_PILLARS, ADMIN_TEAM, UPCOMING_EVENTS } from "../data";

const schoolHero = "/src/assets/images/school_hero_1782422110647.jpg";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const principal = ADMIN_TEAM.find(member => member.id === "principal") || ADMIN_TEAM[0];

  // Helper to map icon names to Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-8 h-8 text-academic-gold" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-8 h-8 text-academic-gold" />;
      case "Users":
        return <Users className="w-8 h-8 text-academic-gold" />;
      default:
        return <BookOpen className="w-8 h-8 text-academic-gold" />;
    }
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-[#4A2E1B] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={schoolHero} 
            alt="Ndururuno Secondary School Campus" 
            className="w-full h-full object-cover object-center opacity-35 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#352012]/95 via-[#4A2E1B]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-academic-gold/20 border border-academic-gold/30 px-3 py-1 rounded-full text-xs sm:text-sm font-display font-semibold uppercase tracking-wider text-academic-gold">
              <span>ESTD {SCHOOL_INFO.established} &bull; MOE Registered</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Ndururuno <br />
              <span className="text-academic-gold font-normal italic">Secondary School</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 font-sans font-light max-w-xl leading-relaxed">
              &ldquo;{SCHOOL_INFO.tagline}&rdquo; &ndash; Serving Huruma, Nairobi, by cultivating academics, leadership, and moral discipline.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setCurrentPage("about")}
                className="px-8 py-3.5 bg-academic-gold hover:bg-academic-gold-hover text-primary-brown-dark rounded-lg font-display text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Our School
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-lg font-display text-sm font-semibold uppercase tracking-wider transition-all duration-300"
              >
                Contact Admissions
              </button>
            </div>
          </motion.div>

          {/* Side stats card in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-white space-y-6 shadow-2xl"
          >
            <h3 className="font-serif text-xl font-bold border-b border-white/20 pb-3">
              Why Ndururuno?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#4A2E1B]/40 p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-3xl font-display font-bold text-academic-gold">40+</span>
                <span className="text-xs text-gray-300">Years of History</span>
              </div>
              <div className="bg-[#4A2E1B]/40 p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-3xl font-display font-bold text-academic-gold">1,200+</span>
                <span className="text-xs text-gray-300">Active Students</span>
              </div>
              <div className="bg-[#4A2E1B]/40 p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-3xl font-display font-bold text-academic-gold">100%</span>
                <span className="text-xs text-gray-300">JSS Integration</span>
              </div>
              <div className="bg-[#4A2E1B]/40 p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-3xl font-display font-bold text-academic-gold">45+</span>
                <span className="text-xs text-gray-300">Dedicated Educators</span>
              </div>
            </div>
            <div className="p-3.5 bg-academic-gold/10 border border-academic-gold/20 rounded-xl text-center text-xs text-academic-gold">
              Admissions for Term III &amp; CBC JSS Grade 7/8 are now ongoing.
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE PILLARS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
            Our Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-brown">
            Nurturing Holistic Excellence
          </h2>
          <div className="w-20 h-1 bg-academic-gold mx-auto rounded-full" />
          <p className="text-gray-600 font-sans">
            At Ndururuno Secondary School, we build on three solid foundations to prepare our boys and girls to navigate the future with confidence and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-academic-cream border-t-4 border-academic-gold rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-white border border-academic-gold-hover/20 flex items-center justify-center shadow-inner">
                  {renderIcon(pillar.iconName)}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-brown">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-6 border-t border-academic-cream-dark mt-6 flex items-center text-xs font-display font-bold uppercase tracking-wider text-primary-brown hover:text-academic-gold transition-colors cursor-pointer group" onClick={() => setCurrentPage("about")}>
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PRINCIPAL'S WELCOME */}
      <section className="bg-academic-cream py-20 border-y border-academic-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-academic-gold rounded-2xl rotate-3 scale-95" />
              <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-academic-cream-dark">
                <img 
                  src={principal.image} 
                  alt={principal.name} 
                  className="w-full h-auto object-cover rounded-xl aspect-[4/5] object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 text-center">
                  <span className="block font-serif font-bold text-primary-brown text-lg">{principal.name}</span>
                  <span className="block font-display text-xs text-academic-gold uppercase tracking-widest font-semibold">{principal.role}</span>
                </div>
              </div>
            </motion.div>

            {/* Welcome Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
                Welcome Message
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-brown">
                Word from the School Principal
              </h2>
              <div className="w-16 h-1 bg-academic-gold rounded-full" />
              <div className="text-gray-600 space-y-4 font-sans text-sm leading-relaxed italic">
                <p>&ldquo;{principal.message}&rdquo;</p>
              </div>
              <p className="text-xs text-gray-500 font-mono">
                {principal.qualification}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setCurrentPage("about")}
                  className="px-6 py-3 bg-primary-brown hover:bg-primary-brown-dark text-white rounded-lg font-display text-xs uppercase tracking-wider font-semibold shadow-md transition-colors inline-flex items-center space-x-2"
                >
                  <span>Read School History</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. QUICK ACTIONS / PORTALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-xl mx-auto space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-brown">
            Take the Next Step
          </h2>
          <p className="text-sm text-gray-600">
            Access school programs, admission requirements, or contact our administrative team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div 
            onClick={() => setCurrentPage("contact")}
            className="p-6 bg-white border border-academic-cream-dark rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-academic-cream flex items-center justify-center mx-auto mb-4 text-primary-brown group-hover:bg-primary-brown group-hover:text-white transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-primary-brown mb-1">
              Admission Form
            </h3>
            <p className="text-xs text-gray-500">
              Download guidelines &amp; submit application files online.
            </p>
          </div>

          <div 
            onClick={() => {
              setCurrentPage("academics");
              setTimeout(() => {
                const el = document.getElementById("events-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="p-6 bg-white border border-academic-cream-dark rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-academic-cream flex items-center justify-center mx-auto mb-4 text-primary-brown group-hover:bg-primary-brown group-hover:text-white transition-colors">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-primary-brown mb-1">
              School Calendar
            </h3>
            <p className="text-xs text-gray-500">
              Keep track of exams, PTA meetings, and holiday breaks.
            </p>
          </div>

          <div 
            onClick={() => setCurrentPage("contact")}
            className="p-6 bg-white border border-academic-cream-dark rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-academic-cream flex items-center justify-center mx-auto mb-4 text-primary-brown group-hover:bg-primary-brown group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-primary-brown mb-1">
              Contact Us
            </h3>
            <p className="text-xs text-gray-500">
              Locate our school campus and talk to administrators.
            </p>
          </div>
        </div>
      </section>

      {/* 5. NEWS & EVENTS PREVIEW */}
      <section className="bg-[#FAF6F0] py-16 border-t border-academic-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
                Stay Updated
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary-brown">
                Upcoming School Events
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage("academics")}
              className="text-sm font-display font-bold uppercase tracking-wider text-primary-brown hover:text-academic-gold transition-colors inline-flex items-center space-x-1"
            >
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.map((event) => (
              <div 
                key={event.id}
                className="bg-white p-6 rounded-xl border border-academic-cream-dark shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-56"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-2.5 py-1 bg-academic-cream rounded-md text-[11px] font-display font-bold uppercase tracking-wider text-primary-brown">
                      {event.tag}
                    </span>
                    <span className="flex items-center text-xs text-gray-500 font-mono">
                      <Clock className="w-3.5 h-3.5 text-academic-gold mr-1" />
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-primary-brown leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3">
                    {event.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-academic-cream-dark flex items-center text-xs font-display font-semibold text-academic-gold hover:text-primary-brown cursor-pointer" onClick={() => setCurrentPage("contact")}>
                  <span>Inquire details</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
