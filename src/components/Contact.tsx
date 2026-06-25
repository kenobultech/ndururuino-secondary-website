import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Shield, AlertTriangle } from "lucide-react";
import { SCHOOL_INFO } from "../data";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "admission",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "admission",
        message: ""
      });
    }, 1500);
  };

  return (
    <div id="contact-section" className="space-y-20 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HEADER SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-sm font-display font-semibold text-academic-gold uppercase tracking-widest block">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl font-bold text-primary-brown">
          Admissions, Inquiries &amp; Map
        </h1>
        <div className="w-24 h-1 bg-academic-gold mx-auto rounded-full" />
        <p className="text-gray-600 font-sans text-sm">
          Have questions about admission guidelines, school fees, or Junior Secondary School (JSS) CBC progression? Contact our school office today.
        </p>
      </section>

      {/* 2. CONTACT INFORMATION & FORM GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Sidebar - 5 Cols */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 bg-academic-cream rounded-2xl border border-academic-cream-dark shadow-sm space-y-8">
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-primary-brown">
                School Contact Registry
              </h3>
              <p className="text-xs text-gray-500 font-sans">
                Official physical coordinates and telecommunications for school operations.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-academic-gold/20 rounded-xl text-primary-brown shadow-sm shrink-0">
                  <MapPin className="w-5 h-5 text-academic-gold" />
                </div>
                <div className="space-y-1">
                  <span className="block font-display text-xs font-bold uppercase tracking-wider text-primary-brown">Physical Campus</span>
                  <p className="text-xs text-gray-600 leading-normal">
                    {SCHOOL_INFO.address}<br />
                    Huruma Ward, Starehe Sub-County, Nairobi, Kenya.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-academic-gold/20 rounded-xl text-primary-brown shadow-sm shrink-0">
                  <Phone className="w-5 h-5 text-academic-gold" />
                </div>
                <div className="space-y-1">
                  <span className="block font-display text-xs font-bold uppercase tracking-wider text-primary-brown">Phone Hotlines</span>
                  <p className="text-xs text-gray-600 leading-normal">
                    {SCHOOL_INFO.phone}<br />
                    <span className="text-[10px] text-gray-400 font-mono">Principal&apos;s Registrar: Ext 102</span>
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-academic-gold/20 rounded-xl text-primary-brown shadow-sm shrink-0">
                  <Mail className="w-5 h-5 text-academic-gold" />
                </div>
                <div className="space-y-1">
                  <span className="block font-display text-xs font-bold uppercase tracking-wider text-primary-brown">Electronic Mail</span>
                  <p className="text-xs text-gray-600 leading-normal break-all">
                    {SCHOOL_INFO.email}<br />
                    <span className="text-[10px] text-gray-400 font-mono">admissions@ndururunosecondary.sc.ke</span>
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-academic-gold/20 rounded-xl text-primary-brown shadow-sm shrink-0">
                  <Clock className="w-5 h-5 text-academic-gold" />
                </div>
                <div className="space-y-1">
                  <span className="block font-display text-xs font-bold uppercase tracking-wider text-primary-brown">Operating Hours</span>
                  <p className="text-xs text-gray-600 leading-normal">
                    {SCHOOL_INFO.workingHours}<br />
                    <span className="text-[10px] font-semibold text-academic-gold uppercase">Closed on weekends</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-5 bg-primary-brown text-white rounded-xl border-l-4 border-academic-gold text-xs leading-relaxed space-y-2 shadow-sm">
            <h4 className="font-serif font-bold text-academic-gold text-sm flex items-center space-x-1.5">
              <Shield className="w-4 h-4" />
              <span>Public Notice</span>
            </h4>
            <p>
              Visitors and parents wishing to meet the School Principal face-to-face are highly encouraged to book an appointment via phone call before Friday assemblies.
            </p>
          </div>
        </div>

        {/* Contact Form Container - 7 Cols */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-2xl border border-academic-cream-dark shadow-md space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-primary-brown">
                Send Electronic Inquiry
              </h3>
              <p className="text-xs text-gray-500 font-sans">
                Fill in the secure contact dispatch form and receive an official school correspondence.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {errorMsg && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-gray-600">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Kennedy Ominde"
                        className="w-full px-4 py-2.5 bg-academic-cream/40 border border-academic-cream-dark rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-academic-gold transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-gray-600">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="e.g. parent@email.com"
                        className="w-full px-4 py-2.5 bg-academic-cream/40 border border-academic-cream-dark rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-academic-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-gray-600">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="e.g. +254 700 000000"
                        className="w-full px-4 py-2.5 bg-academic-cream/40 border border-academic-cream-dark rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-academic-gold transition-colors"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-gray-600">
                        Inquiry Subject
                      </label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-academic-cream/40 border border-academic-cream-dark rounded-lg text-sm text-gray-800 focus:outline-none focus:border-academic-gold transition-colors"
                      >
                        <option value="admission">Admissions (Form 1 - 4)</option>
                        <option value="jss">Junior Secondary School (JSS)</option>
                        <option value="employment">Careers &amp; Tenders</option>
                        <option value="general">General Institution Inquiries</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-gray-600">
                      Inquiry Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Please write details about your inquiry (e.g. grade entry points, transfer clearance certificate questions)..."
                      className="w-full px-4 py-2.5 bg-academic-cream/40 border border-academic-cream-dark rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-academic-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-primary-brown hover:bg-primary-brown-dark text-white rounded-lg font-display text-xs uppercase tracking-wider font-bold shadow-md transition-colors flex items-center justify-center space-x-2 active:scale-[0.99] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry Form</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="bg-academic-cream rounded-xl p-8 border-2 border-dashed border-academic-gold text-center space-y-4 py-12"
                >
                  <CheckCircle className="w-16 h-16 text-academic-gold mx-auto" />
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-xl text-primary-brown">
                      Form Submitted Successfully!
                    </h3>
                    <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting Ndururuno Secondary School. Your inquiry reference number is <strong className="text-primary-brown">#NSS-2026-{(Math.floor(Math.random() * 9000) + 1000)}</strong>.
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-500 italic max-w-xs mx-auto">
                    A copy of this dispatch has been routed to our Registrar. We generally respond to official emails within 24 - 48 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2 bg-primary-brown hover:bg-primary-brown-dark text-white rounded-lg font-display text-xs uppercase font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAP PLACEHOLDER (STYLISH CARD WITH GPS) */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-serif text-2xl font-bold text-primary-brown">
            Find Us in Huruma, Nairobi
          </h2>
          <p className="text-xs text-gray-500">
            Easily locate Ndururuno Secondary School on Juja Road, near Huruma estate playground.
          </p>
        </div>

        <div className="relative bg-[#FAF6F0] rounded-2xl border border-academic-cream-dark p-4 shadow-md overflow-hidden">
          {/* Styled Google Maps iframe (or beautiful vector mapping representation for Huruma context) */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gray-200 border border-academic-cream-dark">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8504066068225!2d36.858713214753995!3d-1.2621183990793645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16a0fb4012bf%3A0xc665187766ef968!2sNdururuno%20Secondary%20School!5e0!3m2!1sen!2ske!4v1624647391234!5m2!1sen!2ske"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing Ndururuno Secondary School in Huruma, Nairobi"
            />
            {/* Float Info Box */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-academic-cream-dark space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-academic-gold animate-pulse" />
                <span className="font-serif font-bold text-xs text-primary-brown">Ndururuno Secondary Campus</span>
              </div>
              <p className="text-[10px] text-gray-600 leading-normal">
                Situated off Juja Road, Starehe District, Nairobi. Easily accessible by local transit (Matatu routes 4, 46, 14, 17B).
              </p>
              <a 
                href="https://maps.google.com/?q=Ndururuno+Secondary+School+Huruma+Nairobi" 
                target="_blank" 
                rel="noreferrer"
                className="block text-center bg-primary-brown text-white text-[10px] py-1.5 font-display font-semibold uppercase tracking-wider rounded hover:bg-primary-brown-dark"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
