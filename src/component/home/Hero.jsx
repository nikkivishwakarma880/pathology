import React from 'react';
import { Package, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
// updated to your new video file name
import heroVideo from '../../assets/hr.mp4';

const Hero = () => {
  const stats = [
    { value: '250K+', label: 'Tests Completed' },
    { value: '50+', label: 'Expert Pathologists' },
    { value: '98%', label: 'Patient Satisfaction' },
    { value: '24/7', label: 'Online Report Access' },
  ];

  const bottomCards = [
    { icon: '🩸', title: 'Blood Tests', desc: 'Accurate pathology insights.' },
    { icon: '🧬', title: 'Full Body Checkup', desc: 'Comprehensive health monitoring.' },
    { icon: '🔬', title: 'Diagnostic Services', desc: 'Advanced imaging & scans.' },
    { icon: '🚗', title: 'Home Collection', desc: 'Hygienic home sample pickup.' },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white font-sans">
      
      {/* ================= BACKGROUND LOCAL VIDEO & OVERLAY ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blue/Dark Premium Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-[1px]"
        style={{ backgroundColor: 'rgba(10, 30, 60, 0.6)' }}
      />

      {/* ================= HERO CONTENT WRAPPER ================= */}
      <div className="relative z-20 flex-grow max-w-7xl w-full mx-auto px-6 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Main Text, Actions */}
        <div className="lg:col-span-8 flex flex-col space-y-7 text-left">
          
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-2 rounded-full text-xs font-semibold tracking-wide w-fit backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Trusted Diagnostic Laboratory Since 2010
          </div>

          {/* Main Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Accurate Reports.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Advanced Diagnostics.
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-lg sm:text-xl text-slate-100 font-normal max-w-2xl leading-relaxed">
            Reliable pathology services with state-of-the-art technology and expert professionals. 
            Your health deserves precision, speed, and care.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
              <span>🩸 Book a Test</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 backdrop-blur-sm">
              <Package className="w-5 h-5 text-emerald-400" />
              <span>Explore Packages</span>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Glassmorphic Floating Accreditation Cards */}
        <div className="lg:col-span-4 hidden lg:flex flex-col space-y-4 items-end">
          {[
            'NABL Certified Lab',
            'Same-Day Reports',
            'Home Collection'
          ].map((text, idx) => (
            <div 
              key={idx} 
              className="w-full max-w-xs bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <div className="bg-emerald-500/20 p-2 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-semibold text-slate-100 text-sm tracking-wide">{text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ================= HERO FOOTER & METRICS ZONE ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-12 space-y-10">
        
        {/* Counter Matrix Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center border-r last:border-0 border-white/10 px-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">{stat.value}</div>
              <div className="text-sm sm:text-base text-slate-200 mt-1.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom White Cards Segment with Advanced Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bottomCards.map((card, idx) => (
            <div 
              key={idx}
              className="group bg-white border border-slate-100 hover:border-emerald-500/40 p-6 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer flex flex-col items-start"
            >
              {/* Icon Container with Custom Hover Background Color Change */}
              <div className="text-4xl mb-4 bg-slate-100 group-hover:bg-emerald-50 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 ease-in-out">
                {card.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {card.title}
              </h3>
              
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {card.desc}
              </p>
              
              <div className="text-emerald-600 font-semibold text-sm mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;