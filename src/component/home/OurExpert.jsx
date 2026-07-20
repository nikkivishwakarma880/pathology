import React from 'react';
import { FaLinkedin, FaEnvelope, FaUserMd, FaHeartbeat, FaMicroscope, FaUserTie } from 'react-icons/fa';

const OurExpert = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      designation: "Chief Pathologist",
      description: "With over 15 years of experience in clinical pathology, Dr. Sarah specializes in laboratory diagnostics, disease detection, and quality assurance.",
      specialization: "Clinical Pathology Expert",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      icon: <FaUserMd className="text-[#007A55] text-xs" />,
      bgColor: "bg-[#007A55]/10",
      btnBg: "bg-[#007A55] hover:bg-[#006344]",
      accentColor: "border-[#007A55]",
      textColor: "text-[#007A55]",
      hoverColor: "hover:text-[#007A55]",
      experience: "15+ Years Experience",
    },
    {
      id: 2,
      name: "Dr. Michael Anderson",
      designation: "Senior Laboratory Specialist",
      description: "Dr. Michael has extensive expertise in hematology, microbiology, and biochemical diagnostics. His attention to detail ensures accurate testing.",
      specialization: "Hematology Specialist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      icon: <FaMicroscope className="text-[#FF3174] text-xs" />,
      bgColor: "bg-[#FF3174]/10",
      btnBg: "bg-[#FF3174] hover:bg-[#e62a68]",
      accentColor: "border-[#FF3174]",
      textColor: "text-[#FF3174]",
      hoverColor: "hover:text-[#FF3174]",
      experience: "12+ Years Experience",
    },
    {
      id: 3,
      name: "Dr. Emily Carter",
      designation: "Diagnostic Consultant",
      description: "An expert in preventive healthcare and diagnostic medicine, Dr. Emily focuses on early disease detection and personalized patient care.",
      specialization: "Preventive Healthcare Expert",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
      icon: <FaHeartbeat className="text-[#007A55] text-xl" />,
      bgColor: "bg-[#007A55]/10",
      btnBg: "bg-[#007A55] hover:bg-[#006344]",
      accentColor: "border-[#007A55]",
      textColor: "text-[#007A55]",
      hoverColor: "hover:text-[#007A55]",
      experience: "10+ Years Experience",
    },
    {
      id: 4,
      name: "Dr. David Wilson",
      designation: "Medical Laboratory Director",
      description: "Dr. David oversees laboratory operations while maintaining international quality standards. His leadership ensures excellence in every diagnostic service.",
      specialization: "Laboratory Management Expert",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
      icon: <FaUserTie className="text-[#FF3174] text-xs" />,
      bgColor: "bg-[#FF3174]/10",
      btnBg: "bg-[#FF3174] hover:bg-[#e62a68]",
      accentColor: "border-[#FF3174]",
      textColor: "text-[#FF3174]",
      hoverColor: "hover:text-[#FF3174]",
      experience: "18+ Years Experience",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-sm font-semibold text-[#007A55] uppercase tracking-wider mb-2">
          Meet Our Expert Doctors & Pathologists
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Expert Doctors & Pathologists
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#007A55] to-[#FF3174] mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our team of experienced doctors and certified pathologists is committed to delivering 
          accurate diagnoses and exceptional patient care. With years of expertise and advanced 
          medical knowledge, we ensure every test is performed with precision and every report 
          is reviewed with the highest standards of quality.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative border ${
                index % 2 === 0 ? 'border-[#007A55]/20' : 'border-[#FF3174]/20'
              }`}
            >
              {/* Experience Badge */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                <span className={`${doctor.bgColor} ${doctor.textColor} px-3 py-1 rounded-full text-xs font-bold shadow-sm whitespace-nowrap border border-white/50`}>
                  {doctor.experience}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-14 flex flex-col items-center">
                
                {/* Image Container */}
                <div className="relative w-28 h-28 mt-2">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className={`w-28 h-28 rounded-full object-cover border-4 ${doctor.accentColor} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  />
                  
                  {/* Small icon badge at bottom right */}
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                    <div className={`w-7 h-7 rounded-full ${doctor.bgColor} flex items-center justify-center`}>
                      {doctor.icon}
                    </div>
                  </div>
                </div>

                {/* Name & Designation */}
                <h3 className={`text-xl font-bold text-gray-900 mt-5 text-center ${doctor.hoverColor} transition-colors duration-300`}>
                  {doctor.name}
                </h3>
                <p className={`text-sm font-medium ${doctor.textColor} mb-3`}>
                  {doctor.designation}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm text-justify leading-relaxed mb-4 min-h-[60px]">
                  {doctor.description}
                </p>

                {/* Specialization - Margin mb-5 se mb-3 kiya hai taaki neeche ki cheezein upar khisken */}
                <div className={`${doctor.bgColor} ${doctor.textColor} px-4 py-2 rounded-full text-xs font-semibold mb-3 w-full text-center shadow-sm`}>
                  {doctor.specialization}
                </div>

                {/* Social Icons & View Profile Button - gap aur padding kam karke upar khiska diya gaya hai */}
                <div className="w-full flex flex-col items-center gap-1 pt-2 border-t border-gray-100">
                  {/* Social Icons */}
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className={`${doctor.textColor} hover:bg-gray-100 rounded-full transition-colors duration-200`}
                      aria-label="LinkedIn"
                    >
                      {/* Icons rendering conditional wrapper can go here */}
                    </a>
                    <a
                      href="#"
                      className={`${doctor.textColor} hover:bg-gray-100 rounded-full transition-colors duration-200`}
                      aria-label="Email"
                    >
                      {/* Icons rendering conditional wrapper can go here */}
                    </a>
                  </div>
                  
                  {/* View Profile Button */}
                  <button className={`${doctor.btnBg} text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[180px]`}>
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#007A55]/10 to-[#FF3174]/10 rounded-3xl p-10 md:p-16 shadow-lg border border-[#007A55]/20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Medical Experts You Can Rely On
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Our experienced healthcare professionals are dedicated to delivering accurate diagnostic 
            services with compassion, integrity, and the latest laboratory technology.
          </p>
          <button className="bg-gradient-to-r from-[#007A55] to-[#FF3174] hover:from-[#006344] hover:to-[#e62a68] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3">
            <span>👉</span>
            <span>Meet Our Team</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurExpert;