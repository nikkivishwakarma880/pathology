// ContactCTA.jsx
import React from "react";

const ContactCTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-0">
      {/* Main CTA Section */}
      <div className="bg-[#007A55] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Take Charge of Your Health Today
        </h2>
        <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Book your diagnostic test with confidence and experience accurate healthcare services from trusted professionals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-[#007A55] hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition duration-200 shadow-lg hover:shadow-xl">
            Book a Test
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#007A55] font-semibold py-3 px-8 rounded-xl transition duration-200">
            Call Now
          </button>
        </div>
      </div>

      {/* Additional Info Cards with Hover and Click (Active) effects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        
        {/* 24/7 Support Card */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-[#588b81] text-center group cursor-pointer select-none transition-all duration-150 active:scale-95 active:shadow-md active:border-gray-300">
          {/* Icon styling */}
          <div className="text-3xl mb-4 bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-[#7fb9ad] group-active:scale-90">
            📞
          </div>
          <h3 className="font-semibold text-gray-800">24/7 Support</h3>
          <p className="text-sm text-[#0aa788] mt-1">Call us anytime for assistance</p>
        </div>

        {/* NABL Accredited Card */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-[#588b81] text-center group cursor-pointer select-none transition-all duration-150 active:scale-95 active:shadow-md active:border-gray-300">
          <div className="text-3xl mb-4 bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-[#7fb9ad] group-active:scale-90">
            🏥
          </div>
          <h3 className="font-semibold text-gray-800">NABL Accredited</h3>
          <p className="text-sm text-[#0aa788]  mt-1">Internationally certified labs</p>
        </div>

        {/* Online Reports Card */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-[#588b81] text-center group cursor-pointer select-none transition-all duration-150 active:scale-95 active:shadow-md active:border-gray-300">
          <div className="text-3xl mb-4 bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-[#7fb9ad] group-active:scale-90">
            💻
          </div>
          <h3 className="font-semibold text-gray-800">Online Reports</h3>
          <p className="text-sm text-[#0aa788] mt-1">Download reports anytime</p>
        </div>

      </div>
    </div>
  );
};

export default ContactCTA;