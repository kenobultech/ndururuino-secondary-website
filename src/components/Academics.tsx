import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEPARTMENTS, CO_CURRICULAR_ACTIVITIES } from "../data";
import { BookOpen, UserCheck, BarChart2, Star, Trophy, Award, Landmark, Sparkles, Smile } from "lucide-react";

const schoolSports = "/src/assets/images/school_sports_1782422155262.jpg";

export default function Academics() {
  const [activeTab, setActiveTab] = useState(DEPARTMENTS[0].id);

  const selectedDept = DEPARTMENTS.find(dept => dept.id === activeTab) || DEPARTMENTS[0];

  return (
    <div className="space-y-24 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HEADER SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
          Curriculum &amp; Co-Curriculars
        </span>
        <h1 className="font-serif text-4xl font-bold text-primary-brown">
          Academic Departments &amp; Talents
        </h1>
        <div className="w-24 h-1 bg-academic-gold mx-auto rounded-full" />
        <p className="text-gray-600 font-sans text-sm">
          A rigorous academic program designed for National Examination success paired with creative co-curricular spaces that foster outstanding individual talents.
        </p>
      </section>

      {/* 2. ACADEMIC DEPARTMENTS (SLEEK TABS) */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-primary-brown">
            Academic Curriculum
          </h2>
          <p className="text-xs text-gray-500 font-sans mt-1">
            Explore our specialized subjects, dedicated teachers, and department-specific focus areas.
          </p>
        </div>

        {/* Tab Buttons Container */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-academic-cream-dark pb-4">
          {DEPARTMENTS.map((dept) => {
            const isActive = activeTab === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`px-5 py-3 rounded-lg font-display text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-primary-brown text-white shadow-md scale-105"
                    : "bg-academic-cream text-primary-brown hover:bg-academic-cream-dark"
                }`}
              >
                {dept.name}
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content with Animation */}
        <div className="bg-academic-cream rounded-2xl p-6 sm:p-10 border border-academic-cream-dark shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Department Overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-primary-brown">
                    {selectedDept.name}
                  </h3>
                  <div className="inline-flex items-center space-x-2 bg-white/80 border border-academic-gold/20 px-3.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 shadow-sm">
                    <UserCheck className="w-4 h-4 text-academic-gold shrink-0" />
                    <span>Head of Department: <strong className="text-primary-brown">{selectedDept.hod}</strong></span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {selectedDept.description}
                </p>

                {/* Subject List tags */}
                <div className="space-y-3">
                  <h4 className="font-display font-semibold text-xs text-academic-gold uppercase tracking-widest">
                    Subject Syllabus Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDept.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1.5 bg-white border border-academic-cream-dark rounded-md text-xs font-sans text-gray-700 shadow-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Department Stats Card */}
              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-academic-cream-dark shadow-md space-y-6">
                <h4 className="font-serif font-bold text-primary-brown text-lg border-b border-academic-cream-dark pb-3 flex items-center space-x-2">
                  <BarChart2 className="w-5 h-5 text-academic-gold" />
                  <span>Department Milestones</span>
                </h4>
                <div className="space-y-4">
                  {selectedDept.stats && selectedDept.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5 bg-academic-cream rounded-lg border border-academic-cream-dark">
                      <span className="text-xs text-gray-600 font-medium">{stat.label}</span>
                      <span className="text-sm font-display font-bold text-primary-brown bg-white border border-academic-gold/20 px-2.5 py-1 rounded">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                  <div className="p-3 bg-academic-gold/5 rounded-lg text-[10px] text-academic-gold font-mono leading-normal text-center">
                    All coursework aligns fully with KNEC Assessment and KCSE syllabus.
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 3. CO-CURRICULAR ACTIVITIES & TALENTS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Sports Banner & Achievement Highlight */}
        <div className="lg:col-span-5 space-y-6 relative">
          <div className="absolute inset-0 bg-academic-gold rounded-2xl rotate-2 scale-98 pointer-events-none" />
          <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-academic-cream-dark overflow-hidden">
            <img 
              src={schoolSports} 
              alt="School athletics team" 
              className="w-full h-auto object-cover rounded-xl aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 space-y-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-display font-semibold text-academic-gold uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                <span>County Champions</span>
              </span>
              <h4 className="font-serif font-bold text-primary-brown">Ndururuno Sports Powerhouse</h4>
              <p className="text-xs text-gray-500 leading-normal">
                Winning continuous laurels in Starehe district football tournaments and national athletics events.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Co-Curricular items */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
              Beyond Academics
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary-brown">
              Talent Development, Sports &amp; Clubs
            </h2>
            <div className="w-16 h-1 bg-academic-gold rounded-full" />
            <p className="text-gray-600 font-sans text-sm">
              Education doesn&apos;t end in the classroom. Our vibrant sports, drama, and technical societies enable students to discover passions, master teamwork, and express creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CO_CURRICULAR_ACTIVITIES.map((item, index) => (
              <div 
                key={index}
                className="p-5 bg-white rounded-xl border border-academic-cream-dark shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 bg-academic-cream rounded-md text-primary-brown">
                    {item.category === "sports" ? <Trophy className="w-5 h-5 text-academic-gold" /> : item.category === "arts" ? <Sparkles className="w-5 h-5 text-academic-gold" /> : <Smile className="w-5 h-5 text-academic-gold" />}
                  </div>
                  <h3 className="font-serif font-bold text-base text-primary-brown leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
                {item.achievements && item.achievements.length > 0 && (
                  <div className="bg-academic-cream/40 p-2.5 rounded-lg border border-academic-cream-dark space-y-1">
                    <span className="block text-[9px] font-display font-bold uppercase tracking-wider text-academic-gold">Recent Achievements</span>
                    {item.achievements.map((ach, idx) => (
                      <span key={idx} className="block text-[10px] text-gray-700 font-medium">
                        &bull; {ach}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
