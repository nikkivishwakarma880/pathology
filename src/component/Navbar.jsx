import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronDown, 
  Search, 
  User, 
  Droplet, 
  Menu, 
  X 
} from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Packages', href: '#' },
    { name: 'Home Collection', href: '#' },
    { name: 'Doctors', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const services = [
    { name: 'Health Checkup', href: '#' },
    { name: 'Pathology Tests', href: '#' },
    { name: 'Radiology & Imaging', href: '#' },
    { name: 'Cardiology Services', href: '#' },
  ];

  return (
    <header className="w-full font-sans shadow-sm sticky top-0 z-50 bg-white">
      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-slate-900 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-500" /> Lucknow
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-500" /> 7 AM–9 PM
            </span>
          </div>
          
          {/* Right Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-emerald-500" /> +91 98765 43210
            </a>
            <a href="mailto:support@email.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-emerald-500" /> support@email.com
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-emerald-600 text-white p-2 rounded-lg">
            <span className="text-xl font-bold">🩺</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800">
            Life<span className="text-emerald-600">Care</span>
          </span>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-6 text-slate-600 font-medium">
          <a href="#" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">About</a>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onBlur={() => setTimeout(() => setIsServicesOpen(false), 200)}
              className="flex items-center gap-1 hover:text-emerald-600 transition-colors focus:outline-none"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
                {services.map((service, index) => (
                  <a 
                    key={index} 
                    href={service.href} 
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {navigationLinks.slice(2).map((link, index) => (
            <a key={index} href={link.href} className="hover:text-emerald-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-slate-100 rounded-full transition-all" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all">
            <User className="w-4 h-4 text-emerald-600" />
            <span>Patient Login</span>
          </button>
          
          <button className="flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-full font-medium shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            <Droplet className="w-4 h-4 fill-current animate-pulse" />
            <span>Book a Test</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button className="p-2 text-slate-500 hover:text-emerald-600 rounded-full" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4 shadow-inner">
          <div className="flex flex-col space-y-3 font-medium text-slate-700">
            <a href="#" className="hover:text-emerald-600 py-1">Home</a>
            <a href="#" className="hover:text-emerald-600 py-1">About</a>
            
            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center hover:text-emerald-600 py-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                  {services.map((service, index) => (
                    <a key={index} href={service.href} className="block text-sm text-slate-500 hover:text-emerald-600 py-1">
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navigationLinks.slice(2).map((link, index) => (
              <a key={index} href={link.href} className="hover:text-emerald-600 py-1">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-slate-700 font-medium bg-slate-50">
              <User className="w-4 h-4 text-emerald-600" />
              <span>Patient Login</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl font-medium shadow-md shadow-emerald-600/15">
              <Droplet className="w-4 h-4 fill-current" />
              <span>Book a Test</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;