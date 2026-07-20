import React from 'react';
import { 
  ShieldCheck, 
  Microscope, 
  Users, 
  FileCheck, 
  Truck, 
  HeartHandshake,
  Award,
  FlaskConical,
  Clock,
  ThumbsUp,
  ArrowRight
} from 'lucide-react';

const AboutUs = () => {
  // Statistics data
  const stats = [
    { value: '15+', label: 'Years of Experience', icon: Clock },
    { value: '250K+', label: 'Tests Conducted', icon: FlaskConical },
    { value: '50+', label: 'Expert Professionals', icon: Users },
    { value: '98%', label: 'Patient Satisfaction', icon: ThumbsUp },
  ];

  // Highlights data
  const highlights = [
    { icon: ShieldCheck, text: 'Accurate & Reliable Results' },
    { icon: Microscope, text: 'Advanced Laboratory Tech' },
    { icon: Users, text: 'Experienced Pathologists' },
    { icon: FileCheck, text: 'Fast Digital Reports' },
    { icon: Truck, text: 'Home Collection Available' },
    { icon: HeartHandshake, text: 'Patient-Centered Care' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/40 to-white">
      {/* Main About Section */}
      <div className="container mx-auto px-6 py-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image Only (No Play Button Center Overlay) */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://www.rasayanika.com/wp-content/uploads/2019/01/shutterstock_1096015838.jpg"
                alt="Modern Laboratory"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Soft Subtle Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                <Award className="w-4 h-4 text-[#00BC7D]" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Accredited Lab</span>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#00BC7D] rounded-full opacity-5 blur-2xl pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-600 rounded-full opacity-5 blur-2xl pointer-events-none" />
          </div>

          {/* Right Column - Concise Content */}
          <div className="space-y-6">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-[#00BC7D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              About Our Laboratory
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Trusted Diagnostics. <br />
              <span className="text-[#00BC7D]">Commitment to Excellence.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base">
              We provide highly precise, reliable, and swift pathology testing services to support accurate medical evaluations. Using state-of-the-art diagnostic technology, our dedicated expert team ensures each process meets top healthcare safety standards.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="bg-emerald-50 p-2 rounded-xl group-hover:bg-emerald-100/80 transition-colors">
                    <item.icon className="w-4 h-4 text-[#00BC7D]" />
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#00BC7D] hover:bg-emerald-600 text-white px-7 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-md hover:-translate-y-0.5">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#00BC7D] border-2 border-[#00BC7D]/30 hover:border-[#00BC7D] px-7 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5">
                Discover Services
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-2">
                <div className="bg-slate-50 p-2 rounded-xl">
                  <stat.icon className="w-6 h-6 text-[#00BC7D]" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Section (Subtle Soft Tint Colors) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-emerald-50/60 border border-emerald-100/70 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <span className="text-xl">🎯</span> Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              To deliver accurate, secure, and smart diagnostic solutions that empower clinicians and patients to make better, faster, and well-informed medical treatment plans.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-teal-50/70 border border-teal-100/70 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-teal-900 mb-2 flex items-center gap-2">
              <span className="text-xl">🌍</span> Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              To innovate modern diagnostics standards by combining absolute clinical technology accuracy, warm compassionate care, and seamless service delivery.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 items-center opacity-70">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <ShieldCheck className="w-4 h-4 text-[#00BC7D]" />
            <span>ISO Certified</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <Award className="w-4 h-4 text-[#00BC7D]" />
            <span>NABL Accredited</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <HeartHandshake className="w-4 h-4 text-[#09d591]" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;