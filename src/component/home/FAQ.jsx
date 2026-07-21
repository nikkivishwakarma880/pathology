import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I book a diagnostic test?",
      answer: "You can easily book a diagnostic test through our website by clicking on the 'Book Now' button, or by calling our support team directly. We'll guide you through the process and schedule a convenient time for your test."
    },
    {
      question: "Do you provide home sample collection?",
      answer: "Yes, we provide home sample collection services for your convenience. Our trained phlebotomists will visit your home at a scheduled time to collect the samples, ensuring safety and hygiene standards are maintained."
    },
    {
      question: "How long does it take to receive reports?",
      answer: "Most test reports are available within 24-48 hours after sample collection. For specialized tests, it may take 3-5 days. You'll receive a notification via email or SMS when your reports are ready."
    },
    {
      question: "Can I download my reports online?",
      answer: "Absolutely! Once your reports are ready, you can log in to your account on our website and download them in PDF format. You can also access your historical reports anytime."
    },
    {
      question: "Are your reports accurate?",
      answer: "Yes, we maintain the highest standards of accuracy and reliability. Our laboratories are NABL accredited and we follow strict quality control measures. We use state-of-the-art equipment and highly qualified professionals."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, net banking, UPI, and digital wallets. You can also pay through cash or cheque for home collection services."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#007A55]">✦</span>
            <span className="text-[#007A55] font-semibold text-sm">FAQ</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to commonly asked questions about our services
          </p>
        </div>

        {/* Two Column Layout - Updated with items-stretch for equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column - FAQ Accordion */}
          <div className="space-y-4 flex flex-col">
            <div className="space-y-4 flex-grow">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#007A55]"
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#007A55] text-xl">❓</span>
                      <span className="font-semibold text-gray-800">
                        {faq.question}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-[#007A55] ml-4 flex-shrink-0">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Card with Image */}
            <div className="bg-white rounded-2xl shadow-lg p-5 border-2 border-[#007A55] relative overflow-hidden mt-6">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#007A55]/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#007A55]/5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&auto=format&fit=crop&q=60"
                    alt="Support Team"
                    className="w-20 h-20 rounded-xl object-cover border-2 border-[#007A55]/30 shadow-md"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">💬</span>
                    <h3 className="text-gray-800 font-semibold text-base">
                      Need help? Contact our support team
                    </h3>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3 bg-[#F8FBFF] rounded-xl px-3 py-2 hover:bg-[#007A55]/5 transition-all duration-300">
                      <span className="text-[#007A55] text-lg">📞</span>
                      <span className="text-gray-700 font-medium text-sm">+1 234 567 890</span>
                    </div>
                    <div className="flex items-center gap-3 bg-[#F8FBFF] rounded-xl px-3 py-2 hover:bg-[#007A55]/5 transition-all duration-300">
                      <span className="text-[#007A55] text-lg">✉️</span>
                      <span className="text-gray-700 font-medium text-sm">support@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FIX APPLIED HERE */}
          <div className="h-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full h-full flex flex-col relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#007A55]/5 rounded-full z-0"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#007A55]/5 rounded-full z-0"></div>
              
              {/* Image Container - takes up remaining dynamic height and forces cover */}
              <div className="relative flex-1 w-full min-h-[300px] mb-6 z-10">
                <img
                  src="https://t4.ftcdn.net/jpg/06/36/26/39/360_F_636263973_kDxg5jhyBe3u6zbclEziuEwPyObF9MAG.jpg"
                  alt="Doctor and Lab Illustration"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-inner"
                />
                {/* Floating badges */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-[#007A55] shadow-lg flex items-center gap-2 z-20">
                  <span>🏥</span> Trusted Labs
                </div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-[#007A55] shadow-lg flex items-center gap-2 z-20">
                  <span>⭐</span> 98% Accuracy
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 z-10">
                <div className="text-center bg-[#F8FBFF] rounded-xl py-3 px-2 border border-[#007A55]/10">
                  <div className="text-2xl font-bold text-[#007A55]">50K+</div>
                  <div className="text-xs text-gray-500">Tests Done</div>
                </div>
                <div className="text-center bg-[#F8FBFF] rounded-xl py-3 px-2 border border-[#007A55]/10">
                  <div className="text-2xl font-bold text-[#007A55]">4.9</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div className="text-center bg-[#F8FBFF] rounded-xl py-3 px-2 border border-[#007A55]/10">
                  <div className="text-2xl font-bold text-[#007A55]">100+</div>
                  <div className="text-xs text-gray-500">Cities</div>
                </div>
              </div>

              {/* Quick Support Badge */}
              <div className="mt-4 p-3 bg-[#F8FBFF] rounded-xl border border-[#007A55]/20 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🕐</span>
                  <span className="text-sm text-gray-600">24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs text-green-600 font-semibold">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center max-w-3xl mx-auto border-2 border-[#007A55] relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#007A55] to-[#00A87D]"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#007A55]/5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#007A55]/5 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-3xl">💙</span>
              <h2 className="text-2xl font-bold text-gray-800">
                Still Have Questions?
              </h2>
            </div>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              If you couldn't find the answer you're looking for, our friendly support team is always ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#007A55] hover:bg-[#006544] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
                <span>📞</span> Call Us Now
              </button>
              <button className="bg-white border-2 border-[#007A55] hover:bg-[#007A55]/10 text-[#007A55] px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5">
                <span>📅</span> Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;