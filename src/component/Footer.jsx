import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white w-full overflow-x-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Column 1 - Logo & About */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-2xl sm:text-3xl">🩺</span>
              <span className="text-lg sm:text-xl font-bold text-white">HealthCare</span>
              <span className="text-lg sm:text-xl font-bold text-[#007A55]">Pathology</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Providing accurate, reliable, and affordable diagnostic services with advanced laboratory technology. 
              Our mission is to support healthier lives through trusted medical testing and compassionate patient care.
            </p>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">Follow Us</h4>
              <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                <a href="#" className="bg-white/10 hover:bg-[#007A55] p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#007A55] p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#007A55] p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#007A55] p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 0 12.324 0 6.162 6.162 0 0 0-12.324 0zm2.162 0a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm6.675-4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-[#007A55] p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Home', 'About Us', 'Services', 'Health Packages', 'Gallery', 'Doctors', 'Testimonials', 'FAQ', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-[#007A55] transition-colors duration-300 flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[#007A55] text-sm sm:text-base">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                'Blood Test',
                'Full Body Checkup',
                'Diabetes Screening',
                'Thyroid Test',
                'Heart Health Checkup',
                'Liver Function Test',
                'Kidney Function Test',
                'Vitamin Profile',
                'Home Sample Collection'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-[#007A55] transition-colors duration-300 flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[#007A55] text-sm sm:text-base">›</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Information + Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                <span className="text-[#007A55] text-base sm:text-lg flex-shrink-0">📍</span>
                <span>123 Healthcare Street, Medical City, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                <span className="text-[#007A55] text-base sm:text-lg flex-shrink-0">📞</span>
                <a href="tel:+919876543210" className="hover:text-[#007A55] transition-colors duration-300 break-words">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                <span className="text-[#007A55] text-base sm:text-lg flex-shrink-0">📧</span>
                <a href="mailto:info@healthcarepathology.com" className="hover:text-[#007A55] transition-colors duration-300 break-words">
                  info@healthcarepathology.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                <span className="text-[#007A55] text-base sm:text-lg flex-shrink-0">🕒</span>
                <div>
                  <div>Mon–Sat: 7:00 AM – 8:00 PM</div>
                  <div>Sun: 8:00 AM – 2:00 PM</div>
                </div>
              </li>
            </ul>

            {/* Newsletter Section */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-[10px] sm:text-xs text-gray-400 mb-2 sm:mb-3">
                Stay updated with the latest health tips, diagnostic services, and special offers.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col xs:flex-row gap-2">
                <input
                  type="email"
                  placeholder="📧 Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#007A55] transition-colors duration-300 text-xs sm:text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#007A55] hover:bg-[#006544] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 sm:mt-10 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            {/* Professional Tagline */}
            <p className="text-center text-xs sm:text-sm text-[#007A55] font-medium tracking-wide px-2">
              "Accurate Diagnostics. Trusted Care. Healthier Tomorrow."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-4">
              <p className="text-[10px] sm:text-sm text-gray-400 text-center sm:text-left">
                © {currentYear} HealthCare Pathology. All Rights Reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-sm text-gray-400">
                <a href="#" className="hover:text-[#007A55] transition-colors duration-300 whitespace-nowrap">
                  Privacy Policy
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#007A55] transition-colors duration-300 whitespace-nowrap">
                  Terms & Conditions
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#007A55] transition-colors duration-300 whitespace-nowrap">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;