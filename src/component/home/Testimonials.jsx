import React from 'react';
import { FaQuoteLeft, FaStar, FaUserCircle, FaAward, FaFlask, FaSmile, FaCheckCircle } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Patient",
      review: "The entire testing process was smooth and professional. The staff was very supportive, and I received my reports on time. I highly recommend this diagnostic center.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      themeColor: "text-[#007A55]",
      bgColor: "bg-[#007A55]/5",
      borderColor: "border-[#007A55]/20"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Business Professional",
      review: "Excellent laboratory services with modern equipment. The home sample collection was convenient, and the reports were easy to access online.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      themeColor: "text-[#FF3174]",
      bgColor: "bg-[#FF3174]/5",
      borderColor: "border-[#FF3174]/20"
    },
    {
      id: 3,
      name: "Anjali Singh",
      role: "Teacher",
      review: "Very clean facility and highly experienced medical staff. The reports were accurate, and the doctors explained everything clearly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      themeColor: "text-[#007A55]",
      bgColor: "bg-[#007A55]/5",
      borderColor: "border-[#007A55]/20"
    },
    {
      id: 4,
      name: "Amit Kumar",
      role: "Software Engineer",
      review: "Booking an appointment was quick and simple. The technicians were polite, and the overall experience exceeded my expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      themeColor: "text-[#FF3174]",
      bgColor: "bg-[#FF3174]/5",
      borderColor: "border-[#FF3174]/20"
    }
  ];

  const stats = [
    { id: 1, number: "50,000+", title: "Happy Patients", icon: <FaSmile className="text-[#007A55] text-2xl" /> },
    { id: 2, number: "25+", title: "Expert Doctors", icon: <FaAward className="text-[#FF3174] text-2xl" /> },
    { id: 3, number: "100+", title: "Diagnostic Tests", icon: <FaFlask className="text-[#007A55] text-2xl" /> },
    { id: 4, number: "99%", title: "Customer Satisfaction", icon: <FaCheckCircle className="text-[#FF3174] text-2xl" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-sm font-semibold text-[#007A55] uppercase tracking-wider mb-2">
          What Our Patients Say
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Patient Testimonials
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#007A55] to-[#FF3174] mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are proud to provide accurate diagnostic services and compassionate patient care. 
          Here's what our patients have to say about their experience with us.
        </p>
      </div>

      {/* Testimonials 4-Card Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border ${item.borderColor} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Quote Icon at Top Right */}
              <div className="absolute top-4 right-4 text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                <FaQuoteLeft className="w-8 h-8 transform rotate-180" />
              </div>

              <div>
                {/* 5 Stars Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 w-4 h-4" />
                  ))}
                </div>

                {/* Patient Feedback Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Patient Meta Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007A55] transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-xs font-medium text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Trust Statistics Section */}
      <div className="max-w-7xl mx-auto mb-20 bg-white rounded-3xl shadow-md border border-gray-100 p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-gray-50 rounded-2xl shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900">
                {stat.number}
              </h3>
              <p className="text-sm font-semibold text-gray-500">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-[#007A55]/10 to-[#FF3174]/10 rounded-3xl p-8 md:p-12 border border-[#007A55]/20 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Trusted by Thousands of Happy Patients
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
          Our commitment to accurate diagnostics, timely reports, and compassionate care has 
          earned the trust of thousands of patients and healthcare professionals.
        </p>
        
        {/* Solid Single Color/Gradient Button aligned with OurExpert Style */}
        <button className="bg-gradient-to-r from-[#007A55] to-[#FF3174] hover:from-[#006344] hover:to-[#e62a68] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
          <span>⭐</span>
          <span>Read More Reviews</span>
        </button>
      </div>

    </div>
  );
};

export default Testimonials;