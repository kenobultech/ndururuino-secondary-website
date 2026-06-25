import { motion } from "motion/react";
import { VISION_MISSION, ADMIN_TEAM, SCHOOL_INFO } from "../data";
import { Shield, BookOpen, Target, Award, CheckCircle, GraduationCap } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="space-y-24 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HEADER SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
          Who We Are
        </span>
        <h1 className="font-serif text-4xl font-bold text-primary-brown">
          History, Vision &amp; Governance
        </h1>
        <div className="w-24 h-1 bg-academic-gold mx-auto rounded-full" />
        <p className="text-gray-600 font-sans text-sm">
          A traditional, public mixed day school built to nurture talents, inspire brilliance, and enrich local livelihoods within Huruma, Starehe.
        </p>
      </section>

      {/* 2. HISTORY, VISION & MISSION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* History Left */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-academic-cream border border-academic-gold/20 text-primary-brown">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-primary-brown">
              Our Journey Since 1984
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed text-justify">
            {VISION_MISSION.history}
          </p>
          
          <div className="p-6 bg-academic-cream rounded-xl border border-academic-gold/20 space-y-3">
            <h4 className="font-display font-semibold text-xs text-academic-gold uppercase tracking-widest">
              Core Institutional Mandate
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed italic">
              &ldquo;We are committed to maintaining a mixed gender public learning facility that ensures that secondary education remains affordable, secure, and accessible to the brilliant minds of Starehe without compromising on quality or discipline.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission Right */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Vision Box */}
          <div className="p-8 bg-white border border-academic-cream-dark shadow-sm rounded-xl space-y-4">
            <div className="flex items-center space-x-3 text-academic-gold">
              <Target className="w-6 h-6 shrink-0" />
              <h3 className="font-serif text-lg font-bold text-primary-brown">Our Vision</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {VISION_MISSION.vision}
            </p>
          </div>

          {/* Mission Box */}
          <div className="p-8 bg-white border border-academic-cream-dark shadow-sm rounded-xl space-y-4">
            <div className="flex items-center space-x-3 text-academic-gold">
              <BookOpen className="w-6 h-6 shrink-0" />
              <h3 className="font-serif text-lg font-bold text-primary-brown">Our Mission</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {VISION_MISSION.mission}
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. INTEGRATED JUNIOR SECONDARY SCHOOL (JSS) HIGHLIGHT */}
      <section className="bg-primary-brown text-white p-8 sm:p-12 rounded-2xl shadow-xl relative overflow-hidden border-r-4 border-academic-gold">
        {/* Dynamic Abstract Accents */}
        <div className="absolute right-0 top-0 w-32 h-32 bg-academic-gold/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 bg-academic-gold/20 border border-academic-gold/40 rounded-full text-xs font-display font-semibold uppercase tracking-wider text-academic-gold">
              CBC Transitions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Integrated Junior Secondary School (JSS) Wing
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed max-w-3xl">
              Ndururuno is fully compliant with Kenya's Competency-Based Curriculum (CBC). Our JSS wing operates smoothly as an integrated unit within the main campus, enabling Grade 7 and Grade 8 learners to utilize our fully modernized science labs, advanced computer centers, and spacious athletic infrastructure under specialized, trained tutors.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-200 pt-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-academic-gold shrink-0" />
                <span>CBC Compliant Technical Pre-Vocational Labs</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-academic-gold shrink-0" />
                <span>Specialist Lower Secondary Transition Coordinators</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-academic-gold shrink-0" />
                <span>Mentorship Program for Day Scholars</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-academic-gold shrink-0" />
                <span>Holistic Talents &amp; Creative Arts Curriculum</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-primary-brown-dark/70 border border-primary-brown-light p-6 rounded-xl text-center max-w-sm space-y-4 w-full shadow-lg">
              <GraduationCap className="w-12 h-12 text-academic-gold mx-auto" />
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-white">CBC Enrollment Info</h4>
                <p className="text-[11px] text-gray-300">Grade 7 and Grade 8 registration remains active with available space allocations.</p>
              </div>
              <button 
                onClick={() => {
                  const contactEl = document.getElementById("contact-section");
                  if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-2 bg-academic-gold hover:bg-academic-gold-hover text-primary-brown-dark rounded-md font-display text-xs font-bold uppercase tracking-wider"
              >
                Inquire JSS Openings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHOOL GOVERNANCE & STAFF */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
            School Governance
          </span>
          <h2 className="font-serif text-3xl font-bold text-primary-brown">
            Our Senior Administration Team
          </h2>
          <div className="w-16 h-1 bg-academic-gold mx-auto rounded-full" />
          <p className="text-gray-600 font-sans text-xs">
            Committed education officers driving administrative integrity, academic standards, and curriculum excellence.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ADMIN_TEAM.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white rounded-xl border border-academic-cream-dark shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 border-b border-academic-cream-dark">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-primary-brown/90 border border-academic-gold/30 rounded-md">
                    <span className="text-[10px] font-display font-bold text-academic-gold uppercase tracking-wider">
                      Faculty
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-base text-primary-brown leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-display text-xs text-academic-gold font-semibold uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="text-[11px] text-gray-500 font-mono bg-academic-cream p-2.5 rounded-lg border border-academic-cream-dark leading-snug">
                  {member.qualification}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
